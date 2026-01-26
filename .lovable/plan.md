
# Fix: Prevent Card Stack Reordering After Swipe

## Problem Identified

In `src/hooks/useSwipe.tsx`, line 167, the `onSuccess` callback contains:

```typescript
queryClient.invalidateQueries({ queryKey: ['recommended-items'] });
```

This invalidates the recommendations cache after every swipe, triggering a background refetch. When the new data arrives, the cards get re-sorted because the swiped item is now excluded from the server-side algorithm, causing the "next" card to change.

## Solution

Remove the automatic cache invalidation for `recommended-items` after a swipe. The client already tracks progress through the card stack via `currentIndex`, so there's no need to refetch the list mid-session.

## Technical Changes

### File: `src/hooks/useSwipe.tsx`

**Current Code (lines 164-169):**
```typescript
onSuccess: (_, variables) => {
  queryClient.invalidateQueries({ queryKey: ['swipeable-items', variables.swiperItemId] });
  // The Discover screen uses recommended-items; ensure it stays consistent after swiping.
  queryClient.invalidateQueries({ queryKey: ['recommended-items'] });
  queryClient.invalidateQueries({ queryKey: ['matches'] });
},
```

**Updated Code:**
```typescript
onSuccess: (_, variables) => {
  queryClient.invalidateQueries({ queryKey: ['swipeable-items', variables.swiperItemId] });
  // DO NOT invalidate recommended-items here - the client tracks progress via currentIndex
  // and invalidating causes the card stack to re-sort mid-session
  queryClient.invalidateQueries({ queryKey: ['matches'] });
},
```

## Why This Works

1. The recommendation algorithm runs once when you select an item
2. It returns a pre-sorted list of 20+ items ranked by compatibility score
and when the user is in the 10th position the system will create the next Liste and save it for later swapping or for the user to continue swapping without manual refresh 
3. The client tracks your position in this list using `currentIndex`
4. When you swipe, `currentIndex` increments and shows the next pre-determined card
5. No need to refetch - the order is already decided

## Trade-off

Fresh recommendations won't appear mid-session. 
