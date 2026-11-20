# PP Bonus-Promocode Math Study (follow-up 21)

**Date:** 2026-09-23 · **Scope:** math study only — **no production code created or changed** (per instruction).
**Question:** with the delivered Pragmatic (gs2c) engines in `assets/pp-gs2c/engines/`, can a bonus player
who receives e.g. **50 TND bonus with 10× wager (= 500 TND turnover) at a fixed stake of 0.2 TND**
(≈ **2,500 spins**, wager 10×; 1,250 spins at 5×, 5,000 spins at 20×) escape the "stuck" 25–60 TND band
and cash out? Two cashout outputs modeled: **A** = take the remaining bonus balance after wagering;
**B** = take the original 50 TND.

Companion simulator (analysis tooling, not wired into the app): `scripts/study/bonus_sim.py`,
raw outputs `scripts/study/bonus_sim-results.txt` and `bonus_sim-results-w10.txt`.

---

## 1. Executive answer

**It depends entirely on which game the promocode pins — and no game class gives the "fair" outcome.**

| Game class (delivered engines) | True RTP | P(player completes 2,500 spins) | Median cashout A | Verdict for the promo |
|---|---|---|---|---|
| **BookofTutPM, SafariKing, TalesofEgypt** | **159% / 244% / 1,961%** | **100%** (even on the thin deployed bank) | 64.3 / 69.5 / 64.9 TND thin-bank · **359 / 774 / 9,376 TND** funded | **Exploit engines** — every player cashes out, at 1.3×–190× the bonus |
| **TheDogHouse** (+ the 24 other capped line engines: BigBass ×6, WildWestGold, ChilliHeat, PirateGold, PyramidKing, DayofDead, CowboysGold, WildPixies, WildBooster, TweetyHouse, RiseOfSamurai3, TheTigerWarrior, ReturnOfTtheDead, VampiresvsWolves, SugarRush…) | ≈ 38–55% | **0.0%** | — | **Always stuck** — the bonus dies 100% of the time; player keeps nothing |
| **Super7s / StrikingHot5** | 85.2% | 8–13% | 20–30 TND | Almost always stuck; EV of cashout ≈ 2–7 TND |
| **WildGladiators** | 86.4% | 4.2% | 5 TND | Same |
| **Cluster engines** (GatesofOlympus, SweetBonanza, SugarRush, StarlightPrincess, CandyVillage, BonanzaGold, SweetBonanzaXmas, WildBeachParty) | ≈ 96% (estimate; crown pays 60×/100× at 1.2% trigger) | ≈ 15–25% (est.) | — | Closest to fair, but not exactly simulated (tumble+FS math) |

- **Cashout A ≫ cashout B on the exploit engines** (Tut thin bank: A = 62.9 vs B = 50; funded bank: A = 364 vs B = 50). If both options exist, players on Tut/Safari/Tales always take A and the operator pays out 1.3×–190× the bonus face value.
- On the stuck engines **neither output is reachable** (wagering can't be completed, so no cashout at all) — this is the angry "stuck in 25–60" experience: measured **24–31% of players pop above 60 mid-run and then fall back and bust** (Super7s/StrikingHot5), and the rest drift monotonically down through the band to zero.
- The **bank gate (WinPermission) acts as an RTP clamp** at the deployed thin bank (shop-1 slots bank = **20.2676**): the exploit engines' effective RTP collapses from 159–1,961% to ≈ **102–104%** because wins larger than `bank − bet/2` are rerolled (bounded 8 tries in the shipped pack). On a funded bank they pay out at full broken RTP.

**Bottom line:** today no promocode configuration is both safe and fair. Pin the promo on Tut/Safari/Tales and you bleed (thin bank masks it to ~2–4% loss per promo; funded bank bleeds 5–185× the bonus). Pin it on any capped line engine and 100% of players lose everything (current behavior, and the source of the complaints). The fix list is §9.

---

## 2. What was replicated 1:1 from the vendored PHP

The simulator ports the actual engine code path (not a generic slot model):

- **Money layer** (`SwitchMoney`/`SlotBank`, bonus mode `count_balance=0`): player balance −= total bet once per request; internal rerolls are free; bank refill = bet (bonus mode, no house cut); `bank += bet − win_paid`.
- **Gate** (`WinPermission::winCheck`): a win is payable iff `win ≤ bank − bet/2` (and `fswin ≤ bank_bonus − bet/2`); otherwise the spin is re-drawn — **8 tries max** in the shipped pack (our f19 bounded-reroll repair), then the 8th outcome is paid anyway. *Note: your live 8.5 code has the original **unbounded** loop, which makes the clamp absolute (big wins rerolled until one fits under the ceiling).*
- **RNG** (`SlotArea`): per reel `rand(0, strip_length)` inclusive → 3 visible cells via the cycled strip (`cycled = strip + strip[:10]`, PHP-identical), grid stored column-major `SA[row*5 + reel]`.
- **Line math** (`WinChecker::getWin`) — including the semantics that are easy to misread:
  ```php
  if($winSymbol != $this->wild && $winSymbol != $lineValue && $lineValue != $this->wild)
      break;               // freeze the counter …
  $cnt ++;
  ...
  $win = round($this->paytable[$winSymbol][count($this->paytable[$winSymbol]) - $cnt] * $bet * $multi, 2);
  if ($win > 0){ ... $totalWin += $win; }   // … but the frozen prefix STILL PAYS
  ```
  A line that "breaks" at symbol 4 still pays its first 3 symbols (`$cnt` frozen, pay computed after the loop). Wilds carry x2/x3 multipliers (`mbr` = `rand(2,3)` per reel 1–2, applied via `setMB`'s double-wild replacement). `$bet` here is the **coin** `c` (Server.php: `$bet = $request->input('c')`), so line wins = paytable × coin ✓.
- **Scatter pays** (`SlotArea::getPsym`, called for any scatter count in base game): `pay = table[i] × coin × lines` with **three different index conventions across engines** (§3) — this is where the exploits live.
- **Scatter cap** (base game): `$limit = 1` keeps only the last scatter and replaces the others with `rand(4,14)` → scatter counts ≥ 2 are impossible on 25 of the 34 line engines.
- **FS state:** `settings_fs` exists in only 8/34 init.php (the cluster engines). On the other 26 the free-spin round can never start even when triggered — those games run **base-game RTP only**.

Validation history: the first vectorized port produced RTPs ~7× too low; diffing per-line against a literal PHP transcription exposed the "break still pays" semantics above (720/3,000 spins differed). After the fix, calibration matches the literal implementation exactly; the earlier draft figures (38.5% DH etc.) were confirmed correct and the "vector" figures discarded.

---

## 3. Structural findings (with file references)

1. **Scatter-orientation bugs (the exploits).** Each engine's `SlotArea::getPsym` indexes the `scatters=SYM~p5..p1` table differently:
   - forward `[cnt−1]` — correct **only** if the table is stored `[p1..p5]`;
   - backward `[count−cnt]` — correct only if stored `[p5..p1]`;
   - `array_reverse` + `[cnt−1]` — correct for `[p5..p1]`.
   Three engines have mismatched pairs:

   | Engine | Stored table | Formula | 1 scatter pays | Spin frequency | RTP contribution |
   |---|---|---|---|---|---|
   | **TalesofEgypt** | `0,0,2.5,7.5,50` | backward `[count−cnt]` | **50× total bet** (10 TND at 0.2 stake) | 31.5% of spins | +1,926% |
   | **SafariKing** | `4,4,4,0,0` | forward `[cnt−1]` | **4× total bet** | 31.4% of spins | +187% |
   | **BookofTutPM** | `0,0,2,20,200` | forward `[cnt−1]` | 0 (correct), but strips are scatter-dense → 3/4/5 scatters pay 2×/20×/200× at P = 12.75%/2.46%/0.18% | 15.4% of spins ≥3 scatters | +108% |
   | WildGladiators | `1,1,1,1,1` | forward | 1× total bet | 38.7% | +54% |

2. **Scatter cap kills FS and scatter pays on 25 line engines** (`$limit = 1` in `SlotArea.php`): the TheDogHouse family, all six BigBass titles, WildWestGold, Super7s, StrikingHot5, etc. can never show 2+ scatters → no scatter pay, no free spins → base-game RTP only (DH measured 38.5%).
3. **`settings_fs` missing in 26/34 init.php** — even uncapped engines (e.g. ReturnOfTtheDead, DayofDead, WildBooster) can't start their FS round. FS contribution (typically 40–60% of official RTP) is lost.
4. **Homemade reel strips.** Densities don't match official Pragmatic strips (e.g. BookofTutPM: E[scatters per grid] = 1.47 vs ≈ 0.3 official; line RTP 51% vs ≈ 45% official base). The paytables themselves are the official ones; the strips are not.
5. **Cluster engines are sane**: crown pays go through `FreeSpin::check` with a reversed table (`0,0,60,100,2000…` → 3 crowns 0, 4 crowns 60×, 5+ 100×–2000× at P(4 crowns) ≈ 1.2%) → crown RTP ≈ 5%, FS trigger 1.2%. Not exploited — but not exactly simulated either (tumble chains).

---

## 4. Engine census (all 34, exact combinatorial sweep)

Scatter RTP computed exactly (per-reel window distributions convolved; no sampling). "cap" = base-game scatter limit 1.

| Engine | Formula | cap | FS key | Scatter RTP | Class |
|---|---|---|---|---|---|
| TalesofEgypt | bwd | yes | no | **1,926%** | EXPLOIT |
| SafariKing | fwd | yes | no | **187%** | EXPLOIT |
| BookofTutPM | fwd | no | no | **108%** | EXPLOIT |
| WildGladiators | fwd | yes | no | 54.5% | Over RTP |
| BonanzaGold/CandyVillage/GatesofOlympus/StarlightPrincess/SweetBonanza/SweetBonanzaXmas | (FreeSpin path) | no | yes | ≈5% (crowns) | ~official |
| WildBeachParty | (FreeSpin path) | no | yes | 21.5% (crowns) | Generous |
| Super7s / StrikingHot5 | rev | yes | no | 0% | Stuck (lines 85.2%) |
| TheDogHouse / TweetyHouse | bwd | yes | no | 0% | Stuck (lines ≈38–45%) |
| BigBass ×6, CowboysGold, DayofDead, WildPixies, WildBooster, VampiresvsWolves, ReturnOfTtheDead | fwd | yes/no | no | 0% | Stuck |
| ChilliHeat / PirateGold / PyramidKing / RiseOfSamurai3 / WildWestGold / TheTigerWarrior | bwd | yes | no | 0% | Stuck |
| SugarRush | (cluster) | no | yes | 0% (own tumble math) | ~official |

Deployed cross-check (f20 DB extraction): TheDogHouse stat_in 16.6 / stat_out 4.8 (≈29% realized — consistent with 38.5% true RTP + gate suppression). **SugarRush stat shows in 1.66 / out 80.5 (≈4,800%)** and PirateGold 33.2/62.0 (187%) — the cluster/tumble engines need the same audit before being trusted with promos.

---

## 5. Monte-Carlo results (bonus 50 TND, stake 0.2, 3,000–4,000 trials per scenario)

### 5.1 True RTP (infinite bank, 200k spins each)

| Game | RTP | lines | scatter | note |
|---|---|---|---|---|
| TheDogHouse | **38.51%** | 38.51% | 0 (cap) | 20 lines, wild x2/x3 |
| Super7s = StrikingHot5 | **85.17%** | 85.17% | 0 (cap) | 5 lines |
| WildGladiators | **86.36%** | 31.90% | 54.46% | 25 lines |
| BookofTutPM | **159.21%** | 51.12% | 108.09% | 10 lines, no FS |
| SafariKing | **244.04%** | 57.05% | 186.99% | 50 lines |
| TalesofEgypt | **1,961.20%** | 35.13% | 1,926.08% | 20 lines |

### 5.2 Wager-10× scenario (2,500 spins, "thin" = deployed shop bank 20.2676, "funded" = 250k)

| Game | bank | P(complete) | P(ever >60) | E[cashout A] | E[B]=50×P | median A | p90 A |
|---|---|---|---|---|---|---|---|
| TheDogHouse | thin | **0.000** | 0.007 | 0.00 | 0.00 | — | — |
| TheDogHouse | funded | **0.000** | 0.011 | 0.00 | 0.00 | — | — |
| Super7s | thin | 0.079 | 0.237 | 1.83 | 3.96 | 20.4 | 44.1 |
| Super7s | funded | 0.133 | 0.301 | 5.88 | 6.64 | 30.4 | 87.2 |
| StrikingHot5 | thin | 0.086 | 0.262 | 2.07 | 4.28 | 21.9 | 46.2 |
| StrikingHot5 | funded | 0.135 | 0.306 | 5.64 | 6.76 | 28.0 | 83.2 |
| WildGladiators | thin | 0.042 | 0.001 | 0.24 | 2.09 | 5.0 | 12.4 |
| WildGladiators | funded | 0.042 | 0.001 | 0.24 | 2.09 | 5.0 | 12.4 |
| **BookofTutPM** | thin | **1.000** | **1.000** | **62.89** | 50.00 | 64.3 | 68.0 |
| **BookofTutPM** | funded | **1.000** | **1.000** | **363.74** | 50.00 | 358.6 | 491.9 |
| **SafariKing** | thin | **1.000** | **1.000** | **69.45** | 50.00 | 69.5 | 69.9 |
| **SafariKing** | funded | **1.000** | **1.000** | **773.92** | 50.00 | 773.5 | 805.9 |
| **TalesofEgypt** | thin | **1.000** | **1.000** | **64.94** | 50.00 | 64.9 | 68.7 |
| **TalesofEgypt** | funded | **1.000** | **1.000** | **9,374.29** | 50.00 | 9,375.9 | 9,679.7 |

Wager sensitivity (funded bank, E[cashout A]): Tut 208 / 365 / 679 TND at 5×/10×/20×; Tales 4,711 / 9,383 / 18,710; Super7s 16.8 / 5.9 / 1.7 (completion 51.7% / 13.3% / 2.1%).

---

## 6. The 25–60 band, explained

With stake 0.2 and base-game wins mostly 0.02–4 TND, the balance is a random walk with drift
`(RTP − 1) × 0.2` TND per spin:

- **TheDogHouse-class (38.5%)**: drift −0.123/spin → expected ruin at ~spin 400 of 2,500. The player watches the balance wander 50 → 40 → 25 → 0 and the promo dies long before wagering completes. **P(band exit upward) ≈ 0.7–1.1%.**
- **85% class**: drift −0.030/spin → median ruin ~spin 1,700; but per-spin variance produces **24–31% of players crossing above 60 at some point and then falling back and busting** — exactly the "stuck in the medium band" feeling reported.
- **Exploit engines (thin bank)**: drift +0.005–0.010/spin after the gate clamp → every player crawls above 60 and finishes with ~63–69 TND. The clamp (bank drains until its ceiling suppresses the 50×–200× events, refills 0.2/spin, equilibrium ≈ 102–104% effective RTP) is why these engines look almost harmless on the deployed shop bank — **the same engine on a funded bank pays 159%–1,961% with no clamp.**
- **Cluster engines (~96%)**: like the 85% class but slightly better odds to complete (est. 15–25%).

---

## 7. Cashout outputs A vs B — EV per issued 50-TND promocode (wager 10×)

| Promo pinned on | E[A] (leftover) thin | E[A] funded | E[B] (flat 50 after completion) | Operator's expected cost |
|---|---|---|---|---|
| TheDogHouse class | 0.00 | 0.00 | 0.00 | 0 — but 100% player loss (churn risk) |
| Super7s/StrikingHot5 | ≈2.0 | ≈5.8 | ≈4.0–6.6 | ≈2–7 TND |
| WildGladiators | 0.24 | 0.24 | 2.09 | ≈2 TND |
| BookofTutPM | 62.89 | **363.74** | 50.00 | 50–364 TND |
| SafariKing | 69.45 | **773.92** | 50.00 | 50–774 TND |
| TalesofEgypt | 64.94 | **9,374.29** | 50.00 | 50–9,374 TND |

(If your system allows taking the flat 50 **without** wagering, B = 50.00 unconditionally for every game and dominates both A and completion — cheapest safe design if you ever need to de-escalate an exploit incident.)

---

## 8. Recommendation list (nothing applied — analysis only)

1. **Immediately exclude** BookofTutPM, SafariKing, TalesofEgypt (and WildGladiators) from the promocode game pool. These are payout-table orientation bugs, not intended math.
2. **Never pin a promo on a capped line engine** (TheDogHouse family + BigBass set + the other `limit=1` titles) until their FS round is restored — completion is currently impossible (0%) and every player loses the whole bonus.
3. To make promos fair (~96% RTP → expected completion 15–25%):
   - restore `settings_fs` (+ `settings_needaddfs` where referenced) in the 26 engines missing it,
   - fix the three scatter index conventions (store table orientation to match formula),
   - replace homemade strips with official-density strips,
   - re-audit the cluster engines' tumble math (SugarRush deployed stat 1.66 in / 80.5 out).
4. **Bank sizing for promo shops**: on the deployed thin bank (20.27) the gate clamps even broken engines to ~102–104%, but that clamp is an accident, not a control — it breaks on a funded bank and burns the bank negative via the 8-try fallback. Size the promo shop bank after fixing the engine math, not instead of it.
5. The wager multiplier interacts with the clamp: at 10× the stuck engines complete 8–13%; at 20× ~0%; at 5× up to 52% (funded). Any tuning of "wager × stake" changes completion rates step-wise — re-run the simulator (`scripts/study/bonus_sim.py`) before changing promocode parameters.

---

## 9. Method & caveats

- Simulator: `scripts/study/bonus_sim.py` (numpy; draws grids exactly like `SlotArea`, evaluates lines like `WinChecker` incl. prefix-pay semantics and mbr x2/x3, scatter pays per each engine's own `getPsym` convention, cap replacement like PHP, gate ≤8 tries + fallback pay, bonus-mode money flow). Scenario seeds fixed; 3,000–4,000 trials → ±0.5–1% on completion probabilities.
- Exact scatter census: per-reel window distributions convolved analytically (no sampling error).
- **Not** exactly simulated: cluster-engine tumble chains and FS rounds (GO/SweetBonanza/SugarRush/…; estimated ≈96% from crown census + official-like paytables), FS rounds of uncapped line engines (inert because `settings_fs` missing).
- Deployment caveats: (a) `w_games.settings` JSON in your live DB can override init.php values — the starter SQL we ship does not override, but verify per row before trusting the census; (b) the promo player's shop determines which bank gates the play — only shop 1's numbers were extracted (slots 20.2676); (c) your live 8.5 reroll loop is unbounded (clamp is absolute) while the v8 pack ships the bounded 8-try fallback — exploit engines leak slightly through the fallback on thin banks.
- RNG figures were produced with the vendored strips/paytables exactly as delivered in release `amatic-replit-ready` v8 (asset sha256 `22136ac6…`).

**Artifacts:** `docs/bonus-promocode-math-study.md` (this file), `scripts/study/bonus_sim.py` (sha256 cba3af77b428d0f9…), `scripts/study/bonus_sim-results.txt`, `scripts/study/bonus_sim-results-w10.txt`.
