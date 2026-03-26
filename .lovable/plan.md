

## Plan: Fix Broken Watermark Images

### Root Cause

The watermark edge function imports `deno.land/x/canvas` which requires **native FFI binaries** that are not available in Supabase Edge Functions. The function crashes silently, corrupting the uploaded image or replacing it with garbage data.

### Solution

Rewrite the edge function using **`imagescript`** (`https://deno.land/x/imagescript`), a pure TypeScript image library that works in the Deno edge runtime without native dependencies. It supports PNG and JPEG decoding/encoding and pixel-level drawing.

### Changes — `supabase/functions/watermark-image/index.ts`

Complete rewrite:

1. Replace `deno.land/x/canvas` with `deno.land/x/imagescript`
2. Decode the image using `Image.decode()` (supports PNG and JPEG)
3. Draw watermark text by rendering each character as pixels onto the image at diagonal intervals with low opacity (~25 alpha out of 255)
4. Since `imagescript` has limited text rendering, use a simpler approach: create a small watermark pattern image with the text rendered as pixel blocks, then composite it repeatedly across the main image with transparency
5. Alternative simpler approach: use `imagescript`'s built-in `composite` method to overlay a semi-transparent pattern

**Practical approach**: Since `imagescript` doesn't have full font/text rendering, the function will:
- Create a small PNG "stamp" by drawing the watermark text character-by-character using a basic bitmap font (built into the function as a small pixel map for A-Z, 0-9)
- Tile this stamp diagonally across the image with ~15% opacity
- Encode back to the original format (PNG or JPEG)
- Upload back to storage, replacing the original

6. Add proper error handling so that if watermarking fails, the **original image is preserved** (don't corrupt it)

### Files Modified
- `supabase/functions/watermark-image/index.ts` (rewrite)

