

## Plan: Merge Gift Requests into Deal Invites Notification Bell

### Problem
There are two separate notification bells in the top bar — one for deal invites and one for gift requests. The user wants a single bell that shows both.

### Changes

**1. `src/components/deals/DealInvitesNotification.tsx`**
- Import `useGiftRequests` hook
- Add gift requests data alongside deal invites
- Badge count = deal invites count + gift requests count
- In the sheet content, add two sections with headers:
  - "Deal Invites" section (existing deal invite cards)
  - "Gift Requests" section (gift request cards with accept/reject, reusing the UI from `GiftRequestsNotification`)
- Show "no notifications" message only when both lists are empty

**2. `src/components/discover/SwipeTopBar.tsx`**
- Remove `<GiftRequestsNotification />` render (line 80)
- Remove the `GiftRequestsNotification` import (line 7)

### Result
Single bell icon shows combined count of deal invites + gift requests. Tapping opens a sheet with both sections.

### Files Modified
- `src/components/deals/DealInvitesNotification.tsx`
- `src/components/discover/SwipeTopBar.tsx`

