

# Implementation Plan

## Overview
This plan addresses three improvements:
1. Format the exhausted state message professionally with "try again later" on a new line
2. Add category filter to both "For You" and "Nearby" sections in the discovery feed
3. Redesign the Matches page with a card-style step navigation (similar to Add Item page)

---

## 1. Fix Exhausted State Message Formatting

**File:** `src/components/discover/EmptyState.tsx`

Update the exhausted state message to display on two lines:
- Line 1: "No more matches for this item"  
- Line 2: "try again later"

```text
Current:
  "No more matches for this item try again later"

Updated:
  "No more matches for this item"
  "try again later"
```

---

## 2. Add Category Filter to Both Feed Modes

### 2.1 Update Filter Interface

**File:** `src/components/discover/NearbyFilterSheet.tsx`

- Rename component to `DiscoverFilterSheet` (since it now serves both tabs)
- Add `selectedCategories: ItemCategory[]` to the `NearbyFilters` interface
- Add category selection UI with chips for all 7 categories:
  - Games, Electronics, Clothes, Books, Home & Garden, Sports, Other
- Allow multi-select for categories (empty = show all)

### 2.2 Update Recommendations Hook

**File:** `src/hooks/useRecommendations.tsx`

- Update `NearbyFilters` interface to include `selectedCategories`
- Modify both `fetchForYouItems` and `fetchNearbyItems` to filter by selected categories
- Add category filtering logic to the query

### 2.3 Update Index Page

**File:** `src/pages/Index.tsx`

- Update filter state to include `selectedCategories: []`
- Allow filter sheet to open for both "For You" and "Nearby" tabs
- Pass filters to `useRecommendedItems` for both modes

---

## 3. Redesign Matches Page with Card Navigation

### 3.1 New Page Structure

**File:** `src/pages/Matches.tsx`

Transform from tab-based layout to step-based card navigation:

```text
+----------------------------------+
| [<-] Matches              1/4    |
|      Active swaps                |
+----------------------------------+
| [====][    ][    ][    ]         |  <- Progress bar
+----------------------------------+
|                                  |
|   +------------------------+     |
|   |  Card Content          |     |
|   |  (Active Matches)      |     |
|   +------------------------+     |
|                                  |
+----------------------------------+
|     [  Previous  ] [  Next  ]    |
+----------------------------------+
```

**Sections (Steps):**
1. Active Matches - Current ongoing swaps
2. Completed - Finished exchanges  
3. Deal Invites - Pending invitations
4. Missed Matches - Opportunities you missed

### 3.2 Navigation Features

- Back arrow in top-left returns to previous screen
- Step indicator (1/4, 2/4, etc.) in top-right
- Progress bar showing current section
- Previous/Next buttons at bottom to navigate between sections
- Swipe gestures (optional) to move between sections

### 3.3 Visual Design

Following the NewItem page pattern:
- Clean header with title and description
- Progress dots/bar at top
- AnimatePresence for smooth section transitions
- Card containers for content
- Consistent spacing and typography

---

## Technical Details

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/discover/EmptyState.tsx` | Split message into two lines |
| `src/components/discover/NearbyFilterSheet.tsx` | Rename, add category filter chips |
| `src/hooks/useRecommendations.tsx` | Add category filtering to both feed modes |
| `src/pages/Index.tsx` | Enable filter for both tabs, add categories to state |
| `src/pages/Matches.tsx` | Complete redesign with step navigation |
| `src/components/matches/MatchesHeader.tsx` | Replace with new step-based header |

### New Types

```typescript
// Updated filter interface
export interface DiscoverFilters {
  priceMin: number;
  priceMax: number;
  maxDistance: number;
  selectedCategories: ItemCategory[];
}
```

### Category Filter UI Component

```text
+----------------------------------+
|  📦 Category                     |
+----------------------------------+
| [🎮 Games  ] [📱 Electronics]    |
| [👕 Clothes] [📚 Books      ]    |
| [🏡 Home   ] [⚽ Sports     ]    |
| [📦 Other  ]                     |
+----------------------------------+
```

- Chips are toggle-able (tap to select/deselect)
- Selected chips have primary color background
- Empty selection means "show all categories"

---

## Summary

1. **Message fix**: Simple text split with line break
2. **Category filter**: Multi-select chips in existing filter sheet, applied to both tabs
3. **Matches redesign**: Step-based navigation with arrows, progress bar, and card layout

