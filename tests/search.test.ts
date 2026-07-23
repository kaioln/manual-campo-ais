import { describe, expect, it } from "vitest";
import { searchLocal } from "../src/utilities/search";

const items = [
  { title: "Ausência de heading", href: "/diagnostico/", type: "Diagnóstico", text: "HDT giro proa" },
  { title: "Alimentação do FA-150", href: "/modelos/fa-150/", type: "Modelo", text: "power supply energia" },
  { title: "Pilot plug", href: "/modulos/iec/", type: "Módulo", text: "38400 bps interface" }
];

describe("busca local", () => {
  it("ignora acentos e prioriza título", () => {
    const result = searchLocal(items, "ausencia");
    expect(result[0]?.title).toBe("Ausência de heading");
  });

  it("expande sinônimos", () => {
    const result = searchLocal(items, "rumo", { rumo: ["heading", "hdt"] });
    expect(result[0]?.href).toBe("/diagnostico/");
  });

  it("não pesquisa consulta curta", () => {
    expect(searchLocal(items, "a")).toEqual([]);
  });
});

