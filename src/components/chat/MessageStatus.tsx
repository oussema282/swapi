import { Clock, Check, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MessageStatusType = 'sending' | 'sent' | 'delivered' | 'read';

interface MessageStatusProps {
  status: MessageStatusType;
  className?: string;
}

export function MessageStatus({ status, className }: MessageStatusProps) {
  const baseClass = cn('w-3.5 h-3.5 flex-shrink-0', className);
  
  switch (status) {
    case 'sending':
      return <Clock className={cn(baseClass, 'text-primary-foreground/50')} />;
    case 'sent':
      return <Check className={cn(baseClass, 'text-primary-foreground/70')} />;
    case 'delivered':
      return <CheckCheck className={cn(baseClass, 'text-primary-foreground/70')} />;
    case 'read':
      return <CheckCheck className={cn(baseClass, 'text-blue-400')} />;
    default:
      return null;
  }
}
