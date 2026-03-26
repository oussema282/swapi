

## Plan: Add Segmented Toggle (Swap / Gift) to NewItem Page Header

### What changes

Replace the simple Gift icon indicator in the NewItem page header with a segmented pill toggle — identical in style to the "For You / Nearby" toggle in the discover page — letting users switch between "Swap" and "Gift" modes.

### Changes — `src/components/discover/SwipeTopBar.tsx`

- Remove the standalone Gift button (lines 79-87) — no longer needed since mode selection moves to NewItem page

### Changes — `src/pages/NewItem.tsx`

**In the header section (lines 312-326)**, add a segmented toggle between the back button and the step counter:

```tsx
<div className="flex items-center gap-1 p-1 bg-muted rounded-full">
  <button
    onClick={() => navigate('/items/new', { replace: true })}
    className={cn(
      "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
      !isGiftMode ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
    )}
  >
    {t('items.swapMode')}
  </button>
  <button
    onClick={() => navigate('/items/new?gift=true', { replace: true })}
    className={cn(
      "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
      isGiftMode ? "bg-amber-500 text-white shadow-sm" : "text-muted-foreground"
    )}
  >
    {t('items.giftMode')}
  </button>
</div>
```

- The Gift mode pill uses amber styling to match the gift branding
- Uses `navigate(..., { replace: true })` so toggling doesn't pollute browser history
- Step title and description move below the toggle

### Translation keys to add (en, fr, ar)

- `items.swapMode`: "Swap" / "Échange" / "تبادل"
- `items.giftMode`: "Gift" / "Cadeau" / "هدية"

### Files Modified
- `src/components/discover/SwipeTopBar.tsx`
- `src/pages/NewItem.tsx`
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`

