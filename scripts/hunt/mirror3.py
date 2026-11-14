#!/usr/bin/env python3
"""Amatic fill pass v6: resolve every unsatisfied ref from amverify v3.

For each pending ref: probe exact candidate paths (module-aware dirs, kind-aware
exts) across the demo hosts, HEAD-first; save hits; record outcome per ref:
  filled      — downloaded into the canonical dir
  demo404     — not on ANY demo host (the live demo runs without it too)
  budget      — unprobed remainder (treated as broken, conservative)
For critical refs (shell css/js, settings_<hash>.js): aggressive prefix/dir
variants; unresolved critical => game goes through RESCUE: adopt the demo's own
amarent/index.html (fixes loader-generation mismatches between the local corpus
and the live demo), then iteratively fill the adopted chain's refs.
Writes <mirror>/_fill_detail.json and <mirror>/_verify_final.json (final gate input).
"""
import os, re, sys, time, subprocess, json, urllib.parse
import amverify
from multiprocessing import Pool

HOSTS = ["https://demo4.scriptcasino.ru", "https://demo5.scriptcasino.ru",
         "https://demo2.scriptcasino.ru", "https://demo3.scriptcasino.ru",
         "https://demo6.scriptcasino.ru"]
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
EXTS_IMG = ('.png', '.jpg', '.jpeg', '.webp', '.gif')
EXTS_SND = ('.mp3', '.ogg', '.m4a')
EXTS_JSON = ('.json',)
SERIES = [('symbanim', 22), ('symbols', 10), ('freewheel', 12), ('firework', 4), ('symgame', 12)]
PER_REF_DIR_CAP = 4

def sh(args):
    return subprocess.run(args, capture_output=True, text=True)

def head(url):
    p = sh(['curl','-sS','-I','-A',UA,'--connect-timeout','4','--max-time','10',
            '-o','/dev/null','-w','%{http_code}',url])
    return (p.stdout or '').strip()

def get(url, tmpbin):
    p = sh(['curl','-sS','--compressed','-A',UA,'--connect-timeout','4','--max-time','45',
            '-o',tmpbin,'-w','%{http_code}',url])
    if (p.stdout or '').strip() == '200':
        try:
            with open(tmpbin,'rb') as f: return f.read()
        except Exception: return None
    return None

MIRROR=None
def init(m):
    global MIRROR; MIRROR = m

def kind_dirs(info, kind, module, res):
    theme = (info or {}).get('theme') or 'game'
    types = ([res] if res else []) + [t for t in (info or {}).get('types', []) if t != res] or ['800_600']
    mods = ([module] if module else []) + [m for m in (theme,'basic','slot','gamble','poker') if m != module]
    out = []
    if kind == 'sounds':
        for m in mods: out.append(f'{m}/sounds/')
        out.append('amarent/')
    elif kind == 'data':
        for m in mods: out.append(f'{m}/data/')
        for m in mods:
            for t in types: out.append(f'{m}/images/{t}/')
        out.append('amarent/src/')
    else:
        for m in mods:
            for t in types: out.append(f'{m}/images/{t}/')
        for m in mods: out.append(f'{m}/data/')
        out += ['amarent/', 'amarent/src/']
    seen=set(); res=[]
    for d in out:
        if d not in seen: seen.add(d); res.append(d)
    return res[:PER_REF_DIR_CAP if module is None else 6]

def probe_paths(game, gd, refs_todo):
    """refs_todo: list of dicts {name, kind, module, res, critical}. Returns updated list with outcome."""
    tmpbin = '/tmp/h4_%d.bin' % os.getpid()
    out = []
    for ref in refs_todo:
        name, kind = ref['name'], ref['kind']
        exts = EXTS_SND if kind == 'sounds' else (EXTS_JSON if kind == 'data' else
               ('.js',) if kind == 'script' else EXTS_IMG)
        base, rext = os.path.splitext(name)
        exts = tuple(dict.fromkeys(exts + (rext.lower(),)))
        if ref.get('settings'):
            # settings_<CONFIG>_<hash>.js — the demo serves the EMPTY-config variant
            # (settings__<hash>.js, double underscore) because its play page opens
            # amarent/ without a config param. Probe that first, then K variants.
            # NOTE: the ref name arrives as "_<hash>.js" (loader's concat collapses
            # the prefix) — strip the .js before building candidate names.
            core = name.lstrip('_')
            if core.endswith('.js'):
                core = core[:-3]
            dirs = ['amarent/src/', 'amarent/']
            names = [f'settings__{core}.js', f'settings_{core}.js'] + \
                    [f'settings_{K}_{core}.js' for K in range(1, 16)]
            outcome = 'demo404'; where = None
            for nm in names:
                for d in dirs:
                    rel = d + nm
                    code = head(f'{HOSTS[0]}/games/{game}/' + urllib.parse.quote(rel, safe='/'))
                    if code == '200':
                        data = get(f'{HOSTS[0]}/games/{game}/' + urllib.parse.quote(rel, safe='/'), tmpbin)
                        if data is not None and len(data) > 60:
                            fp = os.path.join(gd, rel)
                            os.makedirs(os.path.dirname(fp), exist_ok=True)
                            with open(fp,'wb') as f: f.write(data)
                            outcome = 'filled'; where = rel
                        break
                if outcome == 'filled': break
            rec = {k: v for k, v in ref.items() if k != '_info'}
            rec['outcome'] = outcome; rec['where'] = where
            out.append(rec)
            continue
        names = [name]
        # Dotted refs are authoritative: the browser requests THIS exact name, so
        # only the referenced extension matters (filling logo.gif for a logo.png
        # ref would satisfy the verifier but still 404 in the browser). Extension-
        # less refs sweep the kind's extension list.
        if rext:
            exts = (rext.lower(),)
        else:
            exts = tuple(dict.fromkeys(exts + (rext.lower(),)))
        dirs = kind_dirs(ref.get('_info', {}), kind, ref.get('module'), ref.get('res'))
        if kind == 'script':
            dirs = ['amarent/src/', 'amarent/', 'src/'] + [d for d in dirs if d.endswith('src/')]
        elif ref.get('critical'):
            # shell css url()/html refs resolve relative to amarent/ — try there first
            extra = ['amarent/', 'amarent/src/', 'amarent/css/']
            dirs = extra + [d for d in dirs if d not in extra]
        outcome = 'demo404'; where = None
        for nm in names:
            if outcome == 'filled': break
            for d in dirs:
                if outcome == 'filled': break
                for e in exts:
                    if outcome == 'filled': break
                    rel = d + nm if nm.endswith(e) else d + base + e
                    got = False
                    for host in HOSTS:
                        code = head(f'{host}/games/{game}/' + urllib.parse.quote(rel, safe='/'))
                        if code == '200':
                            data = get(f'{host}/games/{game}/' + urllib.parse.quote(rel, safe='/'), tmpbin)
                            if data is not None and len(data) > 60:
                                fp = os.path.join(gd, rel)
                                os.makedirs(os.path.dirname(fp), exist_ok=True)
                                with open(fp,'wb') as f: f.write(data)
                                outcome = 'filled'; where = rel; got = True
                            break
                    if got: break
        rec = {k: v for k, v in ref.items() if k != '_info'}
        rec['outcome'] = outcome; rec['where'] = where
        out.append(rec)
    return out

def _todo_from_report(rep):
    todo = []
    for r in rep.get('unsat_critical', []):
        todo.append({'name': r, 'kind': 'script' if r.endswith('.js') else 'images',
                     'module': None, 'res': None, 'critical': True,
                     'settings': bool(re.match(r'^_?\d{6,}\.js$', r)), 'theme': rep.get('theme'),
                     '_info': rep})
    for r in rep.get('unsat_pending', []):
        todo.append({'name': r['name'], 'kind': r['kind'], 'module': r.get('module'),
                     'res': r.get('res'), 'critical': False,
                     'settings': r.get('settings', False), 'theme': rep.get('theme'),
                     '_info': rep})
    return todo


def rescue_game(game, gd):
    """Adopt the demo's amarent/index.html when the local loader generation
    mismatches the demo (local corpus came from an older client pack). Then
    iteratively analyze + fill the adopted boot chain (shell -> loader ->
    game JS -> settings -> artwork). Returns a final status string; the game
    stays hidden unless the ADOPTED chain verifies complete/demo_equivalent."""
    tmpbin = '/tmp/h5_%d.bin' % os.getpid()
    html = None
    for host in HOSTS:
        url = f'{host}/games/{game}/' + urllib.parse.quote('amarent/index.html', safe='/')
        if head(url) == '200':
            html = get(url, tmpbin)
            if html is not None and len(html) > 200:
                break
            html = None
    if html is None:
        return 'broken'   # demo has no shell either — nothing to adopt
    idx = os.path.join(gd, 'amarent', 'index.html')
    os.makedirs(os.path.dirname(idx), exist_ok=True)
    with open(idx, 'wb') as f:
        f.write(html)
    for _ in range(4):
        rep = amverify.analyze(MIRROR, game)
        if rep is None:
            return 'absent'
        if rep['status'] == 'complete':
            return 'complete'
        todo = _todo_from_report(rep)
        if not todo:
            break
        done = probe_paths(game, gd, todo)
        if all(d['outcome'] != 'filled' for d in done):
            break
    rep = amverify.analyze(MIRROR, game)
    if rep is None:
        return 'absent'
    if rep['status'] == 'complete':
        return 'complete'
    return 'broken' if rep['unsat_critical'] else 'demo_equivalent'

def complete_game(info):
    game = info['game']
    if info['status'] == 'complete':
        return {'game': game, 'result': 'complete', 'rescued': None, 'refs': []}
    if info['status'] == 'absent':
        # No amarent shell at all (and none on the demo either) — nothing to fill;
        # stays absent => hidden by the build gate. NEVER demo_equivalent: an empty
        # game dir would 404 in the browser from the first request.
        return {'game': game, 'result': 'absent', 'rescued': None, 'refs': []}
    gd = os.path.join(MIRROR, game)
    info['_info'] = info
    todo = []
    for r in info.get('unsat_critical', []):
        todo.append({'name': r, 'kind': 'script' if r.endswith('.js') else 'images',
                     'module': None, 'res': None, 'critical': True,
                     'settings': bool(re.match(r'^_?\d{6,}\.js$', r)), 'theme': info['theme'],
                     '_info': info})
    for r in info.get('unsat_pending', []):
        todo.append({'name': r['name'], 'kind': r['kind'], 'module': r.get('module'),
                     'res': r.get('res'), 'critical': False,
                     'settings': r.get('settings', False), 'theme': info['theme'],
                     '_info': info})
    done = probe_paths(game, gd, todo)
    crit_missing = [r['name'] for r in done if r.get('critical') and r['outcome'] != 'filled']
    pend_404 = [r['name'] for r in done if not r.get('critical') and r['outcome'] == 'demo404']
    pend_filled = [r['name'] for r in done if r['outcome'] == 'filled']
    pend_budget = [r['name'] for r in done if not r.get('critical') and r['outcome'] not in ('demo404','filled')]
    rescued = None
    if crit_missing or pend_budget:
        result = 'broken'
        if crit_missing and not pend_budget:
            # loader-generation mismatch with the demo: adopt the demo shell + fill
            result = rescue_game(game, gd)
            rescued = result
            if result == 'complete':
                crit_missing = []
    elif len(done) == len(pend_404):
        result = 'demo_equivalent'
    else:
        result = 'demo_equivalent' if not crit_missing else 'broken'
    return {'game': game, 'result': result, 'rescued': rescued,
            'critical_missing': crit_missing, 'budget': pend_budget,
            'filled': pend_filled, 'demo404': pend_404, 'refs': done}

if __name__ == '__main__':
    mirror, report_path = sys.argv[1], sys.argv[2]
    workers = int(sys.argv[3]) if len(sys.argv) > 3 else 10
    rep = json.load(open(report_path))
    todo = [r for r in rep.values() if r['status'] != 'complete']
    print(f'fill v4: {len(todo)} games, {workers} workers', flush=True)
    details = {}
    with Pool(workers, initializer=init, initargs=(mirror,)) as p:
        for r in p.imap_unordered(complete_game, todo, chunksize=1):
            g = r.pop('game')
            details[g] = r
            print(f"   {g}: {r['result']} filled={len(r.get('filled',[]))} demo404={len(r.get('demo404',[]))} "
                  f"crit_missing={r.get('critical_missing',[])} budget={len(r.get('budget',[]))}", flush=True)
    # final statuses
    final = {}
    for g, x in rep.items():
        if x['status'] == 'complete':
            final[g] = {'status': 'complete'}
        else:
            d = details.get(g, {})
            final[g] = {'status': d.get('result', 'broken'),
                        'critical_missing': d.get('critical_missing', []),
                        'budget': d.get('budget', []),
                        'demo404': d.get('demo404', []),
                        'rescued': d.get('rescued'),
                        'config_k': d.get('config_k')}
    json.dump(details, open(os.path.join(mirror, '_fill_detail.json'), 'w'), indent=1)
    json.dump(final, open(os.path.join(mirror, '_verify_final.json'), 'w'), indent=1)
    ks = {g: v['config_k'] for g, v in details.items() if v.get('config_k')}
    if ks:
        json.dump(ks, open(os.path.join(mirror, '_config_ids.json'), 'w'), indent=1)
        print('config ids discovered:', ks, flush=True)
    n = {}
    for v in final.values(): n[v['status']] = n.get(v['status'], 0) + 1
    print('FINAL:', json.dumps(n), flush=True)
    print('FILL DONE', flush=True)
