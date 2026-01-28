
# Tappable Item Photos in Matches Sections

## Overview
Add the ability for users to tap on any product picture in the matches sections to view detailed item information using the existing `ItemDetailsSheet` component. This applies to:
- Active Matches (MatchCard)
- Completed Matches (CompletedMatchCard)
- Deal Invites section
- Missed Matches (MissedMatchCard)

## Current State
- `ItemDetailsSheet` already exists and displays: category, condition, value range, distance, description, swap preferences, and owner info
- All match card components show item thumbnails but they are not individually tappable
- Currently, tapping anywhere on a match card navigates to chat or opens a modal

## Implementation Approach

### 1. Create a Reusable ItemDetailsSheet State
**File:** `src/pages/Matches.tsx`

Add state management for the ItemDetailsSheet:
- `selectedItem` state to hold the item to display
- `selectedItemOwner` state for owner info
- Open the sheet when any item photo is tapped
- Close sheet when user dismisses it

### 2. Update MatchCard Component
**File:** `src/components/matches/MatchCard.tsx`

Changes:
- Add `onMyItemTap` and `onTheirItemTap` callback props
- Wrap each item photo in a button element
- Use `e.stopPropagation()` to prevent triggering the card's onClick
- Maintain the current card tap behavior for navigating to chat

### 3. Update CompletedMatchCard Component
**File:** `src/components/matches/CompletedMatchCard.tsx`

Changes:
- Add `onMyItemTap` and `onTheirItemTap` callback props
- Make each item photo independently tappable
- Use `e.stopPropagation()` to prevent triggering the card's onClick

### 4. Update MissedMatchCard Component
**File:** `src/components/matches/MissedMatchCard.tsx`

Changes:
- Add `onTheirItemTap` and `onMyItemTap` callback props
- Make item photos tappable (only for Pro users since free users see blurred content)
- Use `e.stopPropagation()` to prevent triggering the card's onClick or modal

### 5. Update Matches Page
**File:** `src/pages/Matches.tsx`

Changes:
- Import `ItemDetailsSheet` component
- Add state: `selectedViewItem` for the item details sheet
- Create handler functions to prepare item data for the sheet
- Pass the new tap handlers to all card components
- Add the `ItemDetailsSheet` at the bottom of the page
- Render the sheet with the selected item

### 6. Update Deal Invites Section
**File:** `src/pages/Matches.tsx`

Changes:
- Make the sender item and receiver item photos in Deal Invites tappable
- Use same pattern with `e.stopPropagation()` to prevent button clicks

## User Flow

```text
User views any matches section
         |
Sees match/invite cards with item photos
         |
Taps on a specific item photo
         |
ItemDetailsSheet slides up from bottom
         |
User sees: title, photo, category, condition,
value range, description, swap preferences, owner
         |
User can tap owner to view their profile
         |
User closes sheet and continues browsing
```

## Technical Details

**Props Changes:**

MatchCard:
```
+ onMyItemTap?: () => void
+ onTheirItemTap?: () => void
```

CompletedMatchCard:
```
+ onMyItemTap?: () => void
+ onTheirItemTap?: () => void
```

MissedMatchCard:
```
+ onMyItemTap?: () => void
+ onTheirItemTap?: () => void
```

**Item Data Transformation:**

The `ItemDetailsSheet` expects an `ItemWithOwner` type:
- Standard Item fields
- `owner_display_name: string`
- `owner_avatar_url: string | null`
- `owner_is_pro?: boolean`
- `user_id: string`

For match items:
- `my_item` already has owner info from the match query
- `their_item` has `owner_display_name` from the match data
- Owner data comes from `other_user_profile` for their item
- Current user's profile needed for my item (can be fetched or passed)

## Files to Modify

1. `src/components/matches/MatchCard.tsx` - Add item photo tap handlers
2. `src/components/matches/CompletedMatchCard.tsx` - Add item photo tap handlers
3. `src/components/matches/MissedMatchCard.tsx` - Add item photo tap handlers
4. `src/pages/Matches.tsx` - Add ItemDetailsSheet integration and pass handlers

## Edge Cases Handled

- **My item vs Their item**: Both items have different owner info sources
- **Free users in Missed Matches**: Photos are blurred, tapping shows upgrade prompt
- **Missing photos**: Fallback to Package icon (existing behavior)
- **Archived items**: Still viewable in completed/active matches
- **Click propagation**: Prevented so card navigation still works

## No Database Changes Required

All data needed is already fetched by existing queries:
- `useMatches` returns full item data with owner info
- `useMissedMatches` returns items with owner profiles
- Deal invites query fetches items and profiles
