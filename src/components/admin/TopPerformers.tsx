import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Package, Handshake, Star } from 'lucide-react';

interface TopUser {
  id: string;
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  count: number;
  rank: number;
}

interface TopItem {
  id: string;
  title: string;
  photos: string[] | null;
  likes: number;
  rating: number;
}

export function TopPerformers() {
  const [topUsers, setTopUsers] = useState<TopUser[]>([]);
  const [topItems, setTopItems] = useState<TopItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopPerformers() {
      try {
        // Get users with most items
        const { data: items } = await supabase
          .from('items')
          .select('user_id')
          .eq('is_archived', false);

        const userItemCounts: Record<string, number> = {};
        items?.forEach(item => {
          userItemCounts[item.user_id] = (userItemCounts[item.user_id] || 0) + 1;
        });

        const topUserIds = Object.entries(userItemCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([id]) => id);

        if (topUserIds.length > 0) {
          const { data: profiles } = await supabase
            .from('profiles')
            .select('id, user_id, display_name, avatar_url')
            .in('user_id', topUserIds);

          const topUsersData = profiles?.map((p, i) => ({
            ...p,
            count: userItemCounts[p.user_id] || 0,
            rank: i + 1,
          })).sort((a, b) => b.count - a.count) || [];

          setTopUsers(topUsersData);
        }

        // Get top rated items
        const { data: ratings } = await supabase
          .from('item_ratings')
          .select('item_id, rating, likes_count')
          .order('rating', { ascending: false })
          .limit(5);

        if (ratings && ratings.length > 0) {
          const itemIds = ratings.map(r => r.item_id);
          const { data: itemDetails } = await supabase
            .from('items')
            .select('id, title, photos')
            .in('id', itemIds);

          const topItemsData = ratings.map(r => {
            const item = itemDetails?.find(i => i.id === r.item_id);
            return {
              id: r.item_id,
              title: item?.title || 'Unknown Item',
              photos: item?.photos || null,
              likes: r.likes_count,
              rating: r.rating,
            };
          });

          setTopItems(topItemsData);
        }
      } catch (error) {
        console.error('Error fetching top performers:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTopPerformers();
  }, []);

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">🥇 1st</Badge>;
      case 2:
        return <Badge className="bg-slate-400/10 text-slate-600 border-slate-400/20">🥈 2nd</Badge>;
      case 3:
        return <Badge className="bg-orange-600/10 text-orange-600 border-orange-600/20">🥉 3rd</Badge>;
      default:
        return <Badge variant="outline">#{rank}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
        <div className="h-5 w-32 bg-muted rounded mb-4" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="flex-1">
                <div className="h-4 w-24 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card">
      <Tabs defaultValue="users" className="w-full">
        <div className="border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Top Performers</h3>
            <TabsList className="h-8">
              <TabsTrigger value="users" className="text-xs px-3">
                <Crown className="h-3 w-3 mr-1" />
                Users
              </TabsTrigger>
              <TabsTrigger value="items" className="text-xs px-3">
                <Star className="h-3 w-3 mr-1" />
                Items
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="users" className="m-0">
          <ScrollArea className="h-[300px]">
            <div className="p-4 space-y-1">
              {topUsers.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No data available
                </p>
              ) : (
                topUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar_url || undefined} />
                      <AvatarFallback>
                        {user.display_name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.display_name}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Package className="h-3 w-3" />
                        <span>{user.count} items listed</span>
                      </div>
                    </div>
                    {getRankBadge(user.rank)}
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="items" className="m-0">
          <ScrollArea className="h-[300px]">
            <div className="p-4 space-y-1">
              {topItems.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No rated items yet
                </p>
              ) : (
                topItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-muted overflow-hidden">
                      {item.photos?.[0] ? (
                        <img 
                          src={item.photos[0]} 
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center">
                          <Package className="h-5 w-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                          {item.rating.toFixed(1)}
                        </span>
                        <span>•</span>
                        <span>{item.likes} likes</span>
                      </div>
                    </div>
                    {getRankBadge(index + 1)}
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
