

## Plan: Fix Auto-Selection of Exchange Item on Discover Page

### Root Cause

The `selectedItemId` state initializes from `sessionStorage` (line 30). If the stored ID is stale (deleted item, archived, or inactive), the value is non-null, so the auto-select effect on line 75 (`if (!selectedItemId)`) never runs. The user sees no item selected and cannot swipe.

Additionally, when auto-select does run, it picks `myItems[0]` without filtering for active, non-archived items.

### Fix — `src/pages/Index.tsx`

**1. Filter available items once** (reusable constant):
```tsx
const availableItems = (myItems || []).filter(i => !i.is_archived && i.is_active);
```

**2. Rewrite the auto-select effect** (lines 74-81) to always validate:
```tsx
useEffect(() => {
  if (!myItems || myItems.length === 0) return;
  
  const available = myItems.filter(i => !i.is_archived && i.is_active);
  if (available.length === 0) return;
  
  // If current selection is valid, keep it
  if (selectedItemId && available.some(i => i.id === selectedItemId)) return;
  
  // Otherwise, try sessionStorage, then fall back to first available
  const persisted = sessionStorage.getItem('discover_selected_item');
  const validPersisted = persisted && available.some(i => i.id === persisted);
  setSelectedItemId(validPersisted ? persisted : available[0].id);
}, [myItems, selectedItemId]);
```

**3. Use `availableItems` in ItemSelector** (line 320) — already filtered, just use the constant.

### What this fixes
- Stale sessionStorage IDs are detected and replaced with the first valid item
- Archived/inactive items are never auto-selected
- Users always land on a valid item and can swipe immediately

### Files Modified
- `src/pages/Index.tsx`

