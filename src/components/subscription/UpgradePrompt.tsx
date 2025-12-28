import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface UpgradePromptProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feature: string;
  usedCount: number;
  limit: number;
  required?: boolean;
}

export function UpgradePrompt({ 
  open, 
  onOpenChange, 
  feature,
  usedCount,
  limit,
  required = false
}: UpgradePromptProps) {
  const navigate = useNavigate();

  const handleOpenChange = (newOpen: boolean) => {
    // If required, don't allow closing via backdrop click or escape
    if (required && !newOpen) return;
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-sm text-center">
        <DialogHeader>
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <Crown className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-xl">Daily Limit Reached</DialogTitle>
          <DialogDescription className="text-base">
            You've used {usedCount}/{limit} {feature} today. 
            Upgrade to Pro for unlimited access!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          <Button 
            className="w-full"
            onClick={() => {
              onOpenChange(false);
              navigate('/checkout');
            }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Upgrade to Pro
          </Button>
          {!required && (
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => onOpenChange(false)}
            >
              Maybe Later
            </Button>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Pro members get unlimited swipes, searches, deal invites, and more!
        </p>
      </DialogContent>
    </Dialog>
  );
}
