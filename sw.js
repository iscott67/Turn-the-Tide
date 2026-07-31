const CACHE="turn-the-tide-v2.0.0-atlantic1";
const ASSETS=["./","index.html","styles.css","app.js","manifest.webmanifest",
"icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","icons/favicon.png",
"assets/icons/home.svg","assets/icons/camera.svg","assets/icons/bottle.svg","assets/icons/cart.svg",
"assets/icons/chart.svg","assets/icons/search.svg","assets/icons/bulb.svg","assets/icons/compass.svg","assets/icons/heart.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match("./"))));
});