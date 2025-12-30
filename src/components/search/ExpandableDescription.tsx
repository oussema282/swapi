import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ExpandableDescriptionProps {
  description: string;
  maxLines?: number;
  className?: string;
}

export function ExpandableDescription({ 
  description, 
  maxLines = 2,
  className 
}: ExpandableDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!description || description === 'No description') {
    return (
      <p className={cn("text-sm text-muted-foreground", className)}>
        No description
      </p>
    );
  }

  // Check if description needs truncation (roughly 80 chars per line)
  const needsTruncation = description.length > maxLines * 80;

  if (!needsTruncation) {
    return (
      <p className={cn("text-sm text-muted-foreground", className)}>
        {description}
      </p>
    );
  }

  return (
    <div className={className}>
      <p 
        className={cn(
          "text-sm text-muted-foreground transition-all",
          !isExpanded && `line-clamp-${maxLines}`
        )}
        style={!isExpanded ? { display: '-webkit-box', WebkitLineClamp: maxLines, WebkitBoxOrient: 'vertical', overflow: 'hidden' } : undefined}
      >
        {description}
      </p>
      <Button
        variant="link"
        size="sm"
        className="h-auto p-0 mt-1 text-xs text-primary font-medium"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? 'Show less' : 'Load more'}
      </Button>
    </div>
  );
}
