import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Match, Message, Item } from '@/types/database';
import { useAuth } from './useAuth';

interface MatchWithItems extends Match {
  item_a: Item & { owner_display_name: string };
  item_b: Item & { owner_display_name: string };
  my_item: Item;
  their_item: Item & { owner_display_name: string };
  last_message?: Message;
}

export function useMatches() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['matches', user?.id],
    queryFn: async () => {
      if (!user) return [];

      // Get all matches where user owns one of the items
      const { data: matches, error } = await supabase
        .from('matches')
        .select(`
          *,
          item_a:items!matches_item_a_id_fkey (*),
          item_b:items!matches_item_b_id_fkey (*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Filter matches where user owns one of the items
      const userMatches = (matches || []).filter(match => 
        (match.item_a as any)?.user_id === user.id || 
        (match.item_b as any)?.user_id === user.id
      );

      if (userMatches.length === 0) return [];

      // Get all unique user IDs from matches
      const userIds = new Set<string>();
      userMatches.forEach(match => {
        if ((match.item_a as any)?.user_id) userIds.add((match.item_a as any).user_id);
        if ((match.item_b as any)?.user_id) userIds.add((match.item_b as any).user_id);
      });

      // Fetch profiles for all users
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, display_name, avatar_url')
        .in('user_id', Array.from(userIds));

      const profileMap = new Map(
        (profiles || []).map(p => [p.user_id, p])
      );

      // Transform matches with profile data
      const transformedMatches = userMatches.map(match => {
        const itemA = match.item_a as any;
        const itemB = match.item_b as any;
        const isMyItemA = itemA?.user_id === user.id;
        
        return {
          ...match,
          item_a: { 
            ...itemA, 
            owner_display_name: profileMap.get(itemA?.user_id)?.display_name || 'Unknown'
          },
          item_b: { 
            ...itemB, 
            owner_display_name: profileMap.get(itemB?.user_id)?.display_name || 'Unknown'
          },
          my_item: isMyItemA ? itemA : itemB,
          their_item: isMyItemA 
            ? { ...itemB, owner_display_name: profileMap.get(itemB?.user_id)?.display_name || 'Unknown' }
            : { ...itemA, owner_display_name: profileMap.get(itemA?.user_id)?.display_name || 'Unknown' },
        } as MatchWithItems;
      });

      return transformedMatches;
    },
    enabled: !!user,
  });
}

export function useMessages(matchId: string) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['messages', matchId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('match_id', matchId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      return data as Message[];
    },
    enabled: !!matchId,
  });

  // Subscribe to realtime updates
  useEffect(() => {
    if (!matchId) return;

    const channel = supabase
      .channel(`messages-${matchId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `match_id=eq.${matchId}`,
        },
        () => {
          queryClient.invalidateQueries({ queryKey: ['messages', matchId] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [matchId, queryClient]);

  return query;
}

export function useSendMessage() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ matchId, content }: { matchId: string; content: string }) => {
      if (!user) throw new Error('Not authenticated');

      const { data, error } = await supabase
        .from('messages')
        .insert({
          match_id: matchId,
          sender_id: user.id,
          content,
        })
        .select()
        .single();

      if (error) throw error;
      return data as Message;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['messages', variables.matchId] });
    },
  });
}
