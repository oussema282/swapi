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
import { Loader2, Check, X, ArrowLeftRight, CheckCircle2, Send, HeartOff, Bell, ChevronRight } from 'lucide-react';
import { MatchCard } from '@/components/matches/MatchCard';
import { CompletedMatchCard } from '@/components/matches/CompletedMatchCard';
import { MissedMatchCard } from '@/components/matches/MissedMatchCard';
import { MissedMatchModal } from '@/components/matches/MissedMatchModal';
import { InstantMatchCard } from '@/components/matches/InstantMatchCard';
import { ConversationCard } from '@/components/matches/ConversationCard';
import { ItemDetailsSheet } from '@/components/discover/ItemDetailsSheet';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Item } from '@/types/database';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useDeviceLocation } from '@/hooks/useLocation';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

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
  
  // New matches (created in last 24 hours) for Instant Matches section
  const newMatches = activeMatches.filter(m => {
    const createdAt = new Date(m.created_at);
    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    return createdAt > dayAgo;
  });
  
  // Older matches for Conversations section
  const conversationMatches = activeMatches;

  const hasUnreadMessages = (match: any) => {
    if (!match.last_message || !user) return false;
    return match.last_message.sender_id !== user.id && match.last_message.status !== 'read';
  };

  const currentSection = SECTIONS[currentStep];
  
  // Calculate total notifications
  const totalNotifications = 
    activeMatches.filter(m => hasUnreadMessages(m)).length + 
    pendingInvites.length + 
    missedMatches.length;

  return (
    <AppLayout>
      {/* Main container - flex column with overflow hidden */}
      <div className="flex flex-col h-[100dvh] bg-surface">
        {/* Header - Soft Neo-Minimal style */}
        <header className="sticky top-0 z-40 bg-background border-b border-border/50 px-4 py-4 safe-area-top shrink-0">
          <div className="flex items-center justify-between max-w-lg mx-auto">
            <h1 className="text-[22px] font-bold text-foreground">
              {t('matches.title', 'Matches')}
            </h1>
            <button className="relative p-2 rounded-full hover:bg-muted transition-colors">
              <Bell className="w-6 h-6 text-muted-foreground" />
              {totalNotifications > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalNotifications > 9 ? '9+' : totalNotifications}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="max-w-lg mx-auto px-4 py-4 space-y-6">
          {/* Instant Matches Section - Horizontal Scrolling */}
          {currentStep === 0 && newMatches.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-foreground">
                    {t('matches.instantMatches', 'Instant Matches')}
                  </h2>
                  <Badge 
                    variant="secondary" 
                    className="bg-secondary text-secondary-foreground font-medium text-xs px-2 py-0.5"
                  >
                    New ({newMatches.length})
                  </Badge>
                </div>
                <button className="text-primary text-sm font-medium flex items-center gap-1">
                  See All
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Horizontal scroll container */}
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                {newMatches.slice(0, 6).map((match, index) => (
                  <InstantMatchCard
                    key={match.id}
                    match={match}
                    index={index}
                    onClick={() => navigate(`/chat/${match.id}`)}
                    isHighlighted={index === 0}
                    onItemTap={() => handleViewTheirItemDetails(match)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Tab Navigation Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {SECTIONS.map((section, idx) => {
              const notificationCount = 
                idx === 0 ? activeMatches.filter(m => hasUnreadMessages(m)).length :
                idx === 2 ? pendingInvites.length :
                idx === 3 ? missedMatches.length : 0;
              
              return (
                <button
                  key={section.id}
                  onClick={() => setCurrentStep(idx)}
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all',
                    currentStep === idx 
                      ? 'bg-primary text-primary-foreground shadow-sm' 
                      : 'bg-card text-muted-foreground hover:bg-muted border border-border/50'
                  )}
                >
                  <section.icon className="w-4 h-4" />
                  {section.title}
                  {notificationCount > 0 && (
                    <span className={cn(
                      'min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold flex items-center justify-center',
                      currentStep === idx 
                        ? 'bg-primary-foreground/20 text-primary-foreground' 
                        : 'bg-destructive text-destructive-foreground'
                    )}>
                      {notificationCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Conversations Section - Vertical List */}
          <AnimatePresence mode="wait">
            <motion.section
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {currentStep === 0 && (
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                    {t('matches.conversations', 'Conversations')}
                  </h2>
                  
                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    </div>
                  ) : conversationMatches.length > 0 ? (
                    <div className="space-y-2">
                      {conversationMatches.map((match, index) => (
                        <ConversationCard
                          key={match.id}
                          match={match}
                          index={index}
                          onClick={() => navigate(`/chat/${match.id}`)}
                          hasUnread={hasUnreadMessages(match)}
                          onItemTap={() => handleViewTheirItemDetails(match)}
                        />
                      ))}
                    </div>
                  ) : (
                    <Card className="p-8 text-center shadow-card">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                        <ArrowLeftRight className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground font-medium">No active matches yet</p>
                      <p className="text-sm text-muted-foreground mt-1">Start swiping to find swaps!</p>
                    </Card>
                  )}
                </div>
              )}

              {/* Completed Matches */}
              {currentStep === 1 && (
                <div className="space-y-3">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    </div>
                  ) : completedMatches.length > 0 ? (
                    <div className="space-y-2">
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
                    <Card className="p-8 text-center shadow-card">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground font-medium">No completed swaps yet</p>
                    </Card>
                  )}
                </div>
              )}

              {/* Deal Invites */}
              {currentStep === 2 && (
                <div className="space-y-3">
                  {invitesLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    </div>
                  ) : pendingInvites.length > 0 ? (
                    <div className="space-y-2">
                      {pendingInvites.map((invite) => (
                        <Card key={invite.id} className="p-4 space-y-3 shadow-card">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewDealInviteItem(invite, true);
                              }}
                              className="w-10 h-10 rounded-xl overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
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
                                from <VerifiedName name={invite.sender_item?.owner_display_name || 'User'} className="inline" badgeClassName="w-3 h-3" />
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
                              className="w-10 h-10 rounded-xl overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
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
                              className="flex-1 rounded-xl"
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
                              className="flex-1 rounded-xl"
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
                    <Card className="p-8 text-center shadow-card">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground font-medium">No pending deal invites</p>
                    </Card>
                  )}
                </div>
              )}

              {/* Missed Matches */}
              {currentStep === 3 && (
                <div className="space-y-3">
                  {missedLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    </div>
                  ) : missedMatches.length > 0 ? (
                    <div className="space-y-2">
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
                    <Card className="p-8 text-center shadow-card">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                        <HeartOff className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground font-medium">No missed matches</p>
                      <p className="text-sm text-muted-foreground mt-1">Keep swiping to find your matches!</p>
                    </Card>
                  )}
                </div>
              )}
            </motion.section>
          </AnimatePresence>
          </div>
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
