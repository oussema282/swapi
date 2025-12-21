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

      // Get compatible items:
      // 1. Not my own items
      // 2. Their category is in my swap preferences
      // 3. My category is in their swap preferences
      // 4. Not already swiped
      // 5. Active items only
      const { data: items, error } = await supabase
        .from('items')
        .select(`
          *,
          profiles!items_user_id_fkey (
            display_name,
            avatar_url
          )
        `)
        .neq('user_id', user.id)
        .eq('is_active', true)
        .in('category', mySwapPreferences)
        .contains('swap_preferences', [myCategory]);

      if (error) throw error;

      // Filter out already swiped items
      const filteredItems = (items || [])
        .filter(item => !swipedItemIds.includes(item.id))
        .map(item => ({
          ...item,
          owner_display_name: (item.profiles as any)?.display_name || 'Unknown',
          owner_avatar_url: (item.profiles as any)?.avatar_url || null,
        })) as SwipeableItem[];

      return filteredItems;
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

      if (error) throw error;

      // Check if a match was created
      if (liked) {
        const { data: match } = await supabase
          .from('matches')
          .select('*')
          .or(`item_a_id.eq.${swiperItemId},item_b_id.eq.${swiperItemId}`)
          .or(`item_a_id.eq.${swipedItemId},item_b_id.eq.${swipedItemId}`)
          .maybeSingle();

        return { swipe: data, match };
      }

      return { swipe: data, match: null };
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['swipeable-items', variables.swiperItemId] });
      queryClient.invalidateQueries({ queryKey: ['matches'] });
    },
  });
}
