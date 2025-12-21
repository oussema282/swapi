import { useRef } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Item, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Package, MapPin } from 'lucide-react';

interface SwipeCardProps {
  item: Item & { owner_display_name: string; owner_avatar_url: string | null };
  isTop: boolean;
  onSwipeComplete: (direction: 'left' | 'right') => void;
  swipeDirection: 'left' | 'right' | null;
}

const SWIPE_THRESHOLD = 100;

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
      {/* Card Background */}
      <div className="absolute inset-0 bg-card">
        {/* Main Photo */}
        <div className="relative h-[70%] bg-muted overflow-hidden">
          {hasPhotos ? (
            <img
              src={item.photos[0]}
              alt={item.title}
              className="w-full h-full object-cover"
              draggable={false}
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

          {/* Condition Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="backdrop-blur-sm bg-background/80 text-foreground font-medium px-3 py-1">
              {CONDITION_LABELS[item.condition]}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] p-5 bg-card">
          <div className="h-full flex flex-col">
            {/* Title & Category */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-2xl font-display font-bold text-foreground leading-tight line-clamp-1">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm line-clamp-2 mb-3 flex-shrink-0">
              {item.description || 'No description provided'}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                {CATEGORY_LABELS[item.category]}
              </Badge>
              {item.value_min && item.value_min > 0 && (
                <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/30">
                  ${item.value_min}{item.value_max ? ` - $${item.value_max}` : '+'}
                </Badge>
              )}
            </div>

            {/* Owner */}
            <div className="mt-auto flex items-center gap-3 pt-2 border-t border-border/50">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                {item.owner_avatar_url ? (
                  <img src={item.owner_avatar_url} alt="" className="w-full h-full object-cover" />
                ) : (
                  item.owner_display_name.charAt(0).toUpperCase()
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">{item.owner_display_name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
