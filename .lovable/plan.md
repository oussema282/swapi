

## Plan: Fix Swiped Items Reappearing on Page Return

### Root Cause
Two problems combine to cause this bug:

1. **Stale cache served instantly**: When you return to `/discover`, React Query has cached the old item list (with `staleTime: 30s`). It shows this cached list immediately while refetching in the background. Since `currentIndex` resets to 0 on remount, you see the same items at the same positions.

2. **Cache survives navigation**: `gcTime: 2 minutes` means the cached recommendation list persists in memory even after leaving the page. When you return, the stale list is shown before the fresh server response arrives.

### Fix

**File: `src/hooks/useRecommendations.tsx`**
- Set `gcTime: 0` — garbage collect cached recommendations immediately when the component unmounts. This means