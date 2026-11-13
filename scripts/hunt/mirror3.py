#!/usr/bin/env python3
"""Complete mirrored Amatic clients: probe each game's own JS-referenced assets
(dir hints + extension variants) on the demo host; save every hit; then verify.

Usage: mirror3.py <mirror_dir> <only_failing_json> [workers]
"""
import os, re, sys, time, subprocess, json, urllib.parse
from multiprocessing import Pool

BASE = "https://demo4.scriptcasino.ru"
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
EXTS_IMG = ('.png', '.jpg', '.jpeg', '.webp', '.gif')
EXTS_SND = ('.mp3', '.ogg', '.m4a')
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from amverify import analyze, EXTS_IMG as A_IMG, EXTS_SND as A_SND

def fetch(url):
    tmpbin = '/tmp/h3_%d.bin' % os.getpid()
    for attempt in range(3):
        time.sleep(0.1)
        p = subprocess.run(['curl','-sS','--compressed','-A',UA,'--max-time','45',
                            '-o',tmpbin,'-w','%{http_code}',url], capture_output=True, text=True)
        code=(p.stdout or '').strip()
        if code=='200':
            try:
                with open(tmpbin,'rb') as f: return f.read()
            except Exception: return None
        elif code in ('404','403','410'):
            return None
        time.sleep(1.0*(attempt+1))
    return None

def plan_for(info):
    """(dirs, base, exts, tag) list identical to verifier's plan"""
    theme = info['theme']
    types = info['types'] or ['800_600']
    dirs = ['amarent/', 'amarent/src/']
    for mod, kinds in info['modules'].items():
        for kind in sorted(kinds):
            if kind == 'images':
                for t in types: dirs.append(f'{mod}/images/{t}/')
                dirs.append(f'{mod}/data/')
            else:
                dirs.append(f'{mod}/sounds/')
    plan = []
    JS_ALL = re.compile(r'"([A-Za-z0-9_\-./ ]{2,80})"')
    DOTTED = re.compile(r'^[A-Za-z0-9_\-]+\.(?:png|jpe?g|webp|gif|json|mp3|ogg|m4a|atlas|fnt|css)$', re.I)
    BARE_SKIP = set('function return images sounds data src true false game slot basic audio texture sprite stage null undefined window document console object prototype this length index width height value number string attach encrypt decrypt format reload panel spin reel bonus win bet line total click start stop init close open load ready error reset state event timer config option params result device mobile desktop version request response server port token user money balance credit currency language english russian support donate channel contact social links license copyright create destroy update render animate draw scale move position rotate parent child items frames delay repeat loop action mode type name label text icon title info help page symbol'.split())
    # rebuild refs from the same JS corpus the verifier used
    gd = os.path.join(MIRROR, info['game'])
    big = []
    for dirpath, _, files in os.walk(gd):
        for f in files:
            if f.endswith(('.js', '.html', '.css')):
                try: big.append(open(os.path.join(dirpath,f),encoding='utf-8',errors='replace').read())
                except Exception: pass
    big = ' '.join(big)
    dotted=set(); bare=set()
    for s in JS_ALL.findall(big):
        if DOTTED.match(s): dotted.add(s)
        elif re.fullmatch(r'[A-Za-z0-9_\-]{3,40}', s) and s.lower() not in BARE_SKIP and not s.isdigit(): bare.add(s)
    for d in dotted:
        b,e = os.path.splitext(d)
        base_exts = EXTS_SND if e.lower() in EXTS_SND else (('.json',) if e.lower()=='.json' else EXTS_IMG)
        exts = tuple(dict.fromkeys(base_exts + (e.lower(),)))
        plan.append((dirs, b, exts))
    for b in bare:
        plan.append((dirs, b, EXTS_IMG + EXTS_SND))
    return plan

MIRROR = None

def init(m):
    global MIRROR
    MIRROR = m

def complete_game(info):
    game = info['game']
    if info['complete']:
        return f'{game} SKIP(complete)'
    gd = os.path.join(MIRROR, game)
    got = 0
    for dirs, base, exts in plan_for(info):
        # skip if any ext already local
        if any(os.path.exists(os.path.join(gd, d, base + e)) for d in dirs for e in exts):
            continue
        hit = False
        for d in dirs:
            for e in exts:
                url = f'{BASE}/games/{game}/' + urllib.parse.quote(d + base + e, safe='/')
                data = fetch(url)
                if data is not None and len(data) > 60:
                    fp = os.path.join(gd, d, base + e)
                    os.makedirs(os.path.dirname(fp), exist_ok=True)
                    with open(fp, 'wb') as f: f.write(data)
                    got += 1; hit = True; break
            if hit: break
    return f'{game} filled={got}'

if __name__ == '__main__':
    mirror, report_path = sys.argv[1], sys.argv[2]
    workers = int(sys.argv[3]) if len(sys.argv) > 3 else 8
    rep = json.load(open(report_path))
    todo = [r for r in rep.values() if not r['complete']]
    print(f'completing {len(todo)} games with {workers} workers', flush=True)
    results = []
    with Pool(workers, initializer=init, initargs=(mirror,)) as p:
        for r in p.imap_unordered(complete_game, todo, chunksize=1):
            print('  ', r, flush=True)
            results.append(r)
    with open(os.path.join(mirror, '_fill_summary.txt'), 'w') as f:
        f.write('\n'.join(results) + '\n')
    print('FILL DONE', flush=True)
