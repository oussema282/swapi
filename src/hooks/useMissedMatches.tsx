import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { Item } from '@/types/database';

export interface MissedMatch {
  id: string;
  my_item_id: string;
  their_item_id: string;
  their_item: Item & { owner_display_name: string; owner_avatar_url: string | null; owner_is_pro: boolean };
  my_item: Item;
  missed_at: string;
}

// Find items where the other person liked your item but you swiped left
export function useMissedMatches() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['missed-matches', user?.id],
    queryFn: async (): Promise<MissedMatch[]> => {
      if (!user) return [];

      // Get my items
      const { data: myItems } = await supabase
        .from('items')
        .select('id')
        .eq('user_id', user.id);

      if (!myItems?.length) return [];
      const myItemIds = myItems.map(i => i.id);

      // Find swipes where someone liked my items
      const { data: incomingLikes } = await supabase
        .from('swipes')
        .select('swiper_item_id, swiped_item_id, created_at')
        .in('swiped_item_id', myItemIds)
        .eq('liked', true);

      if (!incomingLikes?.length) return [];

      // Find swipes where I disliked items
      const { data: myDislikes } = await supabase
        .from('swipes')
        .select('swiper_item_id, swiped_item_id')
        .in('swiper_item_id', myItemIds)
        .eq('liked', false);

      if (!myDislikes?.length) return [];

      // Find missed matches: where someone liked my item but I disliked theirs
      // CRITICAL: The dislike must be from THE SAME item that received the like
      const missedMatchPairs: Array<{ myItemId: string; theirItemId: string; missedAt: string }> = [];
      
      for (const like of incomingLikes) {
        const theirItemId = like.swiper_item_id; // The item that liked my item
        const myItemId = like.swiped_item_id;    // My item that received the like
        
        // Check if I disliked their item WITH THE SAME ITEM that received the like
        // This is the correct pairing: myItemId disliked theirItemId
        const iDisliked = myDislikes.find(d => 
          d.swiper_item_id === myItemId && d.swiped_item_id === theirItemId
        );
        
        if (iDisliked) {
          missedMatchPairs.push({
            myItemId,
            theirItemId,
            missedAt: like.created_at,
          });
        }
      }

      if (!missedMatchPairs.length) return [];

      // Fetch all relevant items
      const allItemIds = [...new Set([
        ...missedMatchPairs.map(p => p.myItemId),
        ...missedMatchPairs.map(p => p.theirItemId),
      ])];

      const { data: items } = await supabase
        .from('items')
        .select('*')
        .in('id', allItemIds);

      if (!items?.length) return [];

      // Fetch profiles for their items
      const theirUserIds = [...new Set(items.filter(i => !myItemIds.includes(i.id)).map(i => i.user_id))];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, display_name, avatar_url')
        .in('user_id', theirUserIds);

      // Fetch subscription status for Pro badges
      const { data: subscriptions } = await supabase
        .from('user_subscriptions')
        .select('user_id, is_pro')
        .in('user_id', theirUserIds);

      const subscriptionMap = new Map(
        (subscriptions || []).map(s => [s.user_id, s.is_pro])
      );

      const itemMap = new Map(items.map(i => [i.id, i]));
      const profileMap = new Map(profiles?.map(p => [p.user_id, { ...p, is_pro: subscriptionMap.get(p.user_id) || false }]) || []);

      return missedMatchPairs.slice(0, 10).map((pair, idx) => {
        const theirItem = itemMap.get(pair.theirItemId)!;
        const myItem = itemMap.get(pair.myItemId)!;
        const profile = profileMap.get(theirItem?.user_id);

        return {
          id: `missed-${idx}-${pair.theirItemId}`,
          my_item_id: pair.myItemId,
          their_item_id: pair.theirItemId,
          their_item: {
            ...theirItem,
            owner_display_name: profile?.display_name || 'Unknown',
            owner_avatar_url: profile?.avatar_url || null,
            owner_is_pro: profile?.is_pro || false,
          },
          my_item: myItem,
          missed_at: pair.missedAt,
        };
      });
    },
    enabled: !!user,
    staleTime: 60000,
  });
}

// Recover a missed match by deleting the dislike and creating a like
export function useRecoverMissedMatch() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ myItemId, theirItemId }: { myItemId: string; theirItemId: string }) => {
      // Step 1: Delete the existing dislike swipe
      const { error: deleteError } = await supabase
        .from('swipes')
        .delete()
        .eq('swiper_item_id', myItemId)
        .eq('swiped_item_id', theirItemId);

      if (deleteError) throw deleteError;

      // Step 2: Insert a new like swipe (this triggers check_for_match)
      const { error: insertError } = await supabase
        .from('swipes')
        .insert({
          swiper_item_id: myItemId,
          swiped_item_id: theirItemId,
          liked: true,
        });

      if (insertError) throw insertError;

      // Step 3: Wait for the trigger to create the match
      await new Promise(resolve => setTimeout(resolve, 500));

      // Step 4: Find the newly created match
      const itemA = myItemId < theirItemId ? myItemId : theirItemId;
      const itemB = myItemId < theirItemId ? theirItemId : myItemId;

      const { data: match, error: matchError } = await supabase
        .from('matches')
        .select('id')
        .eq('item_a_id', itemA)
        .eq('item_b_id', itemB)
        .maybeSingle();

      if (matchError) throw matchError;
      if (!match) throw new Error('Match was not created');

      return { matchId: match.id };
    },
    onSuccess: () => {
      // Invalidate all related caches
      queryClient.invalidateQueries({ queryKey: ['matches'] });
      queryClient.invalidateQueries({ queryKey: ['missed-matches'] });
      queryClient.invalidateQueries({ queryKey: ['recommendations'] });
    },
  });
}

export function useUnmatchMutation() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (matchId: string) => {
      // Delete the match
      const { error } = await supabase
        .from('matches')
        .delete()
        .eq('id', matchId);

      if (error) throw error;
      return { success: true };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['matches'] });
    },
  });
}
