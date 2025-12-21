import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useEffect } from 'react';

export function useNotifications() {
  const { user } = useAuth();

  const { data: notifications, refetch } = useQuery({
    queryKey: ['notifications', user?.id],
    queryFn: async () => {
      if (!user) return { hasNewMatches: false, hasNewMessages: false };

      // Get user's items
      const { data: myItems } = await supabase
        .from('items')
        .select('id')
        .eq('user_id', user.id);

      const myItemIds = myItems?.map(i => i.id) || [];

      if (myItemIds.length === 0) {
        return { hasNewMatches: false, hasNewMessages: false };
      }

      // Check for matches created in the last 24 hours that the user might not have seen
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      const { data: recentMatches } = await supabase
        .from('matches')
        .select('id, created_at')
        .or(`item_a_id.in.(${myItemIds.join(',')}),item_b_id.in.(${myItemIds.join(',')})`)
        .gte('created_at', yesterday.toISOString());

      const hasNewMatches = (recentMatches?.length || 0) > 0;

      // Check for unread messages (messages from others in the last hour)
      const oneHourAgo = new Date();
      oneHourAgo.setHours(oneHourAgo.getHours() - 1);

      // Get matches for the user
      const { data: matches } = await supabase
        .from('matches')
        .select('id')
        .or(`item_a_id.in.(${myItemIds.join(',')}),item_b_id.in.(${myItemIds.join(',')})`);

      const matchIds = matches?.map(m => m.id) || [];

      let hasNewMessages = false;
      if (matchIds.length > 0) {
        const { data: recentMessages } = await supabase
          .from('messages')
          .select('id, sender_id')
          .in('match_id', matchIds)
          .neq('sender_id', user.id)
          .gte('created_at', oneHourAgo.toISOString())
          .limit(1);

        hasNewMessages = (recentMessages?.length || 0) > 0;
      }

      return { hasNewMatches, hasNewMessages };
    },
    enabled: !!user,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 10000,
  });

  // Subscribe to real-time updates for new messages
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel('notifications')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        () => {
          refetch();
        }
      )
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
    hasNewMessages: notifications?.hasNewMessages || false,
  };
}
