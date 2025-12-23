import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMessages, useSendMessage, useMatches, MessageWithStatus } from '@/hooks/useMatches';
import { usePresence, formatLastSeen } from '@/hooks/usePresence';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send, Loader2, Package, ArrowLeftRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { format, isToday, isYesterday } from 'date-fns';
import { MessageStatus } from '@/components/chat/MessageStatus';
import { OnlineIndicator } from '@/components/chat/OnlineIndicator';

function formatMessageDate(date: Date) {
  if (isToday(date)) return format(date, 'HH:mm');
  if (isYesterday(date)) return `Yesterday ${format(date, 'HH:mm')}`;
  return format(date, 'MMM d, HH:mm');
}

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

  // Group consecutive messages by sender
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
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b bg-card shadow-sm">
          <Button variant="ghost" size="icon" onClick={() => navigate('/matches')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                {match?.my_item?.photos?.[0] ? (
                  <img src={match.my_item.photos[0]} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
              <ArrowLeftRight className="w-4 h-4 text-primary flex-shrink-0" />
              <div className="relative w-10 h-10 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                {match?.their_item?.photos?.[0] ? (
                  <img src={match.their_item.photos[0]} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
                <OnlineIndicator 
                  isOnline={otherUserOnline} 
                  className="bottom-0 right-0"
                  size="sm"
                />
              </div>
            </div>
            <div className="min-w-0 ml-2">
              <p className="font-semibold truncate">{match?.their_item?.title || 'Chat'}</p>
              <p className="text-xs text-muted-foreground truncate">
                {otherUserOnline ? (
                  <span className="text-green-500 font-medium">Online</span>
                ) : otherUserLastSeen ? (
                  `Last seen ${formatLastSeen(otherUserLastSeen)}`
                ) : (
                  `with ${match?.their_item?.owner_display_name}`
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
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
              const lastMessageIndex = group.messages.length - 1;
              
              return (
                <div key={`group-${groupIndex}`} className={cn('flex flex-col gap-0.5', isMe ? 'items-end' : 'items-start')}>
                  {group.messages.map((msg, msgIndex) => {
                    const isLastInGroup = msgIndex === lastMessageIndex;
                    const isLastMessage = groupIndex === groupedMessages.length - 1 && isLastInGroup;
                    
                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: groupIndex * 0.02 }}
                        className={cn('flex', isMe ? 'justify-end' : 'justify-start')}
                      >
                        <div
                          className={cn(
                            'max-w-[75%] px-4 py-2.5 shadow-sm',
                            isMe
                              ? 'gradient-primary text-primary-foreground'
                              : 'bg-card border border-border',
                            // Rounded corners based on position in group
                            isMe 
                              ? cn(
                                  'rounded-2xl',
                                  msgIndex === 0 && 'rounded-tr-2xl',
                                  msgIndex > 0 && 'rounded-tr-md',
                                  isLastInGroup && 'rounded-br-md'
                                )
                              : cn(
                                  'rounded-2xl',
                                  msgIndex === 0 && 'rounded-tl-2xl',
                                  msgIndex > 0 && 'rounded-tl-md',
                                  isLastInGroup && 'rounded-bl-md'
                                )
                          )}
                        >
                          <p className="text-sm leading-relaxed">{msg.content}</p>
                          <div className={cn(
                            'flex items-center gap-1 mt-1',
                            isMe ? 'justify-end' : 'justify-start'
                          )}>
                            <span
                              className={cn(
                                'text-[10px]',
                                isMe ? 'text-primary-foreground/70' : 'text-muted-foreground'
                              )}
                            >
                              {formatMessageDate(new Date(msg.created_at))}
                            </span>
                            {/* Show status only on last message from me */}
                            {isMe && isLastMessage && (
                              <MessageStatus status={msg.status} />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              );
            })}
          </AnimatePresence>
          <div ref={messagesEndRef} />
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
