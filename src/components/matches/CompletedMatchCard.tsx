import { motion } from 'framer-motion';
import { Package, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VerifiedName } from '@/components/ui/verified-name';
import { formatDistanceToNow } from 'date-fns';
import { MatchWithItems } from '@/hooks/useMatches';

interface CompletedMatchCardProps {
  match: MatchWithItems;
  index: number;
  onClick?: () => void;
}

export function CompletedMatchCard({ match, index, onClick }: CompletedMatchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <Card
        className="p-3 bg-muted/30 border-border/30 hover:bg-muted/50 transition-colors cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          {/* Compact Swap Visual */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted">
              {match.my_item?.photos?.[0] ? (
                <img src={match.my_item.photos[0]} alt="" className="w-full h-full object-cover opacity-80" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Package className="w-4 h-4 text-muted-foreground" />
                </div>
              )}
            </div>
            <ArrowLeftRight className="w-3 h-3 text-success -mx-1.5 z-10" />
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted">
              {match.their_item?.photos?.[0] ? (
                <img src={match.their_item.photos[0]} alt="" className="w-full h-full object-cover opacity-80" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Package className="w-4 h-4 text-muted-foreground" />
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-muted-foreground truncate">
              {match.their_item?.title}
            </p>
            <p className="text-xs text-muted-foreground/70">
              with <VerifiedName name={match.other_user_profile?.display_name || 'Unknown'} isPro={match.other_user_profile?.is_pro} className="inline" badgeClassName="w-3 h-3" /> • {formatDistanceToNow(new Date(match.completed_at || match.created_at), { addSuffix: true })}
            </p>
          </div>

          {/* Status Badge */}
          <Badge variant="secondary" className="bg-success/10 text-success border-0 text-xs">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Done
          </Badge>
        </div>
      </Card>
    </motion.div>
  );
}
