export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const apiKey = Netlify.env.get("OPENAI_API_KEY");
  if (!apiKey) return new Response("OPENAI_API_KEY is not configured", { status: 503 });

  try {
    const { images } = await req.json();
    if (!Array.isArray(images) || images.length < 1 || images.length > 8) {
      return new Response("Provide between 1 and 8 images", { status: 400 });
    }

    const content = [{
      type: "input_text",
      text: `These are overlapping photographs of one home bar. Identify visible beverage bottles, cocktail modifiers, bitters and packaged mixers.

Important:
1. The same physical bottle may appear in several photographs. Merge duplicate sightings into one inventory item.
2. Do not invent a product when the label is obscured. Use a cautious generic description and lower confidence.
3. Return brand and product name separately where possible.
4. Estimate status as "low" only when the same bottle's visible liquid level appears below roughly 25%; otherwise use "good". Never infer "need to replace" from a photograph.
5. Ignore drinking glasses, décor and unrelated household objects.
6. Confidence must be between 0 and 1.
7. Provide a short evidence note identifying which photo numbers support each merged item.`
    }];

    images.forEach((image, index) => {
      if (typeof image !== "string" || !image.startsWith("data:image/")) throw new Error(`Invalid image ${index + 1}`);
      content.push({ type: "input_text", text: `Photo ${index + 1}:` });
      content.push({ type: "input_image", image_url: image, detail: "high" });
    });

    const schema = {
      type: "object",
      additionalProperties: false,
      properties: {
        items: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              name: { type: "string" },
              brand: { type: "string" },
              type: { type: "string" },
              status: { type: "string", enum: ["good", "low"] },
              confidence: { type: "number", minimum: 0, maximum: 1 },
              evidence: { type: "string" }
            },
            required: ["name", "brand", "type", "status", "confidence", "evidence"]
          }
        }
      },
      required: ["items"]
    };

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: Netlify.env.get("OPENAI_VISION_MODEL") || "gpt-4.1-mini",
        input: [{ role: "user", content }],
        text: { format: { type: "json_schema", name: "merged_bar_inventory", strict: true, schema } }
      })
    });

    if (!response.ok) {
      const message = await response.text();
      console.error("OpenAI API error", response.status, message);
      return new Response(message, { status: response.status, headers: { "content-type": "application/json" } });
    }
    const data = await response.json();
    const text = data.output_text || data.output?.flatMap(x => x.content || []).find(x => x.type === "output_text")?.text;
    if (!text) throw new Error("No structured output returned");
    return Response.json(JSON.parse(text));
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "content-type": "application/json" }
    });
  }
};