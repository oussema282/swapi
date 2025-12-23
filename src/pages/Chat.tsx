import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMessages, useSendMessage, useMatches, MessageWithStatus } from '@/hooks/useMatches';
import { usePresence } from '@/hooks/usePresence';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChatHeader } from '@/components/chat/ChatHeader';
import { MessageBubble } from '@/components/chat/MessageBubble';

export default function Chat() {
  const { matchId } = useParams<{ matchId: string }>();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { data: matches } = useMatches();
  const { data: messages, isLoading } = useMessages(matchId || '');
  const sendMessage = useSendMessage();

  const match = matches?.find(m => m.id === matchId);
  const otherUserId = match?.other_user_id;
  
  const { isOnline, getLastSeen } = usePresence(matchId);
  const otherUserOnline = otherUserId ? isOnline(otherUserId) : false;
  const otherUserLastSeen = otherUserId ? getLastSeen(otherUserId) : undefined;
  
  // Get last_seen from profile if realtime presence hasn't captured it
  const profileLastSeen = match?.other_user_profile?.last_seen 
    ? new Date(match.other_user_profile.last_seen) 
    : null;
  const displayLastSeen = otherUserLastSeen || profileLastSeen;

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim() || !matchId) return;

    try {
      await sendMessage.mutateAsync({ matchId, content: message.trim() });
      setMessage('');
    } catch (error) {
      console.error('Failed to send message');
    }
  };

  // Group consecutive messages by sender with position info
  const groupedMessages = messages?.reduce<{ messages: MessageWithStatus[]; senderId: string }[]>(
    (groups, msg) => {
      const lastGroup = groups[groups.length - 1];
      if (lastGroup && lastGroup.senderId === msg.sender_id) {
        lastGroup.messages.push(msg);
      } else {
        groups.push({ messages: [msg], senderId: msg.sender_id });
      }
      return groups;
    },
    []
  ) || [];

  if (authLoading || isLoading) {
    return (
      <AppLayout showNav={false}>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout showNav={false}>
      <div className="flex flex-col h-screen">
        {/* Professional Chat Header */}
        <ChatHeader
          avatarUrl={match?.other_user_profile?.avatar_url}
          displayName={match?.other_user_profile?.display_name || 'Unknown'}
          isOnline={otherUserOnline}
          lastSeen={displayLastSeen}
          matchId={matchId}
          myItemTitle={match?.my_item?.title}
          theirItemTitle={match?.their_item?.title}
          myItemPhoto={match?.my_item?.photos?.[0]}
          theirItemPhoto={match?.their_item?.photos?.[0]}
        />

        {/* Messages - flex-col-reverse makes messages start from bottom */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col-reverse bg-background">
          <div ref={messagesEndRef} />
          <div className="space-y-1 mt-auto">
            {messages?.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <p className="text-sm text-muted-foreground">
                  Start the conversation! Say hi and discuss the swap details.
                </p>
              </motion.div>
            )}
          
          <AnimatePresence initial={false}>
            {groupedMessages.map((group, groupIndex) => {
              const isMe = group.senderId === user?.id;
              const isLastGroup = groupIndex === groupedMessages.length - 1;
              
              return (
                <div 
                  key={`group-${groupIndex}`} 
                  className="flex flex-col gap-0.5 mb-2"
                >
                  {group.messages.map((msg, msgIndex) => {
                    const totalInGroup = group.messages.length;
                    const isLastInGroup = msgIndex === totalInGroup - 1;
                    const isLastMessage = isLastGroup && isLastInGroup;
                    
                    // Determine position for border radius
                    let position: 'first' | 'middle' | 'last' | 'single' = 'single';
                    if (totalInGroup > 1) {
                      if (msgIndex === 0) position = 'first';
                      else if (isLastInGroup) position = 'last';
                      else position = 'middle';
                    }
                    
                    return (
                      <MessageBubble
                        key={msg.id}
                        content={msg.content}
                        timestamp={new Date(msg.created_at)}
                        isOutgoing={isMe}
                        status={msg.status}
                        showStatus={isMe && isLastMessage}
                        position={position}
                        animationDelay={groupIndex * 0.02}
                      />
                    );
                  })}
                </div>
              );
            })}
            </AnimatePresence>
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-card">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="h-12"
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
            />
            <Button
              onClick={handleSend}
              disabled={!message.trim() || sendMessage.isPending}
              className="h-12 w-12 gradient-primary shadow-lg"
            >
              {sendMessage.isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
