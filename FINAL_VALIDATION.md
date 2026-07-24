# Validação final

Data: 2026-07-24
Versão: 0.2.0

## Resultado geral

**Aprovado para publicação como site estático de treinamento e consulta.**

## Resultados executados

| Verificação | Resultado |
|---|---|
| Astro/TypeScript | 0 erros, 0 avisos |
| Testes unitários | 20 aprovados em 4 arquivos |
| Build estático | 38 páginas geradas |
| Analisador | Exemplo AIVDM sanitizado: checksum válido e 6 campos separados |
| Busca | Consulta “heading”: 13 resultados, com sinônimos e prioridade por título |
| Responsividade | 375 px, 1024 px e 1440 px sem overflow horizontal; atalho de busca oculto no enquadramento intermediário/móvel |
| Acessibilidade estrutural | 1 H1, landmarks, skip link como primeiro foco, controles rotulados |
| Navegação por teclado | Elementos interativos em ordem DOM natural; skip link com `tabIndex=0` |
| Console do navegador | Nenhum erro ou aviso |
| Imagens | Diagrama FA-150 carregado, texto alternativo e largura natural confirmados |
| Checklists | Seleção, marcação e restauração local da marcação verificadas |
| Impressão | CSS A4, ocultação de navegação e prevenção de quebra em blocos |
| Offline | Service worker, manifesto e lista de páginas principais presentes no build |
| Segurança | Nenhum arquivo `private/` ou credencial no build |

## Critérios de aceitação

- Saída inteiramente estática: atendido.
- Conteúdo em português do Brasil: atendido.
- Seção FA-150 detalhada e rastreável: atendido dentro dos documentos disponíveis.
- Procedimentos e valores com fontes: atendido; itens sem fonte permanecem lacuna.
- Busca, glossário, checksum, checklists, troubleshooting, casos e progresso local: atendido.
- Credenciais e acesso indevido: ausentes.
- Publicação externa: concluída no GitHub Pages em 2026-07-24; build `e8d3e3e` verificado em produção.

## Limite de conclusão

“Completo” significa completo dentro das fontes entregues e das fontes públicas oficiais consultadas. A cobertura específica de outros modelos, serviço interno, firmware e alarmes integrais depende dos documentos listados em `CONTENT_GAPS.md`.
