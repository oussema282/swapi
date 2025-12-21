import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useEffect } from 'react';

export function useNotifications() {
  const { user } = useAuth();

  const { data: notifications, refetch } = useQuery({
    queryKey: ['notifications', user?.id],
    queryFn: async () => {
      if (!user) return { hasNewMatches: false };

      // Get user's items
      const { data: myItems } = await supabase
        .from('items')
        .select('id')
        .eq('user_id', user.id);

      const myItemIds = myItems?.map(i => i.id) || [];

      if (myItemIds.length === 0) {
        return { hasNewMatches: false };
      }

      // Check for active (incomplete) matches
      const { data: activeMatches } = await supabase
        .from('matches')
        .select('id')
        .or(`item_a_id.in.(${myItemIds.join(',')}),item_b_id.in.(${myItemIds.join(',')})`)
        .eq('is_completed', false);

      const hasNewMatches = (activeMatches?.length || 0) > 0;

      return { hasNewMatches };
    },
    enabled: !!user,
    refetchInterval: 30000,
    staleTime: 10000,
  });

  // Subscribe to real-time updates for new matches
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel('notifications')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'matches',
        },
        () => {
          refetch();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, refetch]);

  return {
    hasNewMatches: notifications?.hasNewMatches || false,
  };
}
