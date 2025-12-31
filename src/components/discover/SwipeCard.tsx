import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Item, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Package, Star, ChevronDown, MapPin, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { DescriptionModal } from './DescriptionModal';
import { formatDistance, calculateDistance } from '@/hooks/useLocation';
import { VerifiedName } from '@/components/ui/verified-name';

interface SwipeCardProps {
  item: Item & { 
    owner_display_name: string; 
    owner_avatar_url: string | null;
    owner_is_pro?: boolean;
    user_id: string;
    recommendation_score?: number;
    community_rating?: number;
    total_interactions?: number;
    reciprocal_boost?: number;
  };
  isTop: boolean;
  onSwipeComplete: (direction: 'left' | 'right') => void;
  swipeDirection: 'left' | 'right' | null;
  userLocation?: { latitude: number | null; longitude: number | null };
  /** When false, gestures are disabled (controlled by SWIPE_PHASE) */
  canGesture?: boolean;
}

const SWIPE_THRESHOLD = 100;

// Convert rating (1-5) to star display
function RatingStars({ rating, totalInteractions }: { rating?: number; totalInteractions?: number }) {
  const displayRating = rating ?? 3;
  const roundedRating = Math.round(displayRating * 2) / 2;
  const clampedRating = Math.min(5, Math.max(1, roundedRating));
  
  const fullStars = Math.floor(clampedRating);
  const hasHalfStar = clampedRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  const isNewItem = (totalInteractions ?? 0) < 5;

  return (
    <div className="flex items-center gap-1.5 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-4 h-4 text-muted-foreground/30" />
            <div className="absolute inset-0 overflow-hidden w-[50%]">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
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

export function SwipeCard({ item, isTop, onSwipeComplete, swipeDirection, userLocation, canGesture = true }: SwipeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [isDescriptionTruncated, setIsDescriptionTruncated] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const x = useMotionValue(0);

  const photos = item.photos || [];
  const hasMultiplePhotos = photos.length > 1;
  const hasReciprocalBoost = (item.reciprocal_boost ?? 0) > 0.5;

  // Check if description is truncated
  useEffect(() => {
    if (descriptionRef.current) {
      setIsDescriptionTruncated(
        descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight
      );
    }
  }, [item.description]);

  // Reset photo index when item changes
  useEffect(() => {
    setCurrentPhotoIndex(0);
  }, [item.id]);

  // Calculate distance to item
  const distanceKm = userLocation?.latitude && userLocation?.longitude && item.latitude && item.longitude
    ? calculateDistance(userLocation.latitude, userLocation.longitude, item.latitude, item.longitude)
    : null;

  const rotate = useTransform(x, [-300, 0, 300], [-25, 0, 25]);
  const opacity = useTransform(x, [-300, -100, 0, 100, 300], [0, 1, 1, 1, 0]);
  const likeOpacity = useTransform(x, [0, 100, 200], [0, 0.8, 1]);
  const nopeOpacity = useTransform(x, [-200, -100, 0], [1, 0.8, 0]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    // Only process swipe completion if gestures are allowed
    if (!canGesture) return;
    
    const threshold = SWIPE_THRESHOLD;
    if (info.offset.x > threshold) {
      onSwipeComplete('right');
    } else if (info.offset.x < -threshold) {
      onSwipeComplete('left');
    }
  };

  const getExitAnimation = () => {
    if (swipeDirection === 'left') {
      return { x: -500, rotate: -30, opacity: 0 };
    }
    if (swipeDirection === 'right') {
      return { x: 500, rotate: 30, opacity: 0 };
    }
    return {};
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIndex(prev => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIndex(prev => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'absolute inset-0 rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing swipe-card-shadow',
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
      drag={isTop && canGesture ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-card flex flex-col">
        {/* Photo Area with Navigation */}
        <div className="relative flex-1 min-h-0 bg-muted overflow-hidden">
          {photos.length > 0 ? (
            <>
              <img
                src={photos[currentPhotoIndex]}
                alt={`${item.title} - Photo ${currentPhotoIndex + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
                loading="lazy"
                decoding="async"
              />

              {/* Photo Navigation Arrows */}
              {hasMultiplePhotos && isTop && (
                <>
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition-all active:scale-95"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition-all active:scale-95"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}

              {/* Photo Dots Indicator */}
              {hasMultiplePhotos && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1.5">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPhotoIndex(index);
                      }}
                      className={cn(
                        'w-2 h-2 rounded-full transition-all',
                        index === currentPhotoIndex
                          ? 'bg-white w-5'
                          : 'bg-white/50 hover:bg-white/75'
                      )}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              <Package className="w-24 h-24 text-muted-foreground/20" />
            </div>
          )}

          {/* Premium gradient overlay for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />

          {/* Like Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-success/30"
            style={{ opacity: isTop ? likeOpacity : 0 }}
          >
            <div className="px-12 py-6 rounded-3xl bg-success border-4 border-white transform -rotate-12 shadow-2xl">
              <span className="text-white font-bold text-5xl tracking-wider">LIKE</span>
            </div>
          </motion.div>

          {/* Nope Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-destructive/30"
            style={{ opacity: isTop ? nopeOpacity : 0 }}
          >
            <div className="px-12 py-6 rounded-3xl bg-destructive border-4 border-white transform rotate-12 shadow-2xl">
              <span className="text-white font-bold text-5xl tracking-wider">NOPE</span>
            </div>
          </motion.div>

          {/* Community Rating - Top Left */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <RatingStars rating={item.community_rating} totalInteractions={item.total_interactions} />
            {hasReciprocalBoost && (
              <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-3 py-1.5 shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-semibold">High Match Potential</span>
              </div>
            )}
          </div>

          {/* Condition Badge - Top Right */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="backdrop-blur-md bg-white/90 text-foreground font-semibold px-3 py-1.5 shadow-lg">
              {CONDITION_LABELS[item.condition]}
            </Badge>
          </div>
        </div>

        {/* Content - Anchored at bottom of card */}
        <div className="absolute inset-x-0 bottom-0 p-5 z-10">
          {/* Title & Description on image */}
          <h3 className="text-2xl font-display font-bold text-white leading-tight line-clamp-1 mb-1 drop-shadow-lg">
            {item.title}
          </h3>

          <div className="flex items-start gap-1 mb-3">
            <p 
              ref={descriptionRef}
              className="text-white/80 text-sm line-clamp-2 flex-1 drop-shadow-md"
            >
              {item.description || 'No description provided'}
            </p>
            {isDescriptionTruncated && item.description && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDescriptionModal(true);
                }}
                className="flex-shrink-0 p-1 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                aria-label="Read full description"
              >
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
            )}
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs font-medium">
              {CATEGORY_LABELS[item.category]}
            </Badge>
            {distanceKm !== null && (
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {formatDistance(distanceKm)}
              </Badge>
            )}
            {item.value_min && item.value_min > 0 && (
              <Badge className="bg-price/90 text-price-foreground border-price/50 font-bold text-xs shadow-md">
                ${item.value_min}{item.value_max ? ` - $${item.value_max}` : '+'}
              </Badge>
            )}
          </div>

          {/* Owner info - glass card */}
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold shadow-lg ring-2 ring-white/30 flex-shrink-0">
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
            <VerifiedName 
              name={item.owner_display_name} 
              isPro={item.owner_is_pro} 
              className="font-semibold text-white text-sm drop-shadow-md"
              badgeClassName="text-amber-400"
              userId={item.user_id}
              clickable
            />
          </div>
        </div>
      </div>

      <DescriptionModal
        open={showDescriptionModal}
        onOpenChange={setShowDescriptionModal}
        title={item.title}
        description={item.description || ''}
      />
    </motion.div>
  );
}
