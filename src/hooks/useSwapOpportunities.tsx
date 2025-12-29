import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface SwapOpportunity {
  id: string;
  cycle_type: '2-way' | '3-way';
  user_a_id: string;
  item_a_id: string;
  user_b_id: string;
  item_b_id: string;
  user_c_id: string | null;
  item_c_id: string | null;
  confidence_score: number;
  status: string;
  created_at: string;
  expires_at: string;
}

export interface EnrichedSwapOpportunity extends SwapOpportunity {
  items: {
    id: string;
    title: string;
    photos: string[] | null;
    category: string;
    owner_name: string;
    owner_avatar: string | null;
    is_mine: boolean;
  }[];
}

export function useSwapOpportunities() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['swap-opportunities', user?.id],
    queryFn: async (): Promise<EnrichedSwapOpportunity[]> => {
      if (!user) return [];

      // Fetch opportunities where user is involved
      const { data: opportunities, error } = await supabase
        .from('swap_opportunities')
        .select('*')
        .eq('status', 'active')
        .or(`user_a_id.eq.${user.id},user_b_id.eq.${user.id},user_c_id.eq.${user.id}`)
        .order('confidence_score', { ascending: false })
        .limit(20);

      if (error) {
        console.error('Error fetching swap opportunities:', error);
        return [];
      }

      if (!opportunities || opportunities.length === 0) return [];

      // Collect all item IDs
      const itemIds = new Set<string>();
      for (const opp of opportunities) {
        itemIds.add(opp.item_a_id);
        itemIds.add(opp.item_b_id);
        if (opp.item_c_id) itemIds.add(opp.item_c_id);
      }

      // Fetch items
      const { data: items } = await supabase
        .from('items')
        .select('id, title, photos, category, user_id')
        .in('id', Array.from(itemIds));

      // Fetch profiles for item owners
      const ownerIds = new Set((items || []).map(i => i.user_id));
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, display_name, avatar_url')
        .in('user_id', Array.from(ownerIds));

      // Build lookup maps
      const itemMap = new Map((items || []).map(i => [i.id, i]));
      const profileMap = new Map((profiles || []).map(p => [p.user_id, p]));

      // Enrich opportunities
      return opportunities.map(opp => {
        const oppItems: EnrichedSwapOpportunity['items'] = [];

        const addItem = (itemId: string) => {
          const item = itemMap.get(itemId);
          if (item) {
            const profile = profileMap.get(item.user_id);
            oppItems.push({
              id: item.id,
              title: item.title,
              photos: item.photos,
              category: item.category,
              owner_name: profile?.display_name || 'Unknown',
              owner_avatar: profile?.avatar_url || null,
              is_mine: item.user_id === user.id,
            });
          }
        };

        addItem(opp.item_a_id);
        addItem(opp.item_b_id);
        if (opp.item_c_id) addItem(opp.item_c_id);

        return {
          ...opp,
          items: oppItems,
        } as EnrichedSwapOpportunity;
      });
    },
    enabled: !!user,
    staleTime: 60000, // 1 minute cache
    refetchInterval: 300000, // Refetch every 5 minutes
  });
}

export function useDismissOpportunity() {
  return async (opportunityId: string) => {
    const { error } = await supabase
      .from('swap_opportunities')
      .update({ status: 'dismissed' })
      .eq('id', opportunityId);

    if (error) throw error;
  };
}
