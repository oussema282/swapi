import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Zap, MapPin, Search, Package, MessageSquare } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { FEATURE_UPGRADES, FeatureType } from '@/hooks/useSubscription';

interface FeatureUpgradeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feature: FeatureType;
  usedCount: number;
  limit: number;
}

const featureIcons: Record<FeatureType, typeof Zap> = {
  swipes: Zap,
  deal_invites: MessageSquare,
  map: MapPin,
  search: Search,
  items: Package,
};

const featureNames: Record<FeatureType, string> = {
  swipes: 'swipes',
  deal_invites: 'deal invites',
  map: 'map views',
  search: 'searches',
  items: 'item slots',
};

export function FeatureUpgradeModal({ 
  open, 
  onOpenChange, 
  feature,
  usedCount,
  limit,
}: FeatureUpgradeModalProps) {
  const navigate = useNavigate();
  const Icon = featureIcons[feature];
  const upgrade = FEATURE_UPGRADES[feature];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-xl text-center">Daily Limit Reached</DialogTitle>
          <DialogDescription className="text-center text-base">
            You've used {usedCount}/{limit} {featureNames[feature]} today.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {/* Feature-specific upgrade */}
          <div className="p-4 rounded-lg border-2 border-border bg-muted/30">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{upgrade.name}</span>
              <span className="text-primary font-bold">${upgrade.price}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Get +{upgrade.bonus} extra {featureNames[feature]}
            </p>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => {
                onOpenChange(false);
                navigate(`/checkout?feature=${feature}`);
              }}
            >
              <Icon className="w-4 h-4 mr-2" />
              Buy {upgrade.name}
            </Button>
          </div>

          {/* Pro upgrade */}
          <div className="p-4 rounded-lg border-2 border-primary/30 bg-primary/5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium flex items-center gap-2">
                <Crown className="w-4 h-4 text-primary" />
                Valexo Pro
              </span>
              <span className="text-primary font-bold">$9.99/mo</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Unlimited everything + verified badge
            </p>
            <Button 
              className="w-full"
              onClick={() => {
                onOpenChange(false);
                navigate('/checkout');
              }}
            >
              <Crown className="w-4 h-4 mr-2" />
              Upgrade to Pro
            </Button>
          </div>
        </div>

        <Button 
          variant="ghost" 
          className="w-full mt-2"
          onClick={() => onOpenChange(false)}
        >
          Maybe Later
        </Button>
      </DialogContent>
    </Dialog>
  );
}