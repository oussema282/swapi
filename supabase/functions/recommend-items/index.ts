import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Pre-computed category embeddings (5-dimensional vectors)
// Categories are mapped to semantic dimensions: [tech, fashion, media, sports, home]
const CATEGORY_EMBEDDINGS: Record<string, number[]> = {
  electronics: [0.9, 0.1, 0.3, 0.2, 0.2],
  clothes: [0.1, 0.9, 0.2, 0.3, 0.1],
  books: [0.2, 0.1, 0.9, 0.1, 0.3],
  games: [0.7, 0.1, 0.8, 0.4, 0.2],
  sports: [0.2, 0.3, 0.1, 0.9, 0.2],
  home_garden: [0.2, 0.1, 0.2, 0.1, 0.9],
  other: [0.3, 0.3, 0.3, 0.3, 0.3],
};

// Condition weights for scoring
const CONDITION_WEIGHTS: Record<string, number> = {
  new: 1.0,
  like_new: 0.9,
  good: 0.7,
  fair: 0.5,
  poor: 0.3,
};

// Algorithm weights
const WEIGHTS = {
  categorySimilarity: 0.25,
  geoScore: 0.15,
  exchangeCompatibility: 0.25,
  behaviorAffinity: 0.15,
  freshness: 0.10,
  conditionScore: 0.10,
};

// Sigma for geo decay (in km)
const GEO_SIGMA = 50;

// Exploration factor (random boost)
const EXPLORATION_FACTOR = 0.1;

interface Item {
  id: string;
  user_id: string;
  category: string;
  condition: string;
  swap_preferences: string[];
  value_min: number | null;
  value_max: number | null;
  latitude: number | null;
  longitude: number | null;
  created_at: string;
  is_active: boolean;
  title: string;
  description: string | null;
  photos: string[] | null;
}

interface UserPreferences {
  category_weights: Record<string, number>;
  condition_weights: Record<string, number>;
}

interface SwipeHistory {
  swiped_item_id: string;
  liked: boolean;
}

// Calculate cosine similarity between two vectors
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length || a.length === 0) return 0;
  
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  
  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  return denominator === 0 ? 0 : dotProduct / denominator;
}

// Calculate Haversine distance between two points in km
function haversineDistance(
  lat1: number, lon1: number,
  lat2: number, lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Calculate geo score with exponential decay
function calculateGeoScore(
  userLat: number | null, userLon: number | null,
  itemLat: number | null, itemLon: number | null
): number {
  if (userLat == null || userLon == null || itemLat == null || itemLon == null) {
    return 0.5; // Neutral score if no location data
  }
  const distance = haversineDistance(userLat, userLon, itemLat, itemLon);
  return Math.exp(-distance / GEO_SIGMA);
}

// Calculate freshness score
function calculateFreshness(createdAt: string): number {
  const ageInDays = (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24);
  return 1 / (1 + ageInDays);
}

// Calculate category similarity
function calculateCategorySimilarity(
  userPreferredCategories: string[],
  itemCategory: string
): number {
  const itemEmbedding = CATEGORY_EMBEDDINGS[itemCategory] || CATEGORY_EMBEDDINGS.other;
  
  if (userPreferredCategories.length === 0) {
    return 0.5; // Neutral if no preferences
  }
  
  // Average embedding of preferred categories
  const avgEmbedding = [0, 0, 0, 0, 0];
  for (const cat of userPreferredCategories) {
    const catEmb = CATEGORY_EMBEDDINGS[cat] || CATEGORY_EMBEDDINGS.other;
    for (let i = 0; i < 5; i++) {
      avgEmbedding[i] += catEmb[i] / userPreferredCategories.length;
    }
  }
  
  return cosineSimilarity(avgEmbedding, itemEmbedding);
}

// Calculate exchange compatibility
function calculateExchangeCompatibility(
  myItem: Item,
  targetItem: Item
): number {
  // Check if my item's category is in target's swap preferences
  const myInTheirPrefs = targetItem.swap_preferences.includes(myItem.category) ? 1 : 0;
  
  // Check if target's category is in my swap preferences
  const theirInMyPrefs = myItem.swap_preferences.includes(targetItem.category) ? 1 : 0;
  
  // Check category embedding similarity between what they want and what I have
  const myEmbedding = CATEGORY_EMBEDDINGS[myItem.category] || CATEGORY_EMBEDDINGS.other;
  const theirPrefEmbedding = targetItem.swap_preferences.length > 0
    ? targetItem.swap_preferences.reduce((acc, cat) => {
        const catEmb = CATEGORY_EMBEDDINGS[cat] || CATEGORY_EMBEDDINGS.other;
        return acc.map((v, i) => v + catEmb[i] / targetItem.swap_preferences.length);
      }, [0, 0, 0, 0, 0])
    : CATEGORY_EMBEDDINGS.other;
  
  const embeddingSimilarity = cosineSimilarity(myEmbedding, theirPrefEmbedding);
  
  // Weighted combination: direct match is most important
  return 0.4 * myInTheirPrefs + 0.4 * theirInMyPrefs + 0.2 * embeddingSimilarity;
}

// Calculate behavior affinity based on swipe history
function calculateBehaviorAffinity(
  swipeHistory: SwipeHistory[],
  likedItems: Item[],
  targetItem: Item
): number {
  if (likedItems.length === 0) {
    return 0.5; // Neutral if no history
  }
  
  // Calculate average embedding of liked items
  const avgLikedEmbedding = [0, 0, 0, 0, 0];
  for (const item of likedItems) {
    const catEmb = CATEGORY_EMBEDDINGS[item.category] || CATEGORY_EMBEDDINGS.other;
    for (let i = 0; i < 5; i++) {
      avgLikedEmbedding[i] += catEmb[i] / likedItems.length;
    }
  }
  
  const targetEmbedding = CATEGORY_EMBEDDINGS[targetItem.category] || CATEGORY_EMBEDDINGS.other;
  return cosineSimilarity(avgLikedEmbedding, targetEmbedding);
}

// Calculate final score for an item
function calculateItemScore(
  myItem: Item,
  targetItem: Item,
  userLocation: { lat: number | null; lon: number | null },
  swipeHistory: SwipeHistory[],
  likedItems: Item[]
): number {
  const categorySim = calculateCategorySimilarity(myItem.swap_preferences, targetItem.category);
  const geoScore = calculateGeoScore(
    userLocation.lat, userLocation.lon,
    targetItem.latitude, targetItem.longitude
  );
  const exchangeCompat = calculateExchangeCompatibility(myItem, targetItem);
  const behaviorAffinity = calculateBehaviorAffinity(swipeHistory, likedItems, targetItem);
  const freshness = calculateFreshness(targetItem.created_at);
  const conditionScore = CONDITION_WEIGHTS[targetItem.condition] || 0.5;
  
  // Weighted sum
  const baseScore = 
    WEIGHTS.categorySimilarity * categorySim +
    WEIGHTS.geoScore * geoScore +
    WEIGHTS.exchangeCompatibility * exchangeCompat +
    WEIGHTS.behaviorAffinity * behaviorAffinity +
    WEIGHTS.freshness * freshness +
    WEIGHTS.conditionScore * conditionScore;
  
  // Add exploration randomness
  const exploration = Math.random() * EXPLORATION_FACTOR;
  
  return baseScore + exploration;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create admin client for data queries
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const rawAuthHeader = req.headers.get("Authorization") ?? req.headers.get("authorization");
    if (!rawAuthHeader) {
      console.error("No authorization header provided");
      return new Response(JSON.stringify({ error: "No authorization header" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const tokenMatch = rawAuthHeader.match(/^Bearer\s+(.+)$/i);
    const token = tokenMatch?.[1]?.trim();
    if (!token) {
      console.error("Invalid authorization header format");
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Create client with anon key for auth validation.
    // IMPORTANT: In server environments, relying on the request Authorization header
    // is more reliable than passing the token as a parameter.
    const supabaseAuth = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: {
            Authorization: rawAuthHeader,
          },
        },
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      }
    );

    const {
      data: { user },
      error: userError,
    } = await supabaseAuth.auth.getUser();

    if (userError || !user) {
      console.error(
        "Token validation failed:",
        userError ? JSON.stringify(userError) : "No user found",
        "tokenLength=",
        token.length
      );
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log(`Processing recommendation request for user ${user.id}`);

    const { myItemId, limit = 20 } = await req.json();

    if (!myItemId) {
      return new Response(JSON.stringify({ error: "myItemId is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Get my item
    const { data: myItem, error: myItemError } = await supabaseAdmin
      .from("items")
      .select("*")
      .eq("id", myItemId)
      .eq("user_id", user.id)
      .single();

    if (myItemError || !myItem) {
      return new Response(JSON.stringify({ error: "Item not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Get user's profile for location
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("latitude, longitude")
      .eq("user_id", user.id)
      .single();

    // Get user's swipe history for this item
    const { data: swipes } = await supabaseAdmin
      .from("swipes")
      .select("swiped_item_id, liked")
      .eq("swiper_item_id", myItemId);

    const swipeHistory: SwipeHistory[] = swipes || [];
    const swipedItemIds = swipeHistory.map(s => s.swiped_item_id);
    const likedItemIds = swipeHistory.filter(s => s.liked).map(s => s.swiped_item_id);

    // Get all candidate items - less strict filtering to show more items
    // We'll score them by exchange compatibility instead of filtering strictly
    const { data: candidateItems, error: itemsError } = await supabaseAdmin
      .from("items")
      .select("*")
      .eq("is_active", true)
      .neq("user_id", user.id);

    if (itemsError) {
      console.error("Error fetching items:", itemsError);
      return new Response(JSON.stringify({ error: "Failed to fetch items" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Filter out already swiped items
    const unswiped = (candidateItems || []).filter(
      (item: Item) => !swipedItemIds.includes(item.id)
    );

    // Get liked items for behavior analysis
    const { data: likedItemsData } = await supabaseAdmin
      .from("items")
      .select("*")
      .in("id", likedItemIds.length > 0 ? likedItemIds : ["none"]);

    const likedItems: Item[] = likedItemsData || [];

    // Score and rank items
    const scoredItems = unswiped.map((item: Item) => ({
      item,
      score: calculateItemScore(
        myItem as Item,
        item as Item,
        { lat: profile?.latitude ?? null, lon: profile?.longitude ?? null },
        swipeHistory,
        likedItems
      ),
    }));

    // Sort by score descending
    scoredItems.sort((a: { item: Item; score: number }, b: { item: Item; score: number }) => b.score - a.score);

    // Return top items with their IDs and scores
    const rankedItems = scoredItems.slice(0, limit).map(({ item, score }: { item: Item; score: number }) => ({
      id: item.id,
      score: Math.round(score * 1000) / 1000,
    }));

    console.log(`Recommended ${rankedItems.length} items for user ${user.id}`);

    return new Response(JSON.stringify({ rankedItems, total: unswiped.length }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in recommend-items:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
