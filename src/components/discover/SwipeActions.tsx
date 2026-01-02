import { X, Heart, Undo2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SwipeActionsProps {
  onDislike: () => void;
  onLike: () => void;
  onUndo: () => void;
  onDealInvite?: () => void;
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
  canSwipe,
  canUndo,
  showDealInvite = false,
  isLoading = false,
  className,
}: SwipeActionsProps) {
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

      {/* Undo Button - Smaller */}
      <motion.div whileTap={{ scale: 0.9 }}>
        <Button
          size="lg"
          variant="outline"
          onClick={onUndo}
          disabled={!canUndo}
          className={cn(
            "w-11 h-11 rounded-full border-2 transition-all duration-200 shadow-md",
            "border-muted-foreground/20 bg-card hover:bg-accent/10",
            "disabled:opacity-30 disabled:hover:scale-100"
          )}
        >
          <Undo2 className="w-4 h-4" />
        </Button>
      </motion.div>

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
