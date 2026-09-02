# Vendored MathJax 3

MathJax **3.2.2**, hentet fra npm-pakken [`mathjax@3`](https://www.npmjs.com/package/mathjax)
(`npm install --no-save mathjax@3`) og lagt her, fordi BSim-hjælpevieweren serverer
`_book/` uden netværksadgang. Tidligere blev MathJax hentet fra
`https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js`, hvilket betød tomme
formler på ca. 42 sider, når maskinen var offline.

Kun det, `tex-chtml-full` faktisk bruger, er taget med:

| Sti | Hvad |
|---|---|
| `es5/tex-chtml-full.js` | Hele TeX-input + CommonHTML-output i én fil (1,3 MB). |
| `es5/output/chtml/fonts/woff-v2/` | De 23 WOFF2-skrifttyper CommonHTML-outputtet henter (396 KB). |
| `LICENSE` | Apache-2.0 (MathJax). |

I alt ca. 1,7 MB / 25 filer.

Mappestrukturen **skal** bevares: MathJax udleder sin egen rod fra `src`-attributten på
det script, der indlæses, og henter skrifttyperne fra `<rod>/output/chtml/fonts/woff-v2/`.
Flyttes `tex-chtml-full.js` ud af `es5/`, holder skrifttyperne op med at blive fundet.

`copy-static.js` kopierer hele denne mappe til `_book/mathjax/` efter `honkit build`.
Selve script-tagget indsættes af `head-append`-konfigurationen i `book.json`.

## Opdatering

```
npm install --no-save mathjax@3
```

kopiér derefter `node_modules/mathjax/es5/tex-chtml-full.js`,
`node_modules/mathjax/es5/output/chtml/fonts/woff-v2/` og `node_modules/mathjax/LICENSE`
herind, og kør `npm run build`.
