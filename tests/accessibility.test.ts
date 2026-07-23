import { describe, expect, it } from "vitest";
import analyzerSource from "../src/pages/ferramentas/analisador.astro?raw";
import citationSource from "../src/components/CitationCard.astro?raw";
import fontsSource from "../src/pages/fontes.astro?raw";
import glossarySource from "../src/pages/glossario.astro?raw";
import manifestSource from "../public/manifest.webmanifest?raw";
import sectionSource from "../src/components/SectionRenderer.astro?raw";
import serviceWorkerSource from "../public/sw.js?raw";
import validatorSource from "../scripts/validate-project.mjs?raw";

const sources: Record<string, string> = {
  "src/components/CitationCard.astro": citationSource,
  "src/components/SectionRenderer.astro": sectionSource,
  "src/pages/glossario.astro": glossarySource,
  "src/pages/fontes.astro": fontsSource,
  "src/pages/ferramentas/analisador.astro": analyzerSource,
  "public/sw.js": serviceWorkerSource,
  "public/manifest.webmanifest": manifestSource,
  "scripts/validate-project.mjs": validatorSource
};

const read = (path: string) => sources[path] ?? "";

describe("semântica acessível", () => {
  it("nomeia artigos de citação sem criar landmarks complementares", () => {
    const source = read("src/components/CitationCard.astro");
    expect(source).toContain('<article class="citation-card"');
    expect(source).toContain("aria-labelledby={claimLabelId}");
    expect(source).not.toContain('<aside class="citation-card"');
  });

  it("liga cada seção ao seu título com IDs distintos", () => {
    const source = read("src/components/SectionRenderer.astro");
    expect(source).toContain('const headingId = `${sectionId}-titulo`');
    expect(source).toContain("aria-labelledby={headingId}");
    expect(source).toContain("<h2 id={headingId}>");
  });

  it.each([
    "src/pages/glossario.astro",
    "src/pages/fontes.astro",
    "src/pages/ferramentas/analisador.astro"
  ])("oferece região focável, caption e escopo de coluna em %s", (path) => {
    const source = read(path);
    expect(source).toMatch(/class="table-wrap"[^>]+role="region"[^>]+tabindex="0"/);
    expect(source).toMatch(/<caption\b/);
    expect(source).toMatch(/<th scope="col">/);
  });

  it("limita a live region do analisador ao resumo", () => {
    const source = read("src/pages/ferramentas/analisador.astro");
    expect(source).toContain('id="summary" role="status"');
    expect(source).not.toMatch(/id="analysis-result"[^>]+aria-live/);
    expect(source).toContain("summary.focus()");
  });
});

describe("offline e auditoria", () => {
  it("usa precache tolerante e fallback HTML somente para navegação", () => {
    const source = read("public/sw.js");
    expect(source).toContain("Promise.allSettled");
    expect(source).toContain('request.mode === "navigate"');
    expect(source).toContain('"modulos/fundamentos-ais/"');
    expect(source).toContain('"diagrams/rs422-talkers.svg"');
  });

  it("mantém manifesto portável entre bases de publicação", () => {
    const manifest = JSON.parse(read("public/manifest.webmanifest"));
    expect(manifest.id).toBe("./");
    expect(manifest.start_url).toBe("./");
    expect(manifest.scope).toBe("./");
  });

  it("audita IDs duplicados e referências fora da base", () => {
    const source = read("scripts/validate-project.mjs");
    expect(source).toContain("ID duplicado");
    expect(source).toContain("caminho absoluto fora da base de publicação");
    expect(source).toContain("lista CORE do service worker");
  });
});
