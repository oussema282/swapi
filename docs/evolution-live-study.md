# Evolution live casino on Goldsvet — study (research only, nothing built)

**Date:** 2026-11-19 · **Status:** answers the question "is there a separate file that can handle a
live-casino Evolution on my goldsvet?" + tunnel feasibility. **Nothing has been added to the pack or the
build** — the demo-tunnel standing rule ("don't build until I approve") applies to this too.

---

## 1. Short answer

- Your recovered 8.5 platform has **no live-casino module at all** — the dump contains zero
  Evolution/Ezugi/TVBet/BetGames traces (engine dirs, routes, tables, gamebank values are all slots/PM).
- But the goldsvet/VanguardLTE family **does have a proven "separate file" Evolution module pattern**,
  found in a public VanguardLTE fork (`nickola-team/majorslot`): one bridge controller + routes + config +
  2 small tables. It is a **connector**, not a casino: it launches real Evolution tables and translates
  bets/wins into your user balances.
- **There is no free demo to tunnel to.** Unlike Pragmatic (free public demo service), Evolution has no
  public demo endpoint — live-dealer studios are licensed-operator-only. So a PP-style demo tunnel is
  **not possible for Evolution**; every "Evolution without a license" path routes through someone else's
  licensed/staging backend (gray, unreliable, breaks constantly, and is a real ToS/legal risk).

## 2. The module, file by file (majorslot reference — same codebase lineage as yours)

| Piece | Path / key | What it does |
|---|---|---|
| **Bridge controller** | `app/Http/Controllers/Web/GameProviders/EVOController.php` (552 lines) | The whole integration in one file |
| ↳ launcher | `makegamelink()` → `POST {EVO_APIHOST}/ua/v1/{casinoKey}/{authToken}` with player + table payload | Returns the `{entry: <game URL>}` you iframe — Evolution's standard launch API (`/ua/v1/`) |
| ↳ wallet callbacks | routes `POST /evo/rtne/{service}` and `/evo/live/{service}` → `endpoint()` | Evolution calls **you** server-to-server: `check`, `balance`, `debit`, `credit`, `cancel` — authToken-verified, idempotent via an `EVOTransaction` row per transaction id, writes `StatGame` (bet/win history), updates the Vanguard user balance |
| ↳ catalog | `getgamelist()` — `w_provider_games` table (provider `evo`/`evort`/`evone`), Redis cache, icons in `public/frontend/Default/ico/evo/` | Table/lobby listing incl. a full Evolution live lobby entry |
| History viewer | `app/.../GameProviders/Evolution.php` + views `frontend/Default/games/evol/*` | Round-history page Evolution can deep-link to |
| Config keys | `EVO_APIHOST_SLOT/LIVE`, `EVO_CASINOKEY_SLOT/LIVE`, `EVO_AUTHTOKEN_SLOT/LIVE`, `EVO_GROUPID_LIVE` | Per-environment operator credentials (slot API vs live casino API are separate) |
| Routes | `Route::group(['prefix' => 'evo'])` — 2 callback endpoints + history route | Callbacks must be reachable from Evolution's servers (public HTTPS) |

The fork's shipped config points its launcher at `evostage.klonostek.com` and
`staging.evolution.asia-live.com` — **third-party staging/white-label Evolution backends** with keys baked
into a public repo. Treat those strictly as reference wiring: they are (a) almost certainly dead/rotated,
(b) not yours, (c) a staging backend can log, throttle or flag every bet you route through it. The file
pattern is what's valuable; the keys are not.

## 3. Tunnel study for Evolution specifically

- PP tunnel (studied earlier, still not built): feasible *because* Pragmatic publishes a free demo
  service (`demogamesfree.ppgames.net`) that only needs browser headers + an `mgckey`. **Evolution has no
  equivalent** — no public demo tables, no anonymous session endpoint.
- The only "tunnel-shaped" options seen in the wild: proxying an aggregator's licensed session, or
  re-streaming someone's live tables. Both = unauthorized use of a paid third-party backend: single point
  of failure, session churn, region/currency locks, no RTP/log control, and the backend operator sees and
  can kill every table. **I do not recommend building this, and it stays unbuilt.**
- What actually works (and is how every real goldsvet live section works): get **authorized access** to an
  Evolution-equivalent catalog via a licensed operator or an API aggregator (they expose the same
  `/ua/v1/` contract on their own apihost), then plug those credentials into a bridge exactly like
  §2. Costs money and requires an operator agreement; nothing in the platform itself blocks it.

## 4. What adapting §2 to YOUR platform would take (if you obtain credentials)

1. `EVOController.php` + `Evolution.php` copied under `app/Http/Controllers/Web/GameProviders/`
   (already VanguardLTE namespaced — same lineage as 8.5).
2. Routes: add the `evo` group in `routes/web.php`.
3. Two new tables: `w_provider_games` (catalog) + `evo_transactions` (idempotency) — neither is in your
   dump; simple migrations, I'd generate them.
4. `StatGame` column check: majorslot writes `transactionid`, `bet_type`, `detail`, `roundid`,
   `game_id` — your d60 `w_stat_games` likely lacks some; small additive migration after column diff.
5. Redis cache in `getgamelist()` → swap to Laravel file cache (your stack has no Redis).
6. `beyondcode/laravel-mobile-detect`-style detection or a simple UA check for `gamecode1` (mobile tables).
7. Views (`games/evol/*`) + an open-game blade (iframe the returned `entry` URL) + lobby icon pack
   (must be obtained from the operator/aggregator — assets are licensed).
8. Public HTTPS on your Hostinger VPS with the two callback URLs registered with the provider
   (Evolution calls you — localhost/tunnel callbacks won't work for real traffic).
9. Replit sandbox: **not suitable** for live casino (public callback URL + long-running processes
   required). VPS + domain is the realistic target.

## 5. Options (nothing happens until you pick one)

- **(a) Authorized aggregator integration** — you obtain Evolution (or an aggregator offering the same
  `/ua/v1/` contract) credentials; I port the bridge (§4) into your pack with CI tests for the wallet
  callback flow (mock Evolution server in CI). *Cost: the operator agreement; build effort ≈ 1-2 turns.*
- **(b) Skip real Evolution, RNG "live-style" emulation** — I build goldsvet-native live-looking tables
  (roulette/baccarat RNG with our own math + UI, same `/game/<N>/server` flow as the PP engines).
  Playable anywhere (incl. Replit), no third party, but: **not real dealers** — it's a slots-style
  emulation of table games.
- **(c) Do nothing / keep studying** — I keep collecting references (other provider bridges in the
  majorslot family: Ezugi/TVBet/BetGames/Horizon follow the identical file pattern, same wallet-callback
  shape) and report before any build.

**Standing note:** the Pragmatic demo tunnel from the earlier study also remains unbuilt; both tunnel
paths now share the same "await explicit approval" gate.

---

# Part 2 — Tunneling live casino (Evolution) — follow-up study

Question: "what about tunneling live casino Evolution?" Answer: **a PP-style browser tunnel is
impossible; the only working "tunnel" is a wallet-relay through an aggregator — the NSEVO pattern
below.** Documented, NOT built.

## T1. Browser-level tunnel (the PP approach) — ❌ impossible for Evolution

The PP tunnel works because Pragmatic runs a free public demo service (`demogamesfree.ppgames.net`)
that accepts anonymous browser sessions (openGame.do → mgckey → gameService). Evolution has:
- **no public demo tables** — every table exists only inside a licensed operator's session;
- **operator-issued entry URLs** (`/ua/v1/` response `entry`) that are bound to the player session
  created by that operator's casino key — there is no anonymous equivalent of an `mgckey`;
- **token-locked video streams** (live dealer HLS/DASH delivered only through the operator-issued
  session/origin), region + currency locks on the session group.

So there is nothing at the browser layer to tunnel to. Any "free Evolution tunnel" advertised in the
wild is actually T2 (someone's aggregator session being resold).

## T2. Wallet-relay tunnel via an aggregator — ✅ the working pattern (gray)

Proven reference found in the wild: `nickola-team/majorslot` → `NSEVOController.php` (325 lines),
plus the same shape in Ezugi bridges (`gitthegamer/tgtw _EzugiController.php` with Ezugi's
`fetchbykey.aspx`/`makeTransfer.aspx`/`getBalance.aspx` wallet API). The flow:

```
player → your goldsvet lobby
  makegamelink(): POST {AGGREGATOR_API}/api/game/launch_new  {agentKey, user_id, password}
       ← {error:0, data:{url}}          ← aggregator returns a game URL from THEIR licensed session
  iframe that url                         (Evolution tables render; video + UI are the aggregator's)
player bets → Evolution calls the AGGREGATOR's wallet (their operator contract)
  aggregator calls YOUR platform relay endpoints (balance_new / transaction_new/withdraw / deposit
  with apiKey) → NSEVOController translates them into VanguardLTE user balance changes + StatGame rows
settlement: the aggregator settles with the licensed operator; you settle with the aggregator
```

Adaptation to your platform = the §4 checklist + one extra piece: the **wallet-relay endpoints**
(`balance_new`/`withdraw`/`deposit` handlers) that the aggregator calls — small, same idempotency +
authToken discipline as the direct bridge.

### What you'd need (before any build)
- an **aggregator account** (agentKey/apiKey) that actually offers Evolution tables — paid, contract
  with the aggregator, often crypto-settled; this is the gray part: their sub-license may not cover
  your jurisdiction, and the operator chain is opaque.
- a public HTTPS host for the relay endpoints (VPS; Replit cannot serve live-casino traffic).

### Honest risk list (T2)
1. **Funds custody** — player money routes through the aggregator's ledger before settlement; the
   aggregator can stall, cap, or vanish with float. Only work with staged deposits you can afford to
   lose.
2. **Single point of failure** — aggregator down = whole live section down; they rate-limit and can
   flag/ban agent accounts (this kills gray accounts regularly).
3. **No math/stream control** — RTP, table availability, currencies, localization are theirs.
4. **Legal exposure** — you're reselling access to a licensed casino's tables without your own license;
   jurisdictions treat this as unlicensed gambling operation. Compliance is yours.
5. **Latency** — every bet = 2+ extra API hops (you ↔ aggregator ↔ operator wallet).

## T3. Direct operator relay (the legit version of the same file) — recommended over T2

If you obtain **direct** operator credentials (Evolution operator agreement or an aggregator that
exposes the standard `/ua/v1/` contract under YOUR brand), `EVOController.php` ports onto your platform
as-is (§4 checklist) — no relay-of-relay, funds settle 1:1 in your own wallet callbacks, and the CI
story is testable (mock Evolution server). Same file, one less middleman, none of T2's custody risk.

## Status / decision

- Nothing built. Both tunnels (PP demo + Evolution) sit behind the same explicit-approval gate.
- If you want to proceed, the realistic paths are: **(a)** you obtain aggregator credentials → I build
  the T2 relay (bridge + wallet endpoints + mock-aggregator CI tests, 1-2 turns), or **(b)** you obtain
  direct operator credentials → I port `EVOController` (T3), or **(c)** RNG live-style emulation
  (goldsvet-native, no third party, no real dealers).
- References collected this round: majorslot `NSEVOController.php` (aggregator launch/wallet flow,
  `api/game/launch_new`, `balance_new`, `transaction_new/withdraw|deposit`), `gitthegamer/tgtw` Ezugi
  bridge (operator wallet API shape), `mafiono/bethappy` Ezugi plugin (empty shim — same author as the
  PP tunnel reference, no usable code).

