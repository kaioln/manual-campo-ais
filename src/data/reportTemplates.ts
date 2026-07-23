export interface ReportTemplate {
  id: string;
  title: string;
  purpose: string;
  sections: string[];
}

const commonSections = [
  "Identificação da embarcação, OS, equipamento, modelo, serial e versões",
  "Autorização, responsável do passadiço e janela de serviço",
  "Problema relatado e estado inicial observado",
  "Riscos, isolamentos e instrumentos utilizados",
  "Serviço executado e alterações realizadas",
  "Medições com ponto, unidade, condição e referência",
  "Testes de confirmação: recepção, transmissão e integração",
  "Estado final, limitações e pendências",
  "Evidências anexas e assinaturas"
];

export const reportTemplates: ReportTemplate[] = [
  { id: "inspecao", title: "Relatório de inspeção", purpose: "Registrar condição encontrada sem presumir causa.", sections: commonSections },
  { id: "instalacao", title: "Relatório de instalação", purpose: "Documentar montagem, cabos, energização e as built.", sections: [...commonSections, "Lista de material e desvios do desenho", "Configuração inicial autorizada"] },
  { id: "preventiva", title: "Manutenção preventiva", purpose: "Comparar condição e desempenho com baseline.", sections: [...commonSections, "Comparação com registro anterior"] },
  { id: "corretiva", title: "Manutenção corretiva", purpose: "Vincular sintoma, causa, correção e confirmação.", sections: [...commonSections, "Causa raiz confirmada e hipóteses descartadas"] },
  { id: "nff", title: "Diagnóstico sem falha encontrada", purpose: "Documentar testes, limites e condição não reproduzida.", sections: [...commonSections, "Condições necessárias para repetir o diagnóstico"] },
  { id: "substituicao", title: "Substituição de unidade", purpose: "Preservar identidade, configuração e cadeia de evidência.", sections: [...commonSections, "Unidade removida/instalada e compatibilidade", "Backup e restauração autorizada"] },
  { id: "software", title: "Atualização de software", purpose: "Registrar compatibilidade, arquivo oficial e regressão.", sections: [...commonSections, "Boletim/autorização do fabricante", "Versões anterior e nova", "Plano de retorno"] },
  { id: "commissioning", title: "Commissioning", purpose: "Aceitar sistema novo ou reconfigurado.", sections: [...commonSections, "Critérios de aceitação e aceite do cliente"] },
  { id: "pendencia", title: "Pendência técnica", purpose: "Comunicar condição, impacto, restrição e ação requerida.", sections: [...commonSections, "Impacto operacional e responsável pelo acompanhamento", "Prazo/recurso/documento necessário"] }
];

