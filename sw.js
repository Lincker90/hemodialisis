/* Guarda el programa en el equipo para que funcione sin internet. Si actualizas los archivos, cambia el número de versión. */
var VERSION = "hd-v2";
var ARCHIVOS = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "vendor/docx.js", "vendor/xlsx.js"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(ARCHIVOS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
    var red = fetch(e.request).then(function (r) {
      if (r && r.ok && new URL(e.request.url).origin === location.origin) { var copia = r.clone(); caches.open(VERSION).then(function (c) { c.put(e.request, copia); }); }
      return r;
    }).catch(function () { return hit; });
    return hit || red;
  }));
});
