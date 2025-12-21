import { Item, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Package } from 'lucide-react';

interface SwipeCardProps {
  item: Item & { owner_display_name: string; owner_avatar_url: string | null };
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  swipeDirection: 'left' | 'right' | null;
}

export function SwipeCard({ item, swipeDirection }: SwipeCardProps) {
  const hasPhotos = item.photos && item.photos.length > 0;

  return (
    <Card
      className={cn(
        'absolute inset-0 overflow-hidden rounded-2xl border-0 shadow-lg swipe-card',
        swipeDirection === 'left' && 'swipe-left',
        swipeDirection === 'right' && 'swipe-right'
      )}
    >
      {/* Image */}
      <div className="relative h-[65%] bg-muted">
        {hasPhotos ? (
          <img
            src={item.photos[0]}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="w-20 h-20 text-muted-foreground/30" />
          </div>
        )}
        
        {/* Swipe indicators */}
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center transition-opacity duration-200',
            swipeDirection === 'right' ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="px-8 py-4 rounded-xl bg-success/90 text-success-foreground font-bold text-2xl rotate-[-20deg] border-4 border-success-foreground">
            LIKE!
          </div>
        </div>
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center transition-opacity duration-200',
            swipeDirection === 'left' ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="px-8 py-4 rounded-xl bg-destructive/90 text-destructive-foreground font-bold text-2xl rotate-[20deg] border-4 border-destructive-foreground">
            NOPE
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 h-[35%] flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-xl font-display font-bold line-clamp-1">{item.title}</h3>
          <Badge variant="secondary" className="shrink-0">
            {CONDITION_LABELS[item.condition]}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {item.description || 'No description'}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline">{CATEGORY_LABELS[item.category]}</Badge>
          {item.value_min > 0 && (
            <Badge variant="outline" className="text-primary">
              ${item.value_min}{item.value_max ? ` - $${item.value_max}` : '+'}
            </Badge>
          )}
        </div>

        <div className="mt-auto flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold text-sm">
            {item.owner_display_name.charAt(0).toUpperCase()}
          </div>
          <span className="text-sm font-medium">{item.owner_display_name}</span>
        </div>
      </div>
    </Card>
  );
}
