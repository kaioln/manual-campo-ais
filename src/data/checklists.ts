export interface Checklist {
  id: string;
  title: string;
  purpose: string;
  authorization: string;
  items: string[];
}

const commonStart = [
  "Identificar responsável do passadiço e registrar autorização.",
  "Registrar modelo, serial, versões, alarmes e estado inicial.",
  "Confirmar riscos, instrumentos e critério de parada."
];

const commonEnd = [
  "Restaurar tampas, cabos, proteções e condição operacional.",
  "Repetir teste de confirmação e registrar evidências.",
  "Listar pendências e obter ciência do responsável."
];

export const checklists: Checklist[] = [
  { id: "inspecao-inicial", title: "Inspeção inicial", purpose: "Preservar estado e escopo antes da intervenção.", authorization: "Acesso ao equipamento", items: [...commonStart, "Fotografar telas, conexões e identificação sem expor dados no material público.", "Conferir documentação aplicável e alterações recentes.", ...commonEnd] },
  { id: "desligamento", title: "Desligamento", purpose: "Retirar o AIS de operação de forma coordenada.", authorization: "Desligamento aprovado pelo passadiço", items: [...commonStart, "Confirmar impacto em radar, ECDIS, VDR, alarmes e pilot plug.", "Registrar hora de desligamento.", "Isolar a alimentação segundo o procedimento de bordo.", ...commonEnd] },
  { id: "instalacao", title: "Instalação", purpose: "Montar e interligar o sistema conforme desenho.", authorization: "Instalação e alteração de cabos", items: [...commonStart, "Conferir materiais, rotas, antenas, proteção, aterramento e segregação.", "Inspecionar polaridade e conexões antes de energizar.", "Atualizar desenho as built.", ...commonEnd] },
  { id: "energizacao", title: "Primeira energização", purpose: "Energizar sem introduzir dano ou perda de evidência.", authorization: "Energização aprovada", items: [...commonStart, "Confirmar ausência de curto e proteção correta com circuito desenergizado.", "Confirmar tensão/polaridade pelo método aplicável.", "Energizar e observar alarmes, odor, ruído e aquecimento anormal.", ...commonEnd] },
  { id: "commissioning", title: "Commissioning", purpose: "Aceitar recepção, transmissão e integração separadamente.", authorization: "Testes completos e eventual transmissão", items: [...commonStart, "Validar identidade, posição, UTC, heading, ROT, SOG/COG e dados de viagem.", "Confirmar recepção por alvo conhecido.", "Confirmar transmissão por método independente autorizado.", "Confirmar radar, ECDIS, VDR e pilot plug individualmente.", ...commonEnd] },
  { id: "preventiva", title: "Manutenção preventiva", purpose: "Detectar degradação antes da falha.", authorization: "Janela de manutenção", items: [...commonStart, "Inspecionar cabos, conectores, ventilação, corrosão e fixação.", "Revisar históricos e alarmes.", "Comparar desempenho com registro anterior usando o mesmo método.", ...commonEnd] },
  { id: "diagnostico", title: "Diagnóstico", purpose: "Isolar a fronteira da falha.", authorization: "Testes compatíveis com o impacto", items: [...commonStart, "Confirmar sintoma e reproduzir apenas se seguro.", "Comparar origem, interface, AIS e consumidor.", "Alterar uma variável por vez.", ...commonEnd] },
  { id: "troca-transponder", title: "Troca de transponder", purpose: "Substituir FA-1501 preservando configuração e identidade.", authorization: "Substituição e configuração protegida", items: [...commonStart, "Obter backup/registro autorizado de todos os parâmetros aplicáveis.", "Etiquetar e fotografar cada cabo.", "Confirmar compatibilidade de hardware/software antes da montagem.", "Restaurar somente dados verificados e autorizados.", ...commonEnd] },
  { id: "troca-display", title: "Troca de display", purpose: "Substituir monitor sem confundir falha de apresentação com transponder.", authorization: "Desligamento e substituição", items: [...commonStart, "Confirmar comunicação monitor–transponder.", "Etiquetar alimentação e cabo DISP.", "Executar monitor test após substituição.", ...commonEnd] },
  { id: "troca-antena", title: "Troca de antena", purpose: "Substituir antena preservando segurança RF e estanqueidade.", authorization: "Acesso à antena e teste RF", items: [...commonStart, "Confirmar modelo, frequência, conector, montagem e rota.", "Desenergizar antes de desconectar conforme procedimento aplicável.", "Refazer vedação e proteção mecânica.", ...commonEnd] },
  { id: "troca-coaxial", title: "Troca de cabo coaxial", purpose: "Restaurar a linha RF com rastreabilidade.", authorization: "Alteração de cabo e testes RF", items: [...commonStart, "Confirmar tipo, comprimento, conectores e raio de curvatura aplicáveis.", "Inspecionar esmagamento, emendas, água e segregação.", "Ensaiar pelo método autorizado antes de transmitir.", ...commonEnd] },
  { id: "teste-rs422", title: "Teste IEC 61162 / diferencial", purpose: "Separar erro de dado, polaridade e configuração.", authorization: "Conexão de analisador isolado", items: [...commonStart, "Identificar talker, listener, par, referência e taxa.", "Capturar sentença sem expor dados sensíveis.", "Validar estrutura, checksum e frequência.", "Comparar valor na origem e no AIS.", ...commonEnd] },
  { id: "teste-ecdis", title: "Integração com ECDIS", purpose: "Confirmar dados AIS no ECDIS.", authorization: "Acesso aos dois equipamentos", items: [...commonStart, "Confirmar saída AIS e entrada ECDIS aplicáveis.", "Verificar alvos e dados próprios sem assumir que isso valida TX RF.", "Registrar porta, sentença e horário.", ...commonEnd] },
  { id: "teste-radar", title: "Integração com radar", purpose: "Confirmar apresentação AIS no radar.", authorization: "Acesso aos dois equipamentos", items: [...commonStart, "Confirmar saída AIS, entrada radar e filtros de apresentação.", "Comparar um alvo e seu horário nas duas telas.", "Registrar limitações de associação radar/AIS.", ...commonEnd] },
  { id: "teste-vdr", title: "Integração com VDR", purpose: "Confirmar registro sem alterar o AIS indevidamente.", authorization: "Acesso ao VDR e reprodução autorizada", items: [...commonStart, "Confirmar canal físico e sentença esperada.", "Verificar presença e tempo no VDR.", "Preservar evidência de gravação/reprodução.", ...commonEnd] },
  { id: "fechamento", title: "Fechamento do serviço", purpose: "Devolver o sistema em condição conhecida.", authorization: "Aceite do responsável", items: [...commonStart, "Confirmar ausência de ferramentas e materiais soltos.", "Comparar estado final com estado inicial.", "Informar qualquer limitação operacional.", ...commonEnd] },
  { id: "relatorio-final", title: "Relatório final", purpose: "Criar uma trilha técnica auditável.", authorization: "Assinatura/aceite", items: [...commonStart, "Descrever sintoma, causa, ação e teste de confirmação.", "Anexar instrumentos, valores com unidade, fotos e referências.", "Separar fato observado de hipótese.", ...commonEnd] }
];

