import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Item, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { cn } from '@/lib/utils';
import { Package, MapPin, Home, ChevronUp, Star } from 'lucide-react';
import { DescriptionModal } from './DescriptionModal';
import { formatDistance, calculateDistance } from '@/hooks/useLocation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SwipeCardProps {
  item: Item & { 
    owner_display_name: string; 
    owner_avatar_url: string | null;
    owner_is_pro?: boolean;
    owner_last_seen?: string | null;
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
  onInfoTap?: () => void;
  showFeedbackOverlay?: 'like' | 'nope' | null;
}

// Helper to determine user activity status
function getUserActivityStatus(lastSeen: string | null | undefined): 'active' | 'recent' | null {
  if (!lastSeen) return null;
  
  const lastSeenDate = new Date(lastSeen);
  const now = new Date();
  const diffMs = now.getTime() - lastSeenDate.getTime();
  const diffMinutes = diffMs / (1000 * 60);
  const diffHours = diffMs / (1000 * 60 * 60);
  
  // Active: within last 15 minutes
  if (diffMinutes <= 15) return 'active';
  
  // Recently active: within last 24 hours
  if (diffHours <= 24) return 'recent';
  
  // More than 1 day: show nothing
  return null;
}

export function SwipeCard({ item, isTop, onSwipeComplete, swipeDirection, userLocation, onInfoTap, showFeedbackOverlay }: SwipeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = item.photos || [];
  const hasMultiplePhotos = photos.length > 1;

  // Reset photo index when item changes
  useEffect(() => {
    setCurrentPhotoIndex(0);
  }, [item.id]);

  // Calculate distance to item
  const distanceKm = userLocation?.latitude && userLocation?.longitude && item.latitude && item.longitude
    ? calculateDistance(userLocation.latitude, userLocation.longitude, item.latitude, item.longitude)
    : null;

  // Get user activity status
  const activityStatus = getUserActivityStatus(item.owner_last_seen);

  const getExitAnimation = () => {
    if (swipeDirection === 'left') {
      return { x: -400, rotate: -15, opacity: 0, scale: 0.9 };
    }
    if (swipeDirection === 'right') {
      return { x: 400, rotate: 15, opacity: 0, scale: 0.9 };
    }
    return {};
  };

  // Story-like tap zones for mobile
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
  
  useEffect(() => {
    setImageError(false);
  }, [currentPhotoIndex, item.id]);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'absolute inset-0 rounded-[24px] overflow-hidden',
        !isTop && 'pointer-events-none'
      )}
      style={{ 
        zIndex: isTop ? 10 : 5,
        boxShadow: isTop 
          ? '0px 8px 24px rgba(0, 0, 0, 0.08), 0px 16px 48px rgba(0, 0, 0, 0.08)'
          : '0px 4px 16px rgba(0, 0, 0, 0.06)',
      }}
      initial={false}
      animate={swipeDirection ? getExitAnimation() : { x: 0, rotate: 0, opacity: 1, scale: isTop ? 1 : 0.95 }}
      transition={{ 
        type: 'spring', 
        damping: 25, 
        stiffness: 200,
        duration: 0.4
      }}
    >
      <div className="absolute inset-0 bg-card">
        {/* Full Photo Area */}
        <div className="absolute inset-0 bg-surface">
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

              {/* Soft Neo-Minimal segmented progress bars */}
              {hasMultiplePhotos && isTop && (
                <div className="absolute top-3 left-3 right-3 flex gap-1.5 z-20">
                  {photos.map((_, index) => (
                    <div key={index} className="flex-1 h-1 rounded-full bg-foreground/20 overflow-hidden">
                      <motion.div 
                        className={cn(
                          'h-full rounded-full bg-card',
                          index <= currentPhotoIndex ? 'w-full' : 'w-0'
                        )}
                        initial={false}
                        animate={{ width: index <= currentPhotoIndex ? '100%' : '0%' }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Rating Badge - Top Left - Soft style */}
              {isTop && item.community_rating !== undefined && item.community_rating > 0 && (
                <div className="absolute top-10 left-3 z-20 flex items-center gap-1 px-2.5 py-1.5 bg-card/90 backdrop-blur-sm rounded-xl shadow-soft">
                  <Star className="w-3.5 h-3.5 text-tinder-gold fill-tinder-gold" />
                  <span className="text-xs font-semibold text-foreground">{item.community_rating.toFixed(1)}</span>
                </div>
              )}

              {/* Condition Badge - Top Right - Soft style */}
              {isTop && item.condition && (
                <div className="absolute top-10 right-3 z-20 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-xl shadow-soft">
                  <span className="text-xs font-semibold text-foreground">{CONDITION_LABELS[item.condition]}</span>
                </div>
              )}

              {/* Photo tap zones */}
              {hasMultiplePhotos && isTop && (
                <div className="absolute inset-0 flex z-10" style={{ touchAction: 'manipulation' }}>
                  <button
                    onClick={handlePhotoTapLeft}
                    onTouchEnd={handlePhotoTapLeft}
                    className="w-1/3 h-full bg-transparent cursor-pointer focus:outline-none"
                    aria-label="Previous photo"
                  />
                  <div className="w-1/3 h-full" />
                  <button
                    onClick={handlePhotoTapRight}
                    onTouchEnd={handlePhotoTapRight}
                    className="w-1/3 h-full bg-transparent cursor-pointer focus:outline-none"
                    aria-label="Next photo"
                  />
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-muted">
              <Package className="w-24 h-24 text-muted-foreground/20" />
            </div>
          )}

          {/* Bottom gradient - softer */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent pointer-events-none" />

          {/* LIKE Overlay - Soft Neo-Minimal style */}
          <AnimatePresence>
            {(showFeedbackOverlay === 'like' || swipeDirection === 'right') && isTop && (
              <motion.div
                className="absolute top-24 left-6 z-30"
                initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ type: 'spring', damping: 15, stiffness: 300 }}
              >
                <div className="px-5 py-2.5 bg-accent rounded-2xl shadow-lg">
                  <span className="text-accent-foreground font-bold text-3xl tracking-wide">LIKE</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* NOPE Overlay - Soft Neo-Minimal style */}
          <AnimatePresence>
            {(showFeedbackOverlay === 'nope' || swipeDirection === 'left') && isTop && (
              <motion.div
                className="absolute top-24 right-6 z-30"
                initial={{ opacity: 0, scale: 0.5, rotate: 30 }}
                animate={{ opacity: 1, scale: 1, rotate: 12 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ type: 'spring', damping: 15, stiffness: 300 }}
              >
                <div className="px-5 py-2.5 bg-destructive rounded-2xl shadow-lg">
                  <span className="text-destructive-foreground font-bold text-3xl tracking-wide">NOPE</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Info Section - Soft Neo-Minimal style */}
        <div className="absolute inset-x-0 bottom-0 p-5 pb-24 z-10">
          {/* Owner Info Row */}
          <div className="flex items-center gap-2 mb-3">
            <Avatar className="w-8 h-8 ring-2 ring-card">
              <AvatarImage src={item.owner_avatar_url || undefined} />
              <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                {item.owner_display_name?.charAt(0).toUpperCase() || '?'}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-card">{item.owner_display_name}</span>
            
            {/* Activity Status Badge */}
            {activityStatus === 'active' && (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-accent/90 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-pulse" />
                <span className="text-[10px] font-semibold text-accent-foreground">Active</span>
              </div>
            )}
            {activityStatus === 'recent' && (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-tinder-gold/90 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                <span className="text-[10px] font-semibold text-foreground">Recently Active</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-card leading-tight mb-2 drop-shadow-sm">
            {item.title}
          </h3>

          {/* Category, Distance & Price Row */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-card/20 backdrop-blur-sm rounded-xl">
              <Home className="w-3.5 h-3.5 text-card" />
              <span className="text-xs font-medium text-card">{CATEGORY_LABELS[item.category]}</span>
            </div>
            {distanceKm !== null && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-card/20 backdrop-blur-sm rounded-xl">
                <MapPin className="w-3.5 h-3.5 text-card" />
                <span className="text-xs font-medium text-card">{formatDistance(distanceKm)}</span>
              </div>
            )}
            {(item.value_min !== undefined && item.value_min !== null) && (
              <div className="px-2.5 py-1 bg-accent rounded-xl">
                <span className="text-xs font-semibold text-accent-foreground">
                  ${item.value_min}{item.value_max ? ` - $${item.value_max}` : '+'}
                </span>
              </div>
            )}
          </div>

          {/* Info expand button */}
          {onInfoTap && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onInfoTap();
              }}
              className="absolute bottom-20 right-5 w-10 h-10 rounded-full bg-card/30 backdrop-blur-sm flex items-center justify-center hover:bg-card/50 transition-colors shadow-soft"
              aria-label="View details"
            >
              <ChevronUp className="w-5 h-5 text-card" />
            </button>
          )}
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
