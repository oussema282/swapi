import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Sample images from Unsplash for each category
const CATEGORY_IMAGES: Record<string, string[]> = {
  games: [
    "https://images.unsplash.com/photo-1493711662062-fa541f7f7b9c?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=400&fit=crop",
  ],
  electronics: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
  ],
  clothes: [
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=400&h=400&fit=crop",
  ],
  books: [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=400&fit=crop",
  ],
  home_garden: [
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=400&h=400&fit=crop",
  ],
  sports: [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461896836934- voices?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=400&fit=crop",
  ],
  other: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1531685250784-7569952593d2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&h=400&fit=crop",
  ],
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    // Get all items without photos
    const { data: items, error: itemsError } = await supabaseAdmin
      .from("items")
      .select("id, category, photos")
      .or("photos.is.null,photos.eq.{}");

    if (itemsError) {
      throw itemsError;
    }

    let updatedCount = 0;

    for (const item of items || []) {
      const category = item.category as string;
      const images = CATEGORY_IMAGES[category] || CATEGORY_IMAGES.other;
      
      // Pick a random image from the category
      const randomImage = images[Math.floor(Math.random() * images.length)];

      const { error: updateError } = await supabaseAdmin
        .from("items")
        .update({ photos: [randomImage] })
        .eq("id", item.id);

      if (!updateError) {
        updatedCount++;
        console.log(`Updated item ${item.id} with image`);
      } else {
        console.error(`Failed to update item ${item.id}:`, updateError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Added photos to ${updatedCount} items`,
        totalItems: items?.length || 0,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in add-sample-photos:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
