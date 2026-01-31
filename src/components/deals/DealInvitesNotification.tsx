import { useState } from 'react';
import { Bell, Check, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Item } from '@/types/database';

interface DealInviteRaw {
  id: string;
  sender_item_id: string;
  receiver_item_id: string;
  status: string;
  created_at: string;
  responded_at: string | null;
}

interface DealInviteWithItems {
  id: string;
  sender_item_id: string;
  receiver_item_id: string;
  status: string;
  created_at: string;
  sender_item?: Item & { owner_display_name: string };
  receiver_item?: Item;
}

export function DealInvitesNotification() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  // Fetch pending invites received by user
  const { data: pendingInvites = [], isLoading } = useQuery({
    queryKey: ['pending-deal-invites', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      // Get user's items
      const { data: myItems } = await supabase
        .from('items')
        .select('id')
        .eq('user_id', user.id);
      
      if (!myItems?.length) return [];
      
      const myItemIds = myItems.map(i => i.id);
      
      // Get pending invites for user's items
      const { data: invites, error } = await supabase
        .from('deal_invites' as any)
        .select('*')
        .in('receiver_item_id', myItemIds)
        .eq('status', 'pending')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching deal invites:', error);
        return [];
      }
      if (!invites?.length) return [];
      
      const typedInvites = invites as unknown as DealInviteRaw[];

      // Get all item IDs from invites
      const allItemIds = [...new Set([
        ...typedInvites.map(i => i.sender_item_id),
        ...typedInvites.map(i => i.receiver_item_id),
      ])];

      // Fetch items
      const { data: items } = await supabase
        .from('items')
        .select('*')
        .in('id', allItemIds);

      // Get owner profiles
      const senderUserIds = [...new Set(items?.filter(i => typedInvites.some(inv => inv.sender_item_id === i.id)).map(i => i.user_id) || [])];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, display_name')
        .in('user_id', senderUserIds);

      const itemsMap = new Map(items?.map(i => [i.id, i]) || []);
      const profilesMap = new Map(profiles?.map(p => [p.user_id, p]) || []);

      return typedInvites.map(invite => {
        const senderItem = itemsMap.get(invite.sender_item_id);
        const receiverItem = itemsMap.get(invite.receiver_item_id);
        const ownerProfile = senderItem ? profilesMap.get(senderItem.user_id) : null;

        return {
          ...invite,
          sender_item: senderItem ? { ...senderItem, owner_display_name: ownerProfile?.display_name || 'User' } : undefined,
          receiver_item: receiverItem,
        };
      }) as DealInviteWithItems[];
    },
    enabled: !!user,
    refetchInterval: 30000,
  });

  const respondMutation = useMutation({
    mutationFn: async ({ inviteId, accept }: { inviteId: string; accept: boolean }) => {
      const { error } = await supabase
        .from('deal_invites' as any)
        .update({ 
          status: accept ? 'accepted' : 'rejected',
          responded_at: new Date().toISOString(),
        })
        .eq('id', inviteId);
      if (error) throw error;
    },
    onSuccess: (_, { accept }) => {
      if (accept) {
        toast.success('Deal accepted! You can now message each other.');
        queryClient.invalidateQueries({ queryKey: ['matches'] });
      } else {
        toast.info('Deal invite declined.');
      }
      queryClient.invalidateQueries({ queryKey: ['pending-deal-invites'] });
      queryClient.invalidateQueries({ queryKey: ['deal-invites'] });
    },
    onError: () => {
      toast.error('Failed to respond to invite');
    },
  });

  const pendingCount = pendingInvites.length;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          {pendingCount > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs">
              {pendingCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Deal Invites</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
          ) : pendingInvites.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              No pending deal invites
            </p>
          ) : (
            pendingInvites.map((invite) => (
              <div key={invite.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted">
                    {invite.sender_item?.photos?.[0] ? (
                      <img 
                        src={invite.sender_item.photos[0]} 
                        alt="" 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">📦</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{invite.sender_item?.title}</p>
                    <p className="text-xs text-muted-foreground">
                      from {invite.sender_item?.owner_display_name}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground text-center">wants to swap for</div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted">
                    {invite.receiver_item?.photos?.[0] ? (
                      <img 
                        src={invite.receiver_item.photos[0]} 
                        alt="" 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">📦</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{invite.receiver_item?.title}</p>
                    <p className="text-xs text-muted-foreground">Your item</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    disabled={respondMutation.isPending}
                    onClick={() => respondMutation.mutate({ inviteId: invite.id, accept: true })}
                  >
                    <Check className="w-4 h-4 mr-1" />
                    Accept
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    disabled={respondMutation.isPending}
                    onClick={() => respondMutation.mutate({ inviteId: invite.id, accept: false })}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Decline
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
