

## Plan: Change Currency to DT & Translate Activity Status Labels

### Changes

**1. Replace all `$` and `€` currency symbols with `DT` across 4 files:**

- **`src/components/discover/SwipeCard.tsx`** (line 297): `${item.value_min}...` → `{item.value_min} DT...`
- **`src/components/discover/ItemDetailsSheet.tsx`** (line 164): same pattern → `DT`
- **`src/pages/Items.tsx`** (line 152): `${item.value_min} - ${item.value_max}` → `{item.value_min} DT - {item.value_max} DT`
- **`src/pages/Search.tsx`** (lines 608, 729, 868): all `€` references → `DT`

**2. Translate hardcoded "Active" / "Recently Active" on swipe cards:**

- **`src/components/discover/SwipeCard.tsx`** (lines 266, 272): Replace hardcoded `"Active"` with `{t('discover.ownerActive')}` and `"Recently Active"` with `{t('discover.ownerRecentlyActive')}`

### Files Modified
- `src/components/discover/SwipeCard.tsx`
- `src/components/discover/ItemDetailsSheet.tsx`
- `src/pages/Items.tsx`
- `src/pages/Search.tsx`

