import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { MatchWithItems } from '@/hooks/useMatches';

interface ConversationCardProps {
  match: MatchWithItems;
  index: number;
  onClick: () => void;
  hasUnread?: boolean;
  onItemTap?: () => void;
}

// Generate a tag based on match metadata
function getMatchTag(match: MatchWithItems): { text: string; color: string } | null {
  // Value balanced - if both items have similar value range
  const myMin = match.my_item?.value_min || 0;
  const myMax = match.my_item?.value_max || myMin;
  const theirMin = match.their_item?.value_min || 0;
  const theirMax = match.their_item?.value_max || theirMin;
  
  const myAvg = (myMin + myMax) / 2;
  const theirAvg = (theirMin + theirMax) / 2;
  
  if (myAvg > 0 && theirAvg > 0) {
    const ratio = Math.min(myAvg, theirAvg) / Math.max(myAvg, theirAvg);
    if (ratio >= 0.7) {
      return { text: 'Value balanced', color: 'bg-accent/10 text-accent' };
    }
    if (ratio >= 0.5) {
      return { text: 'Great trade potential!', color: 'bg-primary/10 text-primary' };
    }
  }
  
  // Fast responder check - if last message was recent
  if (match.last_message?.created_at) {
    const lastMessageTime = new Date(match.last_message.created_at);
    const hoursSinceMessage = (Date.now() - lastMessageTime.getTime()) / (1000 * 60 * 60);
    if (hoursSinceMessage < 1) {
      return { text: 'Fast responder', color: 'bg-tinder-blue/10 text-tinder-blue' };
    }
  }
  
  return null;
}

export function ConversationCard({ 
  match, 
  index, 
  onClick, 
  hasUnread = false,
  onItemTap 
}: ConversationCardProps) {
  const ownerName = match.other_user_profile?.display_name || 'User';
  const ownerAvatar = match.other_user_profile?.avatar_url;
  const itemPhoto = match.their_item?.photos?.[0];
  const lastMessage = match.last_message?.content || 'Start a conversation...';
  const lastActivityTime = match.last_message?.created_at || match.created_at;
  const tag = getMatchTag(match);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <button
        onClick={onClick}
        className={cn(
          'w-full h-[78px] rounded-[18px] p-3 flex items-center gap-3',
          'bg-card shadow-card border border-transparent',
          'transition-all duration-200',
          'hover:border-primary/20 hover:shadow-lg',
          hasUnread && 'bg-primary/5 border-primary/20'
        )}
      >
        {/* Item Thumbnail with Avatar Overlay */}
        <div 
          className="relative flex-shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            onItemTap?.();
          }}
        >
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted">
            {itemPhoto ? (
              <img 
                src={itemPhoto} 
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Package className="w-5 h-5 text-muted-foreground/30" />
              </div>
            )}
          </div>
          {/* Avatar Overlay */}
          <div className="absolute -bottom-1 -right-1 rounded-full ring-2 ring-card">
            <Avatar className="w-5 h-5">
              <AvatarImage src={ownerAvatar || undefined} />
              <AvatarFallback className="text-[8px] bg-secondary text-secondary-foreground">
                {ownerName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center justify-between gap-2">
            <h4 className={cn(
              'text-sm truncate',
              hasUnread ? 'font-bold text-foreground' : 'font-semibold text-foreground'
            )}>
              {ownerName}
            </h4>
            <span className="text-[10px] text-muted-foreground flex-shrink-0">
              {formatDistanceToNow(new Date(lastActivityTime), { addSuffix: false })}
            </span>
          </div>
          <p className={cn(
            'text-xs truncate mt-0.5',
            hasUnread ? 'text-foreground font-medium' : 'text-muted-foreground'
          )}>
            {lastMessage}
          </p>
          {tag && (
            <span className={cn(
              'inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium',
              tag.color
            )}>
              {tag.text}
            </span>
          )}
        </div>

        {/* Unread Indicator */}
        {hasUnread && (
          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
        )}
      </button>
    </motion.div>
  );
}
