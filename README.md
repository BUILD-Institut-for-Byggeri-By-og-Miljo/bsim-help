# BSim Help

Kildetekst til BSim-hjælpen: en tosproget [HonKit](https://github.com/honkit/honkit)-bog
(`da/` = dansk, `en/` = engelsk) på ca. 250 sider pr. sprog, fordelt på 20 nummererede
kapitelmapper. Den byggede bog i `_book/` er det, BSim-hjælpevieweren
(`BSimHelp.exe`) viser — **offline**, uden nogen netværksadgang.

> Denne fil er skrevet til vedligeholderen af hjælpeteksten. Selve viewer-programmet
> ligger i et andet repo (`BUILD Tools/semantic-embedded-help`).

---

## Repoets indhold

| Sti | Hvad det er |
|---|---|
| `da/`, `en/` | Bogens kildetekst. Én mappe pr. kapitel, én `.md`-fil pr. side, billeder i `assets/` ved siden af siderne. |
| `da/SUMMARY.md`, `en/SUMMARY.md` | Indholdsfortegnelsen — **en side der ikke står her, kommer ikke med i bogen**. |
| `LANGS.md` | Sprogliste; styrer sprogvælgeren og rod-`index.html`. |
| `book.json` | HonKit-konfiguration: plugins og den `<head>`-kode der indlæser MathJax og `styles.css`. |
| `plugins/` | Vendored (indlejrede) HonKit-plugins — se nedenfor. |
| `mathjax/` | Vendored MathJax 3 (es5) — se "Offline-krav". |
| `topic-map/` | Oversættelsestabel fra den gamle CHM-hjælps emne-stier til sider i denne bog — se nedenfor. |
| `copy-static.js` | Efterbygningstrin: kopierer `mathjax/` ind i `_book/`, fjerner kapitel-/sidenumrene fra det byggede output (se “Rene URL'er”) og fejler, hvis en bygget side stadig peger på et CDN. |
| `_book/` | Byggeresultatet. **Er checket ind** i dette repo, fordi BSim-installeren tager det direkte herfra. |

---

## Byg bogen

Kræver Node.js 18 eller nyere (`copy-static.js` bruger `fs.cpSync`, som kræver >= 16.7).

```
npm ci
npm run build
```

`npm run build` kører `honkit build && node copy-static.js`. Resultatet lander i `_book/`.

Til skrivearbejde:

```
npm run serve
```

`honkit serve` giver live-genindlæsning, men serverer **ikke** `mathjax/` (den mappe
lægges først på plads af `copy-static.js`), så formler vises ikke i preview.
Kør `npm run build` for at se den rigtige side.

### `_book/` skal genbygges før hver BSim-udgivelse

`_book/` er commitet i repoet, og BSim-installeren kopierer det som det er. Et forældet
`_book/` betyder, at brugerne får gammel hjælpetekst — uden nogen fejlmeddelelse.
Derfor: **kør `npm ci && npm run build` og commit det opdaterede `_book/`, hver gang
hjælpeteksten skal med i en BSim-release.**

---

## Rene URL'er i den byggede bog

**Kilderne er nummererede — det publicerede resultat er det ikke.**

Kapitelmapper og sidefiler i `da/` og `en/` beholder deres numre, fordi det er dem,
der giver rækkefølgen i GitHub og VS Code. `copy-static.js` fjerner numrene fra
`_book/` efter hver bygning, så URL'erne på help.bsim.dk og i vieweren er rene:

```
kilde:   da/09SimView/09_09_SimView_Non_default_constructions.md
bygget:  _book/da/SimView/SimView_Non_default_constructions.html
```

Reglen er:

* en mappe **direkte** under `_book/da` eller `_book/en`, hvis navn begynder med
  cifre, mister de cifre (`24Miscellaneous` → `Miscellaneous`);
* en fil inde i sådan en mappe, hvis navn begynder med `NN_NN_`, mister det præfiks
  (`24_25_Site_Property.html` → `Site_Property.html`);
* alt andet røres ikke: `_book/gitbook/`, `_book/mathjax/`, `assets/`-mapperne og
  filerne i sprogroden (`index.html`, `styles.css`, `search_plus_index.json`).

Omdøbningen bygger en eksplicit tabel over gamle → nye navne fra filsystemet og
retter derefter **alle** henvisninger i de byggede tekstfiler (HTML, søgeindekset
`search_plus_index.json`, CSS/JS/XML/TXT/MD) ud fra den tabel — ikke med et generelt
“fjern cifre”-regexp. Bygningen fejler, hvis to navne støder sammen efter
afkortningen, eller hvis der bagefter stadig findes en henvisning til et gammelt navn.

Konsekvenser, du skal huske:

* **`topic-map/bsim-topic-map.txt` bruger de rene slugs** (`Miscellaneous/Site_Property.html`),
  fordi vieweren slår op i den byggede bog.
* Links **mellem** sider skrives i kilderne som hidtil, med numre
  (`../09SimView/09_09_....md`) — de bliver rettet automatisk under bygningen.
* Der laves **ingen** redirects fra de gamle, nummererede URL'er.

---

## Offline-krav

Vieweren serverer `_book/` gennem en WebView2 *virtual host* uden netværk. Alt, en side
henviser til, skal derfor ligge inde i `_book/`. Konkret:

* **MathJax er vendored.** MathJax 3.2.2 (`es5/tex-chtml-full.js` + skrifttyperne i
  `es5/output/chtml/fonts/woff-v2/`, ca. 1,7 MB) ligger i `mathjax/` og kopieres til
  `_book/mathjax/` af `copy-static.js`. `book.json` indlæser scriptet via en sti, der
  regnes ud fra sidens eget `gitbook/style.css`-link, så den virker i alle sidedybder
  (`/index.html`, `/{sprog}/index.html`, `/{sprog}/{kapitel}/side.html`).
  Hent **ikke** MathJax fra jsdelivr eller et andet CDN igen.
* **`language-picker`-pluginet er vendored.** Det lå tidligere som en git-URL i
  `book.json` og blev hentet fra GitHub ved installation; nu ligger det i
  `plugins/language-picker/` og er en `file:`-afhængighed i `package.json`.
  De øvrige plugins (`category-accordion`, `page-toc`, `mathjax-fix`, `remove-honkit-footer`)
  har altid ligget i `plugins/`.
* **Udseendet styres af to små client-side plugins.** `category-accordion` giver den
  kompakte venstremenu (gruppeoverskrifter med chevron, indrykkede sider bag en tynd streg,
  aktiv side som blå pille, husker åbne grupper i sessionStorage). `page-toc` bygger panelet
  "På denne side" af sidens `h2`/`h3` (vises kun ved ≥ 1200 px og mindst to overskrifter) og
  erstatter de store frem/tilbage-pile med en kompakt Forrige/Næste-række. Begge er ren CSS/JS
  uden byggetrin, så HonKit-bygningen og publiceringen til help.bsim.dk er uændret.
  Bemærk: HonKit-temaet sætter `html { font-size: 62.5% }`, så 1 rem = 10 px i plugin-CSS'en.
* **Ingen CDN-referencer i det byggede output.** `copy-static.js` gennemsøger alle
  HTML-filer i `_book/` og afbryder bygningen, hvis den finder en URL til jsdelivr,
  cdnjs, unpkg, Google Fonts m.fl. Tilføj derfor aldrig et `<script src="https://...">`
  eller en webfont-`<link>` til `book.json` eller til en side.

---

## `topic-map/`

BSim beder om hjælp med en emne-sti fra den gamle CHM-hjælp (fx
`simview\pwizard2.htm`). `topic-map/bsim-topic-map.txt` oversætter den slags nøgler til
en side i denne bog, uden sprogpræfiks:

```
simview\pwizard2.htm=Miscellaneous/Projekt_Wizard_2.html
```

Bemærk, at slug'en er den **rene** — uden kapitel-/sidenumre, se “Rene URL'er i den
byggede bog” ovenfor. Vieweren sætter selv `da/` eller `en/` foran. **Derfor skal hver
side have præcis samme filnavn i `da/` og `en/`, tegn for tegn, også med hensyn til store og små bogstaver** —
ellers virker opslaget kun på det ene sprog (og går i stykker på et case-sensitivt
filsystem). Se `topic-map/README.md` for formatet og for hvordan udkastet genereres.

Når du omdøber eller flytter en side:

1. omdøb den i **både** `da/` og `en/` med samme stavemåde,
2. ret linket i begge `SUMMARY.md`,
3. ret alle interne links, der peger på siden (`grep -r "gammelt_filnavn" da/ en/`),
4. ret stien i `topic-map/bsim-topic-map.txt`, hvis siden er nævnt der — husk, at
   den bruger den **rene** slug uden numre,
5. kør `npm run build`.
