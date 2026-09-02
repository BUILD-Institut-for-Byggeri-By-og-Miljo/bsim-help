#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate a draft BSim F1-help topic map.

Reads the legacy BSim (MFC) help topic definitions and fuzzy-matches every old
CHM topic path to a page of the HonKit book in this repository, so that the new
standalone help viewer can resolve an F1 request coming from BSim.

Inputs (read-only, outside this repo):
  <bsim>/DISVIEW/F1Help.h   120 `#define IDH_XXX "subdir\\topic.htm"` macros.
                            ANSI/cp1252 encoded (contains natkoeling.htm and
                            indblaesningsstyring.htm with Danish characters).
  <bsim>/BSIMHELP.HHP       Old HTML Help project. Its [FILES] section carries
                            Danish comments naming the owning dialog / UI
                            element -- used as an extra matching hint.

Inputs (this repo):
  da/SUMMARY.md, en/SUMMARY.md   ToC: slug + title per page. Slugs are
                                 language-neutral (modulo a few casing
                                 differences), so pages are keyed by their
                                 numeric (chapter, page) prefix and both the
                                 Danish and the English title feed the matcher.

Output:
  topic-map/bsim-topic-map.txt        (first run)
  topic-map/bsim-topic-map.draft.txt  (if bsim-topic-map.txt already exists --
                                       the committed map is hand-maintained and
                                       must never be clobbered blindly)
Use --force to overwrite bsim-topic-map.txt anyway.

Stdlib only, Python 3.8+.
"""

import argparse
import os
import re
import sys
import unicodedata
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
DEFAULT_BSIM = os.path.abspath(os.path.join(REPO, "..", "BSim"))

# --------------------------------------------------------------------------
# Tokenisation
# --------------------------------------------------------------------------

# Tokens that carry almost no discriminating power on their own.
STOPWORDS = {
    "htm", "html", "md", "the", "of", "a", "an", "in", "for", "and", "to", "on",
    "with", "af", "i", "til", "og", "en", "et", "der", "med", "som", "page",
    "main", "menu2",
}

# Abbreviation / language expansions. A token is replaced by itself *plus*
# these extra tokens, so both the literal and the expanded form can match.
SYNONYMS = {
    "prop": ["property"],
    "props": ["property"],
    "ctrl": ["control", "regulering"],
    "reg": ["regulation", "regulering", "control"],
    "regulering": ["control", "regulation"],
    "styring": ["control"],
    "mat": ["material"],
    "be": ["buildingelement"],
    "bm": ["buildingmaterial"],
    "be0": ["buildingelement"],
    "bm0": ["buildingmaterial"],
    "tz": ["thermal", "zone"],
    "nat": ["natural", "naturlig"],
    "natvent": ["natural", "ventilation"],
    "nv": ["natural", "ventilation"],
    "nvvk": ["nvcool"],
    "nvoptions": ["natural", "ventilation", "options"],
    "vent": ["ventilation"],
    "venting": ["venting", "udluftning"],
    "sf": ["solar", "light", "factor"],
    "doc": ["documentation"],
    "parm": ["parameters"],
    "parms": ["parameters"],
    "parametres": ["parameters"],
    "parametre": ["parameters"],
    "elem": ["element"],
    "buildelem": ["building", "element"],
    "config": ["configuration", "setup", "options"],
    "app": ["application"],
    "apps": ["application"],
    "refpoint": ["reference", "point"],
    "coldbridge": ["thermal", "bridge"],
    "cold": ["thermal", "kuldebro"],
    "bridges": ["bridge", "kuldebroer"],
    "kuldebroer": ["thermal", "bridge"],
    "bout": ["about"],
    "struktur": ["structure"],
    "strukturen": ["structure"],
    "modeloplysninger": ["model", "information"],
    "skygger": ["shadows", "shadow"],
    "vavregulering": ["vav", "regulering", "control"],
    "fugtregulering": ["fugt", "moisture", "regulering", "control"],
    "fugt": ["moisture"],
    "natkoling": ["night", "cooling", "natkoeling"],
    "indblasningsstyring": ["inlet", "control", "indblaesning"],
    "rumtemperaturregulering": ["room", "zone", "temperature", "control"],
    "rumtemperatur": ["room", "temperature"],
    "roomtemp": ["room", "temperature", "rumtemperatur"],
    "climate": ["klimadata", "weather", "vejrdata"],
    "klimadata": ["climate", "weather"],
    "weather": ["climate", "klimadata", "vejrdata"],
    "recirculation": ["recirkulation"],
    "heatbalance": ["heat", "balance", "varmebalance"],
    "heatpump": ["heat", "pump", "varmepumpe"],
    "floorheating": ["floor", "heating", "gulvvarme"],
    "floor": ["floor", "gulv"],
    "gulvvarme": ["floor", "heating"],
    "dagslys": ["daylight"],
    "punkt": ["point"],
    "plan": ["plane"],
    "solceller": ["pv", "solar"],
    "insert": ["insert", "indsaette"],
    "persons": ["people", "persons"],
    "people": ["persons", "people"],
    "windoor": ["windoor"],
    "graf": ["graph"],
    "simlight": ["simlight", "daylight"],
    "contructionlayer": ["construction", "layer"],
    "constructionlayer": ["construction", "layer"],
    "materialamount": ["material", "amount"],
    "transmittance": ["userdefined", "user", "defined"],
    "pcm": ["pcm"],
    "moist": ["moisture"],
    "glazing": ["glazing"],
    "frame": ["frame"],
    "finish": ["finish"],
    "environment": ["environment"],
    "cfd": ["cfd"],
    "pwizard2": ["project", "wizard", "projekt", "2"],
    "pwizard3": ["project", "wizard", "projekt", "3"],
    "wizard": ["wizard"],
    "shutter": ["shutter", "skodde"],
    "shading": ["shading", "solafskaermning"],
    "blind": ["blind", "lamel"],
    "glare": ["glare", "blaending"],
    "extsensctrl": ["external", "sensor", "control"],
    "blindctrl": ["blind", "control"],
    "glarectrl": ["glare", "control"],
    "tempfactor": ["temp", "temperature", "factor", "temperaturfaktor"],
    "tempfac": ["temp", "temperature", "factor"],
    "scale": ["scale"],
    "override": ["override"],
    "split": ["edit", "geometry"],
    "edge": ["geometry"],
    "hole": ["opening", "windoor"],
    "sun": ["sun", "sol"],
    "date": ["menu"],
    "ashrae": ["ashrae"],
    "row": ["fixed", "format", "fast"],
    "table": ["tables", "table"],
    "tables": ["table", "tables"],
    "simulation": ["simulering", "simulation"],
    "simulations": ["simulering", "simulation"],
    "options": ["options", "optioner"],
    "description": ["description", "beskrivelse"],
    "beskrivelse": ["description"],
    "ground": ["ground", "jord"],
    "site": ["site"],
    "room": ["room", "space", "rum"],
    "rum": ["room", "space"],
    "building": ["building", "bygning"],
    "bygning": ["building"],
    "move": ["move", "flytte"],
    "index": ["index", "stikord"],
}

_FOLD = {
    "æ": "ae", "Æ": "ae",
    "ø": "o", "Ø": "o",
    "å": "aa", "Å": "aa",
}


def fold(text):
    """Lowercase and fold Danish/accented characters to ASCII."""
    out = []
    for ch in text:
        if ch in _FOLD:
            out.append(_FOLD[ch])
        else:
            out.append(ch)
    text = "".join(out)
    text = unicodedata.normalize("NFKD", text)
    text = "".join(c for c in text if not unicodedata.combining(c))
    return text.lower()


_SPLIT_RE = re.compile(r"[^a-z0-9]+")


def tokenize(text, expand=True):
    """Fold, split on non-alphanumerics, drop stopwords, expand synonyms."""
    raw = [t for t in _SPLIT_RE.split(fold(text)) if t]
    out = []
    for t in raw:
        if t in STOPWORDS:
            continue
        out.append(t)
        if expand:
            for extra in SYNONYMS.get(t, ()):
                if extra not in STOPWORDS:
                    out.append(extra)
    # de-duplicate, keep order
    seen = set()
    res = []
    for t in out:
        if t not in seen:
            seen.add(t)
            res.append(t)
    return res


def tok_match(a, b):
    """1.0 for an exact token match, 0.7 for a prefix match, else 0."""
    if a == b:
        return 1.0
    if len(a) >= 5 and b.startswith(a):
        return 0.7
    if len(b) >= 5 and a.startswith(b):
        return 0.7
    return 0.0


def similarity(a_tokens, b_tokens, idf):
    """IDF-weighted, F1-style similarity between two token bags."""
    if not a_tokens or not b_tokens:
        return 0.0
    a_hit = 0.0
    a_tot = 0.0
    for a in a_tokens:
        w = idf.get(a, 1.0)
        a_tot += w
        best = max((tok_match(a, b) for b in b_tokens), default=0.0)
        a_hit += w * best
    b_hit = 0.0
    b_tot = 0.0
    for b in b_tokens:
        w = idf.get(b, 1.0)
        b_tot += w
        best = max((tok_match(a, b) for a in a_tokens), default=0.0)
        b_hit += w * best
    if a_tot == 0 or b_tot == 0:
        return 0.0
    p = a_hit / a_tot
    r = b_hit / b_tot
    if p + r == 0:
        return 0.0
    return 2 * p * r / (p + r)


# --------------------------------------------------------------------------
# Input parsing
# --------------------------------------------------------------------------

DEFINE_RE = re.compile(
    r'^\s*#define\s+(IDH_\w+)\s+"([^"]+)"\s*(?://\s*(.*))?$'
)


def read_ansi(path):
    with open(path, "rb") as fh:
        return fh.read().decode("cp1252")


def parse_f1help(path):
    """-> list of dicts: idh, topic (runtime value), fragment, comment."""
    topics = []
    for line in read_ansi(path).splitlines():
        m = DEFINE_RE.match(line)
        if not m:
            continue
        idh, raw, comment = m.group(1), m.group(2), (m.group(3) or "").strip()
        # C string literal -> runtime value: "\\" is a single backslash.
        topic = raw.replace("\\\\", "\\")
        frag = ""
        if "#" in topic:
            topic_wo, frag = topic.split("#", 1)
            frag = frag.strip()
        else:
            topic_wo = topic
        topics.append({
            "idh": idh,
            "topic": topic,          # full key, fragment included
            "path": topic_wo,        # without fragment
            "fragment": frag,
            "comment": comment,
        })
    return topics


HHP_RE = re.compile(r"^([^\s/]+\.htm)\s*(?://\s*(.*))?$", re.IGNORECASE)


def parse_hhp(path):
    """[FILES] section -> {lowercased old topic basename: dialog hint}."""
    hints = {}
    if not os.path.exists(path):
        return hints
    in_files = False
    for line in read_ansi(path).splitlines():
        s = line.strip()
        if not s:
            continue
        if s.startswith("["):
            in_files = s.lower() == "[files]"
            continue
        if not in_files:
            continue
        m = HHP_RE.match(s)
        if not m:
            continue
        hint = (m.group(2) or "").strip()
        # "ingen link" / "link ikke til denne side" carry no dialog information.
        if re.match(r"^(ingen link|link ikke)", fold(hint)):
            hint = ""
        hints[m.group(1).lower()] = hint
    return hints


SUMMARY_RE = re.compile(r"^\s*\*\s*\[(.+?)\]\(([^)]+\.md)\)\s*$")
PAGE_KEY_RE = re.compile(r"(\d{2})[^/]*/(\d{2})_(\d{2,3})_")


def parse_summary(path):
    """-> list of (page_key, slug_without_extension, title).

    page_key is the numeric (chapter, page) prefix, e.g. ('24', '25'); it is
    the language-neutral identity of a page and is robust against the casing
    and wording differences that exist between da/ and en/ file names.
    """
    pages = []
    in_comment = False
    for line in open(path, encoding="utf-8"):
        s = line.strip()
        if s.startswith("<!--"):
            in_comment = True
        if in_comment:
            if "-->" in s:
                in_comment = False
            continue
        m = SUMMARY_RE.match(line)
        if not m:
            continue
        title, rel = m.group(1).strip(), m.group(2).strip()
        rel = rel.replace("\\", "/")
        km = PAGE_KEY_RE.search(rel)
        if not km:
            continue
        pages.append(((km.group(2), km.group(3)), rel[:-3], title))
    return pages


HEADING_RE = re.compile(r"^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$")
ANCHOR_RE = re.compile(r'(?:name|id)\s*=\s*["\']([^"\']+)["\']', re.IGNORECASE)


def page_anchors(md_path):
    """Anchors a HonKit page offers: heading slugs plus explicit name/id."""
    anchors = {}
    if not os.path.exists(md_path):
        return anchors
    try:
        text = open(md_path, encoding="utf-8").read()
    except OSError:
        return anchors
    for line in text.splitlines():
        m = HEADING_RE.match(line)
        if m:
            plain = re.sub(r"<[^>]+>", " ", m.group(1))
            plain = re.sub(r"[*_`\[\]()]", "", plain)
            slug = re.sub(r"[^a-z0-9]+", "-", fold(plain)).strip("-")
            if slug:
                anchors.setdefault(fold(slug), slug)
        for a in ANCHOR_RE.findall(line):
            anchors.setdefault(fold(a), a)
    return anchors


# --------------------------------------------------------------------------
# Matching
# --------------------------------------------------------------------------

# Curated corrections for topics where the fuzzy score picks a plausible but
# wrong page (old file names such as "row.htm" or "bout.htm" simply carry too
# little signal, and the book contains several near-duplicate pages). Keep this
# list short; everything else must be matched by the scorer.
# Key   = old topic path, lowercased, forward slashes, no fragment.
# Value = (chapter, page) page key, optionally + "LOW" when the curated choice
#         is itself a judgement call, or None for the language root index.
MANUAL_OVERRIDES = {
    "tsbi5/row.htm": ("24", "61", "LOW"),     # Climate data, fixed format
    "tsbi5/ashrae.htm": ("24", "76"),         # ASHRAE climate data
    "tsbi5/climate.htm": ("13", "03"),        # Converting weather data
    "bout.htm": ("06", "02"),                 # About BSim
    "struktur.htm": ("06", "01"),             # Structure of BSim
    "xsun/xsun.htm": ("14", "01"),            # XSun main page (24_20 is the menu)
    "applications/app_config.htm": ("24", "19", "LOW"),  # Setting up applications
    "simview/modeloplysninger.htm": ("09", "11"),  # Model information
    "simview/manual_sf.htm": ("10", "07"),    # Solar light factors for WinDoors
    "simview/skygger.htm": ("10", "05"),      # Shadows from the surroundings
    "simview/simview-add_room.htm": ("09", "15"),      # Creating a space
    "simview/simview-add_windoor.htm": ("10", "08"),   # Adding opening/WinDoor
    "simview/simview-edit_geometry.htm": ("09", "02"), # Editing model geometry
    "simview/nat_vent.htm": ("24", "71"),   # WinDoor property, NaturalVentilation tab
    "simdb/simdb-bm0.htm": ("07", "06"),               # BuildingMaterial main page
    "simdb/simdb-be-windoor.htm": ("07", "05"),        # Material layers, WinDoor
    "simdb/moist-table.htm": ("24", "43"),             # Sorption/desorption table
    "simlight/simlight_punkt.htm": ("15", "02"),       # Daylight at a point
    "systems/systems_floorheating.htm": ("11", "06"),  # Gulvvarme, System
    "systems/floor_heat_water_ctrl.htm": ("24", "74", "LOW"),  # Radiant ctrl
    "help/index_chm.htm": None,               # language root index -> "."
}


# Score thresholds (see match_topics).
MIN_SCORE = 0.55     # below this: no candidate at all
HIGH_SCORE = 2.20    # absolute score needed for HIGH confidence
HIGH_MARGIN = 0.45   # ...and this much clear water over the runner-up


def chapter_hints(chapters):
    """Derive subdir -> preferred chapter numbers from the chapter folder names.

    e.g. subdir "simdb" matches folder "07SimDB_Database"  -> chapter 07.
    Nothing is hardcoded: the folder names in SUMMARY.md decide.
    """
    hints = defaultdict(set)
    for num, name in chapters.items():
        folded = fold(name)
        for sub in ("simview", "simdb", "simdxf", "simlight", "simpv",
                    "systems", "tsbi5", "xsun", "radiance", "kappa"):
            if sub in folded:
                hints[sub].add(num)
    return hints


def build_pages(repo):
    """Merge da/ and en/ SUMMARY entries into one page record per page key."""
    da = parse_summary(os.path.join(repo, "da", "SUMMARY.md"))
    en = parse_summary(os.path.join(repo, "en", "SUMMARY.md"))
    en_by_key = {k: (slug, title) for k, slug, title in en}

    pages = {}
    for key, slug, da_title in da:
        en_slug, en_title = en_by_key.get(key, (None, ""))
        pages[key] = {
            "key": key,
            "slug": slug,               # da slug, verified against disk
            "en_slug": en_slug,
            "da_title": da_title,
            "en_title": en_title,
            "chapter": key[0],
            "md": os.path.join(repo, "da", slug.replace("/", os.sep) + ".md"),
        }
    return pages


def index_pages(pages):
    """Attach token bags and compute IDF weights over the whole book."""
    df = defaultdict(int)
    for p in pages.values():
        base = p["slug"].rsplit("/", 1)[-1]
        base = re.sub(r"^\d{2}_\d{2,3}_", "", base)
        fn_tokens = tokenize(base)
        if p["en_slug"]:
            en_base = re.sub(r"^\d{2}_\d{2,3}_", "",
                             p["en_slug"].rsplit("/", 1)[-1])
            for t in tokenize(en_base):
                if t not in fn_tokens:
                    fn_tokens.append(t)
        p["fn_tokens"] = fn_tokens
        p["da_tokens"] = tokenize(p["da_title"])
        p["en_tokens"] = tokenize(p["en_title"])
        for t in set(fn_tokens) | set(p["da_tokens"]) | set(p["en_tokens"]):
            df[t] += 1

    n = max(len(pages), 1)
    idf = {}
    for t, c in df.items():
        # 1.0 for a token unique to one page, ~0.25 for a very common one.
        idf[t] = max(0.25, min(1.0, 1.0 - (c - 1) / (n * 0.06)))
    return idf


def score_page(page, old_tokens, idh_tokens, hint_tokens, pref_chapters, idf):
    fn = page["fn_tokens"]
    titles = (page["da_tokens"], page["en_tokens"])

    s = 3.0 * similarity(old_tokens, fn, idf)
    s += 2.0 * max(similarity(old_tokens, t, idf) for t in titles)
    s += 1.2 * similarity(idh_tokens, fn, idf)
    s += 1.0 * max(similarity(idh_tokens, t, idf) for t in titles)
    if hint_tokens:
        s += 1.4 * max([similarity(hint_tokens, fn, idf)] +
                       [similarity(hint_tokens, t, idf) for t in titles])
    if page["chapter"] in pref_chapters:
        s += 0.45
    elif page["chapter"] == "24":
        # Chapter 24 "Miscellaneous" is where most of the old per-dialog pages
        # ended up, so it stays a reasonable default target.
        s += 0.15
    return s


def match_topics(topics, pages, hhp_hints, idf, hints_by_sub):
    results = []
    page_list = list(pages.values())

    for t in topics:
        norm_path = t["path"].replace("\\", "/").lower()
        base = norm_path.rsplit("/", 1)[-1]
        sub = norm_path.rsplit("/", 1)[0] if "/" in norm_path else ""

        hint = hhp_hints.get(base, "")
        pref = hints_by_sub.get(sub, set())

        old_tokens = tokenize(re.sub(r"\.html?$", "", base))
        idh_tokens = tokenize(t["idh"][4:])  # strip "IDH_"
        hint_tokens = tokenize(hint) if hint else []

        entry = {
            "topic": t,
            "hint": hint,
            "page": None,
            "score": 0.0,
            "runner_up": 0.0,
            "confidence": "UNMATCHED",
            "source": "fuzzy",
        }

        if norm_path in MANUAL_OVERRIDES:
            ov = MANUAL_OVERRIDES[norm_path]
            entry["source"] = "curated"
            if ov is None:
                entry["confidence"] = "INDEX"
                results.append(entry)
                continue
            key, conf = (ov[0], ov[1]), (ov[2] if len(ov) > 2 else "HIGH")
            if key in pages:
                entry["page"] = pages[key]
                entry["confidence"] = conf
                results.append(entry)
                continue
            print("!! override for %s points at unknown page %s"
                  % (norm_path, key), file=sys.stderr)

        scored = sorted(
            ((score_page(p, old_tokens, idh_tokens, hint_tokens, pref, idf), p)
             for p in page_list),
            key=lambda x: (-x[0], x[1]["key"]),
        )
        best, best_page = scored[0]
        second = scored[1][0] if len(scored) > 1 else 0.0
        entry["score"] = best
        entry["runner_up"] = second

        # Thresholds calibrated against the 118 real topics: a clearly correct
        # match typically scores 4-8 with a margin of >= 0.5 over the runner-up.
        # Anything weaker is emitted but flagged for human review.
        if best < MIN_SCORE:
            entry["confidence"] = "UNMATCHED"
        else:
            entry["page"] = best_page
            margin = best - second
            if best >= HIGH_SCORE and margin >= HIGH_MARGIN:
                entry["confidence"] = "HIGH"
            else:
                entry["confidence"] = "LOW"
        results.append(entry)
    return results


# --------------------------------------------------------------------------
# Emit
# --------------------------------------------------------------------------

HEADER = """\
# BSim topic map -- old CHM help topic  ->  HonKit book page
#
# Generated by topic-map/generate-draft.py; HAND-MAINTAINED after the first
# draft.  Re-running the generator writes bsim-topic-map.draft.txt when this
# file already exists, so hand edits are never clobbered.
#
# Format, one entry per line:
#     <oldpath>=<slug>.html[#anchor]
#
#   <oldpath>  The topic string BSim passes to the help viewer, exactly as it
#              appears at runtime: backslash separators, and the "#fragment"
#              included when F1Help.h defines one (e.g.
#              Systems\\natural_ventilation.htm#Opening).  Note that F1Help.h
#              writes these as C string literals with doubled backslashes; the
#              keys below use the single-backslash runtime value.
#              Look-ups should be case-insensitive: F1Help.h mixes
#              "Systems\\..." and "systems\\...".
#   <slug>     Page path relative to the language root, without the language
#              prefix, e.g. 24Miscellaneous/24_25_Site_Property.html.  The same
#              slug is used for da/ and en/ -- the viewer prefixes the language.
#   #anchor    Present only when the old fragment maps onto a real anchor of
#              the target page; otherwise the page is opened at the top.
#
#   The special value "." means "the language root index" (open the book's
#   front page for the current language) -- used for IDH_INDEX.
#
# Lines starting with "#" are comments.  Each entry is preceded by a comment
# naming the IDH symbol(s) and the match confidence:
#     HIGH            trust it
#     LOW-CONFIDENCE  best fuzzy candidate, please verify
#     UNMATCHED       no candidate; entry commented out, needs a human
#
"""


def slug_to_html(slug):
    return slug + ".html"


def emit(results, pages, repo, out_path):
    # Group by topic key (a few topics are shared by two IDH symbols).
    order = []
    grouped = {}
    for r in results:
        key = r["topic"]["topic"]
        if key not in grouped:
            grouped[key] = {"idhs": [], "entry": r}
            order.append(key)
        grouped[key]["idhs"].append(r["topic"]["idh"])

    stats = {"HIGH": 0, "LOW": 0, "UNMATCHED": 0, "INDEX": 0}
    missing_files = []

    # The slugs below are meant to be language-neutral, but a handful of pages
    # are spelled differently in da/ and en/. Record them so the viewer author
    # (and the content maintainer) can see which look-ups will 404 in en/.
    drift = []
    for key in order:
        p = grouped[key]["entry"]["page"]
        if p and p["en_slug"] and p["en_slug"] != p["slug"]:
            pair = (p["slug"], p["en_slug"])
            if pair not in drift:
                drift.append(pair)

    lines = [HEADER]
    if drift:
        lines.append("# NOTE -- slugs used below that are spelled differently "
                     "in en/ (da spelling is used\n#         here; content fix "
                     "is out of scope for this file):")
        for da_slug, en_slug in sorted(drift):
            lines.append("#           da/%s  vs  en/%s" % (da_slug, en_slug))
        lines.append("#         The whole chapter folder also differs in case: "
                     "da/20The_Mathematical_Basis\n#         vs "
                     "en/20The_Mathematical_basis (no entry below targets it).")
        lines.append("")

    for key in order:
        g = grouped[key]
        r = g["entry"]
        t = r["topic"]
        idhs = ", ".join(g["idhs"])
        hint = r["hint"]
        hint_txt = " (dialog hint: %s)" % hint if hint else ""

        if r["confidence"] == "INDEX":
            stats["INDEX"] += 1
            lines.append("# %s  [language root index]" % idhs)
            lines.append("%s=." % key)
            lines.append("")
            continue

        if r["page"] is None:
            stats["UNMATCHED"] += 1
            lines.append("# UNMATCHED %s %s%s" % (idhs, key, hint_txt))
            lines.append("")
            continue

        page = r["page"]
        md = page["md"]
        if not os.path.exists(md):
            missing_files.append((idhs, page["slug"]))
            stats["UNMATCHED"] += 1
            lines.append("# UNMATCHED %s %s  (candidate %s has no da/*.md "
                         "on disk)%s" % (idhs, key, page["slug"], hint_txt))
            lines.append("")
            continue

        value = slug_to_html(page["slug"])
        anchor_note = ""
        if t["fragment"]:
            anchors = page_anchors(md)
            hit = anchors.get(fold(t["fragment"]))
            if hit:
                value += "#" + hit
            else:
                anchor_note = ("  [fragment #%s has no matching anchor on the "
                               "target page -- opens at top]" % t["fragment"])

        if r["confidence"] == "HIGH":
            stats["HIGH"] += 1
            conf = "HIGH"
        else:
            stats["LOW"] += 1
            conf = "LOW-CONFIDENCE"

        if r["source"] == "fuzzy":
            how = "(score %.2f, runner-up %.2f)" % (r["score"], r["runner_up"])
        else:
            how = "(curated)"
        lines.append("# %s  %s %s  -> %s%s%s"
                     % (idhs, conf, how, page["da_title"], hint_txt,
                        anchor_note))
        lines.append("%s=%s" % (key, value))
        lines.append("")

    with open(out_path, "w", encoding="utf-8", newline="\n") as fh:
        fh.write("\n".join(lines))

    return stats, missing_files


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--bsim", default=DEFAULT_BSIM,
                    help="path to the BSim source tree (default: %(default)s)")
    ap.add_argument("--repo", default=REPO,
                    help="path to the bsim-help book repo")
    ap.add_argument("--out", default=None, help="explicit output file")
    ap.add_argument("--force", action="store_true",
                    help="overwrite bsim-topic-map.txt instead of writing "
                         "bsim-topic-map.draft.txt")
    args = ap.parse_args()

    f1 = os.path.join(args.bsim, "DISVIEW", "F1Help.h")
    hhp = os.path.join(args.bsim, "BSIMHELP.HHP")
    if not os.path.exists(f1):
        sys.exit("F1Help.h not found: %s (use --bsim)" % f1)

    topics = parse_f1help(f1)
    hhp_hints = parse_hhp(hhp)
    pages = build_pages(args.repo)

    chapters = {}
    for key, slug, _ in parse_summary(os.path.join(args.repo, "da", "SUMMARY.md")):
        chapters.setdefault(key[0], slug.split("/", 1)[0])
    hints_by_sub = chapter_hints(chapters)

    idf = index_pages(pages)
    results = match_topics(topics, pages, hhp_hints, idf, hints_by_sub)

    final = os.path.join(HERE, "bsim-topic-map.txt")
    if args.out:
        out = args.out
    elif os.path.exists(final) and not args.force:
        out = os.path.join(HERE, "bsim-topic-map.draft.txt")
    else:
        out = final

    stats, missing = emit(results, pages, args.repo, out)

    total = sum(stats.values())
    print("F1Help.h topics parsed : %d (%d distinct topic strings)"
          % (len(topics), total))
    print("book pages indexed     : %d (da/SUMMARY.md)" % len(pages))
    print("HHP dialog hints       : %d" % len(hhp_hints))
    print("---")
    print("HIGH confidence        : %d" % stats["HIGH"])
    print("LOW-CONFIDENCE         : %d" % stats["LOW"])
    print("UNMATCHED              : %d" % stats["UNMATCHED"])
    print("language index (\".\")   : %d" % stats["INDEX"])
    if missing:
        print("!! candidates without a da/*.md file:")
        for idh, slug in missing:
            print("   %s -> %s" % (idh, slug))
    print("---")
    print("written: %s" % out)


if __name__ == "__main__":
    main()
