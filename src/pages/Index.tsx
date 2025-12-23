import { useCallback, useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { useAuth } from '@/hooks/useAuth';
import { useMyItems } from '@/hooks/useItems';
import { useRecommendedItems } from '@/hooks/useRecommendations';
import { useSwipe, useUndoSwipe } from '@/hooks/useSwipe';
import { useSwipeState } from '@/hooks/useSwipeState';
import { ItemSelector } from '@/components/discover/ItemSelector';
import { SwipeCard } from '@/components/discover/SwipeCard';
import { EmptyState } from '@/components/discover/EmptyState';
import { MatchModal } from '@/components/discover/MatchModal';
import { Button } from '@/components/ui/button';
import { X, Heart, Undo2 } from 'lucide-react';
import { Navigate } from 'react-router-dom';

export default function Index() {
  const { user, loading: authLoading } = useAuth();
  const { data: myItems, isLoading: itemsLoading } = useMyItems();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  
  // Use the new swipe state machine
  const { state: swipeState, actions, canSwipe, canGoBack } = useSwipeState();
  const { currentIndex, swipeDirection, isAnimating, showMatch, matchedItem, lastUndoneItemId, cardKey } = swipeState;

  // Auto-select first item when items load
  useEffect(() => {
    if (myItems && myItems.length > 0 && !selectedItemId) {
      setSelectedItemId(myItems[0].id);
    }
  }, [myItems, selectedItemId]);

  const { data: swipeableItems, isLoading: swipeLoading } = useRecommendedItems(selectedItemId);
  const swipeMutation = useSwipe();
  const undoMutation = useUndoSwipe();

  const currentItem = swipeableItems?.[currentIndex];

  const handleSwipe = useCallback(async (direction: 'left' | 'right') => {
    if (!selectedItemId || !currentItem || !canSwipe) return;

    // Start swipe animation - this locks the state
    actions.startSwipe(direction);
    
    // Wait for animation, then complete
    setTimeout(async () => {
      try {
        const result = await swipeMutation.mutateAsync({
          swiperItemId: selectedItemId,
          swipedItemId: currentItem.id,
          liked: direction === 'right',
        });

        if (result.match) {
          actions.setMatch(currentItem);
        }

        // Complete the swipe - this unlocks and advances
        actions.completeSwipe(currentItem.id);
      } catch (error) {
        // On error, unlock the state so user can try again
        actions.unlock();
        console.error('Swipe failed:', error);
      }
    }, 300);
  }, [selectedItemId, currentItem, swipeMutation, canSwipe, actions]);

  const handleSwipeComplete = useCallback((direction: 'left' | 'right') => {
    if (canSwipe) {
      handleSwipe(direction);
    }
  }, [handleSwipe, canSwipe]);

  const handleGoBack = useCallback(async () => {
    if (!canGoBack || !selectedItemId) return;
    
    // Get the item ID from history before going back
    const lastEntry = swipeState.historyStack[swipeState.historyStack.length - 1];
    if (!lastEntry) return;

    // Go back in UI state first
    actions.goBack();

    // Then delete the swipe record from database
    try {
      await undoMutation.mutateAsync({
        swiperItemId: selectedItemId,
        swipedItemId: lastEntry.itemId,
      });
      actions.clearUndo();
    } catch (error) {
      console.error('Failed to undo swipe:', error);
      // Even if deletion fails, keep the UI state consistent
      actions.clearUndo();
    }
  }, [canGoBack, selectedItemId, swipeState.historyStack, actions, undoMutation]);

  const handleSelectItem = useCallback((id: string) => {
    setSelectedItemId(id);
    actions.reset();
  }, [actions]);

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

  const isLoading = itemsLoading || swipeLoading;
  const noItems = !myItems?.length;
  const noMoreCards = !isLoading && swipeableItems && currentIndex >= swipeableItems.length;
  const hasCards = !isLoading && swipeableItems && swipeableItems.length > 0 && currentIndex < swipeableItems.length;

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
          ) : isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
            </div>
          ) : noMoreCards ? (
            <EmptyState
              title="No more items"
              description="You've seen all compatible items for now. Try a different item or check back later!"
            />
          ) : (
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
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons - Just above navbar */}
        {selectedItemId && !noItems && (
          <div className="py-3 flex justify-center items-center gap-4 shrink-0 bg-background">
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-destructive/40 bg-background hover:bg-destructive hover:border-destructive hover:text-destructive-foreground transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-50"
              onClick={() => handleSwipe('left')}
              disabled={swipeMutation.isPending || !hasCards || isAnimating}
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
              disabled={swipeMutation.isPending || !hasCards || isAnimating}
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
    </AppLayout>
  );
}