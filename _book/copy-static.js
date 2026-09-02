#!/usr/bin/env node
/*
 * copy-static.js -- post-build step for the BSim help book.
 *
 * HonKit only copies files that live underneath a language directory (da/, en/)
 * into _book/.  Anything that has to be served from the SITE ROOT -- currently
 * the vendored, offline copy of MathJax 3 -- therefore has to be copied in
 * afterwards.  `npm run build` runs `honkit build && node copy-static.js`.
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
