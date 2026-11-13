#!/usr/bin/env python3
"""Amatic mirror verifier v3.

Parses each game's JS/HTML/CSS/JSON corpus and collects every referenced asset
WITH module context: the JS builds URLs like
    base + "/basic/images/" + type + "/loadanim.png"
    c = base + "/slot/sounds/";  f(c + "winfinal")
so for each dotted/bare name we look backwards in the same expression for
"/<module>/(images|sounds)/" to infer the exact request path. Refs found in
shell/loader files (amarent/index.html, amarent/src/*loader*.js) are CRITICAL:
the game cannot boot without them.

Output per game: refs[{name, kind, module, res, critical, local}], status:
complete | pending (unsatisfied non-critical) | broken (unsatisfied critical).
The fill pass (mirror3) resolves pending refs against the demo hosts and records
404-on-all-hosts proof for genuinely absent files (the live demo runs without
them too).
"""
import os, re, sys, json

EXTS_IMG = ('.png', '.jpg', '.jpeg', '.webp', '.gif')
EXTS_SND = ('.mp3', '.ogg', '.m4a')
EXTS_JSON = ('.json',)
RES_TYPES = ['800_600', '1280_720', '960_540', '1024_768', '1440_1080', '640_1136', '480_320', '960_640', '2048_1536']
STR = re.compile(r'"([^"\n\\]{2,120})"')
CSS_URL = re.compile(r'url\(\s*[\'"]?([^\'")]+)[\'"]?\s*\)', re.I)
DOTTED = re.compile(r'^[A-Za-z0-9_\-]+\.(?:png|jpe?g|webp|gif|json|mp3|ogg|m4a|atlas|fnt|css)$', re.I)
PATHY = re.compile(r'^[A-Za-z0-9_\-]+(?:/[A-Za-z0-9_\-]+)+\.(?:png|jpe?g|webp|gif|json|mp3|ogg|m4a|atlas|fnt|css|js)$', re.I)
MODCTX = re.compile(r'/([A-Za-z0-9_\-]+)/(images|sounds|data)/')
MOD_AHEAD = re.compile(r'"/(?:[A-Za-z0-9_\-]+)/(?:images|sounds|data)/"')
RES_CTX = re.compile(r'\b(480_320|640_1136|800_600|960_540|960_640|1024_768|1280_720|1440_1080|2048_1536)\b')
SKIP_NAMES = set('''function return images sounds data src true false game slot basic audio texture sprite stage null undefined window document console object prototype this length index width height value number string attach encrypt decrypt format reload panel spin reel bonus win bet line total click start stop init close open load ready error reset state event timer config option params result device mobile desktop version request response server port token user money balance credit currency language english russian support donate channel contact social links license copyright create destroy update render animate draw scale move position rotate parent child items frames delay repeat loop action mode type name label text icon title info help UTF-8'''.split())

def game_theme(mirror, game):
    src = os.path.join(mirror, game, 'amarent', 'src')
    if os.path.isdir(src):
        for f in os.listdir(src):
            m = re.match(r'([a-z0-9_]+)loader_[0-9]+\.js$', f)
            if m: return m.group(1)
    return game[:-2].lower() if game.endswith('AM') else game.lower()

def local_index(gd):
    """basename -> set of relative dirs containing it"""
    idx = {}
    for dirpath, _, files in os.walk(gd):
        rel = os.path.relpath(dirpath, gd).replace(os.sep, '/')
        if rel == '.': rel = ''
        for f in files:
            idx.setdefault(f, set()).add(rel)
    return idx

def analyze(mirror, game):
    gd = os.path.join(mirror, game)
    if not os.path.isdir(gd):
        return None
    theme = game_theme(mirror, game)
    idx = local_index(gd)
    refs = {}   # (name) -> {kind, module, critical, local, where}

    def note(name, kind, module, critical, srcfile):
        r = refs.setdefault(name, {'name': name, 'kind': kind, 'module': module,
                                   'critical': False, 'local': False, 'from': set()})
        if module and not r['module']:
            r['module'] = module
        r['critical'] = r['critical'] or critical
        r['from'].add(srcfile)

    def local_sat(name, kind):
        if kind == 'script':
            return name in idx
        base, ext = os.path.splitext(name)
        exts = EXTS_SND if kind == 'sounds' else (EXTS_JSON if kind == 'data' else EXTS_IMG)
        if name in idx: return True
        cand = [base + e for e in exts]
        for c in cand:
            if c in idx: return True
        # same-base different same-kind ext
        for f in idx:
            fb, fe = os.path.splitext(f)
            if fb != base: continue
            fe = fe.lower()
            if kind == 'sounds' and fe in EXTS_SND: return True
            if kind == 'data' and fe == '.json': return True
            if kind == 'images' and fe in EXTS_IMG: return True
        return False

    textfiles = []
    for dirpath, _, files in os.walk(gd):
        rel = os.path.relpath(dirpath, gd).replace(os.sep, '/')
        for f in files:
            if f.endswith(('.js', '.html', '.css', '.json')):
                p = os.path.join(dirpath, f)
                try:
                    textfiles.append((rel, f, open(p, encoding='utf-8', errors='replace').read()))
                except Exception:
                    pass

    types = sorted(set(t for _, _, t in ((0,0,RES_CTX.findall(t[2])) for t in textfiles) for t in t)) or ['800_600']

    for rel, fname, txt in textfiles:
        critical_zone = (rel.startswith('amarent') and
                         (fname == 'index.html' or 'loader' in fname or fname.endswith('.css')))
        if critical_zone:
            # loader/shell .js references (script tags, scripts arrays): boot-critical
            for m in re.finditer(r'[A-Za-z0-9_\-]*_?\d{6,}\.js|[A-Za-z0-9_\-]+\.js', txt):
                s = m.group(0)
                if s in ('webgl-2d.js',) or len(s) < 6:
                    continue
                note(s, 'script', None, True, f'{rel}/{fname}')
        # CSS url() refs
        for m in CSS_URL.finditer(txt):
            name = m.group(1).split('/')[-1]
            if DOTTED.match(name):
                kind = 'sounds' if name.lower().endswith(EXTS_SND) else ('data' if name.endswith('.json') else 'images')
                note(name, kind, None, critical_zone, f'{rel}/{fname}')
        for m in STR.finditer(txt):
            s = m.group(1)
            if PATHY.match(s):
                # manifest entry with subdir: images/800_600/x.png -> exact-ish
                parts = s.split('/')
                name = parts[-1]
                kind = 'sounds' if '/sounds/' in s else ('data' if s.endswith('.json') or '/data/' in s else 'images')
                mod = parts[0] if kind != 'sounds' or len(parts) > 2 else None
                if '/' in s and parts[0] in ('basic','slot','gamble','poker',theme,'core','keno','amarent'):
                    mod = parts[0]
                note(name, kind, mod, critical_zone, f'{rel}/{fname}')
                continue
            if not DOTTED.match(s):
                continue
            if s.lower() in SKIP_NAMES:
                continue
            base = os.path.splitext(s)[0]
            if len(base) <= 2:
                continue
            kind = 'sounds' if s.lower().endswith(EXTS_SND) else ('data' if s.endswith('.json') else 'images')
            # module context: look backwards for /<mod>/(images|sounds)/
            start = m.start()
            window = txt[max(0, start-220):start]
            mod = None; res = None
            for mm in MODCTX.finditer(window):
                mod = mm.group(1)
                if mm.group(2) == 'images':
                    rm = RES_CTX.findall(txt[start-220:start+len(s)+40])
                    res = rm[-1] if rm else None
            if mod is None:
                # ahead pattern: type + "/name" after "/<mod>/images/" came earlier; check wider window
                w2 = txt[max(0, start-320):start]
                mm = None
                for mm in MODCTX.finditer(w2): pass
                if mm: mod = mm.group(1)
            note(s, kind, mod, critical_zone, f'{rel}/{fname}')

    # settings/config loader scripts: "_<digits>.js" refs and their prefix variants
    settings_refs = []
    for r in list(refs.values()):
        if re.match(r'^_?\d{8,}\.js$', r['name']):
            settings_refs.append(r)

    # mark satisfaction
    for r in refs.values():
        r['local'] = local_sat(r['name'], r['kind'])
        r['from'] = sorted(r['from'])[:3]

    # settings variants: if "_(hash).js" unresolved, check settings_/theme_/game_ prefixed copies locally
    for r in settings_refs:
        if r['local']: continue
        h = r['name']  # like _00296940.js or 00296940.js
        core = h.lstrip('_')
        for pref in ('settings_', f'{theme}_', f'{game[:-2].lower() if game.endswith("AM") else game.lower()}_', 'config_'):
            for cand in (pref + core, pref + h):
                if cand in idx:
                    r['local'] = True
                    r['resolved_as'] = cand
                    break
            if r['local']: break

    unsat = [r for r in refs.values() if not r['local']]
    broken = [r for r in unsat if r['critical']]
    pending = [r for r in unsat if not r['critical']]
    status = 'complete' if not unsat else ('broken' if broken else 'pending')
    return {'game': game, 'theme': theme, 'types': types,
            'refs': sorted(refs.values(), key=lambda x: (x['critical'], x['name'])),
            'n_refs': len(refs),
            'unsat_critical': [r['name'] for r in broken],
            'unsat_pending': [{'name': r['name'], 'kind': r['kind'], 'module': r['module'],
                               'res': r.get('res'), 'settings': bool(re.match(r'^_?\d{6,}\.js$', r['name']))}
                              for r in pending],
            'status': status}

if __name__ == '__main__':
    mirror, out = sys.argv[1], sys.argv[2]
    games = sorted(d for d in os.listdir(mirror) if os.path.isdir(os.path.join(mirror, d)) and not d.startswith('_'))
    report = {}
    for g in games:
        r = analyze(mirror, g)
        if r: report[g] = r
    with open(out, 'w') as f:
        json.dump(report, f, indent=1)
    n_ok = sum(1 for r in report.values() if r['status'] == 'complete')
    n_br = sum(1 for r in report.values() if r['status'] == 'broken')
    n_pd = sum(1 for r in report.values() if r['status'] == 'pending')
    print(f'VERIFY: complete={n_ok} pending={n_pd} broken={n_br} of {len(report)}')
    for g, r in report.items():
        if r['status'] == 'broken':
            print(f"  BROKEN {g}: critical missing: {r['unsat_critical'][:8]}")
