
# Fix "Unknown" User Display Issue

## Problem Analysis

After thorough investigation, I found:

1. **Database is clean** - All users have valid profiles with proper `display_name` values
2. **"Unknown" is a code fallback** - The string "Unknown" appears in 19 files as a fallback when `profileMap.get(userId)` returns `undefined`
3. **React ref warning** - The `VerifiedName` component triggers console warnings when used inside Framer Motion components

## Root Causes

### 1. VerifiedName Ref Forwarding Issue
The console error shows:
```
Warning: Function components cannot be given refs.
Check the render method of `MissedMatchCard`.
at VerifiedName
```

When `VerifiedName` is wrapped in `motion.div` or used with certain parent components, React tries to pass a ref that the component cannot accept.

### 2. Profile Lookup Timing Edge Cases
In hooks like `useMatches`, `useMissedMatches`, and others:
- Profile data is fetched in a separate query after item data
- If the profile query partially fails or takes longer, the `profileMap` may be incomplete
- The code defensively falls back to "Unknown"

### 3. Empty Array Edge Case
When `userIds` array is empty before calling `.in('user_id', userIds)`:
- Supabase may return unexpected results
- The profile map ends up empty, causing all lookups to return `undefined`

## Solution

### Fix 1: Add ref forwarding to VerifiedName
**File:** `src/components/ui/verified-name.tsx`

Convert to `forwardRef` pattern to prevent React warnings.

### Fix 2: Add defensive checks in profile queries
**Files to update:**
- `src/hooks/useMatches.tsx`
- `src/hooks/useMissedMatches.tsx`
- `src/pages/Matches.tsx`
- `src/lib/services/supabase/index.ts`
- `src/hooks/useRecommendations.tsx`

Add checks:
```typescript
// Before querying profiles, check if we have user IDs
if (userIds.length === 0) return [];

// Add error logging when profile lookup fails
const profile = profileMap.get(userId);
if (!profile) {
  console.warn(`Profile not found for user: ${userId}`);
}
```

### Fix 3: Replace "Unknown" with better UX
Instead of showing "Unknown", show:
- "Loading..." during data fetch
- "User" as a neutral fallback
- Or hide the name element entirely

## Technical Changes

### 1. VerifiedName Component (verified-name.tsx)
```typescript
import { forwardRef } from 'react';

interface VerifiedNameProps {
  // ... existing props
}

export const VerifiedName = forwardRef<HTMLSpanElement, VerifiedNameProps>(
  ({ name, className, badgeClassName, isPro = false, userId, clickable = false }, ref) => {
    // ... existing logic
    
    return (
      <span ref={ref} className={...}>
        {/* ... existing content */}
      </span>
    );
  }
);

VerifiedName.displayName = 'VerifiedName';
```

### 2. useMatches Hook (useMatches.tsx)
Add validation before profile lookup:
```typescript
// Add early return check
if (userIds.size === 0) {
  console.warn('No user IDs found in matches data');
}

// Add fallback logging
const profile = profileMap.get(otherUserId);
if (!profile && otherUserId) {
  console.warn(`Missing profile for user: ${otherUserId}`);
}
```

### 3. useMissedMatches Hook (useMissedMatches.tsx)
Same pattern - add defensive checks and logging.

### 4. Update Fallback Text
Change from `'Unknown'` to `'User'` across all files for better UX:
- It's neutral and doesn't imply data issues
- More professional appearance

## Files to Modify

1. `src/components/ui/verified-name.tsx` - Add forwardRef
2. `src/hooks/useMatches.tsx` - Add defensive checks
3. `src/hooks/useMissedMatches.tsx` - Add defensive checks
4. `src/pages/Matches.tsx` - Add defensive checks
5. `src/lib/services/supabase/index.ts` - Add defensive checks
6. `src/hooks/useRecommendations.tsx` - Add defensive checks

## Validation

After implementation:
- Console warnings should stop
- "Unknown" should never appear in normal usage
- Profile loading edge cases will be logged for debugging
