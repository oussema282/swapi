

## Plan: Add Gift Icon and Gift Requests Notification to SwipeTopBar

### Problem
The `GiftRequestsNotification` component is imported but not rendered in `SwipeTopBar.tsx` (line 79-80 is just a comment with no component). There is also no Gift icon button to create a new gift item.

### Changes — `src/components/discover/SwipeTopBar.tsx`

In the right-side button group (lines 75-95), add two things between `DealInvitesNotification` and the Upload button:

1. **Render `<GiftRequestsNotification />`** — shows the gift bell with pending count (already imported, just not rendered)
2. **Add a Gift icon button** — navigates to `/items/new?gift=true` using the `Gift` icon from lucide-react with amber-500 color

The order will be: Deal bell → Gift requests bell → Gift create button → Upload button

### Files Modified
- `src/components/discover/SwipeTopBar.tsx`

