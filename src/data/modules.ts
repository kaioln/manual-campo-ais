import type { ModulePage } from "./types";

export const modules: ModulePage[] = [
  {
    slug: "fundamentos-ais",
    order: 1,
    title: "Fundamentos do AIS",
    eyebrow: "Módulo 1",
    summary: "O que o AIS faz, o que ele não faz e como a informação circula entre navios e terra.",
    level: "Iniciante",
    status: "verificado",
    applicability: ["AIS embarcado", "Classe A", "Visão geral de outras estações"],
    sourceIds: ["SRC-IMO-AIS", "SRC-IMO-A1106", "SRC-ITU-M1371-6"],
    keywords: ["AIS", "VTS", "TDMA", "SOTDMA", "VDL", "UTC", "slots", "Classe A"],
    sections: [
      {
        heading: "Explicação simples",
        paragraphs: [
          "Sistema de Identificação Automática — Automatic Identification System — AIS é um sistema de intercâmbio automático de dados entre estações. A bordo, ele recebe dados próprios, organiza mensagens e usa o enlace VHF para compartilhar informações com outras estações e autoridades costeiras."
        ],
        claimIds: ["AIS-IMO-001", "AIS-SAFE-001"]
      },
      {
        heading: "Como o enlace é organizado",
        paragraphs: [
          "O enlace de dados VHF — VHF Data Link — VDL compartilha o canal por intervalos de tempo. Métodos TDMA coordenam o uso desses intervalos. A revisão vigente da recomendação técnica é a ITU-R M.1371-6, de fevereiro de 2026; ela é mais nova que o projeto e os manuais do FA-150."
        ],
        bullets: [
          "SOTDMA: organização autônoma de slots usada por estações Classe A.",
          "CSTDMA: acesso por detecção de portadora associado a determinadas estações Classe B.",
          "RATDMA e ITDMA: métodos para reservar ou acessar slots conforme a finalidade da mensagem.",
          "FATDMA: slots previamente atribuídos por uma estação de controle."
        ],
        warning: "Os valores de potência, canais e intervalos variam por tipo de estação, estado de movimento e norma aplicável. Consulte a norma e o manual do equipamento antes de usar números."
      },
      {
        heading: "Aplicação a bordo",
        bullets: [
          "Compare alvos AIS com radar, ECDIS, observação visual e comunicações.",
          "Considere atraso, entrada manual incorreta, falha de sensor e limitação de cobertura.",
          "Alvos recebidos confirmam recepção; não confirmam que a própria embarcação esteja transmitindo corretamente."
        ]
      }
    ]
  },
  {
    slug: "dados-transmitidos-recebidos",
    order: 2,
    title: "Dados transmitidos e recebidos",
    eyebrow: "Módulo 2",
    summary: "Origem, validade e risco operacional de dados estáticos, dinâmicos, de viagem e mensagens.",
    level: "Intermediário",
    status: "verificado",
    applicability: ["AIS Classe A", "Furuno FA-150"],
    sourceIds: ["SRC-FUR-OME-M", "SRC-IMO-AIS", "SRC-ITU-M1371-6"],
    keywords: ["MMSI", "IMO", "call sign", "SOG", "COG", "heading", "ROT", "ETA", "calado"],
    sections: [
      {
        heading: "Quatro perguntas para cada campo",
        bullets: [
          "Quem produz o dado: operador, sensor externo, receptor interno ou processamento AIS?",
          "Quando foi atualizado e qual indicação de validade acompanha o valor?",
          "Para onde ele segue: transmissão VHF, display, pilot plug, radar, ECDIS ou VDR?",
          "Que decisão pode ser prejudicada se o campo estiver incorreto?"
        ]
      },
      {
        heading: "Dados estáticos e de viagem",
        paragraphs: [
          "MMSI, número IMO, call sign, nome, tipo e dimensões identificam a embarcação e sua geometria. Destino, ETA, calado e status de navegação dependem de revisão operacional. Erros podem associar a posição ao ponto errado do casco, induzir interpretação incorreta do alvo ou comprometer relatórios."
        ],
        warning: "Não altere MMSI, identidade, dimensões ou posição de antena sem documento autorizado e verificação independente."
      },
      {
        heading: "Dados dinâmicos",
        paragraphs: [
          "Posição, hora UTC, SOG, COG, heading e ROT precisam ser avaliados como um conjunto. No FA-150, a tela OWN DYNAMIC DATA também informa origem GNSS, precisão e uso de RAIM."
        ],
        claimIds: ["FA150-DATA-001", "FA150-SENS-001"]
      }
    ]
  },
  {
    slug: "arquitetura-classe-a",
    order: 3,
    title: "Arquitetura de um AIS Classe A",
    eyebrow: "Módulo 3",
    summary: "Blocos funcionais, fluxo bidirecional de dados e fronteiras de diagnóstico.",
    level: "Intermediário",
    status: "verificado",
    applicability: ["Arquitetura geral Classe A", "FA-150 como exemplo"],
    sourceIds: ["SRC-IEC-61993-2-2018", "SRC-FUR-IME-P1"],
    diagram: {
      src: "/diagrams/fa150-arquitetura.svg",
      alt: "Arquitetura funcional de AIS com antenas, transponder, monitor, sensores e consumidores.",
      caption: "Diagrama original baseado na configuração de sistema IME-44310-P1, PDF 4–5, usado aqui como exemplo de fronteiras funcionais."
    },
    keywords: ["transponder", "MKD", "VHF", "GNSS", "ECDIS", "radar", "VDR", "pilot plug"],
    sections: [
      {
        heading: "Fluxo funcional",
        paragraphs: [
          "Sensores e entradas manuais alimentam o processador. O transponder combina esses dados com a posição/tempo disponíveis, transmite pelo VHF e recebe mensagens de outras estações. Saídas locais distribuem alvos e dados próprios para displays e consumidores de passadiço."
        ],
        bullets: [
          "Caminho RF: antena VHF ↔ transceptor/modem TDMA.",
          "Caminho de posição: GNSS interno e/ou externo → seleção/validação → dados dinâmicos.",
          "Caminho de sensores: heading, ROT e velocidade → interfaces seriais → processador.",
          "Caminho de apresentação: AIS → monitor/MKD, radar, ECDIS, VDR e pilot plug."
        ]
      },
      {
        heading: "Fronteiras de falha",
        decision: [
          "Dado ausente no sensor e no AIS → investigar sensor/alimentação de origem.",
          "Dado presente na saída do sensor, ausente na entrada AIS → investigar cabo, polaridade, interface e configuração.",
          "Dado válido no AIS, ausente no consumidor → investigar saída AIS, distribuição e listener.",
          "Recepção de alvos normal com transmissão não confirmada → investigar cadeia TX separadamente."
        ]
      },
      {
        heading: "Diagrama original",
        paragraphs: [
          "O diagrama de arquitetura é uma síntese original baseada na configuração de sistema do manual de instalação do FA-150, PDF 4, e nos requisitos públicos da IEC 61993-2."
        ]
      }
    ]
  },
  {
    slug: "furuno-fa-150",
    order: 4,
    title: "Furuno FA-150",
    eyebrow: "Módulo 4",
    summary: "Visão confirmada do sistema, unidades, telas, menus, diagnóstico e limites documentais.",
    level: "Avançado",
    status: "verificado",
    applicability: ["Somente Furuno FA-150", "Manuais revisão M/P1"],
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1"],
    keywords: ["FA-150", "FA-1501", "FA-1502", "GVA-100-T", "DB-1", "PR-240", "menus"],
    sections: [
      {
        heading: "Unidades confirmadas",
        claimIds: ["FA150-SYS-001", "FA150-SYS-002", "FA150-PWR-001"],
        warning: "EXCLUSIVO DESTE MODELO — não aplique conectores, pinagens, cores ou procedimentos a outro AIS."
      },
      {
        heading: "Telas de campo",
        bullets: [
          "Target list e dangerous list: apresentação de alvos; não confirmam a transmissão própria.",
          "Own static data: revisão da identidade e geometria configuradas.",
          "Own dynamic data: posição, movimento, heading, ROT e integridade.",
          "Alarm status e sensor status: ponto de partida para separar perda de sensor de falha interna."
        ],
        claimIds: ["FA150-DATA-001", "FA150-SENS-001"]
      },
      {
        heading: "Diagnóstico e históricos",
        claimIds: ["FA150-DIAG-001", "FA150-DIAG-002"],
        steps: [
          "Registre telas e estado inicial antes de abrir DIAGNOSTICS.",
          "Execute apenas testes documentados e permitidos ao nível de acesso disponível.",
          "Compare resultado com sintoma, alimentação, conectores e sensor de origem.",
          "Não use funções de serviço sem credencial oficial e autorização.",
          "Restaure a operação, confirme integração e registre o estado final."
        ]
      },
      {
        heading: "Árvore de menu documentada",
        bullets: [
          "MENU → SENSOR STATUS: leitura do estado dos sensores.",
          "MENU → INTERNAL GPS: dados do receptor interno.",
          "MENU → DIAGNOSTICS → MONITOR TEST / TRANSPONDER TEST: testes internos.",
          "MENU → DIAGNOSTICS → PWR ON/OFF HISTORY / TX ON/OFF HISTORY: históricos.",
          "INITIAL SETTINGS: somente visualização sem credencial; alterações exigem acesso autorizado."
        ],
        claimIds: ["FA150-ACCESS-001", "FA150-RESET-001"]
      }
    ]
  },
  {
    slug: "outros-modelos",
    order: 5,
    title: "Outros modelos",
    eyebrow: "Módulo 5",
    summary: "Matriz de cobertura e barreiras contra transferência indevida de procedimentos.",
    level: "Intermediário",
    status: "lacuna documentada",
    applicability: ["FA-100", "FA-170", "FA-50", "FA-70", "FA-40", "outros fabricantes"],
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1"],
    keywords: ["FA-100", "FA-170", "FA-50", "FA-70", "FA-40", "legado"],
    sections: [
      {
        heading: "Situação documental",
        paragraphs: [
          "Os documentos fornecidos cobrem apenas o FA-150. As páginas dos demais modelos existem para impedir que a ausência de fonte seja confundida com equivalência."
        ],
        bullets: [
          "Classe, alimentação, display, interfaces, menus, pinagem e software: NECESSITA CONFIRMAÇÃO.",
          "Compatibilidade de acessórios: NECESSITA CONFIRMAÇÃO.",
          "Status atual ou legado: NECESSITA CONFIRMAÇÃO em fonte oficial do modelo."
        ],
        warning: "NÃO APLICÁVEL A OUTROS MODELOS — nenhum procedimento específico do FA-150 deve ser transferido automaticamente."
      }
    ]
  },
  {
    slug: "sensores-integracao",
    order: 6,
    title: "Sensores e equipamentos integrados",
    eyebrow: "Módulo 6",
    summary: "Como separar falha do sensor, da interface, do AIS e do equipamento consumidor.",
    level: "Avançado",
    status: "verificado",
    applicability: ["FA-150", "Procedimento geral de integração"],
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1"],
    keywords: ["GNSS", "gyro", "heading", "ROT", "speed log", "radar", "ECDIS", "VDR"],
    sections: [
      {
        heading: "Mapa por dado",
        bullets: [
          "GNSS: posição e UTC; compare receptor externo, receptor interno e indicação de fix.",
          "Gyro/heading sensor: heading verdadeiro; confirme valor na origem e na tela dinâmica.",
          "ROT: taxa de guinada; confirme se é medida ou derivada conforme a indicação disponível.",
          "Speed log/GNSS: origem de velocidade; diferencie SOG de velocidade através da água.",
          "Radar/ECDIS/VDR: consumidores; falha neles não prova falha de transmissão RF."
        ],
        claimIds: ["FA150-SENS-001"]
      },
      {
        heading: "Teste em três pontos",
        steps: [
          "Origem: o sensor apresenta valor válido e sem alarme?",
          "Interface: a sentença chega eletricamente e com estrutura/checksum válidos?",
          "Destino: o AIS seleciona a fonte correta e repassa o dado ao consumidor?"
        ],
        warning: "Não desconecte sensores sem registrar o estado inicial e coordenar o impacto com o passadiço."
      }
    ]
  },
  {
    slug: "iec-61162-nmea-rs422",
    order: 7,
    title: "IEC 61162, NMEA 0183 e comunicação diferencial",
    eyebrow: "Módulo 7",
    summary: "Talker, listeners, pares diferenciais, estrutura ASCII, checksum e aplicação no FA-150.",
    level: "Avançado",
    status: "verificado",
    applicability: ["IEC 61162-1/2", "Interfaces documentadas do FA-150"],
    sourceIds: ["SRC-IEC-61162-1-2024", "SRC-FUR-OME-M", "SRC-FUR-IME-P1"],
    diagram: {
      src: "/diagrams/rs422-talkers.svg",
      alt: "Um talker enviando dados por par diferencial para três listeners.",
      caption: "Diagrama original de um talker e múltiplos listeners; conexão elétrica e quantidade admissível dependem dos manuais e da edição aplicável."
    },
    keywords: ["RS-422", "talker", "listener", "checksum", "AIVDM", "AIVDO", "4800", "38400"],
    sections: [
      {
        heading: "Modelo de comunicação",
        paragraphs: [
          "Talker é a origem que transmite; listener é o destino que escuta. IEC 61162-1 é unidirecional e admite um talker para múltiplos listeners. Pares diferenciais devem ser tratados como par, com polaridade, isolamento, blindagem e referência conforme o manual dos dois extremos."
        ],
        claimIds: ["IEC61162-001"]
      },
      {
        heading: "FA-150",
        claimIds: ["FA150-IO-001", "FA150-IO-002", "FA150-PILOT-001"],
        warning: "O número da taxa não substitui a seleção correta da função da porta. A mesma velocidade pode transportar dados inadequados ao listener."
      },
      {
        heading: "Validação de uma sentença",
        steps: [
          "Confirme delimitador inicial `$` ou `!` e terminador.",
          "Separe identificador e campos por vírgula.",
          "Calcule XOR entre o primeiro caractere após o delimitador e o caractere antes de `*`.",
          "Compare os dois dígitos hexadecimais do checksum.",
          "Só então avalie talker, tipo, número de fragmentos e conteúdo."
        ]
      }
    ]
  },
  {
    slug: "instalacao",
    order: 8,
    title: "Instalação autorizada",
    eyebrow: "Módulo 8",
    summary: "Sequência segura desde o levantamento até o “as built”, sem assumir valores ausentes.",
    level: "Avançado",
    status: "rascunho controlado",
    applicability: ["FA-150 revisão P1", "Instalação geral condicionada"],
    sourceIds: ["SRC-FUR-IME-P1", "SRC-PRONAV-POP"],
    keywords: ["montagem", "alimentação", "antena", "coaxial", "aterramento", "as built"],
    sections: [
      {
        heading: "Pré-requisitos",
        bullets: [
          "Autorização, janela de serviço e responsável do passadiço identificados.",
          "Modelos, serial, revisões e configuração existente registrados.",
          "Desenho aplicável, materiais, proteção elétrica e rotas de cabo verificados.",
          "Plano de retorno e critério de parada definidos."
        ]
      },
      {
        heading: "Sequência de campo",
        steps: [
          "Inspecionar local, unidades, ventilação, acesso, riscos e distâncias aplicáveis.",
          "Planejar antenas e cabos com segregação, proteção mecânica e conectores corretos.",
          "Com circuito desenergizado, montar, aterrar e conferir continuidade apenas onde permitido.",
          "Conferir polaridade e tensão com o circuito no estado apropriado e proteção instalada.",
          "Conectar sensores e consumidores conforme desenho aplicável.",
          "Realizar inspeção cruzada antes da energização.",
          "Energizar com o passadiço informado; observar alarmes e corrente sem improvisar medições.",
          "Configurar somente parâmetros autorizados e documentados.",
          "Executar testes separados de recepção, transmissão e integração.",
          "Atualizar desenhos, fotos e relatório final."
        ],
        claimIds: ["FA150-PWR-001", "FA150-TRAIN-001"]
      }
    ]
  },
  {
    slug: "commissioning",
    order: 9,
    title: "Commissioning",
    eyebrow: "Módulo 9",
    summary: "Roteiro de aceitação com evidência separada para recepção, transmissão e integração.",
    level: "Avançado",
    status: "rascunho controlado",
    applicability: ["FA-150", "Procedimento geral autorizado"],
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1", "SRC-PRONAV-POP"],
    diagram: {
      src: "/diagrams/fluxo-diagnostico.svg",
      alt: "Fluxo de diagnóstico desde a confirmação do sintoma até a restauração e o registro.",
      caption: "Fluxo original de troubleshooting; cada etapa deve preservar autorização, evidência e estado do sistema."
    },
    keywords: ["commissioning", "aceitação", "transmissão", "recepção", "integração"],
    sections: [
      {
        heading: "Roteiro",
        steps: [
          "Inspeção visual, modelo, serial, versões e documentação aplicável.",
          "Alimentação, proteção, aterramento, antenas VHF/GNSS e cabos.",
          "Posição, UTC, dados estáticos, dimensões e referência de antena.",
          "Dados de viagem, heading, ROT, SOG/COG e estados de sensor.",
          "Interfaces, radar, ECDIS, VDR, pilot plug e alarmes.",
          "Recepção de alvos com hora e alcance contextualizados.",
          "Transmissão confirmada por método autorizado e independente.",
          "Integração confirmada em cada consumidor.",
          "Registro, pendências, assinatura e devolução à operação."
        ],
        claimIds: ["FA150-DATA-001", "FA150-SENS-001", "FA150-TRAIN-001"]
      },
      {
        heading: "Três aprovações diferentes",
        bullets: [
          "Recepção: o AIS recebe estações válidas.",
          "Transmissão: uma fonte independente confirma os dados próprios transmitidos.",
          "Integração: cada equipamento consumidor recebe e apresenta dados coerentes."
        ],
        warning: "Ver alvos na tela não confirma a cadeia de transmissão própria."
      }
    ]
  },
  {
    slug: "diagnostico-troubleshooting",
    order: 10,
    title: "Diagnóstico e troubleshooting",
    eyebrow: "Módulo 10",
    summary: "Método de isolamento por energia, RF, sensores, interfaces, configuração e software.",
    level: "Avançado",
    status: "verificado",
    applicability: ["FA-150", "Método geral de campo"],
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1", "SRC-PRONAV-POP"],
    keywords: ["não liga", "sem alvos", "não transmite", "heading", "ROT", "VSWR", "polaridade"],
    sections: [
      {
        heading: "Método fixo",
        decision: [
          "Confirmar o sintoma e o impacto com o passadiço.",
          "Registrar histórico, telas, versões e alterações recentes.",
          "Verificar alimentação, aterramento, conectores e ambiente.",
          "Comparar entrada, processamento e saída sem pular fronteiras.",
          "Verificar configuração e software somente após evidência física.",
          "Executar teste isolado seguro, corrigir, repetir e documentar."
        ],
        claimIds: ["FA150-DIAG-001", "FA150-DIAG-002"]
      },
      {
        heading: "Escolha do próximo teste",
        paragraphs: [
          "O melhor próximo teste é o que separa duas hipóteses relevantes com menor risco. Trocar peças, restaurar padrões ou alterar várias portas ao mesmo tempo reduz a rastreabilidade e pode criar uma segunda falha."
        ]
      }
    ]
  },
  {
    slug: "medicoes-instrumentos",
    order: 11,
    title: "Medições e instrumentos",
    eyebrow: "Módulo 11",
    summary: "Uso seguro de multímetro, osciloscópio, analisador serial e instrumentos RF.",
    level: "Avançado",
    status: "rascunho controlado",
    applicability: ["Procedimento geral", "Valores condicionados ao manual"],
    sourceIds: ["SRC-FUR-IME-P1", "SRC-PRONAV-POP"],
    keywords: ["multímetro", "osciloscópio", "RS-422 USB", "wattímetro", "VSWR", "dummy load"],
    sections: [
      {
        heading: "Antes de conectar",
        bullets: [
          "Defina grandeza, faixa, categoria, referência de terra e estado energizado/desenergizado.",
          "Confirme se a conexão é em paralelo, série ou por acoplamento apropriado.",
          "Use interfaces isoladas quando necessário e verifique common mode.",
          "Em RF, confirme potência admissível, direção, carga e autorização."
        ],
        warning: "Nunca meça continuidade em circuito energizado; nunca coloque o amperímetro diretamente em paralelo com a alimentação; nunca transmita sem antena ou carga apropriada."
      },
      {
        heading: "Registro mínimo",
        bullets: [
          "Instrumento, patrimônio, validade da calibração e configuração.",
          "Ponto de medição e estado do sistema.",
          "Valor, unidade, incerteza/limite aplicável e captura/foto.",
          "Interpretação e próximo teste."
        ]
      }
    ]
  },
  {
    slug: "alarmes-eventos",
    order: 12,
    title: "Alarmes e eventos",
    eyebrow: "Módulo 12",
    summary: "Como registrar e investigar alarmes sem misturar modelos ou apagar evidência.",
    level: "Intermediário",
    status: "verificado",
    applicability: ["FA-150 revisão M"],
    sourceIds: ["SRC-FUR-OME-M"],
    keywords: ["alarme", "alarm status", "histórico", "evento", "sensor status"],
    sections: [
      {
        heading: "Primeira ação",
        steps: [
          "Fotografar/capturar texto, data, hora e estado do equipamento.",
          "Informar o passadiço quando houver impacto operacional.",
          "Consultar ALARM STATUS e SENSOR STATUS.",
          "Relacionar o evento a perda de sensor, alimentação, RF, interface ou configuração.",
          "Não apagar histórico antes de registrar evidência."
        ],
        claimIds: ["FA150-SENS-001", "FA150-DIAG-002"]
      },
      {
        heading: "Base de alarmes",
        paragraphs: [
          "Somente textos e códigos confirmados na revisão aplicável podem entrar na base. Como os documentos fornecidos não constituem um catálogo de serviço completo, esta versão prioriza o método de triagem e mantém alarmes não confirmados fora do site."
        ],
        warning: "NECESSITA CONFIRMAÇÃO — não unir alarmes de FA-100, FA-150, FA-170 ou equipamentos de outros fabricantes."
      }
    ]
  },
  {
    slug: "procedimentos-bordo",
    order: 13,
    title: "Procedimentos de bordo",
    eyebrow: "Módulo 13",
    summary: "Assumir, executar e devolver um serviço sem perder estado, autorização ou evidência.",
    level: "Intermediário",
    status: "verificado",
    applicability: ["Serviço autorizado"],
    sourceIds: ["SRC-PRONAV-POP", "SRC-PRONAV-RAT", "SRC-IMO-A1106"],
    keywords: ["RAT", "passadiço", "autorização", "backup", "relatório", "evidências"],
    sections: [
      {
        heading: "Assumir o serviço",
        steps: [
          "Identificar oficial responsável, escopo, sintoma e restrições operacionais.",
          "Registrar estado inicial, alarmes, telas, versões e conexões.",
          "Solicitar autorização específica para desligar, desconectar, transmitir ou alterar.",
          "Etiquetar cabos e preservar configurações antes de substituir unidades."
        ],
        claimIds: ["FA150-TRAIN-001"]
      },
      {
        heading: "Fechar o serviço",
        steps: [
          "Repetir testes de confirmação após cada correção.",
          "Restaurar proteções, tampas, aterramentos, cabos e condições operacionais.",
          "Listar limitações e pendências sem mascarar falhas.",
          "Obter aceite do responsável e anexar evidências."
        ]
      }
    ]
  },
  {
    slug: "seguranca-operacional",
    order: 14,
    title: "Segurança operacional",
    eyebrow: "Módulo 14",
    summary: "Limites de intervenção, riscos de RF/energia e proteção da identidade do navio.",
    level: "Iniciante",
    status: "verificado",
    applicability: ["Todos os serviços AIS autorizados"],
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1", "SRC-IMO-A1106"],
    keywords: ["segurança", "MMSI", "firmware", "RF", "energia", "credencial"],
    sections: [
      {
        heading: "Não prossiga sem autorização",
        bullets: [
          "Alterar MMSI, identidade, dimensões, posição de antena ou dados estáticos.",
          "Retirar o AIS de operação ou transmitir em teste.",
          "Restaurar padrões, atualizar firmware ou substituir unidade.",
          "Abrir unidades, acessar nível de serviço ou usar ferramenta protegida."
        ],
        claimIds: ["FA150-ACCESS-001", "FA150-RESET-001"]
      },
      {
        heading: "Regras de ouro",
        bullets: [
          "AIS não é fonte única anticolisão.",
          "Não energize cabos em curto nem improvise proteção.",
          "Não misture software ou configuração de modelos diferentes.",
          "Credencial fornecida exclusivamente pelo fabricante ou assistência autorizada."
        ],
        claimIds: ["AIS-SAFE-001"]
      }
    ]
  },
  {
    slug: "casos-praticos",
    order: 15,
    title: "Casos práticos",
    eyebrow: "Módulo 15",
    summary: "Escolha o próximo teste e receba feedback sobre risco, poder de separação e evidência.",
    level: "Intermediário",
    status: "verificado",
    applicability: ["Treinamento sem conexão a equipamento real"],
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1"],
    keywords: ["caso", "heading", "posição", "transmissão", "ECDIS", "alcance", "vibração"],
    sections: [
      {
        heading: "Regra didática",
        paragraphs: [
          "Os casos não enviam sentenças nem controlam equipamento. Eles treinam a seleção do próximo teste: primeiro confirmar, depois separar origem, interface, processamento e destino."
        ]
      },
      {
        heading: "Cenários incluídos",
        bullets: [
          "Sem heading; posição presente sem transmissão confirmada; ECDIS sem alvos.",
          "Alcance reduzido; falha após vibração; polaridade diferencial invertida.",
          "Dados estáticos incorretos; unidade trocada sem restauração.",
          "GNSS externo ausente com interno assumindo; alarme recorrente após reset."
        ]
      }
    ]
  },
  {
    slug: "checklists",
    order: 16,
    title: "Checklists",
    eyebrow: "Módulo 16",
    summary: "Listas locais, imprimíveis e separadas por etapa de serviço.",
    level: "Iniciante",
    status: "verificado",
    applicability: ["Serviço autorizado", "Uso offline"],
    sourceIds: ["SRC-PRONAV-POP", "SRC-PRONAV-RAT", "SRC-FUR-IME-P1"],
    keywords: ["checklist", "imprimir", "inspeção", "commissioning", "fechamento"],
    sections: [
      {
        heading: "Como usar",
        paragraphs: [
          "Marcar um item não substitui medição ou evidência. Cada lista começa por autorização/estado inicial e termina por restauração/registro. As marcações permanecem apenas neste navegador."
        ],
        claimIds: ["FA150-TRAIN-001"]
      }
    ]
  },
  {
    slug: "treinamento",
    order: 17,
    title: "Trilhas de treinamento",
    eyebrow: "Módulo 17",
    summary: "Percursos por nível e especialidade, com progresso guardado somente no navegador.",
    level: "Iniciante",
    status: "verificado",
    applicability: ["Formação técnica", "Simulação sem equipamento"],
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1", "SRC-IMO-A1106"],
    keywords: ["curso", "iniciante", "avançado", "FA-150", "RF", "comunicação"],
    sections: [
      {
        heading: "Percursos",
        bullets: [
          "Iniciante: finalidade, limitações, dados e segurança.",
          "Intermediário: arquitetura, sensores, interfaces e commissioning.",
          "Avançado: diagnóstico, medições, RF e software.",
          "Especialista FA-150: unidades, telas, menus, históricos e integração."
        ]
      },
      {
        heading: "Avaliação",
        paragraphs: [
          "Questionários e casos priorizam justificativa do teste, risco, resultado esperado e retorno ao estado original. O progresso não é enviado a servidor."
        ]
      }
    ]
  }
];

export const moduleBySlug = Object.fromEntries(modules.map((module) => [module.slug, module]));
