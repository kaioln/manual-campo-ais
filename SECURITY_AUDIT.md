# Auditoria de segurança

Data: 2026-07-24
Escopo: credenciais, identidade AIS, dados sensíveis, armazenamento local, build e instruções perigosas.

## Resultado

**Aprovado.** O manual exige senha para INITIAL SETTINGS, mas não divulga o valor. Nenhuma credencial foi inventada, localizada ou incluída no site.

## Controles verificados

- `private/` está no `.gitignore`, fora de `src/` e `public/`, e é proibido pela auditoria do build.
- O arquivo privado contém apenas política; nenhuma senha/código.
- Não há bypass, força bruta, exploração, firmware desbloqueado, spoofing, clonagem, ocultação ou transmissão AIS falsa.
- Alterações de MMSI, identidade, dimensões, referência de antena e firmware exigem autorização documentada.
- A página de acesso informa: “Credencial fornecida exclusivamente pelo fabricante ou assistência autorizada.”
- O analisador processa a sentença no navegador e não persiste a entrada.
- A interface alerta que PIWWSPW pode transportar credencial Inland AIS e não deve ser colada na ferramenta pública.
- Checklists e progresso persistem apenas estado booleano local, sem dados técnicos/sensíveis.
- Modelos de relatório não persistem texto digitado.
- Não há backend, analytics, fonte remota, CDN, upload ou chamada externa em tempo de uso.
- Documentos originais ficam em `docs/`, fora da saída pública.
- A auditoria procura padrões de chave/senha na saída gerada.

## Riscos residuais e orientação

- O usuário ainda pode digitar dados reais no analisador ou formulário; o site exibe aviso para sanitização e não persistência.
- Cache offline contém apenas páginas públicas e recursos estáticos.
- Relatórios reais, fotos e configurações de navio devem permanecer em repositório/armazenamento controlado, fora do build.
