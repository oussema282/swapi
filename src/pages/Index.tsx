import { useState, useCallback, useEffect } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { useAuth } from '@/hooks/useAuth';
import { useMyItems } from '@/hooks/useItems';
import { useSwipeableItems, useSwipe } from '@/hooks/useSwipe';
import { ItemSelector } from '@/components/discover/ItemSelector';
import { SwipeCard } from '@/components/discover/SwipeCard';
import { EmptyState } from '@/components/discover/EmptyState';
import { MatchModal } from '@/components/discover/MatchModal';
import { Button } from '@/components/ui/button';
import { X, Heart, RotateCcw } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { Item } from '@/types/database';

export default function Index() {
  const { user, loading: authLoading } = useAuth();
  const { data: myItems, isLoading: itemsLoading } = useMyItems();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [matchedItem, setMatchedItem] = useState<Item | null>(null);
  const [showMatch, setShowMatch] = useState(false);

  // Auto-select first item when items load
  useEffect(() => {
    if (myItems && myItems.length > 0 && !selectedItemId) {
      setSelectedItemId(myItems[0].id);
    }
  }, [myItems, selectedItemId]);

  const { data: swipeableItems, isLoading: swipeLoading, refetch } = useSwipeableItems(selectedItemId);
  const swipeMutation = useSwipe();

  const currentItem = swipeableItems?.[currentIndex];

  const handleSwipe = useCallback(async (direction: 'left' | 'right') => {
    if (!selectedItemId || !currentItem) return;

    setSwipeDirection(direction);
    
    setTimeout(async () => {
      const result = await swipeMutation.mutateAsync({
        swiperItemId: selectedItemId,
        swipedItemId: currentItem.id,
        liked: direction === 'right',
      });

      if (result.match) {
        setMatchedItem(currentItem);
        setShowMatch(true);
      }

      setCurrentIndex(prev => prev + 1);
      setSwipeDirection(null);
    }, 300);
  }, [selectedItemId, currentItem, swipeMutation]);

  const handleSwipeComplete = useCallback((direction: 'left' | 'right') => {
    handleSwipe(direction);
  }, [handleSwipe]);

  const handleRefresh = useCallback(() => {
    setCurrentIndex(0);
    refetch();
  }, [refetch]);

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
            onSelect={(id) => {
              setSelectedItemId(id);
              setCurrentIndex(0);
            }}
          />
        </div>

        {/* Main Swipe Area */}
        <div className="flex-1 relative overflow-hidden min-h-0">
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
              actionLabel="Refresh"
              onAction={handleRefresh}
            />
          ) : (
            /* Card Stack */
            <div className="absolute inset-4 md:inset-6 lg:inset-8">
              {swipeableItems?.slice(currentIndex, currentIndex + 3).reverse().map((item, idx, arr) => (
                <SwipeCard
                  key={item.id}
                  item={item}
                  isTop={idx === arr.length - 1}
                  onSwipeComplete={handleSwipeComplete}
                  swipeDirection={idx === arr.length - 1 ? swipeDirection : null}
                />
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons - Always visible when item selected */}
        {selectedItemId && !noItems && (
          <div className="p-4 pb-6 flex justify-center items-center gap-4 shrink-0 bg-background/80 backdrop-blur-sm">
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-destructive/40 bg-background hover:bg-destructive hover:border-destructive hover:text-destructive-foreground transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-50"
              onClick={() => handleSwipe('left')}
              disabled={swipeMutation.isPending || !hasCards}
            >
              <X className="w-7 h-7" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 bg-background hover:bg-muted transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
              onClick={handleRefresh}
              disabled={isLoading}
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-success/40 bg-background hover:bg-success hover:border-success hover:text-success-foreground transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-50"
              onClick={() => handleSwipe('right')}
              disabled={swipeMutation.isPending || !hasCards}
            >
              <Heart className="w-7 h-7" />
            </Button>
          </div>
        )}
      </div>

      {/* Match Modal */}
      <MatchModal
        open={showMatch}
        onClose={() => setShowMatch(false)}
        myItem={myItems?.find(i => i.id === selectedItemId) || null}
        theirItem={matchedItem}
      />
    </AppLayout>
  );
}
