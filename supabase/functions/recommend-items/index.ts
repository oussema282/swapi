import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Structured logging
function log(level: 'info' | 'warn' | 'error', message: string, data?: Record<string, unknown>) {
  console.log(JSON.stringify({ level, message, ...data, timestamp: new Date().toISOString() }));
}

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

// Default hardcoded weights - used as fallback when no policy is active
const DEFAULT_WEIGHTS = {
  categorySimilarity: 0.18,
  geoScore: 0.28,
  exchangeCompatibility: 0.18,
  behaviorAffinity: 0.10,
  freshness: 0.06,
  conditionScore: 0.08,
  reciprocalBoost: 0.12,
};

// Default exploration policy
const DEFAULT_EXPLORATION_POLICY = {
  randomness: 0.1,
  cold_start_boost: 0,
  stale_item_penalty: 0,
  cold_start_threshold_swipes: 5,
  stale_threshold_days: 14,
};

// Sigma for geo decay (in km)
const GEO_SIGMA = 50;

// Policy types
interface PolicyWeights {
  categorySimilarity: number;
  geoScore: number;
  exchangeCompatibility: number;
  behaviorAffinity: number;
  freshness: number;
  conditionScore: number;
  reciprocalBoost: number;
}

interface ExplorationPolicy {
  randomness: number;
  cold_start_boost: number;
  stale_item_penalty: number;
  cold_start_threshold_swipes: number;
  stale_threshold_days: number;
}

interface Policy {
  policy_version: string;
  weights: PolicyWeights;
  exploration_policy: ExplorationPolicy;
  reciprocal_policy: { priority: string; boost_cap: number };
}

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
  reciprocal_boost: number | null;
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

// Calculate freshness score with exploration policy modifiers
function calculateFreshnessWithPolicy(
  createdAt: string,
  totalSwipesOnItem: number,
  explorationPolicy: ExplorationPolicy
): { freshness: number; coldStartBoost: number; stalePenalty: number } {
  const ageInDays = (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24);
  const freshness = 1 / (1 + ageInDays);
  
  // Cold start boost for new items with few interactions
  const isColdStart = totalSwipesOnItem < (explorationPolicy.cold_start_threshold_swipes ?? 5);
  const coldStartBoost = isColdStart ? (explorationPolicy.cold_start_boost ?? 0) : 0;
  
  // Stale penalty for items with no recent activity
  const isStale = ageInDays > (explorationPolicy.stale_threshold_days ?? 14);
  const stalePenalty = isStale ? (explorationPolicy.stale_item_penalty ?? 0) : 0;
  
  return { freshness, coldStartBoost, stalePenalty };
}

// Legacy function for backwards compatibility
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

// Note: Legacy calculateItemScore function removed - now using calculateItemScoreWithPolicy

// Load active policy from database
async function loadPolicy(supabaseAdmin: any): Promise<Policy | null> {
  try {
    const { data, error } = await supabaseAdmin.rpc('get_active_policy');
    
    if (error || !data || data.length === 0) {
      log('warn', 'No active policy found, using defaults', { error: error?.message });
      return null;
    }
    
    const row = data[0];
    return {
      policy_version: row.policy_version,
      weights: row.weights as PolicyWeights,
      exploration_policy: row.exploration_policy as ExplorationPolicy,
      reciprocal_policy: row.reciprocal_policy,
    };
  } catch (err) {
    log('error', 'Failed to load policy', { error: err instanceof Error ? err.message : 'Unknown' });
    return null;
  }
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

    // Load active policy from database (or use defaults)
    const policy = await loadPolicy(supabaseAdmin);
    const weights: PolicyWeights = policy?.weights ?? DEFAULT_WEIGHTS;
    const explorationPolicy: ExplorationPolicy = policy?.exploration_policy ?? DEFAULT_EXPLORATION_POLICY;
    const policyVersion = policy?.policy_version ?? 'default';

    // This function is configured as public (no JWT required). We intentionally avoid
    // validating the caller token here and instead derive the user context from the
    // provided item.
    const { myItemId, limit = 50, expandedSearch = false } = await req.json();

    if (!myItemId) {
      return new Response(JSON.stringify({ error: "myItemId is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    log('info', 'Processing recommendation request', { 
      item_id: myItemId, 
      expanded: expandedSearch,
      policy_version: policyVersion 
    });

    // Get my item
    const { data: myItem, error: myItemError } = await supabaseAdmin
      .from("items")
      .select("*")
      .eq("id", myItemId)
      .single();

    if (myItemError || !myItem) {
      return new Response(JSON.stringify({ error: "Item not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const ownerUserId = (myItem as Item).user_id;

    // Get user's profile for location
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("latitude, longitude")
      .eq("user_id", ownerUserId)
      .single();

    // Get user's swipe history for this item
    const { data: swipes } = await supabaseAdmin
      .from("swipes")
      .select("swiped_item_id, liked")
      .eq("swiper_item_id", myItemId);

    const swipeHistory: SwipeHistory[] = swipes || [];
    const swipedItemIds = swipeHistory.map(s => s.swiped_item_id);
    const likedItemIds = swipeHistory.filter(s => s.liked).map(s => s.swiped_item_id);

    // Get existing matches involving my item - items with completed matches should not appear
    const { data: existingMatches } = await supabaseAdmin
      .from("matches")
      .select("item_a_id, item_b_id")
      .or(`item_a_id.eq.${myItemId},item_b_id.eq.${myItemId}`);

    const matchedItemIds = (existingMatches || []).flatMap(m => 
      [m.item_a_id, m.item_b_id].filter(id => id !== myItemId)
    );

    // Get accepted deal invitations involving my item - items with accepted deals should not appear
    const { data: acceptedDeals } = await supabaseAdmin
      .from("deal_invites")
      .select("sender_item_id, receiver_item_id")
      .eq("status", "accepted")
      .or(`sender_item_id.eq.${myItemId},receiver_item_id.eq.${myItemId}`);

    const dealItemIds = (acceptedDeals || []).flatMap(d => 
      [d.sender_item_id, d.receiver_item_id].filter(id => id !== myItemId)
    );

    // Combine all excluded item IDs
    const excludedItemIds = new Set([...swipedItemIds, ...matchedItemIds, ...dealItemIds]);

    // Get all candidate items - less strict filtering to show more items
    // We'll score them by exchange compatibility instead of filtering strictly
    const { data: candidateItems, error: itemsError } = await supabaseAdmin
      .from("items")
      .select("*")
      .eq("is_active", true)
      .eq("is_archived", false)
      .neq("user_id", ownerUserId);

    if (itemsError) {
      console.error("Error fetching items:", itemsError);
      return new Response(JSON.stringify({ error: "Failed to fetch items" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Filter out already swiped, matched, and deal-accepted items
    let unswiped = (candidateItems || []).filter(
      (item: Item) => !excludedItemIds.has(item.id)
    );

    // If pool is exhausted, silently expand search criteria
    let searchExpanded = false;
    if (unswiped.length < 5 && !expandedSearch) {
      console.log("Pool low, expanding search criteria silently");
      searchExpanded = true;
      // Include items that were swiped on more than 7 days ago (allow recycling)
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      
      const { data: oldSwipes } = await supabaseAdmin
        .from("swipes")
        .select("swiped_item_id, created_at")
        .eq("swiper_item_id", myItemId)
        .lt("created_at", sevenDaysAgo);
      
      const recyclableItemIds = (oldSwipes || []).map(s => s.swiped_item_id);
      
      // Add recyclable items back to pool
      const recyclableItems = (candidateItems || []).filter(
        (item: Item) => recyclableItemIds.includes(item.id) && !unswiped.some(u => u.id === item.id)
      );
      
      unswiped = [...unswiped, ...recyclableItems];
    }

    // Get liked items for behavior analysis
    const { data: likedItemsData } = await supabaseAdmin
      .from("items")
      .select("*")
      .in("id", likedItemIds.length > 0 ? likedItemIds : ["none"]);

    const likedItems: Item[] = likedItemsData || [];

    // Get swipe counts for cold start detection
    const { data: swipeCountsData } = await supabaseAdmin
      .from("swipes")
      .select("swiped_item_id")
      .in("swiped_item_id", unswiped.map((i: Item) => i.id));
    
    const swipeCountsMap = new Map<string, number>();
    (swipeCountsData || []).forEach((s: { swiped_item_id: string }) => {
      swipeCountsMap.set(s.swiped_item_id, (swipeCountsMap.get(s.swiped_item_id) || 0) + 1);
    });

    // Adjust weights if search was expanded (favor reciprocal boosts and behavioral affinity more)
    const adjustedWeights: PolicyWeights = searchExpanded ? {
      ...weights,
      reciprocalBoost: Math.min(weights.reciprocalBoost + 0.08, 0.25),
      behaviorAffinity: Math.min(weights.behaviorAffinity + 0.05, 0.20),
      exchangeCompatibility: Math.max(weights.exchangeCompatibility - 0.03, 0.10),
    } : weights;

    // Score and rank items using policy-driven weights
    const scoredItems = unswiped.map((item: Item) => ({
      item,
      score: calculateItemScoreWithPolicy(
        myItem as Item,
        item as Item,
        { lat: profile?.latitude ?? null, lon: profile?.longitude ?? null },
        swipeHistory,
        likedItems,
        adjustedWeights,
        explorationPolicy,
        swipeCountsMap.get(item.id) || 0
      ),
    }));

    // Sort by score descending
    scoredItems.sort((a: { item: Item; score: number }, b: { item: Item; score: number }) => b.score - a.score);

    // Return top items with their IDs and scores
    const rankedItems = scoredItems.slice(0, limit).map(({ item, score }: { item: Item; score: number }) => ({
      id: item.id,
      score: Math.round(score * 1000) / 1000,
    }));

    log('info', 'Recommendation complete', { 
      user_id: ownerUserId, 
      item_id: myItemId, 
      policy_version: policyVersion,
      pool_size: unswiped.length,
      returned: rankedItems.length,
      expanded: searchExpanded 
    });

    return new Response(JSON.stringify({ rankedItems, total: unswiped.length, searchExpanded, policyVersion }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    log('error', 'Recommendation error', { 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

// Calculate score with policy-driven weights and exploration modifiers
function calculateItemScoreWithPolicy(
  myItem: Item,
  targetItem: Item,
  userLocation: { lat: number | null; lon: number | null },
  swipeHistory: SwipeHistory[],
  likedItems: Item[],
  weights: PolicyWeights,
  explorationPolicy: ExplorationPolicy,
  totalSwipesOnItem: number
): number {
  const categorySim = calculateCategorySimilarity(myItem.swap_preferences, targetItem.category);
  const geoScore = calculateGeoScore(
    userLocation.lat, userLocation.lon,
    targetItem.latitude, targetItem.longitude
  );
  const exchangeCompat = calculateExchangeCompatibility(myItem, targetItem);
  const behaviorAffinity = calculateBehaviorAffinity(swipeHistory, likedItems, targetItem);
  
  // Use policy-aware freshness calculation
  const { freshness, coldStartBoost, stalePenalty } = calculateFreshnessWithPolicy(
    targetItem.created_at,
    totalSwipesOnItem,
    explorationPolicy
  );
  
  const conditionScore = CONDITION_WEIGHTS[targetItem.condition] || 0.5;
  const reciprocalBoost = targetItem.reciprocal_boost || 0;
  
  // Weighted sum with policy weights
  const baseScore = 
    weights.categorySimilarity * categorySim +
    weights.geoScore * geoScore +
    weights.exchangeCompatibility * exchangeCompat +
    weights.behaviorAffinity * behaviorAffinity +
    weights.freshness * freshness +
    weights.conditionScore * conditionScore +
    weights.reciprocalBoost * reciprocalBoost;
  
  // Apply exploration modifiers
  const modifiedScore = baseScore + coldStartBoost - stalePenalty;
  
  // Add exploration randomness from policy
  const randomness = explorationPolicy.randomness ?? 0.1;
  const exploration = Math.random() * randomness;
  
  return modifiedScore + exploration;
}
