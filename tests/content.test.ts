import { describe, expect, it } from "vitest";
import { claims } from "../src/data/claims";
import { modules } from "../src/data/modules";
import { sources } from "../src/data/sources";
import { checklists } from "../src/data/checklists";
import { troubleCases } from "../src/data/troubleshooting";

describe("integridade do conteúdo", () => {
  const sourceIds = new Set(sources.map((source) => source.id));
  const claimIds = new Set(claims.map((claim) => claim.id));

  it("mantém IDs únicos", () => {
    expect(sourceIds.size).toBe(sources.length);
    expect(claimIds.size).toBe(claims.length);
    expect(new Set(modules.map((module) => module.slug)).size).toBe(modules.length);
  });

  it("todas as alegações apontam para fonte", () => {
    claims.forEach((claim) => expect(sourceIds.has(claim.sourceId), claim.id).toBe(true));
  });

  it("todas as páginas técnicas têm fontes e claims válidos", () => {
    modules.forEach((module) => {
      expect(module.sourceIds.length, module.slug).toBeGreaterThan(0);
      module.sourceIds.forEach((id) => expect(sourceIds.has(id), `${module.slug}:${id}`).toBe(true));
      module.sections.flatMap((section) => section.claimIds ?? [])
        .forEach((id) => expect(claimIds.has(id), `${module.slug}:${id}`).toBe(true));
    });
  });

  it("inclui o escopo mínimo de campo", () => {
    expect(modules.length).toBe(17);
    expect(checklists.length).toBeGreaterThanOrEqual(17);
    expect(troubleCases.length).toBeGreaterThanOrEqual(30);
  });
});

