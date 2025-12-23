import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMatches } from '@/hooks/useMatches';
import { supabase } from '@/integrations/supabase/client';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { CompleteSwapModal } from '@/components/matches/CompleteSwapModal';
import { MatchCard } from '@/components/matches/MatchCard';
import { CompletedMatchCard } from '@/components/matches/CompletedMatchCard';
import { MatchesHeader } from '@/components/matches/MatchesHeader';
import { EmptyMatchesState } from '@/components/matches/EmptyMatchesState';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export default function Matches() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { data: matches, isLoading, refetch } = useMatches();
  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  const handleCompleteSwap = async (rating: number, feedback: string) => {
    if (!selectedMatch) return;

    const { error } = await supabase
      .from('matches')
      .update({
        is_completed: true,
        completed_at: new Date().toISOString(),
      })
      .eq('id', selectedMatch.id);

    if (error) {
      toast.error('Failed to complete swap');
      throw error;
    }

    await refetch();
    toast.success('Swap completed successfully!');
  };

  if (authLoading || isLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-[80vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  const activeMatches = matches?.filter(m => !m.is_completed) || [];
  const completedMatches = matches?.filter(m => m.is_completed) || [];

  // Check for unread messages (messages from other user that aren't read)
  const hasUnreadMessages = (match: any) => {
    if (!match.last_message || !user) return false;
    return match.last_message.sender_id !== user.id && match.last_message.status !== 'read';
  };

  return (
    <AppLayout>
      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full px-4 pt-4 overflow-hidden">
        <MatchesHeader
          activeCount={activeMatches.length}
          completedCount={completedMatches.length}
        />

{matches && matches.length > 0 ? (
          <div className="flex-1 overflow-y-auto space-y-6 pb-4">
            {/* Active Matches */}
            <AnimatePresence mode="wait">
              {activeMatches.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-semibold text-foreground">Active</h2>
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {activeMatches.length}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {activeMatches.map((match, index) => (
                      <MatchCard
                        key={match.id}
                        match={match}
                        index={index}
                        onClick={() => navigate(`/chat/${match.id}`)}
                        hasUnread={hasUnreadMessages(match)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Completed Matches */}
            <AnimatePresence mode="wait">
              {completedMatches.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-sm font-semibold text-muted-foreground">Completed</h2>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
                      {completedMatches.length}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {completedMatches.map((match, index) => (
                      <CompletedMatchCard
                        key={match.id}
                        match={match}
                        index={index}
                        onClick={() => navigate(`/chat/${match.id}`)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <EmptyMatchesState />
        )}
      </div>

      {/* Complete Swap Modal */}
      <CompleteSwapModal
        open={showCompleteModal}
        onClose={() => {
          setShowCompleteModal(false);
          setSelectedMatch(null);
        }}
        onComplete={handleCompleteSwap}
        myItemTitle={selectedMatch?.my_item?.title || ''}
        theirItemTitle={selectedMatch?.their_item?.title || ''}
        myItemPhoto={selectedMatch?.my_item?.photos?.[0]}
        theirItemPhoto={selectedMatch?.their_item?.photos?.[0]}
      />
    </AppLayout>
  );
}
