

## Plan: Restrict Map and Item Placement to Tunisia Only

### Overview
Lock both the MapView (discovery map) and LocationPickerMap (item creation/editing) to Tunisia's geographic boundaries. Users cannot zoom out beyond Tunisia, pan outside it, or place items outside it.

### Tunisia Bounds
```text
Southwest: [7.5, 30.2]  (lng, lat)
Northeast: [11.6, 37.5]  (lng, lat)
Center:    [9.55, 33.85]
```

### Changes

**1. `src/pages/MapView.tsx`** — Restrict discovery map to Tunisia
- Add `maxBounds` to the Map constructor: `[[7.5, 30.2], [11.6, 37.5]]`
- Set `minZoom: 6` to prevent zooming out too far beyond Tunisia
- Keep existing zoom/center logic but clamp initial center within bounds

**2. `src/components/items/LocationPickerMap.tsx`** — Restrict item placement to Tunisia
- Add `maxBounds: [[7.5, 30.2], [11.6, 37.5]]` and `minZoom: 6` to the Map constructor
- On marker drag end and map click, validate that the new position is within Tunisia bounds before calling `onChange`
- If outside bounds, snap marker back to previous valid position and show a toast warning
- Clamp the geolocation starting position to Tunisia bounds (if user is outside Tunisia, default to Tunisia center)

**3. `src/locales/en/translation.json`** — Add translation key
- `"map.outsideTunisia": "Items can only be placed within Tunisia"`

**4. `src/locales/fr/translation.json`** — Add French translation
- `"map.outsideTunisia": "Les articles ne peuvent être placés qu'en Tunisie"`

**5. `src/locales/ar/translation.json`** — Add Arabic translation
- `"map.outsideTunisia": "يمكن وضع العناصر في تونس فقط"`

### Files Modified
- `src/pages/MapView.tsx`
- `src/components/items/LocationPickerMap.tsx`
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`

