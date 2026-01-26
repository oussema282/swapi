import { useCallback, useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { useAuth } from '@/hooks/useAuth';
import { useMyItems } from '@/hooks/useItems';
import { useRecommendedItems, FeedMode } from '@/hooks/useRecommendations';
import { useSwipe, useUndoSwipe, useCheckUndoEligibility } from '@/hooks/useSwipe';
import { useSwipeState } from '@/hooks/useSwipeState';
import { useDeviceLocation } from '@/hooks/useLocation';
import { useEntitlements, FREE_LIMITS } from '@/hooks/useEntitlements';
import { useSystemState } from '@/hooks/useSystemState';
import { useMissedMatches } from '@/hooks/useMissedMatches';
import { ItemSelector } from '@/components/discover/ItemSelector';
import { SwipeCard } from '@/components/discover/SwipeCard';
import { SwipeTopBar } from '@/components/discover/SwipeTopBar';
import { SwipeActions } from '@/components/discover/SwipeActions';
import { ItemDetailsSheet } from '@/components/discover/ItemDetailsSheet';
import { EmptyState } from '@/components/discover/EmptyState';
import { DealInviteButton } from '@/components/deals/DealInviteButton';
import { MatchModal } from '@/components/discover/MatchModal';
import { UpgradePrompt } from '@/components/subscription/UpgradePrompt';
import { X, HeartOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

export default function Index() {
  const { user, loading: authLoading } = useAuth();
  const { data: myItems, isLoading: itemsLoading } = useMyItems();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const [activeTab, setActiveTab] = useState<'foryou' | 'nearby'>('foryou');
  const [showDetailsSheet, setShowDetailsSheet] = useState(false);
  const [showDealInvite, setShowDealInvite] = useState(false);
  const { latitude, longitude } = useDeviceLocation();
  const { canUse, remaining, usage, incrementUsage, isPro } = useEntitlements();
  const { state: systemState } = useSystemState();
  const queryClient = useQueryClient();
  
  // Fetch missed matches for the currently selected item only
  const { data: missedMatches } = useMissedMatches();
  // Filter to only show missed matches for the currently selected item
  const missedForSelectedItem = missedMatches?.filter(m => m.my_item_id === selectedItemId) || [];
  const hasMissedForSelectedItem = missedForSelectedItem.length > 0;
  const [dismissedMissedBanner, setDismissedMissedBanner] = useState<string | null>(null); // track dismissed by item ID
  
  // Use the new swipe state machine with strict SWIPE_PHASE control
  const { 
    state: swipeState, 
    globalPhase,
    actions, 
    canSwipe, 
    canGoBack, 
    isAnimating,
    isRefreshing,
    isLoading: isSwipeLoading,
    isExhausted,
    isSystemBlocked 
  } = useSwipeState();
  
  const { currentIndex, swipeDirection, showMatch, matchedItem, lastUndoneItemId, cardKey } = swipeState;
  
  // Track feedback overlay for artistic animations
  const [feedbackOverlay, setFeedbackOverlay] = useState<'like' | 'nope' | null>(null);

  // Auto-select first item when items load
  useEffect(() => {
    if (myItems && myItems.length > 0 && !selectedItemId) {
      setSelectedItemId(myItems[0].id);
    }
  }, [myItems, selectedItemId]);

  const { data: swipeableItems, isLoading: swipeLoading, refetch: refetchItems } = useRecommendedItems(selectedItemId, activeTab as FeedMode);
  const swipeMutation = useSwipe();
  const undoMutation = useUndoSwipe();
  const checkUndoMutation = useCheckUndoEligibility();

  const currentItem = swipeableItems?.[currentIndex];
  const hasMoreCards = swipeableItems && currentIndex < swipeableItems.length;

  // Update SWIPE_PHASE based on data loading state
  // Loading spinner shown ONLY when a request is in progress
  useEffect(() => {
    if (!selectedItemId) return;

    // Never overwrite swipe phases during an active swipe/commit/undo
    if (globalPhase === 'SWIPING' || globalPhase === 'COMMITTING' || globalPhase === 'UNDOING') {
      return;
    }

    // Only set LOADING if we're actually fetching
    if (swipeLoading) {
      if (globalPhase !== 'LOADING') {
        actions.setLoading();
      }
      return;
    }

    if (!swipeableItems) return;

    // Only transition to READY/EXHAUSTED from stable phases
    const stablePhases = ['IDLE', 'LOADING', 'REFRESHING', 'EXHAUSTED'] as const;
    if (!stablePhases.includes(globalPhase as (typeof stablePhases)[number])) {
      return;
    }

    // Request completed - determine stable state
    if (swipeableItems.length > 0 && hasMoreCards) {
      actions.setReady();
    } else if (swipeableItems.length === 0 || !hasMoreCards) {
      // No cards available - transition to EXHAUSTED (stable empty state)
      // This is item-scoped: exhaustion for this item does not affect other items
      if (globalPhase !== 'EXHAUSTED' && globalPhase !== 'REFRESHING') {
        actions.setExhausted();
      }
    }
  }, [swipeLoading, swipeableItems, selectedItemId, hasMoreCards, globalPhase]);

  // Recovery mechanism: If stuck in SWIPING or COMMITTING for too long, auto-recover
  useEffect(() => {
    if (globalPhase === 'SWIPING' || globalPhase === 'COMMITTING') {
      const timeout = setTimeout(() => {
        console.log(`[SWIPE] Auto-recovery: stuck in ${globalPhase} for 5s, forcing READY`);
        actions.forceReady();
      }, 5000); // 5 second timeout
      return () => clearTimeout(timeout);
    }
  }, [globalPhase, actions]);

  // Handle manual pool refresh (e.g., retry button in exhausted state)
  const handlePoolRefresh = useCallback(async () => {
    if (isRefreshing || globalPhase === 'REFRESHING') return;
    
    actions.startRefresh();
    
    // Invalidate and refetch recommendations
    await queryClient.invalidateQueries({ queryKey: ['recommended-items', selectedItemId] });
    const result = await refetchItems();
    
    // After refresh completes, let the useEffect handle state transition
    // If still no items, will transition to EXHAUSTED
    if (result.data && result.data.length > 0) {
      actions.completeRefresh(0);
    } else {
      // No new items found - transition to exhausted
      actions.setExhausted();
    }
  }, [isRefreshing, globalPhase, actions, queryClient, selectedItemId, refetchItems]);

  const handleSwipe = useCallback(async (direction: 'left' | 'right') => {
    if (!selectedItemId || !currentItem) return;
    
    // Block if system is in TRANSITION or UPGRADING
    if (isSystemBlocked) {
      console.log('[SWIPE] blocked: system is transitioning');
      return;
    }

    // Check swipe limit for free users
    if (!canUse.swipes) {
      setShowUpgradePrompt(true);
      return;
    }

    // Acquire commit lock to prevent double swipes
    if (!actions.acquireCommitLock()) {
      console.log('[SWIPE] blocked: commit lock held');
      return;
    }

    // Start swipe - this checks SWIPE_PHASE internally
    const started = actions.startSwipe(direction);
    if (!started) {
      console.log('[SWIPE] not started: wrong phase');
      actions.releaseCommitLock();
      return;
    }
    
    // Show feedback overlay immediately
    setFeedbackOverlay(direction === 'right' ? 'like' : 'nope');

    // Capture itemId before async to avoid stale closure
    const swipedItemId = currentItem.id;
    
    // Wait for animation, then commit
    setTimeout(async () => {
      try {
        // Increment usage for free users
        if (!isPro) {
          await incrementUsage('swipes');
        }

        const result = await swipeMutation.mutateAsync({
          swiperItemId: selectedItemId,
          swipedItemId,
          liked: direction === 'right',
        });

        if (result.match) {
          actions.setMatch(currentItem);
        }

        // Complete the swipe - transitions SWIPING → COMMITTING → READY
        actions.completeSwipe(swipedItemId);
        
        // Clear feedback overlay after card exits
        setTimeout(() => setFeedbackOverlay(null), 200);
      } catch (error) {
        // On error, force back to READY
        console.error('[SWIPE] mutation failed:', error);
        toast.error('Swipe failed. Please try again.');
        actions.forceReady();
        setFeedbackOverlay(null);
      } finally {
        // ALWAYS release lock
        actions.releaseCommitLock();
      }
    }, 400);
  }, [selectedItemId, currentItem, swipeMutation, actions, canUse.swipes, isPro, incrementUsage, isSystemBlocked]);

  // Swipe is triggered by button click, not gesture
  const handleSwipeComplete = useCallback((direction: 'left' | 'right') => {
    // This is now only called programmatically from button clicks
    handleSwipe(direction);
  }, [handleSwipe]);

  const handleGoBack = useCallback(async () => {
    if (!selectedItemId) return;
    
    // Get the item ID from history before going back
    const lastEntry = swipeState.historyStack[swipeState.historyStack.length - 1];
    if (!lastEntry) return;

    // Start undo - this checks SWIPE_PHASE internally
    const started = actions.startUndo();
    if (!started) {
      console.log('Undo not started: wrong phase or no history');
      return;
    }

    try {
      // Check if undo is allowed (24h limit)
      const { canUndo } = await checkUndoMutation.mutateAsync({
        swiperItemId: selectedItemId,
        swipedItemId: lastEntry.itemId,
      });

      if (!canUndo) {
        toast.error('You can only undo once per item every 24 hours');
        actions.setReady(); // Abort undo
        return;
      }

      // Delete the swipe record and record the undo
      await undoMutation.mutateAsync({
        swiperItemId: selectedItemId,
        swipedItemId: lastEntry.itemId,
      });

      // Complete undo - transitions UNDOING → READY
      actions.completeUndo();
      actions.clearUndo();
    } catch (error: any) {
      console.error('Failed to undo swipe:', error);
      toast.error(error.message || 'Failed to undo swipe');
      actions.setReady(); // Abort undo
      actions.clearUndo();
    }
  }, [selectedItemId, swipeState.historyStack, actions, undoMutation, checkUndoMutation]);

  // Handle item selection - reset swipe state and clear cache for fresh fetch
  const handleSelectItem = useCallback((id: string) => {
    if (id === selectedItemId) return;
    
    // Reset to IDLE and clear local state
    actions.reset();
    
    // Clear the cache for the new item to force fresh fetch
    queryClient.removeQueries({ queryKey: ['recommended-items', id] });
    
    // Set the new item - will trigger LOADING when fetch starts
    setSelectedItemId(id);
  }, [actions, queryClient, selectedItemId]);

  // Handler for switching item from exhausted state - must be before early returns
  const handleSwitchItemFromExhausted = useCallback(() => {
    // Focus the item selector - scroll to top where selector is
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Only show loading when actually fetching (request in progress)
  const isActuallyLoading = (itemsLoading || swipeLoading) && globalPhase === 'LOADING';
  const noItems = !myItems?.length;
  
  // Exhaustion is a stable state - NOT a loading state
  // Never show spinner when exhausted
  const showExhaustedState = isExhausted && !swipeLoading;
  const showLoadingState = isActuallyLoading || (isRefreshing && globalPhase === 'REFRESHING');
  const hasCards = !showLoadingState && !showExhaustedState && swipeableItems && swipeableItems.length > 0 && currentIndex < swipeableItems.length;

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        {/* Premium Top Bar */}
        <SwipeTopBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onFilterClick={() => toast.info('Filters coming soon!')}
          onBoostClick={() => setShowUpgradePrompt(true)}
          hasNotifications={hasMissedForSelectedItem}
        />

        {/* Item Selector */}
        <div className="px-4 py-3 border-b border-border/50 bg-background/80 backdrop-blur-sm shrink-0">
          <ItemSelector
            items={myItems || []}
            selectedId={selectedItemId}
            onSelect={handleSelectItem}
          />
        </div>

        {/* Missed Match Notification Banner - shows only for the currently selected item */}
        {hasMissedForSelectedItem && dismissedMissedBanner !== selectedItemId && (
          <Link 
            to="/matches?tab=missed"
            className="mx-4 mb-2 p-3 bg-destructive/10 border border-destructive/20 rounded-xl flex items-center gap-3 hover:bg-destructive/15 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
              <HeartOff className="w-5 h-5 text-destructive" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-destructive">
                You missed a match!
              </p>
              <p className="text-xs text-muted-foreground truncate">
                Someone wanted to swap for this item
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="flex-shrink-0 h-8 w-8"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDismissedMissedBanner(selectedItemId);
              }}
            >
              <X className="w-4 h-4" />
            </Button>
          </Link>
        )}

        {/* Main Swipe Area - Full height to bottom nav */}
        <div className="flex-1 relative">
          {noItems ? (
            <EmptyState
              title="Add your first item"
              description="You need to add an item before you can start swiping!"
              actionLabel="Add Item"
              actionHref="/items/new"
            />
          ) : !selectedItemId ? (
            <EmptyState
              title="Select an item"
              description="Choose one of your items above to find potential swaps"
            />
          ) : showLoadingState ? (
            // Loading state - ONLY when request is in progress
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
            </div>
          ) : showExhaustedState ? (
            // Exhausted state - stable empty state for THIS item (item-scoped)
            <EmptyState
              variant="exhausted"
              title="No more matches for this item"
              description="You've seen all available swaps. Try selecting a different item or check back later for new listings."
              showSwitchItem={myItems && myItems.length > 1}
              onSwitchItem={handleSwitchItemFromExhausted}
              showRefresh
              onRefresh={handlePoolRefresh}
              isRefreshing={isRefreshing}
            />
          ) : hasCards ? (
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                {swipeableItems?.slice(currentIndex, currentIndex + 3).reverse().map((item, idx, arr) => (
                  <SwipeCard
                    key={`${item.id}-${cardKey}`}
                    item={item}
                    isTop={idx === arr.length - 1}
                    onSwipeComplete={handleSwipeComplete}
                    swipeDirection={idx === arr.length - 1 ? swipeDirection : null}
                    userLocation={{ latitude, longitude }}
                    onInfoTap={idx === arr.length - 1 ? () => setShowDetailsSheet(true) : undefined}
                    showFeedbackOverlay={idx === arr.length - 1 ? feedbackOverlay : null}
                  />
                ))}
                
                {/* Overlayed Action Buttons */}
                <SwipeActions
                  onDislike={() => handleSwipe('left')}
                  onLike={() => handleSwipe('right')}
                  onUndo={handleGoBack}
                  onSuperLike={() => setShowUpgradePrompt(true)}
                  onDealInvite={() => setShowDealInvite(true)}
                  onUpgradeClick={() => setShowUpgradePrompt(true)}
                  canSwipe={canSwipe && !swipeMutation.isPending && !feedbackOverlay}
                  canUndo={canGoBack}
                  isLoading={swipeMutation.isPending}
                  className="absolute bottom-6 left-0 right-0 z-20"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Item Details Sheet */}
      <ItemDetailsSheet
        open={showDetailsSheet}
        onOpenChange={setShowDetailsSheet}
        item={currentItem || null}
        userLocation={{ latitude, longitude }}
      />

      {/* Match Modal */}
      <MatchModal
        open={showMatch}
        onClose={actions.clearMatch}
        myItem={myItems?.find(i => i.id === selectedItemId) || null}
        theirItem={matchedItem}
      />

      {/* Deal Invite Button (renders modal) */}
      {currentItem && (
        <DealInviteButton
          targetItemId={currentItem.id}
          targetItemTitle={currentItem.title}
          open={showDealInvite}
          onOpenChange={setShowDealInvite}
          hideButton
        />
      )}

      {/* Upgrade Prompt */}
      <UpgradePrompt
        open={showUpgradePrompt}
        onOpenChange={setShowUpgradePrompt}
        feature="swipes"
        featureType="swipes"
        usedCount={usage.swipes}
        limit={FREE_LIMITS.swipes}
      />
    </AppLayout>
  );
}
