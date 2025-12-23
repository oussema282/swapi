import { motion } from 'framer-motion';
import { Package, ArrowLeftRight, MessageCircle, Clock } from 'lucide-react';
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
  
  const getStatusText = () => {
    if (!match.last_message) return 'New match';
    if (hasUnread) return 'Unread';
    return 'In discussion';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Card
        className={cn(
          "p-4 cursor-pointer transition-all duration-200 border-border/50",
          "hover:shadow-lg hover:border-primary/20",
          hasUnread && "bg-primary/5 border-primary/30"
        )}
        onClick={onClick}
      >
        <div className="flex gap-4">
          {/* Swap Visual */}
          <div className="relative flex-shrink-0">
            <div className="flex items-center gap-1">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted ring-2 ring-background shadow-sm">
                {match.my_item?.photos?.[0] ? (
                  <img src={match.my_item.photos[0]} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center -mx-2 z-10">
                <ArrowLeftRight className="w-3 h-3 text-primary" />
              </div>
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted ring-2 ring-background shadow-sm">
                {match.their_item?.photos?.[0] ? (
                  <img src={match.their_item.photos[0]} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex items-center gap-2 min-w-0">
                <Avatar className="w-5 h-5">
                  <AvatarImage src={match.other_user_profile?.avatar_url || undefined} />
                  <AvatarFallback className="text-[10px]">
                    {match.other_user_profile?.display_name?.charAt(0) || '?'}
                  </AvatarFallback>
                </Avatar>
                <span className="font-semibold text-sm truncate">
                  {match.other_user_profile?.display_name || 'Unknown'}
                </span>
                {hasUnread && (
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                )}
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatDistanceToNow(new Date(lastActivityTime), { addSuffix: false })}
              </span>
            </div>
            
            <p className="text-sm font-medium text-foreground/90 truncate mb-0.5">
              {match.their_item?.title}
            </p>
            
            <p className={cn(
              "text-sm truncate",
              hasUnread ? "text-foreground font-medium" : "text-muted-foreground"
            )}>
              {lastMessagePreview}
            </p>
          </div>

          {/* Chat Arrow */}
          <div className="flex items-center">
            <MessageCircle className={cn(
              "w-5 h-5",
              hasUnread ? "text-primary" : "text-muted-foreground/50"
            )} />
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
          <span className={cn(
            "text-xs font-medium px-2 py-1 rounded-full",
            hasUnread 
              ? "bg-primary/10 text-primary" 
              : "bg-muted text-muted-foreground"
          )}>
            {getStatusText()}
          </span>
          <span className="text-xs text-muted-foreground">
            Tap to continue
          </span>
        </div>
      </Card>
    </motion.div>
  );
}
