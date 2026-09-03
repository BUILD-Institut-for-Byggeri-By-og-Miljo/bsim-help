# topic-map

Maps the **old BSim CHM help topics** to **pages of this HonKit book**, so the
new standalone help viewer can answer an F1 request from BSim (the MFC
application).

| File | Role |
| --- | --- |
| `bsim-topic-map.txt` | The map. **Hand-maintained** after the initial draft. |
| `generate-draft.py` | Re-runnable generator that produced the initial draft. |

## File format

UTF-8, LF line endings, one entry per line:

```
<oldpath>=<slug>.html[#anchor]
```

* **`<oldpath>`** — the topic string BSim passes to the viewer, exactly as it
  exists at runtime. Backslash separators are kept, and the `#fragment` is part
  of the key when `F1Help.h` defines one:

  ```
  Systems\natural_ventilation.htm#Opening=Systems/Natural_ventilation.html
  ```

  `F1Help.h` writes these as C string literals with doubled backslashes
  (`"Systems\\natural_ventilation.htm#Opening"`); the keys here use the
  single-backslash runtime value. Look-ups **must be case-insensitive** —
  `F1Help.h` mixes `Systems\…` and `systems\…`.

* **`<slug>`** — page path relative to the language root, *without* the
  language prefix, e.g. `Miscellaneous/Site_Property.html`. The viewer
  prepends `da/` or `en/` according to the user's language. The `.md` sources
  become `.html` in the built book.

  **The slugs are the *clean* ones** — without the chapter/page numbers. The
  markdown sources keep their numbers for ordering
  (`da/24Miscellaneous/24_25_Site_Property.md`), but `copy-static.js` strips
  them from `_book/` at build time and the viewer resolves topics against the
  built book. See “Rene URL'er i den byggede bog” in the repo README.

* **`#anchor`** — only present when the old fragment maps onto a real anchor of
  the target page. Otherwise the page opens at the top. (Currently no entry
  carries an anchor: the only fragment in `F1Help.h`, `#Opening`, has no
  counterpart heading in the book.)

* **`.`** as the whole value means *the language root index* — open the book's
  front page for the current language. Used for `IDH_INDEX`
  (`help\index_chm.htm`).

* Lines starting with `#` are comments, as are blank lines. Every entry is
  preceded by a generated comment naming the `IDH_*` symbol(s) it serves, the
  match confidence, and the Danish page title:

  ```
  # IDH_SITE_PROP  HIGH (score 6.79, runner-up 2.98)  -> Site Property
  simview\site_property.htm=Miscellaneous/Site_Property.html
  ```

  Confidence markers:

  | Marker | Meaning |
  | --- | --- |
  | `HIGH` | Strong, unambiguous match — trust it. |
  | `LOW-CONFIDENCE` | Best available candidate, but the runner-up was close, or the choice was a judgement call. Please verify. |
  | `UNMATCHED` | No candidate at all. The line is a comment only, so the viewer falls back to the index. |
  | `(curated)` | Came from the `MANUAL_OVERRIDES` table in the generator rather than from the scorer. |

* Two `IDH_*` symbols can share one topic string (e.g. `IDH_VAV_CTRL` and
  `IDH_VAV2_CTRL`). Such entries appear **once**, with both names in the
  comment.

The header of `bsim-topic-map.txt` also lists the handful of pages whose slug
is spelled differently in `da/` and `en/` (casing, and `Projekt_`/`Project_`).
The Danish spelling is used in the map; fixing the content is out of scope for
this file.

## Regenerating

```
python topic-map/generate-draft.py
```

Inputs (read-only):

* `../BSim/DISVIEW/F1Help.h` — the 120 `#define IDH_… "subdir\\topic.htm"`
  macros. Read as cp1252 (it contains `natkøling.htm` and
  `indblæsningsstyring.htm`).
* `../BSim/BSIMHELP.HHP` — the old HTML Help project; the Danish comments in
  its `[FILES]` section name the owning dialog and are used as matching hints.
  Also read as cp1252.
* `da/SUMMARY.md` and `en/SUMMARY.md` — slug + title for every page. Pages are
  keyed by their numeric `NN_MM` prefix so both language titles can feed the
  matcher regardless of slug spelling differences.

Options:

* `--bsim PATH` — location of the BSim source tree (default: `../BSim`
  relative to this repo).
* `--out PATH` — write somewhere else entirely.
* `--force` — overwrite `bsim-topic-map.txt` (see below).

### Regeneration never clobbers hand edits

`bsim-topic-map.txt` is **hand-maintained**. Once it exists, running the
generator writes **`bsim-topic-map.draft.txt`** instead, so you can diff the
fresh draft against the maintained file and port over only what you want:

```
python topic-map/generate-draft.py
diff topic-map/bsim-topic-map.txt topic-map/bsim-topic-map.draft.txt
```

Only pass `--force` when you deliberately want to throw the current map away
and start from a fresh draft.

## How the matcher works (short version)

Each old topic is scored against every page of the book using an IDF-weighted
token overlap of:

* the old file name (`site_property` → `site`, `property`),
* the `IDH_*` symbol name (`IDH_SITE_PROP` → `site`, `prop` → `property`),
* the HHP dialog hint, if any,
* against each page's file-name tokens plus **both** its Danish and English
  title.

Danish/accented characters are folded (`ø`→`o`, `æ`→`ae`, `å`→`aa`), and a small
synonym table expands abbreviations and cross-language pairs (`ctrl`→`control`/
`regulering`, `natkoling`→`night cooling`, `modeloplysninger`→`model
information`, …). The old subdirectory gives a chapter bonus, derived from the
chapter folder names in `SUMMARY.md` (`simdb\` → `07SimDB_Database`,
`systems\` → `11Systems`, …) rather than hardcoded; chapter `24Miscellaneous`
gets a smaller bonus because most of the old per-dialog pages ended up there.

Every emitted slug is verified to exist as `da/<slug>.md` on disk before it is
written; a candidate whose file is missing is downgraded to `UNMATCHED`.

A short `MANUAL_OVERRIDES` table in the script fixes the topics whose old file
names carry too little signal (`bout.htm`, `row.htm`, `simdb-bm0.htm`, …) or
where the book contains near-duplicate pages. Add to it rather than fighting
the scorer, and record the reason in the trailing comment.
