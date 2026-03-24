

## Plan: Fix Blank Page After Swiping Multiple Items

### Root Cause
After each swipe, `queryClient.invalidateQueries({ queryKey: ['recommended-items'] })` (line 233 in Index.tsx) triggers a background refetch. The server returns a new, shorter list (excluding swiped items), but `currentIndex` keeps incrementing on the old list count. After 5-6 swipes, `currentIndex` exceeds the new list length, so `hasMoreCards` becomes false and the page goes blank -- neither showing cards nor the exhausted state properly.

### Fix (2 changes)

**1. Stop invalidating cache after every swipe (`src/pages/Index.tsx`)**
- Remove line 233: `queryClient.invalidateQueries({ queryKey: ['recommended-items'] })`
- The local `currentIndex` already tracks progress through the list. Server-side filtering happens on next mount (with `gcTime: 0`, cache is cleared on unmount). No need to refetch mid-session.

**2. Reset `currentIndex` to 0 when `swipeableItems` data changes (`src/pages/Index.tsx`)**  
- Add a `useEffect` that watches `swipeableItems` identity (via a ref tracking the previous array reference). When the array reference changes (new fetch result), reset `currentIndex` to 0 via `actions.reset()` or a new `resetIndex` action, since the new list already excludes previously swiped items.
- Actually, the simpler approach: just remove the invalidation. The list is fetched once per mount, `currentIndex` advances through it, and when all items are swiped the exhausted state shows. On next visit, `gcTime: 0` ensures a fresh fetch.

### Technical Detail
- With `gcTime: 0` already set, cache is garbage-collected on unmount. Returning to the page always fetches fresh data (no stale items).
- During a session, the user progresses through the pre-fetched list via `currentIndex`. No mid-session refetch means no index/data mismatch.
- The exhausted state triggers correctly when `currentIndex >= swipeableItems.length`.

