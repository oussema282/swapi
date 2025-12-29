import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSwapOpportunities, useDismissOpportunity } from '@/hooks/useSwapOpportunities';
import { SwapOpportunityCard } from './SwapOpportunityCard';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function SwapOpportunitiesSection() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { data: opportunities, isLoading } = useSwapOpportunities();
  const dismissOpportunity = useDismissOpportunity();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleDismiss = async (id: string) => {
    try {
      await dismissOpportunity(id);
      queryClient.invalidateQueries({ queryKey: ['swap-opportunities'] });
      toast.success('Opportunity dismissed');
    } catch (error) {
      console.error('Failed to dismiss:', error);
    }
  };

  const handleView = (opportunity: any) => {
    // Navigate to matches or show details
    // For now, mark as viewed and navigate to matches
    navigate('/matches');
  };

  if (isLoading || !opportunities?.length) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-4 mb-4"
    >
      {/* Header toggle */}
      <Button
        variant="ghost"
        className="w-full flex items-center justify-between p-2 h-auto"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
              {opportunities.length}
            </span>
          </div>
          <span className="font-medium text-sm">Guaranteed Swap Opportunities</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </Button>

      {/* Opportunities list */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pt-2">
              {opportunities.slice(0, 3).map((opportunity) => (
                <SwapOpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  onDismiss={() => handleDismiss(opportunity.id)}
                  onView={() => handleView(opportunity)}
                />
              ))}
              
              {opportunities.length > 3 && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => navigate('/matches')}
                >
                  View all {opportunities.length} opportunities
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
