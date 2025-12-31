import { useCallback, useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { useAuth } from '@/hooks/useAuth';
import { useMyItems } from '@/hooks/useItems';
import { useRecommendedItems } from '@/hooks/useRecommendations';
import { useSwipe, useUndoSwipe, useCheckUndoEligibility } from '@/hooks/useSwipe';
import { useSwipeState } from '@/hooks/useSwipeState';
import { useDeviceLocation } from '@/hooks/useLocation';
import { useEntitlements, FREE_LIMITS } from '@/hooks/useEntitlements';
import { useSystemState } from '@/hooks/useSystemState';
import { ItemSelector } from '@/components/discover/ItemSelector';
import { SwipeCard } from '@/components/discover/SwipeCard';
import { EmptyState } from '@/components/discover/EmptyState';
import { MatchModal } from '@/components/discover/MatchModal';
import { UpgradePrompt } from '@/components/subscription/UpgradePrompt';
import { Button } from '@/components/ui/button';
import { X, Heart, Undo2 } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

export default function Index() {
  const { user, loading: authLoading } = useAuth();
  const { data: myItems, isLoading: itemsLoading } = useMyItems();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const { latitude, longitude } = useDeviceLocation();
  const { canUse, remaining, usage, incrementUsage, isPro } = useEntitlements();
  const { state: systemState } = useSystemState();
  const queryClient = useQueryClient();
  
  // Use the new swipe state machine with strict SWIPE_PHASE control
  const { 
    state: swipeState, 
    globalPhase,
    actions, 
    canSwipe, 
    canGoBack, 
    canGesture,
    isAnimating,
    isRefreshing,
    isLoading: isSwipeLoading,
    isExhausted,
    isSystemBlocked 
  } = useSwipeState();
  
  const { currentIndex, swipeDirection, showMatch, matchedItem, lastUndoneItemId, cardKey } = swipeState;

  // Auto-select first item when items load
  useEffect(() => {
    if (myItems && myItems.length > 0 && !selectedItemId) {
      setSelectedItemId(myItems[0].id);
    }
  }, [myItems, selectedItemId]);

  const { data: swipeableItems, isLoading: swipeLoading, refetch: refetchItems } = useRecommendedItems(selectedItemId);
  const swipeMutation = useSwipe();
  const undoMutation = useUndoSwipe();
  const checkUndoMutation = useCheckUndoEligibility();

  const currentItem = swipeableItems?.[currentIndex];
  const hasMoreCards = swipeableItems && currentIndex < swipeableItems.length;

  // Update SWIPE_PHASE based on data loading state
  // Loading spinner shown ONLY when a request is in progress
  useEffect(() => {
    if (!selectedItemId) return;
    
    // Only set LOADING if we're actually fetching
    if (swipeLoading && globalPhase !== 'LOADING') {
      actions.setLoading();
    } else if (!swipeLoading && swipeableItems) {
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
    }
  }, [swipeLoading, swipeableItems, selectedItemId, hasMoreCards, globalPhase]);

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
      } catch (error) {
        // On error, force back to READY
        console.error('[SWIPE] mutation failed:', error);
        toast.error('Swipe failed. Please try again.');
        actions.forceReady();
      } finally {
        // ALWAYS release lock
        actions.releaseCommitLock();
      }
    }, 300);
  }, [selectedItemId, currentItem, swipeMutation, actions, canUse.swipes, isPro, incrementUsage, isSystemBlocked]);

  const handleSwipeComplete = useCallback((direction: 'left' | 'right') => {
    if (canGesture) {
      handleSwipe(direction);
    }
  }, [handleSwipe, canGesture]);

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
  const showExhaustedState = isExhausted && !swipeLoading && swipeableItems?.length === 0;
  const showLoadingState = isActuallyLoading || (isRefreshing && globalPhase === 'REFRESHING');
  const hasCards = !showLoadingState && !showExhaustedState && swipeableItems && swipeableItems.length > 0 && currentIndex < swipeableItems.length;

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        {/* Header with Item Selector */}
        <div className="px-4 py-3 border-b border-border/50 bg-background/80 backdrop-blur-sm shrink-0">
          <ItemSelector
            items={myItems || []}
            selectedId={selectedItemId}
            onSelect={handleSelectItem}
          />
        </div>

        {/* Main Swipe Area */}
        <div className="flex-1 relative min-h-[400px]">
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
            // Loading state - only when request is in progress
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
            </div>
          ) : showExhaustedState ? (
            // Exhausted state - stable empty state for THIS item (item-scoped)
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎯</div>
                <h3 className="text-xl font-semibold text-foreground">
                  No more matches for this item
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  You've seen all available swaps for this item. Try selecting a different item or check back later for new listings.
                </p>
                <Button
                  onClick={handlePoolRefresh}
                  variant="outline"
                  className="mt-4"
                  disabled={isRefreshing}
                >
                  {isRefreshing ? 'Checking...' : 'Check for new items'}
                </Button>
              </div>
            </div>
          ) : hasCards ? (
            /* Card Stack - centered and sized properly */
            <div className="absolute inset-0 p-4">
              <div className="relative w-full h-full max-w-md mx-auto">
                {swipeableItems?.slice(currentIndex, currentIndex + 3).reverse().map((item, idx, arr) => (
                  <SwipeCard
                    key={`${item.id}-${cardKey}`}
                    item={item}
                    isTop={idx === arr.length - 1}
                    onSwipeComplete={handleSwipeComplete}
                    swipeDirection={idx === arr.length - 1 ? swipeDirection : null}
                    userLocation={{ latitude, longitude }}
                    canGesture={canGesture && idx === arr.length - 1}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* Action Buttons - Just above navbar */}
        {selectedItemId && !noItems && (
          <div className="py-3 flex justify-center items-center gap-4 shrink-0 bg-background">
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-destructive/40 bg-background hover:bg-destructive hover:border-destructive hover:text-destructive-foreground transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-50"
              onClick={() => handleSwipe('left')}
              disabled={swipeMutation.isPending || !hasCards || isAnimating || !canGesture}
            >
              <X className="w-7 h-7" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 bg-background hover:bg-muted transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
              onClick={handleGoBack}
              disabled={!canGoBack}
            >
              <Undo2 className="w-5 h-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-success/40 bg-background hover:bg-success hover:border-success hover:text-success-foreground transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-50"
              onClick={() => handleSwipe('right')}
              disabled={swipeMutation.isPending || !hasCards || isAnimating || !canGesture}
            >
              <Heart className="w-7 h-7" />
            </Button>
          </div>
        )}
      </div>

      {/* Match Modal */}
      <MatchModal
        open={showMatch}
        onClose={actions.clearMatch}
        myItem={myItems?.find(i => i.id === selectedItemId) || null}
        theirItem={matchedItem}
      />

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
