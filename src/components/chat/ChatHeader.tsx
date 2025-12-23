import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, User, CheckCircle2 } from 'lucide-react';
import { OnlineIndicator } from './OnlineIndicator';
import { formatLastSeen } from '@/hooks/usePresence';
import { cn } from '@/lib/utils';
import { CompleteSwapModal } from '@/components/matches/CompleteSwapModal';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

interface ChatHeaderProps {
  avatarUrl?: string | null;
  displayName: string;
  isOnline: boolean;
  lastSeen?: Date | null;
  className?: string;
  matchId?: string;
  myItemTitle?: string;
  theirItemTitle?: string;
  myItemPhoto?: string;
  theirItemPhoto?: string;
}

export function ChatHeader({ 
  avatarUrl, 
  displayName, 
  isOnline, 
  lastSeen,
  className,
  matchId,
  myItemTitle,
  theirItemTitle,
  myItemPhoto,
  theirItemPhoto
}: ChatHeaderProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const handleCompleteSwap = async (rating: number, feedback: string) => {
    if (!matchId) return;
    
    const { error } = await supabase
      .from('matches')
      .update({ 
        is_completed: true, 
        completed_at: new Date().toISOString() 
      })
      .eq('id', matchId);
    
    if (error) {
      toast.error('Failed to complete swap');
      throw error;
    }
    
    toast.success('Swap completed successfully!');
    queryClient.invalidateQueries({ queryKey: ['matches'] });
    queryClient.invalidateQueries({ queryKey: ['completed-swaps-count'] });
    queryClient.invalidateQueries({ queryKey: ['map-items'] });
    queryClient.invalidateQueries({ queryKey: ['completed-swap-items'] });
  };

  return (
    <>
      <header 
        className={cn(
          'sticky top-0 z-10 flex items-center gap-3 px-4 py-3',
          'bg-card/95 backdrop-blur-sm border-b border-border',
          className
        )}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/matches')}
          className="flex-shrink-0 -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        
        <div className="relative flex-shrink-0">
          <Avatar className="w-9 h-9">
            <AvatarImage src={avatarUrl || undefined} alt={displayName} />
            <AvatarFallback className="bg-muted">
              <User className="w-4 h-4 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
          <OnlineIndicator 
            isOnline={isOnline} 
            className="bottom-0 right-0 translate-x-0.5 translate-y-0.5"
            size="sm"
          />
        </div>
        
        <div className="flex flex-col min-w-0 flex-1">
          <h1 className="font-semibold text-foreground truncate text-sm">
            {displayName}
          </h1>
          <p className="text-xs truncate">
            {isOnline ? (
              <span className="text-green-500 font-medium">Online</span>
            ) : lastSeen ? (
              <span className="text-muted-foreground">
                Last seen {formatLastSeen(lastSeen)}
              </span>
            ) : (
              <span className="text-muted-foreground">Offline</span>
            )}
          </p>
        </div>

        {/* Complete Swap Button */}
        {matchId && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setShowCompleteModal(true)}
            className="text-green-500 hover:text-green-600 hover:bg-green-500/10"
            title="Mark swap as complete"
          >
            <CheckCircle2 className="w-5 h-5" />
          </Button>
        )}
      </header>

      <CompleteSwapModal
        open={showCompleteModal}
        onClose={() => setShowCompleteModal(false)}
        onComplete={handleCompleteSwap}
        myItemTitle={myItemTitle || 'Your item'}
        theirItemTitle={theirItemTitle || 'Their item'}
        myItemPhoto={myItemPhoto}
        theirItemPhoto={theirItemPhoto}
      />
    </>
  );
}
