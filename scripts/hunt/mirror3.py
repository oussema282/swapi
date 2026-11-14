#!/usr/bin/env python3
"""Amatic fill pass v4: resolve every unsatisfied ref from amverify v2.

For each pending ref: probe exact candidate paths (module-aware dirs, kind-aware
exts) across the demo hosts, HEAD-first; save hits; record outcome per ref:
  filled      — downloaded into the canonical dir
  demo404     — not on ANY demo host (the live demo runs without it too)
  budget      — unprobed remainder (treated as broken, conservative)
For critical refs (shell css/js, settings_<hash>.js): aggressive prefix/dir
variants; unresolved critical => game stays broken.

Writes <mirror>/_fill_detail.json and <mirror>/_verify_final.json (final gate input).
"""
import os, re, sys, time, subprocess, json, urllib.parse
from multiprocessing import Pool

HOSTS = ["https://demo4.scriptcasino.ru", "https://demo5.scriptcasino.ru",
         "https://demo2.scriptcasino.ru", "https://demo3.scriptcasino.ru",
         "https://demo6.scriptcasino.ru"]
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
EXTS_IMG = ('.png', '.jpg', '.jpeg', '.webp', '.gif')
EXTS_SND = ('.mp3', '.ogg', '.m4a')
SERIES = [('symbanim', 22), ('symbols', 10), ('freewheel', 12), ('firework', 4), ('symgame', 12)]
PER_REF_DIR_CAP = 4

def sh(args):
    return subprocess.run(args, capture_output=True, text=True)

def head(url):
    p = sh(['curl','-sS','-I','-A',UA,'--max-time','15','-o','/dev/null','-w','%{http_code}',url])
    return (p.stdout or '').strip()

def get(url, tmpbin):
    p = sh(['curl','-sS','--compressed','-A',UA,'--max-time','45','-o',tmpbin,'-w','%{http_code}',url])
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
            core = name.lstrip('_')
            names = []
            for pref in ('settings_', f"{ref.get('theme','')}_" if ref.get('theme') else 'settings_', 'config_'):
                names += [pref + core, pref + name]
            names += [name]
            names = list(dict.fromkeys(names))
        else:
            names = [name]
        dirs = kind_dirs(ref.get('_info', {}), kind, ref.get('module'), ref.get('res'))
        if kind == 'script':
            dirs = ['amarent/src/', 'amarent/', 'src/'] + [d for d in dirs if d.endswith('src/')]
        outcome = 'demo404'; where = None
        try:
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
        finally:
            pass
        out.append(dict(ref, outcome=outcome, where=where))
    return out

def complete_game(info):
    game = info['game']
    if info['status'] == 'complete':
        return {'game': game, 'result': 'complete', 'refs': []}
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
    if crit_missing or pend_budget:
        result = 'broken'
    elif len(done) == len(pend_404):
        result = 'demo_equivalent'
    else:
        result = 'demo_equivalent' if not crit_missing else 'broken'
    return {'game': game, 'result': result,
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
                        'demo404': d.get('demo404', [])}
    json.dump(details, open(os.path.join(mirror, '_fill_detail.json'), 'w'), indent=1)
    json.dump(final, open(os.path.join(mirror, '_verify_final.json'), 'w'), indent=1)
    n = {}
    for v in final.values(): n[v['status']] = n.get(v['status'], 0) + 1
    print('FINAL:', json.dumps(n), flush=True)
    print('FILL DONE', flush=True)
