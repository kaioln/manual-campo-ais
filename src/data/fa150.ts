export const fa150Sections = [
  {
    href: "/modelos/fa-150/",
    title: "Visão geral",
    description: "Unidades, limites documentais e acesso rápido."
  },
  {
    href: "/modelos/fa-150/instalacao/",
    title: "Instalação",
    description: "Montagem, antenas, alimentação, proteção e cabos."
  },
  {
    href: "/modelos/fa-150/interfaces/",
    title: "Interfaces",
    description: "COM1-COM6, terminais, pilot plug e sentenças IEC 61162."
  },
  {
    href: "/modelos/fa-150/menus/",
    title: "Menus e ajustes",
    description: "Árvore documentada, permissões, faixas e impacto."
  },
  {
    href: "/modelos/fa-150/diagnosticos/",
    title: "Diagnósticos",
    description: "Testes internos, históricos, sensores e restauração."
  },
  {
    href: "/modelos/fa-150/alarmes/",
    title: "Alarmes",
    description: "Catálogo exclusivo da revisão M e próximo teste seguro."
  },
  {
    href: "/modelos/fa-150/especificacoes/",
    title: "Especificações",
    description: "RF, GNSS, energia, ambiente e proteção."
  }
] as const;

export const fa150Units = [
  ["FA-1501", "Transponder UAIS", "Unidade protegida do tempo; contém transmissor VHF, dois receptores TDMA, receptor DSC CH70, interfaces, processador e GNSS interno."],
  ["FA-1502", "Monitor", "MKD com LCD monocromático de 4,5 polegadas, teclas de operação e visualização de alvos, dados, alarmes e diagnósticos."],
  ["GSC-001 / GPA-017S", "Antena GNSS", "Alternativas documentadas para o receptor GNSS."],
  ["GVA-100-T + DB-1", "Antena combinada e distribuidor", "Opção combinada GPS/VHF; a compatibilidade da antena VHF depende do número de série do GVA-100-T."],
  ["PR-240", "Fonte CA/CC opcional", "Converte alimentação de bordo CA para 24 Vcc e admite entrada CC alternativa conforme o diagrama."],
  ["OP24-3", "Pilot plug opcional", "Ponto de conexão para apresentação AIS ao prático."],
  ["OP24-8", "Kit LAN opcional", "Placa NET100 para rede PC ou NAVNET 3D; exige configuração e intervenção interna autorizada."]
] as const;

export const fa150Controls = [
  ["LCD", "Apresenta dados, menus, mensagens, alvos, alarmes e testes."],
  ["CursorPad", "Move o cursor, seleciona itens/opções e introduz caracteres."],
  ["MENU", "Abre o menu; em testes também participa do retorno documentado."],
  ["ENT", "Confirma entrada e muda de tela."],
  ["DISP", "Seleciona telas e fecha menus."],
  ["DIM", "Ajusta iluminação do painel e contraste do LCD."],
  ["NAV STATUS", "Abre dados de viagem e estado de navegação."],
  ["PWR", "Liga e desliga o equipamento."]
] as const;

export const fa150InstallationRules = [
  {
    group: "Segurança RF",
    requirement: "O manual informa distâncias para níveis de 10 W/m² e 2 W/m² de 0,1 m e 1,0 m, respectivamente; para 100 W/m² informa “nil”.",
    source: "OME-44310-M, PDF 3, Safety Instructions",
    claimId: "FA150-RFSAFE-001"
  },
  {
    group: "Antena GNSS",
    requirement: "Instalar fora do feixe do radar, com linha de visada livre aos satélites e o mais alto possível para reduzir obstrução e spray.",
    source: "IME-44310-P1, PDF 7, 1.1.1",
    claimId: "FA150-ANT-001"
  },
  {
    group: "Antena VHF",
    requirement: "Manter pelo menos 0,5 m horizontal de estruturas condutivas e visão livre do horizonte em 360°.",
    source: "IME-44310-P1, PDF 9, 1.1.2",
    claimId: "FA150-ANT-002"
  },
  {
    group: "Antena VHF",
    requirement: "Preferir ao menos 3 m de radar e outras fontes transmissoras de alta potência, fora do feixe.",
    source: "IME-44310-P1, PDF 10, 1.1.2",
    claimId: "FA150-ANT-002"
  },
  {
    group: "Separação VHF",
    requirement: "Acima/abaixo da antena VHF principal: mínimo 2,8 m vertical. No mesmo plano de outras antenas: pelo menos 10 m.",
    source: "IME-44310-P1, PDF 10, 1.1.2",
    claimId: "FA150-ANT-002"
  },
  {
    group: "Coaxial",
    requirement: "Manter o cabo tão curto quanto possível; usar coaxial equivalente ou superior a RG10U/Y e vedar conectores externos.",
    source: "IME-44310-P1, PDF 10, 1.1.2",
    claimId: "FA150-CABLE-001"
  },
  {
    group: "Segregação",
    requirement: "Passar coaxiais em canaletas/tubos separados, a pelo menos 10 cm de cabos de alimentação; cruzamentos a 90°.",
    source: "IME-44310-P1, PDF 10, 1.1.2",
    claimId: "FA150-CABLE-001"
  },
  {
    group: "Curvatura",
    requirement: "Raio mínimo de curvatura do coaxial: cinco vezes o diâmetro externo do cabo.",
    source: "IME-44310-P1, PDF 10, 1.1.2",
    claimId: "FA150-CABLE-001"
  }
] as const;

export const fa150CompassDistances = [
  ["FA-1501", "1,2 m", "0,8 m"],
  ["FA-1502", "0,45 m", "0,3 m"],
  ["GVA-100-T", "0,3 m", "0,3 m"],
  ["DB-1", "0,3 m", "0,3 m"],
  ["PR-240", "0,9 m", "0,6 m"]
] as const;

export const fa150PortModes = [
  ["COM1", "LONG RANGE; EXT DISPLAY; DISABLE", "IEC 61162-1 ou IEC 61162-2"],
  ["COM2", "EXT DISPLAY; MONITOR; HI LEVEL IF; DISABLE", "IEC 61162-1 ou IEC 61162-2; MONITOR/HI LEVEL IF documentados para alta velocidade"],
  ["COM3", "Mesmo conjunto de COM2", "IEC 61162-1 ou IEC 61162-2"],
  ["COM4", "SENSOR; EXT DISPLAY; DISABLE", "SENSOR: IEC 61162-1/2; EXT DISPLAY: IEC 61162-2"],
  ["COM5", "SENSOR fixo", "IEC 61162-1 ou IEC 61162-2"],
  ["COM6", "SENSOR fixo", "IEC 61162-1; IEC 61162-2; AD-10"],
  ["PC", "STANDARD; MONITOR; SERVICE; BEACON; DISABLE", "4.800; 9.600; 19,2k; 38,4k; 57,6k bps; BEACON: 4.800 bps"]
] as const;

export const fa150TerminalMap = [
  ["POWER", "1", "DC (+)", "Entrada 12-24 Vcc"],
  ["POWER", "2", "DC (-)", "Retorno da alimentação"],
  ["COM1-COM3", "1 / 2", "TD_A / TD_B", "Saída diferencial"],
  ["COM1-COM3", "3", "GND_ISO", "Referência isolada"],
  ["COM1-COM3", "4 / 5", "RD_A / RD_B", "Entrada diferencial"],
  ["COM1-COM3", "6", "GND_ISO", "Referência isolada"],
  ["COM1-COM3", "7 / 8", "JP / JP", "Jumper de terminação quando aplicável"],
  ["COM4-COM5", "1 / 2", "TD_A / TD_B", "Saída diferencial"],
  ["COM4-COM5", "3", "GND_ISO", "Referência isolada"],
  ["COM4-COM5", "4 / 5", "2_RD_A / 2_RD_B", "Entrada IEC 61162-2"],
  ["COM4-COM5", "6", "GND_ISO", "Referência isolada"],
  ["COM4-COM5", "7 / 8", "JP / JP", "Jumper de terminação quando aplicável"],
  ["COM4-COM5", "9 / 10", "1_RD_H / 1_RD_C", "Entrada IEC 61162-1"],
  ["COM6", "1 / 2", "TD_A / TD_B", "Saída diferencial"],
  ["COM6", "3", "GND_ISO", "Referência isolada"],
  ["COM6", "4 / 5", "2_RD_A / 2_RD_B", "Entrada IEC 61162-2"],
  ["COM6", "6", "GND_ISO", "Referência isolada"],
  ["COM6", "7 / 8", "JP / JP", "Jumper de terminação quando aplicável"],
  ["COM6", "9 / 10", "1_RD_H / 1_RD_C", "Entrada IEC 61162-1"],
  ["COM6", "11 / 12", "AD_DATA_H / AD_DATA_C", "Dados AD-10"],
  ["COM6", "13 / 14", "AD_CLK_H / AD_CLK_C", "Clock AD-10"],
  ["EXT ALM", "1 / 2 / 3", "ALM_A / ALM_B / ALM_C", "Contatos normal aberto, normal fechado e comum"],
  ["EXT ALM", "4 / 5", "ACK_H / ACK_C", "Entrada de reconhecimento"],
  ["Pilot plug", "1 / 4", "TX-A / TX-B", "Saída a 38.400 bps"],
  ["Pilot plug", "5 / 6", "RX-A / RX-B", "Entrada a 38.400 bps"],
  ["Pilot plug", "9", "SHIELD", "Blindagem"]
] as const;

export const fa150InputSentences = [
  ["ABM", "Mensagem binária/segurança endereçada"],
  ["ACA", "Atribuição regional de canal AIS"],
  ["ACK", "Reconhecimento de alarme"],
  ["ACN", "Comando de alerta"],
  ["AIR", "Solicitação de interrogação AIS"],
  ["BBM", "Mensagem binária broadcast"],
  ["DTM", "Referência de datum"],
  ["GBS", "Detecção de falha de satélite GNSS"],
  ["GGA", "Fix GPS"],
  ["GLL", "Posição geográfica"],
  ["GNS", "Fix GNSS"],
  ["HBT", "Supervisão heartbeat"],
  ["HDT", "Heading verdadeiro"],
  ["LRF", "Função long range"],
  ["LRI", "Interrogação long range"],
  ["OSD", "Dados do próprio navio"],
  ["RMC", "Dados mínimos GNSS"],
  ["ROT", "Taxa de guinada"],
  ["SSD", "Dados estáticos do navio"],
  ["THS", "Heading verdadeiro e status"],
  ["VBW", "Velocidade dual água/fundo"],
  ["VSD", "Dados estáticos de viagem"],
  ["VTG", "COG e velocidade sobre o fundo"],
  ["PIWWIVD / PIWWSSD / PIWWVSD", "Dados específicos Inland AIS"],
  ["PIWWSPW", "Mensagem de segurança Inland AIS; contém credencial em trânsito e não deve ser colada na ferramenta pública"]
] as const;

export const fa150OutputSentences = [
  ["ABK", "Reconhecimento de mensagem endereçada/binária"],
  ["ACA", "Atribuição regional de canal"],
  ["ACS", "Fonte de gerenciamento de canal"],
  ["ALC", "Lista cíclica de alertas"],
  ["ALF", "Sentença de alerta"],
  ["ALR", "Estado de alarme"],
  ["ARC", "Comando de alerta recusado"],
  ["HBT", "Supervisão heartbeat"],
  ["LRF / LR1 / LR2 / LR3 / LRI", "Funções e respostas long range"],
  ["SSD", "Dados estáticos do navio"],
  ["TXT", "Transmissão de texto"],
  ["VDM", "Mensagem recebida do enlace VHF"],
  ["VDO", "Relatório do próprio navio no enlace VHF"],
  ["VER", "Versão"],
  ["VSD", "Dados estáticos de viagem"],
  ["PIWWSPR", "Resposta de segurança Inland AIS; não contém a senha no formato documentado"]
] as const;

export const fa150SentenceIntervals = [
  ["ABK / ALF", "A cada evento"],
  ["ACA", "Quando solicitado ou na recepção"],
  ["ACS", "Na recepção"],
  ["ALC / ALR", "30 s"],
  ["ARC", "Quando um ACN é recusado"],
  ["LRF / LR1 / LR2 / LR3", "Na recepção"],
  ["HBT", "50 s"],
  ["SSD", "Quando solicitado"],
  ["TXT", "Quando solicitado ou a cada atualização"],
  ["VDM", "Na recepção"],
  ["VDO", "1 s"],
  ["VER", "Quando solicitado ou ao energizar"],
  ["VSD", "Quando solicitado"]
] as const;

export const fa150KeySentenceFields = [
  {
    id: "GGA",
    direction: "Entrada",
    purpose: "Posição GPS",
    fields: "UTC; latitude; N/S; longitude; E/W; qualidade; satélites; HDOP; altitude; separação geoidal; idade/estação diferencial.",
    absence: "A posição externa pode deixar de ser utilizada; confirme SENSOR STATUS e a fonte GNSS selecionada.",
    source: "OME-44310-M, PDF 95, AP-12"
  },
  {
    id: "GNS",
    direction: "Entrada",
    purpose: "Posição GNSS e modo",
    fields: "UTC; latitude; N/S; longitude; E/W; modo; satélites; HDOP; altitude; separação; idade/estação diferencial; status de navegação.",
    absence: "Investigue junto às demais sentenças de posição pela prioridade GNS > GLL > GGA > RMC.",
    source: "OME-44310-M, PDF 96, AP-13; IME-44310-P1, PDF 37"
  },
  {
    id: "RMC",
    direction: "Entrada",
    purpose: "Posição, SOG e COG",
    fields: "UTC; status; latitude; N/S; longitude; E/W; SOG; COG; data; variação; modo; status de navegação.",
    absence: "Pode afetar posição e, pela prioridade documentada, SOG/COG se fontes superiores não estiverem disponíveis.",
    source: "OME-44310-M, PDF 97, AP-14; IME-44310-P1, PDF 37"
  },
  {
    id: "HDT",
    direction: "Entrada",
    purpose: "Heading verdadeiro",
    fields: "Heading em graus e indicador T de verdadeiro.",
    absence: "A prioridade documentada é THS > HDT > OSD > AD-10; confirme qual fonte está ativa.",
    source: "OME-44310-M, PDF 96, AP-13; IME-44310-P1, PDF 37"
  },
  {
    id: "THS",
    direction: "Entrada",
    purpose: "Heading verdadeiro com status",
    fields: "Heading em graus e modo A/E/M/S/V.",
    absence: "O equipamento pode recorrer a HDT, OSD ou AD-10 conforme disponibilidade e prioridade.",
    source: "OME-44310-M, PDF 98, AP-15; IME-44310-P1, PDF 37"
  },
  {
    id: "ROT",
    direction: "Entrada",
    purpose: "Taxa de guinada",
    fields: "Taxa em graus por minuto; sinal negativo indica proa para bombordo; status A/V.",
    absence: "SENSOR STATUS pode apresentar ROT inválido ou valor calculado a partir de HDT.",
    source: "OME-44310-M, PDF 97, AP-14; PDF 82, 3.7"
  },
  {
    id: "VDM",
    direction: "Saída",
    purpose: "Mensagem recebida do VDL",
    fields: "Total de fragmentos; número do fragmento; sequência; canal; payload encapsulado; fill bits.",
    absence: "Consumidores externos deixam de receber alvos AIS; não prova falha de recepção RF sem verificar a tela do FA-150.",
    source: "OME-44310-M, PDF 101, AP-18"
  },
  {
    id: "VDO",
    direction: "Saída",
    purpose: "Relatório AIS do próprio navio",
    fields: "Total de fragmentos; número do fragmento; sequência; canal A/B; payload encapsulado; fill bits.",
    absence: "Consumidores podem não receber dados próprios; investigar porta, modo e taxa antes de concluir falha RF.",
    source: "OME-44310-M, PDF 102, AP-19"
  }
] as const;

export const fa150MenuGroups = [
  {
    name: "MSG",
    access: "Operador",
    impact: "Criação, envio e consulta de mensagens; transmissão exige procedimento operacional.",
    branches: ["CREATE MSG → SET MSG TYPE / SET MSG / SEND MSG", "TX LOG", "RX LOG"],
    source: "OME-44310-M, PDF 84, AP-1"
  },
  {
    name: "SENSOR STATUS",
    access: "Operador",
    impact: "Somente consulta; identifica origem e validade dos sensores.",
    branches: ["Exibe mensagens de estado como EXT GNSS, HDG VALID, ROT VALID e INT GNSS."],
    source: "OME-44310-M, PDF 82 e 84"
  },
  {
    name: "INTERNAL GPS",
    access: "Operador",
    impact: "Somente consulta do receptor interno.",
    branches: ["Posição, SOG/COG, UTC, status de fix, precisão e RAIM."],
    source: "OME-44310-M, PDF 81 e 84"
  },
  {
    name: "USER SETTINGS",
    access: "Operador",
    impact: "Altera apresentação e alarmes locais; registrar o estado antes de mudar.",
    branches: ["KEY BEEP", "ALARM BUZZER", "AUTO SORT", "DISP SART TEST", "LONG RANGE", "RECEIVED MSG", "CPA/TCPA ALARM"],
    source: "OME-44310-M, PDF 84, AP-1"
  },
  {
    name: "INITIAL SETTINGS",
    access: "Instalador autorizado; senha não divulgada",
    impact: "Altera identidade, dimensões/posição de antena, tipo, portas e canais. Exige autorização documentada.",
    branches: ["SET MMSI", "SET INT/EXT ANT POSN", "SET SHIP TYPE", "SET I/O PORT", "SET LR CH", "SET BLUE SIGN SW (Inland)"],
    source: "OME-44310-M, PDF 84 e 86; IME-44310-P1, PDF 26-34"
  },
  {
    name: "CHANNEL SETTINGS",
    access: "Operador/instalador conforme tarefa",
    impact: "Configura canais, potência e área regional; alteração indevida afeta transmissão.",
    branches: ["VIEW CHANNEL", "EDIT CHANNEL → SELECT NO / TIME / FROM MMSI / TYPE / POWER / CH NO / MODE / ZONE / CH AREA"],
    source: "OME-44310-M, PDF 85 e 87"
  },
  {
    name: "DIAGNOSTICS",
    access: "Operador autorizado; itens restritos separados",
    impact: "Testa unidades e consulta históricos; MEMORY CLEAR reinicia ou apaga estados específicos.",
    branches: ["MONITOR TEST", "TRANSPONDER TEST", "PWR ON/OFF HISTORY", "TX ON/OFF HISTORY", "MEMORY CLEAR", "ACTIVATE KEY", "FOR SERVICE"],
    source: "OME-44310-M, PDF 76-85"
  }
] as const;

export const fa150Diagnostics = [
  {
    test: "Monitor test",
    path: "MENU → DIAGNOSTICS → MONITOR TEST",
    checks: "Números de boot/programa, ROM, SDRAM, porta, teclas, contraste, dimmer e LCD preto/branco.",
    result: "ROM/SDRAM: OK ou NG. PORT pode indicar NG sem o conector especial de teste.",
    action: "Se NG persistir após repetição, o manual orienta contatar o representante.",
    source: "OME-44310-M, PDF 76-77, 3.4.1"
  },
  {
    test: "Memory test do transponder",
    path: "MENU → DIAGNOSTICS → TRANSPONDER TEST → MEMORY TEST",
    checks: "Programa, MAIN ROM, MAIN RAM, SUB RAM e versões de hardware MAIN/MOT/TX.",
    result: "OK ou NG por memória.",
    action: "NG deve ser escalado ao representante.",
    source: "OME-44310-M, PDF 78, 3.4.2"
  },
  {
    test: "GPS test",
    path: "MENU → DIAGNOSTICS → TRANSPONDER TEST → GPS TEST",
    checks: "Programa e receptor GNSS interno.",
    result: "OK ou NG com motivo: backup, comunicação, parâmetros, ROM, RAM ou antena.",
    action: "Correlacionar com INTERNAL GPS e SENSOR STATUS antes de substituir componentes.",
    source: "OME-44310-M, PDF 78, 3.4.2"
  },
  {
    test: "VHF communication test",
    path: "MENU → DIAGNOSTICS → TRANSPONDER TEST → VHF COMM TEST",
    checks: "Comunicação com MMSI selecionado automaticamente a 15-25 NM ou inserido manualmente.",
    result: "OK ou NG; NG também pode ocorrer por obstrução, TX MALFUNCTION, teste no primeiro minuto ou área sem transmissão.",
    action: "Executar somente autorizado; não interpretar NG isoladamente como defeito do transponder.",
    source: "OME-44310-M, PDF 79, 3.4.2"
  },
  {
    test: "Power on/off history",
    path: "MENU → DIAGNOSTICS → PWR ON/OFF HISTORY",
    checks: "30 eventos recentes de energização/desenergização.",
    result: "Intervalos menores que 15 minutos não aparecem.",
    action: "Preservar como evidência antes de qualquer limpeza.",
    source: "OME-44310-M, PDF 80, 3.4.3"
  },
  {
    test: "TX on/off history",
    path: "MENU → DIAGNOSTICS → TX ON/OFF HISTORY",
    checks: "30 eventos recentes de transmissão ligada/desligada.",
    result: "Data e hora dos eventos.",
    action: "Comparar com alarmes, perda de energia e relatos do passadiço.",
    source: "OME-44310-M, PDF 80, 3.4.4"
  }
] as const;

export const fa150SensorStatuses = [
  ["CH MANAGEMENT", "Canal alterado; indicação por aproximadamente 30 s"],
  ["EXT DGNSS", "DGNSS externo em uso"],
  ["EXT GNSS", "GNSS externo em uso"],
  ["EXT SOG/COG", "SOG/COG externos em uso"],
  ["HDG VALID", "Heading normal"],
  ["INT DGNSS BEACON", "Beacon DGNSS interno em uso"],
  ["INT DGNSS MSG 17", "Mensagem 17 corrigindo o GNSS interno"],
  ["INT GNSS", "GNSS interno em uso"],
  ["INT SOG/COG", "SOG/COG internos em uso"],
  ["OTHER ROT", "ROT calculado de HDT ou dispositivo ROT com talker diferente de TI"],
  ["ROT VALID", "ROT normal"]
] as const;

export const fa150Alarms = [
  ["TX MALFUNCTION", "TX", "Warning", "Falha de transmissão AIS; transmissão interrompida.", "Confirmar o alarme, preservar histórico e escalar à Furuno; o manual indica necessidade de ajuste inicial."],
  ["ANT VSWR EXCEEDS", "ANT", "Warning", "VSWR alto detectado na antena AIS.", "Inspecionar antena, conectores e coaxial sem transmitir fora de procedimento; contatar Furuno."],
  ["RX CH1 MALFUNCTION", "CH1", "Warning", "Falha do receptor 1; transmissão interrompida no canal correspondente.", "Possível placa danificada; escalar à Furuno."],
  ["RX CH2 MALFUNCTION", "CH2", "Warning", "Falha do receptor 2; transmissão interrompida no canal correspondente.", "Possível placa danificada; escalar à Furuno."],
  ["RX CH70 MALFUNCTION", "CH70", "Warning", "Falha de recepção DSC.", "Possível placa danificada; escalar à Furuno."],
  ["UTC SYNC INVALID", "UTC", "Warning", "Sem sincronismo UTC.", "Verificar GNSS interno/externo, fix e antenas; correlacionar com INTERNAL GPS e SENSOR STATUS."],
  ["MKD CONNECTION LOST", "MKD", "Warning", "Falha de comunicação entre FA-1501 e FA-1502.", "Verificar alimentação do monitor, cabo DISP e conectores antes de condenar unidade."],
  ["INT/EXT POS MISMATCH", "POSN", "Warning", "Diferença superior a 100 m entre posições GNSS interna e externa após compensar antenas.", "Comparar posições, datum e coordenadas A/B/C/D das antenas."],
  ["NAVSTATUS INCORRECT", "NAV", "Warning", "Incompatibilidade entre velocidade e NAV STATUS.", "Confirmar situação real e atualizar NAV STATUS conforme autorização operacional."],
  ["HDG SENSOR OFFSET", "HDG-OFS", "Warning", "Diferença entre COG e HDT superior a 45° por mais de 5 min com velocidade acima de 5 kn.", "Comparar gyro, sentença de heading, COG e qualidade dos sensores."],
  ["ACTIVE AIS-SART", "SART-ACTIVE", "Warning", "Mensagem AIS-SART recebida.", "Informar imediatamente o passadiço e seguir o procedimento SAR aplicável."],
  ["EXTERNAL EPFS LOST", "EPFS", "Warning", "Dados de navegação externos não recebidos.", "Verificar GNSS externo e interface; confirmar se o interno assumiu."],
  ["NO POS SENSOR IN USE", "L/L", "Warning", "Nenhum dado de posição disponível.", "Verificar GNSS externo, interno, antenas, fix e portas."],
  ["NO VALID SOG INFO", "SOG", "Warning", "SOG inválida.", "Comparar origem, sentença, prioridade COM4-COM6 e status."],
  ["NO VALID COG INFO", "COG", "Warning", "COG inválido.", "Comparar origem, sentença, prioridade COM4-COM6 e status."],
  ["NO VALID HDG INFO", "HDG", "Warning", "Heading perdido ou inválido.", "Verificar THS/HDT/OSD/AD-10 na ordem documentada e o status do sensor."],
  ["NO VALID ROT INFO", "ROT", "Warning", "ROT indisponível.", "Verificar ROT e possibilidade de valor calculado a partir de HDT."],
  ["BAM COM ERROR", "BAM", "Caution", "Falha de comunicação com o Bridge Alert Management.", "Verificar a interface BAM; o manual informa que não soa alarme e o popup não pisca."]
] as const;

export const fa150Specifications = [
  ["RF", "Faixa TX/RX", "156,025 a 162,025 MHz"],
  ["RF", "Potência de saída", "1 W ou 12,5 W selecionável"],
  ["RF", "Impedância", "50 Ω"],
  ["RF", "DSC", "CH70 fixo, 156,525 MHz, G2B, 1.200 bps"],
  ["RF", "Largura de banda", "25 kHz / 12,5 kHz"],
  ["Monitor", "Display", "LCD monocromático de 4,5 pol.; 60 × 95 mm; 120 × 64 pontos"],
  ["GNSS", "Frequência", "1.575,42 MHz"],
  ["GNSS", "Canais", "12 canais paralelos / 12 satélites"],
  ["GNSS", "Precisão GPS", "Aproximadamente 10 m, 95% do tempo, HDOP ≤ 4"],
  ["GNSS", "Precisão DGPS", "Aproximadamente 5 m, 95% do tempo"],
  ["GNSS", "Tempo de fix", "Warm start 36 s; cold start 43 s"],
  ["GNSS", "Atualização", "1 s típico"],
  ["Alimentação", "FA-1501", "12-24 Vcc; 7-3,5 A"],
  ["Alimentação", "FA-1502", "12-24 Vcc; 0,3-0,15 A"],
  ["Alimentação", "PR-240", "100-115/200-230 Vca, monofásico, 50/60 Hz"],
  ["Ambiente", "Antena", "-25 °C a +55 °C; armazenamento -25 °C a +70 °C"],
  ["Ambiente", "Outras unidades", "-15 °C a +55 °C"],
  ["Ambiente", "Umidade", "95% a 40 °C"],
  ["Proteção", "Antena GPS/VHF", "IPX6"],
  ["Proteção", "FA-1501", "IP20"],
  ["Proteção", "FA-1502", "IP22"]
] as const;
