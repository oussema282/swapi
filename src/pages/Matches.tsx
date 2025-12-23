import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMatches } from '@/hooks/useMatches';
import { supabase } from '@/integrations/supabase/client';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeftRight, MessageCircle, Package, Loader2, CheckCircle2 } from 'lucide-react';
import { CompleteSwapModal } from '@/components/matches/CompleteSwapModal';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

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

  return (
    <AppLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col max-w-lg mx-auto w-full px-4 pt-4 overflow-hidden"
      >
        <h1 className="text-2xl font-display font-bold mb-2">Matches</h1>
        <p className="text-sm text-muted-foreground mb-4">
          {activeMatches.length} active · {completedMatches.length} completed
        </p>

        {matches && matches.length > 0 ? (
          <div className="flex-1 overflow-y-auto space-y-6 pb-4">
            {/* Active Matches */}
            {activeMatches.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Active</h2>
                {activeMatches.map((match, index) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="p-4 hover:shadow-md transition-shadow">
                      <div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => navigate(`/chat/${match.id}`)}
                      >
                        <div className="w-14 h-14 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                          {match.my_item?.photos?.[0] ? (
                            <img src={match.my_item.photos[0]} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package className="w-6 h-6 text-muted-foreground" />
                            </div>
                          )}
                        </div>

                        <ArrowLeftRight className="w-5 h-5 text-primary flex-shrink-0" />

                        <div className="w-14 h-14 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                          {match.their_item?.photos?.[0] ? (
                            <img src={match.their_item.photos[0]} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package className="w-6 h-6 text-muted-foreground" />
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0 ml-2">
                          <p className="font-medium line-clamp-2">{match.their_item?.title}</p>
                          <p className="text-sm text-muted-foreground">with {match.their_item?.owner_display_name}</p>
                        </div>

                        <MessageCircle className="w-5 h-5 text-muted-foreground" />
                      </div>

                      <div className="flex gap-2 mt-3 pt-3 border-t">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => navigate(`/chat/${match.id}`)}
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Chat
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
                          onClick={() => {
                            setSelectedMatch(match);
                            setShowCompleteModal(true);
                          }}
                        >
                          <CheckCircle2 className="w-4 h-4 mr-1" />
                          Complete
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Completed Matches */}
            {completedMatches.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Completed</h2>
                {completedMatches.map((match, index) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className={cn("p-4 opacity-75")}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                          {match.my_item?.photos?.[0] ? (
                            <img src={match.my_item.photos[0]} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package className="w-5 h-5 text-muted-foreground" />
                            </div>
                          )}
                        </div>

                        <ArrowLeftRight className="w-4 h-4 text-success flex-shrink-0" />

                        <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                          {match.their_item?.photos?.[0] ? (
                            <img src={match.their_item.photos[0]} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package className="w-5 h-5 text-muted-foreground" />
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0 ml-2">
                          <p className="font-medium line-clamp-2 text-sm">{match.their_item?.title}</p>
                          <p className="text-xs text-muted-foreground">with {match.their_item?.owner_display_name}</p>
                        </div>

                        <Badge variant="secondary" className="bg-success/10 text-success border-0">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Done
                        </Badge>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <ArrowLeftRight className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">No matches yet</h3>
            <p className="text-sm text-muted-foreground mb-4">Keep swiping to find swaps!</p>
            <Button onClick={() => navigate('/')} className="gradient-primary text-primary-foreground">
              Discover Items
            </Button>
          </div>
        )}
      </motion.div>

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
