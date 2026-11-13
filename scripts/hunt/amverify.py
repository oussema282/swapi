#!/usr/bin/env python3
"""Verify mirrored Amatic clients against their own game-JS asset manifests.

Usage: amverify.py <mirror_dir> <report_out.json>
Writes: report with per-game required refs, satisfied, missing (dotted refs are
hard requirements; bare names are soft/warn).
"""
import os, re, sys, json

EXTS_IMG = ('.png', '.jpg', '.jpeg', '.webp', '.gif')
EXTS_SND = ('.mp3', '.ogg', '.m4a')
RES_TYPES = ['800_600']
# Generation/UI assets known to be absent even on the live demo (runtime falls
# back to newer-version UIs). Missing files matching this set are tolerated.
UI_TOLERATED = re.compile(
    r'^(gui_(desktop|mobile)_v\d+\.(?:json|png)|buttonback\.png|jackpot\.png|load(_amatic)?\.jpg|'
    r'mystery_jackpot\.json|reelanim\.png|smartphone\.png|tablet\.png|icon_out\.png|wl\.png|'
    r'wlhelp\.jpg|wthelp\.jpg|wthelptop\.jpg|symbols_help\.jpg|symbols_small\.png|mobile_panels\.json|'
    r'info_[a-z_]+\.(?:png|jpg)|[a-z_]*help[a-z_]*\.(?:png|jpg))$', re.I)
JS_ALL = re.compile(r'"([A-Za-z0-9_\-./ ]{2,80})"')
DIRHINT = re.compile(r'[A-Za-z0-9_\-]*/(?:images|sounds)/')
DOTTED = re.compile(r'^[A-Za-z0-9_\-]+\.(?:png|jpe?g|webp|gif|json|mp3|ogg|m4a|atlas|fnt|css)$', re.I)
BARE_SKIP = set('''function return images sounds data src true false game slot basic audio texture sprite stage null undefined window document console object prototype this length index width height value number string attach encrypt decrypt format reload panel spin reel bonus win bet line total click start stop init close open load ready error reset state event timer config option params result device mobile desktop version request response server port token user money balance credit currency language english russian support donate channel contact social links license copyright create destroy update render animate draw scale move position rotate parent child items frames delay repeat loop action mode type name label text icon title info help page page2 symbol symbols2 symbols3'''.split())

def game_theme(mirror, game):
    src = os.path.join(mirror, game, 'amarent', 'src')
    if os.path.isdir(src):
        for f in os.listdir(src):
            m = re.match(r'([a-z0-9_]+)loader_[0-9]+\.js$', f)
            if m: return m.group(1)
    return game[:-2].lower() if game.endswith('AM') else game.lower()

def analyze(mirror, game):
    gd = os.path.join(mirror, game)
    if not os.path.isdir(gd):
        return None
    theme = game_theme(mirror, game)
    txts = []
    for dirpath, _, files in os.walk(gd):
        for f in files:
            if f.endswith(('.js', '.html', '.css')):
                try:
                    txts.append(open(os.path.join(dirpath, f), encoding='utf-8', errors='replace').read())
                except Exception:
                    pass
    big = ' '.join(txts)
    types = sorted(set(re.findall(r'\b(480_320|640_1136|800_600|960_540|1024_768|1280_720|1440_1080|2048_1536)\b', big))) or RES_TYPES
    modules = {}
    for tok in set(DIRHINT.findall(big)):
        mod = tok.split('/')[0].strip()
        kind = 'sounds' if '/sounds/' in tok else 'images'
        modules.setdefault(mod, set()).add(kind)
    modules.setdefault(theme, set()).add('images')
    modules.setdefault(theme, set()).add('sounds')
    dotted = set(); bare = set()
    for s in JS_ALL.findall(big):
        if DOTTED.match(s):
            dotted.add(s)
        elif re.fullmatch(r'[A-Za-z0-9_\-]{3,40}', s) and s.lower() not in BARE_SKIP and not s.isdigit():
            bare.add(s)
    # probe plan (dir, name-without-ext-or-dotted, exts)
    probes = []
    dirs = ['amarent/', 'amarent/src/']
    for mod, kinds in modules.items():
        for kind in sorted(kinds):
            if kind == 'images':
                for t in types: dirs.append(f'{mod}/images/{t}/')
                dirs.append(f'{mod}/data/')
            else:
                dirs.append(f'{mod}/sounds/')
    for d in dotted:
        base, ext = os.path.splitext(d)
        base_exts = EXTS_SND if ext.lower() in EXTS_SND else (('.json',) if ext.lower()=='.json' else EXTS_IMG)
        exts = tuple(dict.fromkeys(base_exts + (ext.lower(),)))  # always include the referenced ext
        probes.append((dirs, base, exts, d))
    for b in bare:
        probes.append((dirs, b, EXTS_IMG + EXTS_SND, None))
    # check satisfaction locally
    local = set()
    for dirpath, _, files in os.walk(gd):
        for f in files:
            local.add(f)
    missing_all = []   # unsatisfied dotted refs after junk/version filtering
    missing_soft = []  # unsatisfied bare names
    local_json_bases = set()
    for f in local:
        fb, fe = os.path.splitext(f)
        if fe.lower() == '.json': local_json_bases.add(fb)
    for dirs_, base, exts, orig in probes:
        if any((base + e) in local for e in exts):
            continue
        # also accept any file with the same base and same kind of ext
        hit = False
        for f in local:
            fb, fe = os.path.splitext(f)
            if fb == base and ((fe.lower() in EXTS_IMG and any(e in EXTS_IMG for e in exts)) or
                               (fe.lower() in EXTS_SND and any(e in EXTS_SND for e in exts)) or
                               (fe.lower() == '.json' and '.json' in exts)):
                hit = True; break
        if hit: continue
        if orig is None:
            missing_soft.append(base); continue
        # ignore junk tokens with <=2-char basenames (parser artifacts like "1.jpg")
        if len(os.path.splitext(orig)[0]) <= 2:
            missing_soft.append(orig); continue
        # version fallback: gui_desktop_vN missing but any gui_desktop_vM present
        m = re.match(r'^gui_(desktop|mobile)_v\d+\.json$', orig)
        if m and any(f.startswith(f'gui_{m.group(1)}_v') and f.endswith('.json') for f in local_json_bases):
            missing_soft.append(orig); continue
        missing_all.append(orig)
    ui_missing = sorted({x for x in missing_all if UI_TOLERATED.match(x)})
    gameplay_missing = sorted({x for x in missing_all if not UI_TOLERATED.match(x)})
    if not missing_all:
        status = 'complete'
    elif not gameplay_missing:
        status = 'playable_ui_partial'
    else:
        status = 'broken'
    return {'game': game, 'theme': theme, 'types': types,
            'modules': {k: sorted(v) for k, v in modules.items()},
            'dotted_count': len(dotted), 'bare_count': len(bare),
            'missing_ui': ui_missing, 'missing_gameplay': gameplay_missing,
            'missing_soft': missing_soft[:40],
            'complete': status == 'complete', 'status': status}

if __name__ == '__main__':
    mirror, out = sys.argv[1], sys.argv[2]
    games = sorted(d for d in os.listdir(mirror) if os.path.isdir(os.path.join(mirror, d)) and not d.startswith('_'))
    report = {}
    for g in games:
        r = analyze(mirror, g)
        if r: report[g] = r
    n_ok = sum(1 for r in report.values() if r['status'] == 'complete')
    n_ui = sum(1 for r in report.values() if r['status'] == 'playable_ui_partial')
    n_br = sum(1 for r in report.values() if r['status'] == 'broken')
    with open(out, 'w') as f:
        json.dump(report, f, indent=1)
    print(f'VERIFY: complete={n_ok} playable_ui_partial={n_ui} broken={n_br} of {len(report)}')
    for g, r in report.items():
        if r['status'] == 'broken':
            print(f"  BROKEN {g}: gameplay art missing: {r['missing_gameplay'][:6]}")
