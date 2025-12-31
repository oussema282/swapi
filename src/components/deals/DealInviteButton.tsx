import { useState } from 'react';
import { Send, Loader2, Lock, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useEntitlements, FREE_LIMITS } from '@/hooks/useEntitlements';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { UpgradePrompt } from '@/components/subscription/UpgradePrompt';
import { Item, CATEGORY_LABELS } from '@/types/database';

interface ExistingInvite {
  sender_item_id: string;
  status: string;
  attempt: number;
}

interface DealInviteButtonProps {
  targetItemId: string;
  targetItemTitle: string;
  className?: string;
  iconOnly?: boolean;
}

type InviteStatus = 'available' | 'pending' | 'can_resend' | 'blocked' | 'matched';

export function DealInviteButton({ targetItemId, targetItemTitle, className, iconOnly }: DealInviteButtonProps) {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const { canUse, usage, incrementUsage, isPro } = useEntitlements();

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

  // Check existing invites to this item (all statuses)
  const { data: existingInvites = [] } = useQuery<ExistingInvite[]>({
    queryKey: ['my-invites-to-item', targetItemId, user?.id, myItems.map(i => i.id)],
    queryFn: async (): Promise<ExistingInvite[]> => {
      if (!user || myItems.length === 0) return [];
      const myItemIds = myItems.map(i => i.id);
      const { data, error } = await supabase
        .from('deal_invites' as any)
        .select('sender_item_id, status, attempt')
        .eq('receiver_item_id', targetItemId)
        .in('sender_item_id', myItemIds);
      if (error) {
        console.error('Error fetching invites:', error);
        return [];
      }
      return (data as unknown as ExistingInvite[]) || [];
    },
    enabled: !!user && myItems.length > 0,
  });

  const sendInviteMutation = useMutation({
    mutationFn: async (senderItemId: string) => {
      // Check limit for free users
      if (!canUse.dealInvites) {
        setShowModal(false);
        setShowUpgradePrompt(true);
        throw new Error('limit_reached');
      }

      // Increment usage for free users
      if (!isPro) {
        await incrementUsage('deal_invites');
      }

      const { error } = await supabase
        .from('deal_invites' as any)
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
      if (error.message === 'limit_reached') return;
      if (error.message?.includes('pending invite already exists')) {
        toast.error('A pending invite already exists for this pair');
      } else if (error.message?.includes('Maximum resend attempts')) {
        toast.error('You cannot send more invites for this item pair (max 2 attempts)');
      } else if (error.message?.includes('duplicate')) {
        toast.error('You already sent an invite for this item');
      } else {
        toast.error('Failed to send invite');
      }
    },
  });

  // Determine invite status for each item
  const getInviteStatus = (itemId: string): InviteStatus => {
    const invites = existingInvites.filter(i => i.sender_item_id === itemId);
    
    if (invites.length === 0) return 'available';
    
    // Check for pending
    const pendingInvite = invites.find(i => i.status === 'pending');
    if (pendingInvite) return 'pending';
    
    // Check for accepted (matched)
    const acceptedInvite = invites.find(i => i.status === 'accepted');
    if (acceptedInvite) return 'matched';
    
    // Check rejection count
    const rejectedInvites = invites.filter(i => i.status === 'rejected');
    if (rejectedInvites.length >= 2) return 'blocked';
    if (rejectedInvites.length === 1) return 'can_resend';
    
    return 'available';
  };

  const getStatusBadge = (status: InviteStatus, attempt?: number) => {
    switch (status) {
      case 'pending':
        return (
          <span className="flex items-center gap-1 text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
            <Lock className="w-3 h-3" />
            Pending
          </span>
        );
      case 'can_resend':
        return (
          <span className="flex items-center gap-1 text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded">
            <RotateCcw className="w-3 h-3" />
            Resend (1 left)
          </span>
        );
      case 'blocked':
        return (
          <span className="flex items-center gap-1 text-xs text-red-600 bg-red-100 px-2 py-1 rounded">
            <Lock className="w-3 h-3" />
            Blocked
          </span>
        );
      case 'matched':
        return (
          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Matched!</span>
        );
      default:
        return null;
    }
  };

  const canSendInvite = (status: InviteStatus) => {
    return status === 'available' || status === 'can_resend';
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
            <DialogDescription className="text-center">
              Select one of your items to offer for
              <span className="block font-bold text-foreground mt-1">{targetItemTitle}</span>
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
                const canSend = canSendInvite(status);

                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                      canSend 
                        ? 'hover:bg-muted/50 cursor-pointer' 
                        : 'opacity-60 cursor-not-allowed'
                    }`}
                    onClick={() => {
                      if (canSend) {
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
                    {getStatusBadge(status)}
                    {canSend && sendInviteMutation.isPending && (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    )}
                  </div>
                );
              })
            )}
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Items can be resent once after rejection. 2 rejections = blocked.
          </p>
        </DialogContent>
      </Dialog>

      {/* Upgrade Prompt */}
      <UpgradePrompt
        open={showUpgradePrompt}
        onOpenChange={setShowUpgradePrompt}
        feature="deal invites"
        featureType="deal_invites"
        usedCount={usage.dealInvites}
        limit={FREE_LIMITS.dealInvites}
      />
    </>
  );
}
