import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Item, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { MapPin, Send, Package, Star, DollarSign, ArrowLeftRight, User } from 'lucide-react';
import { formatDistance, calculateDistance } from '@/hooks/useLocation';
import { ReportButton } from '@/components/report/ReportButton';
import { VerifiedName } from '@/components/ui/verified-name';
import { useNavigate } from 'react-router-dom';

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

  if (!item) return null;

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
          {/* Photo */}
          {item.photos?.length > 0 && (
            <div className="w-full h-48 rounded-2xl overflow-hidden bg-muted">
              <img
                src={item.photos[0]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
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
