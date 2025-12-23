import { motion } from 'framer-motion';
import { Package, ArrowLeftRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';
import { MatchWithItems } from '@/hooks/useMatches';

interface MatchCardProps {
  match: MatchWithItems;
  index: number;
  onClick: () => void;
  hasUnread?: boolean;
}

export function MatchCard({ match, index, onClick, hasUnread }: MatchCardProps) {
  const lastMessagePreview = match.last_message?.content || 'Start a conversation...';
  const lastActivityTime = match.last_message?.created_at || match.created_at;

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
          hasUnread && "bg-primary/5 border-primary/30"
        )}
        onClick={onClick}
      >
        <div className="flex gap-3">
          {/* Swap Visual */}
          <div className="relative flex-shrink-0">
            <div className="flex items-center">
              <div className="w-11 h-11 rounded-lg overflow-hidden bg-muted ring-2 ring-background shadow-sm">
                {match.my_item?.photos?.[0] ? (
                  <img src={match.my_item.photos[0]} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center -mx-1.5 z-10">
                <ArrowLeftRight className="w-2.5 h-2.5 text-primary" />
              </div>
              <div className="w-11 h-11 rounded-lg overflow-hidden bg-muted ring-2 ring-background shadow-sm">
                {match.their_item?.photos?.[0] ? (
                  <img src={match.their_item.photos[0]} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>
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
                <span className="font-medium text-sm truncate">
                  {match.other_user_profile?.display_name || 'Unknown'}
                </span>
              </div>
              
              {/* Status Chip */}
              <span className={cn(
                "text-[10px] font-medium px-1.5 py-0.5 rounded-full flex-shrink-0",
                hasUnread 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              )}>
                {hasUnread ? 'New' : formatDistanceToNow(new Date(lastActivityTime), { addSuffix: false })}
              </span>
            </div>
            
            <p className="text-xs text-muted-foreground truncate mb-0.5">
              {match.their_item?.title}
            </p>
            
            <p className={cn(
              "text-sm truncate",
              hasUnread ? "text-foreground font-medium" : "text-muted-foreground"
            )}>
              {lastMessagePreview}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
