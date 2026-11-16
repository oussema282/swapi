#!/usr/bin/env python3
"""Amatic fill pass v7 (mirror4): browser-authoritative + strict re-verify.

Runs AFTER mirror3 (which fills manifest gaps and rescues loader-generation
mismatches). Closes the failure class the Replit Agent's browser test proved
(amatic-missing-files.csv: 182 exact 404 paths / 53 titles):

1. CSV fill      — every browser-captured path is fetched EXACTLY (no dir
                   guessing) from the demo hosts and saved at that path.
2. Series walk   — JS builds names in loops ("symbanim"+i) so those refs are
                   invisible to string matching; each series ref (stem*.ext)
                   enumerates stem0..30 under its module/res dirs, stopping
                   after 2 consecutive misses.
3. Res siblings  — a filled <mod>/images/<res>/<name> is also fetched for the
                   other resolution dirs (phone/desktop variants).
4. Audio pairs   — a filled X.mp3 also fetches X.ogg (and vice versa).
5. Theme audit   — bare-name refs satisfied by a same-basename file in the
                   WRONG dir (e.g. basic/sounds/stopwild.mp3 when the browser
                   asks <theme>/sounds/stopwild.mp3) are re-placed at the
                   theme module path from the demo.
6. Strict verify — amverify v4 requires module-path-correct files for
                   module-qualified refs.

Final statuses -> <mirror>/_verify_final.json (the build gate input):
  complete        — every JS-referenced asset present at its exact path
  demo_equivalent — remaining refs exhausted across ALL demo hosts (the
                    reference deployment runs without them too) or series
                    absent entirely
  broken          — critical ref missing, unproven refs remain, or a
                    browser-captured path of a failing title stays unfilled
  absent          — no amarent shell
"""
import os, re, sys, json, csv, urllib.parse
import amverify
import mirror3 as M3
from mirror3 import HOSTS, head, get, kind_dirs, rescue_game
from multiprocessing import Pool

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.environ.get('AM_CSV') or os.path.join(SCRIPT_DIR, 'amatic-missing-files.csv')
RES_TYPES = ['800_600', '1280_720', '960_540', '1024_768', '1440_1080', '640_1136', '480_320', '960_640', '2048_1536']
AUDIO_PAIR = {'.mp3': '.ogg', '.ogg': '.mp3', '.m4a': '.ogg'}
SERIES_NAME = re.compile(r'^([A-Za-z_]+)\*\.(png|jpeg|jpg|gif|mp3|ogg|webp)$')


def load_csv():
    """game -> {'blocking': [rel,...], 'optional': [rel,...]} (rel after public/games/<G>/)"""
    out = {}
    if not os.path.exists(CSV_PATH):
        return out
    with open(CSV_PATH, encoding='utf-8-sig') as f:
        for row in csv.DictReader(f):
            m = re.match(r'^public/games/([^/]+)/(.+)$', row['required_zip_member'].strip())
            if not m:
                continue
            g, rel = m.group(1), m.group(2)
            passed = 'PASS' in (row.get('phone_result') or '') and 'PASS' in (row.get('desktop_result') or '')
            d = out.setdefault(g, {'blocking': [], 'optional': []})
            (d['optional'] if passed else d['blocking']).append(rel)
    for d in out.values():
        d['blocking'] = sorted(set(d['blocking']))
        d['optional'] = sorted(set(d['optional']))
    return out


def fetch_exact(game, rel, tmpbin):
    """Fetch one exact relative path from the demo hosts (demo4 first).
    None means 404 on EVERY host — full absence proof."""
    for host in HOSTS:
        url = f'{host}/games/{game}/' + urllib.parse.quote(rel, safe='/')
        if head(url) == '200':
            data = get(url, tmpbin)
            if data is not None and len(data) > 60 and data[:1] != b'<':
                return data
    return None


def save(gd, rel, data):
    fp = os.path.join(gd, rel)
    os.makedirs(os.path.dirname(fp), exist_ok=True)
    with open(fp, 'wb') as f:
        f.write(data)


def local_basenames(gd):
    idx = set()
    for dirpath, _, files in os.walk(gd):
        idx.update(files)
    return idx


def expand_siblings(game, gd, rel, tmpbin):
    """Filled <mod>/images/<res>/<name> -> fetch other res dirs; audio -> pair ext."""
    extra = []
    m = re.match(r'^([^/]+)/images/([^/]+)/([^/]+)$', rel)
    if m:
        mod, _res, name = m.groups()
        for rt in RES_TYPES:
            r2 = f'{mod}/images/{rt}/{name}'
            if r2 == rel or os.path.exists(os.path.join(gd, r2)):
                continue
            data = fetch_exact(game, r2, tmpbin)
            if data:
                save(gd, r2, data)
                extra.append(r2)
        return extra
    base, ext = os.path.splitext(rel)
    ext2 = AUDIO_PAIR.get(ext.lower())
    if ext2 and not os.path.exists(os.path.join(gd, base + ext2)):
        data = fetch_exact(game, base + ext2, tmpbin)
        if data:
            save(gd, base + ext2, data)
            extra.append(base + ext2)
    return extra


def series_prefixes(ref, rep):
    mod, kind, res = ref.get('module'), ref['kind'], ref.get('res')
    types = ([res] if res else []) + list((rep or {}).get('types') or ['800_600'])
    seen = set(); out = []
    if kind == 'sounds':
        cands = ([f'{mod}/sounds/'] if mod else []) + \
                [f'{t}/sounds/' for t in (((rep or {}).get('theme') or 'game'), 'basic', 'slot', 'gamble', 'poker')]
    else:
        cands = []
        if mod:
            cands += [f'{mod}/images/{rt}/' for rt in types]
        th = (rep or {}).get('theme') or 'game'
        cands += [f'{th}/images/{rt}/' for rt in types] + \
                 [f'{m}/images/{rt}/' for m in ('basic', 'slot', 'gamble', 'poker') for rt in types[:2]]
    for c in cands:
        if c not in seen:
            seen.add(c); out.append(c)
    return out


def _todo4(rep):
    """Todo refs preserving the series flag (mirror3's builder drops it)."""
    todo = []
    for r in rep.get('unsat_critical', []):
        todo.append({'name': r, 'kind': 'script' if r.endswith('.js') else 'images',
                     'module': None, 'res': None, 'critical': True,
                     'settings': bool(re.match(r'^_?\d{6,}\.js$', r)), 'theme': rep.get('theme'),
                     '_info': rep})
    for r in rep.get('unsat_pending', []):
        todo.append({'name': r['name'], 'kind': r['kind'], 'module': r.get('module'),
                     'res': r.get('res'), 'critical': False,
                     'settings': r.get('settings', False), 'series': r.get('series', False),
                     'theme': rep.get('theme'), '_info': rep})
    return todo


COARSE = [0, 1, 2, 3, 5, 8, 11, 15, 20, 25, 30]


def probe_series(game, gd, ref, rep, tmpbin):
    """Coarse scan to locate the occupied index range (series can start at 11,
    like symb-sounds), then dense walk with 2 margins."""
    m = SERIES_NAME.match(ref['name'])
    if not m:
        return []
    stem = m.group(1)
    ext = '.' + (m.group(2).replace('jpeg', 'jpg'))
    prefixes = series_prefixes(ref, rep)[:6]
    ext2 = AUDIO_PAIR.get(ext)

    def grab(i):
        for pre in prefixes:
            rel = f'{pre}{stem}{i}{ext}'
            data = fetch_exact(game, rel, tmpbin)
            if data:
                save(gd, rel, data)
                out = [rel] + expand_siblings(game, gd, rel, tmpbin)
                if ext2:
                    for pre2 in prefixes:
                        rel2 = f'{pre2}{stem}{i}{ext2}'
                        d2 = fetch_exact(game, rel2, tmpbin)
                        if d2:
                            save(gd, rel2, d2)
                            out.append(rel2)
                            break
                return out
        return None

    filled = []
    hits = {}
    for i in COARSE:
        got = grab(i)
        if got:
            hits[i] = got
    if not hits:
        return []
    lo = max(0, min(hits) - 2)
    hi = min(30, max(hits) + 2)
    for i in range(lo, hi + 1):
        got = grab(i)
        if got:
            hits[i] = got
    for i in sorted(hits):
        filled += hits[i]
    return filled


def probe_ref(game, gd, ref, rep, tmpbin):
    """Probe one todo ref; returns list of filled rels ([] == exhausted on all hosts)."""
    name, kind = ref['name'], ref['kind']
    if ref.get('settings'):
        core = name.lstrip('_')
        if core.endswith('.js'):
            core = core[:-3]
        for nm in [f'settings__{core}.js', f'settings_{core}.js'] + \
                  [f'settings_{K}_{core}.js' for K in range(1, 16)]:
            rel = f'amarent/src/{nm}'
            data = fetch_exact(game, rel, tmpbin)
            if data:
                save(gd, rel, data)
                return [rel]
        return []
    if ref.get('series'):
        return probe_series(game, gd, ref, rep, tmpbin)
    if ref.get('exact_rel'):
        data = fetch_exact(game, ref['exact_rel'], tmpbin)
        if data:
            save(gd, ref['exact_rel'], data)
            return [ref['exact_rel']] + expand_siblings(game, gd, ref['exact_rel'], tmpbin)
        return []
    exts = M3.EXTS_SND if kind == 'sounds' else (M3.EXTS_JSON if kind == 'data' else
           ('.js',) if kind == 'script' else M3.EXTS_IMG)
    base, rext = os.path.splitext(name)
    exts = (rext.lower(),) if rext else tuple(exts)
    dirs = kind_dirs(ref.get('_info', {}) or {}, kind, ref.get('module'), ref.get('res'))
    if kind == 'script':
        dirs = ['amarent/src/', 'amarent/', 'src/'] + [d for d in dirs if d.endswith('src/')]
    elif ref.get('critical'):
        dirs = ['amarent/', 'amarent/src/', 'amarent/css/'] + [d for d in dirs if d not in ('amarent/', 'amarent/src/', 'amarent/css/')]
    seen = set()
    for d in dirs:
        if d in seen:
            continue
        seen.add(d)
        for e in exts:
            rel = d + (name if name.endswith(e) else base + e)
            data = fetch_exact(game, rel, tmpbin)
            if data:
                save(gd, rel, data)
                return [rel] + expand_siblings(game, gd, rel, tmpbin)
    return []


def theme_audit(game, gd, rep, tmpbin):
    """Re-place bare-name refs satisfied at the wrong location: if the browser
    path <theme>/sounds/<name> or <theme>/images/<type>/<name> is missing but
    the ref is locally satisfied elsewhere, fetch the theme-location copy."""
    theme = rep.get('theme') or 'game'
    types = list(rep.get('types') or ['800_600'])[:4]
    filled = []
    for p in rep.get('refs', []):
        if p.get('critical') or p.get('series') or p.get('module') or not p.get('local'):
            continue
        name, kind = p['name'], p['kind']
        if kind == 'sounds' and name.lower().endswith(('.mp3', '.ogg', '.m4a')):
            rel = f'{theme}/sounds/{name}'
            if not os.path.exists(os.path.join(gd, rel)):
                data = fetch_exact(game, rel, tmpbin)
                if data:
                    save(gd, rel, data)
                    filled += [rel] + expand_siblings(game, gd, rel, tmpbin)
        elif kind == 'images':
            for rt in types:
                rel = f'{theme}/images/{rt}/{name}'
                if not os.path.exists(os.path.join(gd, rel)):
                    data = fetch_exact(game, rel, tmpbin)
                    if data:
                        save(gd, rel, data)
                        filled += [rel] + expand_siblings(game, gd, rel, tmpbin)
    return filled


def complete_game(args):
    game, csvrefs = args
    tmpbin = '/tmp/h7_%s.bin' % game
    gd = os.path.join(M3.MIRROR, game)
    rep = amverify.analyze(M3.MIRROR, game)
    if rep is None or rep['status'] == 'absent':
        return {'game': game, 'result': 'absent', 'filled': [], 'browser404': []}
    filled_all = []
    rescued = None
    minimal = bool(rep['unsat_critical'])   # broken on boot refs: skip series/audit work
    blocking_now = [rel for rel in csvrefs.get('blocking', [])
                    if not os.path.exists(os.path.join(gd, rel))]
    if rep['status'] == 'complete' and not blocking_now:
        return {'game': game, 'result': 'complete', 'filled': [], 'browser404': []}

    # 1) browser-captured paths: exact, authoritative (blocking + optional)
    unfilled_browser = []
    for rel in csvrefs.get('blocking', []) + csvrefs.get('optional', []):
        if os.path.exists(os.path.join(gd, rel)):
            continue
        data = fetch_exact(game, rel, tmpbin)
        if data:
            save(gd, rel, data)
            filled_all += [rel] + expand_siblings(game, gd, rel, tmpbin)
        else:
            unfilled_browser.append(rel)

    # 2) iterative strict verify + fill (series walk, theme audit, generic)
    exhausted = set()
    for it in range(4):
        rep = amverify.analyze(M3.MIRROR, game)
        if rep is None:
            return {'game': game, 'result': 'absent', 'filled': filled_all, 'browser404': unfilled_browser}
        if rep['status'] == 'complete':
            break
        if it == 0 and not minimal:
            filled_all += theme_audit(game, gd, rep, tmpbin)
            rep = amverify.analyze(M3.MIRROR, game)
            if rep is None or rep['status'] == 'complete':
                break
        todo = _todo4(rep)
        if minimal:
            todo = [t for t in todo if t.get('critical')]
        got = []
        for t in todo:
            f = probe_ref(game, gd, t, rep, tmpbin)
            if f:
                got += f
                exhausted.discard(t['name'])
            else:
                exhausted.add(t['name'])
        if not got:
            if rep['unsat_critical'] and rescued is None:
                rescued = rescue_game(game, gd)
                if rescued == 'complete':
                    break
            break
        filled_all += got

    rep = amverify.analyze(M3.MIRROR, game)
    if rep is None:
        return {'game': game, 'result': 'absent', 'filled': filled_all, 'browser404': unfilled_browser}
    names = local_basenames(gd)
    unproven = []
    for p in rep['unsat_pending']:
        if p.get('series'):
            m = SERIES_NAME.match(p['name'])
            if m and any(n.startswith(m.group(1)) and n.endswith('.' + m.group(2).replace('jpeg', 'jpg'))
                         for n in names):
                continue   # series present locally — device picks the indices
        if p['name'] in exhausted:
            continue       # exhausted probe = 404 on every demo host (full sweep)
        unproven.append(p['name'])
    blocking_missing = [rel for rel in csvrefs.get('blocking', [])
                        if not os.path.exists(os.path.join(gd, rel))]
    crit = rep['unsat_critical']
    if crit or unproven or blocking_missing:
        result = 'broken'
    else:
        result = 'demo_equivalent'
    return {'game': game, 'result': result, 'filled': filled_all,
            'browser404': blocking_missing + [x for x in unfilled_browser if x not in blocking_missing],
            'unproven': unproven, 'critical': crit, 'rescued': rescued}


if __name__ == '__main__':
    mirror, workers = sys.argv[1], int(sys.argv[3]) if len(sys.argv) > 3 else 16
    HOSTS[:] = M3.alive_hosts()
    print('alive demo hosts:', HOSTS, flush=True)
    games = sorted(d for d in os.listdir(mirror)
                   if os.path.isdir(os.path.join(mirror, d)) and not d.startswith('_'))
    csvrefs = load_csv()
    n_csv = sum(len(v['blocking']) + len(v['optional']) for v in csvrefs.values())
    print(f'fill v7: {len(games)} games, {workers} workers, csv refs: {n_csv} '
          f'across {len(csvrefs)} titles', flush=True)
    args = [(g, csvrefs.get(g, {'blocking': [], 'optional': []})) for g in games]
    details = {}
    with Pool(workers, initializer=M3.init, initargs=(mirror,)) as p:
        for r in p.imap_unordered(complete_game, args, chunksize=1):
            g = r.pop('game')
            details[g] = r
            print(f"   {g}: {r['result']} filled={len(r.get('filled', []))} "
                  f"browser404={len(r.get('browser404', []))} "
                  f"unproven={len(r.get('unproven', []))} crit={len(r.get('critical', []))}", flush=True)
    final = {}
    for g in games:
        d = details.get(g, {'result': 'broken'})
        final[g] = {'status': d['result'],
                    'filled_v7': len(d.get('filled', [])),
                    'browser404': d.get('browser404', []),
                    'unproven': d.get('unproven', []),
                    'critical_missing': d.get('critical', []),
                    'rescued': d.get('rescued')}
    json.dump(details, open(os.path.join(mirror, '_fill_v7.json'), 'w'), indent=1)
    json.dump(final, open(os.path.join(mirror, '_verify_final.json'), 'w'), indent=1)
    from collections import Counter
    print('FINAL v7:', json.dumps(Counter(v['status'] for v in final.values())), flush=True)
    print('FILL v7 DONE', flush=True)
