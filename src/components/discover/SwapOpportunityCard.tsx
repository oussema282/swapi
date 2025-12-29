import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { EnrichedSwapOpportunity } from '@/hooks/useSwapOpportunities';

interface SwapOpportunityCardProps {
  opportunity: EnrichedSwapOpportunity;
  onDismiss: () => void;
  onView: () => void;
}

export function SwapOpportunityCard({ opportunity, onDismiss, onView }: SwapOpportunityCardProps) {
  const confidencePercent = Math.round(opportunity.confidence_score * 100);
  const isThreeWay = opportunity.cycle_type === '3-way';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-2xl p-4 border border-primary/20 shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-semibold text-sm">
            {isThreeWay ? '3-Way Swap' : 'Perfect Match'}
          </span>
          <Badge variant="secondary" className="text-xs">
            {confidencePercent}% match
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onDismiss}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Items flow */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {opportunity.items.map((item, idx) => (
          <div key={item.id} className="flex items-center gap-2">
            <div className={`relative ${item.is_mine ? 'ring-2 ring-primary ring-offset-2 rounded-xl' : ''}`}>
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted">
                {item.photos?.[0] ? (
                  <img
                    src={item.photos[0]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                    No img
                  </div>
                )}
              </div>
              {item.is_mine && (
                <Badge className="absolute -top-2 -left-2 text-[10px] px-1.5">
                  Yours
                </Badge>
              )}
            </div>
            
            {idx < opportunity.items.length - 1 && (
              <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            )}
          </div>
        ))}
        
        {/* Close the cycle */}
        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* Participants */}
      <div className="flex items-center justify-center gap-1 mb-3">
        {opportunity.items.map((item, idx) => (
          <div key={item.id} className="flex items-center">
            <Avatar className="h-6 w-6 border-2 border-background -ml-2 first:ml-0">
              <AvatarImage src={item.owner_avatar || undefined} />
              <AvatarFallback className="text-xs">
                {item.owner_name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>
        ))}
        <span className="text-xs text-muted-foreground ml-2">
          {opportunity.items.length} traders ready
        </span>
      </div>

      {/* Action */}
      <Button
        className="w-full"
        size="sm"
        onClick={onView}
      >
        <Sparkles className="w-4 h-4 mr-2" />
        View Opportunity
      </Button>
    </motion.div>
  );
}
