#!/usr/bin/env python3
"""Discover which rar game names have harvestable clients on the demo.
Probe order per name: gs2c/html5Game.html (full PP client), index.html (PM shell),
desktop/bootstrap.js (PM bundle check). Output: JSON {name: type}."""
import os, sys, json, subprocess, urllib.parse
from multiprocessing import Pool

HOSTS_ALL = ["https://demo4.scriptcasino.ru", "https://demo2.scriptcasino.ru", "https://demo3.scriptcasino.ru"]
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"

def sh(args):
    return subprocess.run(args, capture_output=True, text=True)

def code(url):
    # identical flags to mirror5.fetch (which demonstrably works): full GET + compressed
    p = sh(['curl', '-sS', '--compressed', '-A', UA, '--connect-timeout', '4', '--max-time', '30',
            '-o', '/dev/null', '-w', '%{http_code}', url])
    c = (p.stdout or '').strip()
    return c if c == '200' else None

HOSTS = HOSTS_ALL

def probe(name):
    for h in HOSTS:
        c = code(f'{h}/games/{name}/gs2c/html5Game.html')
        if c:
            return name, 'gs2c'
    for h in HOSTS:
        c = code(f'{h}/games/{name}/desktop/bootstrap.js')
        if c:
            return name, 'pm'
    return name, None

if __name__ == '__main__':
    names_file = sys.argv[1]
    out_file = sys.argv[2]
    workers = int(sys.argv[3]) if len(sys.argv) > 3 else 16
    names = [n.strip() for n in open(names_file) if n.strip()]
    print(f'probing {len(names)} names on {workers} workers', flush=True)
    res = {}
    with Pool(workers) as p:
        for i, (name, typ) in enumerate(p.imap_unordered(probe, names, chunksize=8)):
            if typ:
                res[name] = typ
            if (i + 1) % 200 == 0:
                print(f'  {i+1}/{len(names)} probed, {len(res)} candidates', flush=True)
    json.dump(res, open(out_file, 'w'), indent=1)
    print(f'CANDIDATES: {len(res)}', flush=True)
    print('gs2c:', sum(1 for v in res.values() if v == 'gs2c'), ' pm:', sum(1 for v in res.values() if v == 'pm'), flush=True)
