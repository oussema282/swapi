

## Plan: Fix Discover Button Centering in Bottom Nav

### Problem
The nav uses `justify-around` which distributes items based on their content width. Since translated labels like "Rechercher" are wider than "Search", the spacing becomes uneven, pushing the center Discover button off-center.

### Solution
Give each nav item a fixed equal width using `flex-1` and center their content. This ensures all 5 slots take equal space regardless of label length, keeping Discover perfectly centered.

### Changes

**File: `src/components/layout/BottomNav.tsx`**

1. Change the nav container from `justify-around` to just `flex` (line 35)
2. Add `flex-1` to the center Discover link (line 46) and center it
3. Add `flex-1` to each regular nav link (line 75) and ensure content is centered

This way each of the 5 items gets exactly 20% width, and the Discover circle stays perfectly centered regardless of language.

### Files Modified
- `src/components/layout/BottomNav.tsx`

