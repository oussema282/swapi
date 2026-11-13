#!/usr/bin/env python3
"""Complete mirrored Amatic clients (fast): per game, probe its own JS-referenced
assets with HEAD-first existence checks, kind-aware dir ordering, series
enumeration and a hard per-game probe budget.

Usage: mirror3.py <mirror_dir> <verify_report.json> [workers]
"""
import os, re, sys, time, subprocess, json, urllib.parse
from multiprocessing import Pool

HOSTS = ["https://demo4.scriptcasino.ru", "https://demo5.scriptcasino.ru",
         "https://demo2.scriptcasino.ru", "https://demo3.scriptcasino.ru",
         "https://demo6.scriptcasino.ru"]
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
EXTS_IMG = ('.png', '.jpg', '.jpeg', '.webp', '.gif')
EXTS_SND = ('.mp3', '.ogg', '.m4a')
SERIES = [('symbanim', 22), ('symbols', 10), ('freewheel', 12), ('firework', 4),
          ('symgame', 12), ('loading', 8), ('jackpot', 6)]
PROBE_BUDGET = 900

def sh(args):
    return subprocess.run(args, capture_output=True, text=True)

def head_ok(url):
    p = sh(['curl','-sS','-I','-A',UA,'--max-time','15','-o','/dev/null','-w','%{http_code}',url])
    return (p.stdout or '').strip() == '200'

def get(url, tmpbin):
    p = sh(['curl','-sS','--compressed','-A',UA,'--max-time','45','-o',tmpbin,'-w','%{http_code}',url])
    if (p.stdout or '').strip() == '200':
        try:
            with open(tmpbin,'rb') as f: return f.read()
        except Exception: return None
    return None

def probe_and_save(game, gd, dirs, base, exts, budget):
    """Probe base+ext across dirs/hosts (HEAD first), save first hit. Returns (saved, used)."""
    tmpbin = '/tmp/h3_%d.bin' % os.getpid()
    used = 0
    for d in dirs:
        for e in exts:
            for host in HOSTS:
                used += 1
                if used > budget: return 0, used
                if head_ok(f'{host}/games/{game}/{urllib.parse.quote(d + base + e, safe="/")}'):
                    data = get(f'{host}/games/{game}/{urllib.parse.quote(d + base + e, safe="/")}', tmpbin)
                    if data is not None and len(data) > 60:
                        fp = os.path.join(gd, d, base + e)
                        os.makedirs(os.path.dirname(fp), exist_ok=True)
                        with open(fp,'wb') as f: f.write(data)
                        return 1, used
    return 0, used

def img_dirs(info):
    types = info['types'] or ['800_600']
    theme = info['theme']
    out = [f'{theme}/images/{t}/' for t in types]
    for mod in ('basic','slot','gamble','poker'):
        for t in types: out.append(f'{mod}/images/{t}/')
        out.append(f'{mod}/data/')
    out += [f'{theme}/data/', 'amarent/', 'amarent/src/']
    return out

def snd_dirs(info):
    theme = info['theme']
    return [f'{theme}/sounds/', 'basic/sounds/', 'slot/sounds/', 'gamble/sounds/', 'poker/sounds/', 'amarent/']

def json_dirs(info):
    types = info['types'] or ['800_600']
    theme = info['theme']
    out = [f'{theme}/data/'] + [f'{theme}/images/{t}/' for t in types]
    for mod in ('basic','slot','gamble'):
        for t in types: out.append(f'{mod}/images/{t}/')
    return out

MIRROR=None
def init(m):
    global MIRROR; MIRROR = m

def complete_game(info):
    game = info['game']
    if info['complete']:
        return f'{game} SKIP(complete)'
    gd = os.path.join(MIRROR, game)
    local = set()
    for dirpath,_,files in os.walk(gd):
        for f in files: local.add(f)
    satisfied = lambda base, exts: any((base+e) in local for e in exts)

    used_total = 0; saved = 0; hard_left = []
    # 1) dotted refs (hard requirements) — kind-aware dirs
    for d in info.get('_dotted', []):
        base, ext = os.path.splitext(d)
        e = ext.lower()
        if e in EXTS_SND: dirs, exts = snd_dirs(info), EXTS_SND
        elif e == '.json': dirs, exts = json_dirs(info), ('.json',)
        else: dirs, exts = img_dirs(info), EXTS_IMG
        exts = tuple(dict.fromkeys(exts + (e,)))
        if satisfied(base, exts): continue
        s, u = probe_and_save(game, gd, dirs, base, exts, PROBE_BUDGET - used_total)
        used_total += u; saved += s
        if not s: hard_left.append(d)
        if used_total >= PROBE_BUDGET: break
    # refresh local set
    local = set()
    for dirpath,_,files in os.walk(gd):
        for f in files: local.add(f)
    # 2) series (only bases referenced by the JS) — images
    corpus = ' '
    for dirpath,_,files in os.walk(gd):
        for f in files:
            if f.endswith(('.js','.html','.css')):
                try: corpus += open(os.path.join(dirpath,f),encoding='utf-8',errors='replace').read()
                except Exception: pass
    dirs = img_dirs(info)
    for base, n in SERIES:
        if base not in corpus: continue
        for i in range(1, n+1):
            if used_total >= PROBE_BUDGET: break
            name = f'{base}{i}'
            if satisfied(name, EXTS_IMG): continue
            s, u = probe_and_save(game, gd, dirs, name, ('.png','.jpg','.webp'), PROBE_BUDGET - used_total)
            used_total += u; saved += s
    return f'{game} fill saved={saved} probes={used_total} hard_left={len(hard_left)}{" " + ",".join(hard_left[:6]) if hard_left else ""}'

if __name__ == '__main__':
    mirror, report_path = sys.argv[1], sys.argv[2]
    workers = int(sys.argv[3]) if len(sys.argv) > 3 else 10
    rep = json.load(open(report_path))
    todo = []
    for r in rep.values():
        if not r['complete']:
            # stash dotted refs in the info dict
            import copy
            r2 = dict(r); r2['_dotted'] = r['missing_hard']
            todo.append(r2)
    print(f'completing {len(todo)} games with {workers} workers (budget {PROBE_BUDGET}/game)', flush=True)
    results = []
    with Pool(workers, initializer=init, initargs=(mirror,)) as p:
        for r in p.imap_unordered(complete_game, todo, chunksize=1):
            print('  ', r, flush=True)
            results.append(r)
    with open(os.path.join(mirror, '_fill_summary.txt'), 'w') as f:
        f.write('\n'.join(results) + '\n')
    print('FILL DONE', flush=True)
