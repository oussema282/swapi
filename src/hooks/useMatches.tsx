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
          item_a:items!matches_item_a_id_fkey (
            *,
            profiles!items_user_id_fkey (display_name)
          ),
          item_b:items!matches_item_b_id_fkey (
            *,
            profiles!items_user_id_fkey (display_name)
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Filter and transform matches to identify my item vs their item
      const userMatches = (matches || [])
        .filter(match => 
          (match.item_a as any)?.user_id === user.id || 
          (match.item_b as any)?.user_id === user.id
        )
        .map(match => {
          const itemA = match.item_a as any;
          const itemB = match.item_b as any;
          const isMyItemA = itemA?.user_id === user.id;
          
          return {
            ...match,
            item_a: { ...itemA, owner_display_name: itemA?.profiles?.display_name },
            item_b: { ...itemB, owner_display_name: itemB?.profiles?.display_name },
            my_item: isMyItemA ? itemA : itemB,
            their_item: isMyItemA 
              ? { ...itemB, owner_display_name: itemB?.profiles?.display_name }
              : { ...itemA, owner_display_name: itemA?.profiles?.display_name },
          } as MatchWithItems;
        });

      return userMatches;
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
