import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Item, ItemCategory } from '@/types/database';
import { useAuth } from './useAuth';
import { useSystemState } from './useSystemState';
import { useDeviceLocation, calculateDistance } from './useLocation';

export interface SwipeableItem extends Item {
  owner_display_name: string;
  owner_avatar_url: string | null;
  owner_is_pro?: boolean;
  owner_last_seen?: string | null;
  recommendation_score?: number;
  community_rating?: number;
  total_interactions?: number;
  reciprocal_boost?: number;
  distance_km?: number;
}

interface RecommendationResult {
  id: string;
  score: number;
}

interface RecommendationResponse {
  items: SwipeableItem[];
  searchExpanded: boolean;
  exhausted: boolean;
}

export type FeedMode = 'foryou' | 'nearby';

export function useRecommendedItems(myItemId: string | null, feedMode: FeedMode = 'foryou') {
  const { user } = useAuth();
  const { state: systemState, setSwipePhase } = useSystemState();
  const { latitude, longitude, hasLocation } = useDeviceLocation();
  
  // Gate recommendations on system phase
  // Do NOT fetch during TRANSITION or UPGRADING
  const isBlocked = 
    systemState.phase === 'TRANSITION' || 
    systemState.phase === 'BOOTSTRAPPING' ||
    systemState.phase === 'BLOCKED' ||
    systemState.subscription === 'UPGRADING';

  return useQuery({
    queryKey: ['recommended-items', myItemId, user?.id, feedMode, latitude, longitude],
    queryFn: async (): Promise<SwipeableItem[]> => {
      if (!user || !myItemId) return [];
      
      // Double-check phase gating (in case enabled changed after query started)
      if (isBlocked) {
        console.log('[RECO] blocked: system in transition or upgrading');
        return [];
      }

      // For "nearby" mode, sort purely by distance
      if (feedMode === 'nearby') {
        console.log('[RECO] fetching nearby mode for item:', myItemId);
        return fetchNearbyItems(user.id, myItemId, latitude, longitude);
      }

      console.log('[RECO] fetching foryou mode for item:', myItemId);

      try {
        // Step 1: Try strict mode first
        const { data, error: invokeError } = await supabase.functions.invoke('recommend-items', {
          body: { myItemId, limit: 50 },
        });

        if (invokeError) {
          console.error('[RECO] API error:', invokeError.message);
          return fallbackFetch(user.id, myItemId, latitude, longitude);
        }

        const result = data as { rankedItems?: RecommendationResult[]; searchExpanded?: boolean } | null;
        const rankedItems = result?.rankedItems;

        if (!rankedItems || rankedItems.length === 0) {
          // Step 2: Pool exhausted - automatically retry with expanded criteria ONCE
          console.log('[RECO] strict=0, trying expandedSearch=true');
          const { data: expandedData, error: expandedError } = await supabase.functions.invoke('recommend-items', {
            body: { myItemId, limit: 50, expandedSearch: true },
          });
          
          if (expandedError) {
            console.error('[RECO] expanded API error:', expandedError.message);
            // Exhausted - return empty, let UI handle EXHAUSTED state
            console.log('[RECO] exhausted after expanded error');
            return [];
          }

          const expandedItems = (expandedData as { rankedItems?: RecommendationResult[] } | null)?.rankedItems;
          
          if (!expandedItems || expandedItems.length === 0) {
            // Step 3: Both strict and expanded returned 0 - truly exhausted
            console.log('[RECO] exhausted: strict=0, expanded=0');
            return [];
          }
          
          console.log('[RECO] expanded returned', expandedItems.length, 'items');
          return fetchItemDetails(expandedItems, latitude, longitude);
        }

        console.log('[RECO] strict returned', rankedItems.length, 'items');
        return fetchItemDetails(rankedItems, latitude, longitude);
      } catch (error) {
        console.error('[RECO] exception:', error);
        return fallbackFetch(user.id, myItemId, latitude, longitude);
      }
    },
    // Only enable when not blocked
    enabled: !!user && !!myItemId && !isBlocked,
    staleTime: 30000, // Cache for 30 seconds
    refetchInterval: 60000, // Silently refresh every 60 seconds
    // CRITICAL: Ensure we get fresh data and don't hang
    retry: 1,
    retryDelay: 1000,
  });
}

// Nearby mode: purely distance-based sorting
async function fetchNearbyItems(
  userId: string, 
  myItemId: string, 
  userLat: number | null, 
  userLon: number | null
): Promise<SwipeableItem[]> {
  // Get my item
  const { data: myItem, error: myItemError } = await supabase
    .from('items')
    .select('*')
    .eq('id', myItemId)
    .single();

  if (myItemError || !myItem) return [];

  // Get items I've already swiped on
  const { data: existingSwipes } = await supabase
    .from('swipes')
    .select('swiped_item_id')
    .eq('swiper_item_id', myItemId);

  const swipedItemIds = existingSwipes?.map(s => s.swiped_item_id) || [];

  // Get all active items from other users
  const { data: items, error } = await supabase
    .from('items')
    .select('*')
    .neq('user_id', userId)
    .eq('is_active', true)
    .eq('is_archived', false);

  if (error) throw error;

  // Filter out already swiped items
  const filteredItems = (items || []).filter(item => !swipedItemIds.includes(item.id));

  if (filteredItems.length === 0) return [];

  // Get profiles
  const userIds = [...new Set(filteredItems.map(item => item.user_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('user_id, display_name, avatar_url, last_seen')
    .in('user_id', userIds);

  // Get subscriptions
  const { data: subscriptions } = await supabase
    .from('user_subscriptions')
    .select('user_id, is_pro')
    .in('user_id', userIds);

  // Get community ratings
  const itemIds = filteredItems.map(item => item.id);
  const { data: ratings } = await supabase
    .from('item_ratings')
    .select('item_id, rating, total_interactions')
    .in('item_id', itemIds);

  const profileMap = new Map((profiles || []).map(p => [p.user_id, p]));
  const subscriptionMap = new Map((subscriptions || []).map(s => [s.user_id, s.is_pro]));
  const ratingsMap = new Map((ratings || []).map(r => [r.item_id, { rating: r.rating, total_interactions: r.total_interactions }]));

  // Map with distance calculation
  const itemsWithDistance = filteredItems.map(item => {
    let distance_km: number | undefined;
    if (userLat && userLon && item.latitude && item.longitude) {
      distance_km = calculateDistance(userLat, userLon, item.latitude, item.longitude);
    }
    return {
      ...item,
      owner_display_name: profileMap.get(item.user_id)?.display_name || 'Unknown',
      owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
      owner_is_pro: subscriptionMap.get(item.user_id) ?? false,
      owner_last_seen: profileMap.get(item.user_id)?.last_seen || null,
      community_rating: ratingsMap.get(item.id)?.rating ?? 3.0,
      total_interactions: ratingsMap.get(item.id)?.total_interactions ?? 0,
      distance_km,
    } as SwipeableItem;
  });

  // Sort by distance (closest first), items without location go to end
  return itemsWithDistance.sort((a, b) => {
    if (a.distance_km === undefined && b.distance_km === undefined) return 0;
    if (a.distance_km === undefined) return 1;
    if (b.distance_km === undefined) return -1;
    return a.distance_km - b.distance_km;
  });
}

// Helper to fetch full item details from ranked IDs
async function fetchItemDetails(
  rankedItems: RecommendationResult[],
  userLat: number | null = null,
  userLon: number | null = null
): Promise<SwipeableItem[]> {
  const itemIds = rankedItems.map(r => r.id);
  const scoreMap = new Map(rankedItems.map(r => [r.id, r.score]));

  const { data: items, error } = await supabase
    .from('items')
    .select('*')
    .in('id', itemIds);

  if (error) throw error;

  // Get profiles for these items
  const userIds = [...new Set((items || []).map(item => item.user_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('user_id, display_name, avatar_url, last_seen')
    .in('user_id', userIds);

  // Get subscriptions to check Pro status
  const { data: subscriptions } = await supabase
    .from('user_subscriptions')
    .select('user_id, is_pro')
    .in('user_id', userIds);

  // Get community ratings for these items
  const { data: ratings } = await supabase
    .from('item_ratings')
    .select('item_id, rating, total_interactions')
    .in('item_id', itemIds);

  const profileMap = new Map(
    (profiles || []).map(p => [p.user_id, p])
  );

  const subscriptionMap = new Map(
    (subscriptions || []).map(s => [s.user_id, s.is_pro])
  );

  const ratingsMap = new Map(
    (ratings || []).map(r => [r.item_id, { rating: r.rating, total_interactions: r.total_interactions }])
  );

  // Combine items with profile data, scores, and community ratings
  const swipeableItems: SwipeableItem[] = (items || [])
    .map(item => {
      let distance_km: number | undefined;
      if (userLat && userLon && item.latitude && item.longitude) {
        distance_km = calculateDistance(userLat, userLon, item.latitude, item.longitude);
      }
      return {
        ...item,
        owner_display_name: profileMap.get(item.user_id)?.display_name || 'Unknown',
        owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
        owner_is_pro: subscriptionMap.get(item.user_id) ?? false,
        owner_last_seen: profileMap.get(item.user_id)?.last_seen || null,
        recommendation_score: scoreMap.get(item.id),
        community_rating: ratingsMap.get(item.id)?.rating ?? 3.0,
        total_interactions: ratingsMap.get(item.id)?.total_interactions ?? 0,
        reciprocal_boost: item.reciprocal_boost ?? 0,
        distance_km,
      };
    })
    .sort((a, b) => (b.recommendation_score || 0) - (a.recommendation_score || 0));

  return swipeableItems;
}

// Fallback function if recommendation API fails
async function fallbackFetch(
  userId: string, 
  myItemId: string,
  userLat: number | null = null,
  userLon: number | null = null
): Promise<SwipeableItem[]> {
  // Get my item
  const { data: myItem, error: myItemError } = await supabase
    .from('items')
    .select('*')
    .eq('id', myItemId)
    .single();

  if (myItemError || !myItem) return [];

  const mySwapPreferences = myItem.swap_preferences as string[];
  const myCategory = myItem.category as string;

  // Get items I've already swiped on
  const { data: existingSwipes } = await supabase
    .from('swipes')
    .select('swiped_item_id')
    .eq('swiper_item_id', myItemId);

  const swipedItemIds = existingSwipes?.map(s => s.swiped_item_id) || [];

  // Get compatible items
  const { data: items, error } = await supabase
    .from('items')
    .select('*')
    .neq('user_id', userId)
    .eq('is_active', true)
    .in('category', mySwapPreferences as ItemCategory[])
    .contains('swap_preferences', [myCategory as ItemCategory]);

  if (error) throw error;

  // Filter out already swiped items
  const filteredItems = (items || []).filter(item => !swipedItemIds.includes(item.id));

  if (filteredItems.length === 0) return [];

  // Get profiles
  const userIds = [...new Set(filteredItems.map(item => item.user_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('user_id, display_name, avatar_url, last_seen')
    .in('user_id', userIds);

  // Get community ratings
  const itemIds = filteredItems.map(item => item.id);
  const { data: ratings } = await supabase
    .from('item_ratings')
    .select('item_id, rating, total_interactions')
    .in('item_id', itemIds);

  // Get subscriptions to check Pro status
  const { data: subscriptions } = await supabase
    .from('user_subscriptions')
    .select('user_id, is_pro')
    .in('user_id', userIds);

  const profileMap = new Map(
    (profiles || []).map(p => [p.user_id, p])
  );

  const subscriptionMap = new Map(
    (subscriptions || []).map(s => [s.user_id, s.is_pro])
  );

  const ratingsMap = new Map(
    (ratings || []).map(r => [r.item_id, { rating: r.rating, total_interactions: r.total_interactions }])
  );

  return filteredItems.map(item => {
    let distance_km: number | undefined;
    if (userLat && userLon && item.latitude && item.longitude) {
      distance_km = calculateDistance(userLat, userLon, item.latitude, item.longitude);
    }
    return {
      ...item,
      owner_display_name: profileMap.get(item.user_id)?.display_name || 'Unknown',
      owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
      owner_is_pro: subscriptionMap.get(item.user_id) ?? false,
      owner_last_seen: profileMap.get(item.user_id)?.last_seen || null,
      community_rating: ratingsMap.get(item.id)?.rating ?? 3.0,
      total_interactions: ratingsMap.get(item.id)?.total_interactions ?? 0,
      distance_km,
    };
  });
}
