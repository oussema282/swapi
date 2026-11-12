#!/usr/bin/env python3
"""Build the client/engine/blade availability matrix for every w_games name.

Usage: gapmatrix.py <d60.sql> <outdir> <pack_names_file>
Inputs found in outdir: site_clients.txt site_engines.txt site_blades.txt
Outputs: wgames_names.txt full_matrix.tsv gap_summary.txt am_missing.txt missing_blades.txt
"""
import re, sys, os

sql_path, outdir, packfile = sys.argv[1], sys.argv[2], sys.argv[3]

def readlines(p):
    with open(p, encoding='utf-8', errors='replace') as f:
        return [l.rstrip('\n') for l in f]

# ---- w_games distinct names + row counts (span-based, proven parser) ----
lines = readlines(sql_path)
spans=[]; i=0
while i < len(lines):
    if lines[i].startswith('INSERT INTO `w_games`'):
        j=i+1
        while j < len(lines) and not lines[j].startswith('INSERT INTO') and not lines[j].startswith('-- ') and not lines[j].startswith('CREATE TABLE'):
            j+=1
        spans.append((i,j)); i=j
    else: i+=1

names={}
for a,b in spans:
    for ln in lines[a+1:b]:
        ln=ln.strip()
        if ln.endswith(','): ln=ln[:-1]
        elif ln.endswith(');'): ln=ln[:-2]
        if not ln.startswith('('): continue
        m=re.match(r"\((\d+), '([A-Za-z0-9_.\-]+)', '", ln)
        if m:
            n=m.group(2); names[n]=names.get(n,0)+1

with open(os.path.join(outdir,'wgames_names.txt'),'w') as f:
    f.write('\n'.join(sorted(names))+'\n')

def loadset(p):
    p=os.path.join(outdir,p)
    if not os.path.exists(p): return set()
    return {l.strip() for l in readlines(p) if l.strip()}

clients=loadset('site_clients.txt')
engines=loadset('site_engines.txt')
blades=loadset('site_blades.txt')

pack=set()
if os.path.exists(packfile):
    pack={n.strip() for n in readlines(packfile) if n.strip()}

allnames=sorted(set(names) | clients | engines | blades)
with open(os.path.join(outdir,'full_matrix.tsv'),'w') as f:
    f.write('name\twgames_rows\tclient\tengine\tblade\tpack\n')
    for n in allnames:
        f.write(f"{n}\t{names.get(n,0)}\t{int(n in clients)}\t{int(n in engines)}\t{int(n in blades)}\t{int(n in pack)}\n")

def is_am(n):
    return n.endswith('AM') or 'amatic' in n.lower()

missing_blades=[n for n in allnames if n not in blades and (names.get(n,0)>0 or n in pack)]
missing_am=[n for n in missing_blades if is_am(n)]

with open(os.path.join(outdir,'gap_summary.txt'),'w') as f:
    f.write(f"distinct w_games names: {len(names)} (rows total {sum(names.values())})\n")
    f.write(f"site clients: {len(clients)}  site engines: {len(engines)}  site blades: {len(blades)}\n")
    f.write(f"pack names flagged: {len(pack)}\n")
    f.write(f"names WITHOUT blade (wgames or pack): {len(missing_blades)}\n")
    am_rows=[n for n in allnames if is_am(n) and names.get(n,0)>0]
    am_full=[n for n in am_rows if n in blades]
    f.write(f"AM games in w_games: {len(am_rows)}; of those WITH blade: {len(am_full)}; WITHOUT blade: {len(missing_am)}\n")
    f.write('\n-- AM games WITHOUT blade (name | wrows | client | engine) --\n')
    for n in missing_am:
        f.write(f"{n}\t{names.get(n,0)}\t{int(n in clients)}\t{int(n in engines)}\n")
    f.write('\n-- names with blade but NO engine (broken) --\n')
    for n in allnames:
        if n in blades and n not in engines and (names.get(n,0)>0 or n in pack):
            f.write(f"{n}\t{int(n in clients)}\n")
    f.write('\n-- names with blade+engine but NO client --\n')
    for n in allnames:
        if n in blades and n in engines and n not in clients and (names.get(n,0)>0 or n in pack):
            f.write(f"{n}\n")

with open(os.path.join(outdir,'am_missing.txt'),'w') as f:
    for n in missing_am:
        f.write(f"{n}\tclient={int(n in clients)}\tengine={int(n in engines)}\n")
with open(os.path.join(outdir,'missing_blades.txt'),'w') as f:
    for n in missing_blades[:500]:
        f.write(n+'\n')
print('MATRIX OK:', len(allnames), 'names;', len(missing_am), 'AM missing blade;', len(missing_blades), 'total missing blade')
