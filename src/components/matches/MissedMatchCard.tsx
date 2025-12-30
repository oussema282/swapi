import { motion } from 'framer-motion';
import { Package, HeartOff, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { VerifiedName } from '@/components/ui/verified-name';
import { formatDistanceToNow } from 'date-fns';
import { MissedMatch } from '@/hooks/useMissedMatches';

interface MissedMatchCardProps {
  missedMatch: MissedMatch;
  index: number;
  onReconsider?: () => void;
}

export function MissedMatchCard({ missedMatch, index, onReconsider }: MissedMatchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
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
              onClick={onReconsider}
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
