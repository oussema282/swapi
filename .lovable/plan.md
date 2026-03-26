

## Plan: Fix Own Items Appearing in Swipe Feed

### Root Cause

All three fetch paths (edge function, fallback, nearby) correctly use `.neq('user_id', userId)` to exclude own items. However, the `fetchItemDetailsWithFilter` function — which hydrates the edge function's ranked item IDs into full SwipeableItem objects — has **no safety filter** to exclude own items. If the edge function returns stale/cached results or has any transient issue, own items slip through.

Additionally, the `ItemSelector` passes ALL user items including archived ones. Archived items should not be selectable for swiping.

### Changes

**1. `src/hooks/useRecommendations.tsx`**

- In `fetchItemDetailsWithFilter` (line ~255), add `.neq('user_id', userId)` filter when fetching items by ID — this acts as a safety net even if the edge function has a bug
- Pass `userId` as a parameter to `fetchItemDetailsWithFilter`
- Update `fetchForYouItems` to pass `userId` through

**2. `src/pages/Index.tsx`**

- Filter `myItems` passed to `ItemSelector` to exclude archived items: `items={(myItems || []).filter(i => !i.is_archived && i.is_active)}`
- This prevents users from selecting an archived item to swipe with

### Result
- Own items will never appear in the swipe feed, guaranteed by client-side filtering
- Only active, non-archived items appear in the item selector

### Files Modified
- `src/hooks/useRecommendations.tsx`
- `src/pages/Index.tsx`

