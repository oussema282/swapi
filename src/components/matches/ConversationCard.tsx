import { motion } from 'framer-motion';
import { Package, Sparkles, Zap, MessageCircle } from 'lucide-react';
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
function getMatchTag(match: MatchWithItems): { text: string; color: string; icon: 'sparkles' | 'zap' | 'message' } | null {
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
      return { text: 'Value balanced', color: 'bg-accent/15 text-accent', icon: 'sparkles' };
    }
    if (ratio >= 0.5) {
      return { text: 'Great trade potential!', color: 'bg-primary/15 text-primary', icon: 'sparkles' };
    }
  }
  
  // Fast responder check - if last message was recent
  if (match.last_message?.created_at) {
    const lastMessageTime = new Date(match.last_message.created_at);
    const hoursSinceMessage = (Date.now() - lastMessageTime.getTime()) / (1000 * 60 * 60);
    if (hoursSinceMessage < 1) {
      return { text: 'Fast responder', color: 'bg-tinder-blue/15 text-tinder-blue', icon: 'zap' };
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

  const TagIcon = tag?.icon === 'sparkles' ? Sparkles : tag?.icon === 'zap' ? Zap : MessageCircle;

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
          'w-full rounded-[18px] p-3 flex items-start gap-3',
          'bg-card shadow-card border border-transparent',
          'transition-all duration-200',
          'hover:border-primary/20 hover:shadow-lg',
          hasUnread && 'bg-primary/5 border-primary/20'
        )}
      >
        {/* Item Thumbnail with Avatar Overlay - Larger size */}
        <div 
          className="relative flex-shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            onItemTap?.();
          }}
        >
          <div className="w-[90px] h-[90px] rounded-[16px] overflow-hidden bg-surface">
            {itemPhoto ? (
              <img 
                src={itemPhoto} 
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Package className="w-8 h-8 text-muted-foreground/30" />
              </div>
            )}
          </div>
          {/* Avatar Overlay - Bottom right with purple ring */}
          <div className="absolute -bottom-1 -right-1 rounded-full ring-2 ring-primary/30 bg-card">
            <Avatar className="w-7 h-7">
              <AvatarImage src={ownerAvatar || undefined} />
              <AvatarFallback className="text-[10px] bg-secondary text-secondary-foreground font-medium">
                {ownerName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Content - Right side */}
        <div className="flex-1 min-w-0 text-left py-0.5">
          {/* Top row: Name + Time */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className={cn(
              'text-[15px] truncate leading-tight',
              hasUnread ? 'font-bold text-foreground' : 'font-semibold text-foreground'
            )}>
              {ownerName}
            </h4>
            <span className="text-[11px] text-muted-foreground flex-shrink-0 mt-0.5">
              {formatDistanceToNow(new Date(lastActivityTime), { addSuffix: false })}
            </span>
          </div>
          
          {/* Message preview */}
          <p className={cn(
            'text-[13px] line-clamp-2 leading-snug',
            hasUnread ? 'text-foreground font-medium' : 'text-muted-foreground'
          )}>
            {lastMessage}
          </p>
          
          {/* Tag pill */}
          {tag && (
            <span className={cn(
              'inline-flex items-center gap-1 mt-2 px-2.5 py-1 rounded-full text-[11px] font-medium',
              tag.color
            )}>
              <TagIcon className="w-3 h-3" />
              {tag.text}
            </span>
          )}
        </div>

        {/* Unread Indicator */}
        {hasUnread && (
          <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 mt-1" />
        )}
      </button>
    </motion.div>
  );
}
