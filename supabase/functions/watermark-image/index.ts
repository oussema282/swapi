import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Image } from "https://deno.land/x/imagescript@1.2.15/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Simple 5x7 bitmap font for A-Z, 0-9, space
const FONT: Record<string, number[]> = {
  A: [0x04,0x0A,0x11,0x1F,0x11,0x11,0x11],
  B: [0x1E,0x11,0x11,0x1E,0x11,0x11,0x1E],
  C: [0x0E,0x11,0x10,0x10,0x10,0x11,0x0E],
  D: [0x1E,0x11,0x11,0x11,0x11,0x11,0x1E],
  E: [0x1F,0x10,0x10,0x1E,0x10,0x10,0x1F],
  F: [0x1F,0x10,0x10,0x1E,0x10,0x10,0x10],
  G: [0x0E,0x11,0x10,0x17,0x11,0x11,0x0E],
  H: [0x11,0x11,0x11,0x1F,0x11,0x11,0x11],
  I: [0x0E,0x04,0x04,0x04,0x04,0x04,0x0E],
  J: [0x07,0x02,0x02,0x02,0x02,0x12,0x0C],
  K: [0x11,0x12,0x14,0x18,0x14,0x12,0x11],
  L: [0x10,0x10,0x10,0x10,0x10,0x10,0x1F],
  M: [0x11,0x1B,0x15,0x15,0x11,0x11,0x11],
  N: [0x11,0x19,0x15,0x13,0x11,0x11,0x11],
  O: [0x0E,0x11,0x11,0x11,0x11,0x11,0x0E],
  P: [0x1E,0x11,0x11,0x1E,0x10,0x10,0x10],
  Q: [0x0E,0x11,0x11,0x11,0x15,0x12,0x0D],
  R: [0x1E,0x11,0x11,0x1E,0x14,0x12,0x11],
  S: [0x0E,0x11,0x10,0x0E,0x01,0x11,0x0E],
  T: [0x1F,0x04,0x04,0x04,0x04,0x04,0x04],
  U: [0x11,0x11,0x11,0x11,0x11,0x11,0x0E],
  V: [0x11,0x11,0x11,0x11,0x0A,0x0A,0x04],
  W: [0x11,0x11,0x11,0x15,0x15,0x1B,0x11],
  X: [0x11,0x11,0x0A,0x04,0x0A,0x11,0x11],
  Y: [0x11,0x11,0x0A,0x04,0x04,0x04,0x04],
  Z: [0x1F,0x01,0x02,0x04,0x08,0x10,0x1F],
  "0": [0x0E,0x11,0x13,0x15,0x19,0x11,0x0E],
  "1": [0x04,0x0C,0x04,0x04,0x04,0x04,0x0E],
  "2": [0x0E,0x11,0x01,0x06,0x08,0x10,0x1F],
  "3": [0x0E,0x11,0x01,0x06,0x01,0x11,0x0E],
  "4": [0x02,0x06,0x0A,0x12,0x1F,0x02,0x02],
  "5": [0x1F,0x10,0x1E,0x01,0x01,0x11,0x0E],
  "6": [0x06,0x08,0x10,0x1E,0x11,0x11,0x0E],
  "7": [0x1F,0x01,0x02,0x04,0x08,0x08,0x08],
  "8": [0x0E,0x11,0x11,0x0E,0x11,0x11,0x0E],
  "9": [0x0E,0x11,0x11,0x0F,0x01,0x02,0x0C],
  " ": [0x00,0x00,0x00,0x00,0x00,0x00,0x00],
};

function createTextStamp(text: string, scale: number): Image {
  const charW = 6; // 5 pixels + 1 spacing
  const charH = 8; // 7 pixels + 1 spacing
  const w = text.length * charW * scale;
  const h = charH * scale;
  const stamp = new Image(w, h);

  for (let ci = 0; ci < text.length; ci++) {
    const ch = text[ci].toUpperCase();
    const rows = FONT[ch];
    if (!rows) continue;
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 5; col++) {
        if (rows[row] & (1 << (4 - col))) {
          // Fill scaled pixel block
          for (let sy = 0; sy < scale; sy++) {
            for (let sx = 0; sx < scale; sx++) {
              const px = ci * charW * scale + col * scale + sx;
              const py = row * scale + sy;
              if (px < w && py < h) {
                // White pixel with full alpha (we'll control opacity during composite)
                stamp.setPixelAt(px + 1, py + 1, 0xFFFFFFFF);
              }
            }
          }
        }
      }
    }
  }
  return stamp;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { bucket, filePath } = await req.json();

    if (!bucket || !filePath) {
      return new Response(
        JSON.stringify({ error: "bucket and filePath are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get watermark text from system_settings
    const { data: setting } = await supabase
      .from("system_settings")
      .select("value")
      .eq("key", "watermark_text")
      .maybeSingle();

    const watermarkText = typeof setting?.value === "string"
      ? setting.value
      : (setting?.value ? String(setting.value) : "");

    const cleanText = watermarkText.replace(/^"|"$/g, "").trim();

    if (!cleanText) {
      return new Response(
        JSON.stringify({ success: true, skipped: true, reason: "No watermark text configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Download the image
    const { data: fileData, error: downloadError } = await supabase.storage
      .from(bucket)
      .download(filePath);

    if (downloadError || !fileData) {
      return new Response(
        JSON.stringify({ error: "Failed to download image", details: downloadError?.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const arrayBuffer = await fileData.arrayBuffer();
    const uint8 = new Uint8Array(arrayBuffer);

    // Detect format
    const isPNG = uint8[0] === 0x89 && uint8[1] === 0x50;
    const isJPEG = uint8[0] === 0xFF && uint8[1] === 0xD8;

    if (!isPNG && !isJPEG) {
      return new Response(
        JSON.stringify({ success: true, skipped: true, reason: "Unsupported image format" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Decode image
    let image: Image;
    try {
      image = await Image.decode(uint8);
    } catch (decodeErr) {
      console.error("Failed to decode image:", decodeErr);
      return new Response(
        JSON.stringify({ success: true, skipped: true, reason: "Could not decode image" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create watermark stamp
    const scale = Math.max(2, Math.round(Math.min(image.width, image.height) * 0.008));
    const stamp = createTextStamp(cleanText, scale);

    // Set stamp opacity to ~15%
    const alpha = 38; // ~15% of 255
    for (let y = 1; y <= stamp.height; y++) {
      for (let x = 1; x <= stamp.width; x++) {
        const pixel = stamp.getPixelAt(x, y);
        if (pixel !== 0) {
          // Set alpha channel
          const r = (pixel >> 24) & 0xFF;
          const g = (pixel >> 16) & 0xFF;
          const b = (pixel >> 8) & 0xFF;
          stamp.setPixelAt(x, y, Image.rgbaToColor(r, g, b, alpha));
        }
      }
    }

    // Tile the stamp diagonally across the image
    const spacingX = stamp.width + scale * 20;
    const spacingY = stamp.height + scale * 30;

    // We'll place stamps in a grid pattern with offset for diagonal feel
    for (let row = -1; row * spacingY < image.height + stamp.height; row++) {
      const offsetX = (row % 2) * (spacingX / 2); // stagger every other row
      for (let col = -1; col * spacingX < image.width + stamp.width; col++) {
        const x = Math.round(col * spacingX + offsetX);
        const y = Math.round(row * spacingY);
        // Composite stamp onto image
        image.composite(stamp, x, y);
      }
    }

    // Encode back
    let outputBuffer: Uint8Array;
    let contentType: string;

    if (isPNG) {
      outputBuffer = await image.encode(0); // PNG (level 0 = no compression for speed)
      contentType = "image/png";
    } else {
      outputBuffer = await image.encodeJPEG(85);
      contentType = "image/jpeg";
    }

    // Upload watermarked image back
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, outputBuffer, {
        upsert: true,
        contentType,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      // Original image is preserved since upload failed
      return new Response(
        JSON.stringify({ error: "Failed to upload watermarked image", details: uploadError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(filePath);

    return new Response(
      JSON.stringify({ success: true, url: urlData.publicUrl }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Watermark error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
