import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMatches } from '@/hooks/useMatches';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftRight, MessageCircle, Package, Loader2 } from 'lucide-react';

export default function Matches() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { data: matches, isLoading } = useMatches();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  if (authLoading || isLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-[80vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-lg mx-auto px-4 pt-4">
        <h1 className="text-2xl font-display font-bold mb-2">Matches</h1>
        <p className="text-sm text-muted-foreground mb-6">{matches?.length || 0} active matches</p>

        {matches && matches.length > 0 ? (
          <div className="space-y-4">
            {matches.map((match) => (
              <Card
                key={match.id}
                className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/chat/${match.id}`)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                    {match.my_item?.photos?.[0] ? (
                      <img src={match.my_item.photos[0]} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  <ArrowLeftRight className="w-5 h-5 text-primary flex-shrink-0" />

                  <div className="w-14 h-14 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                    {match.their_item?.photos?.[0] ? (
                      <img src={match.their_item.photos[0]} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0 ml-2">
                    <p className="font-medium truncate">{match.their_item?.title}</p>
                    <p className="text-sm text-muted-foreground">with {match.their_item?.owner_display_name}</p>
                  </div>

                  <MessageCircle className="w-5 h-5 text-muted-foreground" />
                </div>

                {match.is_completed && (
                  <Badge variant="secondary" className="mt-2">Completed</Badge>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <ArrowLeftRight className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No matches yet. Keep swiping to find swaps!</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
