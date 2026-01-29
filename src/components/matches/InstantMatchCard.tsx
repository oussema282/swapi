import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { MatchWithItems } from '@/hooks/useMatches';

interface InstantMatchCardProps {
  match: MatchWithItems;
  index: number;
  onClick: () => void;
  isHighlighted?: boolean;
  onItemTap?: () => void;
}

export function InstantMatchCard({ 
  match, 
  index, 
  onClick, 
  isHighlighted = false,
  onItemTap 
}: InstantMatchCardProps) {
  const itemPhoto = match.their_item?.photos?.[0];
  const ownerName = match.other_user_profile?.display_name || 'User';
  const ownerAvatar = match.other_user_profile?.avatar_url;
  const itemTitle = match.their_item?.title || 'Item';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileTap={{ scale: 0.97 }}
      className="flex-shrink-0"
    >
      <button
        onClick={onClick}
        className={cn(
          'w-[160px] h-[190px] rounded-[20px] overflow-hidden relative',
          'bg-card shadow-card transition-all duration-200',
          'hover:shadow-lg active:scale-98',
          isHighlighted && 'ring-2 ring-primary ring-offset-2'
        )}
      >
        {/* Item Photo */}
        <div 
          className="w-full h-[130px] bg-muted relative"
          onClick={(e) => {
            e.stopPropagation();
            onItemTap?.();
          }}
        >
          {itemPhoto ? (
            <img 
              src={itemPhoto} 
              alt={itemTitle}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Package className="w-10 h-10 text-muted-foreground/30" />
            </div>
          )}
          
          {/* Owner Avatar Overlay */}
          <div className={cn(
            'absolute bottom-2 right-2 rounded-full',
            isHighlighted ? 'ring-2 ring-primary' : 'ring-2 ring-card'
          )}>
            <Avatar className="w-7 h-7">
              <AvatarImage src={ownerAvatar || undefined} />
              <AvatarFallback className="text-[10px] bg-secondary text-secondary-foreground">
                {ownerName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-3 text-left">
          <h4 className="text-sm font-semibold text-foreground truncate leading-tight">
            {itemTitle}
          </h4>
          <p className="text-xs text-muted-foreground truncate mt-0.5">
            Match with {ownerName}
          </p>
        </div>
      </button>
    </motion.div>
  );
}
