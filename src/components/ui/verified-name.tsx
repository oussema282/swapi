import { Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VerifiedNameProps {
  name: string;
  className?: string;
  badgeClassName?: string;
  isPro?: boolean;
}

export function VerifiedName({ 
  name, 
  className, 
  badgeClassName,
  isPro = false 
}: VerifiedNameProps) {
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span className="truncate">{name}</span>
      {isPro && (
        <span 
          className={cn(
            "flex-shrink-0 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 p-0.5 shadow-sm",
            badgeClassName
          )} 
          title="Pro Member"
        >
          <Crown className="w-3 h-3 text-white" />
        </span>
      )}
    </span>
  );
}
