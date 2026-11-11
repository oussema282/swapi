#!/usr/bin/env python3
"""Overlay the two release packs onto the staged site + write the names file.

Usage: overlay_packs.py <stage_dir> <packs_dir> <names_out.txt>
"""
import os, re, sys, shutil, zipfile

STAGE, PACKS, NAMES_OUT = sys.argv[1], sys.argv[2], sys.argv[3]

F17 = ("ActionMoneyEGT AdmiralNelsonAM AfricaRunKA AgeOfEgyptPT AgeOfEgyptPTM "
       "AgeOfGodsKingofOlympusPT AgeOfGodsKingofOlympusPTM AgeOfPrivateersGT "
       "AgeOfPrivateersGTM AgeOfTheGodsGodOfStormsPT AgeOfTheGodsGodOfStormsPTM "
       "AgeOfTroyEGT AlchemistsSecretGT AlchemistsSecretGTM AllAmericanPokerAM "
       "AllWaysFruitsAM AllWaysJokerAM").split()

GAMES = os.path.join(STAGE, 'public', 'games')
BLADES = os.path.join(STAGE, 'resources', 'views', 'frontend', 'games', 'list')
ENGINES = os.path.join(STAGE, 'app', 'Games')
for d in (GAMES, BLADES, ENGINES):
    os.makedirs(d, exist_ok=True)

def find_dir(root, tail_parts):
    for dirpath, dirnames, _ in os.walk(root):
        rel = os.path.relpath(dirpath, root).split(os.sep)
        if len(rel) >= len(tail_parts) and rel[-len(tail_parts):] == list(tail_parts):
            return dirpath
    return None

def merge_children(src, dst):
    n=0
    if not src or not os.path.isdir(src): return 0
    for child in os.listdir(src):
        s=os.path.join(src, child); d=os.path.join(dst, child)
        if os.path.isdir(s):
            shutil.copytree(s, d, dirs_exist_ok=True)
        else:
            os.makedirs(os.path.dirname(d), exist_ok=True)
            shutil.copy2(s, d)
        n+=1
    return n

def is_client_dir(d):
    if not os.path.isdir(d): return False
    for marker in ('index.html', 'index.htm', 'index.php'):
        if os.path.exists(os.path.join(d, marker)): return True
    return os.path.isdir(os.path.join(d, 'js')) and not os.path.isfile(os.path.join(d, 'composer.json'))

def find_all(root, predicate):
    hits=[]
    for dirpath, dirnames, _ in os.walk(root):
        try:
            if predicate(dirpath): hits.append(dirpath)
        except Exception:
            pass
    return hits

names=set()
tmp='/tmp/packx'
shutil.rmtree(tmp, ignore_errors=True); os.makedirs(tmp)

for z in sorted(os.listdir(PACKS)):
    if not z.lower().endswith('.zip'): continue
    path=os.path.join(PACKS, z)
    with zipfile.ZipFile(path) as zf:
        nl=zf.namelist()
        print(f'--- {z}: {len(nl)} entries; sample: {nl[:3]}')
        bad=zf.testzip()
        assert bad is None, f'corrupt zip entry {bad}'
        d=os.path.join(tmp, re.sub(r'\W+','_',z)[:40])
        os.makedirs(d, exist_ok=True)
        zf.extractall(d)

    # classification-free: merge every platform folder the pack contains
    pub_games = find_all(d, lambda p: os.path.basename(p)=='games'
                         and os.path.basename(os.path.dirname(p))=='public')
    app_games = find_all(d, lambda p: os.path.basename(p)=='Games'
                         and os.path.basename(os.path.dirname(p)).lower()=='app')
    blades    = find_all(d, lambda p: os.path.basename(p)=='list'
                         and p.replace(os.sep,'/').endswith('resources/views/frontend/games/list'))

    if not pub_games:
        # fallback: a lone games/ dir with the most client subdirs
        cand=[p for p in find_all(d, lambda p: os.path.basename(p).lower()=='games')]
        best=None; best_n=0
        for p in cand:
            n=sum(1 for x in os.listdir(p) if is_client_dir(os.path.join(p,x)))
            if n>best_n: best, best_n = p, n
        if best and best_n>0:
            pub_games=[best]
            print(f'    fallback games root: {best} ({best_n} clients)')

    for pg in pub_games:
        a=merge_children(pg, GAMES)
        cl=[x for x in os.listdir(pg) if os.path.isdir(os.path.join(pg,x))]
        names.update(cl)
        print(f'    merged {a} client entries from {pg}')
    for ag in app_games:
        b=merge_children(ag, ENGINES)
        print(f'    merged {b} engine entries from {ag}')
    for bl in blades:
        c=merge_children(bl, BLADES)
        print(f'    merged {c} blade entries from {bl}')
    if not (pub_games or app_games or blades):
        print('    [no platform folders recognised in this zip]')

for n in F17: names.add(n)
with open(NAMES_OUT,'w') as f:
    f.write('\n'.join(sorted(names))+'\n')
print(f'PACK OVERLAY OK — {len(names)} pack game names recorded')
