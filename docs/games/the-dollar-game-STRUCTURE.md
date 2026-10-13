# The Dollar Game (InBet Games) — Complete Structure Study

Compiled 2026-09-23 from: live review specs (Slots Paradise full paytable), the public Goldsvet InBet engine (`docs/reference/goldsvet-ib-engine/` — complete 6-file anatomy), InBet's own client code (`docs/reference/inbet/` — protocol buffers + API layer), and archive forensics.

> ⚠️ Archive fact: this game is NOT in your 8.5open.rar (no Dollar rows in `w_games`, no Dollar files anywhere). The only InBet engine in your build is `SuperBallKenoIB`. This doc is the blueprint for studying/repairing/cloning it.

---

## 1. Game identity

| | |
|---|---|
| Title | **The Dollar Game** (+ variant "The Dollar Game 3x3") |
| Provider | **InBet Games** (script family suffix: `IB` — e.g. `SuperBallKenoIB`) |
| Release | September 2020 |
| Layout | 5 reels × 3 rows, **10 paylines** (selectable 1–10) · variant: 3×3 |
| Bets | 1 credit (1 line) → 1,000 credits (10 lines, max bet) |
| Top prize | **500,000 credits** (5× Watch at max bet) |
| Theme | Money/wealth: dollar bill stacks + jewelry |

## 2. Game mechanics (verified from reviews)

- **Pays-anywhere consecutive-reels**: 3+ identical symbols on **consecutive reels anywhere on the grid** pay (not strict left-to-right lines). Line count controls stake, not geometry.
- **Scatter**: pays wherever it lands.
- **Risk/Gamble (InBet signature)**: after any win — double-or-nothing guessing the **color of a face-down dealer card**. In the InBet wire protocol these are the `dealer_card` / `double_step` / `dkf` fields (seen verbatim in the engine response format).
- **No free spins, no bonus round** — base game + gamble only. Autoplay ✓, slam-stop ✓, no turbo.

### Paytable (at 10-credit bet)

| Symbol | 3 | 4 | 5 |
|---|---|---|---|
| **Watch** (premium) | 50 | 500 | 5,000 |
| **Necklace** | 30 | 150 | 500 |
| **$100 bills** | 30 | 150 | 500 |
| **$50 bills** | 15 | 50 | 200 |
| **$20 bills** | 15 | 50 | 200 |
| **$10 bills** | 10 | 25 | 150 |
| **$1 bills** | 10 | 25 | 150 |
| **Scatter** (anywhere) | 20 | 100 | 500 |

## 3. Server engine anatomy (how InBet games are engineered in this script family)

Public reference vendored at **`docs/reference/goldsvet-ib-engine/`** (`SuperBallKenoIB`, 6 files, 1,459 lines). The Dollar Game engine mirrors this file-by-file:

```
app/Games/<Name>IB/
├── Server.php        (239 ln) — command protocol + spin loop
├── SlotSettings.php (1,109 ln) — config, balance/bank, gamble FSM
├── GameReel.php       (56 ln) — reel draw helpers
├── CheckReels.php     (21 ln) — anti-tamper reel hashing
├── reels.txt          (12 ln) — reel strips (symbol indexes)
└── RTP.G6             (22 ln) — human-readable math config
```

**Server.php protocol** (command → JSON):
- `init` → handshake (returns `credits`, `balance`, currency; InBet payloads carry internal game codes like `"game":"k_dpk"` plus extras `subgame`, `double_step`, `dealer_card`, `dkf`)
- `GetBalance` → balance poll
- `get` (= spin) → validate `line` (2–10) & `bet` → `DB::beginTransaction()` → debit stake (`SetBalance(-bet)`) → **house bank** (`GetBank`/`SetBank` = operator RTP buffer) → draw reels → evaluate pays-anywhere + scatters → cap by bank → credit win → `SaveLogReport()` (audit row in `w_stat_game`) → respond `{"responseEvent":"spin","serverResponse":{slotLines, slotBet, totalWin, Balance, ...}}`
- Gamble = `slotEvent = slotGamble` state (SlotSettings.php:803) — the dealer-card double-up.

**SlotSettings.php**: `slotGamble = true` (InBet risk game), `slotBonus = false` (no free spins — matches reviews), `Denominations` from `w_games.denomination`, `slotCurrency` from user's shop, jackpot bindings (`w_jpg`), bank/percent logic.

**reels.txt** — per-reel strips: `reelStrip1=6,2,2,2,0,...` (symbol indexes; Dollar Game would have 8 symbols + scatter).

**RTP.G6** — editable math: `Reel Strip N = SYM-weight|...` pairs (change weights → change RTP), `Win Line`/`Win Bonus` tables, `Step Symbol`. (Note: the public copy's RTP.G6 header reads "PantherMoonPT" — leftover from pack copy-paste; audit each engine's math yourself.)

**CheckReels.php** — integrity: sha1/md5 of reel strips + rolling counter so the client can verify the server didn't swap strips mid-session.

## 4. Client structure (what the browser loads)

Same as every Goldsvet game (verified against your 1,092 views + the delivered 85-game pack):

```
public/games/<Name>IB/
├── js/lib/createjs-2015.11.26.min.js
├── js/classes/GameButton.js, GameBack.js, GameUI.js, GameView.js,
│   GameReels.js, GameLines.js, GameCounters.js, GameRules.js,
│   GameGamble.js   ← the Risk/dealer-card UI (InBet games)
│   GameMessages.js, Sounds.js
├── js/utils.js, loader.js, core.js
└── css/fonts.css
```
`core.js` spins via `POST /game/<Name>IB/server?sessionId=...` → your `GamesController@server` → `Server::get()`. The blade view conditionally loads `GameGamble.js` when `$slot->slotGamble` — for The Dollar Game that's always on.

InBet's own (non-Goldsvet) client architecture is vendored at **`docs/reference/inbet/`**: React/TS frontend, Protocol Buffers (`state_keno.proto` etc.), session/billing/demo API layer.

## 5. Where to obtain the actual game files

| Route | Status |
|---|---|
| Goldsvet game packs — Discord `discord.gg/HscTu67FSu` (official for this script family) | ✅ best source — ask for the InBet pack / "The Dollar Game" |
| Public GitHub | ❌ engine not in any repo (zero hits for TheDollarGame/DollarGameIB); only SuperBallKenoIB + keno family are public |
| InBet official demo | demo links rotated ("temporarily unavailable" on aggregators); SlotsLaunch embed (game id 21854) is license/IP-gated |
| Rebuild from this doc + engine reference | ✅ feasible — math fully specified; graphics (bills/jewelry) would need creating |

## 6. Study checklist (what defines this game completely)

1. **Math**: 8 pay symbols + scatter; strips in `reels.txt`; paytable above; pays-anywhere-on-3-consecutive-reels evaluation
2. **Economy**: stake = lines × bet-line; bank/RTP buffer via `SetBank`; per-spin audit (`w_stat_game`)
3. **Risk game**: dealer-card color double-up, ladder capped by bank (`double_step`, `dealer_card`)
4. **Client**: createjs canvas app + `GameGamble.js`; POST-per-action protocol
5. **Config**: lines selectable (2–10 enforced server-side), denominations from DB, currency per shop
