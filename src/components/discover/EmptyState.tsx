import { Button } from '@/components/ui/button';
import { RefreshCw, Package } from 'lucide-react';

interface EmptyStateProps {
  onRefresh: () => void;
}

export function EmptyState({ onRefresh }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <Package className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-display font-bold mb-2">No more items</h3>
      <p className="text-muted-foreground mb-6 max-w-sm">
        You've seen all compatible items for now. Check back later or try a different item!
      </p>
      <Button variant="outline" onClick={onRefresh}>
        <RefreshCw className="w-4 h-4 mr-2" />
        Refresh
      </Button>
    </div>
  );
}
