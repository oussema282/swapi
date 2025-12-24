import { motion } from 'framer-motion';
import { ArrowLeftRight, Filter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

type TabType = 'active' | 'completed' | 'invites';

interface MatchesHeaderProps {
  activeCount: number;
  completedCount: number;
  invitesCount: number;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onFilterClick?: () => void;
}

export function MatchesHeader({ 
  activeCount, 
  completedCount, 
  invitesCount,
  activeTab,
  onTabChange,
  onFilterClick 
}: MatchesHeaderProps) {
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

      {/* Tabs */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onTabChange('active')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            activeTab === 'active' 
              ? 'bg-primary/10 text-primary' 
              : 'bg-muted/50 text-muted-foreground hover:bg-muted'
          }`}
        >
          <span className="text-xl font-bold">{activeCount}</span>
          <span className="text-sm">Active</span>
        </button>
        <button
          onClick={() => onTabChange('completed')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            activeTab === 'completed' 
              ? 'bg-success/10 text-success' 
              : 'bg-muted/50 text-muted-foreground hover:bg-muted'
          }`}
        >
          <span className="text-xl font-bold">{completedCount}</span>
          <span className="text-sm">Completed</span>
        </button>
        <button
          onClick={() => onTabChange('invites')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            activeTab === 'invites' 
              ? 'bg-orange-500/10 text-orange-500' 
              : 'bg-muted/50 text-muted-foreground hover:bg-muted'
          }`}
        >
          <Send className="w-4 h-4" />
          <span className="text-xl font-bold">{invitesCount}</span>
          <span className="text-sm">Invites</span>
        </button>
      </div>
    </motion.div>
  );
}
