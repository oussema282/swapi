# Pragmatic Play expansion study — more games (local engines) + demo-tunneling feasibility

**Status: research only. Nothing from Part B (tunneling) is implemented — it waits for your approval.**
Date: 2026-11-18 · Branch: arena/01a0cba2-swapi

---

## Part A — Search results: 87 more PP engines found (local math, no tunnel needed)

### The new source

**`promexdotme/laravel-social-gaming`** (v2.0.0 "own-use source baseline", 2026-09-27) — by the same author as the
8.5 platform repo we integrate into. Its `casino/app/Games/<Name>/PragmaticLib/` tree carries **87 complete
VanguardLTE gs2c engines** (same architecture as the 3 games already live in your pack). A second copy of the same
family exists at `robertsn808/UniversalPaymentProtocol` (~49 engines, subset). Forks of
`louisbrant/goldsvet-pragmatic` (our original 4-engine source) add nothing new.

**The 87 engines (complete, enumerated from the git tree):**

AladdinAndtheSorcerer, AncientEgyptClassic, AztecKing, **BigBassBonanza**, **BigBassKeepingitReel**, **BigBassSplash**,
**BiggerBassBlizzard**, **BiggerBassBonanza**, BonanzaGold, BookOfELDorado, BookofAztecKing, BookofKingdoms,
**BookofTutPM**, BookofTutRespin, BookoftheFallen, BubblePop, BullFiesta, **CandyVillage**, CashPatrol,
**ChilliHeat**, **Cleocatra**, CloverGold, **CowboysGold**, **DayofDead**, ExtraJuicy, EyeoftheStorm, FireHot100,
FireHot20, FireHot40, FireHot5, FireStrike, FishinReels, FruitParty, FruitParty2, FruitRainbow,
**GatesofOlympus**¹, GloriousRome, GoldRush, GoldenOx, GreatReef, GreatRhinoDeluxe, HeartofRio,
**HerculesonofZeus**², HockeyLeague, HotSafari, HotToBurn, HottoBurnExtreme, JohnHunterAndTheMayanGods,
JohnHunterandtheTomboftheScarabQueen, **JokerKing**, JuicyFruits, KingdomOfAsgard, LadyGodiva,
LuckyNewYear, LuckyNewYearTigerTreasures, MadameDestiny, MoneyMouse, Monkeys, **MustangGold**, PandasFortune,
PandasFortune2, Piggie7, **PirateGold**, PirateGoldDeluxe, PirateGoldenAge, **PyramidBonanza**³, **PyramidKing**,
**ReturnOfTtheDead**, **RiseOfSamurai3**, **SafariKing**, StarlightPrincess, **StrikingHot5**, **SugarRush**¹,
**Super7s**, **SweetBonanza**¹, **SweetBonanzaXmas**, **TalesofEgypt**, **TheDogHouse**, **TheTigerWarrior**,
**TweetyHouse**, **VampiresvsWolves**, **WildBeachParty**, **WildBooster**, WildGladiators, **WildPixies**,
**WildWestGold**

¹ already in your pack · ² new engine, client needs harvesting · ³ the original name of the vs20pbonanza client
(the pack currently pairs that client with the SweetBonanza engine — both passed e2e; no change needed)

**Bold = engine has a matching client ready today** (the repo ships engines only — its own asset-CDN hosting was
retired in v2.0.0; see Part B §3).

### Client inventory (mapped by loader title from the client farm `babyline00/ahmed_bet`)

38 official gs2c clients, 34 with an exact engine match above, 4 without:

| Client (ahmed_bet) | Official title | Engine | Verdict |
|---|---|---|---|
| vs20doghouse | The Dog House | TheDogHouse | **READY** |
| vs20starlight | Starlight Princess | StarlightPrincess | **READY** |
| vs10bbbonanza | Big Bass Bonanza | BigBassBonanza | **READY** |
| vs12bbb | Bigger Bass Bonanza | BiggerBassBonanza | **READY** |
| vs10bbkir | BBB – Keeping it Reel | BigBassKeepingitReel | **READY** |
| vs10txbigbass | Big Bass Splash | BigBassSplash | **READY** |
| vs10bxmasbnza | Christmas Big Bass Bonanza | ChristmasBigBassBonanza | **READY** |
| vs12bbbxmas | Bigger Bass Blizzard | BiggerBassBlizzard | **READY** |
| vs25wolfgold | Wolf Gold | — | engine missing (client also in release `pp-clients`) |
| vs20sugarrushx | Sugar Rush 1000 | — | engine missing |
| vs20schristmas | Starlight Christmas | — | engine missing |
| vs40spartaking | Spartan King | — | engine missing |
| vs20daydead | Day of Dead | DayofDead | **READY** |
| vs20bonzgold | Bonanza Gold | BonanzaGold | **READY** |
| vs20candvil | Candy Ville | CandyVillage | **READY** |
| vs20egypt | Tales of Egypt | TalesofEgypt | **READY** |
| vs20tweethouse | The Tweety House | TweetyHouse | **READY** |
| vs20wildboost | Wild Booster | WildBooster | **READY** |
| vs20wildpix | Wild Pixies | WildPixies | **READY** |
| vs25chilli | Chilli Heat | ChilliHeat | **READY** |
| vs25pyramid | Pyramid King | PyramidKing | **READY** |
| vs40pirate | Pirate Gold | PirateGold | **READY** |
| vs40wildwest | Wild West Gold | WildWestGold | **READY** |
| vs50safariking | Safari King | SafariKing | **READY** |
| vs5strh | Striking Hot 5 | StrikingHot5 | **READY** |
| vs5super7 | Super 7s | Super7s | **READY** |
| vs10cowgold | Cowboys Gold | CowboysGold | **READY** |
| vs10returndead | Return of the Dead | ReturnOfTtheDead | **READY** |
| vs10vampwolf | Vampires vs Wolves | VampiresvsWolves | **READY** |
| vs20bchprty | Wild Beach Party | WildBeachParty | **READY** |
| vs20sbxmas | Sweet Bonanza Xmas | SweetBonanzaXmas | **READY** |
| vs25tigerwar | The Tiger Warrior | TheTigerWarrior | **READY** |
| vs25gladiator | Wild Gladiator | WildGladiators | **READY** (name check at build) |
| vs40samurai3 | Rise of Samurai 3 | RiseOfSamurai3 | **READY** |
| (harvested client, release `pp-clients`) | Book of Tut | BookofTutPM | **READY** |

**Bottom line: 31 new titles can be added with zero client work** (34 client/engine pairs − 3 already in pack),
plus Book of Tut = **32 new games** → local catalog goes 85 → **~117**. Everything ships through the same
pipeline as the first 3 (loader patch → `w_games` rows → CI e2e doInit+doSpin sticky gate → publish only PASS).

### Engine quality — same repairs as before, recipe proven

Sampled engines (TheDogHouse, FruitParty, MustangGold, SweetBonanza) all carry the same 5 defect families we
already fixed once: `Jackpots::upsert()` (sqlite killer), `rtp_stat_out/in` columns, the
`$log && $log['State']==='Respin' || …` precedence crash, live `var_dump`s, occasional misplaced/corrupted files.
The repair recipe + per-game CI e2e gate is exactly what got Gates/Sugar/Bonanza to PASS. Plan on approval:
vendor engines → apply recipe → batch e2e (e.g. 8–10 games per CI run) → publish PASS batch, hide failures.

Remaining ~55 engines (Fruit Party 1/2, Mustang Gold, Joker King, Fire Strike, Cleocatra, John Hunter ×2,
Madame Destiny, Fire Hot ×4, Great Rhino Deluxe, …) have **no ready client** — clients can be harvested from the
demo hosts with the existing `mirror5` pipeline (CI-side; the sandbox cannot reach those hosts).

---

## Part B — Tunneling the demo games: feasibility study (NOT built — awaits your approval)

### 1. What "tunneling" means here

The client stays the official PP gs2c client, but every spin POST (`action=doInit/doSpin/doCollect`) is forwarded
to **Pragmatic's own free demo service** — `demogamesfree.ppgames.net/gs2c/v3/gameService` (and the
`pragmaticplay.net` v3/v4 variants) — which computes the spin with PP's real math and returns the standard KV
response. Your server then rewrites `balance`/`balance_cash` in the response to the local player's balance and
updates the DB (bet = `c×l`, win = `tw` from PP's response). Two public reference implementations document the
whole flow:

- `mafiono/cas-online-demo` → `GameTunnelAPI.php` (`pragmaticplayMixed`, `pragmaticplayReloadBalance`)
- `babyline00/ahmed_bet` → `application/controllers/Game.php` (the client farm we source clients from)

### 2. The exact flow (as implemented by both repos)

1. **Session key:** server GETs
   `https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=<sym>&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=…&lang=…&cur=EUR`
   and follows the redirect — the final URL's `mgckey=` parameter is the demo session key.
2. **Spin:** server POSTs `{action, symbol, cver, index, counter, repeat, mgckey, ver, c, l, bl}` to
   `demogamesfree.ppgames.net/gs2c/v3/gameService` with headers
   `Origin: https://demogamesfree.ppgames.net` + `Referer: https://demogamesfree.ppgames.net/`.
3. **Response rewrite:** replace `balance=`/`balance_cash=` with the local user's balance (insufficient-balance
   check before the call); PP's `tw=` decides the win; DB updated.
4. Client is patched so `gameService` points at your tunnel route instead of PP.

**What you gain:** the **entire current PP catalog instantly** (every symbol opens on the demo host, including the
newest releases), official PP math/RTP/animations, buy-features and ante bets work, zero engine maintenance, and
the 4 engine-missing titles (Wolf Gold, Sugar Rush 1000, Starlight Christmas, Spartan King) become playable.

### 3. What it costs / risks (why I did not build it)

1. **Terms & legality.** `demogamesfree` is Pragmatic's own *free demo* for their website — it is not a licensing
   API. Routing a third-party casino through it violates Pragmatic's terms; it must never carry real money. Fine
   for a private demo/fun lobby; a real-money operation needs PP's actual licensed aggregator API.
2. **Single point of failure.** One endpoint change, mgckey-scheme change, or geofence on PP's side breaks every
   tunneled game at once, with no notice and no recourse. (Context: the promexdotme author shipped a *CDN asset
   proxy* in v2.0 in September and retired it weeks later — "obtain authorized assets separately" — his own
   retreat from proxy hosting; his spin engines are now a paid "CEDAR" licensed service.)
3. **Latency & rate limits.** Every spin is an external round-trip (~150–400 ms) through your server; heavy lobbies
   risk throttling/blocks. Datacenter IPs (Replit/Actions) are the classic flag target — the sandbox already gets
   an SSL reset from `demogamesfree.ppgames.net` (52.84.158.81, CloudFront); **a CI-runner reachability test is
   step zero** before any build.
4. **Session churn.** The reference implementations fetch `mgckey` once per game-open; PP sessions expire
   mid-play → silent failures unless the tunnel re-opens sessions on error (needs its own retry logic).
5. **No control.** Fixed demo math (jurisdiction 99), no RTP/bank/shop integration, spins also logged on PP's side.

### 4. What I would build if you approve (plan, not code)

- `POST /gs2c/tunnel/{game}` controller (CSRF-exempt, auth-gated) replicating the documented flow with a
  mgckey cache + silent re-open on expiry, balance rewrite, and per-symbol endpoint choice (v3/v4).
- Loader patch variant: `gameService → /gs2c/tunnel/<game>` (one line in the existing patcher, per game).
- **Build-time reachability gate:** the pack ships tunnel games only if `openGame.do` answers at build time —
  no dead tunnels in a zip.
- CI e2e: open → doInit → doSpin for one title through the real host, then enable the batch.
- Client harvesting for non-ahmed_bet titles via the existing mirror5 pipeline (CI-side).

Estimated effort: ~1–2 CI runs to prove one title, then batches. Clear labeling in the lobby
("Demo-mode games") would keep the legal/expectation boundary honest.

### 5. My recommendation

- **Local engines are the right foundation** — 32 titles are ready today, 87 engines exist, the pipeline is proven.
- The **tunnel is feasible and cheap, but fragile and legally gray** — reasonable as an opt-in demo-mode extra,
  never as the real-money spine. If you approve, I build it exactly as §4 with the reachability gate; if PP blocks
  it later, the local-engine titles keep working untouched.

**Awaiting your decision: (a) proceed with the 32 local games, (b) also build the tunnel, (c) both, (d) neither.**

---

## Part C — Cross-reference (recovery report)

The engine source details above also live as **Round 5** context for the pack: see
`docs/8.5open-recovery-report.md` §"Round 5 pointer". Nothing in this document has been implemented except the
already-delivered 3-game starter (report Round 4).

