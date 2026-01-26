import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Item, ItemCategory } from '@/types/database';
import { useAuth } from './useAuth';

interface SwipeableItem extends Item {
  owner_display_name: string;
  owner_avatar_url: string | null;
}

export function useSwipeableItems(myItemId: string | null) {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['swipeable-items', myItemId, user?.id],
    queryFn: async () => {
      if (!user || !myItemId) return [];

      // First, get my item to know its swap preferences and category
      const { data: myItem, error: myItemError } = await supabase
        .from('items')
        .select('*')
        .eq('id', myItemId)
        .single();

      if (myItemError || !myItem) return [];

      const mySwapPreferences = myItem.swap_preferences as ItemCategory[];
      const myCategory = myItem.category as ItemCategory;

      // Get items I've already swiped on with this item
      const { data: existingSwipes } = await supabase
        .from('swipes')
        .select('swiped_item_id')
        .eq('swiper_item_id', myItemId);

      const swipedItemIds = existingSwipes?.map(s => s.swiped_item_id) || [];

      // Get items I've already matched with (to exclude from swiping)
      const { data: existingMatches } = await supabase
        .from('matches')
        .select('item_a_id, item_b_id')
        .or(`item_a_id.eq.${myItemId},item_b_id.eq.${myItemId}`);

      const matchedItemIds = existingMatches?.flatMap(m => 
        [m.item_a_id, m.item_b_id].filter(id => id !== myItemId)
      ) || [];

      // Combine swiped and matched items to exclude
      const excludedItemIds = [...new Set([...swipedItemIds, ...matchedItemIds])];

      // Get compatible items (without profile join - we'll fetch profiles separately)
      const { data: items, error } = await supabase
        .from('items')
        .select('*')
        .neq('user_id', user.id)
        .eq('is_active', true)
        .in('category', mySwapPreferences)
        .contains('swap_preferences', [myCategory]);

      if (error) throw error;

      // Filter out already swiped/matched items
      const filteredItems = (items || []).filter(item => !excludedItemIds.includes(item.id));

      if (filteredItems.length === 0) return [];

      // Get unique user IDs from filtered items
      const userIds = [...new Set(filteredItems.map(item => item.user_id))];

      // Fetch profiles for these users
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, display_name, avatar_url')
        .in('user_id', userIds);

      // Create a map for quick lookup
      const profileMap = new Map(
        (profiles || []).map(p => [p.user_id, p])
      );

      // Combine items with profile data
      const swipeableItems: SwipeableItem[] = filteredItems.map(item => ({
        ...item,
        owner_display_name: profileMap.get(item.user_id)?.display_name || 'Unknown',
        owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
      }));

      return swipeableItems;
    },
    enabled: !!user && !!myItemId,
  });
}

export function useSwipe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ 
      swiperItemId, 
      swipedItemId, 
      liked 
    }: { 
      swiperItemId: string; 
      swipedItemId: string; 
      liked: boolean;
    }) => {
      const { data, error } = await supabase
        .from('swipes')
        .insert({
          swiper_item_id: swiperItemId,
          swiped_item_id: swipedItemId,
          liked,
        })
        .select()
        .single();

      // If we've already swiped this exact pair, Postgres rejects the insert due to the
      // unique constraint (swiper_item_id, swiped_item_id). In that case, treat it as a
      // no-op success so the UI can advance to the next card instead of showing an error.
      if (error) {
        const isDuplicate = error.code === '23505' || (error.message || '').includes('swipes_swiper_item_id_swiped_item_id_key');
        if (isDuplicate) {
          const { data: existing, error: existingError } = await supabase
            .from('swipes')
            .select('*')
            .eq('swiper_item_id', swiperItemId)
            .eq('swiped_item_id', swipedItemId)
            .maybeSingle();

          if (existingError) throw existingError;
          if (!existing) throw error;

          // If the existing swipe was a like, still check if a match exists.
          if (existing.liked) {
            const { data: match } = await supabase
              .from('matches')
              .select('*')
              .or(`and(item_a_id.eq.${swiperItemId},item_b_id.eq.${swipedItemId}),and(item_a_id.eq.${swipedItemId},item_b_id.eq.${swiperItemId})`)
              .maybeSingle();

            return { swipe: existing, match };
          }

          return { swipe: existing, match: null };
        }

        throw error;
      }

      // Check if a match was created
      if (liked) {
        const { data: match } = await supabase
          .from('matches')
          .select('*')
          .or(`and(item_a_id.eq.${swiperItemId},item_b_id.eq.${swipedItemId}),and(item_a_id.eq.${swipedItemId},item_b_id.eq.${swiperItemId})`)
          .maybeSingle();

        return { swipe: data, match };
      }

      return { swipe: data, match: null };
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['swipeable-items', variables.swiperItemId] });
      // DO NOT invalidate recommended-items here - the client tracks progress via currentIndex
      // and invalidating causes the card stack to re-sort mid-session
      queryClient.invalidateQueries({ queryKey: ['matches'] });
    },
  });
}

