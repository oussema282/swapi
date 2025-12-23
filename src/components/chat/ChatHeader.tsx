import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, User } from 'lucide-react';
import { OnlineIndicator } from './OnlineIndicator';
import { formatLastSeen } from '@/hooks/usePresence';
import { cn } from '@/lib/utils';

interface ChatHeaderProps {
  avatarUrl?: string | null;
  displayName: string;
  isOnline: boolean;
  lastSeen?: Date | null;
  className?: string;
}

export function ChatHeader({ 
  avatarUrl, 
  displayName, 
  isOnline, 
  lastSeen,
  className 
}: ChatHeaderProps) {
  const navigate = useNavigate();

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
    </header>
  );
}
