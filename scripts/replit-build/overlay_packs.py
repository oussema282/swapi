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
    is_slots = any(re.search(r'(^|/)app/Games/', x) for x in nl)
    if is_slots:
        print('    -> slots pack (clients + blades + engines)')
        pubg = find_dir(d, ('public','games'))
        appg = find_dir(d, ('app','Games'))
        blad = find_dir(d, ('resources','views','frontend','games','list'))
        print(f'    roots: games={pubg} engines={appg} blades={blad}')
        a=merge_children(pubg, GAMES); b=merge_children(appg, ENGINES); c=merge_children(blad, BLADES)
        print(f'    merged clients={a} engines={b} blades={c}')
        if pubg:
            for x in os.listdir(pubg):
                if os.path.isdir(os.path.join(pubg, x)): names.add(x)
        # keep the pack's mysql-era sql as legacy extras
        sqldir = find_dir(d, ('sql',))
        if sqldir:
            leg=os.path.join(STAGE, '_mysql-legacy'); os.makedirs(leg, exist_ok=True)
            merge_children(sqldir, leg)
    else:
        print('    -> clients pack')
        # find the dir that contains the most client dirs directly
        best=(None,0)
        for dirpath, dirnames, _ in os.walk(d):
            score=sum(1 for x in dirnames if is_client_dir(os.path.join(dirpath,x)))
            if score>best[1]: best=(dirpath,score)
        root=best[0]
        print(f'    client root: {root} ({best[1]} clients)')
        if root:
            for x in sorted(os.listdir(root)):
                p=os.path.join(root,x)
                if os.path.isdir(p) and is_client_dir(p):
                    shutil.copytree(p, os.path.join(GAMES,x), dirs_exist_ok=True)
                    names.add(x)

for n in F17: names.add(n)
with open(NAMES_OUT,'w') as f:
    f.write('\n'.join(sorted(names))+'\n')
print(f'PACK OVERLAY OK — {len(names)} pack game names recorded')
