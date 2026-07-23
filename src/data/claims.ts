import type { Claim } from "./types";

export const claims: Claim[] = [
  {
    id: "AIS-IMO-001",
    subject: "Finalidade",
    statement: "O AIS fornece automaticamente identificação, posição e outras informações a navios e autoridades costeiras.",
    sourceId: "SRC-IMO-AIS",
    page: "página web",
    section: "AIS transponders",
    classification: "CONFIRMADO POR NORMA",
    confidence: "Alta",
    applicability: "AIS embarcado"
  },
  {
    id: "AIS-SAFE-001",
    subject: "Limitação",
    statement: "O AIS é um auxílio à navegação; decisões não devem depender dele como única fonte.",
    sourceId: "SRC-IMO-A1106",
    page: "diretriz oficial",
    section: "Operational use",
    classification: "CONFIRMADO POR NORMA",
    confidence: "Alta",
    applicability: "AIS embarcado"
  },
  {
    id: "FA150-SYS-001",
    subject: "Arquitetura",
    statement: "O conjunto documentado inclui transponder FA-1501 e monitor FA-1502.",
    sourceId: "SRC-FUR-IME-P1",
    page: "PDF 4–5",
    section: "System configuration / equipment lists",
    classification: "CONFIRMADO PELO MANUAL",
    confidence: "Alta",
    applicability: "Furuno FA-150"
  },
  {
    id: "FA150-SYS-002",
    subject: "Antenas",
    statement: "O arranjo documentado admite GSC-001 ou GPA-017S e a opção combinada GVA-100-T com distribuidor DB-1.",
    sourceId: "SRC-FUR-IME-P1",
    page: "PDF 4–5",
    section: "System configuration / equipment lists",
    classification: "CONFIRMADO PELO MANUAL",
    confidence: "Alta",
    applicability: "Furuno FA-150"
  },
  {
    id: "FA150-PWR-001",
    subject: "Alimentação",
    statement: "O diagrama de sistema mostra alimentação de 12–24 Vcc para transponder e monitor; a fonte PR-240 é opcional.",
    sourceId: "SRC-FUR-IME-P1",
    page: "PDF 4",
    section: "System configuration",
    classification: "CONFIRMADO PELO MANUAL",
    confidence: "Alta",
    applicability: "Furuno FA-150",
    note: "Confirmar a etiqueta do equipamento e o arranjo do navio antes da intervenção."
  },
  {
    id: "FA150-IO-001",
    subject: "Interface",
    statement: "No procedimento de configuração documentado, IEC 61162-1 corresponde a 4800 bps e IEC 61162-2 a 38,4 kbps.",
    sourceId: "SRC-FUR-IME-P1",
    page: "PDF 31",
    section: "3.5 How to Set I/O Port",
    classification: "CONFIRMADO PELO MANUAL",
    confidence: "Alta",
    applicability: "Furuno FA-150"
  },
  {
    id: "FA150-IO-002",
    subject: "Portas",
    statement: "COM1 pode ser configurada para long range, display externo ou desabilitada; as demais portas têm funções documentadas separadamente.",
    sourceId: "SRC-FUR-IME-P1",
    page: "PDF 22 e 31",
    section: "2.1.1 / 3.5",
    classification: "CONFIRMADO PELO MANUAL",
    confidence: "Alta",
    applicability: "Furuno FA-150"
  },
  {
    id: "FA150-DIAG-001",
    subject: "Diagnóstico",
    statement: "O FA-150 fornece testes de diagnóstico para monitor e transponder.",
    sourceId: "SRC-FUR-OME-M",
    page: "PDF 76",
    section: "3.4 Diagnostics",
    classification: "CONFIRMADO PELO MANUAL",
    confidence: "Alta",
    applicability: "Furuno FA-150",
    note: "Funções de serviço permanecem restritas a pessoal autorizado."
  },
  {
    id: "FA150-DIAG-002",
    subject: "Histórico",
    statement: "O histórico de energia registra 30 eventos recentes e omite ciclos com intervalo menor que 15 minutos.",
    sourceId: "SRC-FUR-OME-M",
    page: "PDF 80",
    section: "3.4.3 Power on/off history",
    classification: "EXCLUSIVO DESTE MODELO",
    confidence: "Alta",
    applicability: "Furuno FA-150"
  },
  {
    id: "FA150-SENS-001",
    subject: "Sensores",
    statement: "A tela SENSOR STATUS informa origem e validade de GNSS, SOG/COG, heading e ROT por mensagens de estado.",
    sourceId: "SRC-FUR-OME-M",
    page: "PDF 82",
    section: "3.7 Displaying Sensor Status",
    classification: "CONFIRMADO PELO MANUAL",
    confidence: "Alta",
    applicability: "Furuno FA-150"
  },
  {
    id: "FA150-DATA-001",
    subject: "Dados dinâmicos",
    statement: "OWN DYNAMIC DATA exibe posição, SOG, COG, heading, ROT, precisão e estado RAIM.",
    sourceId: "SRC-FUR-OME-M",
    page: "PDF 36",
    section: "1.7.5 Dynamic data display",
    classification: "EXCLUSIVO DESTE MODELO",
    confidence: "Alta",
    applicability: "Furuno FA-150"
  },
  {
    id: "FA150-MSG-001",
    subject: "Mensagens",
    statement: "Mensagens curtas de segurança são um meio adicional e não removem os requisitos do GMDSS.",
    sourceId: "SRC-FUR-OME-M",
    page: "PDF 36",
    section: "1.8 Messages",
    classification: "CONFIRMADO PELO MANUAL",
    confidence: "Alta",
    applicability: "Furuno FA-150"
  },
  {
    id: "FA150-PILOT-001",
    subject: "Pilot plug",
    statement: "O pilot plug opcional do FA-150 opera a 38400 bps e possui conexões específicas documentadas.",
    sourceId: "SRC-FUR-OME-M",
    page: "PDF 46",
    section: "1.12 Pilot Plug",
    classification: "EXCLUSIVO DESTE MODELO",
    confidence: "Alta",
    applicability: "Furuno FA-150"
  },
  {
    id: "FA150-RESET-001",
    subject: "Restauração",
    statement: "A limpeza geral restaura ajustes e dados GNSS; MMSI, IMO, nome e call sign não são apagados conforme o manual.",
    sourceId: "SRC-FUR-OME-M",
    page: "PDF 82",
    section: "3.8 Restoring Default Settings",
    classification: "CONFIRMADO PELO MANUAL",
    confidence: "Alta",
    applicability: "Furuno FA-150",
    note: "Executar somente com autorização, registro e plano de retorno."
  },
  {
    id: "FA150-ACCESS-001",
    subject: "Acesso",
    statement: "Sem credencial, INITIAL SETTINGS aparece em modo VIEW e não permite alteração.",
    sourceId: "SRC-FUR-OME-M",
    page: "PDF 84",
    section: "Appendix 1 menu tree",
    classification: "CONFIRMADO PELO MANUAL",
    confidence: "Alta",
    applicability: "Furuno FA-150",
    note: "Credencial fornecida exclusivamente pelo fabricante ou assistência autorizada."
  },
  {
    id: "IEC61162-001",
    subject: "Interface",
    statement: "IEC 61162-1 define transmissão serial unidirecional de um talker para um ou mais listeners.",
    sourceId: "SRC-IEC-61162-1-2024",
    page: "resumo público",
    section: "Scope",
    classification: "CONFIRMADO POR NORMA",
    confidence: "Alta",
    applicability: "IEC 61162-1"
  },
  {
    id: "FA150-TRAIN-001",
    subject: "Procedimento",
    statement: "O serviço deve registrar estado inicial, resultados, pendências e evidências.",
    sourceId: "SRC-PRONAV-POP",
    page: "PDF 1–4",
    section: "Seções 8–11",
    classification: "PROCEDIMENTO GERAL",
    confidence: "Média",
    applicability: "Serviço autorizado"
  }
];

export const claimById = Object.fromEntries(claims.map((claim) => [claim.id, claim]));

