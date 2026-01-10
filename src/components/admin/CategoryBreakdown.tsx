import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { 
  Gamepad2, 
  Smartphone, 
  Shirt, 
  BookOpen, 
  Home, 
  Dumbbell,
  MoreHorizontal
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const categoryConfig: Record<string, { icon: React.ElementType; color: string; label: string }> = {
  games: { icon: Gamepad2, color: 'text-purple-500 bg-purple-500', label: 'Games' },
  electronics: { icon: Smartphone, color: 'text-blue-500 bg-blue-500', label: 'Electronics' },
  clothes: { icon: Shirt, color: 'text-pink-500 bg-pink-500', label: 'Clothes' },
  books: { icon: BookOpen, color: 'text-amber-500 bg-amber-500', label: 'Books' },
  home_garden: { icon: Home, color: 'text-emerald-500 bg-emerald-500', label: 'Home & Garden' },
  sports: { icon: Dumbbell, color: 'text-orange-500 bg-orange-500', label: 'Sports' },
  other: { icon: MoreHorizontal, color: 'text-slate-500 bg-slate-500', label: 'Other' },
};

interface CategoryData {
  category: string;
  count: number;
  percentage: number;
}

export function CategoryBreakdown() {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await supabase
          .from('items')
          .select('category')
          .eq('is_archived', false);

        if (!data) return;

        const counts: Record<string, number> = {};
        data.forEach(item => {
          counts[item.category] = (counts[item.category] || 0) + 1;
        });

        const totalItems = data.length;
        setTotal(totalItems);

        const categoryData = Object.entries(counts)
          .map(([category, count]) => ({
            category,
            count,
            percentage: totalItems > 0 ? (count / totalItems) * 100 : 0,
          }))
          .sort((a, b) => b.count - a.count);

        setCategories(categoryData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
        <div className="h-5 w-40 bg-muted rounded mb-4" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-2 w-full bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold">Items by Category</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {total.toLocaleString()} total active items
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {categories.map((cat) => {
          const config = categoryConfig[cat.category] || categoryConfig.other;
          const Icon = config.icon;
          const colorClass = config.color.split(' ');

          return (
            <div key={cat.category} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    'p-1.5 rounded-md',
                    colorClass[1] + '/10'
                  )}>
                    <Icon className={cn('h-3.5 w-3.5', colorClass[0])} />
                  </div>
                  <span className="text-sm font-medium">{config.label}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{cat.count}</span>
                  <span className="text-xs font-medium">{cat.percentage.toFixed(1)}%</span>
                </div>
              </div>
              <Progress
                value={cat.percentage}
                className="h-1.5"
                style={{
                  // @ts-ignore
                  '--progress-color': config.color.includes('purple') ? '#a855f7' :
                    config.color.includes('blue') ? '#3b82f6' :
                    config.color.includes('pink') ? '#ec4899' :
                    config.color.includes('amber') ? '#f59e0b' :
                    config.color.includes('emerald') ? '#10b981' :
                    config.color.includes('orange') ? '#f97316' :
                    '#64748b'
                } as React.CSSProperties}
              />
            </div>
          );
        })}

        {categories.length === 0 && (
          <p className="text-center text-muted-foreground py-4">
            No items found
          </p>
        )}
      </div>
    </div>
  );
}
