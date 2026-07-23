import type { Source } from "./types";

export const sources: Source[] = [
  {
    id: "SRC-FUR-OME-M",
    title: "U-AIS Transponder Model FA-150 — Operator's Manual",
    organization: "Furuno Electric Co., Ltd.",
    revision: "OME-44310-M, revisão M",
    date: "2017-02-10",
    kind: "manual",
    applicability: "Furuno FA-150",
    localPath: "docs/manuals/Furuno_FA-150_Operator_OME-44310-M_rev-M_2017.pdf"
  },
  {
    id: "SRC-FUR-IME-P1",
    title: "U-AIS Transponder Model FA-150 — Installation Manual",
    organization: "Furuno Electric Co., Ltd.",
    revision: "IME-44310-P1, revisão P1",
    date: "2019-03-20",
    kind: "manual",
    applicability: "Furuno FA-150",
    localPath: "docs/manuals/Furuno_FA-150_Installation_IME-44310-P1_rev-P1_2019.pdf"
  },
  {
    id: "SRC-PRONAV-POP",
    title: "Manutenção e Verificação Operacional de AIS — Furuno FA-150",
    organization: "Pronav Marine",
    revision: "Revisão formal não indicada",
    date: "metadados: 2026-01-14",
    kind: "procedimento",
    applicability: "Serviço autorizado no FA-150",
    localPath: "docs/procedures/POP_Manutencao_Equipamentos_AIS.docx"
  },
  {
    id: "SRC-PRONAV-RAT",
    title: "Relatório de Serviço — AIS Furuno FA-150",
    organization: "Pronav Marine",
    revision: "Revisão formal não indicada",
    date: "metadados: 2025-12-14",
    kind: "formulário",
    applicability: "Registro de serviço; modelo vazio",
    localPath: "docs/service-reports/RAT_AIS_Furuno_FA-150_blank.docx"
  },
  {
    id: "SRC-IMO-AIS",
    title: "AIS transponders",
    organization: "International Maritime Organization",
    revision: "Página institucional vigente",
    date: "acesso 2026-07-23",
    kind: "norma",
    applicability: "AIS embarcado",
    url: "https://www.imo.org/en/ourwork/safety/pages/ais.aspx"
  },
  {
    id: "SRC-IMO-A1106",
    title: "Resolution A.1106(29) — Revised guidelines for onboard operational use of shipborne AIS",
    organization: "International Maritime Organization",
    revision: "A.1106(29)",
    date: "2015-12-02",
    kind: "norma",
    applicability: "Uso operacional de AIS embarcado",
    url: "https://wwwcdn.imo.org/localresources/en/OurWork/Safety/Documents/AIS/Resolution%20A.1106%2829%29.pdf"
  },
  {
    id: "SRC-ITU-M1371-6",
    title: "Recommendation ITU-R M.1371-6",
    organization: "International Telecommunication Union",
    revision: "M.1371-6",
    date: "2026-02",
    kind: "norma",
    applicability: "Características técnicas AIS atuais",
    url: "https://www.itu.int/rec/R-REC-m.1371/en"
  },
  {
    id: "SRC-IEC-61993-2-2018",
    title: "IEC 61993-2:2018 — Class A shipborne AIS equipment",
    organization: "International Electrotechnical Commission",
    revision: "Edição 3.0",
    date: "2018-07-19",
    kind: "norma",
    applicability: "AIS Classe A",
    url: "https://webstore.iec.ch/en/publication/34277"
  },
  {
    id: "SRC-IEC-61162-1-2024",
    title: "IEC 61162-1:2024 — Single talker and multiple listeners",
    organization: "International Electrotechnical Commission",
    revision: "Edição 6.0",
    date: "2024-04-04",
    kind: "norma",
    applicability: "Interface IEC 61162-1 atual",
    url: "https://webstore.iec.ch/en/publication/72729"
  }
];

export const sourceById = Object.fromEntries(sources.map((source) => [source.id, source]));

