export interface GlossaryEntry {
  pt: string;
  en: string;
  acronym?: string;
  definition: string;
  tags: string[];
}

export const glossary: GlossaryEntry[] = [
  { pt: "Sistema de Identificação Automática", en: "Automatic Identification System", acronym: "AIS", definition: "Sistema de intercâmbio automático de identificação, posição e dados relacionados.", tags: ["sistema", "identificação"] },
  { pt: "Velocidade sobre o fundo", en: "Speed Over Ground", acronym: "SOG", definition: "Velocidade da embarcação em relação ao fundo, normalmente derivada de posicionamento.", tags: ["velocidade", "speed"] },
  { pt: "Rumo sobre o fundo", en: "Course Over Ground", acronym: "COG", definition: "Direção do movimento em relação ao fundo; não é sinônimo de heading.", tags: ["rumo", "course"] },
  { pt: "Proa verdadeira", en: "True Heading", acronym: "HDT", definition: "Orientação longitudinal da embarcação referida ao norte verdadeiro.", tags: ["heading", "rumo", "giro"] },
  { pt: "Taxa de guinada", en: "Rate Of Turn", acronym: "ROT", definition: "Velocidade angular de mudança de proa.", tags: ["guinada", "rate"] },
  { pt: "Serviço de Tráfego de Embarcações", en: "Vessel Traffic Service", acronym: "VTS", definition: "Serviço costeiro de monitoramento e apoio ao tráfego.", tags: ["terra", "tráfego"] },
  { pt: "Enlace de dados VHF", en: "VHF Data Link", acronym: "VDL", definition: "Meio rádio compartilhado usado pelo AIS.", tags: ["rádio", "RF"] },
  { pt: "Acesso múltiplo por divisão de tempo", en: "Time Division Multiple Access", acronym: "TDMA", definition: "Família de métodos que distribui transmissões em intervalos de tempo.", tags: ["slots", "rádio"] },
  { pt: "TDMA auto-organizado", en: "Self-Organized TDMA", acronym: "SOTDMA", definition: "Método de seleção e reserva de slots usado por estações aplicáveis.", tags: ["slots", "Classe A"] },
  { pt: "TDMA com detecção de portadora", en: "Carrier-Sense TDMA", acronym: "CSTDMA", definition: "Método de acesso que avalia a ocupação do canal antes da transmissão.", tags: ["Classe B", "slots"] },
  { pt: "Acesso aleatório TDMA", en: "Random Access TDMA", acronym: "RATDMA", definition: "Método de acesso aleatório a slot quando aplicável ao protocolo.", tags: ["slots"] },
  { pt: "TDMA incremental", en: "Incremental TDMA", acronym: "ITDMA", definition: "Método usado para anunciar futura alocação de slots.", tags: ["slots"] },
  { pt: "TDMA de alocação fixa", en: "Fixed Access TDMA", acronym: "FATDMA", definition: "Slots previamente atribuídos por estação de controle.", tags: ["slots", "base"] },
  { pt: "Identidade do Serviço Móvel Marítimo", en: "Maritime Mobile Service Identity", acronym: "MMSI", definition: "Identificador marítimo regulado; alteração exige autorização.", tags: ["identidade", "segurança"] },
  { pt: "Número IMO", en: "IMO ship identification number", acronym: "IMO", definition: "Número permanente de identificação da embarcação quando aplicável.", tags: ["identidade"] },
  { pt: "Indicativo de chamada", en: "Call sign", definition: "Identificador de radiocomunicação atribuído à estação/embarcação.", tags: ["identidade", "rádio"] },
  { pt: "Tempo Universal Coordenado", en: "Coordinated Universal Time", acronym: "UTC", definition: "Referência de tempo usada para sincronismo e registros.", tags: ["tempo", "GNSS"] },
  { pt: "Sistema Global de Navegação por Satélite", en: "Global Navigation Satellite System", acronym: "GNSS", definition: "Família de sistemas de posicionamento e tempo por satélite.", tags: ["posição", "GPS"] },
  { pt: "Monitor e teclado mínimos", en: "Minimum Keyboard and Display", acronym: "MKD", definition: "Interface mínima de operação/apresentação associada ao AIS Classe A.", tags: ["display", "teclado"] },
  { pt: "Registrador de Dados de Viagem", en: "Voyage Data Recorder", acronym: "VDR", definition: "Sistema que registra dados selecionados da viagem e do passadiço.", tags: ["registro", "integração"] },
  { pt: "Sistema Eletrônico de Cartas e Informação", en: "Electronic Chart Display and Information System", acronym: "ECDIS", definition: "Sistema de apresentação cartográfica e informação de navegação.", tags: ["display", "alvos"] },
  { pt: "Transmissor", en: "Talker", definition: "Origem de dados em uma interface IEC 61162/NMEA.", tags: ["serial", "TX"] },
  { pt: "Receptor", en: "Listener", definition: "Destino que recebe dados de um talker.", tags: ["serial", "RX"] },
  { pt: "Blindagem", en: "Shield", definition: "Condutor/camada usada para controle de interferência; conexão depende do projeto.", tags: ["cabo", "terra"] },
  { pt: "Aterramento de proteção", en: "Protective earth", acronym: "PE", definition: "Ligação de segurança destinada à proteção contra choque.", tags: ["terra", "alimentação"] },
  { pt: "Relação de onda estacionária", en: "Voltage Standing Wave Ratio", acronym: "VSWR", definition: "Indicador de desadaptação em um sistema RF; a interpretação exige método e limites aplicáveis.", tags: ["ROE", "RF", "antena"] },
  { pt: "Carga fantasma", en: "Dummy load", definition: "Carga RF apropriada usada em ensaios autorizados no lugar da antena.", tags: ["RF", "teste"] },
  { pt: "Plugue do prático", en: "Pilot plug", definition: "Interface para disponibilizar dados AIS ao equipamento do prático.", tags: ["pilot", "IEC 61162"] },
  { pt: "Checksum", en: "Checksum", definition: "Valor de verificação calculado por XOR na parte delimitada da sentença.", tags: ["sentença", "NMEA"] },
  { pt: "Sentença encapsulada de alvo", en: "AIS VHF Data-link Message", acronym: "VDM", definition: "Sentença que encapsula mensagens AIS recebidas; pode ser multipartes.", tags: ["AIVDM", "payload"] },
  { pt: "Sentença de dados próprios", en: "AIS VHF Data-link Own-vessel report", acronym: "VDO", definition: "Sentença que encapsula relatório AIS da própria estação.", tags: ["AIVDO", "payload"] },
  { pt: "Ajuda à navegação", en: "Aid to Navigation", acronym: "AtoN", definition: "Estação ou objeto de auxílio à navegação, físico ou virtual conforme o contexto aplicável.", tags: ["estação", "boia"] },
  { pt: "Busca e salvamento", en: "Search and Rescue", acronym: "SAR", definition: "Operações e equipamentos destinados a localizar e socorrer pessoas/embarcações.", tags: ["segurança", "emergência"] },
  { pt: "Precisão de posição", en: "Position accuracy", acronym: "PA", definition: "Indicador de qualidade associado à posição transmitida/apresentada.", tags: ["posição", "integridade"] },
  { pt: "Monitoramento autônomo de integridade", en: "Receiver Autonomous Integrity Monitoring", acronym: "RAIM", definition: "Indicação de monitoramento de integridade do receptor de navegação.", tags: ["GNSS", "integridade"] }
];

