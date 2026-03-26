import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

export function useGiftRequests() {
  const { user } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  // Get pending gift requests for current user's gift items
  const { data: incomingRequests = [], isLoading } = useQuery({
    queryKey: ['gift-requests-incoming', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      // Get all gift items owned by user
      const { data: myGiftItems } = await supabase
        .from('items')
        .select('id')
        .eq('user_id', user.id)
        .eq('is_gift', true);

      if (!myGiftItems?.length) return [];

      const giftItemIds = myGiftItems.map(i => i.id);

      const { data, error } = await supabase
        .from('gift_requests')
        .select('*')
        .in('gift_item_id', giftItemIds)
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Enrich with requester profile and item info
      if (!data?.length) return [];

      const requesterIds = [...new Set(data.map(r => r.requester_id))];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, display_name, avatar_url')
        .in('user_id', requesterIds);

      const { data: items } = await supabase
        .from('items')
        .select('id, title, photos')
        .in('id', giftItemIds);

      const profileMap = new Map(profiles?.map(p => [p.user_id, p]) || []);
      const itemMap = new Map(items?.map(i => [i.id, i]) || []);

      return data.map(req => ({
        ...req,
        requester_profile: profileMap.get(req.requester_id),
        gift_item: itemMap.get(req.gift_item_id),
      }));
    },
    enabled: !!user,
  });

  // Send a gift request
  const sendRequest = useMutation({
    mutationFn: async ({ giftItemId, message }: { giftItemId: string; message?: string }) => {
      if (!user) throw new Error('Not authenticated');

      const { error } = await supabase
        .from('gift_requests')
        .insert({
          gift_item_id: giftItemId,
          requester_id: user.id,
          message: message || null,
        });

      if (error) throw error;
    },
    onSuccess: () => {
      toast({ title: t('gift.requestSent') });
      queryClient.invalidateQueries({ queryKey: ['gift-requests'] });
    },
    onError: () => {
      toast({ variant: 'destructive', title: t('gift.requestFailed') });
    },
  });

  // Accept a gift request (creates a match for chat)
  const acceptRequest = useMutation({
    mutationFn: async (requestId: string) => {
      if (!user) throw new Error('Not authenticated');

      // Get the request
      const { data: request, error: reqError } = await supabase
        .from('gift_requests')
        .select('*')
        .eq('id', requestId)
        .single();

      if (reqError || !request) throw new Error('Request not found');

      // Update request status
      const { error: updateError } = await supabase
        .from('gift_requests')
        .update({ status: 'accepted', responded_at: new Date().toISOString() })
        .eq('id', requestId);

      if (updateError) throw updateError;

      // Create a gift match for chat
      const { error: matchError } = await supabase
        .from('matches')
        .insert({
          item_a_id: request.gift_item_id,
          item_b_id: request.gift_item_id,
          is_gift_match: true,
          gift_requester_id: request.requester_id,
        });

      if (matchError) throw matchError;
    },
    onSuccess: () => {
      toast({ title: t('gift.requestAccepted') });
      queryClient.invalidateQueries({ queryKey: ['gift-requests'] });
      queryClient.invalidateQueries({ queryKey: ['matches'] });
    },
    onError: () => {
      toast({ variant: 'destructive', title: t('gift.acceptFailed') });
    },
  });

  // Reject a gift request
  const rejectRequest = useMutation({
    mutationFn: async (requestId: string) => {
      const { error } = await supabase
        .from('gift_requests')
        .update({ status: 'rejected', responded_at: new Date().toISOString() })
        .eq('id', requestId);

      if (error) throw error;
    },
    onSuccess: () => {
      toast({ title: t('gift.requestRejected') });
      queryClient.invalidateQueries({ queryKey: ['gift-requests'] });
    },
  });

  return {
    incomingRequests,
    isLoading,
    pendingCount: incomingRequests.length,
    sendRequest,
    acceptRequest,
    rejectRequest,
  };
}
