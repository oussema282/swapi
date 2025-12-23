import { motion } from 'framer-motion';
import { ArrowLeftRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MatchesHeaderProps {
  activeCount: number;
  completedCount: number;
  onFilterClick?: () => void;
}

export function MatchesHeader({ activeCount, completedCount, onFilterClick }: MatchesHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <ArrowLeftRight className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold">Matches</h1>
            <p className="text-sm text-muted-foreground">
              Your active and completed exchanges
            </p>
          </div>
        </div>
        
        {/* Future filter button slot */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-muted-foreground"
          onClick={onFilterClick}
        >
          <Filter className="w-5 h-5" />
        </Button>
      </div>

      {/* Stats */}
      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10">
          <span className="text-xl font-bold text-primary">{activeCount}</span>
          <span className="text-sm text-muted-foreground">Active</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-success/10">
          <span className="text-xl font-bold text-success">{completedCount}</span>
          <span className="text-sm text-muted-foreground">Completed</span>
        </div>
      </div>
    </motion.div>
  );
}
