import { motion } from 'framer-motion';
import { Package, HeartOff, RefreshCw, Lock, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { VerifiedName } from '@/components/ui/verified-name';
import { formatDistanceToNow } from 'date-fns';
import { MissedMatch } from '@/hooks/useMissedMatches';
import { useNavigate } from 'react-router-dom';

interface MissedMatchCardProps {
  missedMatch: MissedMatch;
  index: number;
  isPro?: boolean;
  onReconsider?: () => void;
  onClick?: () => void;
}

export function MissedMatchCard({ missedMatch, index, isPro = false, onReconsider, onClick }: MissedMatchCardProps) {
  const navigate = useNavigate();

  // Non-Pro: Show blurred/locked card
  if (!isPro) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        onClick={onClick}
        className="cursor-pointer"
      >
        <Card className="p-3 border-primary/20 bg-primary/5 relative overflow-hidden">
          <div className="flex gap-3">
            {/* Blurred Item Visual */}
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted ring-2 ring-primary/30">
                {missedMatch.their_item?.photos?.[0] ? (
                  <img 
                    src={missedMatch.their_item.photos[0]} 
                    alt="" 
                    className="w-full h-full object-cover blur-lg" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <Package className="w-6 h-6 text-muted-foreground opacity-50" />
                  </div>
                )}
                {/* Lock overlay */}
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Blurred Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-4 h-4 rounded-full bg-muted blur-sm" />
                  <span className="font-medium text-sm blur-sm select-none">Hidden User</span>
                </div>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  Pro Only
                </span>
              </div>
              
              <p className="text-xs text-muted-foreground blur-sm select-none mb-1">
                Hidden item title
              </p>
              
              <p className="text-xs text-primary/80">
                Upgrade to see who wants your item!
              </p>
            </div>

            {/* Upgrade Button */}
            <Button
              variant="ghost"
              size="sm"
              className="self-center text-primary"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/checkout');
              }}
            >
              <Crown className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  // Pro: Show full details
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className={onClick ? 'cursor-pointer' : ''}
    >
      <Card className="p-3 border-destructive/20 bg-destructive/5">
        <div className="flex gap-3">
          {/* Item Visual */}
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted ring-2 ring-destructive/30">
              {missedMatch.their_item?.photos?.[0] ? (
                <img 
                  src={missedMatch.their_item.photos[0]} 
                  alt="" 
                  className="w-full h-full object-cover opacity-70" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-destructive flex items-center justify-center">
              <HeartOff className="w-3 h-3 text-destructive-foreground" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <Avatar className="w-4 h-4">
                  <AvatarImage src={missedMatch.their_item?.owner_avatar_url || undefined} />
                  <AvatarFallback className="text-[8px]">
                    {missedMatch.their_item?.owner_display_name?.charAt(0) || '?'}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm">
                  <VerifiedName 
                    name={missedMatch.their_item?.owner_display_name || 'Unknown'} 
                    isPro={missedMatch.their_item?.owner_is_pro}
                    badgeClassName="w-3.5 h-3.5"
                  />
                </span>
              </div>
              
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-destructive/10 text-destructive flex-shrink-0">
                {formatDistanceToNow(new Date(missedMatch.missed_at), { addSuffix: true })}
              </span>
            </div>
            
            <p className="text-xs text-muted-foreground truncate mb-1">
              {missedMatch.their_item?.title}
            </p>
            
            <p className="text-xs text-destructive/80">
              They wanted to swap for your <span className="font-medium">{missedMatch.my_item?.title}</span>
            </p>
          </div>

          {/* Reconsider Button */}
          {onReconsider && (
            <Button
              variant="ghost"
              size="sm"
              className="self-center"
              onClick={(e) => {
                e.stopPropagation();
                onReconsider();
              }}
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
