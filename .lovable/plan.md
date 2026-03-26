

## Plan: Gift Items Feature

### Overview

Users can upload items as free gifts — no counterparty item needed. Gifts appear on the map with a distinctive golden frame and gift icon. Other users can request the gift, which opens a chat with the owner.

### Database Changes

**1. Add `is_gift` column to `items` table**
```sql
ALTER TABLE public.items ADD COLUMN is_gift boolean NOT NULL DEFAULT false;
```

**2. Create `gift_requests` table**
```sql
CREATE TABLE public.gift_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  gift_item_id uuid NOT NULL,
  requester_id uuid NOT NULL,
  status text NOT NULL DEFAULT 'pending', -- pending, accepted, rejected
  message text,
  created_at timestamptz NOT NULL DEFAULT now(),
  responded_at timestamptz
);

ALTER TABLE public.gift_requests ENABLE ROW LEVEL SECURITY;

-- Owner can see requests on their gifts
CREATE POLICY "Owners can view gift requests" ON public.gift_requests
  FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM items WHERE items.id = gift_requests.gift_item_id AND items.user_id = auth.uid())
    OR requester_id = auth.uid());

-- Users can request gifts
CREATE POLICY "Users can request gifts" ON public.gift_requests
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = requester_id);

-- Owners can update (accept/reject)
CREATE POLICY "Owners can respond to requests" ON public.gift_requests
  FOR UPDATE TO authenticated
  USING (EXISTS (SELECT 1 FROM items WHERE items.id = gift_requests.gift_item_id AND items.user_id = auth.uid()));
```

When a gift request is accepted, a match is created so chat becomes available (or we create a direct message channel — simpler approach: reuse the existing match+messages system by creating a match between the gift item and a placeholder).

**Simpler approach**: When accepted, create a match record between the gift item and a "virtual" reference so the existing chat system works. Or even simpler: create a `gift_conversations` table that links directly to the messages system.

**Recommended approach**: When a request is accepted, we insert a match where `item_a_id = gift_item_id` and `item_b_id = gift_item_id` (self-match) with requester info stored, then messages work via the existing match_id system. We'll add `requester_id` to the matches table for gift-type matches.

Actually, the cleanest approach: add `is_gift_match boolean DEFAULT false` and `gift_requester_id uuid` to the `matches` table. When accepted, create a match with these fields set, and the existing chat system works.

### UI Changes

**3. SwipeTopBar — Add Gift icon**
- Add a `Gift` icon button next to the Upload button
- Navigates to `/items/new?gift=true`

**4. NewItem page — Gift mode**
- When `?gift=true` query param is present, enter gift mode:
  - Skip "swap preferences" step (not needed for gifts)
  - Skip "condition" if desired (or keep it)
  - Show a gift badge/indicator in the wizard header
  - On submit, set `is_gift: true` on the item

**5. MapView — Golden frame for gifts**
- When rendering markers, check `item.is_gift`
- Gift markers get a rectangular golden border (`#facc15`) instead of circular
- Add a small gift icon overlay at the bottom-left corner
- Clicking opens the ItemDetailsSheet as usual

**6. ItemDetailsSheet — Gift request button**
- When viewing a gift item that belongs to another user, show "Request Gift" button instead of "Deal Invite"
- Tapping sends a gift request (inserts into `gift_requests`)
- Owner gets notified of pending requests

**7. Gift Requests management**
- On the owner's profile or a notification bell, show pending gift requests
- Owner can accept/reject
- Accepting creates a match → opens chat

### Translation Keys
- Add gift-related keys to all locale files (en, fr, ar at minimum)

### Files Created/Modified
- **Migration**: Add `is_gift` to items, create `gift_requests` table, add gift match fields to matches
- `src/components/discover/SwipeTopBar.tsx` — Add Gift icon button
- `src/pages/NewItem.tsx` — Gift mode (skip swap preferences, set is_gift)
- `src/pages/MapView.tsx` — Golden rectangular markers for gifts
- `src/components/discover/ItemDetailsSheet.tsx` — Request Gift button
- `src/components/gifts/GiftRequestsNotification.tsx` — New component for gift request notifications
- `src/hooks/useGiftRequests.tsx` — New hook for managing gift requests
- `src/types/database.ts` — Add GiftRequest type
- `src/locales/en/translation.json` — Gift translation keys
- `src/locales/fr/translation.json` — Gift translation keys
- `src/locales/ar/translation.json` — Gift translation keys

