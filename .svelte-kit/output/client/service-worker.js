const n=location.pathname.split("/").slice(0,-1).join("/"),r=[n+"/_app/immutable/entry/app.CciXaES-.js",n+"/_app/immutable/nodes/0.CwvPQsrz.js",n+"/_app/immutable/nodes/1.CRGF4DDn.js",n+"/_app/immutable/nodes/2.JMzT5rOt.js",n+"/_app/immutable/assets/2.Bvz2Ja94.css",n+"/_app/immutable/assets/paper.VFQDPQwv.png",n+"/_app/immutable/assets/clipboard.q2H9junV.png",n+"/_app/immutable/chunks/disclose-version.D0gE_yrD.js",n+"/_app/immutable/chunks/entry.2LPgES8d.js",n+"/_app/immutable/chunks/index-client.kG9aZkXV.js",n+"/_app/immutable/chunks/legacy.yuyRGzCf.js",n+"/_app/immutable/chunks/render.DVDTXrad.js",n+"/_app/immutable/chunks/runtime.DiW4vmvr.js",n+"/_app/immutable/chunks/store.BZsRV5By.js",n+"/_app/immutable/entry/start.DMEuzg80.js"],u=[n+"/._icon-512x512.png",n+"/._icons",n+"/._manifest.json",n+"/icon-512x512.png",n+"/icons/._icon-128x128.png",n+"/icons/._icon-144x144.png",n+"/icons/._icon-152x152.png",n+"/icons/._icon-192x192.png",n+"/icons/._icon-256x256.png",n+"/icons/._icon-384x384.png",n+"/icons/._icon-48x48.png",n+"/icons/._icon-512x512.png",n+"/icons/._icon-72x72.png",n+"/icons/._icon-96x96.png",n+"/icons/icon-128x128.png",n+"/icons/icon-144x144.png",n+"/icons/icon-152x152.png",n+"/icons/icon-192x192.png",n+"/icons/icon-256x256.png",n+"/icons/icon-384x384.png",n+"/icons/icon-48x48.png",n+"/icons/icon-512x512.png",n+"/icons/icon-72x72.png",n+"/icons/icon-96x96.png",n+"/manifest.json"],l="1734416798623",t=`cache-${l}`,p=[...r,...u];self.addEventListener("install",s=>{async function e(){await(await caches.open(t)).addAll(p)}s.waitUntil(e())});self.addEventListener("activate",s=>{async function e(){for(const c of await caches.keys())c!==t&&await caches.delete(c)}s.waitUntil(e())});self.addEventListener("fetch",s=>{if(s.request.method!=="GET")return;async function e(){const c=new URL(s.request.url),a=await caches.open(t);if(p.includes(c.pathname)){const i=await a.match(c.pathname);if(i)return i}try{const i=await fetch(s.request);if(!(i instanceof Response))throw new Error("invalid response from fetch");return i.status===200&&a.put(s.request,i.clone()),i}catch(i){const o=await a.match(s.request);if(o)return o;throw i}}s.respondWith(e())});
