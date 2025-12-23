import { cn } from '@/lib/utils';

interface OnlineIndicatorProps {
  isOnline: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function OnlineIndicator({ isOnline, className, size = 'md' }: OnlineIndicatorProps) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
  };

  if (!isOnline) return null;

  return (
    <span
      className={cn(
        'absolute rounded-full bg-green-500 ring-2 ring-background',
        sizeClasses[size],
        className
      )}
      aria-label="Online"
    />
  );
}
