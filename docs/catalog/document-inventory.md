# Inventário documental

Data da inspeção: 2026-07-23  
Método: metadados OOXML/PDF, extração integral de texto, conferência visual de capas e páginas técnicas, SHA-256.

| ID | Arquivo no repositório | Fabricante/autor | Tipo | Modelo | Idioma | Revisão/data | Páginas | SHA-256 | Estado |
|---|---|---|---|---|---|---|---:|---|---|
| SRC-FUR-OME-M | `docs/manuals/Furuno_FA-150_Operator_OME-44310-M_rev-M_2017.pdf` | Furuno Electric Co., Ltd. | Manual do operador | FA-150 | Inglês | OME-44310-M, rev. M, 2017-02-10 | 119 | `F7E43AEF8A932BC0073C2AD80EEAFB2B9305916774F628FDFC07CCF34276DEA2` | Legível; 118 páginas com texto, última página vazia |
| SRC-FUR-IME-P1 | `docs/manuals/Furuno_FA-150_Installation_IME-44310-P1_rev-P1_2019.pdf` | Furuno Electric Co., Ltd. | Manual de instalação | FA-150 | Inglês | IME-44310-P1, rev. P1, 2019-03-20 | 58 | `00001888C06706E53727A29BDD433ADF3BF13DD83E6CD7B6E5DBADE47622B68D` | Legível; desenhos exigem conferência visual |
| SRC-PRONAV-POP-DOCX | `docs/procedures/POP_Manutencao_Equipamentos_AIS.docx` | Pronav Marine | Procedimento interno | FA-150 | Português | revisão formal não indicada; modificado 2026-01-14 | 4 | `8FFE4A04680295178DC34974AAA8B1B1543D00ADAB7621535036139CF4B41C95` | Legível; autoridade interna |
| SRC-PRONAV-POP-PDF | `docs/procedures/POP_Manutencao_Equipamentos_AIS.pdf` | Pronav Marine | Renderização do POP | FA-150 | Português | criado 2026-07-23 | 4 | `7FFB0CDBBAE2FBED304930223F2F5C0E2C0EE7BE07EF5394820A57B808F0BA61` | Duplicata de conteúdo do DOCX |
| SRC-PRONAV-RAT | `docs/service-reports/RAT_AIS_Furuno_FA-150_blank.docx` | Pronav Marine | Formulário de relatório | FA-150 | Português | revisão formal não indicada; modificado 2025-12-14 | 4 | `E61D6050D6102A691519CB36774BC37A207C3E81E2CD7493A492682A35AE22DD` | Modelo vazio; não comprova medições |

## Duplicidades

- A cópia `Downloads/drive-download-20260710T130413Z-2-001/RAT AIS Furuno FA-150.docx` tem o mesmo SHA-256 de `SRC-PRONAV-RAT` e não foi importada novamente.
- O POP em PDF é uma apresentação do POP em DOCX. Ambos são preservados para rastreabilidade, mas contam como uma única origem de conteúdo.

## Observações de legibilidade

- `SRC-FUR-OME-M`: a página física 119 está vazia; isso parece ser intencional.
- `SRC-FUR-IME-P1`: a extração textual de símbolos e desenhos é parcial. Valores de pinagem, cores e interconexão devem ser confirmados visualmente na folha correspondente.
- Os dois DOCX não puderam ser renderizados pelo conversor automatizado disponível; a estrutura OOXML, textos, tabelas, cabeçalhos, rodapés e contagem de páginas foram inspecionados. Eles não são entregáveis do projeto e não foram modificados.

