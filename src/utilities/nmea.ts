export interface ParsedField {
  index: number;
  value: string;
  label: string;
  explanation: string;
}

export interface ParsedSentence {
  raw: string;
  delimiter: "$" | "!" | "";
  identifier: string;
  talker: string;
  formatter: string;
  fields: ParsedField[];
  providedChecksum: string | null;
  calculatedChecksum: string | null;
  checksumValid: boolean | null;
  structuralErrors: string[];
  warnings: string[];
  supportedByFa150: "entrada" | "saída" | "ambos" | "não confirmado";
}

const fa150Input = new Set([
  "ABM", "ACA", "ACK", "ACN", "AIR", "BBM", "DTM", "GBS", "GGA", "GLL", "GNS", "HBT",
  "HDT", "LRF", "LRI", "OSD", "RMC", "ROT", "SSD", "THS", "VBW", "VSD", "VTG"
]);
const fa150Output = new Set([
  "ABK", "ACA", "ACS", "ALC", "ALF", "ALR", "ARC", "HBT", "LRF", "LR1", "LR2", "LR3",
  "SSD", "TXT", "VDM", "VDO", "VER", "VSD"
]);

const fieldDefinitions: Record<string, { label: string; explanation: string }[]> = {
  VDM: [
    { label: "Total de fragmentos", explanation: "Quantidade de sentenças que formam a mensagem encapsulada." },
    { label: "Número do fragmento", explanation: "Posição deste fragmento na sequência." },
    { label: "Identificador sequencial", explanation: "Relaciona fragmentos; pode ficar vazio em mensagem de um fragmento." },
    { label: "Canal AIS", explanation: "Canal indicado pelo receptor para a mensagem encapsulada." },
    { label: "Payload AIS", explanation: "Dados AIS codificados em armoring de seis bits; não são texto livre." },
    { label: "Bits de preenchimento", explanation: "Quantidade de bits finais de preenchimento do payload." }
  ],
  VDO: [
    { label: "Total de fragmentos", explanation: "Quantidade de sentenças que formam o relatório próprio." },
    { label: "Número do fragmento", explanation: "Posição deste fragmento na sequência." },
    { label: "Identificador sequencial", explanation: "Relaciona fragmentos quando necessário." },
    { label: "Canal AIS", explanation: "Canal associado ao relatório, quando informado." },
    { label: "Payload AIS", explanation: "Relatório próprio codificado em armoring de seis bits." },
    { label: "Bits de preenchimento", explanation: "Quantidade de bits finais de preenchimento." }
  ],
  HDT: [
    { label: "Heading verdadeiro", explanation: "Valor de proa/heading informado pelo talker." },
    { label: "Referência", explanation: "Indicador de referência verdadeira conforme a sentença." }
  ],
  ROT: [
    { label: "Taxa de guinada", explanation: "Valor de rate of turn informado pelo sensor." },
    { label: "Status", explanation: "Indica validade do valor conforme a sentença." }
  ],
  GGA: [
    { label: "Hora UTC", explanation: "Hora do fix." },
    { label: "Latitude", explanation: "Latitude no formato da sentença." },
    { label: "Hemisfério N/S", explanation: "Sinal geográfico da latitude." },
    { label: "Longitude", explanation: "Longitude no formato da sentença." },
    { label: "Hemisfério E/W", explanation: "Sinal geográfico da longitude." },
    { label: "Qualidade do fix", explanation: "Indicador de qualidade; deve ser interpretado na norma aplicável." }
  ]
};

export function calculateChecksum(body: string): string {
  let checksum = 0;
  for (const character of body) checksum ^= character.charCodeAt(0);
  return checksum.toString(16).toUpperCase().padStart(2, "0");
}

export function checksumForSentence(sentence: string): string | null {
  const trimmed = sentence.trim();
  if (!trimmed || !["$", "!"].includes(trimmed[0] ?? "")) return null;
  const star = trimmed.indexOf("*");
  const body = trimmed.slice(1, star >= 0 ? star : undefined);
  return calculateChecksum(body);
}

function applicability(formatter: string): ParsedSentence["supportedByFa150"] {
  const input = fa150Input.has(formatter);
  const output = fa150Output.has(formatter);
  if (input && output) return "ambos";
  if (input) return "entrada";
  if (output) return "saída";
  return "não confirmado";
}

export function parseSentence(input: string): ParsedSentence {
  const raw = input.trim().replace(/[\r\n]+$/, "");
  const structuralErrors: string[] = [];
  const warnings: string[] = [];
  const first = raw[0];
  const delimiter = first === "$" || first === "!" ? first : "";
  if (!delimiter) structuralErrors.push("A sentença deve começar com $ ou !.");

  const star = raw.indexOf("*");
  if (star < 0) structuralErrors.push("Checksum ausente: não foi encontrado '*HH'.");
  if (star >= 0 && !/^[0-9A-Fa-f]{2}$/.test(raw.slice(star + 1, star + 3))) {
    structuralErrors.push("O checksum deve conter dois dígitos hexadecimais.");
  }
  if (raw.includes("\n") || raw.includes("\r")) structuralErrors.push("A entrada contém mais de uma linha.");

  const body = delimiter ? raw.slice(1, star >= 0 ? star : undefined) : raw;
  const parts = body.split(",");
  const identifier = parts[0] ?? "";
  if (identifier.length < 3) structuralErrors.push("Identificador de sentença incompleto.");
  const formatter = identifier.slice(-3).toUpperCase();
  const talker = identifier.slice(0, -3).toUpperCase();
  const providedChecksum = star >= 0 ? raw.slice(star + 1, star + 3).toUpperCase() : null;
  const calculatedChecksum = delimiter ? calculateChecksum(body) : null;
  const checksumValid = providedChecksum && calculatedChecksum
    ? providedChecksum === calculatedChecksum
    : null;

  if (checksumValid === false) warnings.push("Checksum recebido não coincide com o valor calculado.");
  if (applicability(formatter) === "não confirmado") {
    warnings.push("Esta sentença não aparece na lista de entrada/saída confirmada para o FA-150 revisão M.");
  }
  if ((formatter === "VDM" || formatter === "VDO") && parts.length !== 7) {
    structuralErrors.push(`${formatter} deve conter seis campos após o identificador.`);
  }

  const definitions = fieldDefinitions[formatter] ?? [];
  const values = parts.slice(1);
  const fields = values.map((value, index) => ({
    index: index + 1,
    value,
    label: definitions[index]?.label ?? `Campo ${index + 1}`,
    explanation: definitions[index]?.explanation ?? "Interpretação depende da sentença e da edição aplicável da norma."
  }));

  return {
    raw,
    delimiter,
    identifier,
    talker,
    formatter,
    fields,
    providedChecksum,
    calculatedChecksum,
    checksumValid,
    structuralErrors,
    warnings,
    supportedByFa150: applicability(formatter)
  };
}

