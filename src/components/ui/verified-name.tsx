import { Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface VerifiedNameProps {
  name: string;
  className?: string;
  badgeClassName?: string;
  isPro?: boolean;
  userId?: string;
  clickable?: boolean;
}

export function VerifiedName({ 
  name, 
  className, 
  badgeClassName,
  isPro = false,
  userId,
  clickable = false
}: VerifiedNameProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (clickable && userId) {
      e.stopPropagation();
      navigate(`/user/${userId}`);
    }
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center gap-1", 
        clickable && userId && "cursor-pointer hover:underline",
        className
      )}
      onClick={handleClick}
    >
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
