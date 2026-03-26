

## Plan: Fix Gift Markers Not Visually Distinct on Map

### Root Cause

Two issues preventing gift markers from looking different:

1. **Type definition missing `is_gift`** — The `Item` interface in `src/types/database.ts` doesn't include `is_gift`. While `(item as any).is_gift` is used, this is fragile and the real problem is that the `ItemWithOwner` type (which extends `Item`) also lacks it. The data does arrive from the DB (confirmed in `supabase/types.ts`), so the cast works — but let's make it explicit.

2. **`overflow: hidden` clips the gift badge** — The gift marker element has `overflow: hidden` which cuts off the gift badge positioned at `bottom: -4px; right: -4px`. The badge is invisible because it's clipped.

### Changes

**1. `src/types/database.ts`** — Add `is_gift` to `Item` interface
- Add `is_gift: boolean;` field

**2. `src/pages/MapView.tsx`** — Fix gift marker rendering
- Remove `overflow: hidden` from the gift marker style (keep it for regular markers)
- Remove `(item as any)` cast — use `item.is_gift` directly since the type now includes it
- Ensure the gift badge `z-index` is above the image

### Files Modified
- `src/types/database.ts`
- `src/pages/MapView.tsx`

