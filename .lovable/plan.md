

## Plan: Reorder Gift Badge and Request Button in ItemDetailsSheet

### What the user wants
The "This is a free gift" label and the "Request Gift" button should be stacked together at the bottom of the sheet, not scattered across different sections.

### Changes — `src/components/discover/ItemDetailsSheet.tsx`

1. **Remove the Gift Badge from its current position** (lines 230-239) — the amber banner currently sits between swap preferences and owner info

2. **Move both the Gift Badge and Request Gift button together to the very end of the Actions section** (after the Report button, lines 273-323), reordered as:
   - View on Map button (existing)
   - Invite to Deal button (for non-gifts, existing)
   - Report button (existing)
   - Gift badge label ("This is a free gift") — moved here
   - Request Gift button + "2 declines = blocked" warning — moved here, right below the badge

This places the gift-specific content stacked together at the bottom of the sheet.

### Files Modified
- `src/components/discover/ItemDetailsSheet.tsx`

