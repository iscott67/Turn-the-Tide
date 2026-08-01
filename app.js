/* Reliable DOM bindings for iOS/WebKit and other browsers. */
document.querySelectorAll('[id]').forEach(element => {
  if (!(element.id in window)) window[element.id] = element;
});

const RECIPE_LIBRARY=[{"id":"sea-glass-margarita-0","name":"Sea Glass Margarita","requires":["blanco tequila","st-germain","triple sec","lime"],"programme":"Tequila","tags":["bright","floral","citrusy"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Sea Glass Margarita cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"dry-martini-1","name":"Dry Martini","requires":["gin","dry vermouth","orange bitters"],"programme":"Gin","tags":["dry","crisp","spirit-forward"],"times":["evening","night"],"moods":["reflective","quiet","celebrating"],"weather":["mild","cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 1/2 oz","metric":"75 ml","key":"gin"},{"ingredient":"Dry vermouth","imperial":"1/2 oz","metric":"15 ml","key":"dry vermouth"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Dry Martini cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"white-lady-2","name":"White Lady","requires":["gin","triple sec","lemon"],"programme":"Gin","tags":["bright","citrusy","classic"],"times":["afternoon","evening"],"moods":["social","celebrating","relaxed"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a White Lady cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"elderflower-white-lady-3","name":"Elderflower White Lady","requires":["gin","triple sec","st-germain","lemon"],"programme":"Gin","tags":["floral","citrusy","elegant"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Elderflower White Lady cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"negroni-4","name":"Negroni","requires":["gin","campari","sweet vermouth"],"programme":"Gin","tags":["bitter","herbal","spirit-forward"],"times":["evening","night"],"moods":["reflective","social"],"weather":["mild","cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"1 oz","metric":"30 ml","key":"gin"},{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Sweet vermouth","imperial":"1 oz","metric":"30 ml","key":"sweet vermouth"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Negroni cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"americano-5","name":"Americano","requires":["campari","sweet vermouth","soda"],"programme":"Aperitivo","tags":["bitter","long","low-abv"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Americano cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"aperol-spritz-6","name":"Aperol Spritz","requires":["aperol","sparkling wine","soda"],"programme":"Aperitivo","tags":["bitter","bright","sparkling"],"times":["afternoon","evening"],"moods":["social","celebrating","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Aperol","imperial":"2 oz","metric":"60 ml","key":"aperol"},{"ingredient":"Dry sparkling wine","imperial":"3 oz","metric":"90 ml","key":"sparkling wine"},{"ingredient":"Soda water","imperial":"1 oz","metric":"30 ml","key":"soda"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Aperol: substitute another orange aperitivo and adjust sweetness to taste."],"source_info":{"designation":"Modern Classic","source":"Established 3-2-1 Spritz","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Aperol Spritz cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"gimlet-7","name":"Gimlet","requires":["gin","lime","simple syrup"],"programme":"Gin","tags":["citrusy","clean","classic"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Gimlet cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"southside-8","name":"Southside","requires":["gin","lemon","mint","simple syrup"],"programme":"Gin","tags":["fresh","herbal","citrusy"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Fresh mint","imperial":"8 leaves","metric":"8 leaves","key":"mint"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Southside cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"last-word-9","name":"Last Word","requires":["gin","green chartreuse","luxardo maraschino","lime"],"programme":"Gin","tags":["herbal","citrusy","complex"],"times":["evening"],"moods":["adventurous","reflective"],"weather":["mild","cool"],"method":"shaken","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"3/4 oz","metric":"22.5 ml","key":"gin"},{"ingredient":"Green Chartreuse","imperial":"3/4 oz","metric":"22.5 ml","key":"green chartreuse"},{"ingredient":"Maraschino liqueur","imperial":"3/4 oz","metric":"22.5 ml","key":"luxardo maraschino"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Green Chartreuse: no exact substitute exists. A herbal liqueur can be tried, but the recipe will materially change.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Classic","source":"Established equal-parts classic","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Last Word cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"lightened-last-word-10","name":"Lightened Last Word","requires":["gin","green chartreuse","luxardo maraschino","lime"],"programme":"Gin","tags":["herbal","citrusy","balanced"],"times":["evening"],"moods":["adventurous","social"],"weather":["mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"3/4 oz","metric":"22.5 ml","key":"gin"},{"ingredient":"Green Chartreuse","imperial":"3/4 oz","metric":"22.5 ml","key":"green chartreuse"},{"ingredient":"Maraschino liqueur","imperial":"3/4 oz","metric":"22.5 ml","key":"luxardo maraschino"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Green Chartreuse: no exact substitute exists. A herbal liqueur can be tried, but the recipe will materially change.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Lightened Last Word cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"bijou-11","name":"Bijou","requires":["gin","green chartreuse","sweet vermouth","orange bitters"],"programme":"Gin","tags":["herbal","rich","spirit-forward"],"times":["evening","night"],"moods":["reflective","adventurous"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Green Chartreuse","imperial":"3/4 oz","metric":"22.5 ml","key":"green chartreuse"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Green Chartreuse: no exact substitute exists. A herbal liqueur can be tried, but the recipe will materially change.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Bijou cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"martinez-12","name":"Martinez","requires":["gin","sweet vermouth","luxardo maraschino","orange bitters"],"programme":"Gin","tags":["rich","classic","spirit-forward"],"times":["evening","night"],"moods":["reflective","quiet"],"weather":["cool","mild"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Maraschino liqueur","imperial":"1/2 oz","metric":"15 ml","key":"luxardo maraschino"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Classic","source":"Established classic specification","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Martinez cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"aviation-13","name":"Aviation","requires":["gin","luxardo maraschino","lemon"],"programme":"Gin","tags":["floral","citrusy","classic"],"times":["evening"],"moods":["social","adventurous"],"weather":["mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Maraschino liqueur","imperial":"1/2 oz","metric":"15 ml","key":"luxardo maraschino"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Aviation cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"tom-collins-14","name":"Tom Collins","requires":["gin","lemon","simple syrup","soda"],"programme":"Gin","tags":["long","citrusy","refreshing"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm"],"method":"shaken","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball glass","ice":"Cubed ice","garnish":"Citrus wedge","instructions":["Chill the highball glass.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Tom Collins cocktail in a Highball glass, with Citrus wedge, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"french-75-15","name":"French 75","requires":["gin","lemon","simple syrup","sparkling wine"],"programme":"Gin","tags":["sparkling","citrusy","celebratory"],"times":["afternoon","evening"],"moods":["celebrating","social"],"weather":["mild","warm"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Chill the large wine glass.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a French 75 cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"classic-margarita-16","name":"Classic Margarita","requires":["blanco tequila","triple sec","lime"],"programme":"Tequila","tags":["citrusy","bright","classic"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Orange liqueur / triple sec","imperial":"1 oz","metric":"30 ml","key":"triple sec"},{"ingredient":"Fresh lime juice","imperial":"1 oz","metric":"30 ml","key":"lime"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Classic Margarita cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"tommy-s-margarita-17","name":"Tommy's Margarita","requires":["blanco tequila","lime","agave syrup"],"programme":"Tequila","tags":["citrusy","clean","agave"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Agave syrup","imperial":"1/2 oz","metric":"15 ml","key":"agave syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Modern Classic","source":"Julio Bermejo modern classic","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Tommy's Margarita cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"paloma-18","name":"Paloma","requires":["blanco tequila","grapefruit","soda","lime"],"programme":"Tequila","tags":["long","citrusy","refreshing"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Fresh grapefruit juice","imperial":"1 1/2 oz","metric":"45 ml","key":"grapefruit"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Fresh grapefruit juice: use freshly squeezed juice. Bottled juice is not recommended.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Regional Classic","source":"Established Mexican highball","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Paloma cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"el-diablo-19","name":"El Diablo","requires":["blanco tequila","creme de cassis","lime","ginger beer"],"programme":"Tequila","tags":["fruity","spicy","citrusy"],"times":["afternoon","evening"],"moods":["social","adventurous"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Crème de cassis","imperial":"1/2 oz","metric":"15 ml","key":"creme de cassis"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Ginger beer","imperial":"3 oz","metric":"90 ml","key":"ginger beer"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Ginger beer: choose a dry, assertive brand. Ginger ale will make a softer, sweeter drink."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a El Diablo cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"classic-daiquiri-20","name":"Classic Daiquiri","requires":["white rum","lime","simple syrup"],"programme":"Rum","tags":["citrusy","clean","classic"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Simple syrup","imperial":"3/4 oz","metric":"22.5 ml","key":"simple syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Classic Daiquiri cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"hemingway-daiquiri-21","name":"Hemingway Daiquiri","requires":["white rum","luxardo maraschino","grapefruit","lime"],"programme":"Rum","tags":["dry","citrusy","complex"],"times":["afternoon","evening"],"moods":["adventurous","social"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Maraschino liqueur","imperial":"1/2 oz","metric":"15 ml","key":"luxardo maraschino"},{"ingredient":"Fresh grapefruit juice","imperial":"1 1/2 oz","metric":"45 ml","key":"grapefruit"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Fresh grapefruit juice: use freshly squeezed juice. Bottled juice is not recommended.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Hemingway Daiquiri cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"mojito-22","name":"Mojito","requires":["white rum","lime","mint","simple syrup","soda"],"programme":"Rum","tags":["fresh","long","citrusy"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Fresh mint","imperial":"8 leaves","metric":"8 leaves","key":"mint"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball glass","ice":"Crushed ice","garnish":"Mint bouquet and lime wedge","instructions":["Add mint, citrus and sweetener to the glass and press very gently.","Add the base spirit and fill halfway with crushed ice.","Churn briefly, top as specified and mound with more crushed ice.","Garnish with a fresh mint bouquet."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Mojito cocktail in a Highball glass, with Mint bouquet and lime wedge, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"el-presidente-23","name":"El Presidente","requires":["white rum","dry vermouth","triple sec","grenadine"],"programme":"Rum","tags":["elegant","rum","classic"],"times":["evening"],"moods":["reflective","social"],"weather":["mild"],"method":"stirred","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Dry vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"dry vermouth"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Grenadine","imperial":"1/4 oz","metric":"7.5 ml","key":"grenadine"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a El Presidente cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"ti-punch-24","name":"Ti' Punch","requires":["rhum agricole","cane syrup","lime"],"programme":"Rum","tags":["agricole","minimal","grassy"],"times":["afternoon","evening"],"moods":["adventurous","reflective"],"weather":["warm","mild"],"method":"built","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Rhum agricole","imperial":"2 oz","metric":"60 ml","key":"rhum agricole"},{"ingredient":"Cane syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"cane syrup"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Rhum agricole: substitute a dry white rum only as a fallback; the grassy character will be reduced.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Regional Classic","source":"Traditional Martinique service","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Ti' Punch cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"agricole-daiquiri-25","name":"Agricole Daiquiri","requires":["rhum agricole","lime","cane syrup"],"programme":"Rum","tags":["agricole","citrusy","bright"],"times":["afternoon","evening"],"moods":["adventurous","social"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Rhum agricole","imperial":"2 oz","metric":"60 ml","key":"rhum agricole"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Cane syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"cane syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Rhum agricole: substitute a dry white rum only as a fallback; the grassy character will be reduced.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Agricole Daiquiri cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"rum-old-fashioned-26","name":"Rum Old Fashioned","requires":["aged rum","maple syrup","aromatic bitters"],"programme":"Rum","tags":["rich","spirit-forward","evening"],"times":["evening","night"],"moods":["quiet","reflective"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Aged rum","imperial":"2 oz","metric":"60 ml","key":"aged rum"},{"ingredient":"Maple syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"maple syrup"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"}],"glassware":"Rocks glass","ice":"One large cube","garnish":"Expressed orange or lemon twist","instructions":["Chill the rocks glass.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Maple syrup: use pure maple syrup. A 2:1 demerara syrup is the closest neutral substitute."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Rum Old Fashioned cocktail in a Rocks glass, with Expressed orange or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"rum-manhattan-27","name":"Rum Manhattan","requires":["aged rum","sweet vermouth","aromatic bitters"],"programme":"Rum","tags":["rich","classic","spirit-forward"],"times":["evening","night"],"moods":["reflective","quiet"],"weather":["cool","mild"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Aged rum","imperial":"2 oz","metric":"60 ml","key":"aged rum"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Rum Manhattan cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"dark-n-stormy-28","name":"Dark 'n' Stormy","requires":["dark rum","ginger beer","lime"],"programme":"Rum","tags":["spicy","long","rum"],"times":["afternoon","evening"],"moods":["social","relaxed"],"weather":["warm","rainy"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Dark rum","imperial":"2 oz","metric":"60 ml","key":"dark rum"},{"ingredient":"Ginger beer","imperial":"3 oz","metric":"90 ml","key":"ginger beer"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Ginger beer: choose a dry, assertive brand. Ginger ale will make a softer, sweeter drink.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Dark 'n' Stormy cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"jungle-bird-29","name":"Jungle Bird","requires":["dark rum","campari","pineapple","lime","simple syrup"],"programme":"Rum","tags":["bitter","tropical","citrusy"],"times":["afternoon","evening"],"moods":["adventurous","social"],"weather":["warm"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Dark rum","imperial":"2 oz","metric":"60 ml","key":"dark rum"},{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Pineapple juice","imperial":"1 1/2 oz","metric":"45 ml","key":"pineapple"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Jungle Bird cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"monte-carlo-30","name":"Monte Carlo","requires":["canadian whisky","benedictine","aromatic bitters"],"programme":"Canadian Whisky","tags":["rich","herbal","spirit-forward"],"times":["evening","night"],"moods":["reflective","quiet"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Bénédictine","imperial":"1/2 oz","metric":"15 ml","key":"benedictine"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter."],"source_info":{"designation":"Classic","source":"Established classic specification","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Monte Carlo cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"toronto-31","name":"Toronto","requires":["canadian whisky","fernet","aromatic bitters","simple syrup"],"programme":"Canadian Whisky","tags":["bitter","herbal","spirit-forward"],"times":["evening","night"],"moods":["reflective","adventurous"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Fernet-Branca","imperial":"1/4 oz","metric":"7.5 ml","key":"fernet"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"},{"ingredient":"Simple syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"simple syrup"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Classic","source":"Established Canadian classic","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Toronto cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"canadian-whisky-sour-32","name":"Canadian Whisky Sour","requires":["canadian whisky","lemon","simple syrup"],"programme":"Canadian Whisky","tags":["citrusy","whisky","balanced"],"times":["afternoon","evening"],"moods":["social","relaxed"],"weather":["mild","cool"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Canadian Whisky Sour cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"maple-old-fashioned-33","name":"Maple Old Fashioned","requires":["canadian whisky","maple syrup","aromatic bitters"],"programme":"Canadian Whisky","tags":["maple","rich","spirit-forward"],"times":["evening","night"],"moods":["quiet","reflective"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Maple syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"maple syrup"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"}],"glassware":"Rocks glass","ice":"One large cube","garnish":"Expressed orange or lemon twist","instructions":["Chill the rocks glass.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Maple syrup: use pure maple syrup. A 2:1 demerara syrup is the closest neutral substitute."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Maple Old Fashioned cocktail in a Rocks glass, with Expressed orange or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"manhattan-34","name":"Manhattan","requires":["canadian whisky","sweet vermouth","aromatic bitters"],"programme":"Canadian Whisky","tags":["classic","rich","spirit-forward"],"times":["evening","night"],"moods":["reflective","celebrating"],"weather":["cool","mild"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Sweet vermouth","imperial":"1 oz","metric":"30 ml","key":"sweet vermouth"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Classic","source":"Established classic specification","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Manhattan cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"boulevardier-35","name":"Boulevardier","requires":["canadian whisky","campari","sweet vermouth"],"programme":"Canadian Whisky","tags":["bitter","rich","spirit-forward"],"times":["evening","night"],"moods":["reflective","social"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"1 1/2 oz","metric":"45 ml","key":"canadian whisky"},{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Sweet vermouth","imperial":"1 oz","metric":"30 ml","key":"sweet vermouth"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Boulevardier cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"green-point-36","name":"Green Point","requires":["canadian whisky","yellow chartreuse","sweet vermouth","orange bitters"],"programme":"Canadian Whisky","tags":["herbal","rich","spirit-forward"],"times":["evening","night"],"moods":["adventurous","reflective"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Yellow Chartreuse","imperial":"1/2 oz","metric":"15 ml","key":"yellow chartreuse"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Yellow Chartreuse: use another mild herbal liqueur cautiously; reduce added sweetener if necessary.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Green Point cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"whisky-highball-37","name":"Whisky Highball","requires":["canadian whisky","soda"],"programme":"Canadian Whisky","tags":["long","clean","whisky"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Whisky Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"bobby-burns-38","name":"Bobby Burns","requires":["scotch","sweet vermouth","benedictine"],"programme":"Scotch","tags":["rich","herbal","classic"],"times":["evening","night"],"moods":["quiet","reflective"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Scotch whisky","imperial":"2 oz","metric":"60 ml","key":"scotch"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Bénédictine","imperial":"1/2 oz","metric":"15 ml","key":"benedictine"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Classic","source":"Established classic specification","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Bobby Burns cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"rusty-nail-39","name":"Rusty Nail","requires":["scotch","drambuie"],"programme":"Scotch","tags":["rich","honeyed","spirit-forward"],"times":["night"],"moods":["quiet","reflective"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Scotch whisky","imperial":"2 oz","metric":"60 ml","key":"scotch"},{"ingredient":"Drambuie","imperial":"1/2 oz","metric":"15 ml","key":"drambuie"}],"glassware":"Rocks glass","ice":"One large cube","garnish":"Expressed orange or lemon twist","instructions":["Chill the rocks glass.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Keep the base spirit and fresh citrus proportions intact. Adjust sweetness in 1/4 oz / 7.5 ml increments."],"source_info":{"designation":"Classic","source":"Established classic specification","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Rusty Nail cocktail in a Rocks glass, with Expressed orange or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"godfather-40","name":"Godfather","requires":["scotch","amaretto"],"programme":"Scotch","tags":["nutty","rich","easy"],"times":["night"],"moods":["quiet","relaxed"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Scotch whisky","imperial":"2 oz","metric":"60 ml","key":"scotch"},{"ingredient":"Amaretto","imperial":"1/2 oz","metric":"15 ml","key":"amaretto"}],"glassware":"Rocks glass","ice":"One large cube","garnish":"Expressed orange or lemon twist","instructions":["Chill the rocks glass.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Keep the base spirit and fresh citrus proportions intact. Adjust sweetness in 1/4 oz / 7.5 ml increments."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Godfather cocktail in a Rocks glass, with Expressed orange or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"rob-roy-41","name":"Rob Roy","requires":["scotch","sweet vermouth","aromatic bitters"],"programme":"Scotch","tags":["classic","rich","spirit-forward"],"times":["evening","night"],"moods":["reflective"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Scotch whisky","imperial":"2 oz","metric":"60 ml","key":"scotch"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Classic","source":"Established classic specification","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Rob Roy cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"penicillin-42","name":"Penicillin","requires":["scotch","lemon","honey syrup","ginger"],"programme":"Scotch","tags":["smoky","citrusy","spicy"],"times":["evening"],"moods":["adventurous","social"],"weather":["cool","rainy"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Scotch whisky","imperial":"2 oz","metric":"60 ml","key":"scotch"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Honey syrup","imperial":"1/2 oz","metric":"15 ml","key":"honey syrup"},{"ingredient":"Ginger syrup","imperial":"1/4 oz ginger syrup","metric":"7.5 ml ginger syrup","key":"ginger"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Modern Classic","source":"Sam Ross modern classic","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Penicillin cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"irish-coffee-43","name":"Irish Coffee","requires":["irish whiskey","coffee","sugar","cream"],"programme":"Irish Whiskey","tags":["warm","coffee","rich"],"times":["night"],"moods":["quiet","relaxed"],"weather":["cool","rainy"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Irish whiskey","imperial":"1 1/2 oz","metric":"45 ml","key":"irish whiskey"},{"ingredient":"Fresh hot coffee","imperial":"4 oz hot","metric":"120 ml hot","key":"coffee"},{"ingredient":"Demerara syrup","imperial":"1/2 oz syrup","metric":"15 ml syrup","key":"sugar"},{"ingredient":"Lightly whipped cream","imperial":"1 oz","metric":"30 ml","key":"cream"}],"glassware":"Heatproof Irish coffee glass","ice":"None","garnish":"Lightly whipped cream; optional grated nutmeg","instructions":["Warm the serving glass with hot water, then discard the water.","Add the whiskey, hot coffee and sweetener; stir until integrated.","Float lightly whipped cream over the back of a spoon.","Serve immediately and drink through the cool cream."],"substitutions":["Keep the base spirit and fresh citrus proportions intact. Adjust sweetness in 1/4 oz / 7.5 ml increments."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Irish Coffee cocktail in a Heatproof Irish coffee glass, with Lightly whipped cream; optional grated nutmeg, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"irish-maid-44","name":"Irish Maid","requires":["irish whiskey","st-germain","lemon","cucumber"],"programme":"Irish Whiskey","tags":["fresh","floral","citrusy"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["mild","warm"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Irish whiskey","imperial":"1 1/2 oz","metric":"45 ml","key":"irish whiskey"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Cucumber","imperial":"3 slices","metric":"3 slices","key":"cucumber"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Irish Maid cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"sidecar-45","name":"Sidecar","requires":["brandy","triple sec","lemon"],"programme":"Brandy","tags":["citrusy","classic","elegant"],"times":["evening"],"moods":["social","celebrating"],"weather":["mild","cool"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Brandy or Cognac","imperial":"2 oz","metric":"60 ml","key":"brandy"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Sidecar cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"brandy-alexander-46","name":"Brandy Alexander","requires":["brandy","creme de cacao","cream"],"programme":"Brandy","tags":["dessert","rich","creamy"],"times":["night"],"moods":["quiet","celebrating"],"weather":["cool"],"method":"shaken","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Brandy or Cognac","imperial":"2 oz","metric":"60 ml","key":"brandy"},{"ingredient":"Crème de cacao","imperial":"3/4 oz","metric":"22.5 ml","key":"creme de cacao"},{"ingredient":"Lightly whipped cream","imperial":"1 oz","metric":"30 ml","key":"cream"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Keep the base spirit and fresh citrus proportions intact. Adjust sweetness in 1/4 oz / 7.5 ml increments."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Brandy Alexander cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"stinger-47","name":"Stinger","requires":["brandy","creme de menthe"],"programme":"Brandy","tags":["minty","classic","after-dinner"],"times":["night"],"moods":["quiet","adventurous"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Brandy or Cognac","imperial":"2 oz","metric":"60 ml","key":"brandy"},{"ingredient":"Crème de menthe","imperial":"1/2 oz","metric":"15 ml","key":"creme de menthe"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Keep the base spirit and fresh citrus proportions intact. Adjust sweetness in 1/4 oz / 7.5 ml increments."],"source_info":{"designation":"Classic","source":"Established classic specification","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Stinger cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"espresso-martini-48","name":"Espresso Martini","requires":["vodka","coffee liqueur","espresso","simple syrup"],"programme":"Vodka","tags":["coffee","rich","energizing"],"times":["evening","night"],"moods":["social","celebrating"],"weather":["mild","cool"],"method":"shaken","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Vodka","imperial":"1 1/2 oz","metric":"45 ml","key":"vodka"},{"ingredient":"Coffee liqueur","imperial":"3/4 oz","metric":"22.5 ml","key":"coffee liqueur"},{"ingredient":"Fresh espresso","imperial":"1 oz","metric":"30 ml","key":"espresso"},{"ingredient":"Simple syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"simple syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Espresso Martini cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"moscow-mule-49","name":"Moscow Mule","requires":["vodka","ginger beer","lime"],"programme":"Vodka","tags":["spicy","long","citrusy"],"times":["afternoon","evening"],"moods":["social","relaxed"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Vodka","imperial":"2 oz","metric":"60 ml","key":"vodka"},{"ingredient":"Ginger beer","imperial":"3 oz","metric":"90 ml","key":"ginger beer"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Ginger beer: choose a dry, assertive brand. Ginger ale will make a softer, sweeter drink.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Modern Classic","source":"Established modern classic","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Moscow Mule cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"cosmopolitan-50","name":"Cosmopolitan","requires":["vodka","triple sec","cranberry","lime"],"programme":"Vodka","tags":["fruity","citrusy","bright"],"times":["evening"],"moods":["social","celebrating"],"weather":["mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Vodka","imperial":"2 oz","metric":"60 ml","key":"vodka"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Cranberry juice","imperial":"1 oz","metric":"30 ml","key":"cranberry"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"IBA Classic","source":"IBA Official Cocktail","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Cosmopolitan cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"aperol-tonic-51","name":"Aperol Tonic","requires":["aperol","tonic"],"programme":"Aperitivo","tags":["bitter","long","low-abv"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Aperol","imperial":"1 oz","metric":"30 ml","key":"aperol"},{"ingredient":"Tonic water","imperial":"3 oz","metric":"90 ml","key":"tonic"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Aperol: substitute another orange aperitivo and adjust sweetness to taste."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Aperol Tonic cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"campari-soda-52","name":"Campari Soda","requires":["campari","soda"],"programme":"Aperitivo","tags":["bitter","long","minimal"],"times":["afternoon","evening"],"moods":["reflective","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Campari Soda cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"paper-plane-53","name":"Paper Plane","requires":["canadian whisky","aperol","amaro nonino","lemon"],"programme":"Aperitivo","tags":["bitter","citrusy","balanced"],"times":["evening"],"moods":["adventurous","social"],"weather":["mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"3/4 oz","metric":"22.5 ml","key":"canadian whisky"},{"ingredient":"Aperol","imperial":"3/4 oz","metric":"22.5 ml","key":"aperol"},{"ingredient":"Amaro Nonino","imperial":"3/4 oz","metric":"22.5 ml","key":"amaro nonino"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Aperol: substitute another orange aperitivo and adjust sweetness to taste.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Modern Classic","source":"Sam Ross modern classic","note":"Specification normalized for a single home-bar serving."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"Classic-reference checked"},"image_prompt":"Vertical mobile recipe hero photograph of a Paper Plane cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"black-manhattan-54","name":"Black Manhattan","requires":["canadian whisky","amaro","aromatic bitters"],"programme":"Aperitivo","tags":["rich","bitter","spirit-forward"],"times":["evening","night"],"moods":["reflective","quiet"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Amaro","imperial":"3/4 oz","metric":"22.5 ml","key":"amaro"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Black Manhattan cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"bamboo-55","name":"Bamboo","requires":["dry vermouth","sherry","orange bitters","aromatic bitters"],"programme":"Low Alcohol","tags":["dry","nutty","low-abv"],"times":["afternoon","evening"],"moods":["reflective","relaxed"],"weather":["mild","cool"],"method":"stirred","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Dry vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"dry vermouth"},{"ingredient":"Dry or medium sherry","imperial":"1 1/2 oz","metric":"45 ml","key":"sherry"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Bamboo cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"adonis-56","name":"Adonis","requires":["sweet vermouth","sherry","orange bitters"],"programme":"Low Alcohol","tags":["nutty","rich","low-abv"],"times":["afternoon","evening"],"moods":["reflective","quiet"],"weather":["cool","mild"],"method":"stirred","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Dry or medium sherry","imperial":"1 1/2 oz","metric":"45 ml","key":"sherry"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Adonis cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"harbour-fog-57","name":"Harbour Fog","requires":["gin","dry vermouth","st-germain","orange bitters"],"programme":"Gin","tags":["floral","dry","elegant"],"times":["evening"],"moods":["reflective","social"],"weather":["mild","cool"],"method":"stirred","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Dry vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"dry vermouth"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Harbour Fog cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"peggy-s-cove-58","name":"Peggy's Cove","requires":["gin","st-germain","lemon","soda"],"programme":"Gin","tags":["floral","long","citrusy"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Peggy's Cove cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"lunenburg-lemon-59","name":"Lunenburg Lemon","requires":["white rum","triple sec","lemon","simple syrup"],"programme":"Rum","tags":["citrusy","bright","clean"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Lunenburg Lemon cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"mahone-bay-60","name":"Mahone Bay","requires":["gin","dry vermouth","orange bitters"],"programme":"Gin","tags":["dry","classic","crisp"],"times":["evening"],"moods":["reflective","quiet"],"weather":["mild","cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Dry vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"dry vermouth"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Mahone Bay cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"bluenose-61","name":"Bluenose","requires":["canadian whisky","maple syrup","orange bitters"],"programme":"Canadian Whisky","tags":["maple","rich","spirit-forward"],"times":["evening","night"],"moods":["quiet","reflective"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Maple syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"maple syrup"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Rocks glass","ice":"One large cube","garnish":"Expressed orange or lemon twist","instructions":["Chill the rocks glass.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Maple syrup: use pure maple syrup. A 2:1 demerara syrup is the closest neutral substitute."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Bluenose cocktail in a Rocks glass, with Expressed orange or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"cabot-trail-62","name":"Cabot Trail","requires":["scotch","benedictine","orange bitters"],"programme":"Scotch","tags":["rich","herbal","evening"],"times":["night"],"moods":["quiet","reflective"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Scotch whisky","imperial":"2 oz","metric":"60 ml","key":"scotch"},{"ingredient":"Bénédictine","imperial":"1/2 oz","metric":"15 ml","key":"benedictine"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Keep the base spirit and fresh citrus proportions intact. Adjust sweetness in 1/4 oz / 7.5 ml increments."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Cabot Trail cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"signal-hill-63","name":"Signal Hill","requires":["canadian whisky","sweet vermouth","orange bitters"],"programme":"Canadian Whisky","tags":["classic","rich","spirit-forward"],"times":["evening","night"],"moods":["reflective"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Signal Hill cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"north-atlantic-64","name":"North Atlantic","requires":["dark rum","coffee liqueur","orange bitters"],"programme":"Rum","tags":["dark","coffee","rich"],"times":["night"],"moods":["quiet","adventurous"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Dark rum","imperial":"2 oz","metric":"60 ml","key":"dark rum"},{"ingredient":"Coffee liqueur","imperial":"3/4 oz","metric":"22.5 ml","key":"coffee liqueur"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Keep the base spirit and fresh citrus proportions intact. Adjust sweetness in 1/4 oz / 7.5 ml increments."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a North Atlantic cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"east-coast-fog-65","name":"East Coast Fog","requires":["gin","yellow chartreuse","dry vermouth"],"programme":"Gin","tags":["herbal","dry","elegant"],"times":["evening"],"moods":["adventurous","reflective"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Yellow Chartreuse","imperial":"1/2 oz","metric":"15 ml","key":"yellow chartreuse"},{"ingredient":"Dry vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"dry vermouth"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Yellow Chartreuse: use another mild herbal liqueur cautiously; reduce added sweetener if necessary.","Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a East Coast Fog cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"salt-air-66","name":"Salt Air","requires":["aperol","gin","tonic"],"programme":"Aperitivo","tags":["bitter","long","bright"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Aperol","imperial":"1 oz","metric":"30 ml","key":"aperol"},{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Tonic water","imperial":"3 oz","metric":"90 ml","key":"tonic"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Aperol: substitute another orange aperitivo and adjust sweetness to taste.","Gin: use a quality London dry for structure; a floral gin will soften the drink."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Salt Air cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"harbour-lights-67","name":"Harbour Lights","requires":["campari","sweet vermouth","sparkling wine"],"programme":"Aperitivo","tags":["bitter","sparkling","rich"],"times":["evening"],"moods":["social","celebrating"],"weather":["mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Harbour Lights cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"breakwater-68","name":"Breakwater","requires":["gin","dry vermouth","saline"],"programme":"Gin","tags":["dry","savoury","crisp"],"times":["evening"],"moods":["reflective","adventurous"],"weather":["mild","cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Dry vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"dry vermouth"},{"ingredient":"20% saline solution","imperial":"2 drops","metric":"2 drops","key":"saline"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Breakwater cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"grand-banks-69","name":"Grand Banks","requires":["rhum agricole","lime","cane syrup"],"programme":"Rum","tags":["agricole","citrusy","grassy"],"times":["afternoon","evening"],"moods":["adventurous","reflective"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Rhum agricole","imperial":"2 oz","metric":"60 ml","key":"rhum agricole"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Cane syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"cane syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Rhum agricole: substitute a dry white rum only as a fallback; the grassy character will be reduced.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Grand Banks cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"fundy-tide-70","name":"Fundy Tide","requires":["aged rum","maple syrup","orange bitters"],"programme":"Rum","tags":["maple","rich","rum"],"times":["evening","night"],"moods":["quiet","reflective"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Aged rum","imperial":"2 oz","metric":"60 ml","key":"aged rum"},{"ingredient":"Maple syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"maple syrup"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Rocks glass","ice":"One large cube","garnish":"Expressed orange or lemon twist","instructions":["Chill the rocks glass.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Maple syrup: use pure maple syrup. A 2:1 demerara syrup is the closest neutral substitute."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Fundy Tide cocktail in a Rocks glass, with Expressed orange or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"cape-breton-sunset-71","name":"Cape Breton Sunset","requires":["aged rum","aperol","lime","simple syrup"],"programme":"Rum","tags":["bitter","citrusy","bright"],"times":["afternoon","evening"],"moods":["social","relaxed"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Aged rum","imperial":"2 oz","metric":"60 ml","key":"aged rum"},{"ingredient":"Aperol","imperial":"1 oz","metric":"30 ml","key":"aperol"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Aperol: substitute another orange aperitivo and adjust sweetness to taste.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Cape Breton Sunset cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"kejimkujik-72","name":"Kejimkujik","requires":["canadian whisky","walnut bitters","maple syrup"],"programme":"Canadian Whisky","tags":["nutty","maple","woodsy"],"times":["evening","night"],"moods":["quiet","reflective"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Walnut bitters","imperial":"2 dashes","metric":"2 dashes","key":"walnut bitters"},{"ingredient":"Maple syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"maple syrup"}],"glassware":"Rocks glass","ice":"One large cube","garnish":"Expressed orange or lemon twist","instructions":["Chill the rocks glass.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Maple syrup: use pure maple syrup. A 2:1 demerara syrup is the closest neutral substitute."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Kejimkujik cocktail in a Rocks glass, with Expressed orange or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"the-narrows-73","name":"The Narrows","requires":["canadian whisky","yellow chartreuse","sweet vermouth"],"programme":"Canadian Whisky","tags":["herbal","rich","spirit-forward"],"times":["evening","night"],"moods":["adventurous","reflective"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Yellow Chartreuse","imperial":"1/2 oz","metric":"15 ml","key":"yellow chartreuse"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Yellow Chartreuse: use another mild herbal liqueur cautiously; reduce added sweetener if necessary.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a The Narrows cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"storm-watch-74","name":"Storm Watch","requires":["scotch","drambuie","orange bitters"],"programme":"Scotch","tags":["smoky","honeyed","rich"],"times":["night"],"moods":["quiet","reflective"],"weather":["cool","rainy"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Scotch whisky","imperial":"2 oz","metric":"60 ml","key":"scotch"},{"ingredient":"Drambuie","imperial":"1/2 oz","metric":"15 ml","key":"drambuie"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Rocks glass","ice":"One large cube","garnish":"Expressed orange or lemon twist","instructions":["Chill the rocks glass.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Keep the base spirit and fresh citrus proportions intact. Adjust sweetness in 1/4 oz / 7.5 ml increments."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Storm Watch cocktail in a Rocks glass, with Expressed orange or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"rain-on-the-deck-75","name":"Rain on the Deck","requires":["canadian whisky","lemon","honey syrup","ginger beer"],"programme":"Canadian Whisky","tags":["spicy","citrusy","long"],"times":["evening"],"moods":["relaxed","social"],"weather":["rainy","cool"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Honey syrup","imperial":"1/2 oz","metric":"15 ml","key":"honey syrup"},{"ingredient":"Ginger beer","imperial":"3 oz","metric":"90 ml","key":"ginger beer"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Ginger beer: choose a dry, assertive brand. Ginger ale will make a softer, sweeter drink."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Rain on the Deck cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"first-warm-day-76","name":"First Warm Day","requires":["gin","st-germain","lemon","soda"],"programme":"Gin","tags":["floral","citrusy","long"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a First Warm Day cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"citadel-sunset-77","name":"Citadel Sunset","requires":["blanco tequila","aperol","grapefruit","lime"],"programme":"Tequila","tags":["bitter","citrusy","bright"],"times":["afternoon","evening"],"moods":["social","celebrating"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Aperol","imperial":"1 oz","metric":"30 ml","key":"aperol"},{"ingredient":"Fresh grapefruit juice","imperial":"1 1/2 oz","metric":"45 ml","key":"grapefruit"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Aperol: substitute another orange aperitivo and adjust sweetness to taste.","Fresh grapefruit juice: use freshly squeezed juice. Bottled juice is not recommended.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Citadel Sunset cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"the-arm-78","name":"The Arm","requires":["gin","campari","grapefruit","soda"],"programme":"Gin","tags":["bitter","long","citrusy"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Fresh grapefruit juice","imperial":"1 1/2 oz","metric":"45 ml","key":"grapefruit"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Fresh grapefruit juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a The Arm cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"point-pleasant-79","name":"Point Pleasant","requires":["gin","cucumber","lemon","st-germain"],"programme":"Gin","tags":["fresh","floral","citrusy"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["warm"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Cucumber","imperial":"3 slices","metric":"3 slices","key":"cucumber"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Point Pleasant cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"eastern-passage-80","name":"Eastern Passage","requires":["white rum","aperol","lime","soda"],"programme":"Rum","tags":["bitter","long","citrusy"],"times":["afternoon","evening"],"moods":["social","relaxed"],"weather":["warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Aperol","imperial":"1 oz","metric":"30 ml","key":"aperol"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Aperol: substitute another orange aperitivo and adjust sweetness to taste.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Eastern Passage cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"sambro-light-81","name":"Sambro Light","requires":["gin","triple sec","lemon","orange bitters"],"programme":"Gin","tags":["citrusy","bright","elegant"],"times":["evening"],"moods":["social","celebrating"],"weather":["mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Sambro Light cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"sable-island-82","name":"Sable Island","requires":["white rum","grapefruit","lime","st-germain"],"programme":"Rum","tags":["floral","citrusy","dry"],"times":["afternoon","evening"],"moods":["adventurous","relaxed"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Fresh grapefruit juice","imperial":"1 1/2 oz","metric":"45 ml","key":"grapefruit"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Fresh grapefruit juice: use freshly squeezed juice. Bottled juice is not recommended.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Sable Island cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"annapolis-royal-83","name":"Annapolis Royal","requires":["brandy","sweet vermouth","benedictine"],"programme":"Brandy","tags":["rich","herbal","classic"],"times":["evening","night"],"moods":["reflective","quiet"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Brandy or Cognac","imperial":"2 oz","metric":"60 ml","key":"brandy"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Bénédictine","imperial":"1/2 oz","metric":"15 ml","key":"benedictine"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Annapolis Royal cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"bay-of-fundy-84","name":"Bay of Fundy","requires":["dark rum","campari","lime","pineapple"],"programme":"Rum","tags":["bitter","tropical","rich"],"times":["afternoon","evening"],"moods":["adventurous","social"],"weather":["warm","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Dark rum","imperial":"2 oz","metric":"60 ml","key":"dark rum"},{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Pineapple juice","imperial":"1 1/2 oz","metric":"45 ml","key":"pineapple"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Bay of Fundy cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"mersey-river-85","name":"Mersey River","requires":["canadian whisky","st-germain","lemon"],"programme":"Canadian Whisky","tags":["floral","citrusy","whisky"],"times":["evening"],"moods":["social","relaxed"],"weather":["mild","cool"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Mersey River cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"chester-basin-86","name":"Chester Basin","requires":["gin","sweet vermouth","orange bitters"],"programme":"Gin","tags":["rich","classic","spirit-forward"],"times":["evening","night"],"moods":["reflective","quiet"],"weather":["cool","mild"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Chester Basin cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"tancook-island-87","name":"Tancook Island","requires":["aged rum","dry vermouth","luxardo maraschino"],"programme":"Rum","tags":["dry","rum","elegant"],"times":["evening"],"moods":["adventurous","reflective"],"weather":["mild","cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Aged rum","imperial":"2 oz","metric":"60 ml","key":"aged rum"},{"ingredient":"Dry vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"dry vermouth"},{"ingredient":"Maraschino liqueur","imperial":"1/2 oz","metric":"15 ml","key":"luxardo maraschino"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Tancook Island cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"musquodoboit-88","name":"Musquodoboit","requires":["canadian whisky","ginger beer","lime"],"programme":"Canadian Whisky","tags":["spicy","long","citrusy"],"times":["afternoon","evening"],"moods":["social","relaxed"],"weather":["mild","cool"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Ginger beer","imperial":"3 oz","metric":"90 ml","key":"ginger beer"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Ginger beer: choose a dry, assertive brand. Ginger ale will make a softer, sweeter drink.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Musquodoboit cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"shubenacadie-89","name":"Shubenacadie","requires":["canadian whisky","sweet vermouth","benedictine"],"programme":"Canadian Whisky","tags":["rich","herbal","classic"],"times":["evening","night"],"moods":["reflective","quiet"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Bénédictine","imperial":"1/2 oz","metric":"15 ml","key":"benedictine"}],"glassware":"Nick & Nora or coupe","ice":"Cubed ice for stirring; served without ice","garnish":"Expressed citrus twist","instructions":["Chill the nick & nora or coupe.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Shubenacadie cocktail in a Nick & Nora or coupe, with Expressed citrus twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"wolfville-orchard-90","name":"Wolfville Orchard","requires":["brandy","lemon","maple syrup"],"programme":"Brandy","tags":["fruity","citrusy","maple"],"times":["afternoon","evening"],"moods":["relaxed","social"],"weather":["cool","mild"],"method":"shaken","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Brandy or Cognac","imperial":"2 oz","metric":"60 ml","key":"brandy"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Maple syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"maple syrup"}],"glassware":"Coupe","ice":"Cubed ice for shaking; served without ice","garnish":"Citrus twist or wheel","instructions":["Chill the coupe.","Add all ingredients to a shaker.","Fill with cold cubed ice and shake hard for 10–12 seconds.","Double strain into the prepared glass and garnish."],"substitutions":["Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Maple syrup: use pure maple syrup. A 2:1 demerara syrup is the closest neutral substitute."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Wolfville Orchard cocktail in a Coupe, with Citrus twist or wheel, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"canso-causeway-91","name":"Canso Causeway","requires":["scotch","amaretto","orange bitters"],"programme":"Scotch","tags":["nutty","rich","spirit-forward"],"times":["night"],"moods":["quiet","reflective"],"weather":["cool"],"method":"stirred","strength":"strong","serving_size":"1 cocktail","ingredients":[{"ingredient":"Scotch whisky","imperial":"2 oz","metric":"60 ml","key":"scotch"},{"ingredient":"Amaretto","imperial":"1/2 oz","metric":"15 ml","key":"amaretto"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"}],"glassware":"Rocks glass","ice":"One large cube","garnish":"Expressed orange or lemon twist","instructions":["Chill the rocks glass.","Add all liquid ingredients to a mixing glass filled with cold cubed ice.","Stir for 20–25 seconds, or until properly chilled and diluted.","Strain into the prepared glass. Garnish immediately."],"substitutions":["Keep the base spirit and fresh citrus proportions intact. Adjust sweetness in 1/4 oz / 7.5 ml increments."],"source_info":{"designation":"Turn the Tide House Recipe","source":"Turn the Tide test-kitchen specification","note":"Original house recipe requiring final sensory testing before commercial publication."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Canso Causeway cocktail in a Rocks glass, with Expressed orange or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"sea-glass-margarita-royale-92","name":"Sea Glass Margarita Royale","requires":["blanco tequila","st-germain","triple sec","lime","sparkling wine"],"programme":"Tequila","tags":["bright","floral","citrusy","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating","celebrating"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Sea Glass Margarita Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"sea-glass-margarita-highball-93","name":"Sea Glass Margarita Highball","requires":["blanco tequila","st-germain","triple sec","lime","soda"],"programme":"Tequila","tags":["bright","floral","citrusy","long"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Sea Glass Margarita Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"dry-martini-highball-94","name":"Dry Martini Highball","requires":["gin","dry vermouth","orange bitters","soda"],"programme":"Gin","tags":["dry","crisp","spirit-forward","long"],"times":["afternoon","evening"],"moods":["reflective","quiet","celebrating","relaxed"],"weather":["mild","cool"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Dry vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"dry vermouth"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Dry Martini","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Dry Martini Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"white-lady-royale-95","name":"White Lady Royale","requires":["gin","triple sec","lemon","sparkling wine"],"programme":"Gin","tags":["bright","citrusy","classic","sparkling"],"times":["afternoon","evening"],"moods":["social","celebrating","relaxed","celebrating"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a White Lady Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"white-lady-highball-96","name":"White Lady Highball","requires":["gin","triple sec","lemon","soda"],"programme":"Gin","tags":["bright","citrusy","classic","long"],"times":["afternoon","evening"],"moods":["social","celebrating","relaxed","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a White Lady Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"elderflower-white-lady-royale-97","name":"Elderflower White Lady Royale","requires":["gin","triple sec","st-germain","lemon","sparkling wine"],"programme":"Gin","tags":["floral","citrusy","elegant","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Elderflower White Lady Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"elderflower-white-lady-highball-98","name":"Elderflower White Lady Highball","requires":["gin","triple sec","st-germain","lemon","soda"],"programme":"Gin","tags":["floral","citrusy","elegant","long"],"times":["afternoon","evening"],"moods":["relaxed","social","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Elderflower liqueur","imperial":"1/2 oz","metric":"15 ml","key":"st-germain"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Elderflower liqueur: another elderflower liqueur may be used; elderflower syrup requires reducing other sweetener.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Elderflower White Lady Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"negroni-highball-99","name":"Negroni Highball","requires":["gin","campari","sweet vermouth","soda"],"programme":"Gin","tags":["bitter","herbal","spirit-forward","long"],"times":["afternoon","evening"],"moods":["reflective","social","relaxed"],"weather":["mild","cool"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"1 oz","metric":"30 ml","key":"gin"},{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Sweet vermouth","imperial":"1 oz","metric":"30 ml","key":"sweet vermouth"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Negroni","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Negroni Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"americano-royale-100","name":"Americano Royale","requires":["campari","sweet vermouth","soda","sparkling wine"],"programme":"Aperitivo","tags":["bitter","long","low-abv","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Americano","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Americano Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"gimlet-royale-101","name":"Gimlet Royale","requires":["gin","lime","simple syrup","sparkling wine"],"programme":"Gin","tags":["citrusy","clean","classic","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Gimlet Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"gimlet-highball-102","name":"Gimlet Highball","requires":["gin","lime","simple syrup","soda"],"programme":"Gin","tags":["citrusy","clean","classic","long"],"times":["afternoon","evening"],"moods":["relaxed","social","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Gimlet Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"southside-royale-103","name":"Southside Royale","requires":["gin","lemon","mint","simple syrup","sparkling wine"],"programme":"Gin","tags":["fresh","herbal","citrusy","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Fresh mint","imperial":"8 leaves","metric":"8 leaves","key":"mint"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Add mint, citrus and sweetener to the glass and press very gently.","Add the base spirit and fill halfway with crushed ice.","Churn briefly, top as specified and mound with more crushed ice.","Garnish with a fresh mint bouquet."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Southside Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"southside-highball-104","name":"Southside Highball","requires":["gin","lemon","mint","simple syrup","soda"],"programme":"Gin","tags":["fresh","herbal","citrusy","long"],"times":["afternoon","evening"],"moods":["relaxed","social","relaxed"],"weather":["warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Fresh mint","imperial":"8 leaves","metric":"8 leaves","key":"mint"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball glass","ice":"Crushed ice","garnish":"Mint bouquet and lime wedge","instructions":["Add mint, citrus and sweetener to the glass and press very gently.","Add the base spirit and fill halfway with crushed ice.","Churn briefly, top as specified and mound with more crushed ice.","Garnish with a fresh mint bouquet."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Southside Highball cocktail in a Highball glass, with Mint bouquet and lime wedge, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"last-word-highball-105","name":"Last Word Highball","requires":["gin","green chartreuse","luxardo maraschino","lime","soda"],"programme":"Gin","tags":["herbal","citrusy","complex","long"],"times":["afternoon","evening"],"moods":["adventurous","reflective","relaxed"],"weather":["mild","cool"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"3/4 oz","metric":"22.5 ml","key":"gin"},{"ingredient":"Green Chartreuse","imperial":"3/4 oz","metric":"22.5 ml","key":"green chartreuse"},{"ingredient":"Maraschino liqueur","imperial":"3/4 oz","metric":"22.5 ml","key":"luxardo maraschino"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Green Chartreuse: no exact substitute exists. A herbal liqueur can be tried, but the recipe will materially change.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Last Word","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Last Word Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"lightened-last-word-royale-106","name":"Lightened Last Word Royale","requires":["gin","green chartreuse","luxardo maraschino","lime","sparkling wine"],"programme":"Gin","tags":["herbal","citrusy","balanced","sparkling"],"times":["evening"],"moods":["adventurous","social","celebrating"],"weather":["mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"3/4 oz","metric":"22.5 ml","key":"gin"},{"ingredient":"Green Chartreuse","imperial":"3/4 oz","metric":"22.5 ml","key":"green chartreuse"},{"ingredient":"Maraschino liqueur","imperial":"3/4 oz","metric":"22.5 ml","key":"luxardo maraschino"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Green Chartreuse: no exact substitute exists. A herbal liqueur can be tried, but the recipe will materially change.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Lightened Last Word Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"lightened-last-word-highball-107","name":"Lightened Last Word Highball","requires":["gin","green chartreuse","luxardo maraschino","lime","soda"],"programme":"Gin","tags":["herbal","citrusy","balanced","long"],"times":["afternoon","evening"],"moods":["adventurous","social","relaxed"],"weather":["mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"3/4 oz","metric":"22.5 ml","key":"gin"},{"ingredient":"Green Chartreuse","imperial":"3/4 oz","metric":"22.5 ml","key":"green chartreuse"},{"ingredient":"Maraschino liqueur","imperial":"3/4 oz","metric":"22.5 ml","key":"luxardo maraschino"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Green Chartreuse: no exact substitute exists. A herbal liqueur can be tried, but the recipe will materially change.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Lightened Last Word Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"bijou-highball-108","name":"Bijou Highball","requires":["gin","green chartreuse","sweet vermouth","orange bitters","soda"],"programme":"Gin","tags":["herbal","rich","spirit-forward","long"],"times":["afternoon","evening"],"moods":["reflective","adventurous","relaxed"],"weather":["cool","rainy"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Green Chartreuse","imperial":"3/4 oz","metric":"22.5 ml","key":"green chartreuse"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Green Chartreuse: no exact substitute exists. A herbal liqueur can be tried, but the recipe will materially change.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Bijou Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"martinez-highball-109","name":"Martinez Highball","requires":["gin","sweet vermouth","luxardo maraschino","orange bitters","soda"],"programme":"Gin","tags":["rich","classic","spirit-forward","long"],"times":["afternoon","evening"],"moods":["reflective","quiet","relaxed"],"weather":["cool","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Maraschino liqueur","imperial":"1/2 oz","metric":"15 ml","key":"luxardo maraschino"},{"ingredient":"Orange bitters","imperial":"2 dashes","metric":"2 dashes","key":"orange bitters"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Martinez","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Martinez Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"aviation-royale-110","name":"Aviation Royale","requires":["gin","luxardo maraschino","lemon","sparkling wine"],"programme":"Gin","tags":["floral","citrusy","classic","sparkling"],"times":["evening"],"moods":["social","adventurous","celebrating"],"weather":["mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Maraschino liqueur","imperial":"1/2 oz","metric":"15 ml","key":"luxardo maraschino"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Aviation","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Aviation Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"aviation-highball-111","name":"Aviation Highball","requires":["gin","luxardo maraschino","lemon","soda"],"programme":"Gin","tags":["floral","citrusy","classic","long"],"times":["afternoon","evening"],"moods":["social","adventurous","relaxed"],"weather":["mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Maraschino liqueur","imperial":"1/2 oz","metric":"15 ml","key":"luxardo maraschino"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Aviation","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Aviation Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"tom-collins-royale-112","name":"Tom Collins Royale","requires":["gin","lemon","simple syrup","soda","sparkling wine"],"programme":"Gin","tags":["long","citrusy","refreshing","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Tom Collins","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Tom Collins Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"french-75-highball-113","name":"French 75 Highball","requires":["gin","lemon","simple syrup","sparkling wine","soda"],"programme":"Gin","tags":["sparkling","citrusy","celebratory","long"],"times":["afternoon","evening"],"moods":["celebrating","social","relaxed"],"weather":["mild","warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Gin","imperial":"2 oz","metric":"60 ml","key":"gin"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Gin: use a quality London dry for structure; a floral gin will soften the drink.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the French 75","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a French 75 Highball cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"classic-margarita-royale-114","name":"Classic Margarita Royale","requires":["blanco tequila","triple sec","lime","sparkling wine"],"programme":"Tequila","tags":["citrusy","bright","classic","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating","celebrating"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Classic Margarita","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Classic Margarita Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"classic-margarita-highball-115","name":"Classic Margarita Highball","requires":["blanco tequila","triple sec","lime","soda"],"programme":"Tequila","tags":["citrusy","bright","classic","long"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Classic Margarita","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Classic Margarita Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"tommy-s-margarita-royale-116","name":"Tommy's Margarita Royale","requires":["blanco tequila","lime","agave syrup","sparkling wine"],"programme":"Tequila","tags":["citrusy","clean","agave","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Agave syrup","imperial":"1/2 oz","metric":"15 ml","key":"agave syrup"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Tommy's Margarita","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Tommy's Margarita Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"tommy-s-margarita-highball-117","name":"Tommy's Margarita Highball","requires":["blanco tequila","lime","agave syrup","soda"],"programme":"Tequila","tags":["citrusy","clean","agave","long"],"times":["afternoon","evening"],"moods":["relaxed","social","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Agave syrup","imperial":"1/2 oz","metric":"15 ml","key":"agave syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Tommy's Margarita","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Tommy's Margarita Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"paloma-royale-118","name":"Paloma Royale","requires":["blanco tequila","grapefruit","soda","lime","sparkling wine"],"programme":"Tequila","tags":["long","citrusy","refreshing","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Fresh grapefruit juice","imperial":"1 1/2 oz","metric":"45 ml","key":"grapefruit"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Fresh grapefruit juice: use freshly squeezed juice. Bottled juice is not recommended.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Paloma","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Paloma Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"el-diablo-royale-119","name":"El Diablo Royale","requires":["blanco tequila","creme de cassis","lime","ginger beer","sparkling wine"],"programme":"Tequila","tags":["fruity","spicy","citrusy","sparkling"],"times":["afternoon","evening"],"moods":["social","adventurous","celebrating"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Blanco tequila","imperial":"2 oz","metric":"60 ml","key":"blanco tequila"},{"ingredient":"Crème de cassis","imperial":"1/2 oz","metric":"15 ml","key":"creme de cassis"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Ginger beer","imperial":"3 oz","metric":"90 ml","key":"ginger beer"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Tequila: use a 100% agave blanco. Reposado may be used for a rounder, oakier result.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Ginger beer: choose a dry, assertive brand. Ginger ale will make a softer, sweeter drink."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a El Diablo Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"classic-daiquiri-royale-120","name":"Classic Daiquiri Royale","requires":["white rum","lime","simple syrup","sparkling wine"],"programme":"Rum","tags":["citrusy","clean","classic","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Classic Daiquiri","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Classic Daiquiri Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"classic-daiquiri-highball-121","name":"Classic Daiquiri Highball","requires":["white rum","lime","simple syrup","soda"],"programme":"Rum","tags":["citrusy","clean","classic","long"],"times":["afternoon","evening"],"moods":["relaxed","social","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Classic Daiquiri","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Classic Daiquiri Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"hemingway-daiquiri-royale-122","name":"Hemingway Daiquiri Royale","requires":["white rum","luxardo maraschino","grapefruit","lime","sparkling wine"],"programme":"Rum","tags":["dry","citrusy","complex","sparkling"],"times":["afternoon","evening"],"moods":["adventurous","social","celebrating"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Maraschino liqueur","imperial":"1/2 oz","metric":"15 ml","key":"luxardo maraschino"},{"ingredient":"Fresh grapefruit juice","imperial":"1 1/2 oz","metric":"45 ml","key":"grapefruit"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Fresh grapefruit juice: use freshly squeezed juice. Bottled juice is not recommended.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Hemingway Daiquiri","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Hemingway Daiquiri Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"hemingway-daiquiri-highball-123","name":"Hemingway Daiquiri Highball","requires":["white rum","luxardo maraschino","grapefruit","lime","soda"],"programme":"Rum","tags":["dry","citrusy","complex","long"],"times":["afternoon","evening"],"moods":["adventurous","social","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Maraschino liqueur","imperial":"1/2 oz","metric":"15 ml","key":"luxardo maraschino"},{"ingredient":"Fresh grapefruit juice","imperial":"1 1/2 oz","metric":"45 ml","key":"grapefruit"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Fresh grapefruit juice: use freshly squeezed juice. Bottled juice is not recommended.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Hemingway Daiquiri","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Hemingway Daiquiri Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"mojito-royale-124","name":"Mojito Royale","requires":["white rum","lime","mint","simple syrup","soda","sparkling wine"],"programme":"Rum","tags":["fresh","long","citrusy","sparkling"],"times":["afternoon","evening"],"moods":["relaxed","social","celebrating"],"weather":["warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Fresh mint","imperial":"8 leaves","metric":"8 leaves","key":"mint"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Add mint, citrus and sweetener to the glass and press very gently.","Add the base spirit and fill halfway with crushed ice.","Churn briefly, top as specified and mound with more crushed ice.","Garnish with a fresh mint bouquet."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Mojito","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Mojito Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"el-presidente-royale-125","name":"El Presidente Royale","requires":["white rum","dry vermouth","triple sec","grenadine","sparkling wine"],"programme":"Rum","tags":["elegant","rum","classic","sparkling"],"times":["evening"],"moods":["reflective","social","celebrating"],"weather":["mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Dry vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"dry vermouth"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Grenadine","imperial":"1/4 oz","metric":"7.5 ml","key":"grenadine"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a El Presidente Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"el-presidente-highball-126","name":"El Presidente Highball","requires":["white rum","dry vermouth","triple sec","grenadine","soda"],"programme":"Rum","tags":["elegant","rum","classic","long"],"times":["afternoon","evening"],"moods":["reflective","social","relaxed"],"weather":["mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"White rum","imperial":"2 oz","metric":"60 ml","key":"white rum"},{"ingredient":"Dry vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"dry vermouth"},{"ingredient":"Orange liqueur / triple sec","imperial":"3/4 oz","metric":"22.5 ml","key":"triple sec"},{"ingredient":"Grenadine","imperial":"1/4 oz","metric":"7.5 ml","key":"grenadine"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["White rum: a lightly aged filtered rum is acceptable; avoid strongly flavoured spiced rum.","Dry vermouth: use a fresh, refrigerated bottle. Fino sherry offers a drier, nuttier variation.","Orange liqueur: Cointreau, quality triple sec or dry curaçao may be used; sweetness varies."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a El Presidente Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"agricole-daiquiri-royale-127","name":"Agricole Daiquiri Royale","requires":["rhum agricole","lime","cane syrup","sparkling wine"],"programme":"Rum","tags":["agricole","citrusy","bright","sparkling"],"times":["afternoon","evening"],"moods":["adventurous","social","celebrating"],"weather":["warm","mild"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Rhum agricole","imperial":"2 oz","metric":"60 ml","key":"rhum agricole"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Cane syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"cane syrup"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Rhum agricole: substitute a dry white rum only as a fallback; the grassy character will be reduced.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Agricole Daiquiri Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"agricole-daiquiri-highball-128","name":"Agricole Daiquiri Highball","requires":["rhum agricole","lime","cane syrup","soda"],"programme":"Rum","tags":["agricole","citrusy","bright","long"],"times":["afternoon","evening"],"moods":["adventurous","social","relaxed"],"weather":["warm","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Rhum agricole","imperial":"2 oz","metric":"60 ml","key":"rhum agricole"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Cane syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"cane syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Rhum agricole: substitute a dry white rum only as a fallback; the grassy character will be reduced.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Agricole Daiquiri Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"rum-old-fashioned-highball-129","name":"Rum Old Fashioned Highball","requires":["aged rum","maple syrup","aromatic bitters","soda"],"programme":"Rum","tags":["rich","spirit-forward","evening","long"],"times":["afternoon","evening"],"moods":["quiet","reflective","relaxed"],"weather":["cool","rainy"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Aged rum","imperial":"2 oz","metric":"60 ml","key":"aged rum"},{"ingredient":"Maple syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"maple syrup"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Maple syrup: use pure maple syrup. A 2:1 demerara syrup is the closest neutral substitute."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Rum Old Fashioned Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"rum-manhattan-highball-130","name":"Rum Manhattan Highball","requires":["aged rum","sweet vermouth","aromatic bitters","soda"],"programme":"Rum","tags":["rich","classic","spirit-forward","long"],"times":["afternoon","evening"],"moods":["reflective","quiet","relaxed"],"weather":["cool","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Aged rum","imperial":"2 oz","metric":"60 ml","key":"aged rum"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Rum Manhattan Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"dark-n-stormy-royale-131","name":"Dark 'n' Stormy Royale","requires":["dark rum","ginger beer","lime","sparkling wine"],"programme":"Rum","tags":["spicy","long","rum","sparkling"],"times":["afternoon","evening"],"moods":["social","relaxed","celebrating"],"weather":["warm","rainy"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Dark rum","imperial":"2 oz","metric":"60 ml","key":"dark rum"},{"ingredient":"Ginger beer","imperial":"3 oz","metric":"90 ml","key":"ginger beer"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Ginger beer: choose a dry, assertive brand. Ginger ale will make a softer, sweeter drink.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Dark 'n' Stormy Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"jungle-bird-royale-132","name":"Jungle Bird Royale","requires":["dark rum","campari","pineapple","lime","simple syrup","sparkling wine"],"programme":"Rum","tags":["bitter","tropical","citrusy","sparkling"],"times":["afternoon","evening"],"moods":["adventurous","social","celebrating"],"weather":["warm"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Dark rum","imperial":"2 oz","metric":"60 ml","key":"dark rum"},{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Pineapple juice","imperial":"1 1/2 oz","metric":"45 ml","key":"pineapple"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Jungle Bird Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"jungle-bird-highball-133","name":"Jungle Bird Highball","requires":["dark rum","campari","pineapple","lime","simple syrup","soda"],"programme":"Rum","tags":["bitter","tropical","citrusy","long"],"times":["afternoon","evening"],"moods":["adventurous","social","relaxed"],"weather":["warm"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Dark rum","imperial":"2 oz","metric":"60 ml","key":"dark rum"},{"ingredient":"Campari","imperial":"1 oz","metric":"30 ml","key":"campari"},{"ingredient":"Pineapple juice","imperial":"1 1/2 oz","metric":"45 ml","key":"pineapple"},{"ingredient":"Fresh lime juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lime"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Campari: another red bitter aperitivo may be used, but sweetness and bitterness will vary.","Fresh lime juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Jungle Bird Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"monte-carlo-highball-134","name":"Monte Carlo Highball","requires":["canadian whisky","benedictine","aromatic bitters","soda"],"programme":"Canadian Whisky","tags":["rich","herbal","spirit-forward","long"],"times":["afternoon","evening"],"moods":["reflective","quiet","relaxed"],"weather":["cool","rainy"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Bénédictine","imperial":"1/2 oz","metric":"15 ml","key":"benedictine"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Monte Carlo","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Monte Carlo Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"toronto-highball-135","name":"Toronto Highball","requires":["canadian whisky","fernet","aromatic bitters","simple syrup","soda"],"programme":"Canadian Whisky","tags":["bitter","herbal","spirit-forward","long"],"times":["afternoon","evening"],"moods":["reflective","adventurous","relaxed"],"weather":["cool","rainy"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Fernet-Branca","imperial":"1/4 oz","metric":"7.5 ml","key":"fernet"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Toronto","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Toronto Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"canadian-whisky-sour-royale-136","name":"Canadian Whisky Sour Royale","requires":["canadian whisky","lemon","simple syrup","sparkling wine"],"programme":"Canadian Whisky","tags":["citrusy","whisky","balanced","sparkling"],"times":["afternoon","evening"],"moods":["social","relaxed","celebrating"],"weather":["mild","cool"],"method":"built","strength":"medium","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Dry sparkling wine","imperial":"2 oz","metric":"60 ml","key":"sparkling wine"}],"glassware":"Large wine glass","ice":"Cubed ice","garnish":"Orange slice or lemon twist","instructions":["Fill the large wine glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Canadian Whisky Sour Royale cocktail in a Large wine glass, with Orange slice or lemon twist, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"canadian-whisky-sour-highball-137","name":"Canadian Whisky Sour Highball","requires":["canadian whisky","lemon","simple syrup","soda"],"programme":"Canadian Whisky","tags":["citrusy","whisky","balanced","long"],"times":["afternoon","evening"],"moods":["social","relaxed","relaxed"],"weather":["mild","cool"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Fresh lemon juice","imperial":"3/4 oz","metric":"22.5 ml","key":"lemon"},{"ingredient":"Simple syrup","imperial":"1/2 oz","metric":"15 ml","key":"simple syrup"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Fresh lemon juice: use freshly squeezed juice. Bottled juice is not recommended.","Simple syrup: use 1:1 sugar syrup. Rich 2:1 syrup should be reduced by roughly one-third."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Canadian Whisky Sour Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"maple-old-fashioned-highball-138","name":"Maple Old Fashioned Highball","requires":["canadian whisky","maple syrup","aromatic bitters","soda"],"programme":"Canadian Whisky","tags":["maple","rich","spirit-forward","long"],"times":["afternoon","evening"],"moods":["quiet","reflective","relaxed"],"weather":["cool","rainy"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Maple syrup","imperial":"1/4 oz","metric":"7.5 ml","key":"maple syrup"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Maple syrup: use pure maple syrup. A 2:1 demerara syrup is the closest neutral substitute."],"source_info":{"designation":"Turn the Tide House Standard","source":"Turn the Tide normalized home-bar specification","note":"A practical house specification informed by the cocktail family and ingredient balance."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Maple Old Fashioned Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."},{"id":"manhattan-highball-139","name":"Manhattan Highball","requires":["canadian whisky","sweet vermouth","aromatic bitters","soda"],"programme":"Canadian Whisky","tags":["classic","rich","spirit-forward","long"],"times":["afternoon","evening"],"moods":["reflective","celebrating","relaxed"],"weather":["cool","mild"],"method":"built","strength":"low","serving_size":"1 cocktail","ingredients":[{"ingredient":"Canadian whisky or rye","imperial":"2 oz","metric":"60 ml","key":"canadian whisky"},{"ingredient":"Sweet vermouth","imperial":"3/4 oz","metric":"22.5 ml","key":"sweet vermouth"},{"ingredient":"Aromatic bitters","imperial":"2 dashes","metric":"2 dashes","key":"aromatic bitters"},{"ingredient":"Soda water","imperial":"2 oz","metric":"60 ml","key":"soda"}],"glassware":"Highball or Collins glass","ice":"Cubed ice","garnish":"Citrus wheel appropriate to the recipe","instructions":["Fill the highball or collins glass with fresh ice.","Add the spirit, modifiers and citrus in the order listed.","Top with the carbonated ingredient, where applicable.","Stir gently two or three times and garnish."],"substitutions":["Canadian whisky: rye-forward Canadian whisky is preferred; bourbon may be used but will taste sweeter.","Sweet vermouth: use a fresh, refrigerated bottle. A drier vermouth may require a small increase in sweetener."],"source_info":{"designation":"Turn the Tide House Variation","source":"Turn the Tide variation on the Manhattan","note":"A house adaptation created from an established classic; not represented as the original recipe."},"validation":{"schema_complete":true,"measurement_systems":["US customary","metric"],"review_status":"House specification complete; sensory validation pending"},"image_prompt":"Vertical mobile recipe hero photograph of a Manhattan Highball cocktail in a Highball or Collins glass, with Citrus wheel appropriate to the recipe, dark coastal Atlantic Canadian setting, realistic bar photography, no text, no logos, portrait 4:3 crop with clear drink detail."}];

const STORAGE_KEY="turn_the_tide_phase2_inventory";
const WISHLIST_KEY="turn_the_tide_phase2_wishlist";
const TASTE_KEY="turn_the_tide_phase2_taste";
const HISTORY_KEY="turn_the_tide_phase2_history";
const FAV_KEY="turn_the_tide_phase2_favourites";
const MANUAL_PREF_KEY="turn_the_tide_phase3_manual_preferences";
const FEEDBACK_KEY="turn_the_tide_phase3_feedback";

const STAPLES_KEY="turn_the_tide_v3_staples";
const MEASUREMENT_KEY="turn_the_tide_measurement_system";
const SHOPPING_IGNORE_KEY="turn_the_tide_shopping_ignored";
const PERSONALIZATION_KEY="turn_the_tide_personalization";
const EXPERIENCE_KEY="turn_the_tide_experience";
const ONBOARDING_KEY="turn_the_tide_onboarding_complete";
const DEFAULT_STAPLES={
 "lemon":true,
 "lime":true,
 "simple syrup":true,
 "sugar":true,
 "soda":true,
 "saline":true,
 "mint":false,
 "cucumber":false,
 "coffee":false,
 "cream":false
};


let inventory=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null")||[
 {id:crypto.randomUUID(),name:"Tanqueray Gin",brand:"Tanqueray",type:"Gin",status:"good",notes:""},
 {id:crypto.randomUUID(),name:"St-Germain",brand:"St-Germain",type:"Liqueur",status:"low",notes:""},
 {id:crypto.randomUUID(),name:"Luxardo Maraschino",brand:"Luxardo",type:"Liqueur",status:"good",notes:""},
 {id:crypto.randomUUID(),name:"Saint James Impérial Blanc",brand:"Saint James",type:"Rum",status:"good",notes:"Rhum agricole"},
 {id:crypto.randomUUID(),name:"Blanco Tequila",brand:"Cenote",type:"Tequila",status:"good",notes:""},
 {id:crypto.randomUUID(),name:"Orange Bitters",brand:"",type:"Bitters",status:"good",notes:""},
 {id:crypto.randomUUID(),name:"Lime",brand:"",type:"Fresh ingredient",status:"good",notes:""},
 {id:crypto.randomUUID(),name:"Lemon",brand:"",type:"Fresh ingredient",status:"good",notes:""},
 {id:crypto.randomUUID(),name:"Triple Sec",brand:"",type:"Liqueur",status:"good",notes:""}
];
let wishlist=JSON.parse(localStorage.getItem(WISHLIST_KEY)||"[]");
let taste=JSON.parse(localStorage.getItem(TASTE_KEY)||"{}");
let history=JSON.parse(localStorage.getItem(HISTORY_KEY)||"[]");
let favourites=JSON.parse(localStorage.getItem(FAV_KEY)||"[]");
let manualPreferences=JSON.parse(localStorage.getItem(MANUAL_PREF_KEY)||"{}");
let detailedFeedback=JSON.parse(localStorage.getItem(FEEDBACK_KEY)||"[]");
let staples={...DEFAULT_STAPLES,...JSON.parse(localStorage.getItem(STAPLES_KEY)||"{}")};
let measurementSystem=localStorage.getItem(MEASUREMENT_KEY)||"metric";
let ignoredShopping=JSON.parse(localStorage.getItem(SHOPPING_IGNORE_KEY)||"[]");
let activeInventoryFamily="all";
let personalization={discovery:"balanced",defaultStrength:"any",...JSON.parse(localStorage.getItem(PERSONALIZATION_KEY)||"{}")};
let experience={haptics:true,celebrations:true,...JSON.parse(localStorage.getItem(EXPERIENCE_KEY)||"{}")};
let photos=[],candidates=[];
let selectedMood=localStorage.getItem("ttt_phase2_mood")||"relaxed";
let selectedOccasion=localStorage.getItem("ttt_phase2_occasion")||"quiet";
let selectedStrength=localStorage.getItem("ttt_phase2_strength")||"any";
let recommendationSet=[];
let sessionSeen=JSON.parse(sessionStorage.getItem("ttt_phase2_seen")||"[]");

const ingredientAliases={
 "gin":["gin"],"dry vermouth":["dry vermouth","noilly prat"],"sweet vermouth":["sweet vermouth","vermut rojo","lustau"],
 "orange bitters":["orange bitters"],"aromatic bitters":["angostura","aromatic bitters"],"walnut bitters":["walnut bitters"],
 "triple sec":["triple sec","cointreau","orange liqueur"],"lemon":["lemon"],"lime":["lime"],
 "st-germain":["st-germain","elderflower"],"campari":["campari"],"aperol":["aperol"],"sparkling wine":["prosecco","sparkling wine","champagne"],
 "soda":["soda","club soda"],"tonic":["tonic"],"green chartreuse":["green chartreuse"],"yellow chartreuse":["yellow chartreuse"],
 "luxardo maraschino":["luxardo maraschino","maraschino"],"blanco tequila":["blanco tequila","tequila blanco","tequila","cenote"],
 "mezcal":["mezcal"],"grapefruit":["grapefruit"],"agave syrup":["agave syrup","agave nectar"],"orange juice":["orange juice"],
 "grenadine":["grenadine"],"creme de cassis":["creme de cassis","crème de cassis"],"ginger beer":["ginger beer"],"pineapple":["pineapple","pineapple juice"],
 "white rum":["white rum","havana club"],"aged rum":["aged rum","diplomatico","diplomático"],"dark rum":["dark rum","goslings"],
 "rhum agricole":["rhum agricole","saint james"],"cane syrup":["cane syrup"],"maple syrup":["maple syrup"],"cola":["cola"],
 "orgeat":["orgeat"],"canadian whisky":["canadian whisky","rye","lot no. 40","lot 40","signal hill","canadian club"],
 "benedictine":["benedictine","bénédictine"],"fernet":["fernet"],"scotch":["scotch"],"drambuie":["drambuie"],"amaretto":["amaretto","disaronno"],
 "honey syrup":["honey syrup","honey"],"ginger":["ginger"],"cherry liqueur":["cherry liqueur"],"irish whiskey":["irish whiskey"],
 "coffee":["coffee"],"sugar":["sugar","simple syrup"],"simple syrup":["simple syrup","sugar"],"cream":["cream"],"cucumber":["cucumber"],
 "mint":["mint"],"brandy":["brandy","cognac","st-rémy","st remy"],"creme de cacao":["creme de cacao"],"creme de menthe":["creme de menthe"],
 "vodka":["vodka"],"coffee liqueur":["coffee liqueur","kahlua","kahlúa"],"espresso":["espresso"],"cranberry":["cranberry"],
 "amaro nonino":["amaro nonino"],"amaro":["amaro","ramazzotti","cynar"],"cynar":["cynar"],"sherry":["sherry"],"saline":["saline","salt"]
};

const moodOptions=[
 ["relaxed","Relaxed"],["adventurous","Adventurous"],["celebrating","Celebrating"],
 ["social","Social"],["reflective","Reflective"],["quiet","Quiet Evening"]
];
const occasionOptions=[
 ["quiet","Quiet evening"],["friends","Friends over"],["before-dinner","Before dinner"],
 ["by-water","By the water"],["rain","Rain on the deck"],["music","Evening music"]
];


function gentleFeedback(pattern=12){
 if(!experience.haptics)return;
 if("vibrate" in navigator){
  try{navigator.vibrate(pattern)}catch{}
 }
}

function celebrateMoment(message){
 if(!experience.celebrations)return;
 const node=document.createElement("div");
 node.className="celebration-burst";
 node.setAttribute("aria-hidden","true");
 node.innerHTML=`<span></span><span></span><span></span><strong>${escapeHtml(message)}</strong>`;
 document.body.appendChild(node);
 requestAnimationFrame(()=>node.classList.add("show"));
 setTimeout(()=>node.classList.remove("show"),1200);
 setTimeout(()=>node.remove(),1550);
}

function renderExperienceControls(){
 if(hapticsToggle)hapticsToggle.checked=Boolean(experience.haptics);
 if(celebrationToggle)celebrationToggle.checked=Boolean(experience.celebrations);
}

hapticsToggle?.addEventListener("change",()=>{
 experience.haptics=hapticsToggle.checked;
 localStorage.setItem(EXPERIENCE_KEY,JSON.stringify(experience));
 gentleFeedback(10);
 showToast(experience.haptics?"Subtle feedback enabled.":"Subtle feedback disabled.");
});

celebrationToggle?.addEventListener("change",()=>{
 experience.celebrations=celebrationToggle.checked;
 localStorage.setItem(EXPERIENCE_KEY,JSON.stringify(experience));
 if(experience.celebrations)celebrateMoment("Enabled");
 showToast(experience.celebrations?"Celebration moments enabled.":"Celebration moments disabled.");
});

function currentMilestone(){
 const bottleCount=inventory.length;
 const madeCount=history.length;
 const favouriteCount=favourites.length;
 if(bottleCount>=50)return {title:"A serious home bar",body:`${bottleCount} bottles now support ${availableRecipes().length} ready cocktails.`};
 if(bottleCount>=25)return {title:"Your bar has range",body:`${bottleCount} bottles are opening up a much broader cocktail spectrum.`};
 if(madeCount>=20)return {title:"A real cocktail journal",body:`You have logged ${madeCount} drinks and the taste profile is becoming meaningfully personal.`};
 if(favouriteCount>=5)return {title:"Your house list is emerging",body:`You have saved ${favouriteCount} House Favourites.`};
 if(bottleCount>=10)return {title:"Your bar is taking shape",body:`${bottleCount} bottles are enough to make ${availableRecipes().length} curated cocktails right now.`};
 return null;
}

function renderMilestone(){
 if(!homeMilestoneCard)return;
 const milestone=currentMilestone();
 homeMilestoneCard.classList.toggle("hidden",!milestone);
 if(milestone){
  homeMilestoneTitle.textContent=milestone.title;
  homeMilestoneBody.textContent=milestone.body;
 }
}

function maybeShowOnboarding(){
 if(localStorage.getItem(ONBOARDING_KEY)==="true")return;
 setTimeout(()=>onboardingDialog?.showModal(),350);
}

onboardingClose?.addEventListener("click",()=>{
 localStorage.setItem(ONBOARDING_KEY,"true");
 onboardingDialog.close();
});
onboardingSkip?.addEventListener("click",()=>{
 localStorage.setItem(ONBOARDING_KEY,"true");
 onboardingDialog.close();
});
onboardingStart?.addEventListener("click",()=>{
 localStorage.setItem(ONBOARDING_KEY,"true");
 onboardingDialog.close();
 showView("scanView");
});

function save(){
 localStorage.setItem(STORAGE_KEY,JSON.stringify(inventory));
 localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist));
 localStorage.setItem(TASTE_KEY,JSON.stringify(taste));
 localStorage.setItem(HISTORY_KEY,JSON.stringify(history));
 localStorage.setItem(FAV_KEY,JSON.stringify(favourites));
 localStorage.setItem(MANUAL_PREF_KEY,JSON.stringify(manualPreferences));
 localStorage.setItem(FEEDBACK_KEY,JSON.stringify(detailedFeedback));
 localStorage.setItem(STAPLES_KEY,JSON.stringify(staples));
 localStorage.setItem(MEASUREMENT_KEY,measurementSystem);
 localStorage.setItem(SHOPPING_IGNORE_KEY,JSON.stringify(ignoredShopping));
 localStorage.setItem(PERSONALIZATION_KEY,JSON.stringify(personalization));
 localStorage.setItem(EXPERIENCE_KEY,JSON.stringify(experience));
 renderAll()
}
function normalizedInventory(){return inventory.filter(x=>x.status!=="replace").flatMap(x=>[(x.name||"").toLowerCase(),(x.brand||"").toLowerCase(),(x.type||"").toLowerCase(),(x.notes||"").toLowerCase()])}
function hasIngredient(key){if(staples[key])return true;const hay=normalizedInventory().join(" | ");return (ingredientAliases[key]||[key]).some(a=>hay.includes(a))}
function missingFor(r){return r.requires.filter(x=>!hasIngredient(x))}
function availableRecipes(){return RECIPE_LIBRARY.filter(r=>missingFor(r).length===0)}
function statusLabel(s){return s==="low"?"Running low":s==="replace"?"Need to replace":"Good"}
function statusClass(s){return `status-${s}`}
function titleCase(s){return s.replace(/\b\w/g,c=>c.toUpperCase())}
function escapeHtml(s=""){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function partOfDay(){const h=new Date().getHours();return h<12?"morning":h<17?"afternoon":h<21?"evening":"night"}
function weatherGuess(){const m=new Date().getMonth()+1;return m>=6&&m<=9?"warm":"cool"}

function showToast(message){
 const toast=document.getElementById("appToast");
 if(!toast)return;
 toast.textContent=message;
 toast.classList.add("show");
 clearTimeout(showToast.timer);
 showToast.timer=setTimeout(()=>toast.classList.remove("show"),2600);
}
function setScanProgress(percent,message){
 const progress=document.getElementById("scanProgress");
 const bar=document.getElementById("scanProgressBar");
 if(progress)progress.classList.remove("hidden");
 if(progress)progress.setAttribute("aria-hidden","false");
 if(bar)bar.style.width=`${Math.max(0,Math.min(100,percent))}%`;
 if(message){
  scanStatus.textContent=message;
  if(scanWorkingTitle){
   scanWorkingTitle.textContent=percent<50?"Preparing your photos":percent<82?"Sending the shelf securely":"Recognizing bottles";
  }
 }
}
function clearScanProgress(){
 const progress=document.getElementById("scanProgress");
 const bar=document.getElementById("scanProgressBar");
 bar.style.width="0%";
 progress.classList.add("hidden");
 progress.setAttribute("aria-hidden","true");
}

function setScanStage(stage){
 const stages=["photos","analyse","confirm"];
 const activeIndex=stages.indexOf(stage);
 [
  ["photos",scanStepPhotos],
  ["analyse",scanStepAnalyse],
  ["confirm",scanStepConfirm]
 ].forEach(([name,node],index)=>{
  if(!node)return;
  node.classList.toggle("active",name===stage);
  node.classList.toggle("complete",index<activeIndex);
 });
}

function resetScannerView(){
 scanCaptureCard.classList.remove("hidden");
 scanWorkingCard.classList.add("hidden");
 scanResultsCard.classList.add("hidden");
 setScanStage("photos");
 clearScanProgress();
 scanStatus.textContent="";
}



window.showView=function showView(id){
 const target=document.getElementById(id);
 if(!target)return;
 document.querySelectorAll(".view").forEach(view=>view.classList.toggle("active",view===target));
 document.querySelectorAll(".bottom-nav button").forEach(button=>{
  const active=button.dataset.go===id;
  button.classList.toggle("active",active);
  button.setAttribute("aria-current",active?"page":"false");
 });
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 window.scrollTo({top:0,behavior:reduced?"auto":"smooth"});
 requestAnimationFrame(()=>{
  const heading=target.querySelector("h2");
  if(heading){heading.setAttribute("tabindex","-1");heading.focus({preventScroll:true});}
  else document.getElementById("mainContent")?.focus({preventScroll:true});
 });
};
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));

function calculateUnlocks(){
 const keys=[...new Set(RECIPE_LIBRARY.flatMap(r=>r.requires))].filter(k=>!hasIngredient(k));
 return keys.map(key=>({key,gain:RECIPE_LIBRARY.filter(r=>{const m=missingFor(r);return m.length===1&&m[0]===key}).length}))
 .filter(x=>x.gain>0).sort((a,b)=>b.gain-a.gain)
}
function calculateBarIQ(){
 const total=RECIPE_LIBRARY.length, available=availableRecipes().length;
 const programmes=[...new Set(RECIPE_LIBRARY.map(r=>r.programme))];
 const coverage=programmes.map(p=>{const set=RECIPE_LIBRARY.filter(r=>r.programme===p);return{name:p,score:Math.round(100*set.filter(r=>missingFor(r).length===0).length/set.length)}});
 const spirits=new Set(inventory.filter(x=>x.status!=="replace"&&!["Mixer","Fresh ingredient","Bitters","Other"].includes(x.type)).map(x=>x.type)).size;
 const statusPenalty=inventory.filter(x=>x.status==="replace").length*3+inventory.filter(x=>x.status==="low").length;
 return{score:Math.min(100,Math.round(65*(available/total))+Math.min(25,spirits*4)+Math.max(0,10-statusPenalty)),available,total,coverage}
}


function renderHomeContext(){
 const hour=new Date().getHours();
 const timeLabel=hour<12?"This morning":hour<17?"This afternoon":"Tonight";
 if(homeTimeContext)homeTimeContext.textContent=timeLabel;
 if(homeWeatherContext)homeWeatherContext.textContent=weatherGuess()==="warm"?"Warm weather":"Cool weather";
 const topTaste=Object.entries(tasteProfile||{}).sort((a,b)=>Number(b[1])-Number(a[1]))[0];
 if(homeTasteContext)homeTasteContext.textContent=topTaste?`${titleCase(topTaste[0])} leaning`:"Taste learning";
}

let homeRecommendationId=null;
let homeRecommendationOffset=0;
let homePurchaseKey=null;

function stableHomeScore(recipe){
 let score=100-missingFor(recipe).length*34;
 const hour=new Date().getHours();
 const warm=weatherGuess()==="warm";
 const evening=hour>=17;
 if(warm&&recipe.tags.some(tag=>["refreshing","citrusy","bright","sparkling","long"].includes(tag)))score+=7;
 if(!warm&&recipe.tags.some(tag=>["rich","spirit-forward","warming","herbal"].includes(tag)))score+=7;
 if(evening&&recipe.tags.includes("spirit-forward"))score+=2;
 if(favourites.includes(recipe.id))score+=8;
 const prior=history.filter(item=>item.recipeId===recipe.id);
 if(prior.some(item=>item.rating==="house-favourite"))score+=10;
 if(prior.some(item=>item.rating==="not-for-me"))score-=25;
 if(personalization.defaultStrength==="light"&&["light","low-abv"].some(tag=>recipe.tags.includes(tag)))score+=8;
 if(personalization.defaultStrength==="strong"&&recipe.tags.includes("spirit-forward"))score+=8;
 if(personalization.discovery==="familiar"&&prior.length)score+=7;
 if(personalization.discovery==="adventurous"&&!prior.length&&!favourites.includes(recipe.id))score+=7;
 for(const [tag,value] of Object.entries(tasteProfile||{})){
  if(recipe.tags.includes(tag))score+=Number(value||0)*1.4;
 }
 for(const [tag,value] of Object.entries(manualPreferences||{})){
  if(recipe.tags.includes(tag))score+=Number(value||0);
 }
 return score;
}

function homeRecommendationPool(){
 const ready=availableRecipes();
 const near=RECIPE_LIBRARY.filter(recipe=>missingFor(recipe).length===1);
 return (ready.length?ready:near).slice().sort((a,b)=>stableHomeScore(b)-stableHomeScore(a));
}

function homeWhyReasons(recipe){
 const missing=missingFor(recipe);
 const reasons=[];
 if(!missing.length)reasons.push("Everything needed is already in your bar.");
 else reasons.push(`Only ${titleCase(missing[0])} is missing.`);
 const topTaste=Object.entries(tasteProfile||{}).sort((a,b)=>Number(b[1])-Number(a[1]))[0];
 if(topTaste&&recipe.tags.includes(topTaste[0]))reasons.push(`It matches your ${titleCase(topTaste[0]).toLowerCase()} preference.`);
 if(weatherGuess()==="warm"&&recipe.tags.some(tag=>["refreshing","citrusy","bright","sparkling","long"].includes(tag))){
  reasons.push("It suits a warmer evening.");
 }
 if(weatherGuess()==="cool"&&recipe.tags.some(tag=>["rich","spirit-forward","warming","herbal"].includes(tag))){
  reasons.push("It suits a cooler evening.");
 }
 if(favourites.includes(recipe.id))reasons.push("You have saved it as a favourite.");
 if(!reasons.some(reason=>reason.includes("preference"))&&recipe.tags.length){
  reasons.push(`${titleCase(recipe.tags[0])} is a strong direction for tonight.`);
 }
 return reasons.slice(0,3);
}

function renderHomeRecommendation(){
 const pool=homeRecommendationPool();
 if(!pool.length){
  homeRecommendationId=null;
  homeRecommendationName.textContent="Build your bar";
  homeRecommendationTags.textContent="Scan or add bottles to receive a recommendation.";
  homeRecommendationStatus.textContent="Inventory needed";
  homeRecommendationReasons.innerHTML="";
  homeMakeBtn.textContent="Scan a shelf";
  homeMakeBtn.onclick=()=>showView("scanView");
  homeAnotherBtn.classList.add("hidden");
  return;
 }
 const recipe=pool[homeRecommendationOffset%pool.length];
 homeRecommendationId=recipe.id;
 const missing=missingFor(recipe);
 homeRecommendationName.textContent=recipe.name;
 homeRecommendationTags.textContent=recipe.tags.slice(0,3).map(titleCase).join(" · ");
 homeRecommendationStatus.textContent=missing.length?"One ingredient away":"Ready to make";
 homeRecommendationStatus.classList.toggle("ready",missing.length===0);
 const explanationSignals=recipePersonalSignals(recipe).slice(0,3);
 homeRecommendationReasons.innerHTML=explanationSignals.map(signal=>`<div>
  <span class="reason-icon">${signal.icon==="heart"?"♥":signal.icon==="moon"?"◐":signal.icon==="history"?"↺":"✓"}</span>
  <p><strong>${escapeHtml(signal.title)}</strong><small>${escapeHtml(signal.detail)}</small></p>
 </div>`).join("");
 homeMakeBtn.textContent=missing.length?"View recipe":"Make this";
 homeMakeBtn.onclick=()=>openRecipe(recipe.id);
 homeAnotherBtn.classList.remove("hidden");
 homeAnotherBtn.onclick=()=>{
  homeRecommendationOffset=(homeRecommendationOffset+1)%pool.length;
  renderHomeRecommendation();
 };
}

function addHomePurchaseToShopping(){
 if(!homePurchaseKey)return;
 const name=titleCase(homePurchaseKey);
 const unlock=calculateUnlocks().find(item=>item.key===homePurchaseKey);
 if(!wishlist.some(item=>item.name.toLowerCase()===name.toLowerCase())){
  wishlist.push({name,reason:`High-value addition · unlocks ${unlock?.gain||0} cocktails`});
  save();
 }
 showToast(`${name} added to the shopping list.`);
}

function renderDashboard(){
 const iq=calculateBarIQ();
 const low=inventory.filter(x=>x.status==="low");
 const replace=inventory.filter(x=>x.status==="replace");
 const purchase=[...replace,...low];
 const unlocks=calculateUnlocks();
 const withinReach=RECIPE_LIBRARY.filter(r=>missingFor(r).length===1).length;

 dashItems.textContent=inventory.length;
 dashLow.textContent=iq.available;
 dashReplace.textContent=withinReach;
 dashIQ.textContent=iq.score;
 if(capReady)capReady.textContent=iq.available;
 if(capWithinReach)capWithinReach.textContent=withinReach;
 if(capShopping)capShopping.textContent=wishlist.length;
 renderHomeContext();
 renderHomeRecommendation();

 if(!inventory.length){
  dashboardSummary.textContent="Scan your shelves to see what is ready now and what is one ingredient away.";
  insightTitle.textContent="Build your first inventory";
  insightBody.textContent="Scan one shelf at a time, then confirm the bottles the app identifies.";
  insightAction.textContent="Start inventory scan";
  insightAction.dataset.go="scanView";
  insightShopAction.classList.add("hidden");
  homePurchaseKey=null;
 }else{
  dashboardSummary.textContent=`${iq.available} ready now · ${withinReach} one ingredient away · ${iq.total} recipes in the curated library.`;
  if(replace.length){
   insightTitle.textContent=`Replace ${replace[0].name}`;
   insightBody.textContent="It is marked for replacement and appears on your purchase list.";
   insightAction.textContent="View purchase list";
   insightAction.dataset.go="shoppingView";
   insightShopAction.classList.add("hidden");
   homePurchaseKey=null;
  }else if(unlocks.length){
   homePurchaseKey=unlocks[0].key;
   insightTitle.textContent=titleCase(unlocks[0].key);
   insightBody.textContent=`Adds ${unlocks[0].gain} cocktails and fills the largest current gap in your bar.`;
   insightAction.textContent="See why";
   insightAction.dataset.go="barIqView";
   insightShopAction.classList.remove("hidden");
   insightShopAction.textContent="Add to shopping list";
   insightShopAction.onclick=addHomePurchaseToShopping;
  }else{
   insightTitle.textContent="Your bar is broadly covered";
   insightBody.textContent="No single bottle creates a major jump. Explore the Bar Compass for a fresh direction.";
   insightAction.textContent="See inventory analysis";
   insightAction.dataset.go="barIqView";
   insightShopAction.classList.add("hidden");
   homePurchaseKey=null;
  }
 }
 insightAction.onclick=()=>showView(insightAction.dataset.go);

 dashboardPurchaseCard.classList.toggle("hidden",purchase.length===0);
 dashboardRecentCard.classList.toggle("hidden",inventory.length===0);
 dashboardPurchaseList.innerHTML=purchase.slice(0,4).map(item=>`<div class="compact-row"><div><strong>${escapeHtml(item.name)}</strong><small>${statusLabel(item.status)}</small></div><span class="status-pill ${statusClass(item.status)}">${statusLabel(item.status)}</span></div>`).join("");
 recentInventory.innerHTML=inventory.slice(-6).reverse().map(bottleCard).join("");
}
function bottleCard(x){return `<article class="bottle-card"><strong>${escapeHtml(x.name)}</strong><small>${escapeHtml(x.type)}</small><span class="status-pill ${statusClass(x.status)}">${statusLabel(x.status)}</span></article>`}


const INVENTORY_FAMILIES=[
 {id:"all",name:"All",types:[]},
 {id:"gin",name:"Gin",types:["Gin"]},
 {id:"whisky",name:"Whisky",types:["Canadian whisky","Scotch","Irish whiskey"]},
 {id:"rum",name:"Rum",types:["Rum"]},
 {id:"agave",name:"Agave",types:["Tequila"]},
 {id:"brandy",name:"Brandy",types:["Brandy/Cognac"]},
 {id:"liqueur",name:"Liqueurs",types:["Liqueur"]},
 {id:"aperitif",name:"Aperitif",types:["Amaro/Aperitivo","Vermouth/Fortified wine"]},
 {id:"other",name:"Other",types:["Vodka","Bitters","Mixer","Fresh ingredient","Other"]}
];

function inventoryFamilyFor(item){
 return INVENTORY_FAMILIES.find(family=>family.types.includes(item.type))||INVENTORY_FAMILIES.at(-1);
}

function recipesUsingInventoryItem(item){
 const text=[item.name,item.brand,item.type].join(" ").toLowerCase();
 return RECIPE_LIBRARY.filter(recipe=>recipe.requires.some(key=>text.includes(key)||key.includes(text)));
}

function inventoryItemCard(item){
 const family=inventoryFamilyFor(item);
 const recipes=recipesUsingInventoryItem(item);
 const ready=recipes.filter(recipe=>missingFor(recipe).length===0);
 const note=item.notes?.trim();
 return `<article class="bottle-card" tabindex="0" role="button" onclick="openBottleDetail('${item.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openBottleDetail('${item.id}')}">
  <div class="bottle-card-top">
   <span class="bottle-family">${escapeHtml(family.name)}</span>
   <span class="status-pill ${statusClass(item.status)}">${statusLabel(item.status)}</span>
  </div>
  <div class="bottle-card-art" aria-hidden="true">
   <span class="bottle-shape ${family.id}"></span>
  </div>
  <div class="bottle-card-copy">
   <h3>${escapeHtml(item.name)}</h3>
   <p>${escapeHtml([item.brand,item.type].filter(Boolean).join(" · "))}</p>
  </div>
  <div class="bottle-card-metrics">
   <span><strong>${ready.length}</strong> ready</span>
   <span><strong>${recipes.length}</strong> recipes</span>
  </div>
  ${note?`<p class="bottle-card-note">${escapeHtml(note)}</p>`:""}
 </article>`;
}

function renderInventoryFamilyNav(){
 const counts=INVENTORY_FAMILIES.map(family=>({
  ...family,
  count:family.id==="all"?inventory.length:inventory.filter(item=>family.types.includes(item.type)).length
 })).filter(family=>family.id==="all"||family.count>0);
 inventoryFamilyNav.innerHTML=counts.map(family=>`
  <button type="button" class="${activeInventoryFamily===family.id?"active":""}" data-family="${family.id}">
   ${family.name}<span>${family.count}</span>
  </button>`).join("");
 inventoryFamilyNav.querySelectorAll("[data-family]").forEach(button=>button.addEventListener("click",()=>{
  activeInventoryFamily=button.dataset.family;
  renderInventory();
 }));
}

window.openBottleDetail=id=>{
 const item=inventory.find(entry=>entry.id===id);
 if(!item)return;
 const family=inventoryFamilyFor(item);
 const recipes=recipesUsingInventoryItem(item);
 const ready=recipes.filter(recipe=>missingFor(recipe).length===0);
 bottleDetailContent.innerHTML=`
  <section class="bottle-detail-hero">
   <div class="bottle-detail-art"><span class="bottle-shape ${family.id}"></span></div>
   <div>
    <span class="eyebrow">${escapeHtml(family.name)}</span>
    <h2>${escapeHtml(item.name)}</h2>
    <p>${escapeHtml([item.brand,item.type].filter(Boolean).join(" · "))}</p>
    <span class="status-pill ${statusClass(item.status)}">${statusLabel(item.status)}</span>
   </div>
  </section>
  <section class="bottle-detail-metrics">
   <div><strong>${ready.length}</strong><span>Cocktails ready</span></div>
   <div><strong>${recipes.length}</strong><span>Curated recipes</span></div>
  </section>
  <section class="bottle-detail-actions">
   <button class="primary" type="button" onclick="editBottleFromDetail('${item.id}')">Edit bottle</button>
   <button class="secondary" type="button" onclick="cycleBottleStatus('${item.id}')">Change status</button>
  </section>
  ${recipes.length?`<section class="bottle-detail-recipes">
   <span class="eyebrow">Ready with this bottle</span>
   <div>${ready.slice(0,6).map(recipe=>`<button type="button" onclick="openRecipe('${recipe.id}')">${escapeHtml(recipe.name)}</button>`).join("")||"<p>No complete recipes yet.</p>"}</div>
  </section>`:""}
  <section class="bottle-detail-notes">
   <span class="eyebrow">Notes</span>
   <p>${escapeHtml(item.notes||"No notes saved.")}</p>
  </section>`;
 bottleDetailDialog.showModal();
};

window.editBottleFromDetail=id=>{
 bottleDetailDialog.close();
 editItem(id);
};

window.cycleBottleStatus=id=>{
 const item=inventory.find(entry=>entry.id===id);
 if(!item)return;
 const statuses=["good","low","replace"];
 item.status=statuses[(statuses.indexOf(item.status)+1)%statuses.length];
 save();
 openBottleDetail(id);
};

bottleDetailClose.onclick=()=>bottleDetailDialog.close();
bottleDetailDialog.addEventListener("click",event=>{if(event.target===bottleDetailDialog)bottleDetailDialog.close()});

function renderInventory(){
 const query=inventorySearch.value.trim().toLowerCase();
 const statusFilter=inventoryFilter.value;
 const sort=inventorySort.value;
 const family=INVENTORY_FAMILIES.find(item=>item.id===activeInventoryFamily)||INVENTORY_FAMILIES[0];

 let filtered=inventory.filter(item=>{
  const matchesFamily=family.id==="all"||family.types.includes(item.type);
  const matchesStatus=statusFilter==="all"||item.status===statusFilter;
  const matchesQuery=[item.name,item.brand,item.type,item.notes].join(" ").toLowerCase().includes(query);
  return matchesFamily&&matchesStatus&&matchesQuery;
 });

 filtered.sort((a,b)=>{
  if(sort==="name")return a.name.localeCompare(b.name);
  if(sort==="status"){
   const rank={replace:0,low:1,good:2};
   return rank[a.status]-rank[b.status]||a.name.localeCompare(b.name);
  }
  const familyCompare=inventoryFamilyFor(a).name.localeCompare(inventoryFamilyFor(b).name);
  return familyCompare||a.name.localeCompare(b.name);
 });

 myBarBottleCount.textContent=inventory.length;
 myBarLowCount.textContent=inventory.filter(item=>["low","replace"].includes(item.status)).length;
 myBarFamilyCount.textContent=new Set(inventory.map(item=>inventoryFamilyFor(item).id)).size;
 myBarReadyCount.textContent=availableRecipes().length;

 const lowCount=inventory.filter(item=>["low","replace"].includes(item.status)).length;
 myBarSummaryTitle.textContent=!inventory.length
  ?"Your bar is waiting"
  :lowCount
   ?`${lowCount} bottle${lowCount===1?" needs":"s need"} attention`
   :"Your bar is in good shape";

 renderInventoryFamilyNav();
 myBarEmptyGuide.classList.toggle("hidden",inventory.length>0);
 inventoryList.innerHTML=filtered.length
  ?filtered.map(inventoryItemCard).join("")
  :`<div class="my-bar-no-results">
    <span class="line-icon icon-search"></span>
    <h3>No matching bottles</h3>
    <p>Adjust the search, family or status filter.</p>
   </div>`;
}
window.cycleStatus=id=>{const x=inventory.find(i=>i.id===id);x.status=x.status==="good"?"low":x.status==="low"?"replace":"good";save()};
window.editItem=id=>openItemDialog(inventory.find(i=>i.id===id));
function openItemDialog(item=null){itemDialogTitle.textContent=item?"Edit item":"Add item";itemId.value=item?.id||"";itemName.value=item?.name||"";itemBrand.value=item?.brand||"";itemType.value=item?.type||"Other";itemStatus.value=item?.status||"good";itemNotes.value=item?.notes||"";deleteItemBtn.classList.toggle("hidden",!item);itemDialog.showModal()}
itemForm.addEventListener("submit",e=>{e.preventDefault();const id=itemId.value;const data={id:id||crypto.randomUUID(),name:itemName.value.trim(),brand:itemBrand.value.trim(),type:itemType.value,status:itemStatus.value,notes:itemNotes.value.trim()};if(!data.name)return;const ix=inventory.findIndex(x=>x.id===id);if(ix>=0)inventory[ix]=data;else inventory.push(data);itemDialog.close();save()});
deleteItemBtn.onclick=()=>{const id=itemId.value;if(id&&confirm("Delete this inventory item?")){inventory=inventory.filter(x=>x.id!==id);itemDialog.close();save()}};
addManualBtn.onclick=()=>openItemDialog();
itemDialogClose?.addEventListener("click",()=>itemDialog.close());
itemDialog?.addEventListener("click",event=>{if(event.target===itemDialog)itemDialog.close()});
inventorySearch.oninput=renderInventory;
inventoryFilter.onchange=renderInventory;
inventorySort.onchange=renderInventory;

function renderShopping(){
 const highValue=calculateUnlocks().filter(item=>!ignoredShopping.includes(item.key)).slice(0,8);
 const needSoon=inventory.filter(item=>["low","replace"].includes(item.status)).map(item=>({
  key:item.name.toLowerCase(),name:item.name,
  reason:item.status==="replace"?"Replace soon":"Running low",gain:0,source:"inventory"
 }));
 const optional=calculateUnlocks().filter(item=>!ignoredShopping.includes(item.key)).slice(8,14);
 const totalPotential=wishlist.reduce((sum,item)=>{
  const match=(item.reason||"").match(/unlocks\s+(\d+)/i);
  return sum+(match?Number(match[1]):0);
 },0);

 shoppingCountMetric.textContent=wishlist.length;
 shoppingUnlockMetric.textContent=totalPotential;
 shoppingReplaceMetric.textContent=needSoon.filter(item=>item.reason==="Replace soon").length;
 shoppingImpactTitle.textContent=wishlist.length
  ?`${wishlist.length} item${wishlist.length===1?"":"s"} on your Bottle List`
  :"No bottles queued";
 shoppingImpactBody.textContent=wishlist.length
  ?`${totalPotential} potential cocktail${totalPotential===1?"":"s"} could be unlocked across the current list.`
  :"Add a suggested bottle to see how much capability it could add.";

 smartShoppingHighValue.innerHTML=highValue.length
  ?highValue.map((item,index)=>shoppingSuggestionCard(item,index+1,"high")).join("")
  :`<p class="helper">No high-value additions remain after your inventory and ignored items.</p>`;

 smartShoppingNeedSoon.innerHTML=needSoon.length
  ?needSoon.map(item=>shoppingSuggestionCard(item,null,"need")).join("")
  :`<p class="helper">Nothing is currently marked low or ready to replace.</p>`;

 smartShoppingOptional.innerHTML=optional.length
  ?optional.map(item=>shoppingSuggestionCard(item,null,"optional")).join("")
  :`<p class="helper">No additional optional suggestions are available right now.</p>`;

 shoppingList.innerHTML=wishlist.length
  ?wishlist.map((item,index)=>`
   <article class="shopping-saved-row ${item.completed?"completed":""}">
    <button class="shopping-check" type="button" onclick="toggleShoppingComplete(${index})" aria-label="Mark ${escapeHtml(item.name)} complete">${item.completed?"✓":""}</button>
    <div><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.reason||"Saved item")}</small></div>
    <button class="shopping-remove" type="button" onclick="removeWishlist(${index})" aria-label="Remove ${escapeHtml(item.name)}">×</button>
   </article>`).join("")
  :`<p class="helper">Your Bottle List is empty.</p>`;
}

function shoppingSuggestionCard(item,rank,tier){
 const key=item.key||item.name.toLowerCase();
 const name=titleCase(item.name||item.key);
 const gain=Number(item.gain||0);
 const onList=wishlist.some(saved=>saved.name.toLowerCase()===name.toLowerCase());
 const owned=inventory.some(inv=>[inv.name,inv.brand,inv.type].join(" ").toLowerCase().includes(key.toLowerCase()));
 return `<article class="smart-shopping-card ${tier}">
  <div class="shopping-rank">${rank||"•"}</div>
  <div class="shopping-suggestion-copy">
   <strong>${escapeHtml(name)}</strong>
   <small>${tier==="need"?escapeHtml(item.reason):gain?`Unlocks ${gain} cocktails`:"Suggested addition"}</small>
  </div>
  <div class="shopping-suggestion-actions">
   <button type="button" onclick="markShoppingOwned('${escapeHtml(key)}',${gain})" ${owned?"disabled":""}>${owned?"Owned":"Already have"}</button>
   <button type="button" onclick="addShoppingSuggestion('${escapeHtml(key)}',${gain},'${tier}')" ${onList?"disabled":""}>${onList?"On list":"Shopping list"}</button>
   ${tier!=="need"?`<button type="button" onclick="ignoreShoppingSuggestion('${escapeHtml(key)}')">Ignore</button>`:""}
  </div>
 </article>`;
}

window.addShoppingSuggestion=(key,gain,tier)=>{
 const name=titleCase(key);
 if(!wishlist.some(item=>item.name.toLowerCase()===name.toLowerCase())){
  wishlist.push({name,reason:tier==="need"?"Replacement or running-low item":`High-value addition · unlocks ${gain} cocktails`,completed:false});
  save();
  gentleFeedback(12);
 showToast(`${name} added to the Bottle List.`);
 }else showToast(`${name} is already on the Bottle List.`);
};

window.markShoppingOwned=(key,gain)=>{
 const name=titleCase(key);
 const exists=inventory.some(item=>[item.name,item.brand,item.type].join(" ").toLowerCase().includes(key.toLowerCase()));
 if(!exists){
  inventory.push({id:crypto.randomUUID(),name,brand:"",type:guessInventoryType(key),status:"good",notes:"Added from Smart Shopping"});
 }
 wishlist=wishlist.filter(item=>item.name.toLowerCase()!==name.toLowerCase());
 ignoredShopping=ignoredShopping.filter(item=>item!==key);
 save();
 showToast(exists?`${name} is already in My Bar.`:`${name} added to My Bar.`);
};

window.ignoreShoppingSuggestion=key=>{
 if(!ignoredShopping.includes(key))ignoredShopping.push(key);
 localStorage.setItem(SHOPPING_IGNORE_KEY,JSON.stringify(ignoredShopping));
 renderShopping();
 showToast(`${titleCase(key)} hidden from suggestions.`);
};

window.toggleShoppingComplete=index=>{
 if(!wishlist[index])return;
 wishlist[index].completed=!wishlist[index].completed;
 save();
};

clearCompletedShopping.onclick=()=>{
 const before=wishlist.length;
 wishlist=wishlist.filter(item=>!item.completed);
 save();
 showToast(before===wishlist.length?"No completed items to clear.":"Completed items cleared.");
};
window.markPurchased=id=>{
 const item=inventory.find(entry=>entry.id===id);
 if(item){item.status="good";save();}
};
window.removeWishlist=index=>{wishlist.splice(index,1);save()};
window.buyWishlist=index=>{
 const item=wishlist[index];
 if(!item)return;
 inventory.push({id:crypto.randomUUID(),name:item.name,brand:"",type:guessInventoryType(item.name),status:"good",notes:item.reason||""});
 wishlist.splice(index,1);
 save();
};
addWishlistBtn.onclick=()=>wishlistDialog.showModal();
wishlistForm.onsubmit=event=>{
 event.preventDefault();
 const name=wishlistName.value.trim();
 if(!name)return;
 wishlist.push({name,reason:wishlistReason.value.trim()||"Manually added",completed:false});
 wishlistName.value="";
 wishlistReason.value="";
 wishlistDialog.close();
 save();
};


const INVENTORY_GROUPS=[
 {id:"gin",name:"Gin",types:["Gin"],colour:"#0f7778",keys:["gin"]},
 {id:"whisky",name:"Whisky",types:["Canadian whisky","Scotch","Irish whiskey"],colour:"#b67c3d",keys:["whisky","rye","bourbon","scotch","irish whiskey"]},
 {id:"rum",name:"Rum",types:["Rum"],colour:"#4d8f82",keys:["rum","white rum","dark rum","aged rum"]},
 {id:"agave",name:"Agave",types:["Tequila"],colour:"#6b75ad",keys:["tequila","mezcal"]},
 {id:"brandy",name:"Brandy",types:["Brandy/Cognac"],colour:"#a05f4b",keys:["brandy","cognac"]},
 {id:"liqueurs",name:"Liqueurs",types:["Liqueur"],colour:"#93659b",keys:["liqueur","orange liqueur","elderflower liqueur","maraschino","coffee liqueur"]},
 {id:"aperitif",name:"Aperitif",types:["Amaro/Aperitivo","Vermouth/Fortified wine"],colour:"#b04b57",keys:["campari","aperol","amaro","sweet vermouth","dry vermouth","vermouth"]},
 {id:"bitters",name:"Bitters & Mixers",types:["Bitters","Mixer","Fresh ingredient","Other"],colour:"#788783",keys:["bitters","tonic","soda","ginger beer"]}
];

let activeCompassGroup=null;

function inventoryComposition(){
 return INVENTORY_GROUPS.map(group=>{
  const bottles=inventory.filter(item=>item.status!=="replace"&&group.types.includes(item.type));
  return {...group,count:bottles.length,bottles};
 }).filter(group=>group.count>0);
}

function recipesForCompassGroup(group){
 return RECIPE_LIBRARY.filter(recipe=>
  recipe.requires.some(key=>group.keys.some(groupKey=>key.includes(groupKey)||groupKey.includes(key)))
 );
}

function compassGroupStats(group){
 const recipes=recipesForCompassGroup(group);
 const ready=recipes.filter(recipe=>missingFor(recipe).length===0);
 const near=recipes.filter(recipe=>missingFor(recipe).length===1);
 const gaps={};
 recipes.forEach(recipe=>{
  missingFor(recipe).forEach(key=>{gaps[key]=(gaps[key]||0)+1});
 });
 const bestGap=Object.entries(gaps)
  .filter(([key])=>!group.keys.some(groupKey=>key.includes(groupKey)))
  .sort((a,b)=>b[1]-a[1])[0];
 return {recipes,ready,near,bestGap};
}

function compassSegmentButton(group,index,total){
 const angle=index*(360/total);
 return `<button type="button" class="compass-segment" style="--segment-colour:${group.colour};--segment-angle:${angle}deg" data-compass-group="${group.id}" aria-label="${group.name}: ${group.count} bottles">
  <span></span>
 </button>`;
}

function renderCompassDetail(group){
 const detail=document.getElementById("compassDetail");
 const reset=document.getElementById("resetCompassBtn");
 if(!detail||!reset)return;
 if(!group){
  detail.classList.add("hidden");
  reset.classList.add("hidden");
  return;
 }
 const stats=compassGroupStats(group);
 activeCompassGroup=group.id;
 reset.classList.remove("hidden");
 detail.classList.remove("hidden");
 detail.innerHTML=`
  <div class="compass-detail-header">
   <div>
    <span class="eyebrow">${group.name}</span>
    <h3>${group.count} bottle${group.count===1?"":"s"} · ${stats.ready.length} cocktails ready</h3>
   </div>
   <span class="compass-detail-dot" style="background:${group.colour}"></span>
  </div>
  <div class="compass-detail-metrics">
   <div><strong>${stats.ready.length}</strong><span>Ready now</span></div>
   <div><strong>${stats.near.length}</strong><span>One ingredient away</span></div>
   <div><strong>${stats.recipes.length}</strong><span>Curated recipes</span></div>
  </div>
  <div class="compass-bottles">
   ${group.bottles.slice(0,6).map(item=>`<span>${escapeHtml(item.name)}</span>`).join("")||"<span>No bottles recorded</span>"}
  </div>
  ${stats.bestGap?`<div class="compass-gap">
   <div><span class="eyebrow">Best next addition</span><strong>${titleCase(stats.bestGap[0])}</strong><small>Supports ${stats.bestGap[1]} recipes in this direction.</small></div>
   <button type="button" onclick="addUnlockToShopping('${escapeHtml(stats.bestGap[0])}',${stats.bestGap[1]})">Shopping list</button>
  </div>`:""}
  <div class="compass-ready-list">
   ${stats.ready.slice(0,4).map(recipe=>`<button type="button" onclick="openRecipe('${recipe.id}')">${escapeHtml(recipe.name)}</button>`).join("")}
  </div>`;
 document.querySelectorAll("[data-compass-group]").forEach(button=>{
  button.classList.toggle("active",button.dataset.compassGroup===group.id);
 });
}

function renderInventoryAnalysis(){
 const composition=inventoryComposition();
 const total=composition.reduce((sum,group)=>sum+group.count,0);
 if(!inventoryWheel||!inventoryLegend||!cocktailSpectrum)return;

 inventoryWheelLabel.textContent=total;
 if(!total){
  inventoryWheel.innerHTML='<div class="compass-empty">Scan your bar</div>';
  inventoryLegend.innerHTML='<p class="helper">Scan or add bottles to see your Bar Compass.</p>';
  renderCompassDetail(null);
 }else{
  inventoryWheel.innerHTML=composition.map((group,index)=>compassSegmentButton(group,index,composition.length)).join("");
  inventoryLegend.innerHTML=composition.map(group=>{
   const stats=compassGroupStats(group);
   return `<button type="button" class="compass-legend-row" data-compass-legend="${group.id}">
    <span class="legend-swatch" style="background:${group.colour}"></span>
    <span><strong>${group.name}</strong><small>${stats.ready.length} ready · ${stats.near.length} near</small></span>
    <strong>${group.count}</strong>
   </button>`;
  }).join("");

  document.querySelectorAll("[data-compass-group],[data-compass-legend]").forEach(button=>{
   button.addEventListener("click",()=>{
    const id=button.dataset.compassGroup||button.dataset.compassLegend;
    renderCompassDetail(composition.find(group=>group.id===id));
   });
  });
  if(activeCompassGroup){
   const selected=composition.find(group=>group.id===activeCompassGroup);
   renderCompassDetail(selected||null);
  }
 }

 const ready=availableRecipes();
 const dimensions=[
  {label:"Refreshing",tags:["bright","refreshing","crisp","citrusy","long"]},
  {label:"Spirit-forward",tags:["spirit-forward","strong","classic"]},
  {label:"Bitter",tags:["bitter","aperitivo","amaro"]},
  {label:"Fruity & floral",tags:["fruity","floral","tropical"]},
  {label:"Rich",tags:["rich","maple","creamy","dessert"]},
  {label:"Herbal",tags:["herbal","green","complex"]}
 ];
 const counts=dimensions.map(d=>({
  ...d,
  count:ready.filter(recipe=>recipe.tags.some(tag=>d.tags.includes(tag))).length
 }));
 const maximum=Math.max(1,...counts.map(item=>item.count));
 cocktailSpectrum.innerHTML=counts.map(item=>`
  <button type="button" class="spectrum-row" data-spectrum="${item.label}">
   <span>${item.label}</span>
   <div class="spectrum-track"><i style="width:${Math.round(item.count/maximum*100)}%"></i></div>
   <strong>${item.count}</strong>
  </button>`).join("");
}

document.getElementById("resetCompassBtn")?.addEventListener("click",()=>{
 activeCompassGroup=null;
 renderCompassDetail(null);
 document.querySelectorAll("[data-compass-group]").forEach(button=>button.classList.remove("active"));
});

function renderStaplesMenu(){
 if(!staplesMenu)return;
 const labels={
  "lemon":"Fresh lemon",
  "lime":"Fresh lime",
  "simple syrup":"Simple syrup",
  "sugar":"Sugar",
  "soda":"Soda water",
  "saline":"Salt / saline",
  "mint":"Fresh mint",
  "cucumber":"Cucumber",
  "coffee":"Coffee",
  "cream":"Cream"
 };
 staplesMenu.innerHTML=Object.keys(DEFAULT_STAPLES).map(key=>`
  <label class="staple-toggle">
   <span>${labels[key]}</span>
   <input type="checkbox" data-staple="${key}" ${staples[key]?"checked":""}>
  </label>`).join("");
 staplesMenu.querySelectorAll("[data-staple]").forEach(input=>input.addEventListener("change",()=>{
  staples[input.dataset.staple]=input.checked;
  localStorage.setItem(STAPLES_KEY,JSON.stringify(staples));
  renderAll();
  getRecommendations();
 }));
}

function renderBarIQ(){
 const iq=calculateBarIQ();barIqScore.textContent=iq.score;document.querySelector(".score-ring").style.setProperty("--score",`${iq.score}%`);
 barIqLabel.textContent=iq.score>=80?"Highly capable":iq.score>=60?"Well rounded":iq.score>=40?"Developing":"Early-stage bar";
 barIqSummary.textContent=`You can make ${iq.available} of ${iq.total} curated cocktails. The Bar Compass rewards capability, balance and bottle maintenance.`;
 programmeScores.innerHTML=iq.coverage.map(x=>`<div class="programme-row"><strong>${x.name}</strong><div class="bar-track"><div class="bar-fill" style="width:${x.score}%"></div></div><span>${x.score}</span></div>`).join("");
 const unlocks=calculateUnlocks().slice(0,8);
 unlockList.innerHTML=unlocks.length?unlocks.map(x=>`
  <article class="unlock-card">
   <div class="unlock-copy">
    <strong>${titleCase(x.key)}</strong>
    <small>Unlocks ${x.gain} additional cocktails</small>
   </div>
   <div class="unlock-inline-actions">
    <button type="button" onclick="markUnlockOwned('${escapeHtml(x.key)}',${x.gain})">Already have</button>
    <button type="button" onclick="addUnlockToShopping('${escapeHtml(x.key)}',${x.gain})">Shopping list</button>
   </div>
  </article>`).join(""):`<div class="unlock-row">No single missing ingredient unlocks an additional recipe.</div>`
 renderInventoryAnalysis();
}

function scoreRecipe(r){
 let s=0;
 if(r.moods.includes(selectedMood))s+=8;
 const occasionMap={quiet:["quiet","reflective"],friends:["social","celebrating"],"before-dinner":["social","relaxed"],"by-water":["relaxed","social"],rain:["quiet","reflective"],music:["reflective","quiet"]};
 if((occasionMap[selectedOccasion]||[]).some(x=>r.moods.includes(x)))s+=5;
 if(r.times.includes(partOfDay()))s+=3;
 if(r.weather.includes(weatherGuess()))s+=2;
 if(selectedOccasion==="rain"&&r.weather.includes("rainy"))s+=6;
 if(selectedStrength==="any"||r.strength===selectedStrength)s+=selectedStrength==="any"?0:4;
 if(favourites.includes(r.id))s+=2;
 const profile=Object.entries(taste);
 for(const [tag,val] of profile)if(r.tags.includes(tag))s+=val;
 for(const [tag,val] of Object.entries(manualPreferences))if(r.tags.includes(tag))s+=Number(val||0)*0.8;
 if(selectedOccasion==="friends"){
   const guestPositive=detailedFeedback.filter(f=>f.recipeId===r.id&&f.serveGuests).length;
   s+=guestPositive*3;
 }
 const prior=history.filter(h=>h.recipeId===r.id);
 if(prior.some(h=>h.rating==="not-for-me"))s-=12;
 if(prior.some(h=>h.rating==="house-favourite"))s+=5;
 return s+Math.random()*1.2
}
function getRecommendations(turnTide=false){
 let pool=availableRecipes();
 if(pool.length<3) pool=RECIPE_LIBRARY.filter(r=>missingFor(r).length<=1);
 if(turnTide){
   const currentTags=new Set(recommendationSet.flatMap(r=>r.tags));
   pool=pool.map(r=>({...r,_novel:r.tags.filter(t=>!currentTags.has(t)).length})).sort((a,b)=>(b._novel||0)-(a._novel||0));
 }
 let unseen=pool.filter(r=>!sessionSeen.includes(r.id));
 if(unseen.length<3){sessionSeen=[];unseen=pool}
 const ranked=unseen.sort((a,b)=>scoreRecipe(b)-scoreRecipe(a));
 recommendationSet=ranked.slice(0,3);
 sessionSeen.push(...recommendationSet.map(r=>r.id));sessionStorage.setItem("ttt_phase2_seen",JSON.stringify(sessionSeen));
 renderRecommendationCards();
 renderHomeRecommendation();
}
function renderRecommendationControls(){
 moodGrid.innerHTML=moodOptions.map(([id,label])=>`<button class="choice-btn ${id===selectedMood?"active":""}" onclick="selectMood('${id}')">${label}</button>`).join("");
 occasionGrid.innerHTML=occasionOptions.map(([id,label])=>`<button class="choice-btn ${id===selectedOccasion?"active":""}" onclick="selectOccasion('${id}')">${label}</button>`).join("");
 strengthSelect.value=selectedStrength;
}
window.selectMood=id=>{selectedMood=id;localStorage.setItem("ttt_phase2_mood",id);renderRecommendationControls();getRecommendations()};
window.selectOccasion=id=>{selectedOccasion=id;localStorage.setItem("ttt_phase2_occasion",id);renderRecommendationControls();getRecommendations()};
strengthSelect.onchange=()=>{selectedStrength=strengthSelect.value;localStorage.setItem("ttt_phase2_strength",selectedStrength);getRecommendations()};

function renderRecommendationCards(){
 recommendationCards.innerHTML=recommendationSet.map((r,i)=>{
  const missing=missingFor(r);
  return `<article class="recommendation-card" onclick="openRecipe('${r.id}')">
   <div class="recommendation-number">0${i+1}</div>
   <div><span class="eyebrow light">${r.programme}</span><h3>${escapeHtml(r.name)}</h3>
   <p>${r.tags.slice(0,3).map(titleCase).join(" · ")}</p>
   <small>${missing.length?`Missing: ${missing.map(titleCase).join(", ")}`:`Ready to make`}</small></div>
   <span class="recommendation-arrow">→</span></article>`
 }).join("")
}


function recipeMeasures(item){
 const metricFirst=measurementSystem==="metric";
 return {
  primary:metricFirst?item.metric:item.imperial,
  secondary:metricFirst?item.imperial:item.metric,
  primaryLabel:metricFirst?"Metric":"Imperial",
  secondaryLabel:metricFirst?"Imperial":"Metric"
 };
}

function renderMeasurementControls(){
 document.querySelectorAll("[data-measurement-choice]").forEach(button=>{
  const active=button.dataset.measurementChoice===measurementSystem;
  button.classList.toggle("active",active);
  button.setAttribute("aria-pressed",active?"true":"false");
 });
}

document.querySelectorAll("[data-measurement-choice]").forEach(button=>{
 button.addEventListener("click",()=>{
  measurementSystem=button.dataset.measurementChoice;
  localStorage.setItem(MEASUREMENT_KEY,measurementSystem);
  renderMeasurementControls();
  showToast(`${measurementSystem==="metric"?"Metric":"Imperial"} measurements selected.`);
  if(recipeDialog.open&&recipeDialog.dataset.recipeId)openRecipe(recipeDialog.dataset.recipeId);
 });
});

function recipeHistorySummary(recipe){
 const entries=history.filter(entry=>entry.recipeId===recipe.id);
 const last=entries.slice().sort((a,b)=>new Date(b.date)-new Date(a.date))[0];
 const favouriteCount=entries.filter(entry=>entry.rating==="house-favourite").length;
 return {
  count:entries.length,
  last,
  favouriteCount
 };
}


function currentDaypart(){
 const hour=new Date().getHours();
 if(hour<11)return "morning";
 if(hour<16)return "afternoon";
 if(hour<20)return "evening";
 return "late evening";
}

function currentSeason(){
 const month=new Date().getMonth()+1;
 if([12,1,2].includes(month))return "winter";
 if([3,4,5].includes(month))return "spring";
 if([6,7,8].includes(month))return "summer";
 return "autumn";
}

function recentRecipeTags(limit=8){
 const recent=history.slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,limit);
 const tags=[];
 recent.forEach(entry=>{
  const recipe=RECIPE_LIBRARY.find(item=>item.id===entry.recipeId);
  if(recipe)tags.push(...recipe.tags);
 });
 return tags;
}

function recipePersonalSignals(recipe){
 const signals=[];
 const missing=missingFor(recipe);
 const ready=missing.length===0;
 const daypart=currentDaypart();
 const season=currentSeason();
 const recentTags=recentRecipeTags();
 const repeatedTags=recipe.tags.filter(tag=>recentTags.includes(tag));
 const lastMade=history
  .filter(entry=>entry.recipeId===recipe.id)
  .slice()
  .sort((a,b)=>new Date(b.date)-new Date(a.date))[0];

 if(ready)signals.push({
  icon:"check",
  title:"Ready now",
  detail:"Every required ingredient is already in your bar."
 });
 else if(missing.length===1)signals.push({
  icon:"plus",
  title:"Within reach",
  detail:`Only ${titleCase(missing[0])} is missing.`
 });

 if(daypart==="late evening"&&recipe.tags.some(tag=>["spirit-forward","rich","after-dinner","herbal"].includes(tag))){
  signals.push({
   icon:"moon",
   title:"Right for the hour",
   detail:"Its slower, more contemplative style suits a late evening."
  });
 }else if(daypart==="evening"&&recipe.tags.some(tag=>["refreshing","sparkling","citrusy","bright"].includes(tag))){
  signals.push({
   icon:"sunset",
   title:"Good evening fit",
   detail:"It stays lively without feeling like an early-afternoon drink."
  });
 }

 if(season==="summer"&&recipe.tags.some(tag=>["refreshing","sparkling","citrusy","tropical","long"].includes(tag))){
  signals.push({
   icon:"season",
   title:"Seasonal match",
   detail:"Its brighter profile fits summer drinking."
  });
 }
 if(season==="winter"&&recipe.tags.some(tag=>["rich","warming","spirit-forward","herbal"].includes(tag))){
  signals.push({
   icon:"season",
   title:"Seasonal match",
   detail:"Its depth and warmth suit winter."
  });
 }

 if(favourites.includes(recipe.id))signals.push({
  icon:"heart",
  title:"Known favourite",
  detail:"You have saved this as a House Favourite."
 });

 if(lastMade)signals.push({
  icon:"history",
  title:"Familiar territory",
  detail:`You last made it on ${new Date(lastMade.date).toLocaleDateString(undefined,{month:"short",day:"numeric"})}.`
 });

 const topTaste=Object.entries(tasteProfile||{}).sort((a,b)=>Number(b[1])-Number(a[1]))[0];
 if(topTaste&&recipe.tags.includes(topTaste[0]))signals.push({
  icon:"taste",
  title:"Taste match",
  detail:`It aligns with your preference for ${titleCase(topTaste[0]).toLowerCase()} drinks.`
 });

 if(repeatedTags.length&&history.length>=3){
  const tag=titleCase(repeatedTags[0]).toLowerCase();
  signals.push({
   icon:"pattern",
   title:"Fits your pattern",
   detail:`Recent drinks suggest you are leaning toward ${tag} profiles.`
  });
 }

 if(!signals.length){
  signals.push({
   icon:"compass",
   title:"A strong direction",
   detail:`Its ${titleCase(recipe.tags[0]||"balanced").toLowerCase()} profile is a sensible match for tonight.`
  });
 }
 return signals.slice(0,4);
}

function recipeNarrative(recipe){
 const signals=recipePersonalSignals(recipe);
 const first=signals[0]?.detail||"It fits your bar and the moment.";
 const second=signals[1]?.detail;
 return second?`${first} ${second}`:first;
}

function explanationConfidence(recipe){
 let score=52;
 if(missingFor(recipe).length===0)score+=18;
 if(favourites.includes(recipe.id))score+=10;
 if(history.some(entry=>entry.recipeId===recipe.id))score+=8;
 const topTaste=Object.entries(tasteProfile||{}).sort((a,b)=>Number(b[1])-Number(a[1]))[0];
 if(topTaste&&recipe.tags.includes(topTaste[0]))score+=8;
 return Math.min(96,score);
}

function recipeWhyTonight(recipe){
 return recipePersonalSignals(recipe).map(signal=>signal.detail);
}

function bartenderNote(recipe){
 const tags=new Set(recipe.tags);
 if(recipe.requires.includes("mint"))return "Press mint gently. Aggressive muddling releases bitterness and makes the drink look tired.";
 if(recipe.requires.includes("sparkling wine"))return "Chill the sparkling wine well and add it last to preserve the bubbles.";
 if(recipe.method==="stirred")return "Use plenty of cold ice and stir until the mixing glass feels properly chilled.";
 if(recipe.method==="shaken"&&recipe.requires.some(key=>["lemon","lime","grapefruit"].includes(key))){
  return "Shake hard with cold ice, then strain promptly so the citrus stays bright.";
 }
 if(tags.has("spirit-forward"))return "Dilution matters. Give the drink enough stirring time before deciding it is too strong.";
 return "Measure carefully the first time. Adjust sweetness or dilution only after tasting the finished drink.";
}

function recipeTimeEstimate(recipe){
 if(recipe.method==="built")return "4 min";
 if(recipe.method==="stirred")return "5 min";
 return "6 min";
}

window.toggleRecipeFavourite=id=>{
 if(favourites.includes(id))favourites=favourites.filter(item=>item!==id);
 else favourites.push(id);
 save();
 openRecipe(id);
 gentleFeedback(favourites.includes(id)?[10,30,16]:8);
 if(favourites.includes(id))celebrateMoment("House Favourite");
 showToast(favourites.includes(id)?"Saved as a House Favourite.":"Removed from House Favourites.");
};

window.shopRecipeMissing=id=>{
 const recipe=RECIPE_LIBRARY.find(item=>item.id===id);
 const missing=missingFor(recipe);
 if(!missing.length){
  showToast("You already have everything needed.");
  return;
 }
 missing.forEach(key=>{
  const name=titleCase(key);
  if(!wishlist.some(item=>item.name.toLowerCase()===name.toLowerCase())){
   wishlist.push({name,reason:`Needed for ${recipe.name}`,completed:false});
  }
 });
 save();
 showToast(`${missing.length} missing item${missing.length===1?"":"s"} added to the shopping list.`);
};

window.openRecipe=id=>{
 const r=RECIPE_LIBRARY.find(item=>item.id===id);
 if(!r)return;
 const missing=missingFor(r);
 const ready=missing.length===0;
 const historySummary=recipeHistorySummary(r);
 const why=recipeWhyTonight(r);
 const lastNote=historySummary.last?.notes?.trim();
 const ingredientRows=r.ingredients.map(item=>{
  const owned=hasIngredient(item.key);
  const measures=recipeMeasures(item);
  return `<div class="workbench-ingredient ${owned?"owned":"missing"}">
   <span class="ingredient-state" aria-hidden="true">${owned?"✓":"+"}</span>
   <div class="ingredient-name">
    <strong>${escapeHtml(item.ingredient)}</strong>
    <small>${owned?"In your bar":"Missing"}</small>
   </div>
   <div class="ingredient-measure">
    <strong>${escapeHtml(measures.primary)}</strong>
    <small>${escapeHtml(measures.secondary)}</small>
   </div>
  </div>`;
 }).join("");

 recipeDialogContent.innerHTML=`
 <article class="recipe-workbench">
  <header class="workbench-header">
   <div class="workbench-title-row">
    <div>
     <span class="eyebrow">${escapeHtml(r.source_info.designation)}</span>
     <h2 class="recipe-name">${escapeHtml(r.name)}</h2>
     <p>${r.tags.slice(0,3).map(titleCase).join(" · ")}</p>
    </div>
    <button class="recipe-heart ${favourites.includes(r.id)?"active":""}" type="button"
      onclick="toggleRecipeFavourite('${r.id}')" aria-label="Toggle House Favourite">♡</button>
   </div>
   <div class="workbench-status ${ready?"ready":"missing"}">
    <span>${ready?"✓":"!"}</span>
    <strong>${ready?"Ready to make":`${missing.length} missing`}</strong>
   </div>
  </header>

  <section class="workbench-why">
   <div class="why-header">
    <span class="eyebrow">Why tonight?</span>
    <span class="confidence-pill">${explanationConfidence(r)}% fit</span>
   </div>
   <p class="why-narrative">${escapeHtml(recipeNarrative(r))}</p>
   <div class="why-signal-list">
    ${recipePersonalSignals(r).map(signal=>`<div class="why-signal">
      <span>${signal.icon==="heart"?"♥":signal.icon==="moon"?"◐":signal.icon==="history"?"↺":signal.icon==="taste"?"◎":"✓"}</span>
      <div><strong>${escapeHtml(signal.title)}</strong><p>${escapeHtml(signal.detail)}</p></div>
    </div>`).join("")}
   </div>
  </section>

  <section class="workbench-facts" aria-label="Recipe essentials">
   <div><small>Glass</small><strong>${escapeHtml(r.glassware)}</strong></div>
   <div><small>Ice</small><strong>${escapeHtml(r.ice)}</strong></div>
   <div><small>Method</small><strong>${titleCase(r.method)}</strong></div>
   <div><small>Time</small><strong>${recipeTimeEstimate(r)}</strong></div>
  </section>

  <section class="workbench-section">
   <div class="workbench-section-heading">
    <div><span class="eyebrow">You’ll need</span><h3>Ingredients</h3></div>
    <small>${measurementSystem==="metric"?"Metric first":"Imperial first"} · ${escapeHtml(r.serving_size)}</small>
   </div>
   <div class="workbench-ingredients">${ingredientRows}</div>
  </section>

  <section class="workbench-section">
   <div class="workbench-section-heading">
    <div><span class="eyebrow">Method</span><h3>Make the drink</h3></div>
   </div>
   <ol class="workbench-steps">
    ${r.instructions.map((instruction,index)=>`<li>
      <span>${index+1}</span>
      <p>${escapeHtml(instruction)}</p>
    </li>`).join("")}
   </ol>
  </section>

  <section class="workbench-note">
   <span class="eyebrow">Bartender’s note</span>
   <p>${escapeHtml(bartenderNote(r))}</p>
  </section>

  <section class="workbench-service">
   <div><small>Garnish</small><strong>${escapeHtml(r.garnish)}</strong></div>
   <div><small>Strength</small><strong>${titleCase(r.strength)}</strong></div>
  </section>

  ${missing.length?`<details class="workbench-details">
   <summary>Substitutions</summary>
   <ul>${r.substitutions.map(item=>`<li>${escapeHtml(item)}</li>`).join("")}</ul>
  </details>`:""}

  ${historySummary.count||lastNote?`<section class="workbench-history">
   <span class="eyebrow">Your history</span>
   <div class="history-summary-grid">
    <div><strong>${historySummary.count}</strong><small>Times made</small></div>
    <div><strong>${historySummary.favouriteCount}</strong><small>Favourite ratings</small></div>
   </div>
   ${lastNote?`<blockquote>${escapeHtml(lastNote)}</blockquote>`:""}
  </section>`:""}

  <details class="workbench-details source-details">
   <summary>Recipe source and validation</summary>
   <h3>${escapeHtml(r.source_info.source)}</h3>
   <p>${escapeHtml(r.source_info.note)}</p>
   <small>${escapeHtml(r.validation.review_status)}</small>
  </details>

  <div class="workbench-actions">
   <button class="tertiary-action" type="button" onclick="toggleRecipeFavourite('${r.id}')">
    ${favourites.includes(r.id)?"Saved":"Favourite"}
   </button>
   ${missing.length?`<button class="secondary" type="button" onclick="shopRecipeMissing('${r.id}')">Shop missing</button>`:""}
   <button class="primary" type="button" onclick="madeThis('${r.id}')">Made it</button>
  </div>
 </article>`;
 recipeDialog.dataset.recipeId=r.id;
 recipeDialog.showModal();
};
window.addMissingToWishlist=id=>{const r=RECIPE_LIBRARY.find(x=>x.id===id);missingFor(r).forEach(x=>{if(!wishlist.some(w=>w.name.toLowerCase()===x))wishlist.push({name:titleCase(x),reason:`Needed for ${r.name}`})});recipeDialog.close();save()};
window.madeThis=id=>{activeRatingRecipe=id;recipeDialog.close();ratingDialog.showModal()};
let activeRatingRecipe=null;
window.submitRating=rating=>{
 const r=RECIPE_LIBRARY.find(x=>x.id===activeRatingRecipe);
 const selectedFeedback=[...document.querySelectorAll(".quick-feedback button.active")].map(b=>b.dataset.feedback);
 const entry={
   recipeId:r.id,
   date:new Date().toISOString(),
   rating,
   notes:ratingNotes.value.trim(),
   context:{mood:selectedMood,occasion:selectedOccasion,strength:selectedStrength},
   serveGuests:serveGuests.checked,
   feedback:selectedFeedback
 };
 history.push(entry);
 detailedFeedback.push(entry);
 if(rating==="house-favourite"&&!favourites.includes(r.id))favourites.push(r.id);
 if(rating==="not-for-me")favourites=favourites.filter(x=>x!==r.id);

 const deltas={
  "too-sweet":{"sweet":-3,"rich":-1},
  "too-bitter":{"bitter":-3},
  "too-herbal":{"herbal":-3},
  "too-strong":{"spirit-forward":-3},
  "loved-citrus":{"citrusy":3,"bright":1},
  "loved-floral":{"floral":3},
  "loved-richness":{"rich":3},
  "serve-guests":{"social":2,"elegant":1}
 };
 selectedFeedback.forEach(code=>Object.entries(deltas[code]||{}).forEach(([tag,val])=>taste[tag]=(taste[tag]||0)+val));
 if(serveGuests.checked){taste.social=(taste.social||0)+1}
 const note=(ratingNotes.value||"").toLowerCase();
 const noteRules=[
  ["too sweet","sweet",-2],["too bitter","bitter",-2],["too herbal","herbal",-2],["too strong","spirit-forward",-2],
  ["loved the citrus","citrusy",2],["loved citrus","citrusy",2],["loved the floral","floral",2],
  ["loved the richness","rich",2],["needed more body","rich",1]
 ];
 noteRules.forEach(([phrase,tag,val])=>{if(note.includes(phrase))taste[tag]=(taste[tag]||0)+val});
 r.tags.forEach(tag=>{if(rating==="house-favourite")taste[tag]=(taste[tag]||0)+1.2;if(rating==="not-for-me")taste[tag]=(taste[tag]||0)-1.2});
 ratingNotes.value="";serveGuests.checked=false;document.querySelectorAll(".quick-feedback button").forEach(b=>b.classList.remove("active"));
 ratingDialog.close();save();getRecommendations()
};
turnTideBtn.onclick=()=>getRecommendations(true);surpriseBtn.onclick=()=>{selectedMood="adventurous";selectedOccasion="music";renderRecommendationControls();getRecommendations(true)};
document.querySelectorAll(".quick-feedback button").forEach(btn=>btn.addEventListener("click",()=>btn.classList.toggle("active")));

const TASTE_DIMENSIONS=["citrusy","floral","herbal","bitter","sweet","rich","spirit-forward","smoky"];
function tasteValue(tag){return Math.max(-10,Math.min(10,Math.round((taste[tag]||0)+(manualPreferences[tag]||0))))}
function confidenceScore(){
 const count=history.length;
 const detail=detailedFeedback.filter(x=>(x.feedback||[]).length||x.notes||x.serveGuests).length;
 return Math.min(100,Math.round(count*8+detail*3));
}
function preferenceDescription(){
 const ranked=TASTE_DIMENSIONS.map(tag=>({tag,value:tasteValue(tag)})).sort((a,b)=>b.value-a.value);
 const liked=ranked.filter(x=>x.value>=2).slice(0,3).map(x=>titleCase(x.tag));
 const avoided=ranked.filter(x=>x.value<=-2).slice(-3).reverse().map(x=>titleCase(x.tag));
 if(!history.length)return "Rate a few cocktails and the app will start building a useful palate profile.";
 let text=liked.length?`You appear to favour ${liked.join(", ")} cocktails.`:"Your positive preferences are still emerging.";
 if(avoided.length)text+=` You tend to avoid ${avoided.join(", ")} profiles.`;
 return text
}
function nextTasteExperiment(){
 const available=availableRecipes().filter(r=>!history.some(h=>h.recipeId===r.id));
 if(!available.length)return null;
 const underexplored=TASTE_DIMENSIONS.map(tag=>({tag,count:history.filter(h=>RECIPE_LIBRARY.find(r=>r.id===h.recipeId)?.tags.includes(tag)).length})).sort((a,b)=>a.count-b.count)[0];
 return available.find(r=>r.tags.includes(underexplored.tag))||available.sort((a,b)=>scoreRecipe(b)-scoreRecipe(a))[0]
}
function renderPreferenceSliders(){
 preferenceSliders.innerHTML=TASTE_DIMENSIONS.map(tag=>`<div class="preference-row"><label>${titleCase(tag)}</label><input type="range" min="-5" max="5" step="1" value="${manualPreferences[tag]||0}" oninput="setManualPreference('${tag}',this.value)"><span class="preference-value">${manualPreferences[tag]||0}</span></div>`).join("")
}
window.setManualPreference=(tag,val)=>{manualPreferences[tag]=Number(val);localStorage.setItem(MANUAL_PREF_KEY,JSON.stringify(manualPreferences));renderTaste();getRecommendations()};


const PROFILE_PROFILE_TASTE_DIMENSIONS=[
 {id:"citrusy",label:"Citrusy",tags:["citrusy","bright","sour","refreshing"]},
 {id:"spirit",label:"Spirit-forward",tags:["spirit-forward","strong","classic"]},
 {id:"bitter",label:"Bitter",tags:["bitter","aperitivo","amaro"]},
 {id:"sweet",label:"Sweet & rich",tags:["sweet","rich","dessert","creamy"]},
 {id:"herbal",label:"Herbal",tags:["herbal","green","complex"]},
 {id:"sparkling",label:"Sparkling & light",tags:["sparkling","long","light","refreshing"]}
];

function tasteDimensionScore(dimension){
 let score=50;
 let signals=0;
 history.forEach(entry=>{
  const recipe=RECIPE_LIBRARY.find(item=>item.id===entry.recipeId);
  if(!recipe||!recipe.tags.some(tag=>dimension.tags.includes(tag)))return;
  signals++;
  if(entry.rating==="house-favourite")score+=12;
  else if(entry.rating==="would-repeat")score+=7;
  else if(entry.rating==="fine")score+=1;
  else if(entry.rating==="not-for-me")score-=12;
 });
 Object.entries(manualPreferences||{}).forEach(([tag,value])=>{
  if(dimension.tags.includes(tag)){
   score+=Number(value||0)*4;
   if(Number(value||0)!==0)signals++;
  }
 });
 return {score:Math.max(0,Math.min(100,Math.round(score))),signals};
}

function totalTasteSignals(){
 return history.length+Object.values(manualPreferences||{}).filter(value=>Number(value)!==0).length+favourites.length;
}

function tasteProfileLabel(){
 const ranked=PROFILE_TASTE_DIMENSIONS.map(dimension=>({...dimension,...tasteDimensionScore(dimension)}))
  .sort((a,b)=>b.score-a.score);
 const top=ranked[0];
 const second=ranked[1];
 if(totalTasteSignals()<3)return "Still learning";
 if(top.score-second.score<7)return `${top.label} with ${second.label.toLowerCase()}`;
 return `${top.label} leaning`;
}

function tasteProfileNarrative(){
 const ranked=PROFILE_TASTE_DIMENSIONS.map(dimension=>({...dimension,...tasteDimensionScore(dimension)}))
  .sort((a,b)=>b.score-a.score);
 if(totalTasteSignals()<3)return "Make and rate a few drinks to build a useful profile.";
 const top=ranked[0];
 const low=ranked.at(-1);
 return `Recommendations currently lean toward ${top.label.toLowerCase()} drinks and use ${low.label.toLowerCase()} styles more sparingly.`;
}

function renderManualTasteControls(){
 const controls=[
  {tag:"citrusy",label:"Citrusy"},
  {tag:"spirit-forward",label:"Spirit-forward"},
  {tag:"bitter",label:"Bitter"},
  {tag:"sweet",label:"Sweet"},
  {tag:"herbal",label:"Herbal"},
  {tag:"sparkling",label:"Sparkling"}
 ];
 manualTasteControls.innerHTML=controls.map(control=>{
  const value=Number(manualPreferences[control.tag]||0);
  return `<div class="manual-taste-row">
   <span>${control.label}</span>
   <div role="group" aria-label="${control.label} preference">
    <button type="button" class="${value===-1?"active negative":""}" onclick="setManualTaste('${control.tag}',-1)">Less</button>
    <button type="button" class="${value===0?"active":""}" onclick="setManualTaste('${control.tag}',0)">Neutral</button>
    <button type="button" class="${value===1?"active positive":""}" onclick="setManualTaste('${control.tag}',1)">More</button>
   </div>
  </div>`;
 }).join("");
}

window.setManualTaste=(tag,value)=>{
 manualPreferences[tag]=value;
 save();
 showToast("Taste preference updated.");
};

function tastePatternInsights(){
 const insights=[];
 if(history.length){
  const recipeCounts={};
  history.forEach(entry=>{recipeCounts[entry.recipeId]=(recipeCounts[entry.recipeId]||0)+1});
  const topRecipe=Object.entries(recipeCounts).sort((a,b)=>b[1]-a[1])[0];
  if(topRecipe){
   const recipe=RECIPE_LIBRARY.find(item=>item.id===topRecipe[0]);
   if(recipe)insights.push({
    title:"Most repeated",
    detail:`${recipe.name} has been made ${topRecipe[1]} time${topRecipe[1]===1?"":"s"}.`
   });
  }
  const weekdayCount=history.filter(entry=>new Date(entry.date).getDay()===5).length;
  if(weekdayCount>=2)insights.push({
   title:"Friday pattern",
   detail:`${weekdayCount} logged drinks were made on a Friday.`
  });
 }
 const ranked=PROFILE_TASTE_DIMENSIONS.map(dimension=>({...dimension,...tasteDimensionScore(dimension)}))
  .sort((a,b)=>b.score-a.score);
 if(totalTasteSignals()>=3)insights.push({
  title:"Current direction",
  detail:`${ranked[0].label} is your strongest taste signal.`
 });
 const favTags=favourites.flatMap(id=>RECIPE_LIBRARY.find(recipe=>recipe.id===id)?.tags||[]);
 if(favTags.length){
  const counts={};
  favTags.forEach(tag=>counts[tag]=(counts[tag]||0)+1);
  const topTag=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];
  if(topTag)insights.push({
   title:"Favourite pattern",
   detail:`Your House Favourites often lean ${titleCase(topTag[0]).toLowerCase()}.`
  });
 }
 if(!insights.length)insights.push({
  title:"Nothing conclusive yet",
  detail:"A few ratings and favourites will reveal meaningful patterns."
 });
 return insights.slice(0,4);
}

function renderPersonalizationControls(){
 if(discoveryLevelSelect){
  discoveryLevelSelect.value=personalization.discovery;
  defaultStrengthSelect.value=personalization.defaultStrength;
 }
}

discoveryLevelSelect?.addEventListener("change",()=>{
 personalization.discovery=discoveryLevelSelect.value;
 localStorage.setItem(PERSONALIZATION_KEY,JSON.stringify(personalization));
 renderAll();
 showToast("Discovery preference updated.");
});

defaultStrengthSelect?.addEventListener("change",()=>{
 personalization.defaultStrength=defaultStrengthSelect.value;
 localStorage.setItem(PERSONALIZATION_KEY,JSON.stringify(personalization));
 renderAll();
 showToast("Default strength updated.");
});

function renderTaste(){
 const dimensions=PROFILE_TASTE_DIMENSIONS.map(dimension=>({...dimension,...tasteDimensionScore(dimension)}))
  .sort((a,b)=>b.score-a.score);
 tasteProfileTitle.textContent=tasteProfileLabel();
 tasteConfidenceBadge.textContent=`${totalTasteSignals()} signal${totalTasteSignals()===1?"":"s"}`;
 tasteProfileSummary.textContent=tasteProfileNarrative();
 tasteProfileBars.innerHTML=dimensions.map(dimension=>`
  <div class="taste-bar-row">
   <span>${dimension.label}</span>
   <div><i style="width:${dimension.score}%"></i></div>
   <strong>${dimension.score}</strong>
  </div>`).join("");

 renderManualTasteControls();

 tasteInsights.innerHTML=tastePatternInsights().map(insight=>`
  <article class="taste-insight-card">
   <span class="line-icon icon-bulb"></span>
   <div><strong>${escapeHtml(insight.title)}</strong><p>${escapeHtml(insight.detail)}</p></div>
  </article>`).join("");

 const favouriteItems=favourites
  .map(id=>RECIPE_LIBRARY.find(recipe=>recipe.id===id))
  .filter(Boolean);
 favouriteRecipes.innerHTML=favouriteItems.length
  ?favouriteItems.map(recipe=>`
   <button type="button" class="taste-recipe-row" onclick="openRecipe('${recipe.id}')">
    <span><strong>${escapeHtml(recipe.name)}</strong><small>${recipe.tags.slice(0,3).map(titleCase).join(" · ")}</small></span>
    <span>›</span>
   </button>`).join("")
  :`<p class="helper">Save a recipe as a House Favourite to see it here.</p>`;

 const recent=history.slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,20);
 tasteHistoryList.innerHTML=recent.length
  ?recent.map(entry=>{
   const recipe=RECIPE_LIBRARY.find(item=>item.id===entry.recipeId);
   if(!recipe)return "";
   const ratingLabels={
    "house-favourite":"House Favourite",
    "would-repeat":"Would repeat",
    "fine":"Fine",
    "not-for-me":"Not for me"
   };
   return `<article class="taste-history-row">
    <div class="history-date">
     <strong>${new Date(entry.date).toLocaleDateString(undefined,{month:"short",day:"numeric"})}</strong>
     <span>${new Date(entry.date).getFullYear()}</span>
    </div>
    <div>
     <button type="button" onclick="openRecipe('${recipe.id}')">${escapeHtml(recipe.name)}</button>
     <small>${escapeHtml(ratingLabels[entry.rating]||"Made")}</small>
     ${entry.notes?`<p>${escapeHtml(entry.notes)}</p>`:""}
    </div>
   </article>`;
  }).join("")
  :`<p class="helper">Cocktails you mark as Made It will appear here.</p>`;

 renderPersonalizationControls();
}

const MAX_SCAN_PHOTOS=3;
let activeScanController=null;

barPhotos.onchange=async e=>{
 const incoming=[...e.target.files];
 const available=MAX_SCAN_PHOTOS-photos.length;
 if(available<=0){
  showToast("This shelf is ready. Analyse it before adding more.");
  e.target.value="";
  return;
 }
 incoming.slice(0,available).forEach(file=>{
  photos.push({file,url:URL.createObjectURL(file)});
 });
 if(incoming.length>available)showToast("Use up to three photos for each shelf.");
 e.target.value="";
 renderPhotos();
};

function renderPhotos(){
 const count=photos.length;
 photoCountLabel.textContent=count===0
  ?"Take your first photo"
  :count===1
   ?"One photo ready"
   :`${count} photos ready`;
 analysePhotos.disabled=count===0;
 analysePhotos.textContent=count===0
  ?"Analyse shelf"
  :`Analyse ${count} photo${count===1?"":"s"}`;
 clearPhotos.classList.toggle("hidden",count===0);
 scanCameraLabel.textContent=count===0?"Take or add photo":count<MAX_SCAN_PHOTOS?"Add another view":"Photo set complete";
 barPhotos.disabled=count>=MAX_SCAN_PHOTOS||Boolean(activeScanController);
 photoStrip.innerHTML=photos.map((photo,index)=>`
  <div class="photo-thumb scan-photo-card">
   <img src="${photo.url}" alt="Shelf photo ${index+1}">
   <span class="photo-number">${index+1}</span>
   <button type="button" onclick="removePhoto(${index})" aria-label="Remove photo ${index+1}">×</button>
  </div>`).join("");
 photoStripHint.textContent=count===0
  ?"Use one to three overlapping views. Keep labels facing the camera."
  :count<MAX_SCAN_PHOTOS
   ?`${MAX_SCAN_PHOTOS-count} optional view${MAX_SCAN_PHOTOS-count===1?"":"s"} remaining. Analyse now or add another angle.`
   :"Three views ready. Analyse this shelf before moving to the next one.";
 setScanStage("photos");
}

window.removePhoto=i=>{
 if(activeScanController)return;
 URL.revokeObjectURL(photos[i].url);
 photos.splice(i,1);
 renderPhotos();
};

clearPhotos.onclick=()=>{
 if(activeScanController)return;
 photos.forEach(photo=>URL.revokeObjectURL(photo.url));
 photos=[];
 candidates=[];
 renderPhotos();
 resetScannerView();
};
analysePhotos.onclick=async()=>{
 const controller=new AbortController();
 activeScanController=controller;
 const timeoutId=setTimeout(()=>controller.abort("timeout"),45000);

 scanCaptureCard.classList.add("hidden");
 scanWorkingCard.classList.remove("hidden");
 scanResultsCard.classList.add("hidden");
 setScanStage("analyse");
 analysePhotos.disabled=true;
 clearPhotos.disabled=true;
 barPhotos.disabled=true;
 setScanProgress(4,`Preparing ${photos.length} photo${photos.length===1?"":"s"}…`);

 try{
  const images=[];
  for(let index=0;index<photos.length;index++){
   if(controller.signal.aborted)throw new DOMException("Cancelled","AbortError");
   setScanProgress(10+Math.round(((index+1)/photos.length)*38),`Preparing photo ${index+1} of ${photos.length}…`);
   images.push(await resizeImageForScan(photos[index].file,1024,.68));
  }

  setScanProgress(55,"Uploading the shelf securely…");
  const response=await fetch("/.netlify/functions/analyze-bar",{
   method:"POST",
   headers:{"content-type":"application/json"},
   body:JSON.stringify({images}),
   signal:controller.signal
  });

  setScanProgress(82,"Comparing visible labels and merging duplicate views…");
  const raw=await response.text();
  if(!response.ok){
   let detail=raw;
   try{
    const parsed=JSON.parse(raw);
    detail=parsed.error||parsed.message||raw;
   }catch{}
   if(response.status===404)throw new Error("The AI scanning function is not deployed.");
   if(response.status===503)throw new Error("The OpenAI API key is unavailable.");
   if(response.status===401)throw new Error("OpenAI rejected the API key.");
   if(response.status===413)throw new Error("These photos are too large. Try one or two images.");
   throw new Error(`Scan failed (${response.status}): ${detail}`);
  }

  const data=JSON.parse(raw);
  candidates=(data.items||[]).map(item=>({
   name:item.name||"",
   brand:item.brand||"",
   type:mapType(item.type),
   status:item.status==="low"?"low":"good",
   confidence:item.confidence??.5
  }));

  if(!candidates.length){
   throw new Error("No bottles were recognized. Try a brighter, closer photo with labels facing the camera.");
  }

  setScanProgress(100,`Recognized ${candidates.length} bottle${candidates.length===1?"":"s"}.`);
  renderCandidates();
  scanWorkingCard.classList.add("hidden");
  scanResultsCard.classList.remove("hidden");
  setScanStage("confirm");
  scanResultsCard.scrollIntoView({behavior:"smooth",block:"start"});
  showToast("Shelf recognized. Confirm the bottles before saving.");
 }catch(error){
  console.error(error);
  candidates=[];
  const message=error?.name==="AbortError"
   ?controller.signal.reason==="timeout"
    ?"The scan took too long and was stopped. Try one or two clearer photos."
    :"Scan cancelled."
   :error?.message||"The scan could not be completed.";
  scanStatus.textContent=message;
  showToast(message);
  setTimeout(()=>{
   scanWorkingCard.classList.add("hidden");
   scanCaptureCard.classList.remove("hidden");
   setScanStage("photos");
  },900);
 }finally{
  clearTimeout(timeoutId);
  activeScanController=null;
  analysePhotos.disabled=photos.length===0;
  clearPhotos.disabled=false;
  barPhotos.disabled=photos.length>=MAX_SCAN_PHOTOS;
  setTimeout(clearScanProgress,900);
 }
};

cancelScanBtn.onclick=()=>{
 if(activeScanController)activeScanController.abort("cancelled");
};

function resizeImageForScan(file,maxDimension=1024,quality=.68){
 return new Promise((resolve,reject)=>{
  const image=new Image();
  const url=URL.createObjectURL(file);
  image.onload=()=>{
   try{
    const scale=Math.min(1,maxDimension/Math.max(image.naturalWidth,image.naturalHeight));
    const width=Math.max(1,Math.round(image.naturalWidth*scale));
    const height=Math.max(1,Math.round(image.naturalHeight*scale));
    const canvas=document.createElement("canvas");
    canvas.width=width;canvas.height=height;
    const context=canvas.getContext("2d");
    context.drawImage(image,0,0,width,height);
    URL.revokeObjectURL(url);
    resolve(canvas.toDataURL("image/jpeg",quality));
   }catch(error){
    URL.revokeObjectURL(url);reject(error);
   }
  };
  image.onerror=()=>{URL.revokeObjectURL(url);reject(new Error(`Could not read ${file.name}`))};
  image.src=url;
 });
}
function mapType(t=""){const v=t.toLowerCase();if(v.includes("gin"))return"Gin";if(v.includes("tequila"))return"Tequila";if(v.includes("rum"))return"Rum";if(v.includes("scotch"))return"Scotch";if(v.includes("whisky")||v.includes("rye"))return"Canadian whisky";if(v.includes("vodka"))return"Vodka";if(v.includes("vermouth"))return"Vermouth/Fortified wine";if(v.includes("bitter"))return"Bitters";if(v.includes("amaro")||v.includes("aperitivo"))return"Amaro/Aperitivo";if(v.includes("liqueur"))return"Liqueur";return"Other"}
function renderCandidates(){
 scanResultCount.textContent=candidates.length;
 const average=candidates.length
  ?Math.round(candidates.reduce((sum,item)=>sum+Number(item.confidence||0),0)/candidates.length*100)
  :0;
 const uncertain=candidates.filter(item=>Number(item.confidence||0)<.72).length;
 scanConfidenceSummary.textContent=uncertain
  ?`${uncertain} need${uncertain===1?"s":""} review`
  :`${average}% average confidence`;
 scanConfidenceSummary.classList.toggle("good",uncertain===0);

 scanCandidates.innerHTML=candidates.map((item,index)=>{
  const confidence=Math.round(Number(item.confidence||0)*100);
  const level=confidence>=85?"high":confidence>=65?"medium":"low";
  return `<article class="scan-candidate-card ${level}">
   <div class="candidate-confidence">
    <strong>${confidence}%</strong>
    <span>${level==="high"?"High confidence":level==="medium"?"Please check":"Needs review"}</span>
   </div>
   <label>
    <span>Bottle</span>
    <input value="${escapeHtml(item.name)}" oninput="updateCandidate(${index},'name',this.value)" placeholder="Product name">
   </label>
   <label>
    <span>Brand</span>
    <input value="${escapeHtml(item.brand)}" oninput="updateCandidate(${index},'brand',this.value)" placeholder="Brand, if visible">
   </label>
   <label>
    <span>Type</span>
    <select onchange="updateCandidate(${index},'type',this.value)">
     ${["Gin","Tequila","Rum","Canadian whisky","Scotch","Irish whiskey","Brandy/Cognac","Vodka","Liqueur","Amaro/Aperitivo","Vermouth/Fortified wine","Bitters","Mixer","Fresh ingredient","Other"].map(type=>`<option ${type===item.type?"selected":""}>${type}</option>`).join("")}
    </select>
   </label>
   <button class="candidate-remove" type="button" onclick="removeCandidate(${index})">Remove bottle</button>
  </article>`;
 }).join("");
}
window.updateCandidate=(i,k,v)=>candidates[i][k]=v;window.removeCandidate=i=>{candidates.splice(i,1);renderCandidates()};
addCandidateRow.onclick=()=>{candidates.push({name:"",brand:"",type:"Other",status:"good",confidence:1});renderCandidates()};
saveScanResults.onclick=()=>{
 const existing=inventory.map(item=>`${item.brand} ${item.name}`.toLowerCase());
 let added=0;
 candidates.filter(item=>item.name.trim()).forEach(item=>{
  const key=`${item.brand} ${item.name}`.toLowerCase();
  if(!existing.some(entry=>similar(entry,key))){
   inventory.push({
    id:crypto.randomUUID(),
    name:item.name.trim(),
    brand:item.brand.trim(),
    type:item.type,
    status:item.status,
    notes:`AI scan confidence: ${Math.round((item.confidence||0)*100)}%`
   });
   existing.push(key);
   added++;
  }
 });
 save();
 photos.forEach(photo=>URL.revokeObjectURL(photo.url));
 photos=[];
 candidates=[];
 renderPhotos();
 resetScannerView();
 gentleFeedback([12,45,18]);
 if(added>=3)celebrateMoment(`${added} bottles added`);
 showToast(`${added} bottle${added===1?"":"s"} added to My Bar.`);
 showView("inventoryView");
};
function similar(a,b){const clean=s=>new Set(s.replace(/[^a-z0-9 ]/g,"").split(/\s+/).filter(w=>w.length>2));const A=clean(a),B=clean(b);const overlap=[...A].filter(x=>B.has(x)).length;return overlap>=Math.min(2,A.size,B.size)}

historyFilter.addEventListener("change",renderTaste);
resetTasteBtn.addEventListener("click",()=>{
 if(!confirm("Reset taste learning, ratings and House Favourites? Inventory will not be affected."))return;
 taste={};history=[];favourites=[];detailedFeedback=[];manualPreferences={};save()
});
window.openHistoryDetail=date=>{
 const h=history.find(x=>x.date===date);if(!h)return;
 const r=RECIPE_LIBRARY.find(x=>x.id===h.recipeId);
 historyDetailContent.innerHTML=`<span class="eyebrow">Cocktail memory</span><h2>${escapeHtml(r?.name||"Cocktail")}</h2>
 <p><strong>${titleCase(h.rating.replaceAll("-"," "))}</strong> · ${new Date(h.date).toLocaleString()}</p>
 <p><strong>Moment:</strong> ${titleCase(h.context?.mood||"")} · ${titleCase((h.context?.occasion||"").replaceAll("-"," "))}</p>
 ${h.notes?`<p><strong>Notes:</strong> ${escapeHtml(h.notes)}</p>`:""}
 ${(h.feedback||[]).length?`<p><strong>Feedback:</strong> ${h.feedback.map(x=>titleCase(x.replaceAll("-"," "))).join(", ")}</p>`:""}
 <p><strong>Serve to guests:</strong> ${h.serveGuests?"Yes":"No"}</p>`;
 historyDetailDialog.showModal()
};



window.markUnlockOwned=(key,gain)=>{
 const name=titleCase(key);
 const existing=inventory.some(item=>[item.name,item.brand,item.type].join(" ").toLowerCase().includes(key.toLowerCase()));
 if(!existing){
  inventory.push({
   id:crypto.randomUUID(),
   name,
   brand:"",
   type:guessInventoryType(key),
   status:"good",
   notes:"Added from Bar IQ"
  });
  save();
  gentleFeedback([10,35,14]);
 showToast(`${name} added to My Bar.`);
 }else{
  showToast(`${name} is already in My Bar.`);
 }
};

window.addUnlockToShopping=(key,gain)=>{
 const name=titleCase(key);
 if(!wishlist.some(item=>item.name.toLowerCase()===name.toLowerCase())){
  wishlist.push({name,reason:`High-value addition · unlocks ${gain} cocktails`,completed:false});
  save();
 }
 showToast(`${name} added to the shopping list.`);
};

let activeUnlockIngredient=null;

window.openUnlockAction=(key,gain)=>{
 activeUnlockIngredient={key,gain};
 unlockActionTitle.textContent=titleCase(key);
 unlockActionReason.textContent=`Adding this ingredient would unlock ${gain} additional curated cocktail${gain===1?"":"s"}.`;
 unlockActionDialog.showModal();
};

unlockActionClose.onclick=()=>unlockActionDialog.close();
unlockActionDialog.addEventListener("click",event=>{if(event.target===unlockActionDialog)unlockActionDialog.close()});

unlockAlreadyHaveBtn.onclick=()=>{
 if(!activeUnlockIngredient)return;
 const name=titleCase(activeUnlockIngredient.key);
 const existing=inventory.some(item=>[item.name,item.brand,item.type].join(" ").toLowerCase().includes(activeUnlockIngredient.key.toLowerCase()));
 if(!existing){
  inventory.push({
   id:crypto.randomUUID(),
   name,
   brand:"",
   type:guessInventoryType(activeUnlockIngredient.key),
   status:"good",
   notes:"Added from Bar IQ"
  });
 }
 unlockActionDialog.close();
 showToast(existing?`${name} is already in My Bar.`:`${name} added to My Bar.`);
 save();
};

unlockShoppingBtn.onclick=()=>{
 if(!activeUnlockIngredient)return;
 const name=titleCase(activeUnlockIngredient.key);
 if(!wishlist.some(item=>item.name.toLowerCase()===name.toLowerCase())){
  wishlist.push({name,reason:`High-value addition · unlocks ${activeUnlockIngredient.gain} cocktails`});
 }
 unlockActionDialog.close();
 showToast(`${name} added to the shopping list.`);
 save();
};

function guessInventoryType(key){
 const value=key.toLowerCase();
 if(value.includes("gin"))return "Gin";
 if(value.includes("tequila")||value.includes("mezcal"))return "Tequila";
 if(value.includes("rum")||value.includes("rhum"))return "Rum";
 if(value.includes("scotch"))return "Scotch";
 if(value.includes("irish whiskey"))return "Irish whiskey";
 if(value.includes("whisky")||value.includes("rye"))return "Canadian whisky";
 if(value.includes("brandy")||value.includes("cognac"))return "Brandy/Cognac";
 if(value.includes("vermouth")||value.includes("sherry"))return "Vermouth/Fortified wine";
 if(value.includes("bitters"))return "Bitters";
 if(value.includes("campari")||value.includes("aperol")||value.includes("amaro")||value.includes("fernet")||value.includes("cynar"))return "Amaro/Aperitivo";
 if(value.includes("soda")||value.includes("tonic")||value.includes("juice")||value.includes("beer")||value.includes("cola"))return "Mixer";
 return "Liqueur";
}


clearTasteHistory.onclick=()=>{
 if(!history.length){
  showToast("There is no cocktail history to clear.");
  return;
 }
 if(confirm("Clear your cocktail history? Favourites and manual taste preferences will remain.")){
  history=[];
  detailedFeedback=[];
  save();
  showToast("Cocktail history cleared.");
 }
};

function renderAll(){renderDashboard();renderInventory();renderShopping();renderBarIQ();renderRecommendationControls();renderTaste();renderStaplesMenu();renderMeasurementControls();renderPersonalizationControls();renderExperienceControls();renderMilestone()}

const APP_VERSION="3.3.10-dev";
const APP_STORAGE_KEYS=[
 STORAGE_KEY,WISHLIST_KEY,TASTE_KEY,HISTORY_KEY,FAV_KEY,MANUAL_PREF_KEY,FEEDBACK_KEY,
 "ttt_phase2_mood","ttt_phase2_occasion","ttt_phase2_strength",STAPLES_KEY,MEASUREMENT_KEY,SHOPPING_IGNORE_KEY,PERSONALIZATION_KEY,EXPERIENCE_KEY,ONBOARDING_KEY,"ttt_theme"
];

const menuBtn=document.getElementById("menuBtn");
const menuCloseBtn=document.getElementById("menuCloseBtn");
const menuScrim=document.getElementById("menuScrim");
const appMenu=document.getElementById("appMenu");
const menuInstallBtn=document.getElementById("menuInstallBtn");
const resetAppDataBtn=document.getElementById("resetAppDataBtn");
let deferredPrompt=null;

function openAppMenu(){
 appMenu.classList.add("open");
 appMenu.setAttribute("aria-hidden","false");
 menuBtn.setAttribute("aria-expanded","true");
 menuScrim.hidden=false;
 document.body.style.overflow="hidden";
 menuCloseBtn.focus();
}
function closeAppMenu(){
 appMenu.classList.remove("open");
 appMenu.setAttribute("aria-hidden","true");
 menuBtn.setAttribute("aria-expanded","false");
 menuScrim.hidden=true;
 document.body.style.overflow="";
}
if(!window.TTTMenu){
 menuBtn?.addEventListener("click",openAppMenu);
 menuCloseBtn?.addEventListener("click",closeAppMenu);
 menuScrim?.addEventListener("click",closeAppMenu);
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&appMenu?.classList.contains("open"))closeAppMenu()});
}

document.querySelectorAll("[data-menu-section]").forEach(button=>button.addEventListener("click",()=>{
 const sectionId=button.dataset.menuSection;
 closeAppMenu();
 showView("aboutView");
 requestAnimationFrame(()=>document.getElementById(sectionId)?.scrollIntoView({behavior:"smooth",block:"start"}));
}));

window.addEventListener("beforeinstallprompt",e=>{
 e.preventDefault();
 deferredPrompt=e;
 menuInstallBtn.classList.remove("hidden");
});
menuInstallBtn.addEventListener("click",async()=>{
 if(!deferredPrompt)return;
 deferredPrompt.prompt();
 await deferredPrompt.userChoice;
 deferredPrompt=null;
 menuInstallBtn.classList.add("hidden");
 closeAppMenu();
});
window.addEventListener("appinstalled",()=>{
 deferredPrompt=null;
 menuInstallBtn.classList.add("hidden");
 closeAppMenu();
});

resetAppDataBtn.addEventListener("click",()=>{
 const confirmed=window.confirm(
  "Reset Turn the Tide on this device? This permanently removes your inventory, wishlist, favourites, ratings and taste learning."
 );
 if(!confirmed)return;
 APP_STORAGE_KEYS.forEach(key=>localStorage.removeItem(key));
 window.alert("Turn the Tide data has been reset. The app will now reload.");
 window.location.reload();
});

if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
renderPhotos();renderAll();getRecommendations();maybeShowOnboarding();
