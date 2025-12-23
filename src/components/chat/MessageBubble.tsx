import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MessageStatus, MessageStatusType } from './MessageStatus';
import { format, isToday, isYesterday } from 'date-fns';

function formatMessageTime(date: Date) {
  if (isToday(date)) return format(date, 'HH:mm');
  if (isYesterday(date)) return `Yesterday ${format(date, 'HH:mm')}`;
  return format(date, 'MMM d, HH:mm');
}

interface MessageBubbleProps {
  content: string;
  timestamp: Date;
  isOutgoing: boolean;
  status?: MessageStatusType;
  showStatus?: boolean;
  position: 'first' | 'middle' | 'last' | 'single';
  animationDelay?: number;
}

export function MessageBubble({
  content,
  timestamp,
  isOutgoing,
  status,
  showStatus = false,
  position,
  animationDelay = 0,
}: MessageBubbleProps) {
  // Determine border radius based on position and direction
  const getBorderRadius = () => {
    const base = 'rounded-2xl';
    
    if (position === 'single') return base;
    
    if (isOutgoing) {
      switch (position) {
        case 'first': return 'rounded-2xl rounded-br-md';
        case 'middle': return 'rounded-2xl rounded-r-md';
        case 'last': return 'rounded-2xl rounded-tr-md';
        default: return base;
      }
    } else {
      switch (position) {
        case 'first': return 'rounded-2xl rounded-bl-md';
        case 'middle': return 'rounded-2xl rounded-l-md';
        case 'last': return 'rounded-2xl rounded-tl-md';
        default: return base;
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: animationDelay,
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={cn('flex', isOutgoing ? 'justify-end' : 'justify-start')}
    >
      <div
        className={cn(
          'min-w-[72px] max-w-[75%] px-3.5 py-2.5 shadow-sm',
          getBorderRadius(),
          isOutgoing
            ? 'gradient-primary text-primary-foreground'
            : 'bg-card border border-border text-foreground'
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {content}
        </p>
        <div className={cn(
          'flex items-center gap-1 mt-1',
          isOutgoing ? 'justify-end' : 'justify-start'
        )}>
          <span
            className={cn(
              'text-[10px]',
              isOutgoing ? 'text-primary-foreground/70' : 'text-muted-foreground'
            )}
          >
            {formatMessageTime(timestamp)}
          </span>
          {isOutgoing && showStatus && status && (
            <MessageStatus status={status} />
          )}
        </div>
      </div>
    </motion.div>
  );
}
