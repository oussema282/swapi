

## Plan: Fix Gift Items Not Saving to Database

### Root Cause

The `CreateItemInput` interface in `src/lib/services/types.ts` does not include `is_gift`. When the NewItem page passes `is_gift: isGiftMode` in the input object, TypeScript silently strips it during the spread into the insert call. The database column `is_gift` defaults to `false`, so all items — including gifts — are stored as regular items.

This is why the gift marker code works correctly but never triggers: no item in the database has `is_gift = true`.

### Fix

**`src/lib/services/types.ts`** — Add `is_gift` to the `CreateItemInput` interface:
```typescript
export interface CreateItemInput {
  // ...existing fields...
  is_gift?: boolean;
}
```

That single change allows the existing NewItem page code (`is_gift: isGiftMode`) to flow through to the database insert. No other files need changes — the map marker rendering logic is already correct and will activate once items actually have `is_gift = true`.

### Files Modified
- `src/lib/services/types.ts`

