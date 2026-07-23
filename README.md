# Manual de Campo AIS

Plataforma estática em português do Brasil para treinamento e consulta técnica autorizada sobre AIS, com foco no Furuno FA-150.

## Requisitos

- Node.js 20 ou superior
- npm ou pnpm

## Executar

```text
npm install
npm run dev
```

O endereço local será mostrado no terminal. Nenhum backend ou banco é necessário.

## Validar e gerar o site

```text
npm run validate
```

A saída estática fica em `dist/`. Ela pode ser servida por qualquer servidor HTTP estático. Para validar localmente:

```text
npm run preview
```

Abrir os arquivos diretamente com `file://` não é recomendado porque service workers e algumas rotas exigem HTTP local.

## Publicação no GitHub Pages

O código-fonte fica na branch `main` e o build estático validado é publicado na branch `gh-pages` em:

`https://kaioln.github.io/manual-campo-ais/`

Os documentos-fonte recebidos em `docs/manuals/`, `docs/procedures/` e `docs/service-reports/` permanecem somente no ambiente autorizado e não entram no repositório público. O catálogo, os hashes, as referências e o conteúdo técnico reescrito permanecem versionados.

## Adicionar um manual

1. Coloque o original na pasta adequada dentro de `docs/`.
2. Calcule SHA-256 e registre o arquivo em `docs/catalog/document-inventory.md`.
3. Atualize `docs/catalog/model-document-matrix.md` e `docs/catalog/source-registry.md`.
4. Adicione a fonte em `src/data/sources.ts`.
5. Crie alegações em `docs/catalog/claims-ledger.csv` e `src/data/claims.ts`.
6. Marque modelo, revisão, página, seção, confiança e aplicabilidade.
7. Rode `npm run validate`.

Não copie documentos para `public/`. O site publica apenas sínteses, dados sanitizados e diagramas originais.

## Conteúdo técnico

- `src/data/` concentra fontes, alegações, módulos, glossário, checklists e árvores de decisão.
- `src/pages/` contém as rotas estáticas.
- `src/components/` contém apresentação e citações.
- `docs/catalog/` mantém a trilha documental.

## Segurança

- `private/` é ignorado pelo Git e pelo build.
- Nenhuma credencial pode entrar em HTML, JavaScript, JSON público, URL ou armazenamento do navegador.
- O validador procura indícios de credenciais, links quebrados e alegações sem fonte.
- Dados de navio e relatórios reais devem permanecer fora do site público.

## Offline

O service worker armazena as páginas principais e recursos visitados. Após o primeiro carregamento por HTTP, a plataforma continua útil sem conexão. Checklists, tema e progresso ficam somente no navegador.
