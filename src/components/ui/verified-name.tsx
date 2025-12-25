import { BadgeCheck } from 'lucide-react';
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
        <BadgeCheck className={cn("w-4 h-4 text-blue-500 flex-shrink-0", badgeClassName)} />
      )}
    </span>
  );
}
