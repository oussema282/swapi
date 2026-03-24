import { motion } from 'framer-motion';
import { ArrowLeftRight, Send, HeartOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type TabType = 'active' | 'completed' | 'invites' | 'missed';

interface MatchesHeaderProps {
  activeCount: number;
  completedCount: number;
  invitesCount: number;
  missedCount?: number;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function MatchesHeader({ 
  activeCount, 
  completedCount, 
  invitesCount,
  missedCount = 0,
  activeTab,
  onTabChange,
}: MatchesHeaderProps) {
  const { t } = useTranslation();

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
            <h1 className="text-2xl font-display font-bold">{t('matches.title')}</h1>
            <p className="text-sm text-muted-foreground">
              {t('matches.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mt-4 flex-wrap">
        <button
          onClick={() => onTabChange('active')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            activeTab === 'active' 
              ? 'bg-primary/10 text-primary' 
              : 'bg-muted/50 text-muted-foreground hover:bg-muted'
          }`}
        >
          <span className="text-xl font-bold">{activeCount}</span>
          <span className="text-sm">{t('matches.active')}</span>
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
          <span className="text-sm">{t('matches.completed')}</span>
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
          <span className="text-sm">{t('matches.dealInvites')}</span>
        </button>
        {missedCount > 0 && (
          <button
            onClick={() => onTabChange('missed')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'missed' 
                ? 'bg-destructive/10 text-destructive' 
                : 'bg-muted/50 text-muted-foreground hover:bg-muted'
            }`}
          >
            <HeartOff className="w-4 h-4" />
            <span className="text-xl font-bold">{missedCount}</span>
            <span className="text-sm">{t('matches.missed')}</span>
          </button>
        )}
      </div>
    </motion.div>
  );
}
