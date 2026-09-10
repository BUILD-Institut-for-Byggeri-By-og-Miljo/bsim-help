#!/usr/bin/env node
/*
 * check-book.js -- structural checks on the help book SOURCES (da/, en/ and
 * topic-map/), run by `npm test` and by .github/workflows/tests.yml on every
 * push and pull request. Plain Node, no dependencies, no HonKit build needed.
 *
 * 1. "Relaterede emner" lists (BSim issue #136).
 *    plugins/page-toc lifts a trailing "Se også" / "See also" paragraph that
 *    is followed by a list of links into the "Relaterede emner" panel. A link
 *    in such a list that points at the page ITSELF (Systems_Heating.md's
 *    HeatCoolCtrl entry linked back to Systems_Heating.md - the report in
 *    #136), at a page that does not exist, or at a root-absolute path (which
 *    the panel resolves against the wrong base) shows up as a working-looking
 *    link that goes nowhere useful. Nothing in the build notices, so this does.
 *
 * 2. topic-map/bsim-topic-map.txt.
 *    Every entry must parse the way BuildHelp.Viewer/TopicMap.cs parses it,
 *    keys must be unique (the viewer silently keeps the first), and every
 *    target slug must correspond to a source page once copy-static.js has
 *    stripped the chapter/page numbers (09SimView/09_09_X.md -> SimView/X.html).
 *    An entry that fails this sends F1 in BSim to the front page without any
 *    error. BSim's own test suite (Tests/BSimTests/F1Help) checks the other
 *    direction: that every topic the app can send has an entry here.
 *
 * Exit code 1 when anything is wrong, with one line per finding.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');

/* Same test as plugins/page-toc/assets/website.js (RELATED_LABEL), applied to
   the markdown line with emphasis markers removed, since the panel tests the
   RENDERED paragraph text. Danish letters as \u escapes: pure ASCII file. */
const RELATED_LABEL = /^(se ogs\u00e5|relaterede emner|see also|related topics)\s*:?\s*$/i;
const LIST_ITEM_RE = /^\s*(?:[*+-]|\d+\.)\s+/;
const LINK_RE = /\[([^\]]*)\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g;
const SCHEME_RE = /^[a-z][a-z0-9+.-]*:/i;

/* copy-static.js's clean-URL rules. */
const CHAPTER_NUM_RE = /^\d+/;
const PAGE_NUM_RE = /^\d+_\d+_/;

function readLanguages() {
    /* LANGS.md drives HonKit's multi-language build; reuse it like copy-static.js. */
    const langs = [];
    const langsFile = path.join(repoRoot, 'LANGS.md');
    if (fs.existsSync(langsFile)) {
        const re = /\]\(\s*([^)\s\/]+)\/?\s*\)/g;
        const text = fs.readFileSync(langsFile, 'utf8');
        let m;
        while ((m = re.exec(text)) !== null) {
            const dir = path.join(repoRoot, m[1]);
            if (langs.indexOf(m[1]) === -1 && fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
                langs.push(m[1]);
            }
        }
    }
    return langs.length ? langs : ['da', 'en'];
}

function walkMarkdown(dir, out) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) {
            if (e.name === 'node_modules' || e.name === '_book') continue;
            walkMarkdown(p, out);
        } else if (/\.md$/i.test(e.name)) {
            out.push(p);
        }
    }
    return out;
}

function rel(p) {
    return path.relative(repoRoot, p).split(path.sep).join('/');
}

/* ---------------------------------------------------------------------------
 * 1. Related-topics lists
 * ------------------------------------------------------------------------- */

function checkRelatedTopics(languages) {
    const errors = [];
    let pages = 0;
    let lists = 0;
    let links = 0;

    const files = [];
    for (const lang of languages) walkMarkdown(path.join(repoRoot, lang), files);

    for (const file of files) {
        pages += 1;
        const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
        const pageDir = path.dirname(file);
        const pageAbs = path.resolve(file);

        for (let i = 0; i < lines.length; i++) {
            const label = lines[i].replace(/[*_]/g, '').trim();
            if (!RELATED_LABEL.test(label)) continue;

            let j = i + 1;
            while (j < lines.length && lines[j].trim() === '') j++;
            if (j >= lines.length || !LIST_ITEM_RE.test(lines[j])) continue;

            lists += 1;

            for (; j < lines.length && LIST_ITEM_RE.test(lines[j]); j++) {
                let m;
                LINK_RE.lastIndex = 0;
                while ((m = LINK_RE.exec(lines[j])) !== null) {
                    links += 1;
                    const text = m[1];
                    const target = m[2];
                    const where = rel(file) + ':' + (j + 1);
                    const entry = '[' + text + '](' + target + ')';

                    if (SCHEME_RE.test(target)) continue;          /* http(s):, mailto: */

                    const hash = target.indexOf('#');
                    const filePart = hash >= 0 ? target.slice(0, hash) : target;

                    if (filePart === '') {
                        errors.push(where + '  ' + entry + '  -- anchor on the page itself; a related topic must be another page');
                        continue;
                    }

                    if (filePart.startsWith('/')) {
                        errors.push(where + '  ' + entry + '  -- root-absolute path; the panel resolves links relative to the page, use ../<chapter>/<page>.md');
                        continue;
                    }

                    let decoded = filePart;
                    try { decoded = decodeURI(filePart); } catch (e) { /* keep as written */ }
                    const targetAbs = path.resolve(pageDir, decoded);

                    if (targetAbs.toLowerCase() === pageAbs.toLowerCase()) {
                        errors.push(where + '  ' + entry + '  -- links to the page itself (#136); point it at the page the text names');
                        continue;
                    }

                    if (!fs.existsSync(targetAbs)) {
                        let hint = '';
                        if (/\.html?$/i.test(filePart)) {
                            const asMd = targetAbs.replace(/\.html?$/i, '.md');
                            hint = fs.existsSync(asMd) ? ' (the source page is .md, link to that)' : '';
                        }
                        errors.push(where + '  ' + entry + '  -- target does not exist' + hint);
                        continue;
                    }

                    if (!/\.md$/i.test(filePart)) {
                        errors.push(where + '  ' + entry + '  -- target is not a .md page');
                    }
                }
            }
        }
    }

    return { errors: errors, pages: pages, lists: lists, links: links };
}

/* ---------------------------------------------------------------------------
 * 2. Topic map
 * ------------------------------------------------------------------------- */

/* Mirrors TopicMap.NormalizeKey. */
function normalizeKey(topic) {
    return topic.trim().replace(/\//g, '\\').replace(/^\\+/, '');
}

function parseTopicMap(text) {
    const entries = [];
    const invalid = [];
    const lines = text.split(/\r?\n/);
    for (let k = 0; k < lines.length; k++) {
        const line = lines[k].trim();
        if (line === '' || line[0] === '#') continue;
        const eq = line.indexOf('=');
        if (eq <= 0 || eq === line.length - 1) { invalid.push(k + 1); continue; }
        const key = normalizeKey(line.slice(0, eq));
        const value = line.slice(eq + 1).trim();
        if (!key || !value) { invalid.push(k + 1); continue; }
        entries.push({ key: key, value: value, line: k + 1 });
    }
    return { entries: entries, invalid: invalid };
}

/* Does a clean slug "Chapter/Page.html[#anchor]" name a source page
   <lang>/<NN>Chapter/<NN_NN_>Page.md in any language? */
function sourcePageFor(languages, slugIn) {
    let slug = slugIn.split('#')[0].trim().replace(/\\/g, '/').replace(/^\/+/, '');
    if (slug === '' || slug === '.') return { ok: true };
    if (slug.indexOf('..') !== -1) return { ok: false, why: "'..' in slug (the viewer refuses it)" };

    const parts = slug.split('/');
    if (parts.length !== 2) return { ok: false, why: 'expected exactly one Chapter/Page.html level' };

    const chapter = parts[0];
    const page = parts[1];
    if (!/\.html?$/i.test(page)) return { ok: false, why: 'slug does not end in .html' };
    const base = page.replace(/\.html?$/i, '').toLowerCase();

    for (const lang of languages) {
        const langDir = path.join(repoRoot, lang);
        for (const c of fs.readdirSync(langDir, { withFileTypes: true })) {
            if (!c.isDirectory()) continue;
            if (c.name.replace(CHAPTER_NUM_RE, '').toLowerCase() !== chapter.toLowerCase()) continue;
            for (const f of fs.readdirSync(path.join(langDir, c.name))) {
                if (!/\.md$/i.test(f)) continue;
                if (f.replace(/\.md$/i, '').replace(PAGE_NUM_RE, '').toLowerCase() === base) {
                    return { ok: true, file: lang + '/' + c.name + '/' + f };
                }
            }
        }
    }
    return { ok: false, why: 'no source page in ' + languages.join('/') + ' becomes this slug' };
}

function checkTopicMap(languages) {
    const errors = [];
    const mapFile = path.join(repoRoot, 'topic-map', 'bsim-topic-map.txt');
    if (!fs.existsSync(mapFile)) {
        errors.push('topic-map/bsim-topic-map.txt is missing');
        return { errors: errors, entries: 0 };
    }

    const parsed = parseTopicMap(fs.readFileSync(mapFile, 'utf8'));
    for (const line of parsed.invalid) {
        errors.push('topic-map/bsim-topic-map.txt:' + line + "  -- not '<oldpath>=<slug>'");
    }

    const seen = new Map();
    for (const e of parsed.entries) {
        const where = 'topic-map/bsim-topic-map.txt:' + e.line + '  ' + e.key + '=' + e.value;
        const lower = e.key.toLowerCase();
        if (seen.has(lower)) {
            errors.push(where + '  -- duplicate key, first defined on line ' + seen.get(lower) + ' (the viewer keeps that one)');
        } else {
            seen.set(lower, e.line);
        }
        const r = sourcePageFor(languages, e.value);
        if (!r.ok) errors.push(where + '  -- ' + r.why);
    }

    return { errors: errors, entries: parsed.entries.length };
}

/* ---------------------------------------------------------------------------
 * Report
 * ------------------------------------------------------------------------- */

const languages = readLanguages();
const related = checkRelatedTopics(languages);
const topics = checkTopicMap(languages);

console.log('check-book: languages ' + languages.join(', ') + '; ' + related.pages +
            ' pages, ' + related.lists + ' related-topics lists with ' + related.links +
            ' links; ' + topics.entries + ' topic-map entries.');

function report(title, errors) {
    if (!errors.length) {
        console.log('check-book: OK -- ' + title);
        return;
    }
    console.error('check-book: ' + errors.length + ' problem(s) -- ' + title);
    for (const e of errors) console.error('  ' + e);
}

report('related-topics lists link to another, existing page', related.errors);
report('topic map is unambiguous and every target is a source page', topics.errors);

const total = related.errors.length + topics.errors.length;
if (total) {
    console.error('check-book: FAILED with ' + total + ' problem(s).');
    process.exit(1);
}
console.log('check-book: all checks passed.');
