import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface PresenceState {
  onlineUsers: Set<string>;
  lastSeen: Map<string, Date>;
}

export function usePresence(matchId?: string) {
  const { user } = useAuth();
  const [presenceState, setPresenceState] = useState<PresenceState>({
    onlineUsers: new Set(),
    lastSeen: new Map(),
  });

  // Update last_seen in database
  const updateLastSeen = useCallback(async () => {
    if (!user) return;
    
    await supabase
      .from('profiles')
      .update({ last_seen: new Date().toISOString() })
      .eq('user_id', user.id);
  }, [user]);

  useEffect(() => {
    if (!user || !matchId) return;

    const channelName = `presence-${matchId}`;
    
    const channel = supabase.channel(channelName)
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        const onlineIds = new Set<string>();
        
        Object.values(state).forEach((presences: any[]) => {
          presences.forEach((presence) => {
            if (presence.user_id) {
              onlineIds.add(presence.user_id);
            }
          });
        });
        
        setPresenceState(prev => ({
          ...prev,
          onlineUsers: onlineIds,
        }));
      })
      .on('presence', { event: 'join' }, ({ newPresences }) => {
        setPresenceState(prev => {
          const newOnline = new Set(prev.onlineUsers);
          newPresences.forEach((p: any) => {
            if (p.user_id) newOnline.add(p.user_id);
          });
          return { ...prev, onlineUsers: newOnline };
        });
      })
      .on('presence', { event: 'leave' }, ({ leftPresences }) => {
        setPresenceState(prev => {
          const newOnline = new Set(prev.onlineUsers);
          const newLastSeen = new Map(prev.lastSeen);
          
          leftPresences.forEach((p: any) => {
            if (p.user_id) {
              newOnline.delete(p.user_id);
              newLastSeen.set(p.user_id, new Date());
            }
          });
          
          return { onlineUsers: newOnline, lastSeen: newLastSeen };
        });
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            user_id: user.id,
            online_at: new Date().toISOString(),
          });
        }
      });

    // Update last_seen periodically and on visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        updateLastSeen();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', updateLastSeen);

    return () => {
      channel.untrack();
      supabase.removeChannel(channel);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', updateLastSeen);
      updateLastSeen();
    };
  }, [user, matchId, updateLastSeen]);

  const isOnline = useCallback((userId: string) => {
    return presenceState.onlineUsers.has(userId);
  }, [presenceState.onlineUsers]);

  const getLastSeen = useCallback((userId: string) => {
    return presenceState.lastSeen.get(userId);
  }, [presenceState.lastSeen]);

  return { isOnline, getLastSeen, onlineUsers: presenceState.onlineUsers };
}

export function formatLastSeen(date: Date | undefined | null): string {
  if (!date) return '';
  
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  
  return date.toLocaleDateString(undefined, { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}
