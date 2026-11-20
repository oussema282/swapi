# Pragmatic games RTP / RNG / outcome-math study — why the balance gets "stuck in a range"

**Date:** 2026-11-20 · **Trigger:** Replit testing showed players hover in the same balance range —
balance barely drops but big money never lands. **This is a real, quantified defect of the bank-gated
money layer, not the RNG.** Full mechanics below, with the exact numbers from the deployed DB.

---

## 1. The outcome pipeline (what decides a spin)

```
rand() per reel  →  official PP reel strips  →  official PP paytable  →  win W
     (RNG)              (game math)              (game math)         ↓
                                        MONEY LAYER (where the behavior changes)
                                        WinPermission bank gate → pay / reroll / fallback
```

### RNG + math layer = official Pragmatic math (verified in the shipped engines)
- `SlotArea::getSlotArea()`: `rand(0, count(strip))` per reel — **uniform stop over the official
  reel strip** (`reel_set0` base, `reel_set1` free spins). No weighting, no house bias.
- `WinChecker`: official PP paytable multipliers (e.g. The Dog House top line 750×/line), official
  paylines, wilds/scatters config straight from init.php.
- Cluster games (Gates/SugarRush/SweetBonanza family) use the official tumble/multiplier logic.
- The `rtp_slots=64.5 / rtp_bonus=65.5` keys in init.php are **inert** — they fed only the CheckRtp
  governor we removed. They do nothing.
- ⇒ **Un-gated spin outcome = the official PP game (~96.4–96.7% RTP, high variance).**

### Money layer (goldsvet bank model — the deviation)
Per spin, bet B, raw RNG win W:
1. Player: `balance -= B` (always).
2. Bank refill: `bank_slots += B × 0.82` (shop `percent=84` → 16% operator cut, 2% to 20 jackpots).
3. **Pay gate** (`WinPermission::winCheck`): win is payable **only if**
   `W ≤ bank_slots − B/2`. Otherwise the spin **rerolls** (up to 8×, our bound); each reroll is a fresh
   RNG spin whose (usually smaller) win replaces the big one. After 8 failures the win is paid anyway
   (bank-credit fallback, can push the bank negative).
4. FS rounds: **every free-spin win is gated per-spin against the same slots bank** — the feature that
   carries most of PP's RTP is throttled hardest.

## 2. The deployed numbers (extracted from the release pack's database.sqlite — byte-identical sha to
## what Replit ran)

| Value | Value in DB | Meaning |
|---|---|---|
| `w_game_bank` shop 1 `slots` | **20.27** | total payout reserve for ALL slots **≈ $20** |
| `w_game_bank` shop 1 `bonus` | 44.83 | FS/scatter-cash reserve ≈ $45 |
| `w_shops.percent` | **84** | only 84% of each bet refills the bank (16% = house cut) |
| `w_jpg` | 20 × 0.1% | jackpots skim 2% of every bet (all balances 0) |
| tester user 51 | balance 9740.65, count_balance 9762.9 | real-money mode (full house cut applies) |

### Worked example (bet B = 2.00, bank = 20.27)
- Payable win ceiling: `20.27 − 1.00 = 19.27`. A 10× hit ($20) is **not payable first-try**; a 750×
  line hit ($1500) or a 100×+ FS spin is **rerolled away and replaced by a smaller respin** ~every time.
- FS round math: a typical The Dog House FS round wants to pay 20–500× bet. With a $20 reserve and
  per-spin gating, the round collapses to a few ≤$19 spins → **feature effectively neutralized**.
- Meanwhile every spin refills the bank 0.82×B → small wins keep flowing back to the player.

### The equilibrium you observed (the "stuck range")
```
player drift per spin ≈ −B + E[W_paid]
E[W_paid] ≈ min(RNG win, bank)   with bank ≈ refill from your own bets
```
With a thin bank the system self-stabilizes: your losses refill the bank, the bank pays back only
small wins, big wins get converted to small ones → balance oscillates in a band and drifts down only
by the house cut (~18% of turnover worst case, less once small wins pay). **Exactly "balance doesn't
drop much but never pays": variance suppression + bank equilibrium.** The goldsvet bank model is BY
DESIGN (operators fund the reserve and the house cut is their margin) — the 8.5 dump simply ships a
nearly empty reserve ($20 for a whole slots fleet).

## 3. Historical evidence in the pack
`w_games.stat_in/stat_out` (bank in / paid out) of the CI e2e spins confirm the flows:
e.g. PirateGold stat_in 33.2 / stat_out 62.0, SugarRush 1.66 / 80.5 — bookkeeping works; percentages
match `percent=84` (stat_in ≈ 0.82 × bet).

## 4. Fixes (pick one; both are small)

### Fix A — fund the payout reserve (recommended, no code change)
Run on the Replit DB (SQLite, from the project shell):
```sql
UPDATE w_game_bank SET slots = 250000, bonus = 100000 WHERE shop_id = 1;
```
- With the gate effectively always-passing, spins resolve at the **official PP math (~96.5% RTP,
  real variance)**. The bank drains at (natural RTP − 82% refill) ≈ 14% of turnover → $250k sustains
  roughly **$1.8M of turnover** before thinning again.
- Inspect your current live values first: `SELECT * FROM w_game_bank;` (their DB has drifted from the
  release copy by your test spins).
- Optional: raise `percent` too (`UPDATE w_shops SET percent = 96 WHERE id = 1;`) → slower bank drain
  (house cut 4%), longer equilibrium.

### Fix B — true-RTP mode (disable the bank gate in code)
Patch every engine's `WinPermission::winCheck` to `return ['win' => $win, 'fswin' => $fswin];` — the
bank then tracks reality (can go negative; the operator "owes" the reserve). This is the honest
casino-math mode but removes the operator-margin mechanism. I can wire this as a build flag in one turn.

### What I recommend
**A now** (fund the bank), play again, and if you want the operator-margin story decoupled from game
fairness (bank only as insurance, never gating), ask for **B** and I ship it via the build gate.

## 5. Verify after the fix (Replit Agent script)
Open The Dog House + Sweet Bonanza + Gates of Olympus at bet 2.00, 50 spins each:
- balance should now swing both ways; a FS round must be able to pay 20×+ bet in one feature;
- confirm in DB after: `SELECT slots, bonus FROM w_game_bank WHERE shop_id=1;` — bank should move by
  hundreds, not stay pinned near its seed.
