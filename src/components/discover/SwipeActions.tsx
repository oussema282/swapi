import { X, Undo2, Star, Heart, Send, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEntitlements } from '@/hooks/useEntitlements';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from 'react';

interface SwipeActionsProps {
  onDislike: () => void;
  onLike: () => void;
  onUndo: () => void;
  onSuperLike?: () => void;
  onInfo?: () => void;
  onUpgradeClick?: () => void;
  canSwipe: boolean;
  canUndo: boolean;
  isLoading?: boolean;
  className?: string;
}

export function SwipeActions({
  onDislike,
  onLike,
  onUndo,
  onSuperLike,
  onInfo,
  onUpgradeClick,
  canSwipe,
  canUndo,
  isLoading = false,
  className,
}: SwipeActionsProps) {
  const { isPro } = useEntitlements();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleUndoClick = () => {
    if (!isPro) {
      onUpgradeClick?.();
      return;
    }
    onUndo();
  };

  const handleSuperLikeClick = () => {
    if (!isPro) {
      onUpgradeClick?.();
      return;
    }
    onSuperLike?.();
  };

  const handleAction = (action: string, callback: () => void) => {
    if (!canSwipe || isLoading) return;
    setActiveButton(action);
    callback();
    setTimeout(() => setActiveButton(null), 300);
  };

  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {/* Undo Button - Small Gold */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              onClick={handleUndoClick}
              disabled={isPro ? !canUndo : false}
              className={cn(
                "relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200",
                "bg-white shadow-lg border border-gray-100",
                "hover:scale-110 active:scale-95",
                "disabled:opacity-40 disabled:hover:scale-100"
              )}
              whileTap={{ scale: 0.9 }}
              style={{
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
              }}
            >
              <Undo2 className="w-5 h-5 text-tinder-gold" />
              {!isPro && (
                <Crown className="w-3 h-3 absolute -top-0.5 -right-0.5 text-tinder-gold" />
              )}
            </motion.button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p className="text-xs">{isPro ? 'Undo last swipe' : 'Pro feature'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Dislike Button - Medium Red */}
      <motion.button
        onClick={() => handleAction('dislike', onDislike)}
        disabled={!canSwipe || isLoading}
        className={cn(
          "flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-200",
          "bg-white shadow-xl border border-gray-100",
          "hover:scale-110 active:scale-95",
          "disabled:opacity-40 disabled:hover:scale-100",
          activeButton === 'dislike' && "ring-4 ring-tinder-red/30"
        )}
        whileTap={{ scale: 0.85 }}
        style={{
          boxShadow: '0 6px 20px rgba(255, 68, 88, 0.25)',
        }}
      >
        <X 
          className={cn(
            "w-8 h-8 text-tinder-red transition-all",
            activeButton === 'dislike' && "scale-110"
          )} 
          strokeWidth={3}
        />
      </motion.button>

      {/* Super Like Button - Small Blue */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              onClick={handleSuperLikeClick}
              disabled={!canSwipe || isLoading}
              className={cn(
                "relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200",
                "bg-white shadow-lg border border-gray-100",
                "hover:scale-110 active:scale-95",
                "disabled:opacity-40 disabled:hover:scale-100"
              )}
              whileTap={{ scale: 0.9 }}
              style={{
                boxShadow: '0 4px 15px rgba(0, 122, 255, 0.3)',
              }}
            >
              <Star className="w-5 h-5 text-tinder-blue fill-tinder-blue" />
              {!isPro && (
                <Crown className="w-3 h-3 absolute -top-0.5 -right-0.5 text-tinder-gold" />
              )}
            </motion.button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p className="text-xs">{isPro ? 'Super Like' : 'Pro feature'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Like Button - Medium Green */}
      <motion.button
        onClick={() => handleAction('like', onLike)}
        disabled={!canSwipe || isLoading}
        className={cn(
          "flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-200",
          "bg-white shadow-xl border border-gray-100",
          "hover:scale-110 active:scale-95",
          "disabled:opacity-40 disabled:hover:scale-100",
          activeButton === 'like' && "ring-4 ring-tinder-green/30"
        )}
        whileTap={{ scale: 0.85 }}
        style={{
          boxShadow: '0 6px 20px rgba(0, 212, 106, 0.25)',
        }}
      >
        <Heart 
          className={cn(
            "w-8 h-8 text-tinder-green transition-all",
            activeButton === 'like' && "fill-tinder-green scale-110"
          )} 
          strokeWidth={2.5}
        />
      </motion.button>

      {/* Info/Send Button - Small Blue */}
      {onInfo && (
        <motion.button
          onClick={onInfo}
          disabled={!canSwipe || isLoading}
          className={cn(
            "flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200",
            "bg-white shadow-lg border border-gray-100",
            "hover:scale-110 active:scale-95",
            "disabled:opacity-40 disabled:hover:scale-100"
          )}
          whileTap={{ scale: 0.9 }}
          style={{
            boxShadow: '0 4px 15px rgba(0, 122, 255, 0.2)',
          }}
        >
          <Send className="w-5 h-5 text-tinder-blue" />
        </motion.button>
      )}
    </div>
  );
}
