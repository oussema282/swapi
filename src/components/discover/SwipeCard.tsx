import { useRef } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Item, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Package, Star } from 'lucide-react';

interface SwipeCardProps {
  item: Item & { 
    owner_display_name: string; 
    owner_avatar_url: string | null;
    recommendation_score?: number;
    community_rating?: number;
    total_interactions?: number;
  };
  isTop: boolean;
  onSwipeComplete: (direction: 'left' | 'right') => void;
  swipeDirection: 'left' | 'right' | null;
}

const SWIPE_THRESHOLD = 100;

// Convert rating (1-5) to star display
function RatingStars({ rating, totalInteractions }: { rating?: number; totalInteractions?: number }) {
  // Default to 3 stars for new items (cold start)
  const displayRating = rating ?? 3;
  
  // Round to nearest 0.5
  const roundedRating = Math.round(displayRating * 2) / 2;
  const clampedRating = Math.min(5, Math.max(1, roundedRating));
  
  const fullStars = Math.floor(clampedRating);
  const hasHalfStar = clampedRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Confidence indicator based on interaction volume
  const isNewItem = (totalInteractions ?? 0) < 5;

  return (
    <div className="flex items-center gap-1.5 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
      <div className="flex items-center gap-0.5">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-4 h-4 text-muted-foreground/30" />
            <div className="absolute inset-0 overflow-hidden w-[50%]">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-muted-foreground/30" />
        ))}
      </div>
      {isNewItem && (
        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">New</span>
      )}
    </div>
  );
}

export function SwipeCard({ item, isTop, onSwipeComplete, swipeDirection }: SwipeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-25, 0, 25]);
  const opacity = useTransform(x, [-300, -100, 0, 100, 300], [0, 1, 1, 1, 0]);
  
  // Overlay opacities
  const likeOpacity = useTransform(x, [0, 100, 200], [0, 0.8, 1]);
  const nopeOpacity = useTransform(x, [-200, -100, 0], [1, 0.8, 0]);

  const hasPhotos = item.photos && item.photos.length > 0;

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = SWIPE_THRESHOLD;
    if (info.offset.x > threshold) {
      onSwipeComplete('right');
    } else if (info.offset.x < -threshold) {
      onSwipeComplete('left');
    }
  };

  // Animate out when swipeDirection is set
  const getExitAnimation = () => {
    if (swipeDirection === 'left') {
      return { x: -500, rotate: -30, opacity: 0 };
    }
    if (swipeDirection === 'right') {
      return { x: 500, rotate: 30, opacity: 0 };
    }
    return {};
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'absolute inset-0 rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing',
        !isTop && 'pointer-events-none'
      )}
      style={{ 
        x: isTop ? x : 0, 
        rotate: isTop ? rotate : 0,
        scale: isTop ? 1 : 0.95,
        zIndex: isTop ? 10 : 5,
      }}
      animate={swipeDirection ? getExitAnimation() : {}}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.02 }}
    >
      {/* Card Background - Use flex column to prevent overlap */}
      <div className="absolute inset-0 bg-card flex flex-col">
        {/* Main Photo - flex-shrink-0 to maintain size */}
        <div className="relative flex-1 min-h-0 bg-muted overflow-hidden">
            {hasPhotos ? (
              <img
                src={item.photos[0]}
                alt={item.title}
                className="w-full h-full object-cover"
                draggable={false}
                loading="lazy"
                decoding="async"
              />
            ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              <Package className="w-24 h-24 text-muted-foreground/20" />
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          {/* Like Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-success/20"
            style={{ opacity: isTop ? likeOpacity : 0 }}
          >
            <div className="px-10 py-5 rounded-2xl bg-success/90 border-4 border-success-foreground transform -rotate-12 shadow-2xl">
              <span className="text-success-foreground font-bold text-4xl tracking-wider">LIKE</span>
            </div>
          </motion.div>

          {/* Nope Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-destructive/20"
            style={{ opacity: isTop ? nopeOpacity : 0 }}
          >
            <div className="px-10 py-5 rounded-2xl bg-destructive/90 border-4 border-destructive-foreground transform rotate-12 shadow-2xl">
              <span className="text-destructive-foreground font-bold text-4xl tracking-wider">NOPE</span>
            </div>
          </motion.div>

          {/* Community Rating - Top Left */}
          <div className="absolute top-4 left-4">
            <RatingStars rating={item.community_rating} totalInteractions={item.total_interactions} />
          </div>

          {/* Condition Badge - Top Right */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="backdrop-blur-sm bg-background/80 text-foreground font-medium px-3 py-1">
              {CONDITION_LABELS[item.condition]}
            </Badge>
          </div>
        </div>

        {/* Content - Fixed height, no overlap */}
        <div className="flex-shrink-0 p-4 bg-card border-t border-border/30">
          {/* Title */}
          <h3 className="text-xl font-display font-bold text-foreground leading-tight line-clamp-1 mb-1">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm line-clamp-1 mb-2">
            {item.description || 'No description provided'}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 text-xs">
              {CATEGORY_LABELS[item.category]}
            </Badge>
            {item.value_min && item.value_min > 0 && (
              <Badge variant="outline" className="bg-price text-price-foreground border-price/40 font-semibold text-xs">
                ${item.value_min}{item.value_max ? ` - $${item.value_max}` : '+'}
              </Badge>
            )}
          </div>

          {/* Owner - Always at bottom, never overlapped */}
          <div className="flex items-center gap-2 pt-2 border-t border-border/50">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md flex-shrink-0">
              {item.owner_avatar_url ? (
                <img
                  src={item.owner_avatar_url}
                  alt={`${item.owner_display_name} profile picture`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                item.owner_display_name.charAt(0).toUpperCase()
              )}
            </div>
            <p className="font-medium text-foreground text-sm truncate">{item.owner_display_name}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
