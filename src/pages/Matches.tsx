import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMatches } from '@/hooks/useMatches';
import { useMissedMatches } from '@/hooks/useMissedMatches';
import { supabase } from '@/integrations/supabase/client';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { VerifiedName } from '@/components/ui/verified-name';
import { Loader2, Check, X, HeartOff } from 'lucide-react';
import { CompleteSwapModal } from '@/components/matches/CompleteSwapModal';
import { MatchCard } from '@/components/matches/MatchCard';
import { CompletedMatchCard } from '@/components/matches/CompletedMatchCard';
import { MissedMatchCard } from '@/components/matches/MissedMatchCard';
import { MatchesHeader } from '@/components/matches/MatchesHeader';
import { EmptyMatchesState } from '@/components/matches/EmptyMatchesState';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Item } from '@/types/database';

type TabType = 'active' | 'completed' | 'invites' | 'missed';

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

export default function Matches() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: matches, isLoading, refetch } = useMatches();
  const { data: missedMatches = [], isLoading: missedLoading } = useMissedMatches();
  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('active');

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  // Fetch pending invites received by user
  const { data: pendingInvites = [], isLoading: invitesLoading } = useQuery({
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
          sender_item: senderItem ? { ...senderItem, owner_display_name: ownerProfile?.display_name || 'Unknown' } : undefined,
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

  const handleCompleteSwap = async (rating: number, feedback: string) => {
    if (!selectedMatch) return;

    const { error } = await supabase
      .from('matches')
      .update({
        is_completed: true,
        completed_at: new Date().toISOString(),
      })
      .eq('id', selectedMatch.id);

    if (error) {
      toast.error('Failed to complete swap');
      throw error;
    }

    await refetch();
    toast.success('Swap completed successfully!');
  };

  if (authLoading || isLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-[80vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  const activeMatches = matches?.filter(m => !m.is_completed) || [];
  const completedMatches = matches?.filter(m => m.is_completed) || [];

  // Check for unread messages (messages from other user that aren't read)
  const hasUnreadMessages = (match: any) => {
    if (!match.last_message || !user) return false;
    return match.last_message.sender_id !== user.id && match.last_message.status !== 'read';
  };

  return (
    <AppLayout>
      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full px-4 pt-4 overflow-hidden">
        <MatchesHeader
          activeCount={activeMatches.length}
          completedCount={completedMatches.length}
          invitesCount={pendingInvites.length}
          missedCount={missedMatches.length}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="flex-1 overflow-y-auto space-y-4 pb-4">
          <AnimatePresence mode="wait">
            {/* Active Matches Tab */}
            {activeTab === 'active' && (
              <motion.div
                key="active"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-2"
              >
                {activeMatches.length > 0 ? (
                  activeMatches.map((match, index) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                      index={index}
                      onClick={() => navigate(`/chat/${match.id}`)}
                      hasUnread={hasUnreadMessages(match)}
                    />
                  ))
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    No active matches yet
                  </div>
                )}
              </motion.div>
            )}

            {/* Completed Matches Tab */}
            {activeTab === 'completed' && (
              <motion.div
                key="completed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-2"
              >
                {completedMatches.length > 0 ? (
                  completedMatches.map((match, index) => (
                    <CompletedMatchCard
                      key={match.id}
                      match={match}
                      index={index}
                      onClick={() => navigate(`/chat/${match.id}`)}
                    />
                  ))
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    No completed swaps yet
                  </div>
                )}
              </motion.div>
            )}

            {/* Deal Invites Tab */}
            {activeTab === 'invites' && (
              <motion.div
                key="invites"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                {invitesLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                ) : pendingInvites.length > 0 ? (
                  pendingInvites.map((invite) => (
                    <div key={invite.id} className="border rounded-lg p-4 space-y-3 bg-card">
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
                            from <VerifiedName name={invite.sender_item?.owner_display_name || 'Unknown'} className="inline" badgeClassName="w-3 h-3" />
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
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    No pending deal invites
                  </div>
                )}
              </motion.div>
            )}

            {/* Missed Matches Tab */}
            {activeTab === 'missed' && (
              <motion.div
                key="missed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                {missedLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                ) : missedMatches.length > 0 ? (
                  <>
                    <div className="text-center py-2">
                      <p className="text-sm text-muted-foreground">
                        <HeartOff className="w-4 h-4 inline mr-1" />
                        You missed a match! They wanted to swap with you.
                      </p>
                    </div>
                    {missedMatches.map((missed, index) => (
                      <MissedMatchCard
                        key={missed.id}
                        missedMatch={missed}
                        index={index}
                      />
                    ))}
                  </>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    No missed matches
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Complete Swap Modal */}
      <CompleteSwapModal
        open={showCompleteModal}
        onClose={() => {
          setShowCompleteModal(false);
          setSelectedMatch(null);
        }}
        onComplete={handleCompleteSwap}
        myItemTitle={selectedMatch?.my_item?.title || ''}
        theirItemTitle={selectedMatch?.their_item?.title || ''}
        myItemPhoto={selectedMatch?.my_item?.photos?.[0]}
        theirItemPhoto={selectedMatch?.their_item?.photos?.[0]}
      />
    </AppLayout>
  );
}
