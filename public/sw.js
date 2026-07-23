const CACHE = "manual-ais-v0.1.0";
const scoped = (path) => new URL(path, self.registration.scope).href;
const CORE = [
  "",
  "modelos/fa-150/",
  "diagnostico/",
  "ferramentas/analisador/",
  "checklists/",
  "casos/",
  "relatorios/",
  "glossario/",
  "treinamento/",
  "fontes/",
  "buscar/",
  "offline/",
  "manifest.webmanifest",
  "icons/favicon.svg",
  "diagrams/fa150-arquitetura.svg"
].map(scoped);

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      });
      return cached || network.catch(() => caches.match(scoped("offline/")));
    })
  );
});
