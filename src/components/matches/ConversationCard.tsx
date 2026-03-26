import { motion } from 'framer-motion';
import { Package, Sparkles, Zap, MessageCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { VerifiedName } from '@/components/ui/verified-name';
import { cn } from '@/lib/utils';
import { formatTimeAgo } from '@/lib/dateLocale';
import { MatchWithItems } from '@/hooks/useMatches';
import { useTranslation } from 'react-i18next';
import { getDefaultAvatar } from '@/lib/defaultAvatars';

interface ConversationCardProps {
  match: MatchWithItems;
  index: number;
  onClick: () => void;
  hasUnread?: boolean;
  onItemTap?: () => void;
}

function useMatchTag(match: MatchWithItems): { text: string; color: string; icon: 'sparkles' | 'zap' | 'message' } | null {
  const { t } = useTranslation();
  
  const myMin = match.my_item?.value_min || 0;
  const myMax = match.my_item?.value_max || myMin;
  const theirMin = match.their_item?.value_min || 0;
  const theirMax = match.their_item?.value_max || theirMin;
  
  const myAvg = (myMin + myMax) / 2;
  const theirAvg = (theirMin + theirMax) / 2;
  
  if (myAvg > 0 && theirAvg > 0) {
    const ratio = Math.min(myAvg, theirAvg) / Math.max(myAvg, theirAvg);
    if (ratio >= 0.7) {
      return { text: t('matches.valueBalanced'), color: 'bg-accent/15 text-accent', icon: 'sparkles' };
    }
    if (ratio >= 0.5) {
      return { text: t('matches.greatTradePotential'), color: 'bg-primary/15 text-primary', icon: 'sparkles' };
    }
  }
  
  if (match.last_message?.created_at) {
    const lastMessageTime = new Date(match.last_message.created_at);
    const hoursSinceMessage = (Date.now() - lastMessageTime.getTime()) / (1000 * 60 * 60);
    if (hoursSinceMessage < 1) {
      return { text: t('matches.fastResponder'), color: 'bg-tinder-blue/15 text-tinder-blue', icon: 'zap' };
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
  const { t } = useTranslation();
  const ownerName = match.other_user_profile?.display_name || 'User';
  const ownerAvatar = match.other_user_profile?.avatar_url;
  const itemPhoto = match.their_item?.photos?.[0];
  const lastMessage = match.last_message?.content || t('matches.startConversation');
  const lastActivityTime = match.last_message?.created_at || match.created_at;
  const tag = useMatchTag(match);

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
        <div 
          className="relative flex-shrink-0"
          onClick={(e) => { e.stopPropagation(); onItemTap?.(); }}
        >
          <div className="w-[90px] h-[90px] rounded-[16px] overflow-hidden bg-surface">
            {itemPhoto ? (
              <img src={itemPhoto} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Package className="w-8 h-8 text-muted-foreground/30" />
              </div>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 rounded-full ring-2 ring-primary/30 bg-card">
            <Avatar className="w-7 h-7">
              <AvatarImage src={ownerAvatar || getDefaultAvatar(match.other_user_id || match.id)} />
              <AvatarFallback className="text-[10px] bg-secondary text-secondary-foreground font-medium">
                {ownerName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="flex-1 min-w-0 text-left py-0.5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <VerifiedName
              name={ownerName}
              isPro={match.other_user_profile?.is_pro}
              className={cn(
                'text-[15px] truncate leading-tight',
                hasUnread ? 'font-bold text-foreground' : 'font-semibold text-foreground'
              )}
              badgeClassName="w-3 h-3"
            />
            <span className="text-[11px] text-muted-foreground flex-shrink-0 mt-0.5">
              {formatTimeAgo(new Date(lastActivityTime))}
            </span>
          </div>
          
          <p className={cn(
            'text-[13px] line-clamp-2 leading-snug',
            hasUnread ? 'text-foreground font-medium' : 'text-muted-foreground'
          )}>
            {lastMessage}
          </p>
          
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

        {hasUnread && (
          <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 mt-1" />
        )}
      </button>
    </motion.div>
  );
}
