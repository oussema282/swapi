#!/usr/bin/env python3
"""Second pass: probe canonical Amatic asset paths (derived from the complete
heidi AM clients) for every mirrored/huntable game on the demo host.

Usage: mirror2.py <am_names_file> <mirror_dir> <canon_dir> [workers]
"""
import os, re, sys, time, subprocess, urllib.parse
from multiprocessing import Pool

BASE = "https://demo4.scriptcasino.ru"
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"

def fetch(url):
    tmpbin = '/tmp/h2_%d.bin' % os.getpid()
    for attempt in range(3):
        time.sleep(0.12)
        p = subprocess.run(['curl','-sS','--compressed','-A',UA,'--max-time','60',
                            '-o',tmpbin,'-w','%{http_code}',url], capture_output=True, text=True)
        code=(p.stdout or '').strip()
        if code=='200':
            try:
                with open(tmpbin,'rb') as f: return f.read()
            except Exception: return None
        elif code in ('404','403','410'):
            return None
        time.sleep(1.2*(attempt+1))
    return None

def theme_of(game, mirror_dir):
    """theme dir name: from mirrored loader filename if present, else name minus AM"""
    src=f'{mirror_dir}/{game}/amarent/src'
    if os.path.isdir(src):
        for f in os.listdir(src):
            m=re.match(r'([a-z0-9_]+)loader_[0-9]+\.js$', f)
            if m: return m.group(1)
    return game[:-2].lower() if game.endswith('AM') else game.lower()

def probe(game, mirror_dir, canon):
    gd=f'{mirror_dir}/{game}'
    if not os.path.isdir(gd) or not os.path.exists(f'{gd}/amarent/index.html'):
        return f'{game} SKIP(no shell on demo)'
    t=theme_of(game, mirror_dir)
    os.makedirs(f'{gd}/{t}', exist_ok=True)
    saved=0; total=0
    plans=[]
    for name in canon['theme_images']:
        plans.append((f'{t}/images/800_600/{name}', f'{gd}/{t}/images/800_600/{name}'))
    for name in canon['theme_sounds']:
        plans.append((f'{t}/sounds/{name}', f'{gd}/{t}/sounds/{name}'))
    for name in canon['basic']:
        plans.append((f'basic/{name}', f'{gd}/basic/{name}'))
    for name in canon['slot']:
        plans.append((f'slot/{name}', f'{gd}/slot/{name}'))
    for name in canon['gamble']:
        plans.append((f'gamble/{name}', f'{gd}/gamble/{name}'))
    if re.search(r'(Poker|Deuces|TensOrBetter|JacksOrBetter|AcesAndFaces)', game):
        for name in canon['poker']:
            plans.append((f'poker/{name}', f'{gd}/poker/{name}'))
    for rel, dest in plans:
        if os.path.exists(dest):
            saved+=1; continue
        data=fetch(f'{BASE}/games/{game}/' + urllib.parse.quote(rel, safe='/'))
        if data is not None:
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            with open(dest,'wb') as f: f.write(data)
            saved+=1; total+=len(data)
    return f'{game} canon={saved}/{len(plans)} newbytes={total//1024}KB theme={t}'

if __name__=='__main__':
    names_file, mirror_dir, canon_dir = sys.argv[1], sys.argv[2], sys.argv[3]
    workers=int(sys.argv[4]) if len(sys.argv)>4 else 6
    canon={g: [l.strip() for l in open(f'{canon_dir}/{g}.txt').read().split() if l.strip()]
           for g in ('theme_images','theme_sounds','basic','slot','gamble','poker')}
    names=[n.strip() for n in open(names_file).read().split() if n.strip()]
    print(f'canon probe: {len(names)} games, {workers} workers', flush=True)
    results=[]
    with Pool(workers) as p:
        for r in p.starmap(probe, [(n, mirror_dir, canon) for n in names]):
            print('  ', r, flush=True)
            results.append(r)
    with open(f'{mirror_dir}/_canon_summary.txt','w') as f:
        f.write('\n'.join(results)+'\n')
    print('CANON PROBE DONE', flush=True)
