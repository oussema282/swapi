import { X, Heart, Undo2, Send, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEntitlements } from '@/hooks/useEntitlements';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SwipeActionsProps {
  onDislike: () => void;
  onLike: () => void;
  onUndo: () => void;
  onDealInvite?: () => void;
  onUpgradeClick?: () => void;
  canSwipe: boolean;
  canUndo: boolean;
  showDealInvite?: boolean;
  isLoading?: boolean;
  className?: string;
}

export function SwipeActions({
  onDislike,
  onLike,
  onUndo,
  onDealInvite,
  onUpgradeClick,
  canSwipe,
  canUndo,
  showDealInvite = false,
  isLoading = false,
  className,
}: SwipeActionsProps) {
  const { isPro } = useEntitlements();

  // Handler for undo - only allow for Pro users
  const handleUndoClick = () => {
    if (!isPro) {
      onUpgradeClick?.();
      return;
    }
    onUndo();
  };

  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      {/* Dislike Button */}
      <motion.div whileTap={{ scale: 0.9 }}>
        <Button
          size="lg"
          variant="outline"
          onClick={onDislike}
          disabled={!canSwipe || isLoading}
          className={cn(
            "w-14 h-14 rounded-full border-2 transition-all duration-200 shadow-lg",
            "border-destructive/30 bg-card hover:bg-destructive hover:border-destructive hover:text-destructive-foreground",
            "hover:shadow-xl hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
          )}
        >
          <X className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Undo Button - Pro Only */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={handleUndoClick}
                disabled={isPro ? !canUndo : false}
                className={cn(
                  "w-11 h-11 rounded-full border-2 transition-all duration-200 shadow-md relative",
                  isPro 
                    ? "border-muted-foreground/20 bg-card hover:bg-accent/10 disabled:opacity-30 disabled:hover:scale-100"
                    : "border-amber-500/30 bg-card hover:bg-amber-500/10 opacity-70"
                )}
              >
                <Undo2 className="w-4 h-4" />
                {!isPro && (
                  <Crown className="w-3 h-3 absolute -top-1 -right-1 text-amber-500" />
                )}
              </Button>
            </motion.div>
          </TooltipTrigger>
          {!isPro && (
            <TooltipContent side="top">
              <p className="text-xs">Pro feature - Upgrade to undo swipes</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>

      {/* Deal Invite Button - Optional */}
      {showDealInvite && (
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            size="lg"
            variant="outline"
            onClick={onDealInvite}
            disabled={!canSwipe || isLoading}
            className={cn(
              "w-11 h-11 rounded-full border-2 transition-all duration-200 shadow-md",
              "border-accent/30 bg-card hover:bg-accent hover:border-accent hover:text-accent-foreground",
              "disabled:opacity-40"
            )}
          >
            <Send className="w-4 h-4" />
          </Button>
        </motion.div>
      )}

      {/* Like Button */}
      <motion.div whileTap={{ scale: 0.9 }}>
        <Button
          size="lg"
          variant="outline"
          onClick={onLike}
          disabled={!canSwipe || isLoading}
          className={cn(
            "w-14 h-14 rounded-full border-2 transition-all duration-200 shadow-lg",
            "border-success/30 bg-card hover:bg-success hover:border-success hover:text-success-foreground",
            "hover:shadow-xl hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
          )}
        >
          <Heart className="w-6 h-6" />
        </Button>
      </motion.div>
    </div>
  );
}
