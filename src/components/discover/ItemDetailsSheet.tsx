import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Item, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { MapPin, Send, Package, Star, DollarSign, ArrowLeftRight, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { formatDistance, calculateDistance } from '@/hooks/useLocation';
import { ReportButton } from '@/components/report/ReportButton';
import { VerifiedName } from '@/components/ui/verified-name';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ItemWithOwner extends Item {
  owner_display_name: string;
  owner_avatar_url: string | null;
  owner_is_pro?: boolean;
  user_id: string;
  community_rating?: number;
  total_interactions?: number;
}

interface ItemDetailsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: ItemWithOwner | null;
  userLocation?: { latitude: number | null; longitude: number | null };
  onInviteDeal?: () => void;
  onViewOnMap?: () => void;
}

export function ItemDetailsSheet({
  open,
  onOpenChange,
  item,
  userLocation,
  onInviteDeal,
  onViewOnMap,
}: ItemDetailsSheetProps) {
  const navigate = useNavigate();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  if (!item) return null;

  const photos = item.photos || [];
  const hasMultiplePhotos = photos.length > 1;

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex(prev => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex(prev => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  const distanceKm = userLocation?.latitude && userLocation?.longitude && item.latitude && item.longitude
    ? calculateDistance(userLocation.latitude, userLocation.longitude, item.latitude, item.longitude)
    : null;

  const handleViewProfile = () => {
    onOpenChange(false);
    navigate(`/user/${item.user_id}`);
  };

  const handleViewOnMap = () => {
    if (item.latitude && item.longitude) {
      onOpenChange(false);
      navigate(`/map?focusItemId=${item.id}`);
    } else if (onViewOnMap) {
      onViewOnMap();
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-3xl h-[80vh] overflow-y-auto">
        <SheetHeader className="text-left pb-4 border-b border-border/50">
          <SheetTitle className="text-2xl font-display font-bold">{item.title}</SheetTitle>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Photo Gallery with Navigation */}
          {photos.length > 0 && (
            <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-muted">
              <img
                src={photos[currentPhotoIndex]}
                alt={`${item.title} - Photo ${currentPhotoIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Photo indicators */}
              {hasMultiplePhotos && (
                <div className="absolute top-3 left-3 right-3 flex gap-1.5 z-10">
                  {photos.map((_, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "flex-1 h-1 rounded-full transition-colors",
                        index <= currentPhotoIndex ? "bg-card" : "bg-foreground/30"
                      )}
                    />
                  ))}
                </div>
              )}

              {/* Navigation arrows */}
              {hasMultiplePhotos && (
                <>
                  {/* Left arrow */}
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/70 backdrop-blur-sm flex items-center justify-center hover:bg-card/90 active:scale-95 transition-all shadow-sm z-10"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  
                  {/* Right arrow */}
                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/70 backdrop-blur-sm flex items-center justify-center hover:bg-card/90 active:scale-95 transition-all shadow-sm z-10"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>

                  {/* Photo counter */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-foreground/60 backdrop-blur-sm rounded-full z-10">
                    <span className="text-xs font-medium text-card">
                      {currentPhotoIndex + 1} / {photos.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Category</p>
                <p className="font-medium">{CATEGORY_LABELS[item.category]}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Condition</p>
                <p className="font-medium">{CONDITION_LABELS[item.condition]}</p>
              </div>
            </div>

            {(item.value_min !== undefined && item.value_min !== null) && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <div className="w-10 h-10 rounded-full bg-price/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-price" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Value Range</p>
                  <p className="font-medium">
                    ${item.value_min}{item.value_max ? ` - $${item.value_max}` : '+'}
                  </p>
                </div>
              </div>
            )}

            {distanceKm !== null && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Distance</p>
                  <p className="font-medium">{formatDistance(distanceKm)}</p>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          {item.description && (
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Description
              </h4>
              <p className="text-foreground leading-relaxed">{item.description}</p>
            </div>
          )}

          {/* Swap Preferences */}
          {item.swap_preferences && item.swap_preferences.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                <ArrowLeftRight className="w-4 h-4" />
                Looking to swap for
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.swap_preferences.map((pref) => (
                  <Badge key={pref} variant="secondary" className="rounded-full">
                    {CATEGORY_LABELS[pref]}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Owner Info */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              Listed by
            </h4>
            <button
              onClick={handleViewProfile}
              className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors w-full text-left"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold ring-2 ring-border/50">
                {item.owner_avatar_url ? (
                  <img
                    src={item.owner_avatar_url}
                    alt={item.owner_display_name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  item.owner_display_name.charAt(0).toUpperCase()
                )}
              </div>
              <div className="flex-1">
                <VerifiedName
                  name={item.owner_display_name}
                  isPro={item.owner_is_pro}
                  className="font-semibold"
                />
                <p className="text-sm text-muted-foreground">View profile</p>
              </div>
              <User className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-border/50">
            {item.latitude && item.longitude && (
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleViewOnMap}
              >
                <MapPin className="w-4 h-4 mr-2" />
                View on Map
              </Button>
            )}
            {onInviteDeal && (
              <Button className="flex-1 gradient-primary" onClick={onInviteDeal}>
                <Send className="w-4 h-4 mr-2" />
                Invite to Deal
              </Button>
            )}
            <ReportButton reportType="item" targetId={item.id} variant="icon" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
