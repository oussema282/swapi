import { X, Heart, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
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
  onDealInvite?: () => void;
  canSwipe: boolean;
  isLoading?: boolean;
  className?: string;
}

export function SwipeActions({
  onDislike,
  onLike,
  onDealInvite,
  canSwipe,
  isLoading = false,
  className,
}: SwipeActionsProps) {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleAction = (action: string, callback: () => void) => {
    if (!canSwipe || isLoading) return;
    setActiveButton(action);
    callback();
    setTimeout(() => setActiveButton(null), 300);
  };

  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {/* Dislike Button - Medium Red */}
      <motion.button
        onClick={() => handleAction('dislike', onDislike)}
        disabled={!canSwipe || isLoading}
        className={cn(
          "flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-200",
          "bg-white/50 backdrop-blur-md shadow-xl border border-white/20",
          "hover:scale-110 hover:bg-white/60 active:scale-95",
          "disabled:opacity-40 disabled:hover:scale-100",
          activeButton === 'dislike' && "ring-4 ring-tinder-red/30"
        )}
        whileTap={{ scale: 0.85 }}
      >
        <X 
          className={cn(
            "w-8 h-8 text-tinder-red transition-all",
            activeButton === 'dislike' && "scale-110"
          )} 
          strokeWidth={3}
        />
      </motion.button>

      {/* Deal Invite Button - Medium Blue (between dislike and like) */}
      {onDealInvite && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                onClick={() => handleAction('deal', onDealInvite)}
                disabled={!canSwipe || isLoading}
                className={cn(
                  "flex items-center justify-center w-[52px] h-[52px] rounded-full transition-all duration-200",
                  "bg-white/50 backdrop-blur-md shadow-lg border border-white/20",
                  "hover:scale-110 hover:bg-white/60 active:scale-95",
                  "disabled:opacity-40 disabled:hover:scale-100",
                  activeButton === 'deal' && "ring-4 ring-tinder-blue/30"
                )}
                whileTap={{ scale: 0.9 }}
              >
                <Send className={cn(
                  "w-6 h-6 text-tinder-blue transition-all",
                  activeButton === 'deal' && "scale-110"
                )} />
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-xs">Send Deal Invite</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {/* Like Button - Medium Green */}
      <motion.button
        onClick={() => handleAction('like', onLike)}
        disabled={!canSwipe || isLoading}
        className={cn(
          "flex items-center justify-center w-[60px] h-[60px] rounded-full transition-all duration-200",
          "bg-white/50 backdrop-blur-md shadow-xl border border-white/20",
          "hover:scale-110 hover:bg-white/60 active:scale-95",
          "disabled:opacity-40 disabled:hover:scale-100",
          activeButton === 'like' && "ring-4 ring-tinder-green/30"
        )}
        whileTap={{ scale: 0.85 }}
      >
        <Heart 
          className={cn(
            "w-8 h-8 text-tinder-green transition-all",
            activeButton === 'like' && "fill-tinder-green scale-110"
          )} 
          strokeWidth={2.5}
        />
      </motion.button>
    </div>
  );
}
