/* QryptAir Service Worker v2 — scope /qryptair/ */
const CACHE="qryptair-v2";
const SHELL=["/qryptair/","/qryptair/air-manifest.json","/qryptair/logo-192.png","/qryptair/apple-touch-icon.png","/qryptair/favicon.ico","/qryptair/qryptum-logo.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const{request}=e;const url=new URL(request.url);
  if(request.method!=="GET"||url.origin!==self.location.origin||url.pathname.startsWith("/api/"))return;
  const isNav=request.mode==="navigate";
  const isAsset=/\.(js|css|woff2?|png|jpg|jpeg|svg|ico|webp|wasm)(\?.*)?$/.test(url.pathname);
  if(isNav){e.respondWith(fetch(request).then(res=>{caches.open(CACHE).then(c=>c.put(request,res.clone()));return res;}).catch(()=>caches.match("/qryptair/").then(r=>r||caches.match(request))));return;}
  if(isAsset){e.respondWith(fetch(request).then(res=>{if(res.ok)caches.open(CACHE).then(c=>c.put(request,res.clone()));return res;}).catch(()=>caches.match(request)));}
});