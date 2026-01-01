import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, User, CheckCircle2, Loader2 } from 'lucide-react';
import { OnlineIndicator } from './OnlineIndicator';
import { formatLastSeen } from '@/hooks/usePresence';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { VerifiedName } from '@/components/ui/verified-name';

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
  isPro?: boolean;
  // Confirmation state
  confirmedByMe?: boolean;
  confirmedByOther?: boolean;
  isCompleted?: boolean;
}

type ExchangeState = 'none' | 'confirmed_by_self' | 'confirmed_by_other' | 'completed';

function getExchangeState(confirmedByMe: boolean, confirmedByOther: boolean, isCompleted: boolean): ExchangeState {
  if (isCompleted) return 'completed';
  if (confirmedByMe && !confirmedByOther) return 'confirmed_by_self';
  if (!confirmedByMe && confirmedByOther) return 'confirmed_by_other';
  return 'none';
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
  theirItemPhoto,
  isPro = false,
  confirmedByMe = false,
  confirmedByOther = false,
  isCompleted = false
}: ChatHeaderProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const exchangeState = getExchangeState(confirmedByMe, confirmedByOther, isCompleted);

  const confirmMutation = useMutation({
    mutationFn: async () => {
      if (!matchId) throw new Error('No match ID');
      
      const { data, error } = await supabase.rpc('confirm_exchange', {
        p_match_id: matchId
      });
      
      if (error) throw error;
      return data as { status: string; waiting_for_other?: boolean } | null;
    },
    onSuccess: (result) => {
      const status = result?.status;
      if (status === 'completed') {
        toast.success('Exchange completed! 🎉', {
          description: 'Both items have been marked as swapped.'
        });
      } else if (status === 'confirmed') {
        toast.success('Exchange confirmed!', {
          description: 'Waiting for the other user to confirm.'
        });
      } else if (status === 'already_confirmed') {
        toast.info('You already confirmed this exchange.');
      }
      
      queryClient.invalidateQueries({ queryKey: ['matches'] });
      queryClient.invalidateQueries({ queryKey: ['completed-swaps-count'] });
      queryClient.invalidateQueries({ queryKey: ['map-items'] });
      queryClient.invalidateQueries({ queryKey: ['my-items'] });
      queryClient.invalidateQueries({ queryKey: ['recommendations'] });
    },
    onError: (error) => {
      console.error('Confirm exchange error:', error);
      toast.error('Failed to confirm exchange');
    }
  });

  const handleConfirm = () => {
    if (exchangeState === 'none' || exchangeState === 'confirmed_by_other') {
      confirmMutation.mutate();
    }
  };

  const getButtonConfig = () => {
    switch (exchangeState) {
      case 'completed':
        return {
          label: 'Completed',
          disabled: true,
          showDot: false,
          variant: 'ghost' as const,
          className: 'text-green-500 bg-green-500/10'
        };
      case 'confirmed_by_self':
        return {
          label: 'Waiting...',
          disabled: true,
          showDot: false,
          variant: 'ghost' as const,
          className: 'text-muted-foreground'
        };
      case 'confirmed_by_other':
        return {
          label: 'Confirm',
          disabled: false,
          showDot: true,
          variant: 'default' as const,
          className: 'gradient-primary'
        };
      case 'none':
      default:
        return {
          label: 'Confirm',
          disabled: false,
          showDot: false,
          variant: 'ghost' as const,
          className: 'text-green-500 hover:text-green-600 hover:bg-green-500/10'
        };
    }
  };

  const buttonConfig = getButtonConfig();

  return (
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
        <h1 className="font-semibold text-foreground text-sm">
          <VerifiedName name={displayName} isPro={isPro} />
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

      {/* Confirm Exchange Button */}
      {matchId && (
        <div className="relative">
          <Button 
            variant={buttonConfig.variant}
            size="sm"
            onClick={handleConfirm}
            disabled={buttonConfig.disabled || confirmMutation.isPending}
            className={cn(
              'text-xs font-medium transition-all',
              buttonConfig.className
            )}
          >
            {confirmMutation.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin mr-1" />
            ) : (
              <CheckCircle2 className="w-4 h-4 mr-1" />
            )}
            {buttonConfig.label}
          </Button>
          
          {/* Red dot indicator */}
          {buttonConfig.showDot && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          )}
        </div>
      )}
    </header>
  );
}
