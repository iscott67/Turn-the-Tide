const CACHE="turn-the-tide-v3.3.10-delight1";
const ASSETS=["./","index.html","styles.css","styles/legacy.css","styles/tokens.css","styles/typography.css","styles/components.css","styles/navigation.css","styles/motion.css","styles/accessibility.css","styles/app.css","styles/home-intelligence.css","styles/recipe-workbench.css","styles/measurement-settings.css","styles/ai-explanation.css","styles/bar-compass.css","styles/smart-shopping.css","styles/scanner-journey.css","styles/my-bar.css","styles/personalization.css","styles/delight.css","app.js","menu-controller.js","manifest.webmanifest",
"icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","icons/favicon.png",
"assets/icons/home.svg","assets/icons/camera.svg","assets/icons/bottle.svg","assets/icons/cart.svg",
"assets/icons/chart.svg","assets/icons/search.svg","assets/icons/bulb.svg","assets/icons/compass.svg","assets/icons/heart.svg"];

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;

  if(event.request.mode==="navigate"){
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put("index.html",copy));
          return response;
        })
        .catch(()=>caches.match("index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached=>{
      const network=fetch(event.request).then(response=>{
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy));
        return response;
      }).catch(()=>cached);
      return cached||network;
    })
  );
});