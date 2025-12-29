import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Category embeddings for preference learning
const CATEGORY_EMBEDDINGS: Record<string, number[]> = {
  electronics: [0.9, 0.1, 0.3, 0.2, 0.2],
  clothes: [0.1, 0.9, 0.2, 0.3, 0.1],
  books: [0.2, 0.1, 0.9, 0.1, 0.3],
  games: [0.7, 0.1, 0.8, 0.4, 0.2],
  sports: [0.2, 0.3, 0.1, 0.9, 0.2],
  home_garden: [0.2, 0.1, 0.2, 0.1, 0.9],
  other: [0.3, 0.3, 0.3, 0.3, 0.3],
};

interface Item {
  id: string;
  user_id: string;
  category: string;
  swap_preferences: string[];
  latitude: number | null;
  longitude: number | null;
  is_active: boolean;
}

interface Swipe {
  swiper_item_id: string;
  swiped_item_id: string;
  liked: boolean;
}

interface UserAffinities {
  [category: string]: number;
}

// Calculate Haversine distance between two points in km
function haversineDistance(
  lat1: number, lon1: number,
  lat2: number, lon2: number
): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Cosine similarity between two vectors
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

// Learn user's category affinities from their swipe history
function learnCategoryAffinities(
  swipes: Swipe[],
  itemsById: Map<string, Item>
): UserAffinities {
  const affinities: UserAffinities = {};
  const counts: Record<string, number> = {};
  
  for (const swipe of swipes) {
    const item = itemsById.get(swipe.swiped_item_id);
    if (!item) continue;
    
    const category = item.category;
    counts[category] = (counts[category] || 0) + 1;
    
    // Liked items increase affinity, disliked decrease
    const delta = swipe.liked ? 1 : -0.5;
    affinities[category] = (affinities[category] || 0) + delta;
  }
  
  // Normalize to 0-1 range
  for (const cat of Object.keys(affinities)) {
    const count = counts[cat] || 1;
    affinities[cat] = Math.max(0, Math.min(1, (affinities[cat] / count + 1) / 2));
  }
  
  return affinities;
}

// Predict how much user A would like item from user B
function predictPreference(
  userAffinities: UserAffinities,
  item: Item,
  userSwapPrefs: string[]
): number {
  // Base: does the item category match user's swap preferences?
  const categoryMatch = userSwapPrefs.includes(item.category) ? 0.5 : 0.2;
  
  // Learned affinity for this category
  const learnedAffinity = userAffinities[item.category] ?? 0.5;
  
  // Combine
  return 0.4 * categoryMatch + 0.6 * learnedAffinity;
}

// Calculate reciprocal satisfaction score between two users
function calculateReciprocalScore(
  userA: { id: string; items: Item[]; affinities: UserAffinities },
  userB: { id: string; items: Item[]; affinities: UserAffinities }
): { score: number; itemA: Item | null; itemB: Item | null } {
  let maxScore = 0;
  let bestItemA: Item | null = null;
  let bestItemB: Item | null = null;
  
  // Find best pair: A's item that B wants, and B's item that A wants
  for (const itemA of userA.items) {
    for (const itemB of userB.items) {
      // B wants A's item (B's swap_preferences includes A's category)
      const bWantsA = itemB.swap_preferences.includes(itemA.category);
      const bPrediction = bWantsA 
        ? predictPreference(userB.affinities, itemA, itemB.swap_preferences)
        : 0.1;
      
      // A wants B's item
      const aWantsB = itemA.swap_preferences.includes(itemB.category);
      const aPrediction = aWantsB
        ? predictPreference(userA.affinities, itemB, itemA.swap_preferences)
        : 0.1;
      
      // Reciprocal score is product (both must want each other's items)
      const reciprocal = bPrediction * aPrediction;
      
      // Add distance bonus if both items have location
      let distanceBonus = 0;
      if (itemA.latitude && itemA.longitude && itemB.latitude && itemB.longitude) {
        const distance = haversineDistance(
          itemA.latitude, itemA.longitude,
          itemB.latitude, itemB.longitude
        );
        distanceBonus = Math.exp(-distance / 100) * 0.2; // Bonus for nearby
      }
      
      const totalScore = reciprocal + distanceBonus;
      
      if (totalScore > maxScore) {
        maxScore = totalScore;
        bestItemA = itemA;
        bestItemB = itemB;
      }
    }
  }
  
  return { score: maxScore, itemA: bestItemA, itemB: bestItemB };
}

// Find 3-way swap cycles (A→B→C→A)
function find3WayCycles(
  users: Map<string, { items: Item[]; affinities: UserAffinities }>,
  pairScores: Map<string, { score: number; itemA: Item; itemB: Item }>
): Array<{
  userA: string; itemA: string;
  userB: string; itemB: string;
  userC: string; itemC: string;
  score: number;
}> {
  const cycles: Array<{
    userA: string; itemA: string;
    userB: string; itemB: string;
    userC: string; itemC: string;
    score: number;
  }> = [];
  
  const userIds = Array.from(users.keys());
  
  // For each potential starting user A
  for (let i = 0; i < userIds.length && cycles.length < 20; i++) {
    const userAId = userIds[i];
    const userA = users.get(userAId)!;
    
    for (let j = i + 1; j < userIds.length && cycles.length < 20; j++) {
      const userBId = userIds[j];
      const userB = users.get(userBId)!;
      
      // Check A→B edge (B wants something from A)
      const abKey = `${userAId}:${userBId}`;
      const abEdge = pairScores.get(abKey);
      if (!abEdge || abEdge.score < 0.3) continue;
      
      for (let k = j + 1; k < userIds.length && cycles.length < 20; k++) {
        const userCId = userIds[k];
        const userC = users.get(userCId)!;
        
        // Check B→C edge
        const bcKey = `${userBId}:${userCId}`;
        const bcEdge = pairScores.get(bcKey);
        if (!bcEdge || bcEdge.score < 0.3) continue;
        
        // Check C→A edge (completing the cycle)
        const caKey = `${userCId}:${userAId}`;
        const caEdge = pairScores.get(caKey);
        if (!caEdge || caEdge.score < 0.3) continue;
        
        // Valid 3-way cycle found!
        const cycleScore = (abEdge.score + bcEdge.score + caEdge.score) / 3;
        
        cycles.push({
          userA: userAId,
          itemA: abEdge.itemA.id,
          userB: userBId,
          itemB: bcEdge.itemA.id,
          userC: userCId,
          itemC: caEdge.itemA.id,
          score: cycleScore,
        });
      }
    }
  }
  
  // Sort by score and return top cycles
  return cycles.sort((a, b) => b.score - a.score).slice(0, 10);
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting reciprocal optimization batch job...");
    
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Fetch all active items
    const { data: items, error: itemsError } = await supabaseAdmin
      .from("items")
      .select("*")
      .eq("is_active", true);

    if (itemsError) throw itemsError;
    console.log(`Loaded ${items?.length || 0} active items`);

    // Fetch all swipes for learning
    const { data: swipes, error: swipesError } = await supabaseAdmin
      .from("swipes")
      .select("swiper_item_id, swiped_item_id, liked");

    if (swipesError) throw swipesError;
    console.log(`Loaded ${swipes?.length || 0} swipes for learning`);

    // Build item lookup
    const itemsById = new Map<string, Item>();
    for (const item of (items || [])) {
      itemsById.set(item.id, item as Item);
    }

    // Group items by user and learn affinities
    const userItemMap = new Map<string, Item[]>();
    const userSwipeMap = new Map<string, Swipe[]>();

    for (const item of (items || [])) {
      const existing = userItemMap.get(item.user_id) || [];
      existing.push(item as Item);
      userItemMap.set(item.user_id, existing);
    }

    for (const swipe of (swipes || [])) {
      const item = itemsById.get(swipe.swiper_item_id);
      if (!item) continue;
      const userId = item.user_id;
      const existing = userSwipeMap.get(userId) || [];
      existing.push(swipe as Swipe);
      userSwipeMap.set(userId, existing);
    }

    // Build user profiles with learned affinities
    const users = new Map<string, { items: Item[]; affinities: UserAffinities }>();
    
    for (const [userId, userItems] of userItemMap) {
      const userSwipes = userSwipeMap.get(userId) || [];
      const affinities = learnCategoryAffinities(userSwipes, itemsById);
      users.set(userId, { items: userItems, affinities });
      
      // Store learned preferences
      await supabaseAdmin
        .from("user_preferences_learned")
        .upsert({
          user_id: userId,
          category_affinities: affinities,
          computed_at: new Date().toISOString(),
        }, { onConflict: "user_id" });
    }

    console.log(`Processed ${users.size} users`);

    // Calculate pairwise reciprocal scores
    const userIds = Array.from(users.keys());
    const pairScores = new Map<string, { score: number; itemA: Item; itemB: Item }>();
    const twoWayOpportunities: Array<{
      userA: string; itemA: string;
      userB: string; itemB: string;
      score: number;
    }> = [];

    for (let i = 0; i < userIds.length; i++) {
      for (let j = i + 1; j < userIds.length; j++) {
        const userAId = userIds[i];
        const userBId = userIds[j];
        const userA = users.get(userAId)!;
        const userB = users.get(userBId)!;

        const result = calculateReciprocalScore(
          { id: userAId, ...userA },
          { id: userBId, ...userB }
        );

        if (result.score > 0.3 && result.itemA && result.itemB) {
          pairScores.set(`${userAId}:${userBId}`, {
            score: result.score,
            itemA: result.itemA,
            itemB: result.itemB,
          });

          twoWayOpportunities.push({
            userA: userAId,
            itemA: result.itemA.id,
            userB: userBId,
            itemB: result.itemB.id,
            score: result.score,
          });
        }
      }
    }

    console.log(`Found ${twoWayOpportunities.length} potential 2-way swaps`);

    // Find 3-way cycles
    const threeWayCycles = find3WayCycles(users, pairScores);
    console.log(`Found ${threeWayCycles.length} potential 3-way swaps`);

    // Clear old opportunities
    await supabaseAdmin
      .from("swap_opportunities")
      .delete()
      .lt("expires_at", new Date().toISOString());

    // Store 2-way opportunities (top 50)
    const top2Way = twoWayOpportunities
      .sort((a, b) => b.score - a.score)
      .slice(0, 50);

    for (const opp of top2Way) {
      await supabaseAdmin.from("swap_opportunities").upsert({
        cycle_type: "2-way",
        user_a_id: opp.userA,
        item_a_id: opp.itemA,
        user_b_id: opp.userB,
        item_b_id: opp.itemB,
        confidence_score: opp.score,
        status: "active",
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      }, {
        onConflict: "id",
        ignoreDuplicates: false,
      });
    }

    // Store 3-way opportunities
    for (const cycle of threeWayCycles) {
      await supabaseAdmin.from("swap_opportunities").upsert({
        cycle_type: "3-way",
        user_a_id: cycle.userA,
        item_a_id: cycle.itemA,
        user_b_id: cycle.userB,
        item_b_id: cycle.itemB,
        user_c_id: cycle.userC,
        item_c_id: cycle.itemC,
        confidence_score: cycle.score,
        status: "active",
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      }, {
        onConflict: "id",
        ignoreDuplicates: false,
      });
    }

    // Update reciprocal_boost on items involved in high-confidence opportunities
    const boostMap = new Map<string, number>();
    
    for (const opp of [...top2Way, ...threeWayCycles]) {
      const currentA = boostMap.get(opp.itemA) || 0;
      boostMap.set(opp.itemA, Math.max(currentA, opp.score));
      
      const currentB = boostMap.get(opp.itemB) || 0;
      boostMap.set(opp.itemB, Math.max(currentB, opp.score));
      
      if ('itemC' in opp) {
        const itemC = (opp as typeof threeWayCycles[0]).itemC;
        if (itemC) {
          const currentC = boostMap.get(itemC) || 0;
          boostMap.set(itemC, Math.max(currentC, opp.score));
        }
      }
    }

    // Batch update reciprocal boosts
    for (const [itemId, boost] of boostMap) {
      await supabaseAdmin
        .from("items")
        .update({ reciprocal_boost: boost })
        .eq("id", itemId);
    }

    // Reset boost for items not in opportunities
    const boostedIds = Array.from(boostMap.keys());
    if (boostedIds.length > 0) {
      await supabaseAdmin
        .from("items")
        .update({ reciprocal_boost: 0 })
        .eq("is_active", true)
        .not("id", "in", `(${boostedIds.join(",")})`);
    }

    console.log("Reciprocal optimization completed successfully");

    return new Response(JSON.stringify({
      success: true,
      stats: {
        usersProcessed: users.size,
        twoWayOpportunities: top2Way.length,
        threeWayCycles: threeWayCycles.length,
        itemsBoosted: boostMap.size,
      }
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Reciprocal optimizer error:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error" 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
