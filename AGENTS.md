# Regras permanentes do projeto AIS

## Missão

Este repositório mantém uma plataforma estática, offline e em português do Brasil para treinamento e consulta técnica autorizada sobre AIS, com foco no Furuno FA-150.

## Autoridade e segurança

- Assuma sempre atuação de técnico autorizado, com permissão do armador/operador e coordenação com o passadiço.
- Não publique senhas, códigos de acesso, credenciais, bypass, exploração, spoofing, clonagem, ocultação, transmissão falsa ou alteração indevida de identidade.
- Alterações de MMSI, IMO, call sign, dimensões, posição de antena, firmware, dados estáticos ou parâmetros protegidos exigem autorização documentada.
- Trabalhos com RF, alimentação, antenas ou circuitos energizados exigem procedimento seguro, instrumentos adequados, isolação e plano de retorno.
- Nunca recomende continuidade em circuito energizado, amperímetro em paralelo ou transmissão sem antena/carga adequada e autorização.
- `private/` é confidencial, ignorado pelo Git e proibido no build.

## Rastreabilidade

- Toda afirmação técnica relevante deve usar um `claim_id` registrado em `docs/catalog/claims-ledger.csv`.
- Toda fonte deve existir em `docs/catalog/source-registry.md` e em `src/data/sources.ts`.
- Classificações permitidas: `CONFIRMADO PELO MANUAL`, `CONFIRMADO POR NORMA`, `PROCEDIMENTO GERAL`, `INFERÊNCIA TÉCNICA`, `NECESSITA CONFIRMAÇÃO`, `EXCLUSIVO DESTE MODELO` e `NÃO APLICÁVEL A OUTROS MODELOS`.
- Valores, unidades, pinagens, cores, tensões, baud rates, sentenças, menus, alarmes, teclas e medições precisam de fonte com página/seção.
- Não misture modelos. A aplicabilidade deve ser explícita.
- Divergências não são resolvidas silenciosamente: registrar em `docs/catalog/source-conflicts.md`.
- Fonte interna (POP/RAT) não transforma uma alegação em informação confirmada pelo fabricante.

## Conteúdo e direitos autorais

- Resumir fatos com redação original; não reproduzir páginas, tabelas ou figuras integrais.
- Diagramas devem ser originais e indicar as fontes usadas.
- Fotografias originais permanecem preservadas; cópias anotadas devem citar o arquivo de origem.
- Campos de identificação de navio, números de série, contatos pessoais e evidências de cliente não entram no conteúdo público.

## Engenharia do site

- Astro + TypeScript, `output: "static"`, CSS próprio e JavaScript progressivo.
- Sem backend, banco, autenticação simulada, analytics invasivo, CDN obrigatória ou fonte remota.
- Busca e ferramentas executam localmente no navegador.
- Progresso e checklists podem usar `localStorage`, somente para estado local não sensível.
- Não incluir `docs/`, `private/`, relatórios reais ou arquivos de origem em `public/`.
- Toda página técnica exibe revisão, aplicabilidade, status, responsável e fontes.
- Conteúdo incompleto é marcado como lacuna; nunca usar placeholders vagos.

## Validação obrigatória

Antes de concluir:

1. `npm run lint`
2. `npm run check`
3. `npm test`
4. `npm run build`
5. `npm run audit`

O build deve falhar para credencial pública, arquivo de `private/`, link interno quebrado, fonte inexistente, alegação confirmada sem fonte ou página técnica sem referência.

