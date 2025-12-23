import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Match, Item } from '@/types/database';
import { useAuth } from './useAuth';
import { MessageStatusType } from '@/components/chat/MessageStatus';

export interface MessageWithStatus {
  id: string;
  match_id: string;
  sender_id: string;
  content: string;
  created_at: string;
  status: MessageStatusType;
}

interface OtherUserProfile {
  display_name: string;
  avatar_url: string | null;
  last_seen: string | null;
}

interface MatchWithItems extends Match {
  item_a: Item & { owner_display_name: string };
  item_b: Item & { owner_display_name: string };
  my_item: Item;
  their_item: Item & { owner_display_name: string };
  other_user_id: string;
  other_user_profile: OtherUserProfile;
  last_message?: MessageWithStatus;
}

export type { MatchWithItems, OtherUserProfile };

export function useMatches() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['matches', user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data: matches, error } = await supabase
        .from('matches')
        .select(`
          *,
          item_a:items!matches_item_a_id_fkey (*),
          item_b:items!matches_item_b_id_fkey (*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const userMatches = (matches || []).filter(match => 
        (match.item_a as any)?.user_id === user.id || 
        (match.item_b as any)?.user_id === user.id
      );

      if (userMatches.length === 0) return [];

      const userIds = new Set<string>();
      userMatches.forEach(match => {
        if ((match.item_a as any)?.user_id) userIds.add((match.item_a as any).user_id);
        if ((match.item_b as any)?.user_id) userIds.add((match.item_b as any).user_id);
      });

      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, display_name, avatar_url, last_seen')
        .in('user_id', Array.from(userIds));

      const profileMap = new Map(
        (profiles || []).map(p => [p.user_id, p])
      );

      // Fetch last messages for each match
      const matchIds = userMatches.map(m => m.id);
      const { data: lastMessages } = await supabase
        .from('messages')
        .select('*')
        .in('match_id', matchIds)
        .order('created_at', { ascending: false });

      // Group messages by match_id and get only the last one
      const lastMessageMap = new Map<string, MessageWithStatus>();
      (lastMessages || []).forEach(msg => {
        if (!lastMessageMap.has(msg.match_id)) {
          lastMessageMap.set(msg.match_id, msg as MessageWithStatus);
        }
      });

      const transformedMatches = userMatches.map(match => {
        const itemA = match.item_a as any;
        const itemB = match.item_b as any;
        const isMyItemA = itemA?.user_id === user.id;
        const otherUserId = isMyItemA ? itemB?.user_id : itemA?.user_id;
        const otherUserProfile = profileMap.get(otherUserId);
        const lastMessage = lastMessageMap.get(match.id);
        
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
          other_user_id: otherUserId,
          other_user_profile: {
            display_name: otherUserProfile?.display_name || 'Unknown',
            avatar_url: otherUserProfile?.avatar_url || null,
            last_seen: otherUserProfile?.last_seen || null,
          },
          last_message: lastMessage,
        } as MatchWithItems;
      });

      return transformedMatches;
    },
    enabled: !!user,
  });
}

export function useMessages(matchId: string) {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const query = useQuery({
    queryKey: ['messages', matchId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('match_id', matchId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      return data as MessageWithStatus[];
    },
    enabled: !!matchId,
  });

  // Subscribe to realtime updates (INSERT and UPDATE)
  useEffect(() => {
    if (!matchId) return;

    const channel = supabase
      .channel(`messages-${matchId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
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

  // Mark messages as read when viewing
  const markAsRead = useCallback(async () => {
    if (!matchId || !user) return;

    const messages = query.data;
    if (!messages) return;

    const unreadMessages = messages.filter(
      msg => msg.sender_id !== user.id && msg.status !== 'read'
    );

    if (unreadMessages.length === 0) return;

    await supabase
      .from('messages')
      .update({ status: 'read' })
      .in('id', unreadMessages.map(m => m.id));
  }, [matchId, user, query.data]);

  // Mark as read when messages load or update
  useEffect(() => {
    if (query.data && query.data.length > 0) {
      markAsRead();
    }
  }, [query.data, markAsRead]);

  return { ...query, markAsRead };
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
          status: 'sent',
        })
        .select()
        .single();

      if (error) throw error;
      return data as MessageWithStatus;
    },
    onMutate: async ({ matchId, content }) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: ['messages', matchId] });
      
      const previousMessages = queryClient.getQueryData<MessageWithStatus[]>(['messages', matchId]);
      
      const optimisticMessage: MessageWithStatus = {
        id: `temp-${Date.now()}`,
        match_id: matchId,
        sender_id: user!.id,
        content,
        created_at: new Date().toISOString(),
        status: 'sending',
      };

      queryClient.setQueryData<MessageWithStatus[]>(['messages', matchId], (old) => 
        [...(old || []), optimisticMessage]
      );

      return { previousMessages };
    },
    onError: (_, variables, context) => {
      if (context?.previousMessages) {
        queryClient.setQueryData(['messages', variables.matchId], context.previousMessages);
      }
    },
    onSettled: (_, __, variables) => {
      queryClient.invalidateQueries({ queryKey: ['messages', variables.matchId] });
    },
  });
}

export function useUpdateMessageStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ 
      messageIds, 
      status 
    }: { 
      messageIds: string[]; 
      status: 'delivered' | 'read';
      matchId: string;
    }) => {
      const { error } = await supabase
        .from('messages')
        .update({ status })
        .in('id', messageIds);

      if (error) throw error;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['messages', variables.matchId] });
    },
  });
}
