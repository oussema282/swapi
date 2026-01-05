import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Sparkles, Zap, MapPin, Search, Package, MessageSquare } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { FEATURE_UPGRADES, FeatureType } from '@/hooks/useSubscription';

interface UpgradePromptProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feature: string;
  featureType?: FeatureType;
  usedCount: number;
  limit: number;
  required?: boolean;
}

const featureIcons: Record<FeatureType, typeof Zap> = {
  swipes: Zap,
  deal_invites: MessageSquare,
  map: MapPin,
  search: Search,
  items: Package,
};

export function UpgradePrompt({ 
  open, 
  onOpenChange, 
  feature,
  featureType,
  usedCount,
  limit,
  required = false
}: UpgradePromptProps) {
  const navigate = useNavigate();
  const upgrade = featureType ? FEATURE_UPGRADES[featureType] : null;
  const Icon = featureType ? featureIcons[featureType] : Crown;

  const handleOpenChange = (newOpen: boolean) => {
    if (required && !newOpen) {
      // Redirect to discover page when closing required prompt
      navigate('/discover');
      onOpenChange(false);
      return;
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-sm text-center">
        <DialogHeader>
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-xl">Daily Limit Reached</DialogTitle>
          <DialogDescription className="text-base">
            You've used {usedCount}/{limit} {feature} today. 
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {/* Feature-specific upgrade option */}
          {upgrade && featureType && (
            <div className="p-3 rounded-lg border bg-muted/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{upgrade.name}</span>
                <span className="text-primary font-bold">${upgrade.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                +{upgrade.bonus} extra {feature}
              </p>
              <Button 
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  onOpenChange(false);
                  navigate(`/checkout?feature=${featureType}`);
                }}
              >
                Buy Now
              </Button>
            </div>
          )}

          {/* Pro upgrade */}
          <Button 
            className="w-full"
            onClick={() => {
              onOpenChange(false);
              navigate('/checkout');
            }}
          >
            <Crown className="w-4 h-4 mr-2" />
            Upgrade to Pro - Unlimited
          </Button>

          {!required && (
            <Button 
              variant="ghost" 
              className="w-full"
              onClick={() => onOpenChange(false)}
            >
              Maybe Later
            </Button>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-2">
          Pro members get unlimited swipes, searches, map views, and more!
        </p>
      </DialogContent>
    </Dialog>
  );
}
