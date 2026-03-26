

## Plan: Replace SVG Avatars with AI-Generated Pixel Art Portraits

### Approach

Use the Nano banana 2 (google/gemini-3.1-flash-image-preview) model to generate 6 individual pixel art character portraits inspired by the reference image style — detailed pixel art with colorful backgrounds, diverse characters, portrait framing.

### Steps

**1. Generate 6 avatar images** via AI image generation script

Generate each avatar individually with prompts like:
- Avatar 1: Young woman with curly brown hair, green t-shirt, cozy room background
- Avatar 2: Young man with dark hair, green flannel jacket, cafe background
- Avatar 3: Woman with ponytail, pink jacket, park/nature background
- Avatar 4: Man with glasses, blue shirt and tie, library background
- Avatar 5: Woman with purple hair and glasses, hoodie, art studio background
- Avatar 6: Young man with long wavy hair, colorful jacket, urban background

Save as PNG files to `src/assets/avatars/avatar1.png` through `avatar6.png`.

**2. Delete old SVG avatars** (`avatar1.svg` through `avatar6.svg`)

**3. Update `src/lib/defaultAvatars.ts`** — change imports from `.svg` to `.png`

No other files need changes — all components already use `getDefaultAvatar()`.

### Files Modified
- `src/assets/avatars/` — delete 6 SVGs, create 6 PNGs
- `src/lib/defaultAvatars.ts` — update imports

