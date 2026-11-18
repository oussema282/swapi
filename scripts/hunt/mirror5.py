#!/usr/bin/env python3
"""Generic client harvester v1 (Pragmatic gs2c + goldsvet PM shells + fallback AM).

For each game: classify the client type by probing shells in order
  1. /games/<N>/gs2c/html5Game.html   (real Pragmatic gs2c client)
  2. /games/<N>/index.html            (goldsvet-native PM shell)
  3. /games/<N>/amarent/index.html    (goldsvet AM shell — legacy path)
then BFS-download every referenced file:
  - html: (src|href)="..." refs
  - css:  url(...) refs
  - js:   quoted string literals ending in .js/.css/.json/.png/.jpg/.webp/.mp3/.ogg/.fnt/.atlas/.xml/.txt
Relative refs resolve against the current file's directory (urljoin semantics);
site-root refs ("/games/x", "/js/x") are saved under <mirror>/_site<sitepath> —
the build copies that tree into the stage root so the browser finds them.
Dynamic-name refs the BFS cannot see are reported as unfilled (the verify pass
re-parses the corpus and tries every unsatisfied ref once more, HEAD-first,
so "unfilled" == 404-proven on all alive demo hosts).

Per-game output line:  game TYPE files=N bytes=B unfilled=K [LIST]
Budget: --max-files / --max-mb per game (soft; shell chain always finishes).
"""
import os, re, sys, json, time, subprocess, urllib.parse
from multiprocessing import Pool
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urljoin, urlparse

HOSTS_ALL = ["https://demo4.scriptcasino.ru", "https://demo2.scriptcasino.ru",
             "https://demo3.scriptcasino.ru", "https://demo5.scriptcasino.ru",
             "https://demo6.scriptcasino.ru"]
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
REF_STR = re.compile(r'["\'(]([A-Za-z0-9_./@-]+\.(?:js|css|json|png|jpe?g|webp|gif|mp3|ogg|m4a|fnt|atlas|xml|txt|html|ico|woff2?|ttf|mp4))["\')]', re.I)
HTML_REF = re.compile(r'(?:src|href|data-src)=["\']([^"\']+)["\']', re.I)
CSS_URL = re.compile(r'url\(\s*[\'"]?([^\'")]+)[\'"]?\s*\)', re.I)
SKIP_EXT = ('.php',)
MAX_PARSE = 4000

def sh(args):
    return subprocess.run(args, capture_output=True, text=True)

def alive_hosts():
    out = []
    for h in HOSTS_ALL:
        p = sh(['curl', '-sS', '-I', '-A', UA, '--connect-timeout', '3', '--max-time', '5',
                '-o', '/dev/null', '-w', '%{http_code}', h + '/'])
        if (p.stdout or '').strip() not in ('', '000'):
            out.append(h)
    return out or HOSTS_ALL[:1]

HOSTS = HOSTS_ALL[:]

def head(url):
    p = sh(['curl', '-sS', '-I', '-A', UA, '--connect-timeout', '4', '--max-time', '10',
            '-o', '/dev/null', '-w', '%{http_code}', url])
    return (p.stdout or '').strip()

def fetch(url, tmpbin):
    p = sh(['curl', '-sS', '--compressed', '-A', UA, '--connect-timeout', '4', '--max-time', '90',
            '-o', tmpbin, '-w', '%{http_code}', url])
    if (p.stdout or '').strip() == '200':
        try:
            with open(tmpbin, 'rb') as f:
                d = f.read()
            if len(d) > 60 and d[:1] != b'<' or (len(d) > 60 and d[:15].lower().startswith(b'<!doctype html') and url.endswith(('.html', '/'))):
                return d
            if len(d) > 60 and not d[:1] == b'<':
                return d
        except Exception:
            return None
    return None

MIRROR = None

def init(m):
    global MIRROR
    MIRROR = m

def classify(game, tmpbin):
    """Returns (type, shell_relpath, shell_bytes, site_files) or None."""
    for typ, rel in (('gs2c', 'gs2c/html5Game.html'), ('pm', 'index.html'), ('am', 'amarent/index.html')):
        data = fetch(f'{HOSTS[0]}/games/{game}/{rel}', tmpbin)
        if data and len(data) > 500:
            return typ, rel, data
    return None

def parse_refs(text, base_dir, game):
    """Yield (sitepath, kind) refs resolved against base_dir (dir of current file, no trailing /)."""
    out = []
    seen = set()
    cands = []
    for m in HTML_REF.finditer(text):
        cands.append(m.group(1))
    for m in CSS_URL.finditer(text):
        cands.append(m.group(1))
    for m in REF_STR.finditer(text):
        cands.append(m.group(1))
    for c in cands[:MAX_PARSE]:
        c = c.strip()
        if not c or c.startswith(('data:', '#', 'javascript:', 'about:')):
            continue
        if c.startswith('//'):
            continue
        if re.match(r'https?://', c):
            continue   # external hosts are skipped (dev-IP console.php etc.)
        if c.split('?')[0].endswith(SKIP_EXT):
            continue
        c = c.split('?')[0].split('#')[0]
        if not c or c.endswith('/'):
            continue
        if c.startswith('/'):
            site = c.lstrip('/')
        else:
            joined = urljoin(base_dir + '/', c)
            site = joined.lstrip('/')
        if not site or site.endswith('/'):
            continue
        if site in seen:
            continue
        seen.add(site)
        ext = os.path.splitext(site)[1].lower()
        if ext in ('.js', '.json'):
            kind = 'text'
        elif ext in ('.css', '.html'):
            kind = 'text'
        else:
            kind = 'bin'
        out.append((site, kind))
    return out

def game_type_of(sitepath, game):
    """paths inside this game's dir start with games/<game>/ ; others are site-level"""
    return sitepath.startswith(f'games/{game}/')

def harvest_game(args):
    game, max_files, max_mb = args
    tmpbin = '/tmp/m5_%s.bin' % re.sub(r'[^A-Za-z0-9]', '', game)[:40] + ('_%d' % os.getpid())
    gd = os.path.join(MIRROR, game)
    os.makedirs(gd, exist_ok=True)
    cl = classify(game, tmpbin)
    if cl is None:
        return {'game': game, 'type': 'absent', 'files': 0, 'bytes': 0, 'unfilled': [], 'external': []}
    typ, shell_rel, shell_bytes = cl
    local = {}   # sitepath -> bytes
    site = {}    # sitepath -> bytes (site-level files)
    unfilled = set()
    external = set()

    def store(sitepath, data):
        if game_type_of(sitepath, game):
            local[sitepath] = data
        else:
            site[sitepath] = data

    store(f'games/{game}/{shell_rel}', shell_bytes)
    frontier = [(f'games/{game}/{shell_rel}', shell_bytes)]
    rounds = 0
    budget_hit = False

    def fetch_any(ref):
        """Fetch a ref from the alive hosts; returns (ref, data|None)."""
        d = fetch(f'{HOSTS[0]}/{urllib.parse.quote(ref, safe="/.")}', tmpbin)
        if d is not None:
            return ref, d
        for h in HOSTS[1:]:
            d = fetch(f'{h}/{urllib.parse.quote(ref, safe="/.")}', tmpbin)
            if d is not None:
                return ref, d
        return ref, None

    while frontier and rounds < 14:
        rounds += 1
        todo = []
        for sp, data in frontier:
            base_dir = os.path.dirname(sp)
            try:
                text = data.decode('utf-8', errors='replace')
            except Exception:
                continue
            for ref, _kind in parse_refs(text, base_dir, game):
                if ref in local or ref in site or ref in unfilled or ref in todo:
                    continue
                if len(local) + len(site) >= max_files:
                    budget_hit = True
                    break
                todo.append(ref)
            if budget_hit:
                break
        if budget_hit:
            break
        newf = []
        with ThreadPoolExecutor(max_workers=8) as ex:
            for ref, d in ex.map(fetch_any, todo):
                if d is not None:
                    store(ref, d)
                    newf.append((ref, d))
                else:
                    unfilled.add(ref)
        frontier = newf
        total_mb = (sum(len(v) for v in local.values()) + sum(len(v) for v in site.values())) / 1e6
        if total_mb >= max_mb:
            budget_hit = True
        if budget_hit:
            break

    # verify round: re-parse every downloaded text file for refs we never fetched
    vtodo = set()
    for sp, data in list(local.items()) + list(site.items()):
        try:
            text = data.decode('utf-8', errors='replace')
        except Exception:
            continue
        for ref, _kind in parse_refs(text, os.path.dirname(sp), game):
            if ref not in local and ref not in site and ref not in unfilled:
                vtodo.add(ref)
    vtodo = [r for r in sorted(vtodo) if len(local) + len(site) < max_files]
    with ThreadPoolExecutor(max_workers=8) as ex:
        for ref, d in ex.map(fetch_any, vtodo):
            if d is not None:
                store(ref, d)
            else:
                unfilled.add(ref)

    # persist to disk
    for sp, data in local.items():
        fp = os.path.join(gd, os.path.relpath(sp, f'games/{game}/'))
        os.makedirs(os.path.dirname(fp), exist_ok=True)
        with open(fp, 'wb') as f:
            f.write(data)
    if site:
        sd = os.path.join(MIRROR, '_site')
        for sp, data in site.items():
            fp = os.path.join(sd, sp)
            os.makedirs(os.path.dirname(fp), exist_ok=True)
            with open(fp, 'wb') as f:
                f.write(data)

    total = sum(len(v) for v in local.values()) + sum(len(v) for v in site.values())
    return {'game': game, 'type': typ, 'files': len(local) + len(site),
            'bytes': total, 'rounds': rounds, 'budget': budget_hit,
            'unfilled': sorted(unfilled)[:30], 'unfilled_n': len(unfilled),
            'site_files': len(site)}


if __name__ == '__main__':
    mirror = sys.argv[1]
    rest = sys.argv[2:]
    games, max_files, max_mb = [], 1500, 400
    i = 0
    while i < len(rest):
        t = rest[i]
        if t == '--max-files':
            max_files = int(rest[i + 1]); i += 2
        elif t == '--max-mb':
            max_mb = int(rest[i + 1]); i += 2
        elif t.startswith('--'):
            i += 2
        else:
            games.append(t); i += 1
    HOSTS[:] = alive_hosts()
    print('alive demo hosts:', HOSTS, flush=True)
    print(f'harvest pilot: {len(games)} games, max_files={max_files}, max_mb={max_mb}', flush=True)
    init(mirror)
    out = {}
    with Pool(min(6, len(games) or 1), initializer=init, initargs=(mirror,)) as p:
        for r in p.imap_unordered(harvest_game, [(g, max_files, max_mb) for g in games]):
            out[r['game']] = r
            u = r.get('unfilled', [])
            print(f"   {r['game']}: type={r['type']} files={r['files']} "
                  f"bytes={r['bytes']} rounds={r.get('rounds')} unfilled={r.get('unfilled_n')} "
                  f"site={r.get('site_files', 0)}{' BUDGET' if r.get('budget') else ''}", flush=True)
            if u:
                print('      unfilled sample:', ', '.join(u[:12]), flush=True)
    os.makedirs(mirror, exist_ok=True)
    json.dump(out, open(os.path.join(mirror, '_pilot.json'), 'w'), indent=1)
    print('PILOT DONE', flush=True)
