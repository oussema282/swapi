import { useState, useCallback } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { useAuth } from '@/hooks/useAuth';
import { useMyItems } from '@/hooks/useItems';
import { useSwipeableItems, useSwipe } from '@/hooks/useSwipe';
import { ItemSelector } from '@/components/discover/ItemSelector';
import { SwipeCard } from '@/components/discover/SwipeCard';
import { EmptyState } from '@/components/discover/EmptyState';
import { MatchModal } from '@/components/discover/MatchModal';
import { Button } from '@/components/ui/button';
import { X, Heart } from 'lucide-react';
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

  const { data: swipeableItems, isLoading: swipeLoading } = useSwipeableItems(selectedItemId);
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
  const noMoreCards = swipeableItems && currentIndex >= swipeableItems.length;

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-3 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <ItemSelector
            items={myItems || []}
            selectedId={selectedItemId}
            onSelect={(id) => {
              setSelectedItemId(id);
              setCurrentIndex(0);
            }}
          />
        </div>

        {/* Swipe Area */}
        <div className="flex-1 relative overflow-hidden">
          {!selectedItemId ? (
            <EmptyState
              title="Select an item to start"
              description={noItems ? "Add your first item to start swapping!" : "Choose one of your items above to find potential swaps"}
              actionLabel={noItems ? "Add Item" : undefined}
              actionHref={noItems ? "/items/new" : undefined}
            />
          ) : isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
            </div>
          ) : noMoreCards ? (
            <EmptyState
              title="No more items"
              description="Check back later for new items to swap!"
              actionLabel="Switch Item"
              onAction={() => setSelectedItemId(null)}
            />
          ) : (
            <div className="absolute inset-4 md:inset-8">
              {/* Card Stack - show next card behind */}
              {swipeableItems?.slice(currentIndex, currentIndex + 2).reverse().map((item, idx) => (
                <SwipeCard
                  key={item.id}
                  item={item}
                  isTop={idx === (swipeableItems.slice(currentIndex, currentIndex + 2).length - 1)}
                  onSwipeComplete={handleSwipeComplete}
                  swipeDirection={idx === (swipeableItems.slice(currentIndex, currentIndex + 2).length - 1) ? swipeDirection : null}
                />
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {selectedItemId && currentItem && !noMoreCards && (
          <div className="p-4 pb-6 flex justify-center gap-6">
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-destructive/50 hover:bg-destructive hover:border-destructive hover:text-destructive-foreground transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
              onClick={() => handleSwipe('left')}
              disabled={swipeMutation.isPending}
            >
              <X className="w-8 h-8" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-success/50 hover:bg-success hover:border-success hover:text-success-foreground transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
              onClick={() => handleSwipe('right')}
              disabled={swipeMutation.isPending}
            >
              <Heart className="w-8 h-8" />
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
