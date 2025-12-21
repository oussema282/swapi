import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMyItems, useDeleteItem } from '@/hooks/useItems';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, Package, Trash2, Edit, Loader2 } from 'lucide-react';
import { CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { useEffect } from 'react';

export default function Items() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: items, isLoading } = useMyItems();
  const deleteItem = useDeleteItem();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  const handleDelete = async (id: string) => {
    try {
      await deleteItem.mutateAsync(id);
      toast({ title: 'Item deleted' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Failed to delete item' });
    }
  };

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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-display font-bold">My Items</h1>
            <p className="text-sm text-muted-foreground">{items?.length || 0} items listed</p>
          </div>
          <Button onClick={() => navigate('/items/new')} className="gradient-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>

        {items && items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-4 flex gap-4">
                <div className="w-20 h-20 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                  {item.photos?.[0] ? (
                    <img src={item.photos[0]} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package className="w-8 h-8 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{item.title}</h3>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">{CATEGORY_LABELS[item.category]}</Badge>
                    <Badge variant="secondary" className="text-xs">{CONDITION_LABELS[item.condition]}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Looking for: {item.swap_preferences.map(c => CATEGORY_LABELS[c]).join(', ')}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="icon" variant="ghost" onClick={() => navigate(`/items/${item.id}/edit`)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-destructive" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No items yet. Add your first item to start swapping!</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
