#!/usr/bin/env python3
"""Third pass: per-game deep asset fill.

Extracts every asset-name token from the game's own JS/JSON/CSS/atlas files
already mirrored, adds the loop-built Amatic series (symbanim1..N, symbols1..N,
freewheel, firework, ...), resolves numeric res dirs, probes type-aware path
candidates on the demo host and saves whatever exists.

Also re-probes the 'absent' games on alternate demo hostnames.

Usage: mirror3.py <mirror_dir> <workers> [priority_games_file]
Writes _fill_summary.txt (per game: found / still-missing) and
_fill_missing.txt (global list of unresolved probes).
"""
import os, re, sys, time, subprocess, urllib.parse
from multiprocessing import Pool

HOSTS = ["https://demo4.scriptcasino.ru", "https://demo5.scriptcasino.ru",
         "https://demo2.scriptcasino.ru", "https://demo3.scriptcasino.ru",
         "https://demo6.scriptcasino.ru"]
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
TEXT_EXT = {'.html', '.js', '.json', '.css', '.xml', '.txt', '.atlas', '.fnt'}
TOKEN_RE = re.compile(r'[A-Za-z0-9_\-]+\.(?:png|jpe?g|webp|gif|mp3|ogg|m4a|wav|fnt|atlas|css)\b', re.I)
RES_DIRS = ['800_600', '1280_720', '960_640', '480_320', '1024_768']
IMG_EXT = {'.png', '.jpg', '.jpeg', '.webp', '.gif', '.atlas', '.fnt'}
AUD_EXT = {'.mp3', '.ogg', '.m4a', '.wav'}
SERIES = [('symbanim', 20), ('symbols', 8), ('freewheel', 12), ('firework', 4),
          ('symgame', 12), ('loading', 8)]

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

def exists(url):
    """HEAD-first existence check (fast 404s, no body download)."""
    time.sleep(0.08)
    p = subprocess.run(['curl','-sS','-I','-A',UA,'--max-time','20',
                        '-o','/dev/null','-w','%{http_code}',url], capture_output=True, text=True)
    return (p.stdout or '').strip() == '200'

def text_files(gd):
    out=[]
    for dirpath,_,files in os.walk(gd):
        for f in files:
            if os.path.splitext(f)[1].lower() in TEXT_EXT:
                out.append(os.path.join(dirpath,f))
    return out

def theme_of(gd, game):
    src=os.path.join(gd,'amarent','src')
    if os.path.isdir(src):
        for f in os.listdir(src):
            m=re.match(r'([a-z0-9_]+)loader_[0-9]+\.js$', f)
            if m: return m.group(1)
    return game[:-2].lower() if game.endswith('AM') else game.lower()

def collect_tokens(gd):
    toks=set()
    for tp in text_files(gd):
        try: txt=open(tp,encoding='utf-8',errors='replace').read()
        except Exception: continue
        for m in TOKEN_RE.finditer(txt):
            t=m.group(0)
            if not re.match(r'^[a-z0-9_\-]+\.[a-z0-9]+$', t, re.I): continue
            if t.lower().startswith(('http',)) or '/' in t: continue
            toks.add(t.lower())
    # loop-built series (constructed names never appear literally)
    for base, n in SERIES:
        for i in range(1, n+1):
            for ext in ('.png','.jpg'):
                toks.add(f'{base}{i}{ext}')
    return sorted(toks)

def candidates_for(game, theme, tok):
    ext=os.path.splitext(tok)[1].lower()
    c=[]
    if ext in IMG_EXT:
        for r in RES_DIRS:
            c.append(f'{theme}/images/{r}/{tok}')
        c += [f'{theme}/{tok}', f'{theme}/src/{tok}', f'{theme}/data/{tok}',
              f'basic/images/800_600/{tok}', f'slot/images/800_600/{tok}',
              f'gamble/images/800_600/{tok}', f'amarent/{tok}', f'amarent/src/{tok}',
              f'{tok}']
    elif ext in AUD_EXT:
        c += [f'{theme}/sounds/{tok}', f'basic/sounds/{tok}', f'slot/sounds/{tok}',
              f'gamble/sounds/{tok}', f'{theme}/{tok}']
    else:
        c += [f'{theme}/data/{tok}', f'{theme}/src/{tok}', f'{theme}/{tok}',
              f'amarent/src/{tok}', f'{tok}']
    seen=set(); out=[]
    for x in c:
        if x not in seen: seen.add(x); out.append(x)
    return out

def rel_of(cand):
    return cand

def res_hints(gd, theme):
    """resolution dirs mentioned in the game's own corpus"""
    hints=set()
    for tp in text_files(gd):
        try: txt=open(tp,encoding='utf-8',errors='replace').read()
        except Exception: continue
        for m in re.finditer(r'\b(\d{3}_\d{3})\b', txt):
            if m.group(1) in RES_DIRS: hints.add(m.group(1))
    hints.add('800_600')
    return hints

def fill_game(game, mirror_dir, canon):
    gd=os.path.join(mirror_dir, game)
    host='https://demo4.scriptcasino.ru'
    if os.path.exists(os.path.join(gd,'_fill.txt')):
        return f'{game} SKIP(fill already done)'
    if not os.path.isdir(gd):
        found_host=None
        for h in HOSTS:
            probe=fetch(f'{h}/games/{game}/amarent/index.html')
            if probe:
                found_host=h; break
        if not found_host:
            return f'{game} ABSENT(all hosts)'
        host=found_host
        os.makedirs(gd, exist_ok=True)
        # mini BFS: shell -> loader chain
        shell=fetch(f'{host}/games/{game}/amarent/index.html')
        if shell:
            os.makedirs(os.path.join(gd,'amarent'), exist_ok=True)
            with open(os.path.join(gd,'amarent','index.html'),'wb') as f: f.write(shell)
        queue=[]
        for m in re.finditer(r'src="([^"]+)"', shell.decode('utf-8',errors='replace')):
            ref=m.group(1)
            if ref.startswith(('http','data:')): continue
            rel='amarent/'+ref.lstrip('./')
            queue.append(rel)
        for rel in queue[:12]:
            data=fetch(f'{host}/games/{game}/{urllib.parse.quote(rel, safe="/")}')
            if data is not None:
                fp=os.path.join(gd, rel)
                os.makedirs(os.path.dirname(fp), exist_ok=True)
                with open(fp,'wb') as f: f.write(data)
                if rel.endswith('.js') and 'loader' not in rel and 'webgl' not in rel:
                    # big game js -> follow its relative refs one level
                    for mm in re.finditer(r'"(\.\./[^"]+\.(?:js|json|css))"', data.decode('utf-8',errors='replace')):
                        r2=os.path.normpath(os.path.join(os.path.dirname(rel), mm.group(1)))
                        if not r2.startswith('..'):
                            d2=fetch(f'{host}/games/{game}/{urllib.parse.quote(r2, safe="/")}')
                            if d2 is not None:
                                fp2=os.path.join(gd, r2)
                                os.makedirs(os.path.dirname(fp2), exist_ok=True)
                                with open(fp2,'wb') as f: f.write(d2)
    theme=theme_of(gd, game)
    toks=set(collect_tokens(gd))
    for lst in canon.values():
        toks.update(x.lower() for x in lst)
    toks=sorted(toks)
    have=set()
    for dirpath,_,files in os.walk(gd):
        for f in files: have.add(f.lower())
    missing=[t for t in toks if t not in have]
    hints=res_hints(gd, theme)
    found=0; missing_paths=[]
    for tok in missing:
        got=False
        ext=os.path.splitext(tok)[1].lower()
        cands=candidates_for(game, theme, tok)
        if ext in IMG_EXT:
            # narrow to the game's own resolution dirs first, then the rest
            prim=[c for c in cands if any(f'/images/{r}/' in c for r in hints)]
            rest=[c for c in cands if c not in prim]
            cands=prim+rest
        for cand in cands:
            url=f'{host}/games/{game}/' + urllib.parse.quote(cand, safe='/')
            if not exists(url):
                continue
            data=fetch(url)
            if data is not None:
                dest=os.path.join(gd, rel_of(cand))
                os.makedirs(os.path.dirname(dest), exist_ok=True)
                with open(dest,'wb') as f: f.write(data)
                found+=1; got=True
                break
        if not got:
            missing_paths.append(tok)
    with open(os.path.join(gd,'_fill.txt'),'w') as f:
        f.write(f'tokens={len(toks)} already={len(toks)-len(missing)} found={found} unresolved={len(missing_paths)}\n')
        f.write('\n'.join(missing_paths)+'\n')
    return f'{game} fill found={found} unresolved={len(missing_paths)} of {len(toks)} tokens'

if __name__=='__main__':
    mirror_dir=sys.argv[1]
    workers=int(sys.argv[2]) if len(sys.argv)>2 else 6
    prio_file=sys.argv[3] if len(sys.argv)>3 else ''
    canon_dir=sys.argv[4] if len(sys.argv)>4 else ''
    fullnames_file=sys.argv[5] if len(sys.argv)>5 else ''
    canon={}
    if canon_dir and os.path.isdir(canon_dir):
        for g in ('theme_images','theme_sounds','basic','slot','gamble','poker'):
            fp=os.path.join(canon_dir, g+'.txt')
            if os.path.exists(fp):
                canon[g]=[x.strip() for x in open(fp).read().split() if x.strip()]
    all_games=set(os.listdir(mirror_dir)) if os.path.isdir(mirror_dir) else set()
    games=sorted(d for d in all_games if os.path.isdir(os.path.join(mirror_dir,d)) and not d.startswith('_'))
    if prio_file and os.path.exists(prio_file):
        prio=[x.strip() for x in open(prio_file).read().split() if x.strip()]
        games=[g for g in prio if g in set(games)] + [g for g in games if g not in set(prio)]
    # absent games (no mirror dir yet) get hunted on alt hosts too
    if fullnames_file and os.path.exists(fullnames_file):
        for n in open(fullnames_file).read().split():
            if n not in games:
                games.append(n)
    games=sorted(set(games))
    print(f'FILL: {len(games)} games, {workers} workers', flush=True)
    results=[]
    with Pool(workers) as p:
        for r in p.starmap(fill_game, [(g, mirror_dir, canon) for g in games]):
            print('  ', r, flush=True)
            results.append(r)
    with open(os.path.join(mirror_dir,'_fill_summary.txt'),'w') as f:
        f.write('\n'.join(results)+'\n')
    print('FILL DONE', flush=True)
