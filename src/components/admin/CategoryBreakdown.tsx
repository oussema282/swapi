import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { CATEGORIES, getCategoryLabel, getCategoryIcon } from '@/config/categories';

interface CategoryData {
  category: string;
  count: number;
  percentage: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  electronique: '#3b82f6',
  vehicules: '#f97316',
  immobilier: '#10b981',
  mode: '#ec4899',
  maison_jardin: '#10b981',
  sports: '#f97316',
  jeux_jouets: '#a855f7',
  livres_medias: '#f59e0b',
  animaux: '#6366f1',
  beaute_sante: '#ec4899',
  bricolage: '#64748b',
  alimentation: '#22c55e',
  bebe_enfants: '#f472b6',
  autres: '#64748b',
};

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
          <h3 className="font-semibold">Articles par catégorie</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {total.toLocaleString()} articles actifs au total
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {categories.map((cat) => {
          const Icon = getCategoryIcon(cat.category);
          const color = CATEGORY_COLORS[cat.category] || '#64748b';

          return (
            <div key={cat.category} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md" style={{ backgroundColor: `${color}15` }}>
                    <Icon className="h-3.5 w-3.5" style={{ color }} />
                  </div>
                  <span className="text-sm font-medium">{getCategoryLabel(cat.category)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{cat.count}</span>
                  <span className="text-xs font-medium">{cat.percentage.toFixed(1)}%</span>
                </div>
              </div>
              <Progress
                value={cat.percentage}
                className="h-1.5"
                style={{ '--progress-color': color } as React.CSSProperties}
              />
            </div>
          );
        })}

        {categories.length === 0 && (
          <p className="text-center text-muted-foreground py-4">
            Aucun article trouvé
          </p>
        )}
      </div>
    </div>
  );
}
