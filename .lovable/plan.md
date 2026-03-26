## Plan: Watermark Photos with Admin-Configured Fingerprint Text

### Overview

Add a watermark system where the admin sets a text phrase (e.g. "SWAPI") in system settings, and every photo uploaded to the platform gets that text stamped transparently across it before being stored — protecting images from theft.

### How It Works

```text
User uploads photo
       ↓
Photo passes moderation check
       ↓
Edge function applies watermark text
(diagonal, semi-transparent, repeated)
       ↓
Watermarked photo replaces original in storage
       ↓
Public URL serves watermarked version
```

### Changes

**1. Database — Store watermark text in `system_settings**`

- No migration needed — `system_settings` table already exists with `key`/`value` columns
- Insert a row: `key = 'watermark_text'`, `value = '"SWAPI"'` (or whatever the admin sets)
- Admin can update this from the System section in the dashboard

**2. New edge function: `supabase/functions/watermark-image/index.ts**`

- Accepts: `{ bucket: string, filePath: string }` (the just-uploaded file)
- Reads the `watermark_text` from `system_settings`
- Downloads the original image from storage
- Uses Canvas API (via `jsr:@nicolo/canvas` or pure image manipulation) to draw the watermark text diagonally across the image, repeated in a grid pattern, semi-transparent (opacity ~15-20%), rotated ~-30°
- Uploads the watermarked version back to the same path, replacing the original
- Returns the public URL

**3. Update upload flows to call watermark after moderation**

Files with upload logic:

- `src/pages/NewItem.tsx` — item photo upload
- `src/pages/EditItem.tsx` — item photo upload
- `src/pages/EditProfile.tsx` — avatar upload
- `src/pages/Settings.tsx` — avatar upload

After moderation passes, call `supabase.functions.invoke('watermark-image', { body: { bucket: 'item-photos', filePath: fileName } })` before adding the URL to state. This keeps the flow: upload → moderate → watermark → use URL.

**4. Admin UI — Watermark settings in System section**

In `src/components/admin/sections/SystemSection.tsx`:

- Add a "Watermark Text" input field that reads/writes the `watermark_text` key in `system_settings`
- Simple text input + save button
- Show current watermark text with a preview indicator

**5. Translation keys (EN/FR/AR)**

- `admin.watermarkText`: "Watermark Text"
- `admin.watermarkDescription`: "This text will appear as a transparent overlay on all uploaded photos"
- `admin.watermarkSaved`: "Watermark text updated"

### Technical Notes

- The edge function will use the Deno `Canvas` API or a lightweight image library to draw text on images server-side
- Watermark is applied at upload time, so existing photos won't be affected (could add a batch job later)
- The watermark is burned into the image pixels — it cannot be removed by downloading
- Avatar uploads not including watermarking 

### Files Modified

- `supabase/functions/watermark-image/index.ts` (new)
- `src/pages/NewItem.tsx`
- `src/pages/EditItem.tsx`
- `src/pages/EditProfile.tsx`
- `src/pages/Settings.tsx`
- `src/components/admin/sections/SystemSection.tsx`
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`