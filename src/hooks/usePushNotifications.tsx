import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useTranslation } from 'react-i18next';

function showNotification(title: string, body: string, onClick?: () => void) {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  if (localStorage.getItem('notifications-enabled') === 'false') return;

  const notif = new Notification(title, {
    body,
    icon: '/placeholder.svg',
    tag: `${title}-${Date.now()}`,
  });

  if (onClick) {
    notif.onclick = () => {
      window.focus();
      onClick();
    };
  }
}

export function usePushNotifications() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const userIdRef = useRef<string | null>(null);

  useEffect(() => {
    userIdRef.current = user?.id ?? null;
  }, [user?.id]);

  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel('push-notifications')
      // New match
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'matches' },
        async (payload) => {
          if (!document.hidden && document.hasFocus()) return;
          const match = payload.new as any;
          // Check if user is part of this match
          const { data: items } = await supabase
            .from('items')
            .select('id, title, user_id')
            .in('id', [match.item_a_id, match.item_b_id]);
          
          const myItem = items?.find(i => i.user_id === userIdRef.current);
          const theirItem = items?.find(i => i.user_id !== userIdRef.current);
          
          if (myItem && theirItem) {
            showNotification(
              t('notifications.newMatch', 'New Match! 🎉'),
              t('notifications.newMatchBody', { item: theirItem.title, defaultValue: `You matched with "${theirItem.title}"` }),
              () => { window.location.href = '/matches'; }
            );
          }
        }
      )
      // New deal invite received
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'deal_invites' },
        async (payload) => {
          if (!document.hidden && document.hasFocus()) return;
          const invite = payload.new as any;
          // Check if I own the receiver item
          const { data: receiverItem } = await supabase
            .from('items')
            .select('id, title, user_id')
            .eq('id', invite.receiver_item_id)
            .single();
          
          if (receiverItem?.user_id === userIdRef.current) {
            showNotification(
              t('notifications.dealInvite', 'Deal Invitation 🤝'),
              t('notifications.dealInviteBody', { item: receiverItem.title, defaultValue: `Someone wants to swap for your "${receiverItem.title}"` }),
              () => { window.location.href = '/matches'; }
            );
          }
        }
      )
      // New message
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        async (payload) => {
          const msg = payload.new as any;
          if (msg.sender_id === userIdRef.current) return;
          if (!document.hidden && document.hasFocus()) return;

          // Get sender name
          const { data: senderProfile } = await supabase
            .from('profiles')
            .select('display_name')
            .eq('user_id', msg.sender_id)
            .single();

          const senderName = senderProfile?.display_name || 'Someone';
          const preview = msg.content?.substring(0, 60) || '';

          showNotification(
            t('notifications.newMessage', 'New Message 💬'),
            `${senderName}: ${preview}`,
            () => { window.location.href = `/chat/${msg.match_id}`; }
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, t]);
}
