export interface PracticalChoice {
  label: string;
  assessment: "adequado" | "parcial" | "inadequado";
  why: string;
  risk: string;
  expected: string;
  next: string;
}

export interface PracticalCase {
  id: string;
  title: string;
  situation: string;
  sourceIds: string[];
  choices: PracticalChoice[];
}

const unsafe = (label: string, why: string): PracticalChoice => ({
  label,
  assessment: "inadequado",
  why,
  risk: "Perda de rastreabilidade, criação de uma segunda falha ou impacto operacional sem autorização.",
  expected: "O resultado pode ficar ambíguo e não separar a causa.",
  next: "Retorne ao estado inicial, registre qualquer alteração e escolha um teste não invasivo."
});

export const practicalCases: PracticalCase[] = [
  {
    id: "sem-heading",
    title: "AIS sem heading",
    situation: "OWN DYNAMIC DATA não mostra heading e SENSOR STATUS não indica HDG VALID.",
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1"],
    choices: [
      { label: "Comparar o heading no gyro e capturar a sentença na entrada AIS", assessment: "adequado", why: "Separa falha da origem de falha de cabo/porta.", risk: "Conectar analisador sem isolação ou referência adequada.", expected: "HDT/THS válido na origem ou ausência já confirmada.", next: "Se existe na origem, seguir par, polaridade, taxa e função da porta; se não existe, diagnosticar o sensor." },
      { label: "Abrir SENSOR STATUS e registrar o estado", assessment: "parcial", why: "Confirma o sintoma no AIS, mas não localiza a fronteira.", risk: "Baixo; não alterar menus.", expected: "Mensagem coerente com perda/validade do heading.", next: "Comparar origem e entrada elétrica." },
      unsafe("Trocar o transponder imediatamente", "Não há evidência de falha interna.")
    ]
  },
  {
    id: "posicao-sem-tx",
    title: "AIS com posição, mas sem transmissão confirmada",
    situation: "Posição e alvos aparecem, porém uma estação externa autorizada não observa os dados próprios.",
    sourceIds: ["SRC-FUR-OME-M"],
    choices: [
      { label: "Revisar alarmes, TX history e confirmação externa", assessment: "adequado", why: "Separa habilitação/evento de transmissão da cadeia de recepção.", risk: "Qualquer teste TX exige coordenação e método permitido.", expected: "Histórico/evento coerente ou ausência que direciona o diagnóstico.", next: "Inspecionar dados obrigatórios e cadeia RF conforme evidência." },
      unsafe("Executar transmissão repetitiva em bancada", "Transmitir sem procedimento, carga e autorização é inseguro e pode ser indevido."),
      { label: "Contar alvos na tela", assessment: "inadequado", why: "Isso testa recepção, não transmissão própria.", risk: "Falso aceite do sistema.", expected: "Pode haver muitos alvos mesmo com TX inoperante.", next: "Obter confirmação independente da transmissão." }
    ]
  },
  {
    id: "ecdis-sem-alvos",
    title: "ECDIS sem alvos AIS",
    situation: "O monitor FA-150 recebe alvos, mas o ECDIS não os apresenta.",
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1"],
    choices: [
      { label: "Capturar VDM na entrada do ECDIS", assessment: "adequado", why: "Separa saída AIS/distribuição da entrada/configuração ECDIS.", risk: "Curto ou referência incorreta ao conectar instrumento.", expected: "Sentenças válidas presentes ou ausência localizada.", next: "Se presentes, verificar listener/filtros; se ausentes, recuar ponto a ponto." },
      { label: "Revisar filtros de apresentação do ECDIS", assessment: "parcial", why: "É válido depois de confirmar que dados chegam à entrada.", risk: "Alterar apresentação sem registrar baseline.", expected: "Filtro pode ocultar alvos válidos.", next: "Confirmar entrada física antes de concluir." },
      unsafe("Restaurar o FA-150 aos padrões", "A recepção local funciona e não há evidência de configuração geral corrompida.")
    ]
  },
  {
    id: "alcance-reduzido",
    title: "Alcance reduzido",
    situation: "O alcance observado caiu em comparação com registros anteriores.",
    sourceIds: ["SRC-FUR-IME-P1", "SRC-PRONAV-POP"],
    choices: [
      { label: "Comparar contexto e inspecionar antena, coaxial e conectores", assessment: "adequado", why: "Confirma que a comparação é válida e procura causas de alta probabilidade.", risk: "Acesso físico e RF exigem desenergização/coordenação conforme procedimento.", expected: "Dano, água, conector ou mudança de ambiente podem ser identificados.", next: "Planejar medição RF autorizada somente se a inspeção não resolver." },
      { label: "Medir ROE com arranjo documentado", assessment: "parcial", why: "Pode separar desadaptação, mas depende de instrumento, carga, direção e limite.", risk: "Transmissão indevida ou dano se o arranjo estiver errado.", expected: "Valor comparável ao limite do fabricante.", next: "Isolar segmento apenas com procedimento autorizado." },
      unsafe("Aumentar potência por menu", "Não há autorização nem parâmetro documentado para essa ação.")
    ]
  },
  {
    id: "vibracao",
    title: "Falha intermitente após vibração",
    situation: "Alvos e dados desaparecem quando o console vibra.",
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1"],
    choices: [
      { label: "Correlacionar evento e inspecionar conexões desenergizadas", assessment: "adequado", why: "Preserva evidência e testa a hipótese mecânica com baixo risco.", risk: "Manipular conectores energizados pode causar curto ou nova falha.", expected: "Conector, crimpagem, fixação ou cabo podem mostrar intermitência.", next: "Corrigir o ponto identificado e repetir em condição controlada." },
      unsafe("Balançar cabos com o equipamento transmitindo", "O teste é invasivo, inseguro e pode piorar o defeito."),
      { label: "Ler PWR ON/OFF HISTORY", assessment: "parcial", why: "Pode indicar perda de energia, mas não avalia todas as interfaces.", risk: "Baixo.", expected: "Eventos correlacionados apoiam hipótese de alimentação.", next: "Inspecionar alimentação/conectores com circuito seguro." }
    ]
  },
  {
    id: "polaridade",
    title: "RS-422 com polaridade invertida",
    situation: "Há atividade elétrica, mas nenhuma sentença é decodificada.",
    sourceIds: ["SRC-FUR-IME-P1", "SRC-IEC-61162-1-2024"],
    choices: [
      { label: "Comparar desenhos dos dois extremos e medir o par", assessment: "adequado", why: "Confirma nomenclatura e polaridade antes de trocar condutores.", risk: "Referência/common mode inadequado no instrumento.", expected: "Atividade diferencial sem decodificação pode apontar inversão.", next: "Corrigir somente após identificação inequívoca; validar checksum." },
      unsafe("Inverter A/B por tentativa", "Nomenclaturas variam e tentativa cega pode mascarar outro erro."),
      { label: "Trocar baud rate", assessment: "parcial", why: "Taxa errada produz sintoma semelhante, mas deve ser comparada nos dois extremos.", risk: "Criar divergência adicional se não houver registro.", expected: "Caracteres podem surgir, ainda sem validar polaridade.", next: "Confirmar desenho, função e taxa sistematicamente." }
    ]
  },
  {
    id: "dados-estaticos",
    title: "Dados estáticos incorretos",
    situation: "Nome/dimensões recebidos externamente divergem da documentação do navio.",
    sourceIds: ["SRC-FUR-OME-M", "SRC-IMO-A1106"],
    choices: [
      { label: "Comparar tela própria, recepção externa e documentos autorizados", assessment: "adequado", why: "Confirma a divergência e sua origem antes de alterar identidade.", risk: "Exposição de dados; preserve-os em registro controlado.", expected: "Divergência reproduzível e campo exato identificado.", next: "Obter autorização e acesso oficial para a correção com dupla verificação." },
      unsafe("Corrigir o MMSI com base em um site público", "Fonte pública não é autorização nem prova documental."),
      { label: "Registrar a pendência e informar o passadiço", assessment: "parcial", why: "É necessário, mas não corrige nem localiza a causa.", risk: "Baixo.", expected: "Impacto operacional reconhecido.", next: "Reunir documentos e autorização." }
    ]
  },
  {
    id: "unidade-substituida",
    title: "Unidade substituída sem restauração",
    situation: "Após trocar o transponder, sensores e identidade não estão coerentes.",
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1"],
    choices: [
      { label: "Comparar versões, backup/registro e conexões antes/depois", assessment: "adequado", why: "Separa incompatibilidade, configuração e erro de instalação.", risk: "Restaurar dados de outro equipamento/modelo.", expected: "Diferenças controláveis são identificadas.", next: "Restaurar somente parâmetros verificados e autorizados; testar tudo." },
      unsafe("Carregar um arquivo de configuração encontrado em outro navio", "Pode adulterar identidade, interfaces e compatibilidade."),
      { label: "Executar monitor/transponder test", assessment: "parcial", why: "Avalia unidades, mas não comprova que a configuração foi restaurada.", risk: "Baixo se o teste for o documentado.", expected: "Hardware pode aprovar com dados errados.", next: "Reconciliar configuração e documentos." }
    ]
  },
  {
    id: "gnss-fallback",
    title: "GNSS externo ausente e interno assumindo",
    situation: "SENSOR STATUS indica GNSS interno, embora o projeto preveja fonte externa.",
    sourceIds: ["SRC-FUR-OME-M", "SRC-FUR-IME-P1"],
    choices: [
      { label: "Validar a sentença externa na entrada AIS", assessment: "adequado", why: "Separa perda da origem, interface e seleção automática.", risk: "Conexão de analisador sem isolação.", expected: "Sentença ausente, inválida ou válida no ponto.", next: "Se válida, revisar função/prioridade; se ausente, seguir até a origem." },
      { label: "Confirmar posição do GNSS interno", assessment: "parcial", why: "Confirma que há fallback, mas não restaura a fonte prevista.", risk: "Aceitar condição degradada sem informar.", expected: "Posição pode parecer correta apesar da falha externa.", next: "Diagnosticar a fonte externa." },
      unsafe("Desabilitar o GNSS interno", "Pode remover a única posição disponível sem resolver a falha externa.")
    ]
  },
  {
    id: "alarme-reset",
    title: "Alarme retorna após reset",
    situation: "O alarme desaparece momentaneamente e volta com a mesma condição.",
    sourceIds: ["SRC-FUR-OME-M"],
    choices: [
      { label: "Registrar ALARM STATUS e correlacionar SENSOR STATUS/histórico", assessment: "adequado", why: "Investiga a condição de ativação em vez de apagar o sintoma.", risk: "Baixo; preservar hora e contexto.", expected: "O evento se associa a sensor, energia, interface ou estado interno.", next: "Testar a causa correlacionada e confirmar operação sustentada." },
      unsafe("Repetir reset até o alarme sumir", "Apaga contexto e não remove a condição de falha."),
      { label: "Desligar e ligar o equipamento", assessment: "inadequado", why: "Sem autorização e evidência, o ciclo pode mascarar o problema.", risk: "Perda temporária do AIS e de integrações.", expected: "O alarme pode retornar após a mesma condição.", next: "Preservar evidência e diagnosticar a causa." }
    ]
  }
];

