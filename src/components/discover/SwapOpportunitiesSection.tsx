import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSwapOpportunities, useDismissOpportunity } from '@/hooks/useSwapOpportunities';
import { SwapOpportunityCard } from './SwapOpportunityCard';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

export function SwapOpportunitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: opportunities, isLoading } = useSwapOpportunities();
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
      // Move to next card if available
      if (opportunities && currentIndex >= opportunities.length - 1) {
        setCurrentIndex(Math.max(0, currentIndex - 1));
      }
    } catch (error) {
      console.error('Failed to dismiss:', error);
    }
  };

  const handleView = (opportunity: any) => {
    navigate('/matches');
  };

  const goNext = () => {
    if (opportunities && currentIndex < opportunities.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Show nothing if no opportunities and not loading
  if (!isLoading && (!opportunities || opportunities.length === 0)) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="mx-4 mb-4 p-3 bg-muted/30 rounded-lg flex items-center justify-center gap-2">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="text-sm text-muted-foreground">Finding swap opportunities...</span>
      </div>
    );
  }

  const currentOpportunity = opportunities?.[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-4 mb-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Sparkles className="w-5 h-5 text-primary" />
            {opportunities && opportunities.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                {opportunities.length}
              </span>
            )}
          </div>
          <span className="font-medium text-sm">Guaranteed Swaps</span>
        </div>
        
        {/* Navigation dots */}
        {opportunities && opportunities.length > 1 && (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={goPrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-xs text-muted-foreground">
              {currentIndex + 1}/{opportunities.length}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={goNext}
              disabled={currentIndex >= opportunities.length - 1}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Card carousel */}
      <AnimatePresence mode="wait">
        {currentOpportunity && (
          <SwapOpportunityCard
            key={currentOpportunity.id}
            opportunity={currentOpportunity}
            onDismiss={() => handleDismiss(currentOpportunity.id)}
            onView={() => handleView(currentOpportunity)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
