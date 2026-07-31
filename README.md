# Turn the Tide

Turn the Tide is a mobile-first personal AI bartender for the home enthusiast.

## Current version

**1.0.0-dev**

This is the active development build. It includes:

- mobile-first inventory management;
- AI-assisted multi-photo bottle recognition;
- Tonight recommendations based on mood, occasion and strength;
- Taste learning, ratings and House Favourites;
- Bar IQ and purchase guidance;
- 140 enriched cocktail recipes;
- an installable Progressive Web App;
- a minimalist hamburger menu for secondary information and controls.

## Repository structure

```text
index.html
app.js
styles.css
manifest.webmanifest
sw.js
netlify.toml
assets/
data/
icons/
netlify/
  functions/
    analyze-bar.mjs
```

## Netlify deployment

Connect this repository to Netlify using the `main` branch.

- Build command: leave blank
- Publish directory: `.`
- Functions directory: `netlify/functions`

Add this Netlify environment variable:

```text
OPENAI_API_KEY
```

Do not put the API key in the repository.

After deployment, confirm that `analyze-bar` appears under **Logs & metrics → Functions** in Netlify.

## Updating the live site

1. Replace changed files in the local repository folder.
2. Review the changes in GitHub Desktop.
3. Commit to `main`.
4. Push to GitHub.
5. Netlify will deploy automatically.
