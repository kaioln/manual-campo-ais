const CACHE = "manual-ais-v0.2.0";
const scoped = (path) => new URL(path, self.registration.scope).href;
const CORE = [
  "",
  "acesso-tecnico/",
  "buscar/",
  "casos/",
  "checklists/",
  "diagnostico/",
  "ferramentas/analisador/",
  "fontes/",
  "glossario/",
  "modelos/fa-150/",
  "modulos/fundamentos-ais/",
  "modulos/dados-transmitidos-recebidos/",
  "modulos/arquitetura-classe-a/",
  "modulos/furuno-fa-150/",
  "modulos/outros-modelos/",
  "modulos/sensores-integracao/",
  "modulos/iec-61162-nmea-rs422/",
  "modulos/instalacao/",
  "modulos/commissioning/",
  "modulos/diagnostico-troubleshooting/",
  "modulos/medicoes-instrumentos/",
  "modulos/alarmes-eventos/",
  "modulos/procedimentos-bordo/",
  "modulos/seguranca-operacional/",
  "modulos/casos-praticos/",
  "modulos/checklists/",
  "modulos/treinamento/",
  "o-que-mudou/",
  "offline/",
  "relatorios/",
  "treinamento/",
  "manifest.webmanifest",
  "icons/favicon.svg",
  "diagrams/fa150-arquitetura.svg",
  "diagrams/fluxo-diagnostico.svg",
  "diagrams/rs422-talkers.svg"
].map(scoped);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.allSettled(CORE.map((url) => cache.add(url)))
    )
  );
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
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin || request.headers.has("range")) return;

  event.respondWith(
    (async () => {
      const cacheKey = request.mode === "navigate"
        ? new Request(`${url.origin}${url.pathname}`)
        : request;
      const cached = await caches.match(cacheKey);

      const refresh = async () => {
        const response = await fetch(request);
        if (response.ok && response.type !== "opaque") {
          const cache = await caches.open(CACHE);
          await cache.put(cacheKey, response.clone());
        }
        return response;
      };

      if (cached) {
        event.waitUntil(refresh().catch(() => undefined));
        return cached;
      }

      try {
        return await refresh();
      } catch {
        if (request.mode === "navigate") {
          const fallback = await caches.match(scoped("offline/"));
          if (fallback) return fallback;
        }
        return new Response("Recurso indisponível offline.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      }
    })()
  );
});
