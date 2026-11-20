#!/usr/bin/env python3
"""bonus_sim2.py — v2: faithful Monte Carlo of delivered goldsvet PP engines.
Per-engine getPsym formula parsed from SlotArea.php (fwd/rev/bwd), scatter cap,
mbr wild multipliers, WinPermission gate (payable iff win<=bank-bet/2, <=8 tries,
fallback pay), bonus-mode money (refill bet, no house cut).
Bonus scheme: 50 TND bonus, W wager multiplier on 50 -> turnover 50*W, stake 0.2.
"""
import re, math
import numpy as np

ENGINES = '/home/user/swapi/assets/pp-gs2c/engines'
BET = 0.2

def parse_init(game):
    s = open(f'{ENGINES}/{game}/init.php').read()
    def get(k):
        m = re.search(r"'%s=([^']*)'" % k, s)
        return m.group(1) if m else None
    d = {'game': game}
    if get('reel_set0'):
        d['reels'] = [[int(x) for x in st.split(',')] for st in get('reel_set0').split('~')]
    else:
        d['reels'] = [[int(x) for x in get(f'reel{i}').split(',')] for i in range(5)]
    d['paytable'] = [[float(x) for x in row.split(',')] for row in get('paytable').split(';')]
    d['paylines'] = [[int(x) for x in row.split(',')] for row in get('payline').split(';')]
    sc = get('scatters').split('~')
    d['scatter_sym'] = int(sc[0])
    d['scatter_tbl'] = [float(x) for x in sc[1].split(',')]
    w = get('wilds').split('~')
    d['wild_sym'] = int(w[0])
    d['sh'] = int(get('sh'))
    sarea = open(f'{ENGINES}/{game}/PragmaticLib/SlotArea.php').read()
    d['scatter_cap'] = 1 if re.search(r'\$limit = 1;', sarea) else 0
    mm = re.search(r'function getPsym.*?scatterPayTable = (.*?);.*?\$pay = (?:\$gwm \* )?round\(\$scatterPayTable\[(.*?)\] \* \$bet \* \$lines, 2\)', sarea, re.S)
    if mm:
        rev = 'array_reverse' in mm.group(1)
        idx = mm.group(2)
        d['fmode'] = 'rev' if rev else ('bwd' if 'count($scatterPayTable) - $cnt' in idx else 'fwd')
    else:
        d['fmode'] = None  # no SlotArea::getPsym (cluster engines)
    d['has_mbr'] = 'mbr' in open(f'{ENGINES}/{game}/PragmaticLib/WinChecker.php').read()
    return d

def php_round(x):
    return np.floor(x * 100 + 0.5) / 100

def draw(d, rng, m):
    reels = d['reels']; L = [len(r) for r in reels]
    sh = d['sh']; nr = len(reels)
    pos = [rng.integers(0, L[r] + 1, m) for r in range(nr)]
    SA = np.empty((m, sh * nr), dtype=np.int64)
    for r in range(nr):
        st = reels[r]; lr = L[r]
        cyc = np.concatenate([st, st[:10]])
        for row in range(sh):
            SA[:, row * nr + r] = cyc[pos[r] + row]
    return SA

def apply_cap(d, SA, rng):
    ssym = d['scatter_sym']; m = len(SA)
    sc_mask = SA == ssym
    rows, cols = np.nonzero(sc_mask)
    last = np.full(m, -1)
    for r0, c0 in zip(rows, cols):
        if c0 > last[r0]:
            last[r0] = c0
    for i in range(len(rows)):
        r0, c0 = rows[i], cols[i]
        if c0 < last[r0]:
            SA[r0, c0] = rng.integers(4, 14)
    return (SA == ssym).sum(1)

def apply_mbr(d, SA, rng):
    wsym = d['wild_sym']; sh = d['sh']; nr = len(d['reels'])
    r1cols = [row * nr + 1 for row in range(sh)]
    r2cols = [row * nr + 2 for row in range(sh)]
    wr1 = (SA[:, r1cols] == wsym).any(1)
    wr2 = (SA[:, r2cols] == wsym).any(1)
    both = wr1 & wr2
    if both.any():
        selr = np.nonzero(both)[0]
        for c in r2cols:
            sel = selr[SA[selr, c] == wsym]
            if sel.size:
                SA[sel, c] = rng.integers(4, 14)
    return rng.integers(2, 4, (len(SA), 3)).astype(float)  # rand(2,3) inclusive

def line_wins(d, SA, mbr, coin):
    pt = d['paytable']; pls = d['paylines']; wsym = d['wild_sym']
    nr = len(d['reels']); m = len(SA)
    total = np.zeros(m)
    for pl in pls:
        syms = [SA[:, pl[c] * nr + c] for c in range(nr)]
        broken = np.zeros(m, bool)
        cn = np.ones(m)
        wsymv = syms[0].copy()
        mtmp = np.zeros(m)
        for c in range(nr):
            v = syms[c]
            if 0 <= c - 1 < 3:
                mtmp += np.where((v == wsym) & ~broken, mbr[:, c - 1], 0)
            if c == 0:
                wsymv = v.copy()
            else:
                upd = ~broken & (v != wsym) & (wsymv == wsym)
                wsymv[upd] = v[upd]
                mism = ~broken & (wsymv != wsym) & (wsymv != v) & (v != wsym)
                broken |= mism
                cn[~broken] += 1
        multi = np.where(mtmp > 0, mtmp, 1.0)
        payv = np.zeros(m)
        for sidx in range(len(pt)):
            row = pt[sidx]
            msk = (wsymv == sidx)  # PHP pays the frozen prefix even after break
            if not msk.any():
                continue
            idxr = len(row) - cn[msk].astype(int)
            ok = (idxr >= 0) & (idxr < len(row))
            vals = np.zeros(msk.sum())
            if ok.any():
                vals[ok] = np.array(row)[idxr[ok]]
            payv[msk] = vals
        lw = php_round(payv * coin * multi)
        total += np.where(lw > 0, lw, 0)
    return total

def scatter_wins(d, cnt, coin, nl):
    tbl = d['scatter_tbl']; fmode = d['fmode']
    m = len(cnt)
    pay = np.zeros(m)
    if fmode is None:
        return pay
    for k in range(1, len(tbl) + 1):
        msk = cnt == k
        if not msk.any():
            continue
        if fmode == 'fwd':
            i = k - 1
        elif fmode == 'rev':
            i = len(tbl) - k
        else:  # bwd: index count - cnt
            i = len(tbl) - k
        if 0 <= i < len(tbl):
            pay[msk] = tbl[i] * coin * nl
    return pay

def calibrate(d, spins=300000, seed=99):
    """RTP at infinite bank. Returns (rtp, lines_rtp, scatter_rtp)."""
    rng = np.random.default_rng(seed)
    nl = len(d['paylines']); coin = BET / nl
    tw = 0.0; lw_sum = 0.0; sw_sum = 0.0
    B = 100000
    for _ in range(spins // B):
        SA = draw(d, rng, B)
        cnt = (SA == d['scatter_sym']).sum(1)
        if d['scatter_cap']:
            cnt = apply_cap(d, SA, rng)
        mbr = apply_mbr(d, SA, rng) if d['has_mbr'] else np.zeros((B, 3))
        lw = line_wins(d, SA, mbr, coin)
        sw = scatter_wins(d, cnt, coin, nl)
        lw_sum += lw.sum(); sw_sum += sw.sum(); tw += (lw + sw).sum()
    bet = coin * nl
    return tw / (spins * bet), lw_sum / (spins * bet), sw_sum / (spins * bet)

def scenario(d, bank0, W, trials=15000, seed=7):
    n_spins = int(50 * W / BET)
    rng = np.random.default_rng(seed)
    nl = len(d['paylines']); coin = BET / nl
    pool = np.full(trials, 50.0)
    bank = np.full(trials, float(bank0))
    maxbal = np.full(trials, 50.0)
    completed = np.zeros(trials, bool)
    leftover = np.zeros(trials)
    alive = np.ones(trials, bool)
    B = trials
    for step in range(n_spins):
        act = np.nonzero(alive)[0]
        if act.size == 0:
            break
        pool[act] -= BET
        m = act.size
        win = np.zeros(m)
        need = np.ones(m, bool)
        tries = 0
        while need.any() and tries < 8:
            idx = act[need]
            mm = idx.size
            SA = draw(d, rng, mm)
            cnt = (SA == d['scatter_sym']).sum(1)
            if d['scatter_cap']:
                cnt = apply_cap(d, SA, rng)
            mbr = apply_mbr(d, SA, rng) if d['has_mbr'] else np.zeros((mm, 3))
            lw = line_wins(d, SA, mbr, coin)
            sw = scatter_wins(d, cnt, coin, nl)
            total = php_round(lw + sw)
            bankv = bank[idx]
            payable = (total <= 0) | (total <= bankv - BET / 2)
            win[np.nonzero(need)[0]] = total
            still = need.copy()
            still[np.nonzero(need)[0][payable]] = False
            need = still
            tries += 1
        win_paid = np.where(win > 0, win, 0)
        bank[act] += BET
        bank[act] -= win_paid
        pool[act] += win_paid
        maxbal[act] = np.maximum(maxbal[act], pool[act])
        alive[act] = pool[act] >= BET
    completed = alive.copy()
    leftover = np.where(completed, pool, 0)
    pc = completed.mean()
    el = leftover[completed].mean() if completed.any() else 0.0
    A = leftover.mean()
    Bv = 50.0 * pc
    mx = np.where(completed, np.maximum(leftover, 50.0), 0.0)
    M = mx.mean()
    pexit = (maxbal > 60).mean()
    q = np.percentile(leftover[completed], [10, 50, 90]) if completed.any() else np.zeros(3)
    pgt50 = (leftover[completed] > 50).mean() if completed.any() else 0.0
    return dict(game=d['game'], bank=bank0, W=W, pc=pc, el=el, A=A, B=Bv, M=M,
                pexit=pexit, pgt50=pgt50, q=q)

if __name__ == '__main__':
    out = open('/tmp/sim_results_w10.txt', 'w')
    def P(*a):
        line = ' '.join(str(x) for x in a)
        print(line, flush=True); out.write(line + '\n'); out.flush()
    games = ['TheDogHouse', 'Super7s', 'StrikingHot5', 'BookofTutPM',
             'SafariKing', 'TalesofEgypt', 'WildGladiators']
    P('game             bank    W spins  P(done) P(max>60)    E[A]   E[B]  E[max]   L p10/p50/p90  P(L>50|done)')
    for g in games:
        d = parse_init(g)
        for bank0, tag in ((20.2676, 'thin'), (250000, 'fund')):
            r = scenario(d, bank0, 10, trials=4000, seed=900 + len(g))
            P(f"{g:16s} {tag:>5s} {10:3d} {2500:5d}  {r['pc']:7.3f}  {r['pexit']:7.3f}  {r['A']:8.2f} {r['B']:6.2f} {r['M']:8.2f}   {r['q'][0]:6.1f}/{r['q'][1]:6.1f}/{r['q'][2]:6.1f}   {r['pgt50']:.3f}")
    P('DONE')
