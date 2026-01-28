import { motion } from 'framer-motion';
import { Package, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { VerifiedName } from '@/components/ui/verified-name';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';
import { MatchWithItems } from '@/hooks/useMatches';

interface MatchCardProps {
  match: MatchWithItems;
  index: number;
  onClick: () => void;
  hasUnread?: boolean;
  onMyItemTap?: () => void;
  onTheirItemTap?: () => void;
}

export function MatchCard({ match, index, onClick, hasUnread, onMyItemTap, onTheirItemTap }: MatchCardProps) {
  const lastMessagePreview = match.last_message?.content || 'Start a conversation...';
  const lastActivityTime = match.last_message?.created_at || match.created_at;
  
  // Determine confirmation status
  const isCompleted = match.is_completed;
  const pendingMyConfirmation = match.confirmed_by_other && !match.confirmed_by_me;
  const waitingForOther = match.confirmed_by_me && !match.confirmed_by_other;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className={cn(
          "p-3 cursor-pointer transition-all duration-200 border-border/50",
          "hover:shadow-md hover:border-primary/20 active:bg-muted/50",
          hasUnread && "bg-primary/5 border-primary/30",
          pendingMyConfirmation && "border-orange-400/50 bg-orange-500/5"
        )}
        onClick={onClick}
      >
        <div className="flex gap-3">
          {/* Swap Visual */}
          <div className="relative flex-shrink-0">
            <div className="flex items-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onMyItemTap?.();
                }}
                className="w-11 h-11 rounded-lg overflow-hidden bg-muted ring-2 ring-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {match.my_item?.photos?.[0] ? (
                  <img src={match.my_item.photos[0]} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </button>
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center -mx-1.5 z-10">
                <ArrowLeftRight className="w-2.5 h-2.5 text-primary" />
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onTheirItemTap?.();
                }}
                className="w-11 h-11 rounded-lg overflow-hidden bg-muted ring-2 ring-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {match.their_item?.photos?.[0] ? (
                  <img src={match.their_item.photos[0]} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </button>
            </div>
            
            {/* Pending confirmation indicator */}
            {pendingMyConfirmation && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <Avatar className="w-4 h-4">
                  <AvatarImage src={match.other_user_profile?.avatar_url || undefined} />
                  <AvatarFallback className="text-[8px]">
                    {match.other_user_profile?.display_name?.charAt(0) || '?'}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm">
                  <VerifiedName 
                    name={match.other_user_profile?.display_name || 'User'} 
                    isPro={match.other_user_profile?.is_pro}
                    badgeClassName="w-3.5 h-3.5"
                    userId={match.other_user_id}
                    clickable
                  />
                </span>
              </div>
              
              {/* Status Chip */}
              {isCompleted ? (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full flex-shrink-0 bg-green-500/10 text-green-500 flex items-center gap-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  Done
                </span>
              ) : pendingMyConfirmation ? (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full flex-shrink-0 bg-orange-500/10 text-orange-500">
                  Confirm
                </span>
              ) : waitingForOther ? (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full flex-shrink-0 bg-muted text-muted-foreground">
                  Waiting
                </span>
              ) : (
                <span className={cn(
                  "text-[10px] font-medium px-1.5 py-0.5 rounded-full flex-shrink-0",
                  hasUnread 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                )}>
                  {hasUnread ? 'New' : formatDistanceToNow(new Date(lastActivityTime), { addSuffix: false })}
                </span>
              )}
            </div>
            
            <p className="text-xs text-muted-foreground truncate mb-0.5">
              {match.their_item?.title}
            </p>
            
            <p className={cn(
              "text-sm truncate",
              hasUnread ? "font-bold text-foreground" : "font-normal text-muted-foreground"
            )}>
              {lastMessagePreview}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
