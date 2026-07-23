export interface TrainingTrail {
  id: string;
  title: string;
  audience: string;
  lessons: { title: string; href: string; objective: string }[];
}

export const trainingTrails: TrainingTrail[] = [
  {
    id: "iniciante",
    title: "Iniciante",
    audience: "Auxiliar ou profissional em formação",
    lessons: [
      { title: "Fundamentos", href: "/modulos/fundamentos-ais/", objective: "Explicar finalidade e limitação do AIS." },
      { title: "Dados", href: "/modulos/dados-transmitidos-recebidos/", objective: "Separar dados estáticos, dinâmicos e de viagem." },
      { title: "Segurança", href: "/modulos/seguranca-operacional/", objective: "Reconhecer intervenções que exigem autorização." }
    ]
  },
  {
    id: "intermediario",
    title: "Técnico intermediário",
    audience: "Técnico eletrônico ou de automação",
    lessons: [
      { title: "Arquitetura", href: "/modulos/arquitetura-classe-a/", objective: "Mapear fluxo e fronteiras de falha." },
      { title: "Sensores", href: "/modulos/sensores-integracao/", objective: "Distinguir origem, interface e destino." },
      { title: "Commissioning", href: "/modulos/commissioning/", objective: "Separar recepção, transmissão e integração." }
    ]
  },
  {
    id: "avancado",
    title: "Técnico avançado",
    audience: "Engenheiro de serviço",
    lessons: [
      { title: "Diagnóstico", href: "/diagnostico/", objective: "Escolher o teste de maior poder de separação." },
      { title: "Medições", href: "/modulos/medicoes-instrumentos/", objective: "Planejar medição segura e rastreável." },
      { title: "Alarmes", href: "/modulos/alarmes-eventos/", objective: "Preservar e interpretar evidências." }
    ]
  },
  {
    id: "fa150",
    title: "Especialista FA-150",
    audience: "Técnico autorizado no modelo",
    lessons: [
      { title: "Sistema FA-150", href: "/modelos/fa-150/", objective: "Reconhecer unidades, fontes e limites." },
      { title: "Interfaces", href: "/modulos/iec-61162-nmea-rs422/", objective: "Aplicar funções e taxas documentadas." },
      { title: "Ferramenta de sentenças", href: "/ferramentas/analisador/", objective: "Validar estrutura e checksum localmente." }
    ]
  },
  {
    id: "comunicacao",
    title: "Diagnóstico de comunicação",
    audience: "Técnico de integração",
    lessons: [
      { title: "IEC 61162", href: "/modulos/iec-61162-nmea-rs422/", objective: "Separar falha elétrica e sintática." },
      { title: "Troubleshooting", href: "/diagnostico/", objective: "Seguir a sentença da origem ao listener." }
    ]
  },
  {
    id: "rf",
    title: "Diagnóstico de RF",
    audience: "Técnico de radiocomunicação autorizado",
    lessons: [
      { title: "Segurança", href: "/modulos/seguranca-operacional/", objective: "Reconhecer riscos de transmissão e antena." },
      { title: "Instrumentos", href: "/modulos/medicoes-instrumentos/", objective: "Definir carga, faixa, direção e evidência." }
    ]
  },
  {
    id: "passadico",
    title: "Integração de passadiço",
    audience: "Técnico de navegação",
    lessons: [
      { title: "Sensores e consumidores", href: "/modulos/sensores-integracao/", objective: "Mapear GNSS, gyro, radar, ECDIS e VDR." },
      { title: "Procedimentos de bordo", href: "/modulos/procedimentos-bordo/", objective: "Coordenar impacto e devolução à operação." }
    ]
  }
];

