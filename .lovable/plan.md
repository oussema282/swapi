
# Accept Missed Matches Feature

## Overview
Enable Pro users to reconsider missed matches by accepting them manually, which creates a match and opens the chat conversation.

## How It Works

When a user reviews their missed matches and clicks "Accept", the system will:
1. Remove their previous "dislike" swipe
2. Record a new "like" swipe for that item pair
3. The database automatically detects the mutual like and creates a match
4. The user is redirected to the new chat conversation

## Implementation Steps

### 1. Create Recovery Mutation Hook
**File:** `src/hooks/useMissedMatches.tsx`

Add a new `useRecoverMissedMatch` mutation that:
- Deletes the existing dislike swipe (my_item → their_item)
- Inserts a new like swipe for the same pair
- Waits briefly for the match trigger to fire
- Fetches and returns the newly created match ID
- Invalidates relevant caches (matches, missed-matches, recommendations)

### 2. Update Missed Match Modal (Pro Users)
**File:** `src/components/matches/MissedMatchModal.tsx`

- Add an "Accept Match" button alongside the existing "Got it" button
- Wire up the button to call the recovery mutation
- Show loading state during the operation
- On success: show a toast message and navigate to the new chat
- On error: show an error toast

### 3. Update Missed Match Card
**File:** `src/components/matches/MissedMatchCard.tsx`

- The card already has an `onReconsider` prop - wire it up properly
- The "Reconsider" (refresh) icon button should trigger the same flow
- Update the card to show a loading state when recovering

### 4. Wire Up Matches Page
**File:** `src/pages/Matches.tsx`

- Pass the recovery handler to MissedMatchCard and MissedMatchModal
- Handle the navigation to chat after successful recovery
- Remove the missed match from the list after it's accepted

## User Flow

```text
User views Missed Matches tab
         ↓
Clicks on a missed match card (Pro only)
         ↓
Modal opens showing both items
         ↓
User clicks "Accept Match" button
         ↓
System removes old dislike swipe
         ↓
System creates new like swipe
         ↓
Database trigger creates mutual match
         ↓
User redirected to chat with success toast
```

## Technical Details

**Database Operations:**
1. `DELETE FROM swipes WHERE swiper_item_id = my_item AND swiped_item_id = their_item`
2. `INSERT INTO swipes (swiper_item_id, swiped_item_id, liked) VALUES (my_item, their_item, true)`
3. Trigger `check_for_match()` fires → creates match
4. Query for the new match and return its ID

**Access Control:**
- DELETE swipes: Allowed by existing RLS policy "Users can delete own swipes"
- INSERT swipes: Allowed by existing RLS policy "Users can create swipes from own items"
- This feature is Pro-only (gated in the UI)

**Cache Invalidation:**
- `['matches']` - to show the new active match
- `['missed-matches']` - to remove the recovered item from the list
- `['recommendations']` - in case the item was in the discovery queue

## UI Changes

**MissedMatchModal (Pro Users):**
- Current: "Got it" button only
- New: "Accept Match" primary button + "Maybe Later" secondary button

**MissedMatchCard (Pro Users):**
- The existing RefreshCw icon button becomes functional
- Clicking it triggers the same recovery flow as the modal
