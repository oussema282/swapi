import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Item, ItemCategory } from '@/types/database';
import { useAuth } from './useAuth';

interface SwipeableItem extends Item {
  owner_display_name: string;
  owner_avatar_url: string | null;
  owner_is_pro?: boolean;
  recommendation_score?: number;
  community_rating?: number;
  total_interactions?: number;
  reciprocal_boost?: number;
}

interface RecommendationResult {
  id: string;
  score: number;
}

export function useRecommendedItems(myItemId: string | null) {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['recommended-items', myItemId, user?.id],
    queryFn: async (): Promise<SwipeableItem[]> => {
      if (!user || !myItemId) return [];

       try {
         const { data, error: invokeError } = await supabase.functions.invoke('recommend-items', {
           body: { myItemId, limit: 50 },
         });

         if (invokeError) {
           console.error('Recommendation API error:', invokeError.message);
           return fallbackFetch(user.id, myItemId);
         }

         const result = data as { rankedItems?: RecommendationResult[]; searchExpanded?: boolean } | null;
         const rankedItems = result?.rankedItems;

         if (!rankedItems || rankedItems.length === 0) {
           // Pool exhausted - silently retry with expanded criteria
           console.log('Pool exhausted, trying expanded search...');
           const { data: expandedData } = await supabase.functions.invoke('recommend-items', {
             body: { myItemId, limit: 50, expandedSearch: true },
           });
           const expandedItems = (expandedData as { rankedItems?: RecommendationResult[] } | null)?.rankedItems;
           if (!expandedItems || expandedItems.length === 0) {
             return [];
           }
           return fetchItemDetails(expandedItems);
         }

        return fetchItemDetails(rankedItems);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        return fallbackFetch(user.id, myItemId);
      }
    },
    enabled: !!user && !!myItemId,
    staleTime: 30000, // Cache for 30 seconds
    refetchInterval: 60000, // Silently refresh every 60 seconds
  });
}

// Helper to fetch full item details from ranked IDs
async function fetchItemDetails(rankedItems: RecommendationResult[]): Promise<SwipeableItem[]> {
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
    .select('user_id, display_name, avatar_url')
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
    .map(item => ({
      ...item,
      owner_display_name: profileMap.get(item.user_id)?.display_name || 'Unknown',
      owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
      owner_is_pro: subscriptionMap.get(item.user_id) ?? false,
      recommendation_score: scoreMap.get(item.id),
      community_rating: ratingsMap.get(item.id)?.rating ?? 3.0,
      total_interactions: ratingsMap.get(item.id)?.total_interactions ?? 0,
      reciprocal_boost: item.reciprocal_boost ?? 0,
    }))
    .sort((a, b) => (b.recommendation_score || 0) - (a.recommendation_score || 0));

  return swipeableItems;
}

// Fallback function if recommendation API fails
async function fallbackFetch(userId: string, myItemId: string): Promise<SwipeableItem[]> {
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
    .select('user_id, display_name, avatar_url')
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

  return filteredItems.map(item => ({
    ...item,
    owner_display_name: profileMap.get(item.user_id)?.display_name || 'Unknown',
    owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
    owner_is_pro: subscriptionMap.get(item.user_id) ?? false,
    community_rating: ratingsMap.get(item.id)?.rating ?? 3.0,
    total_interactions: ratingsMap.get(item.id)?.total_interactions ?? 0,
  }));
}
