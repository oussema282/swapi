

## Plan: Replace Animal Avatars with Human Pixel Art Avatars

### Changes

**1. Replace 6 avatar images** (`src/assets/avatars/`)

Delete the animal JPGs and create 6 new human pixel art avatar SVGs — simple 64×64 pixel art style male characters with distinct features:

- `avatar1.svg` — guy with brown hair, blue shirt
- `avatar2.svg` — guy with black hair, red cap
- `avatar3.svg` — guy with blonde hair, green hoodie
- `avatar4.svg` — guy with dark skin, orange shirt
- `avatar5.svg` — guy with red hair, purple shirt
- `avatar6.svg` — guy with grey hair, teal shirt

Each will be a clean 32×32 or 64×64 pixel art head/shoulders portrait rendered as SVG rects for crisp scaling.

**2. Update `src/lib/defaultAvatars.ts`**

Change imports from `.jpg` animal files to the new `.svg` human pixel art files:

```tsx
import avatar1 from '@/assets/avatars/avatar1.svg';
import avatar2 from '@/assets/avatars/avatar2.svg';
// ... etc
```

### Files Modified
- `src/assets/avatars/` — delete 6 animal JPGs, create 6 human pixel art SVGs
- `src/lib/defaultAvatars.ts` — update imports

No other files need changes — all components already use `getDefaultAvatar()`.

