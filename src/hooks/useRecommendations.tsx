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

export type FeedMode = 'foryou' | 'nearby';

export interface NearbyFilters {
  priceMin: number;
  priceMax: number;
  maxDistance: number; // km, 0 = no limit
  selectedCategories?: ItemCategory[];
}

export function useRecommendedItems(
  myItemId: string | null, 
  feedMode: FeedMode = 'foryou',
  nearbyFilters?: NearbyFilters
) {
  const { user } = useAuth();
  const { state: systemState } = useSystemState();
  const { latitude, longitude } = useDeviceLocation();
  
  // Gate recommendations on system phase
  const isBlocked = 
    systemState.phase === 'TRANSITION' || 
    systemState.phase === 'BOOTSTRAPPING' ||
    systemState.phase === 'BLOCKED' ||
    systemState.subscription === 'UPGRADING';

  return useQuery({
    queryKey: ['recommended-items', myItemId, user?.id, feedMode, nearbyFilters?.priceMin, nearbyFilters?.priceMax, nearbyFilters?.maxDistance, nearbyFilters?.selectedCategories?.join(',')],
    queryFn: async (): Promise<SwipeableItem[]> => {
      if (!user || !myItemId) return [];
      
      if (isBlocked) {
        console.log('[RECO] blocked: system in transition or upgrading');
        return [];
      }

      // For "nearby" mode, sort purely by distance with optional filters
      if (feedMode === 'nearby') {
        console.log('[RECO] fetching nearby mode for item:', myItemId, 'filters:', nearbyFilters);
        return fetchNearbyItems(user.id, myItemId, latitude, longitude, nearbyFilters);
      }

      console.log('[RECO] fetching foryou mode for item:', myItemId, 'filters:', nearbyFilters);
      return fetchForYouItems(user.id, myItemId, latitude, longitude, nearbyFilters);
    },
    enabled: !!user && !!myItemId && !isBlocked,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
    retry: 1,
    retryDelay: 1000,
  });
}

// For You mode: use recommendation API with optional category filter
async function fetchForYouItems(
  userId: string,
  myItemId: string,
  userLat: number | null,
  userLon: number | null,
  filters?: NearbyFilters
): Promise<SwipeableItem[]> {
  try {
    const { data, error: invokeError } = await supabase.functions.invoke('recommend-items', {
      body: { myItemId, limit: 50 },
    });

    if (invokeError) {
      console.error('[RECO] API error:', invokeError.message);
      return fallbackFetch(userId, myItemId, userLat, userLon, filters);
    }

    const result = data as { rankedItems?: RecommendationResult[] } | null;
    const rankedItems = result?.rankedItems;

    if (!rankedItems || rankedItems.length === 0) {
      console.log('[RECO] strict=0, trying expandedSearch=true');
      const { data: expandedData, error: expandedError } = await supabase.functions.invoke('recommend-items', {
        body: { myItemId, limit: 50, expandedSearch: true },
      });
      
      if (expandedError) {
        console.error('[RECO] expanded API error:', expandedError.message);
        return [];
      }

      const expandedItems = (expandedData as { rankedItems?: RecommendationResult[] } | null)?.rankedItems;
      
      if (!expandedItems || expandedItems.length === 0) {
        console.log('[RECO] exhausted: strict=0, expanded=0');
        return [];
      }
      
      console.log('[RECO] expanded returned', expandedItems.length, 'items');
      return fetchItemDetailsWithFilter(expandedItems, userLat, userLon, filters);
    }

    console.log('[RECO] strict returned', rankedItems.length, 'items');
    return fetchItemDetailsWithFilter(rankedItems, userLat, userLon, filters);
  } catch (error) {
    console.error('[RECO] exception:', error);
    return fallbackFetch(userId, myItemId, userLat, userLon, filters);
  }
}

// Nearby mode: purely distance-based sorting with optional filters
async function fetchNearbyItems(
  userId: string, 
  myItemId: string, 
  userLat: number | null, 
  userLon: number | null,
  filters?: NearbyFilters
): Promise<SwipeableItem[]> {
  const { data: myItem, error: myItemError } = await supabase
    .from('items')
    .select('*')
    .eq('id', myItemId)
    .single();

  if (myItemError || !myItem) return [];

  const { data: existingSwipes } = await supabase
    .from('swipes')
    .select('swiped_item_id')
    .eq('swiper_item_id', myItemId);

  const swipedItemIds = existingSwipes?.map(s => s.swiped_item_id) || [];

  const { data: items, error } = await supabase
    .from('items')
    .select('*')
    .neq('user_id', userId)
    .eq('is_active', true)
    .eq('is_archived', false);

  if (error) throw error;

  let filteredItems = (items || []).filter(item => !swipedItemIds.includes(item.id));
  
  // Apply category filter
  if (filters?.selectedCategories && filters.selectedCategories.length > 0) {
    filteredItems = filteredItems.filter(item => 
      filters.selectedCategories!.includes(item.category as ItemCategory)
    );
  }
  
  // Apply price filter
  if (filters) {
    filteredItems = filteredItems.filter(item => {
      const itemMin = item.value_min ?? 0;
      const itemMax = item.value_max ?? itemMin;
      return itemMin <= filters.priceMax && itemMax >= filters.priceMin;
    });
  }
  
  // Apply distance filter
  if (filters?.maxDistance && filters.maxDistance > 0 && userLat && userLon) {
    filteredItems = filteredItems.filter(item => {
      if (!item.latitude || !item.longitude) return false;
      const distance = calculateDistance(userLat, userLon, item.latitude, item.longitude);
      return distance <= filters.maxDistance;
    });
  }

  if (filteredItems.length === 0) return [];

  const userIds = [...new Set(filteredItems.map(item => item.user_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('user_id, display_name, avatar_url, last_seen')
    .in('user_id', userIds);

  const { data: subscriptions } = await supabase
    .from('user_subscriptions')
    .select('user_id, is_pro')
    .in('user_id', userIds);

  const itemIds = filteredItems.map(item => item.id);
  const { data: ratings } = await supabase
    .from('item_ratings')
    .select('item_id, rating, total_interactions')
    .in('item_id', itemIds);

  const profileMap = new Map((profiles || []).map(p => [p.user_id, p]));
  const subscriptionMap = new Map((subscriptions || []).map(s => [s.user_id, s.is_pro]));
  const ratingsMap = new Map((ratings || []).map(r => [r.item_id, { rating: r.rating, total_interactions: r.total_interactions }]));

  const itemsWithDistance = filteredItems.map(item => {
    let distance_km: number | undefined;
    if (userLat && userLon && item.latitude && item.longitude) {
      distance_km = calculateDistance(userLat, userLon, item.latitude, item.longitude);
    }
    return {
      ...item,
      owner_display_name: profileMap.get(item.user_id)?.display_name || 'User',
      owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
      owner_is_pro: subscriptionMap.get(item.user_id) ?? false,
      owner_last_seen: profileMap.get(item.user_id)?.last_seen || null,
      community_rating: ratingsMap.get(item.id)?.rating ?? 3.0,
      total_interactions: ratingsMap.get(item.id)?.total_interactions ?? 0,
      distance_km,
    } as SwipeableItem;
  });

  return itemsWithDistance.sort((a, b) => {
    if (a.distance_km === undefined && b.distance_km === undefined) return 0;
    if (a.distance_km === undefined) return 1;
    if (b.distance_km === undefined) return -1;
    return a.distance_km - b.distance_km;
  });
}

// Helper to fetch item details with category filter applied
async function fetchItemDetailsWithFilter(
  rankedItems: RecommendationResult[],
  userLat: number | null = null,
  userLon: number | null = null,
  filters?: NearbyFilters
): Promise<SwipeableItem[]> {
  const itemIds = rankedItems.map(r => r.id);
  const scoreMap = new Map(rankedItems.map(r => [r.id, r.score]));

  const { data: items, error } = await supabase
    .from('items')
    .select('*')
    .in('id', itemIds);

  if (error) throw error;

  let filteredItems = items || [];
  
  // Apply category filter
  if (filters?.selectedCategories && filters.selectedCategories.length > 0) {
    filteredItems = filteredItems.filter(item => 
      filters.selectedCategories!.includes(item.category as ItemCategory)
    );
  }
  
  // Apply price filter
  if (filters) {
    filteredItems = filteredItems.filter(item => {
      const itemMin = item.value_min ?? 0;
      const itemMax = item.value_max ?? itemMin;
      return itemMin <= filters.priceMax && itemMax >= filters.priceMin;
    });
  }

  if (filteredItems.length === 0) return [];

  const userIds = [...new Set(filteredItems.map(item => item.user_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('user_id, display_name, avatar_url, last_seen')
    .in('user_id', userIds);

  const { data: subscriptions } = await supabase
    .from('user_subscriptions')
    .select('user_id, is_pro')
    .in('user_id', userIds);

  const filteredItemIds = filteredItems.map(item => item.id);
  const { data: ratings } = await supabase
    .from('item_ratings')
    .select('item_id, rating, total_interactions')
    .in('item_id', filteredItemIds);

  const profileMap = new Map((profiles || []).map(p => [p.user_id, p]));
  const subscriptionMap = new Map((subscriptions || []).map(s => [s.user_id, s.is_pro]));
  const ratingsMap = new Map((ratings || []).map(r => [r.item_id, { rating: r.rating, total_interactions: r.total_interactions }]));

  const swipeableItems: SwipeableItem[] = filteredItems
    .map(item => {
      let distance_km: number | undefined;
      if (userLat && userLon && item.latitude && item.longitude) {
        distance_km = calculateDistance(userLat, userLon, item.latitude, item.longitude);
      }
      return {
        ...item,
        owner_display_name: profileMap.get(item.user_id)?.display_name || 'User',
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
  userLon: number | null = null,
  filters?: NearbyFilters
): Promise<SwipeableItem[]> {
  const { data: myItem, error: myItemError } = await supabase
    .from('items')
    .select('*')
    .eq('id', myItemId)
    .single();

  if (myItemError || !myItem) return [];

  const mySwapPreferences = myItem.swap_preferences as string[];
  const myCategory = myItem.category as string;

  const { data: existingSwipes } = await supabase
    .from('swipes')
    .select('swiped_item_id')
    .eq('swiper_item_id', myItemId);

  const swipedItemIds = existingSwipes?.map(s => s.swiped_item_id) || [];

  const { data: items, error } = await supabase
    .from('items')
    .select('*')
    .neq('user_id', userId)
    .eq('is_active', true)
    .in('category', mySwapPreferences as ItemCategory[])
    .contains('swap_preferences', [myCategory as ItemCategory]);

  if (error) throw error;

  let filteredItems = (items || []).filter(item => !swipedItemIds.includes(item.id));
  
  // Apply category filter
  if (filters?.selectedCategories && filters.selectedCategories.length > 0) {
    filteredItems = filteredItems.filter(item => 
      filters.selectedCategories!.includes(item.category as ItemCategory)
    );
  }
  
  // Apply price filter
  if (filters) {
    filteredItems = filteredItems.filter(item => {
      const itemMin = item.value_min ?? 0;
      const itemMax = item.value_max ?? itemMin;
      return itemMin <= filters.priceMax && itemMax >= filters.priceMin;
    });
  }

  if (filteredItems.length === 0) return [];

  const userIds = [...new Set(filteredItems.map(item => item.user_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('user_id, display_name, avatar_url, last_seen')
    .in('user_id', userIds);

  const itemIds = filteredItems.map(item => item.id);
  const { data: ratings } = await supabase
    .from('item_ratings')
    .select('item_id, rating, total_interactions')
    .in('item_id', itemIds);

  const { data: subscriptions } = await supabase
    .from('user_subscriptions')
    .select('user_id, is_pro')
    .in('user_id', userIds);

  const profileMap = new Map((profiles || []).map(p => [p.user_id, p]));
  const subscriptionMap = new Map((subscriptions || []).map(s => [s.user_id, s.is_pro]));
  const ratingsMap = new Map((ratings || []).map(r => [r.item_id, { rating: r.rating, total_interactions: r.total_interactions }]));

  return filteredItems.map(item => {
    let distance_km: number | undefined;
    if (userLat && userLon && item.latitude && item.longitude) {
      distance_km = calculateDistance(userLat, userLon, item.latitude, item.longitude);
    }
    return {
      ...item,
      owner_display_name: profileMap.get(item.user_id)?.display_name || 'User',
      owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
      owner_is_pro: subscriptionMap.get(item.user_id) ?? false,
      owner_last_seen: profileMap.get(item.user_id)?.last_seen || null,
      community_rating: ratingsMap.get(item.id)?.rating ?? 3.0,
      total_interactions: ratingsMap.get(item.id)?.total_interactions ?? 0,
      distance_km,
    };
  });
}