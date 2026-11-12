#!/usr/bin/env python3
"""Mirror the Amatic Goldsvet clients for all 102 missing AM names from the
demo4.scriptcasino.ru deployment (bounded BFS per game, stdlib only).

Usage: mirror.py <am_names_file> <out_dir> [workers]
Writes: out/<Name>/... plus out/_summary.txt
"""
import os, re, sys, json, time, subprocess, urllib.parse
from multiprocessing import Pool

BASE = "https://demo4.scriptcasino.ru"
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
TEXT_EXT = {'.html', '.js', '.css', '.json', '.xml', '.txt', '.atlas', '.fnt'}
ASSET_RE = re.compile(
    r'[A-Za-z0-9_\-./@]+\.(?:png|jpe?g|gif|json|js|css|mp3|ogg|wav|html|woff2?|ttf|svg|atlas|fnt|xml|webp|webm|mp4|cur|ani)', re.I)
REF_RE = re.compile(r'(?:src|href)\s*=\s*["\']([^"\']+)["\']', re.I)
MAX_FILES = 1200
MAX_BYTES = 120 * 1024 * 1024

def fetch(url):
    """curl-based fetch (urllib gets WAF-blocked). Returns (bytes|None, code).
    Polite pacing: the demo rate-limits concurrent/bursty fetches."""
    tmpbin = '/tmp/hf_%d.bin' % os.getpid()   # must be per-PROCESS (Pool forks!)
    for attempt in range(4):
        time.sleep(0.15)
        p = subprocess.run(
            ['curl', '-sS', '--compressed', '-A', UA, '--max-time', '60',
             '-o', tmpbin, '-w', '%{http_code}', url],
            capture_output=True, text=True)
        code = (p.stdout or '').strip()
        if code == '200':
            try:
                with open(tmpbin, 'rb') as f:
                    return f.read(), '200'
            except Exception:
                pass
        elif code in ('404', '403', '410'):
            return None, code
        time.sleep(1.5 * (attempt + 1))
    return None, code or 'ERR'

def norm(base_dir, ref):
    """resolve ref relative to base_dir (a path under /games/<N>/), keep inside /games/<N>/"""
    if ref.startswith(('http://', 'https://', 'data:', '//')):
        return None
    ref = ref.split('#')[0].split('?')[0]
    if not ref:
        return None
    fake = 'https://x' + (base_dir if base_dir.endswith('/') else base_dir + '/')
    cand = urllib.parse.urljoin(fake, ref)
    path = urllib.parse.urlparse(cand).path
    return path if path.startswith('/games/') else None

def relpath_for(urlpath, game):
    pre = f'/games/{game}/'
    if not urlpath.startswith(pre):
        return None
    rel = urlpath[len(pre):]
    return rel or None

def hunt_game(game):
    outdir = sys.argv[2]
    gd = os.path.join(outdir, game)
    os.makedirs(gd, exist_ok=True)
    if os.path.exists(os.path.join(gd, '_done.txt')):
        return f'{game} SKIP(already done)'
    root = f'/games/{game}/'
    visited = set()
    queue = [(root + 'amarent/index.html', 'page'), (root + 'index.html', 'page')]
    saved = []
    total_bytes = 0
    rounds = 0
    first_err = ''
    while queue and rounds < 10:
        rounds += 1
        batch = []
        while queue:
            item = queue.pop(0)
            if isinstance(item, tuple):
                u, kind = item
                if u in visited:
                    continue
                visited.add(u)
                batch.append((u, kind))
            else:
                batch.append(item)
        for u, kind in batch:
            if len(saved) >= MAX_FILES or total_bytes > MAX_BYTES:
                break
            if u.endswith('/'):
                u = u + 'index.html'
            rel = relpath_for(u, game)
            if rel is None or rel.endswith('/'):
                continue
            data, ct = fetch(BASE + urllib.parse.quote(u, safe='/'))
            if data is None:
                if not first_err:
                    first_err = f'{u} -> {ct}'
                continue
            total_bytes += len(data)
            fp = os.path.join(gd, rel)
            os.makedirs(os.path.dirname(fp), exist_ok=True)
            with open(fp, 'wb') as f:
                f.write(data)
            saved.append((rel, len(data)))
            ext = os.path.splitext(rel)[1].lower()
            if ext in TEXT_EXT or 'javascript' in ct or 'json' in ct or 'html' in ct or 'css' in ct:
                txt = None
                try:
                    txt = data.decode('utf-8', errors='replace')
                except Exception:
                    txt = None
                if txt:
                    basedir = u.rsplit('/', 1)[0] + '/'
                    # dynamic paths inside loader JS resolve against the PAGE base,
                    # not the script dir -> try several bases
                    bases = [basedir, basedir + '../', root]
                    refs = set()
                    for m in REF_RE.finditer(txt):
                        for b in bases:
                            r = norm(b, m.group(1))
                            if r and r not in visited:
                                refs.add(r)
                    for m in ASSET_RE.finditer(txt):
                        token = m.group(0)
                        for b in bases:
                            r = norm(b, token)
                            if r and r not in visited:
                                refs.add(r)
                    for r in refs:
                        if r.startswith(f'/games/{game}/') and r not in visited:
                            queue.append((r + 'index.html' if r.endswith('/') else r, 'ref'))
        # queue drained -> next round (refs were appended during batch)
        if not queue:
            break
    with open(os.path.join(gd, '_done.txt'), 'w') as f:
        f.write(f'files={len(saved)} bytes={total_bytes} rounds={rounds} err={first_err}\n')
    return f'{game} files={len(saved)} bytes={total_bytes // 1024}KB rounds={rounds} err={first_err}'

def init_args(a, b):
    global OUTDIR
    OUTDIR = a

if __name__ == '__main__':
    names_file, outdir = sys.argv[1], sys.argv[2]
    workers = int(sys.argv[3]) if len(sys.argv) > 3 else 10
    os.makedirs(outdir, exist_ok=True)
    names = [n.strip() for n in open(names_file).read().split() if n.strip()]
    print(f'mirroring {len(names)} AM games from {BASE} with {workers} workers', flush=True)
    results = []
    with Pool(workers) as p:
        for r in p.imap_unordered(hunt_game, names, chunksize=1):
            print('  ', r, flush=True)
            results.append(r)
    ok = sum(1 for r in results if 'files=' in r and not r.startswith('SKIP') and int(re.search(r'files=(\d+)', r).group(1)) > 3)
    with open(os.path.join(outdir, '_summary.txt'), 'w') as f:
        f.write('\n'.join(results) + '\n')
        f.write(f'\nOK games: {ok}/{len(names)}\n')
    print(f'MIRROR OK: {ok}/{len(names)} games mirrored', flush=True)
