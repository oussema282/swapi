

## Plan: Persist Selected Item Across Navigation

### Problem
`selectedItemId` is initialized as `null` via `useState`. When the user navigates away and returns, the component remounts, state resets to `null`, and the `useEffect` on line 67-71 auto-selects `myItems[0]` (i1) instead of the previously selected item (i2).

### Fix

**File: `src/pages/Index.tsx`**

1. **Save selected item to `sessionStorage`** when it changes
2. **Initialize `selectedItemId` from `sessionStorage`** instead of `null`
3. **Update the auto-select effect** to only run when there's no persisted selection

Changes:
- Replace `useState<string | null>(null)` with a lazy initializer that reads from `sessionStorage.getItem('discover_selected_item')`
- Add a `useEffect` that writes `selectedItemId` to `sessionStorage` whenever it changes
- Keep the existing auto-select-first-item effect as a fallback (only fires when no persisted value and `selectedItemId` is still null)

### Technical Detail
Using `sessionStorage` (not `localStorage`) so the selection persists within a browser session but resets on new sessions. This is lightweight, requires no backend changes, and matches the ephemeral nature of the selection.

