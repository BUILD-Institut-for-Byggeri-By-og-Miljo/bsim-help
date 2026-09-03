#!/usr/bin/env node
/*
 * copy-static.js -- post-build step for the BSim help book.
 *
 * `npm run build` runs `honkit build && node copy-static.js`.  This script does
 * three things, in this order:
 *
 *   1. Copies the site-root assets into _book/.  HonKit only copies files that
 *      live underneath a language directory (da/, en/), so anything that has to
 *      be served from the SITE ROOT -- currently the vendored, offline copy of
 *      MathJax 3 -- has to be copied in afterwards.
 *
 *   2. CLEAN URLs.  The authors keep the chapter/page numbers in the source file
 *      names (da/09SimView/09_09_SimView_Non_default_constructions.md) because
 *      that is what orders the pages in GitHub and VS Code.  The published book
 *      must not show them, so the numbers are stripped from the built tree and
 *      every reference in the built text files is rewritten to match:
 *
 *        _book/da/09SimView/09_09_SimView_Non_default_constructions.html
 *     -> _book/da/SimView/SimView_Non_default_constructions.html
 *
 *      Only the built output is renamed -- the sources keep their numbers.
 *      topic-map/bsim-topic-map.txt therefore also holds CLEAN slugs.
 *
 *   3. Fails the build if a built page still references a CDN.
 *
 * The BSim help viewer serves _book/ over a WebView2 virtual host with NO
 * network access, so every asset a page references must exist inside _book/.
 *
 * Plain Node fs, no dependencies.  Works on Node 16.7+ (fs.cpSync).
 */

'use strict';

const fs = require('fs');
const path = require('path');

const repoRoot = __dirname;
const bookDir = path.join(repoRoot, '_book');

// [source (relative to repo root), destination (relative to _book)]
const ENTRIES = [
    ['mathjax', 'mathjax']
];

// Windows: a freshly written directory is often still held open for a moment
// by the antivirus scanner or the search indexer, and renameSync then fails
// with EPERM/EBUSY. Retry a few times before giving up.
function renameWithRetry(from, to) {
    const delays = [50, 100, 200, 400, 800, 1600, 3200];
    for (let attempt = 0; ; attempt++) {
        try {
            fs.renameSync(from, to);
            return;
        } catch (err) {
            if (attempt >= delays.length ||
                !(err.code === 'EPERM' || err.code === 'EBUSY' || err.code === 'EACCES')) {
                throw err;
            }
            Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, delays[attempt]);
        }
    }
}

function fail(msg) {
    console.error('copy-static: ERROR ' + msg);
    process.exit(1);
}

function countFiles(dir) {
    let n = 0;
    let bytes = 0;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) {
            const sub = countFiles(p);
            n += sub.files;
            bytes += sub.bytes;
        } else {
            n += 1;
            bytes += fs.statSync(p).size;
        }
    }
    return { files: n, bytes: bytes };
}

if (!fs.existsSync(bookDir)) {
    fail('_book/ does not exist -- run `honkit build` first.');
}

if (typeof fs.cpSync !== 'function') {
    fail('this Node.js is too old; fs.cpSync (Node >= 16.7) is required. ' +
         'Found ' + process.version + '.');
}

let totalFiles = 0;
let totalBytes = 0;

for (const [srcRel, dstRel] of ENTRIES) {
    const src = path.join(repoRoot, srcRel);
    const dst = path.join(bookDir, dstRel);

    if (!fs.existsSync(src)) {
        fail('missing source "' + srcRel + '". It is vendored in this repo and ' +
             'must be committed -- do not fetch it from a CDN.');
    }

    fs.rmSync(dst, { recursive: true, force: true });
    fs.cpSync(src, dst, { recursive: true });

    const stat = countFiles(dst);
    totalFiles += stat.files;
    totalBytes += stat.bytes;
    console.log('copy-static: ' + srcRel + ' -> _book/' + dstRel +
                ' (' + stat.files + ' files, ' +
                (stat.bytes / 1024 / 1024).toFixed(2) + ' MB)');
}

// ---------------------------------------------------------------------------
// Clean URLs
// ---------------------------------------------------------------------------
//
// Rules (see the file header):
//   * a directory DIRECTLY under _book/<lang> whose name starts with digits
//     loses those digits:            09SimView -> SimView
//   * a file anywhere inside such a directory whose name starts with NN_NN_
//     loses that prefix:             24_25_Site_Property.html -> Site_Property.html
//   * nothing else is touched: _book/gitbook, _book/mathjax, the language-root
//     files (index.html, styles.css, search_plus_index.json, ...) and the
//     assets/ sub-folders keep their names.
//
// The references are then rewritten from the EXPLICIT rename map that was just
// built from the filesystem -- never from a generic "strip digits" regex -- so a
// number that happens to be part of prose or of a file we did not rename can
// never be mangled.  Old names are long and unique, so plain string replacement
// is safe; it is done in ONE pass with an alternation sorted longest-first, so a
// short old name can never eat into a longer one and no replacement cascades.

const LANG_DIR_RE = /^[A-Za-z]{2}(?:[-_][A-Za-z]{2,4})?$/;
const CHAPTER_NUM_RE = /^\d+/;          // leading digits of a chapter folder
const PAGE_NUM_RE = /^\d+_\d+_/;        // NN_NN_ page prefix
const TEXT_FILE_RE = /\.(html?|json|css|js|xml|txt|md)$/i;

function readLanguages() {
    // LANGS.md drives HonKit's multi-language build; reuse it so a new language
    // needs no change here.
    const langsFile = path.join(repoRoot, 'LANGS.md');
    const langs = [];
    if (fs.existsSync(langsFile)) {
        const re = /\]\(\s*([^)\s\/]+)\/?\s*\)/g;
        const text = fs.readFileSync(langsFile, 'utf8');
        let m;
        while ((m = re.exec(text)) !== null) {
            const lang = m[1];
            if (!LANG_DIR_RE.test(lang) || langs.indexOf(lang) !== -1) continue;
            const dir = path.join(bookDir, lang);
            if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) langs.push(lang);
        }
    }
    if (!langs.length) {
        fail('no language directories found -- expected LANGS.md to list e.g. ' +
             '"[Dansk](da/)" and _book/da to exist.');
    }
    return langs;
}

const languages = readLanguages();

// old relative path (POSIX, relative to _book) -> new relative path
const renamePlan = { dirs: [], files: [] };
// old NAME (a single path component, and the same without its extension)
// -> new NAME.  This is what the reference rewrite uses.
const nameMap = new Map();

function addName(oldName, newName) {
    if (oldName === newName) return;
    const seen = nameMap.get(oldName);
    if (seen !== undefined && seen !== newName) {
        fail('name "' + oldName + '" would be rewritten to both "' + seen +
             '" and "' + newName + '" -- refusing to guess.');
    }
    nameMap.set(oldName, newName);
}

// Records the name every entry of one directory ends up with, so a rename that
// would land on a sibling (renamed or not) is caught before anything moves.
function claim(taken, relDir, newName, oldName) {
    const key = newName.toLowerCase();   // Windows/macOS are case-insensitive
    const other = taken.get(key);
    if (other !== undefined && other !== oldName) {
        fail('name collision in _book/' + relDir + ': "' + other + '" and "' +
             oldName + '" both become "' + newName + '". Rename one of them in ' +
             'the sources (da/ and en/).');
    }
    taken.set(key, oldName);
}

function planFiles(absDir, relOld, relNew) {
    const taken = new Map();
    const entries = fs.readdirSync(absDir, { withFileTypes: true })
                      .sort((a, b) => (a.name < b.name ? -1 : 1));

    for (const e of entries) {
        let newName = e.name;
        if (!e.isDirectory() && PAGE_NUM_RE.test(e.name)) {
            newName = e.name.replace(PAGE_NUM_RE, '');
            const ext = path.extname(newName);
            if (!newName || !path.basename(newName, ext)) {
                fail('stripping the page number from _book/' + relOld + '/' +
                     e.name + ' would leave an empty file name.');
            }
        }
        claim(taken, relOld, newName, e.name);

        if (e.isDirectory()) {
            // Sub-folders (assets/) keep their names, but files inside them do not.
            planFiles(path.join(absDir, e.name), relOld + '/' + e.name,
                      relNew + '/' + e.name);
        } else if (newName !== e.name) {
            renamePlan.files.push({
                abs: path.join(absDir, e.name),
                absNew: path.join(absDir, newName),
                relOld: relOld + '/' + e.name,
                relNew: relNew + '/' + newName
            });
            addName(e.name, newName);
            // ...and without the extension, so `.md` links left in stray places
            // and extension-less references are covered too.
            const ext = path.extname(e.name);
            if (ext) addName(path.basename(e.name, ext), path.basename(newName, ext));
        }
    }
}

for (const lang of languages) {
    const langAbs = path.join(bookDir, lang);
    const taken = new Map();
    const entries = fs.readdirSync(langAbs, { withFileTypes: true })
                      .sort((a, b) => (a.name < b.name ? -1 : 1));

    for (const e of entries) {
        if (!e.isDirectory()) {
            // Language-root files (index.html, styles.css, search_plus_index.json)
            // are never renamed, but they still occupy their name.
            claim(taken, lang, e.name, e.name);
            continue;
        }
        let newName = e.name;
        if (CHAPTER_NUM_RE.test(e.name)) {
            newName = e.name.replace(CHAPTER_NUM_RE, '');
            if (!newName) {
                fail('stripping the chapter number from _book/' + lang + '/' +
                     e.name + ' would leave an empty directory name.');
            }
        }
        claim(taken, lang, newName, e.name);

        if (newName !== e.name) {
            renamePlan.dirs.push({
                abs: path.join(langAbs, e.name),
                absNew: path.join(langAbs, newName),
                relOld: lang + '/' + e.name,
                relNew: lang + '/' + newName
            });
            addName(e.name, newName);
        }
        planFiles(path.join(langAbs, e.name), lang + '/' + e.name,
                  lang + '/' + newName);
    }
}

// Apply: files first (still addressed through their old, numbered directory),
// then the directories themselves.
for (const r of renamePlan.files) renameWithRetry(r.abs, r.absNew);
for (const r of renamePlan.dirs) {
    if (fs.existsSync(r.absNew)) {
        fail('cannot rename _book/' + r.relOld + ' -> _book/' + r.relNew +
             ': the target already exists.');
    }
    renameWithRetry(r.abs, r.absNew);
}

// --- rewrite the references -------------------------------------------------

function collectTextFiles(dir, out) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) collectTextFiles(p, out);
        else if (TEXT_FILE_RE.test(e.name)) out.push(p);
    }
    return out;
}

const textFiles = [];
for (const lang of languages) collectTextFiles(path.join(bookDir, lang), textFiles);
const rootIndex = path.join(bookDir, 'index.html');
if (fs.existsSync(rootIndex)) textFiles.push(rootIndex);

let refsRewritten = 0;
let filesRewritten = 0;
let oldNameRe = null;

if (nameMap.size) {
    const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const oldNames = Array.from(nameMap.keys())
        .sort((a, b) => b.length - a.length || (a < b ? -1 : 1));   // longest first
    oldNameRe = new RegExp(oldNames.map(escape).join('|'), 'g');

    for (const p of textFiles) {
        const raw = fs.readFileSync(p);
        const text = raw.toString('utf8');
        // Never re-encode a file we cannot round-trip (a stray cp1252 file would
        // lose its Danish characters).
        if (!Buffer.from(text, 'utf8').equals(raw)) {
            console.warn('copy-static: WARNING skipping non-UTF-8 file ' +
                         path.relative(bookDir, p));
            continue;
        }
        let hits = 0;
        const out = text.replace(oldNameRe, (m) => { hits++; return nameMap.get(m); });
        if (hits) {
            fs.writeFileSync(p, out, 'utf8');
            refsRewritten += hits;
            filesRewritten += 1;
        }
    }
}

// --- verify -----------------------------------------------------------------

const leftovers = [];

if (oldNameRe) {
    for (const p of textFiles) {
        const text = fs.readFileSync(p, 'utf8');
        oldNameRe.lastIndex = 0;
        const m = oldNameRe.exec(text);
        if (m) leftovers.push(path.relative(bookDir, p) + '  (' + m[0] + ')');
    }
}

for (const lang of languages) {
    (function scanNames(dir, rel, top) {
        for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
            const childRel = rel + '/' + e.name;
            if (e.isDirectory()) {
                if (top && CHAPTER_NUM_RE.test(e.name)) leftovers.push(childRel);
                scanNames(path.join(dir, e.name), childRel, false);
            } else if (!top && PAGE_NUM_RE.test(e.name)) {
                leftovers.push(childRel);
            }
        }
    })(path.join(bookDir, lang), lang, true);
}

if (leftovers.length) {
    console.error('copy-static: ERROR ' + leftovers.length + ' leftover ' +
                  'reference(s) to a numbered name after the clean-URL rewrite:');
    for (const l of leftovers.slice(0, 20)) console.error('  ' + l);
    process.exit(1);
}

console.log('copy-static: clean URLs -- ' + renamePlan.dirs.length +
            ' directory/-ies and ' + renamePlan.files.length + ' file(s) renamed; ' +
            refsRewritten + ' reference(s) rewritten in ' + filesRewritten +
            ' of ' + textFiles.length + ' text file(s).');

// Guard rail: the whole point of vendoring is that _book never reaches out to
// a CDN at runtime.  Fail the build if a page still points at one.
const CDN_PATTERN = /https?:\/\/(cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|unpkg\.com|ajax\.googleapis\.com|fonts\.googleapis\.com|fonts\.gstatic\.com)/i;
const offenders = [];

(function scan(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) {
            if (e.name === 'mathjax') continue;   // vendored library, not our HTML
            scan(p);
        } else if (/\.html?$/i.test(e.name)) {
            const text = fs.readFileSync(p, 'utf8');
            const m = text.match(CDN_PATTERN);
            if (m) offenders.push(path.relative(bookDir, p) + '  (' + m[0] + ')');
        }
    }
})(bookDir);

if (offenders.length) {
    console.error('copy-static: ERROR ' + offenders.length +
                  ' built page(s) still reference a CDN -- the viewer is offline:');
    for (const o of offenders.slice(0, 20)) console.error('  ' + o);
    process.exit(1);
}

console.log('copy-static: OK -- ' + totalFiles + ' file(s), ' +
            (totalBytes / 1024 / 1024).toFixed(2) + ' MB copied; ' +
            'no CDN references found in _book HTML.');
