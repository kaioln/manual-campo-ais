# Plano técnico — Manual de Campo AIS

## Objetivo

Construir uma plataforma estática, offline, rastreável e segura para formação e consulta de técnicos autorizados de AIS, usando o Furuno FA-150 como referência principal e mantendo arquitetura extensível para outros modelos.

## Escopo

- Fundamentos, dados AIS, arquitetura, sensores, IEC 61162/NMEA, instalação, commissioning, diagnóstico, medições, alarmes, procedimentos, segurança, casos, checklists, treinamento e glossário.
- Conteúdo específico do FA-150 apenas quando confirmado nos documentos aplicáveis.
- Ferramentas locais: busca, analisador de sentenças/checksum, filtros, checklists e progresso de treinamento.
- Catálogo documental, ledger de alegações, conflitos, lacunas, revisão e auditorias.

## Fases

### Fase 1 — Descoberta e governança

- Inventariar arquivos, hashes, revisões, legibilidade e duplicidades.
- Criar matriz modelo-documento, registro de fontes, lacunas e conflitos.
- Estabelecer regras permanentes e critérios de aceitação.

### Fase 2 — Arquitetura e base

- Criar projeto Astro/TypeScript com saída estática.
- Implementar layout acessível, tema claro/escuro, navegação, breadcrumbs e impressão.
- Criar modelo central de fontes, alegações, páginas e pesquisa.

### Fase 3 — Conteúdo verificável

- Publicar fundamentos e segurança com fontes normativas oficiais.
- Publicar FA-150, integração, instalação e operação com os manuais OME/IME.
- Tratar POP/RAT como contexto interno e modelos de registro, não como autoridade técnica.
- Marcar lacunas dos demais modelos.

### Fase 4 — Ferramentas e treinamento

- Busca local com sinônimos.
- Analisador IEC 61162/NMEA com estrutura, campos e checksum.
- Checklists imprimíveis e persistência local.
- Árvores de troubleshooting e casos de escolha do próximo teste.
- Trilhas e progresso local.

### Fase 5 — Qualidade e entrega

- Testes unitários, tipos, links, referências, segurança e conteúdo.
- Revisão de acessibilidade, responsividade, teclado, impressão e funcionamento offline.
- Auditorias técnica e de segurança.
- Build estático final e documentação de manutenção.

## Entregáveis

- Site Astro estático.
- Catálogo e matriz documental.
- Ledger de alegações e sistema central de citações.
- Conteúdo FA-150 e módulos gerais com aplicabilidade explícita.
- Busca, glossário, analisador, checklists, troubleshooting e treinamento.
- `TECHNICAL_AUDIT.md`, `SECURITY_AUDIT.md`, `CONTENT_GAPS.md` e `FINAL_VALIDATION.md`.

## Dependências

- Node.js e gerenciador de pacotes local.
- Astro, TypeScript, verificador Astro e Vitest.
- Cinco documentos fornecidos pelo usuário.
- Fontes oficiais públicas de IMO, ITU e IEC para vigência normativa.

## Riscos

- Ausência de manual oficial de serviço e boletins do FA-150.
- Ausência de documentação dos demais modelos.
- Normas IEC completas são licenciadas; usar somente metadados e resumos públicos autorizados.
- Desenhos técnicos têm extração textual parcial e exigem conferência visual.
- POP interno contém procedimentos sem critérios completos de segurança/metrologia.
- Equipamentos legados podem variar por região e versão de software.

## Decisões arquiteturais

- Saída totalmente estática, sem backend.
- Conteúdo e citações dirigidos por dados para reduzir divergência.
- Uma rota por tema, com gerador estático.
- Busca embarcada no HTML/JavaScript e executada no navegador.
- Service worker mínimo para páginas principais e assets visitados.
- CSS próprio com identidade naval sóbria e sem dependência visual.
- Dados locais não sensíveis em `localStorage`; nenhuma credencial ou identificação de navio.

## Critérios de conclusão

- Build, lint, tipos, testes e auditoria passam.
- Nenhum arquivo de `private/` aparece no build.
- Nenhuma alegação confirmada fica sem fonte.
- Ferramentas locais funcionam sem rede após o primeiro carregamento.
- Checklists imprimem de forma limpa.
- Páginas deixam claro modelo, revisão, status e fonte.
- Lacunas permanecem visíveis e não são substituídas por suposições.

## Checklist de validação

- [ ] Inventário e hashes conferidos
- [ ] Duplicidades registradas
- [ ] Fontes e conflitos registrados
- [ ] FA-150 separado de outros modelos
- [ ] Menus/pinagens/valores com página e seção
- [ ] Busca e sinônimos testados
- [ ] Checksum e parser testados
- [ ] Links e referências validados
- [ ] Acessibilidade e teclado revisados
- [ ] Responsividade e impressão revisadas
- [ ] Cache offline validado
- [ ] Varredura de credenciais executada
- [ ] Auditorias publicadas
- [ ] Build final concluído

