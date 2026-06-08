## Plan: Manual payments, SwapCoins, ratings, admin tooling

### Scope decisions (locked in by your answers)
- Build everything in one go.
- Existing Pro users stay Pro; only the **new-checkout path** switches to manual. Dodo edge functions and `Checkout.tsx` are decommissioned but no data deleted.
- Pro price = **5 DT**. Admin sets the **D17 receiver number** and **Flouci number** from the admin panel (no hardcoded numbers). The full method list (D17, Flouci, Ooredoo, Orange, Tunisie Telecom) is kept; admin sets receiver per method.
- Ratings = single 1–5 star per completed match.

---

### 1. Database (one migration)

**`payment_settings`** (admin-configurable receivers)
- `id`, `method` (text unique: `d17`, `flouci`, `ooredoo`, `orange`, `tunisie_telecom`), `receiver` (text — phone/number/account), `instructions` (text), `is_enabled` (bool), `updated_at`, `updated_by`
- RLS: anyone SELECT; admins INSERT/UPDATE/DELETE
- Seed rows for all 5 methods (empty receivers)

**`payment_requests`**
- `id`, `user_id`, `purpose` (text: `pro` | `boost` | `feature`), `payment_method` (text), `amount` (numeric, default 5), `sender_phone` (text), `screenshot_url` (text nullable), `notes` (text nullable), `status` (`pending` | `approved` | `rejected`), `admin_notes`, `approved_by` (uuid), `created_at`, `responded_at`
- RLS: users INSERT/SELECT own; admins SELECT all + UPDATE
- On approve trigger → if `purpose='pro'`: upsert `user_subscriptions` with `is_pro=true`, `subscribed_at=now()`, `expires_at=now()+30d`. If `purpose='feature'`: insert into existing `feature_upgrades`.

**`swapcoins_wallets`**
- `id`, `user_id` unique, `balance` int default 0, `lifetime_earned` int, `lifetime_spent` int, `created_at`, `updated_at`
- RLS: user SELECT own; system writes via SECURITY DEFINER RPC.

**`swapcoins_transactions`** (ledger)
- `id`, `user_id`, `delta` int (+/-), `reason` (text), `ref_type` (text nullable: `match`, `login`, `profile`, `referral`, `review`, `boost`, `feature`), `ref_id` uuid nullable, `created_at`
- RLS: user SELECT own.
- RPC `award_swapcoins(p_user_id, p_amount, p_reason, p_ref_type, p_ref_id)` — idempotent via unique `(user_id, ref_type, ref_id)` partial index for one-shot rewards (match/profile/referral/review).
- RPC `spend_swapcoins(p_amount, p_reason, p_ref_type, p_ref_id)` — auth.uid(), checks balance, atomic.

**`item_reviews`** (single rating)
- `id`, `match_id`, `rater_id`, `ratee_id`, `item_id`, `stars` int 1–5, `comment` text nullable, `created_at`
- Unique `(match_id, rater_id)`. Both users in match may rate after completion.
- RLS: insert if user is part of the completed match; everyone reads (for profile aggregates).
- Trigger on insert → `award_swapcoins(ratee_id, 10, 'review_received', 'review', id)` (idempotent).

**Triggers tying to existing tables**
- After `matches.is_completed → true`: award both owners 20 coins (idempotent on `match.id`).
- After `profiles` insert/update where all required fields filled: award 25 coins (one-time, idempotent on user_id).
- (Daily login + referral handled in code, not triggers.)

All tables include the **standard GRANT block** per the public-schema rule.

---

### 2. Remove / deprecate Dodo

- Delete edge functions `dodo-checkout` and `dodo-webhook` (call `supabase--delete_edge_functions`).
- Strip `dodo_session_id` references from app code (column kept for history).
- Drop `DODO_PAYMENTS_API_KEY` secret? **Keep** for now (no harm) — flag for later cleanup.
- `src/pages/Checkout.tsx` → repurpose as **payment request form** (see §3). `CheckoutSuccess.tsx` → repurpose as "Request submitted, awaiting verification" screen.
- `useSubscription`/`useEntitlements` unchanged — `is_pro` continues to gate. The "Pro Gratuit pour Tous" global override stays.

---

### 3. User-facing payment flow

**`/checkout` (Pro request)**
1. Show price **5 DT** + chosen method tabs (only enabled methods from `payment_settings`).
2. Display `receiver` + `instructions` per method ("Envoyez 5 DT à 12 345 678 via D17, puis collez le numéro émetteur ci-dessous").
3. Form: `sender_phone` (validated 8 digits), optional `screenshot` upload (to new `payment-proofs` private bucket, signed URLs), optional `notes`.
4. Submit → insert `payment_requests` row, navigate to status page.

**Status page `/checkout/status`**
- List user's recent requests with badge (pending / approved / rejected + admin_notes).
- Pending state explains "Admin verifies within 24h".

**SwapCoins UI**
- New `/wallet` page: balance card, lifetime earned/spent, transaction list.
- Boost & Featured purchase modals: pay with SwapCoins via `spend_swapcoins` RPC (existing `boost_expires_at` updated).
- Header chip near avatar shows coin balance.

**Rating UI**
- After `CompleteSwapModal` confirms exchange complete, show `RateExchangeSheet` (1–5 stars + optional comment). One submission per match per user. Profile pages get aggregate stars.

**Daily login reward**
- On first successful auth per day per user → call `award_swapcoins` with `ref_type='login'`, `ref_id=date::uuid-ish` (use a deterministic uuid v5 or just date string in a separate `daily_logins` table with unique `(user_id, date)`). Keep simple: tiny `daily_logins(user_id, date PK)` table; insert + award in single RPC.

---

### 4. Admin panel additions

New sidebar entries (insert between Subscriptions and Analytics):
- **Payments** (`CreditCard` icon) → tabs:
  - *Requests*: queue of pending `payment_requests` with screenshot preview, approve / reject + notes. Badge with pending count.
  - *Settings*: edit `payment_settings` (receiver + instructions per method, enable/disable).
- **SwapCoins** (`Coins` icon) → search user, view balance/ledger, manual adjust (creates ledger entry with `reason='admin_adjustment'`).

Existing **Subscriptions** section gets a "Grant Pro manually" action (writes `user_subscriptions`) for cases where admin already approved off-platform.

---

### 5. Notifications

Extend existing `telegram-notify` events + browser push:
- `payment_request_submitted` → admin Telegram chat.
- `payment_approved` / `payment_rejected` → user push + toast on next load.
- `boost_expiring_soon` (24h before) — out of scope this round, defer.
- `pro_expiring_soon` (3 days before `expires_at`) — out of scope this round, defer.

(Keeping the notifications surface minimal so the round stays shippable; flagged in follow-ups.)

---

### 6. Files touched (high-level)

**New**
- `supabase/migrations/<ts>_manual_payments_swapcoins_reviews.sql`
- `src/pages/Wallet.tsx`, `src/pages/PaymentStatus.tsx`
- `src/components/payments/PaymentRequestForm.tsx`, `PaymentMethodCard.tsx`, `ProofUploader.tsx`
- `src/components/wallet/CoinBalanceChip.tsx`, `TransactionList.tsx`
- `src/components/reviews/RateExchangeSheet.tsx`, `StarsDisplay.tsx`
- `src/components/admin/sections/PaymentsSection.tsx`, `SwapCoinsSection.tsx`
- `src/hooks/useSwapCoins.tsx`, `useReviews.tsx`, `usePaymentRequests.tsx`, `usePaymentSettings.tsx`

**Edited**
- `src/pages/Checkout.tsx`, `src/pages/CheckoutSuccess.tsx` → repurposed (no Dodo)
- `src/App.tsx` → routes for `/wallet`, `/checkout/status`
- `src/components/admin/AdminSidebar.tsx` → add Payments + SwapCoins entries
- `src/pages/Admin.tsx` → mount new sections
- `src/components/matches/CompleteSwapModal.tsx` → trigger rating sheet
- `src/components/subscription/FeatureUpgradeModal.tsx` & boost flows → switch to SwapCoins spend
- `supabase/functions/telegram-notify/index.ts` → new event types
- Delete `supabase/functions/dodo-checkout/`, `supabase/functions/dodo-webhook/`

---

### 7. Out of scope (explicitly deferred)
- Email notifications (push + Telegram only).
- Pro/boost expiration reminder jobs.
- Referral tracking system (table + share links) — wallet has the earn rule wired, but the link mechanism is a follow-up.
- Achievement/leaderboard/business/sponsored/community items from `future_features`.

---

### Open confirmations before build
1. **Pro duration** — assumed **30 days** for 5 DT. Confirm or change.
2. **Free vs Pro limits** — your spec proposes new numbers (e.g. 50 listings/day Pro). Current `useEntitlements` limits are different. Should I overwrite limits to match your spec exactly, or keep current ones?
3. **Referral system** — keep deferred or include now?
