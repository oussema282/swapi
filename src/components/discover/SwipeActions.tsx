import { ThumbsUp, ThumbsDown, Undo2, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
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
  onUpgradeClick,
  canSwipe,
  canUndo,
  isLoading = false,
  className,
}: SwipeActionsProps) {
  const { isPro } = useEntitlements();
  const [activeThumb, setActiveThumb] = useState<'up' | 'down' | null>(null);

  // Handler for undo - only allow for Pro users
  const handleUndoClick = () => {
    if (!isPro) {
      onUpgradeClick?.();
      return;
    }
    onUndo();
  };

  const handleDislike = () => {
    if (!canSwipe || isLoading) return;
    setActiveThumb('down');
    onDislike();
    setTimeout(() => setActiveThumb(null), 600);
  };

  const handleLike = () => {
    if (!canSwipe || isLoading) return;
    setActiveThumb('up');
    onLike();
    setTimeout(() => setActiveThumb(null), 600);
  };

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      {/* Main Action Bar */}
      <div className="relative flex items-center justify-center w-full max-w-[280px] mx-auto">
        {/* Glass morphism container */}
        <div className="flex items-center justify-between w-full bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl px-3 py-2 shadow-2xl">
          {/* Dislike Button */}
          <motion.button
            onClick={handleDislike}
            disabled={!canSwipe || isLoading}
            className={cn(
              "relative flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-300",
              "bg-gradient-to-br from-destructive/20 to-destructive/5 border-2 border-destructive/30",
              "hover:from-destructive hover:to-destructive/80 hover:border-destructive hover:shadow-lg hover:shadow-destructive/25",
              "disabled:opacity-40 disabled:hover:from-destructive/20 disabled:hover:to-destructive/5 disabled:cursor-not-allowed",
              "group"
            )}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {activeThumb === 'down' ? (
                <motion.div
                  key="active-down"
                  initial={{ scale: 0.5, rotate: 0 }}
                  animate={{ 
                    scale: [0.5, 1.3, 1.1], 
                    rotate: [0, -15, 0],
                    y: [0, 8, 0]
                  }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ThumbsDown className="w-8 h-8 text-destructive fill-destructive" />
                </motion.div>
              ) : (
                <motion.div
                  key="idle-down"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-0.5"
                >
                  <ThumbsDown className="w-6 h-6 text-destructive/70 group-hover:text-white transition-colors" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-destructive/60 group-hover:text-white/80 transition-colors">
                    Nope
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Center Undo Button */}
          <div className="flex flex-col items-center gap-0.5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    onClick={handleUndoClick}
                    disabled={isPro ? !canUndo : false}
                    className={cn(
                      "relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                      isPro 
                        ? "bg-muted/50 border border-border hover:bg-muted disabled:opacity-30"
                        : "bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20"
                    )}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Undo2 className="w-4 h-4 text-muted-foreground" />
                    {!isPro && (
                      <Crown className="w-3 h-3 absolute -top-1 -right-1 text-amber-500" />
                    )}
                  </motion.button>
                </TooltipTrigger>
                {!isPro && (
                  <TooltipContent side="top">
                    <p className="text-xs">Pro feature - Upgrade to undo</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
            <span className="text-[9px] text-muted-foreground/60 uppercase tracking-wider">Undo</span>
          </div>

          {/* Like Button */}
          <motion.button
            onClick={handleLike}
            disabled={!canSwipe || isLoading}
            className={cn(
              "relative flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-300",
              "bg-gradient-to-br from-success/20 to-success/5 border-2 border-success/30",
              "hover:from-success hover:to-success/80 hover:border-success hover:shadow-lg hover:shadow-success/25",
              "disabled:opacity-40 disabled:hover:from-success/20 disabled:hover:to-success/5 disabled:cursor-not-allowed",
              "group"
            )}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {activeThumb === 'up' ? (
                <motion.div
                  key="active-up"
                  initial={{ scale: 0.5, rotate: 0 }}
                  animate={{ 
                    scale: [0.5, 1.3, 1.1], 
                    rotate: [0, 15, 0],
                    y: [0, -8, 0]
                  }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ThumbsUp className="w-8 h-8 text-success fill-success" />
                </motion.div>
              ) : (
                <motion.div
                  key="idle-up"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-0.5"
                >
                  <ThumbsUp className="w-6 h-6 text-success/70 group-hover:text-white transition-colors" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-success/60 group-hover:text-white/80 transition-colors">
                    Like
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
