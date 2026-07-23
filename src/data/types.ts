export type Classification =
  | "CONFIRMADO PELO MANUAL"
  | "CONFIRMADO POR NORMA"
  | "PROCEDIMENTO GERAL"
  | "INFERÊNCIA TÉCNICA"
  | "NECESSITA CONFIRMAÇÃO"
  | "EXCLUSIVO DESTE MODELO"
  | "NÃO APLICÁVEL A OUTROS MODELOS";

export interface Source {
  id: string;
  title: string;
  organization: string;
  revision: string;
  date: string;
  kind: "manual" | "norma" | "procedimento" | "formulário";
  applicability: string;
  url?: string;
  localPath?: string;
}

export interface Claim {
  id: string;
  subject: string;
  statement: string;
  sourceId: string;
  page: string;
  section: string;
  classification: Classification;
  confidence: "Alta" | "Média" | "Baixa";
  applicability: string;
  note?: string;
}

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  claimIds?: string[];
  warning?: string;
  decision?: string[];
}

export interface ModulePage {
  slug: string;
  order: number;
  title: string;
  eyebrow: string;
  summary: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
  status: "verificado" | "rascunho controlado" | "lacuna documentada";
  applicability: string[];
  sourceIds: string[];
  diagram?: {
    src: string;
    alt: string;
    caption: string;
  };
  sections: ContentSection[];
  keywords: string[];
}
