import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

    // Remove surrounding quotes if present
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

    // Convert to array buffer
    const arrayBuffer = await fileData.arrayBuffer();
    const uint8 = new Uint8Array(arrayBuffer);

    // Detect image type
    const isPNG = uint8[0] === 0x89 && uint8[1] === 0x50;
    const isJPEG = uint8[0] === 0xFF && uint8[1] === 0xD8;

    if (!isPNG && !isJPEG) {
      return new Response(
        JSON.stringify({ success: true, skipped: true, reason: "Unsupported image format" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Use ImageMagick via a convert approach - but since we're in Deno edge functions,
    // we'll use a pure SVG overlay approach with resvg-js or similar
    // Actually, let's use the Web Canvas API which is available in Deno
    
    // Import canvas module for Deno
    const { createCanvas, loadImage } = await import("https://deno.land/x/canvas@v1.4.2/mod.ts");

    // Load the image
    const img = await loadImage(uint8);
    const canvas = createCanvas(img.width(), img.height());
    const ctx = canvas.getContext("2d");

    // Draw original image
    ctx.drawImage(img, 0, 0);

    // Configure watermark style
    const fontSize = Math.max(16, Math.min(img.width(), img.height()) * 0.06);
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Rotate and tile the watermark text
    const diagonal = Math.sqrt(img.width() ** 2 + img.height() ** 2);
    const spacing = fontSize * 4;

    ctx.save();
    ctx.translate(img.width() / 2, img.height() / 2);
    ctx.rotate(-Math.PI / 6); // -30 degrees

    for (let y = -diagonal; y < diagonal; y += spacing) {
      for (let x = -diagonal; x < diagonal; x += spacing) {
        ctx.fillText(cleanText, x, y);
      }
    }

    // Also draw with dark color for visibility on light backgrounds
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    for (let y = -diagonal + spacing / 2; y < diagonal; y += spacing) {
      for (let x = -diagonal + spacing / 2; x < diagonal; x += spacing) {
        ctx.fillText(cleanText, x, y);
      }
    }

    ctx.restore();

    // Export as the original format
    let outputBuffer: Uint8Array;
    let contentType: string;

    if (isPNG) {
      outputBuffer = canvas.toBuffer("image/png");
      contentType = "image/png";
    } else {
      outputBuffer = canvas.toBuffer("image/jpeg");
      contentType = "image/jpeg";
    }

    // Upload watermarked image back, replacing the original
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, outputBuffer, {
        upsert: true,
        contentType,
      });

    if (uploadError) {
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
