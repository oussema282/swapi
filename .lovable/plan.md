

## Plan: Translate Categories and Conditions via i18n

### Problem
Category names (e.g. "Électronique", "Mode") are hardcoded in French in `src/config/categories.ts`. Condition labels ("New", "Like New", etc.) are hardcoded in English in `src/types/database.ts`. Neither adapts to the user's language.

### Approach
Add translation keys for all categories, subcategories, and conditions in the three language files (EN, FR, AR). Then replace direct label lookups with `t()` calls throughout the app.

### Changes

**1. Add keys to all 3 translation files**

Each file gets a `categories` block (14 top-level categories + their subcategories/children) and a `conditions` block:

```json
"conditions": {
  "new": "New",
  "like_new": "Like New",
  "good": "Good",
  "fair": "Fair"
},
"categories": {
  "electronique": "Electronics",
  "telephones": "Phones",
  "smartphones": "Smartphones",
  ...
  "mode": "Fashion",
  ...
}
```

French file keeps the current French names. Arabic file gets Arabic translations.

**2. Update `src/config/categories.ts`** — Add a `getCategoryLabelTranslated(id, t)` helper that looks up `t('categories.' + id)` with the raw `name` as fallback. Export it alongside the existing helpers.

**3. Update `src/types/database.ts`** — Add a `getConditionLabel(condition, t)` helper that returns `t('conditions.' + condition)`. Keep `CONDITION_LABELS` as fallback for non-i18n contexts.

**4. Update all consuming components** to use the new translated helpers:
- `SwipeCard.tsx` — condition label
- `ItemDetailsSheet.tsx` — condition + category labels
- `Items.tsx` — condition + category badges
- `NewItem.tsx` — condition buttons + category names
- `EditItem.tsx` — condition buttons + category names
- `Search.tsx` — condition labels
- `MapView.tsx` — condition label
- `ItemSelector.tsx` — category label
- `ProfileItemsGrid.tsx` — category label (if shown)
- `ItemsSection.tsx` (admin) — category filter labels

Each component already has `useTranslation` or will get it added, then replaces `CONDITION_LABELS[x]` with `t('conditions.' + x)` and `getCategoryLabel(x)` with `t('categories.' + x)`.

### Files Modified
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`
- `src/config/categories.ts`
- `src/types/database.ts`
- `src/components/discover/SwipeCard.tsx`
- `src/components/discover/ItemDetailsSheet.tsx`
- `src/components/discover/ItemSelector.tsx`
- `src/pages/Items.tsx`
- `src/pages/NewItem.tsx`
- `src/pages/EditItem.tsx`
- `src/pages/Search.tsx`
- `src/pages/MapView.tsx`
- `src/components/admin/sections/ItemsSection.tsx`

