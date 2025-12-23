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

      // Get compatible items (without profile join - we'll fetch profiles separately)
      const { data: items, error } = await supabase
        .from('items')
        .select('*')
        .neq('user_id', user.id)
        .eq('is_active', true)
        .in('category', mySwapPreferences)
        .contains('swap_preferences', [myCategory]);

      if (error) throw error;

      // Filter out already swiped items
      const filteredItems = (items || []).filter(item => !swipedItemIds.includes(item.id));

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

export function useCheckUndoEligibility() {
  return useMutation({
    mutationFn: async ({ 
      swiperItemId, 
      swipedItemId 
    }: { 
      swiperItemId: string; 
      swipedItemId: string; 
    }) => {
      // Check if user already undid this item in the last 24 hours
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      
      const { data: recentUndo, error } = await supabase
        .from('swipe_undos')
        .select('id, undone_at')
        .eq('swiper_item_id', swiperItemId)
        .eq('swiped_item_id', swipedItemId)
        .gte('undone_at', twentyFourHoursAgo)
        .maybeSingle();

      if (error) throw error;

      return { 
        canUndo: !recentUndo, 
        lastUndoAt: recentUndo?.undone_at || null 
      };
    },
  });
}

export function useUndoSwipe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ 
      swiperItemId, 
      swipedItemId 
    }: { 
      swiperItemId: string; 
      swipedItemId: string; 
    }) => {
      // Check if user already undid this item in the last 24 hours
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      
      const { data: recentUndo } = await supabase
        .from('swipe_undos')
        .select('id, undone_at')
        .eq('swiper_item_id', swiperItemId)
        .eq('swiped_item_id', swipedItemId)
        .gte('undone_at', twentyFourHoursAgo)
        .maybeSingle();

      if (recentUndo) {
        throw new Error('You can only undo once per item every 24 hours');
      }

      // Delete the swipe record
      const { error: deleteError } = await supabase
        .from('swipes')
        .delete()
        .eq('swiper_item_id', swiperItemId)
        .eq('swiped_item_id', swipedItemId);

      if (deleteError) throw deleteError;

      // Record the undo
      const { error: insertError } = await supabase
        .from('swipe_undos')
        .insert({
          swiper_item_id: swiperItemId,
          swiped_item_id: swipedItemId,
        });

      if (insertError) throw insertError;

      return { success: true };
    },
    onSuccess: (_, variables) => {
      // Invalidate queries to refresh the swipeable items
      queryClient.invalidateQueries({ queryKey: ['swipeable-items', variables.swiperItemId] });
      queryClient.invalidateQueries({ queryKey: ['recommended-items', variables.swiperItemId] });
    },
  });
}
