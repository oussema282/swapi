

## Plan: Auto-Expire Deal Invites After 2 Days

### Problem
Currently, pending deal invites stay in "pending" status forever, blocking the sender from sending new invites for that item pair.

### Solution
Add a 2-day expiration mechanism. After 48 hours without a response, the invite is treated as expired, releasing the item pair.

### Changes

**1. Database Migration — Add `expires_at` column to `deal_invites`**
```sql
ALTER TABLE public.deal_invites 
ADD COLUMN expires_at timestamptz DEFAULT (now() + interval '2 days');

-- Update existing pending invites to expire 2 days from now
UPDATE public.deal_invites 
SET expires_at = now() + interval '2 days' 
WHERE status = 'pending' AND expires_at IS NULL;
```

**2. Update validation trigger `validate_deal_invite_attempt()`**
- Modify the pending-check to exclude expired invites: only block if a pending invite exists AND `expires_at > now()`

```sql
-- Check pending invites that haven't expired
SELECT EXISTS(
  SELECT 1 FROM public.deal_invites
  WHERE sender_item_id = NEW.sender_item_id
    AND receiver_item_id = NEW.receiver_item_id
    AND status = 'pending'
    AND expires_at > now()
    AND id != COALESCE(NEW.id, '00000000-...'::uuid)
) INTO pending_exists;
```

**3. `src/components/deals/DealInviteButton.tsx`** — Treat expired pending invites as available
- In `getInviteStatus()`: when checking for `pending`, also check if `created_at` is within 2 days. If older than 2 days, treat as expired (available/can_resend).
- Add `created_at` to the `ExistingInvite` interface and query.

**4. `src/components/deals/DealInvitesNotification.tsx`** — Filter out expired invites
- Add `.gt('expires_at', new Date().toISOString())` to the pending invites query so expired ones don't show up.

**5. Translation keys (EN/FR/AR)** — Add `dealInvite.expired` key:
- EN: `"expired": "Expired"`
- FR: `"expired": "Expiré"`
- AR: `"expired": "منتهي الصلاحية"`

### Files Modified
- `deal_invites` table (migration)
- `validate_deal_invite_attempt()` function (migration)
- `src/components/deals/DealInviteButton.tsx`
- `src/components/deals/DealInvitesNotification.tsx`
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`

