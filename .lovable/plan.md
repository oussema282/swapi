
# Multi-Issue Fix Plan

## Issues Identified

After thorough investigation, I've identified and will fix the following issues:

### 1. Instant Matches Not Auto-Removed After 24h
**Current State:** Instant Matches section shows matches from last 24h, but they stay in the horizontal scroll forever.
**Fix:** Add logic to filter the Instant Matches section to only show matches created within 24h. Matches older than 24h will only appear in the Conversations list below.

### 2. Pro Badge Missing in ConversationCard
**Current State:** `ConversationCard.tsx` displays the owner name but doesn't show the Pro badge like `MatchCard.tsx` does.
**Fix:** Add `VerifiedName` component with `isPro` prop to `ConversationCard.tsx`.

### 3. Add "Manage Items" Icon to Profile Page
**Current State:** Profile page has Edit button at top-right but no direct link to Items management.
**Fix:** Add a Grid/Package icon button next to the Edit button that navigates to `/items`.

### 4. Remove Rating Counter from All User Profiles
**Current State:** Profile and UserProfile pages show a hardcoded "5.0 Rating" stat.
**Fix:** Remove the Rating stat from both Profile.tsx and UserProfile.tsx, leaving only Items and Swaps counters.

### 5. Archived Items Display as Blurry in ProfileItemsGrid
**Current State:** Archived items show with "Inactive" overlay but not blurry.
**Fix:** Update `ProfileItemsGrid.tsx` to:
- Apply blur effect to archived items for the owner
- Filter out archived items for other users viewing the profile

### 6. User Swap Counter Not Working
**Current State:** The swap counter queries completed matches but has a syntax issue in the `.or()` filter.
**Fix:** Rewrite the query to properly count completed swaps using individual filters.

### 7. Owner Activity Status Not Showing on SwipeCard
**Current State:** The `getUserActivityStatus` function exists but `owner_last_seen` may not be passed.
**Fix:** Verify the data flow and ensure the activity status badge renders correctly.

### 8. Distance Icon Issue in ItemDetailsSheet
**Current State:** The distance section uses `MapPin` icon with `text-secondary` which may have poor visibility.
**Fix:** Change the icon color to use a more visible color like `text-primary`.

### 9. Price Range Hidden When Value is 0
**Current State:** In `ItemDetailsSheet.tsx`, the condition `item.value_min > 0` hides the price when it's 0.
**Fix:** Change condition to check if `value_min !== null && value_min !== undefined` to show $0 items.

---

## Files to Modify

### 1. `src/pages/Matches.tsx`
- **Line ~336-344**: The `newMatches` filter already limits to 24h, but the Instant Matches section should truly exclude older ones - verified this is correct.

### 2. `src/components/matches/ConversationCard.tsx`
- Add import for `VerifiedName` and `Crown` icon
- Replace plain text owner name with `VerifiedName` component
- Pass `is_pro` from `match.other_user_profile`

### 3. `src/pages/Profile.tsx`
- Add Grid3X3/Package icon button next to Edit button at line ~113
- Remove the Rating stat block (lines ~173-176)
- Update grid from 3 columns to 2 columns for stats

### 4. `src/pages/UserProfile.tsx`
- Remove the Rating stat block (lines ~191-194)
- Update grid from 3 columns to 2 columns for stats
- Add filter to exclude archived items from public view

### 5. `src/components/profile/ProfileItemsGrid.tsx`
- Add blur effect and archive overlay for archived items (owner view)
- Filter out archived items for non-owner view

### 6. `src/pages/Profile.tsx` & `src/pages/UserProfile.tsx`
- Fix the completed swaps count query to use proper syntax

### 7. `src/components/discover/SwipeCard.tsx`
- Verify activity status rendering (already implemented correctly)
- No changes needed if `owner_last_seen` is being passed

### 8. `src/components/discover/ItemDetailsSheet.tsx`
- **Line ~115**: Change `text-secondary` to `text-primary` for distance icon
- **Line ~99**: Change condition from `item.value_min > 0` to `item.value_min != null`

---

## Technical Details

### ConversationCard Pro Badge Fix:
```tsx
// Add to imports
import { VerifiedName } from '@/components/ui/verified-name';

// Replace ownerName display with:
<VerifiedName 
  name={ownerName} 
  isPro={match.other_user_profile?.is_pro}
  badgeClassName="w-3 h-3"
/>
```

### Profile Stats Grid (2 columns instead of 3):
```tsx
<div className="grid grid-cols-2 gap-4 mb-6 text-center">
  <div className="p-3 rounded-xl bg-muted/50">
    <p className="text-2xl font-bold">{activeItems.length}</p>
    <p className="text-xs text-muted-foreground">Items</p>
  </div>
  <div className="p-3 rounded-xl bg-muted/50">
    <p className="text-2xl font-bold">{completedSwapsCount}</p>
    <p className="text-xs text-muted-foreground">Swaps</p>
  </div>
</div>
```

### Archived Items Blur in Grid:
```tsx
// For owner's own profile - show blur
{item.is_archived && isOwnProfile && (
  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
    <span className="text-xs text-muted-foreground font-medium">Swapped</span>
  </div>
)}
```

### Fix Swap Counter Query:
```tsx
// Current problematic query using .or() with template literal
// Fix: Use separate queries or rpc function

// Option 1: Query twice
const { count: countA } = await supabase
  .from('matches')
  .select('*', { count: 'exact', head: true })
  .eq('is_completed', true)
  .in('item_a_id', itemIds);

const { count: countB } = await supabase
  .from('matches')
  .select('*', { count: 'exact', head: true })
  .eq('is_completed', true)
  .in('item_b_id', itemIds);

return (countA || 0) + (countB || 0);
```

### ItemDetailsSheet Price Fix:
```tsx
// Change from:
{item.value_min && item.value_min > 0 && (

// To:
{(item.value_min !== undefined && item.value_min !== null) && (
```

---

## Summary of Changes

| File | Changes |
|------|---------|
| `src/components/matches/ConversationCard.tsx` | Add Pro badge via VerifiedName |
| `src/pages/Profile.tsx` | Add items icon, remove rating, fix swap counter |
| `src/pages/UserProfile.tsx` | Remove rating, filter archived items, fix swap counter |
| `src/components/profile/ProfileItemsGrid.tsx` | Add blur for archived, filter for non-owner |
| `src/components/discover/ItemDetailsSheet.tsx` | Fix distance icon color, fix price 0 display |

All existing features and functionality will be preserved.
