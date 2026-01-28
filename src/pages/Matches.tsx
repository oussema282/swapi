import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMatches, MatchWithItems } from '@/hooks/useMatches';
import { useMissedMatches, useRecoverMissedMatch, MissedMatch } from '@/hooks/useMissedMatches';
import { useEntitlements } from '@/hooks/useEntitlements';
import { supabase } from '@/integrations/supabase/client';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VerifiedName } from '@/components/ui/verified-name';
import { Loader2, Check, X, ArrowLeft, ArrowRight, ArrowLeftRight, CheckCircle2, Send, HeartOff } from 'lucide-react';
import { MatchCard } from '@/components/matches/MatchCard';
import { CompletedMatchCard } from '@/components/matches/CompletedMatchCard';
import { MissedMatchCard } from '@/components/matches/MissedMatchCard';
import { MissedMatchModal } from '@/components/matches/MissedMatchModal';
import { ItemDetailsSheet } from '@/components/discover/ItemDetailsSheet';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Item } from '@/types/database';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useDeviceLocation } from '@/hooks/useLocation';

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

// Type for ItemDetailsSheet
interface ItemWithOwner extends Item {
  owner_display_name: string;
  owner_avatar_url: string | null;
  owner_is_pro?: boolean;
  user_id: string;
}

export default function Matches() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const { data: matches, isLoading, isError: matchesError, refetch } = useMatches();
  const { data: missedMatches = [], isLoading: missedLoading } = useMissedMatches();
  const recoverMutation = useRecoverMissedMatch();
  const { isPro } = useEntitlements();
  const { t } = useTranslation();
  const deviceLocation = useDeviceLocation();
  const userLocation = { latitude: deviceLocation.latitude, longitude: deviceLocation.longitude };
  
  const SECTIONS = [
    { id: 'active', title: t('matches.active'), description: t('matches.noActiveMatchesDescription'), icon: ArrowLeftRight },
    { id: 'completed', title: t('matches.completed'), description: t('matches.noCompletedMatchesDescription'), icon: CheckCircle2 },
    { id: 'invites', title: t('matches.dealInvites'), description: t('matches.noDealInvitesDescription'), icon: Send },
    { id: 'missed', title: t('matches.missed'), description: t('matches.noMissedMatchesDescription'), icon: HeartOff },
  ];
  
  // Step navigation
  const initialTab = searchParams.get('tab');
  const initialStep = initialTab === 'missed' ? 3 : initialTab === 'invites' ? 2 : initialTab === 'completed' ? 1 : 0;
  const [currentStep, setCurrentStep] = useState(initialStep);
  
  // Missed match modal state
  const [selectedMissedMatch, setSelectedMissedMatch] = useState<MissedMatch | null>(null);
  // Track which missed match is being recovered (for card loading state)
  const [recoveringId, setRecoveringId] = useState<string | null>(null);
  
  // Item details sheet state
  const [selectedViewItem, setSelectedViewItem] = useState<ItemWithOwner | null>(null);
  
  // Fetch current user's profile for "my item" owner info
  const { data: currentUserProfile } = useQuery({
    queryKey: ['my-profile', user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data } = await supabase
        .from('profiles')
        .select('display_name, avatar_url')
        .eq('user_id', user.id)
        .single();
      return data;
    },
    enabled: !!user,
  });
  
  // Handler to view item details (my item)
  const handleViewMyItemDetails = (match: MatchWithItems) => {
    if (!match.my_item || !user) return;
    setSelectedViewItem({
      ...match.my_item,
      owner_display_name: currentUserProfile?.display_name || 'You',
      owner_avatar_url: currentUserProfile?.avatar_url || null,
      owner_is_pro: isPro,
      user_id: user.id,
    });
  };
  
  // Handler to view item details (their item)
  const handleViewTheirItemDetails = (match: MatchWithItems) => {
    if (!match.their_item) return;
    setSelectedViewItem({
      ...match.their_item,
      owner_display_name: match.other_user_profile?.display_name || 'User',
      owner_avatar_url: match.other_user_profile?.avatar_url || null,
      owner_is_pro: match.other_user_profile?.is_pro,
      user_id: match.other_user_id,
    });
  };
  
  // Handler for missed match items
  const handleViewMissedItemDetails = (missedMatch: MissedMatch, isMyItem: boolean) => {
    if (isMyItem && missedMatch.my_item) {
      setSelectedViewItem({
        ...missedMatch.my_item,
        owner_display_name: currentUserProfile?.display_name || 'You',
        owner_avatar_url: currentUserProfile?.avatar_url || null,
        owner_is_pro: isPro,
        user_id: user?.id || '',
      });
    } else if (!isMyItem && missedMatch.their_item) {
      setSelectedViewItem({
        ...missedMatch.their_item,
        owner_display_name: missedMatch.their_item.owner_display_name || 'User',
        owner_avatar_url: missedMatch.their_item.owner_avatar_url || null,
        owner_is_pro: missedMatch.their_item.owner_is_pro,
        user_id: missedMatch.their_item.user_id,
      });
    }
  };
  
  // Handler for deal invite items
  const handleViewDealInviteItem = (invite: DealInviteWithItems, isSenderItem: boolean) => {
    if (isSenderItem && invite.sender_item) {
      setSelectedViewItem({
        ...invite.sender_item,
        owner_display_name: invite.sender_item.owner_display_name || 'User',
        owner_avatar_url: null,
        user_id: invite.sender_item.user_id,
      });
    } else if (!isSenderItem && invite.receiver_item && user) {
      setSelectedViewItem({
        ...invite.receiver_item,
        owner_display_name: currentUserProfile?.display_name || 'You',
        owner_avatar_url: currentUserProfile?.avatar_url || null,
        owner_is_pro: isPro,
        user_id: user.id,
      });
    }
  };

  // Handle accept missed match
  const handleAcceptMissedMatch = (missedMatch: MissedMatch) => {
    setRecoveringId(missedMatch.id);
    recoverMutation.mutate(
      { myItemId: missedMatch.my_item_id, theirItemId: missedMatch.their_item_id },
      {
        onSuccess: (result) => {
          setSelectedMissedMatch(null);
          setRecoveringId(null);
          toast.success('Match created! Opening chat...');
          if (result.matchId) {
            navigate(`/chat/${result.matchId}`);
          }
        },
        onError: () => {
          setRecoveringId(null);
          toast.error('Failed to recover match. Please try again.');
        },
      }
    );
  };

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
    }
  }, [user, authLoading, navigate]);

  // Fetch pending invites
  const { data: pendingInvites = [], isLoading: invitesLoading } = useQuery({
    queryKey: ['pending-deal-invites', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data: myItems } = await supabase
        .from('items')
        .select('id')
        .eq('user_id', user.id);
      
      if (!myItems?.length) return [];
      
      const myItemIds = myItems.map(i => i.id);
      
      const { data: invites, error } = await supabase
        .from('deal_invites' as any)
        .select('*')
        .in('receiver_item_id', myItemIds)
        .eq('status', 'pending')
        .order('created_at', { ascending: false });
      
      if (error) return [];
      if (!invites?.length) return [];
      
      const typedInvites = invites as unknown as DealInviteRaw[];

      const allItemIds = [...new Set([
        ...typedInvites.map(i => i.sender_item_id),
        ...typedInvites.map(i => i.receiver_item_id),
      ])];

      const { data: items } = await supabase
        .from('items')
        .select('*')
        .in('id', allItemIds);

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
    mutationFn: async ({ inviteId, accept, senderItemId, receiverItemId }: { 
      inviteId: string; 
      accept: boolean;
      senderItemId: string;
      receiverItemId: string;
    }) => {
      const { error } = await supabase
        .from('deal_invites' as any)
        .update({ 
          status: accept ? 'accepted' : 'rejected',
          responded_at: new Date().toISOString(),
        })
        .eq('id', inviteId);
      if (error) throw error;
      
      if (accept) {
        const itemA = senderItemId < receiverItemId ? senderItemId : receiverItemId;
        const itemB = senderItemId < receiverItemId ? receiverItemId : senderItemId;
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const { data: match } = await supabase
          .from('matches')
          .select('id')
          .eq('item_a_id', itemA)
          .eq('item_b_id', itemB)
          .single();
        
        return { matchId: match?.id };
      }
      
      return { matchId: null };
    },
    onSuccess: (result, { accept }) => {
      if (accept) {
        toast.success('Deal accepted! Opening chat...');
        queryClient.invalidateQueries({ queryKey: ['matches'] });
        if (result?.matchId) {
          navigate(`/chat/${result.matchId}`);
        }
      } else {
        toast.info('Deal invite declined.');
      }
      queryClient.invalidateQueries({ queryKey: ['pending-deal-invites'] });
    },
    onError: () => {
      toast.error('Failed to respond to invite');
    },
  });

  const handleBack = () => {
    navigate('/discover');
  };

  const handleNext = () => {
    if (currentStep < SECTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (authLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-[80vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  if (matchesError) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
          <p className="text-destructive">Failed to load matches</p>
          <Button onClick={() => refetch()} variant="outline">Try Again</Button>
        </div>
      </AppLayout>
    );
  }

  const activeMatches = matches?.filter(m => !m.is_completed) || [];
  const completedMatches = matches?.filter(m => m.is_completed) || [];

  const hasUnreadMessages = (match: any) => {
    if (!match.last_message || !user) return false;
    return match.last_message.sender_id !== user.id && match.last_message.status !== 'read';
  };

  const currentSection = SECTIONS[currentStep];

  return (
    <AppLayout showNav={false}>
      {/* Main container: h-[100dvh] constrains to viewport, flex-col for vertical layout */}
      <div className="h-[100dvh] flex flex-col bg-background overflow-hidden">
        {/* Inner container with max width - flex-1 + min-h-0 prevents overflow */}
        <div className="max-w-lg mx-auto w-full flex-1 flex flex-col min-h-0">
          
          {/* Header - FIXED HEIGHT: 72px */}
          <header className="h-[72px] flex items-center px-4 border-b shrink-0">
            <Button variant="ghost" size="icon" onClick={handleBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="ml-2 flex-1 min-w-0">
              <h1 className="text-lg font-display font-bold truncate">{currentSection.title}</h1>
              <p className="text-sm text-muted-foreground truncate">{currentSection.description}</p>
            </div>
            <span className="text-sm font-medium text-muted-foreground shrink-0">
              {currentStep + 1}/{SECTIONS.length}
            </span>
          </header>

          {/* Progress Bar - FIXED HEIGHT: 40px (includes padding) */}
          <div className="h-[40px] flex items-center gap-1 px-4 shrink-0">
            {SECTIONS.map((section, idx) => {
              // Calculate notification count for each section
              const notificationCount = 
                idx === 0 ? activeMatches.filter(m => hasUnreadMessages(m)).length :
                idx === 2 ? pendingInvites.length :
                idx === 3 ? missedMatches.length : 0;
              
              return (
                <div key={section.id} className="flex items-center flex-1 gap-1">
                  {/* Progress bar segment */}
                  <button
                    onClick={() => setCurrentStep(idx)}
                    className="h-1.5 flex-1"
                  >
                    <div className={cn(
                      'h-full w-full rounded-full transition-all duration-300',
                      idx <= currentStep ? 'bg-primary' : 'bg-muted'
                    )} />
                  </button>
                  {/* Red notification card with count */}
                  {notificationCount > 0 && idx !== currentStep && (
                    <span className="min-w-[18px] h-[16px] px-1.5 flex items-center justify-center text-[10px] font-bold text-destructive-foreground bg-destructive rounded-sm animate-pulse">
                      {notificationCount}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Center Container - FIXED: flex-1 fills remaining space, overflow hidden */}
          <main className="flex-1 flex justify-center overflow-hidden min-h-0">
            <div className="w-full h-full px-4 py-2 flex flex-col">
              {/* Card wrapper - takes full height */}
              <Card className="flex-1 flex flex-col overflow-hidden min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    /* Content area: flex-1 fills card, overflow-y-auto for scrolling */
                    className="flex-1 overflow-y-auto p-4 min-h-0"
                  >
                {/* Active Matches */}
                {currentStep === 0 && (
                  <div className="h-full flex flex-col">
                    {isLoading ? (
                      /* Loading state - centered in full height */
                      <div className="flex-1 flex items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    ) : activeMatches.length > 0 ? (
                      /* List state - scrollable content */
                      <div className="space-y-3">
                        {activeMatches.map((match, index) => (
                          <MatchCard
                            key={match.id}
                            match={match}
                            index={index}
                            onClick={() => navigate(`/chat/${match.id}`)}
                            hasUnread={hasUnreadMessages(match)}
                            onMyItemTap={() => handleViewMyItemDetails(match)}
                            onTheirItemTap={() => handleViewTheirItemDetails(match)}
                          />
                        ))}
                      </div>
                    ) : (
                      /* Empty state - centered in full height */
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                          <ArrowLeftRight className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">No active matches yet</p>
                        <p className="text-sm text-muted-foreground mt-1">Start swiping to find swaps!</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Completed Matches */}
                {currentStep === 1 && (
                  <div className="h-full flex flex-col">
                    {isLoading ? (
                      /* Loading state - centered in full height */
                      <div className="flex-1 flex items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    ) : completedMatches.length > 0 ? (
                      /* List state - scrollable content */
                      <div className="space-y-3">
                        {completedMatches.map((match, index) => (
                          <CompletedMatchCard
                            key={match.id}
                            match={match}
                            index={index}
                            onClick={() => navigate(`/chat/${match.id}`)}
                            onMyItemTap={() => handleViewMyItemDetails(match)}
                            onTheirItemTap={() => handleViewTheirItemDetails(match)}
                          />
                        ))}
                      </div>
                    ) : (
                      /* Empty state - centered in full height */
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                          <CheckCircle2 className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">No completed swaps yet</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Deal Invites */}
                {currentStep === 2 && (
                  <div className="h-full flex flex-col">
                    {invitesLoading ? (
                      /* Loading state - centered in full height */
                      <div className="flex-1 flex items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    ) : pendingInvites.length > 0 ? (
                      /* List state - scrollable content */
                      <div className="space-y-3">
                        {pendingInvites.map((invite) => (
                          <Card key={invite.id} className="p-4 space-y-3">
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleViewDealInviteItem(invite, true);
                                }}
                                className="w-10 h-10 rounded-lg overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                              >
                                {invite.sender_item?.photos?.[0] ? (
                                  <img 
                                    src={invite.sender_item.photos[0]} 
                                    alt="" 
                                    className="w-full h-full object-cover" 
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">📦</div>
                                )}
                              </button>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm truncate">{invite.sender_item?.title}</p>
                                <p className="text-xs text-muted-foreground">
                                  from <VerifiedName name={invite.sender_item?.owner_display_name || 'Unknown'} className="inline" badgeClassName="w-3 h-3" />
                                </p>
                              </div>
                            </div>

                            <div className="text-xs text-muted-foreground text-center">wants to swap for</div>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleViewDealInviteItem(invite, false);
                                }}
                                className="w-10 h-10 rounded-lg overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                              >
                                {invite.receiver_item?.photos?.[0] ? (
                                  <img 
                                    src={invite.receiver_item.photos[0]} 
                                    alt="" 
                                    className="w-full h-full object-cover" 
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">📦</div>
                                )}
                              </button>
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
                                onClick={() => respondMutation.mutate({ 
                                  inviteId: invite.id, 
                                  accept: true,
                                  senderItemId: invite.sender_item_id,
                                  receiverItemId: invite.receiver_item_id,
                                })}
                              >
                                <Check className="w-4 h-4 mr-1" />
                                Accept
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1"
                                disabled={respondMutation.isPending}
                                onClick={() => respondMutation.mutate({ 
                                  inviteId: invite.id, 
                                  accept: false,
                                  senderItemId: invite.sender_item_id,
                                  receiverItemId: invite.receiver_item_id,
                                })}
                              >
                                <X className="w-4 h-4 mr-1" />
                                Decline
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      /* Empty state - centered in full height */
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                          <Send className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">No pending deal invites</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Missed Matches */}
                {currentStep === 3 && (
                  <div className="h-full flex flex-col">
                    {missedLoading ? (
                      /* Loading state - centered in full height */
                      <div className="flex-1 flex items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    ) : missedMatches.length > 0 ? (
                      /* List state - scrollable content */
                      <div className="space-y-3">
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
                            isPro={isPro}
                            onClick={() => setSelectedMissedMatch(missed)}
                            onReconsider={isPro ? () => handleAcceptMissedMatch(missed) : undefined}
                            isRecovering={recoveringId === missed.id}
                            onMyItemTap={isPro ? () => handleViewMissedItemDetails(missed, true) : undefined}
                            onTheirItemTap={isPro ? () => handleViewMissedItemDetails(missed, false) : undefined}
                          />
                        ))}
                      </div>
                    ) : (
                      /* Empty state - centered in full height */
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                          <HeartOff className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">No missed matches</p>
                        <p className="text-sm text-muted-foreground mt-1">Keep swiping to find your matches!</p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </Card>
            </div>
          </main>

          {/* Footer - FIXED HEIGHT: 88px */}
          <footer className="h-[88px] px-4 flex items-center gap-4 border-t bg-background shrink-0">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentStep === SECTIONS.length - 1}
              className="flex-1"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </footer>
        </div>
      </div>
      
      {/* Missed Match Modal */}
      <MissedMatchModal
        open={!!selectedMissedMatch}
        onClose={() => setSelectedMissedMatch(null)}
        missedMatch={selectedMissedMatch}
        isPro={isPro}
        onAccept={selectedMissedMatch ? () => handleAcceptMissedMatch(selectedMissedMatch) : undefined}
        isAccepting={recoverMutation.isPending}
      />
      
      {/* Item Details Sheet */}
      <ItemDetailsSheet
        open={!!selectedViewItem}
        onOpenChange={(open) => !open && setSelectedViewItem(null)}
        item={selectedViewItem}
        userLocation={userLocation}
      />
    </AppLayout>
  );
}