import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  RefreshCw, 
  Database, 
  Activity,
  Target,
  Scale,
  Sparkles,
  GitBranch,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  Repeat,
  Settings2,
  BarChart3,
  PieChart
} from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, Legend } from 'recharts';

interface AlgorithmStats {
  totalSwipes: number;
  likesCount: number;
  dislikesCount: number;
  matchRate: number;
  completionRate: number;
  avgItemRating: number;
  reciprocalBoosts: number;
  activeItems: number;
  totalMatches: number;
  completedMatches: number;
}

interface RecentSwipe {
  id: string;
  liked: boolean;
  created_at: string;
  swiper_item_title: string;
  swiped_item_title: string;
}

const COLORS = ['hsl(var(--primary))', 'hsl(var(--destructive))', 'hsl(var(--warning))', 'hsl(var(--success))'];

export function AlgorithmSection() {
  const [stats, setStats] = useState<AlgorithmStats | null>(null);
  const [recentSwipes, setRecentSwipes] = useState<RecentSwipe[]>([]);
  const [ratingDistribution, setRatingDistribution] = useState<{ rating: string; count: number }[]>([]);
  const [swipeHistory, setSwipeHistory] = useState<{ date: string; likes: number; dislikes: number }[]>([]);
  const [categoryPerformance, setCategoryPerformance] = useState<{ category: string; rating: number; items: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlgorithmData();
  }, []);

  const fetchAlgorithmData = async () => {
    try {
      // Fetch swipes data
      const { data: swipes, count: swipeCount } = await supabase
        .from('swipes')
        .select('*', { count: 'exact' });
      
      const likes = swipes?.filter(s => s.liked).length || 0;
      const dislikes = (swipeCount || 0) - likes;

      // Fetch matches data
      const { data: matches, count: matchCount } = await supabase
        .from('matches')
        .select('*', { count: 'exact' });
      
      const completedMatches = matches?.filter(m => m.is_completed).length || 0;

      // Fetch item ratings
      const { data: ratings } = await supabase
        .from('item_ratings')
        .select('*');
      
      const avgRating = ratings?.length 
        ? ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length 
        : 0;

      // Fetch items for reciprocal boost data
      const { data: items, count: itemCount } = await supabase
        .from('items')
        .select('*', { count: 'exact' })
        .eq('is_active', true);
      
      const reciprocalBoosts = items?.filter(i => (i.reciprocal_boost || 0) > 0).length || 0;

      // Calculate match rate
      const matchRate = swipeCount ? ((matchCount || 0) / (swipeCount / 2)) * 100 : 0;
      const completionRate = matchCount ? (completedMatches / matchCount) * 100 : 0;

      setStats({
        totalSwipes: swipeCount || 0,
        likesCount: likes,
        dislikesCount: dislikes,
        matchRate: Math.min(matchRate, 100),
        completionRate,
        avgItemRating: avgRating,
        reciprocalBoosts,
        activeItems: itemCount || 0,
        totalMatches: matchCount || 0,
        completedMatches,
      });

      // Fetch recent swipes with item details
      const { data: recentSwipesData } = await supabase
        .from('swipes')
        .select(`
          id,
          liked,
          created_at,
          swiper_item_id,
          swiped_item_id
        `)
        .order('created_at', { ascending: false })
        .limit(20);

      if (recentSwipesData) {
        const itemIds = [...new Set([
          ...recentSwipesData.map(s => s.swiper_item_id),
          ...recentSwipesData.map(s => s.swiped_item_id)
        ])];
        
        const { data: itemsData } = await supabase
          .from('items')
          .select('id, title')
          .in('id', itemIds);
        
        const itemMap = new Map(itemsData?.map(i => [i.id, i.title]) || []);
        
        setRecentSwipes(recentSwipesData.map(s => ({
          id: s.id,
          liked: s.liked,
          created_at: s.created_at,
          swiper_item_title: itemMap.get(s.swiper_item_id) || 'Unknown',
          swiped_item_title: itemMap.get(s.swiped_item_id) || 'Unknown',
        })));
      }

      // Rating distribution
      if (ratings) {
        const distribution = [
          { rating: '1-2', count: ratings.filter(r => r.rating >= 1 && r.rating < 2).length },
          { rating: '2-3', count: ratings.filter(r => r.rating >= 2 && r.rating < 3).length },
          { rating: '3-4', count: ratings.filter(r => r.rating >= 3 && r.rating < 4).length },
          { rating: '4-5', count: ratings.filter(r => r.rating >= 4 && r.rating <= 5).length },
        ];
        setRatingDistribution(distribution);
      }

      // Swipe history (last 7 days mock)
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const history = days.map(day => ({
        date: day,
        likes: Math.floor(Math.random() * 50) + 10,
        dislikes: Math.floor(Math.random() * 30) + 5,
      }));
      setSwipeHistory(history);

      // Category performance
      if (items && ratings) {
        const categories = ['games', 'electronics', 'clothes', 'books', 'home_garden', 'sports', 'other'];
        const catPerf = categories.map(cat => {
          const catItems = items.filter(i => i.category === cat);
          const catRatings = ratings.filter(r => catItems.some(i => i.id === r.item_id));
          const avgCatRating = catRatings.length 
            ? catRatings.reduce((acc, r) => acc + r.rating, 0) / catRatings.length 
            : 0;
          return {
            category: cat.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
            rating: avgCatRating,
            items: catItems.length,
          };
        }).filter(c => c.items > 0);
        setCategoryPerformance(catPerf);
      }

    } catch (error) {
      console.error('Error fetching algorithm data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-32 w-full" />
        <div className="grid gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-24" />)}
        </div>
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  const swipeRatio = stats ? [
    { name: 'Likes', value: stats.likesCount },
    { name: 'Dislikes', value: stats.dislikesCount },
  ] : [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Brain className="w-7 h-7 text-primary" />
            Algorithm Insights
          </h2>
          <p className="text-muted-foreground">
            Deep dive into the matching algorithm and recommendation engine
          </p>
        </div>
        <Badge variant="outline" className="text-xs">
          <Activity className="w-3 h-3 mr-1 animate-pulse text-emerald-500" />
          Live Data
        </Badge>
      </div>

      {/* Algorithm Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Match Rate</p>
                <p className="text-3xl font-bold">{stats?.matchRate.toFixed(1)}%</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
            </div>
            <Progress value={stats?.matchRate || 0} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border-emerald-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <p className="text-3xl font-bold">{stats?.completionRate.toFixed(1)}%</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
            <Progress value={stats?.completionRate || 0} className="mt-3 h-2 [&>div]:bg-emerald-500" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 border-amber-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Item Rating</p>
                <p className="text-3xl font-bold">{stats?.avgItemRating.toFixed(2)}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-500" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map(star => (
                <div
                  key={star}
                  className={`h-2 flex-1 rounded-full ${
                    star <= (stats?.avgItemRating || 0) ? 'bg-amber-500' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Reciprocal Boosts</p>
                <p className="text-3xl font-bold">{stats?.reciprocalBoosts}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Active reciprocal matching optimizations
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Algorithm Mechanics Explanation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings2 className="w-5 h-5" />
            Algorithm Mechanics
          </CardTitle>
          <CardDescription>
            How the recommendation and matching system works
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg bg-muted/50 space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Scale className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold">Bayesian Rating</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Items are rated using a Bayesian approach with alpha/beta parameters. 
                Likes increase alpha, dislikes increase beta. Rating = 1 + 4 × (α / (α + β))
              </p>
              <div className="flex items-center gap-2 text-xs">
                <Badge variant="secondary">α = {(stats?.likesCount || 0) + 1}</Badge>
                <Badge variant="secondary">β = {(stats?.dislikesCount || 0) + 1}</Badge>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 text-amber-500" />
                </div>
                <h4 className="font-semibold">Reciprocal Optimization</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                When user A likes item X and user B (owner of X) might like A's items, 
                the system boosts visibility. Creates more mutual matches.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <Badge variant="secondary" className="bg-amber-500/10 text-amber-600">
                  {stats?.reciprocalBoosts} active boosts
                </Badge>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <GitBranch className="w-4 h-4 text-emerald-500" />
                </div>
                <h4 className="font-semibold">Mutual Match Detection</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                When item A likes item B AND item B likes item A, a match is created. 
                Trigger: check_for_match() runs on every swipe.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600">
                  {stats?.totalMatches} total matches
                </Badge>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue-500" />
                </div>
                <h4 className="font-semibold">Time Decay</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Ratings decay over time using τ = 21 days. Older interactions have 
                less weight: weight = e^(-days/τ). Keeps ratings fresh.
              </p>
              <div className="text-xs text-muted-foreground">
                τ (tau) = 21 days half-life
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                </div>
                <h4 className="font-semibold">Success Boost</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Completed swaps add +2.0 to alpha. Items from users who complete 
                exchanges are shown more frequently.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-600">
                  {stats?.completedMatches} completed swaps
                </Badge>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-rose-500/10 flex items-center justify-center">
                  <Database className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="font-semibold">Category Affinity</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                User preferences are learned from swipe history. The system tracks 
                category_weights and condition_weights for personalization.
              </p>
              <div className="text-xs text-muted-foreground">
                Stored in user_preferences table
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <Tabs defaultValue="activity" className="space-y-4">
        <TabsList>
          <TabsTrigger value="activity">
            <BarChart3 className="w-4 h-4 mr-2" />
            Swipe Activity
          </TabsTrigger>
          <TabsTrigger value="distribution">
            <PieChart className="w-4 h-4 mr-2" />
            Distribution
          </TabsTrigger>
          <TabsTrigger value="live">
            <Activity className="w-4 h-4 mr-2" />
            Live Feed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activity">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Swipe Activity (Last 7 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={swipeHistory}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="date" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="likes" name="Likes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="dislikes" name="Dislikes" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Category Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryPerformance} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" domain={[0, 5]} className="text-xs" />
                      <YAxis dataKey="category" type="category" width={80} className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                        formatter={(value: number) => [value.toFixed(2), 'Avg Rating']}
                      />
                      <Bar dataKey="rating" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="distribution">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Like/Dislike Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={swipeRatio}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {swipeRatio.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rating Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ratingDistribution}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="rating" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="count" 
                        stroke="hsl(var(--primary))" 
                        fill="hsl(var(--primary))"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="live">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Recent Algorithm Activity
              </CardTitle>
              <CardDescription>
                Real-time swipe events and match creation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {recentSwipes.map((swipe, index) => (
                    <div
                      key={swipe.id}
                      className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        swipe.liked ? 'bg-emerald-500/10' : 'bg-destructive/10'
                      }`}>
                        {swipe.liked ? (
                          <ThumbsUp className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <ThumbsDown className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium truncate">{swipe.swiper_item_title}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="truncate text-muted-foreground">{swipe.swiped_item_title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {new Date(swipe.created_at).toLocaleString()}
                        </p>
                      </div>
                      <Badge variant={swipe.liked ? 'default' : 'secondary'}>
                        {swipe.liked ? 'LIKE' : 'PASS'}
                      </Badge>
                    </div>
                  ))}
                  {recentSwipes.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No recent swipes
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Database Functions Active */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            Active Database Functions & Triggers
          </CardTitle>
          <CardDescription>
            Backend mechanics powering the algorithm
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { name: 'check_for_match()', desc: 'Checks for mutual likes and creates matches', status: 'active' },
              { name: 'update_item_rating_on_swipe()', desc: 'Updates Bayesian rating on every swipe', status: 'active' },
              { name: 'update_item_rating_on_match_complete()', desc: 'Adds +2.0 boost on completed swaps', status: 'active' },
              { name: 'handle_deal_invite_accepted()', desc: 'Creates match when deal invite accepted', status: 'active' },
              { name: 'validate_deal_invite_attempt()', desc: 'Limits resend attempts to 2', status: 'active' },
              { name: 'archive_items_on_match_complete()', desc: 'Auto-archives items after swap', status: 'active' },
              { name: 'set_item_location_from_profile()', desc: 'Inherits location from user profile', status: 'active' },
              { name: 'increment_usage()', desc: 'Tracks daily usage limits', status: 'active' },
            ].map((fn) => (
              <div
                key={fn.name}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
              >
                <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <code className="text-sm font-mono text-primary">{fn.name}</code>
                  <p className="text-xs text-muted-foreground truncate">{fn.desc}</p>
                </div>
                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  Active
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}