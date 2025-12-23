import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Item, CATEGORY_LABELS } from '@/types/database';

interface DealInviteButtonProps {
  targetItemId: string;
  targetItemTitle: string;
  className?: string;
  iconOnly?: boolean;
}

export function DealInviteButton({ targetItemId, targetItemTitle, className, iconOnly }: DealInviteButtonProps) {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);

  // Fetch user's own items
  const { data: myItems = [], isLoading: itemsLoading } = useQuery({
    queryKey: ['my-items', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('items')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true);
      if (error) throw error;
      return data as Item[];
    },
    enabled: !!user && showModal,
  });

  // Check existing invites to this item
  const { data: existingInvites = [] } = useQuery({
    queryKey: ['my-invites-to-item', targetItemId, user?.id],
    queryFn: async () => {
      if (!user || !myItems.length) return [];
      const myItemIds = myItems.map(i => i.id);
      const { data, error } = await supabase
        .from('deal_invites')
        .select('sender_item_id, status')
        .eq('receiver_item_id', targetItemId)
        .in('sender_item_id', myItemIds);
      if (error) throw error;
      return data;
    },
    enabled: !!user && myItems.length > 0,
  });

  const sendInviteMutation = useMutation({
    mutationFn: async (senderItemId: string) => {
      const { error } = await supabase
        .from('deal_invites')
        .insert({
          sender_item_id: senderItemId,
          receiver_item_id: targetItemId,
        });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success('Deal invite sent!');
      queryClient.invalidateQueries({ queryKey: ['my-invites-to-item'] });
      queryClient.invalidateQueries({ queryKey: ['deal-invites'] });
      setShowModal(false);
    },
    onError: (error: any) => {
      if (error.message?.includes('duplicate')) {
        toast.error('You already sent an invite for this item');
      } else {
        toast.error('Failed to send invite');
      }
    },
  });

  const getInviteStatus = (itemId: string) => {
    const invite = existingInvites.find(i => i.sender_item_id === itemId);
    return invite?.status;
  };

  return (
    <>
      <Button
        variant="outline"
        size={iconOnly ? 'icon' : 'sm'}
        className={className}
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true);
        }}
      >
        <Send className="w-4 h-4" />
        {!iconOnly && <span className="ml-1.5">Invite Deal</span>}
      </Button>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Send Deal Invite</DialogTitle>
            <DialogDescription>
              Select one of your items to offer for "{targetItemTitle}"
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {itemsLoading ? (
              <div className="flex justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
            ) : myItems.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                You don't have any items to offer. Add an item first!
              </p>
            ) : (
              myItems.map((item) => {
                const status = getInviteStatus(item.id);
                const isPending = status === 'pending';
                const isRejected = status === 'rejected';
                const isAccepted = status === 'accepted';

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer"
                    onClick={() => {
                      if (!isPending && !isAccepted) {
                        sendInviteMutation.mutate(item.id);
                      }
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      {item.photos?.[0] ? (
                        <img src={item.photos[0]} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          📦
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{CATEGORY_LABELS[item.category]}</p>
                    </div>
                    {isPending && (
                      <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Pending</span>
                    )}
                    {isRejected && (
                      <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">Rejected</span>
                    )}
                    {isAccepted && (
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Matched!</span>
                    )}
                    {!status && sendInviteMutation.isPending && (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
