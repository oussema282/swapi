import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles, RefreshCw, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSwapOpportunities, useDismissOpportunity } from '@/hooks/useSwapOpportunities';
import { SwapOpportunityCard } from './SwapOpportunityCard';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { formatDistanceToNow } from 'date-fns';

export function SwapOpportunitiesSection() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { data: opportunities, isLoading, dataUpdatedAt } = useSwapOpportunities();
  const dismissOpportunity = useDismissOpportunity();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Mutation to run the optimizer
  const runOptimizer = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.functions.invoke('reciprocal-optimizer');
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['swap-opportunities'] });
      queryClient.invalidateQueries({ queryKey: ['recommended-items'] });
      toast.success(`Found ${data?.stats?.twoWayOpportunities || 0} swap opportunities!`);
    },
    onError: (error) => {
      console.error('Optimizer failed:', error);
      toast.error('Failed to refresh opportunities');
    },
  });

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
    navigate('/matches');
  };

  // Show refresh button even if no opportunities
  if (isLoading) {
    return (
      <div className="mx-4 mb-4 p-3 bg-muted/30 rounded-lg flex items-center justify-center gap-2">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="text-sm text-muted-foreground">Finding swap opportunities...</span>
      </div>
    );
  }

  const lastUpdated = dataUpdatedAt ? formatDistanceToNow(dataUpdatedAt, { addSuffix: true }) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-4 mb-4"
    >
      {/* Header toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          className="flex-1 flex items-center justify-between p-2 h-auto"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-primary" />
              {opportunities && opportunities.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                  {opportunities.length}
                </span>
              )}
            </div>
            <div className="text-left">
              <span className="font-medium text-sm block">Guaranteed Swap Opportunities</span>
              {lastUpdated && (
                <span className="text-[10px] text-muted-foreground">Updated {lastUpdated}</span>
              )}
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => runOptimizer.mutate()}
          disabled={runOptimizer.isPending}
          title="Find new opportunities"
        >
          {runOptimizer.isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Opportunities list */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {opportunities && opportunities.length > 0 ? (
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
            ) : (
              <div className="py-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  No guaranteed swaps found yet
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => runOptimizer.mutate()}
                  disabled={runOptimizer.isPending}
                >
                  {runOptimizer.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Find Opportunities
                    </>
                  )}
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
