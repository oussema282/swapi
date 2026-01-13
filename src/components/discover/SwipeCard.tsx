import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Item, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Package, Star, ChevronDown, MapPin, Sparkles, Info, ThumbsUp, ThumbsDown } from 'lucide-react';
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
  /** Callback when info button is tapped */
  onInfoTap?: () => void;
  /** Show persistent overlay feedback */
  showFeedbackOverlay?: 'like' | 'nope' | null;
}

// Compact rating display for cards
function CompactRating({ rating, isNew }: { rating?: number; isNew?: boolean }) {
  const displayRating = rating ?? 3;
  const clampedRating = Math.min(5, Math.max(1, displayRating));
  
  return (
    <div className="flex items-center gap-1.5 bg-card/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-lg">
      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      <span className="text-xs font-semibold text-foreground">{clampedRating.toFixed(1)}</span>
      {isNew && (
        <Badge variant="secondary" className="h-4 px-1.5 text-[10px] bg-accent text-accent-foreground">
          NEW
        </Badge>
      )}
    </div>
  );
}

export function SwipeCard({ item, isTop, onSwipeComplete, swipeDirection, userLocation, onInfoTap, showFeedbackOverlay }: SwipeCardProps) {
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

  const scale = useTransform(x, [-300, 0, 300], [0.95, 1, 0.95]);

  const getExitAnimation = () => {
    if (swipeDirection === 'left') {
      return { y: 400, x: 0, rotate: 0, opacity: 0, scale: 0.85 };
    }
    if (swipeDirection === 'right') {
      return { y: -400, x: 0, rotate: 0, opacity: 0, scale: 0.85 };
    }
    return {};
  };

  // Story-like tap zones for mobile - handle both click and touch
  const handlePhotoTapLeft = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentPhotoIndex(prev => (prev > 0 ? prev - 1 : photos.length - 1));
  }, [photos.length]);

  const handlePhotoTapRight = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentPhotoIndex(prev => (prev < photos.length - 1 ? prev + 1 : 0));
  }, [photos.length]);

  // Image load error state
  const [imageError, setImageError] = useState(false);
  
  // Reset image error when photo changes
  useEffect(() => {
    setImageError(false);
  }, [currentPhotoIndex, item.id]);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'absolute inset-0 rounded-3xl overflow-hidden swipe-card-shadow',
        !isTop && 'pointer-events-none'
      )}
      style={{ 
        x: 0,
        scale: isTop ? 1 : 0.95,
        zIndex: isTop ? 10 : 5,
      }}
      initial={false}
      animate={swipeDirection ? getExitAnimation() : { x: 0, rotate: 0, opacity: 1, scale: isTop ? 1 : 0.95 }}
      transition={{ 
        type: 'spring', 
        damping: 25, 
        stiffness: 200,
        duration: 0.5
      }}
    >
      <div className="absolute inset-0 bg-card flex flex-col">
        {/* Photo Area with Navigation */}
        <div className="relative flex-1 min-h-0 bg-muted overflow-hidden">
          {photos.length > 0 && !imageError ? (
            <>
              <img
                src={photos[currentPhotoIndex]}
                alt={`${item.title} - Photo ${currentPhotoIndex + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
                loading="lazy"
                decoding="async"
                onError={() => setImageError(true)}
              />

              {/* Story-like progress bars at top */}
              {hasMultiplePhotos && isTop && (
                <div className="absolute top-3 left-3 right-3 flex gap-1 z-20">
                  {photos.map((_, index) => (
                    <div key={index} className="flex-1 h-1 rounded-full bg-white/30 overflow-hidden">
                      <div 
                        className={cn(
                          'h-full rounded-full transition-all duration-200',
                          index === currentPhotoIndex ? 'bg-white w-full' :
                          index < currentPhotoIndex ? 'bg-white/80 w-full' : 'w-0'
                        )}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Story-like tap zones - invisible overlay split in half */}
              {hasMultiplePhotos && isTop && (
                <div className="absolute inset-0 flex z-10" style={{ touchAction: 'manipulation' }}>
                  {/* Left tap zone - previous photo */}
                  <button
                    onClick={handlePhotoTapLeft}
                    onTouchEnd={handlePhotoTapLeft}
                    className="w-1/3 h-full bg-transparent cursor-pointer focus:outline-none active:bg-black/10 transition-colors"
                    aria-label="Previous photo"
                  />
                  {/* Center zone - no action, allows swipe through */}
                  <div className="w-1/3 h-full" />
                  {/* Right tap zone - next photo */}
                  <button
                    onClick={handlePhotoTapRight}
                    onTouchEnd={handlePhotoTapRight}
                    className="w-1/3 h-full bg-transparent cursor-pointer focus:outline-none active:bg-black/10 transition-colors"
                    aria-label="Next photo"
                  />
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

          {/* Like Overlay - Artistic Full Screen */}
          <AnimatePresence>
            {(showFeedbackOverlay === 'like' || swipeDirection === 'right') && isTop && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Radial gradient background */}
                <div className="absolute inset-0 bg-gradient-radial from-success/60 via-success/30 to-transparent" />
                
                {/* Animated stamp */}
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: -12 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                  className="relative"
                >
                  <div className="px-8 py-4 rounded-2xl bg-success border-4 border-white shadow-2xl flex items-center gap-3">
                    <ThumbsUp className="w-10 h-10 text-white fill-white/30" />
                    <span className="text-white font-black text-5xl tracking-widest uppercase">Like</span>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-success blur-xl opacity-50 -z-10" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nope Overlay - Artistic Full Screen */}
          <AnimatePresence>
            {(showFeedbackOverlay === 'nope' || swipeDirection === 'left') && isTop && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Radial gradient background */}
                <div className="absolute inset-0 bg-gradient-radial from-destructive/60 via-destructive/30 to-transparent" />
                
                {/* Animated stamp */}
                <motion.div
                  initial={{ scale: 0, rotate: 30 }}
                  animate={{ scale: 1, rotate: 12 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                  className="relative"
                >
                  <div className="px-8 py-4 rounded-2xl bg-destructive border-4 border-white shadow-2xl flex items-center gap-3">
                    <ThumbsDown className="w-10 h-10 text-white fill-white/30" />
                    <span className="text-white font-black text-5xl tracking-widest uppercase">Nope</span>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-destructive blur-xl opacity-50 -z-10" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Top Row - Rating + Condition + Info */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 z-20">
            <div className="flex flex-col gap-2">
              <CompactRating 
                rating={item.community_rating} 
                isNew={(item.total_interactions ?? 0) < 5}
              />
              {hasReciprocalBoost && (
                <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-2.5 py-1 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wide">Match+</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="backdrop-blur-md bg-card/95 text-foreground font-semibold px-2.5 py-1 shadow-lg text-xs">
                {CONDITION_LABELS[item.condition]}
              </Badge>
              {onInfoTap && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInfoTap();
                  }}
                  className="w-8 h-8 rounded-full bg-card/95 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-card transition-colors"
                >
                  <Info className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
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
