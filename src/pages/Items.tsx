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
      <div className="flex flex-col h-full max-w-lg mx-auto w-full">
        {/* Fixed Header */}
        <div className="flex-shrink-0 px-4 pt-4 pb-3 bg-background">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-display font-bold">My Items</h1>
              <p className="text-sm text-muted-foreground">{items?.length || 0} items listed</p>
            </div>
            <Button onClick={() => navigate('/items/new')} size="sm" className="gradient-primary">
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {items && items.length > 0 ? (
            <div className="space-y-3">
              {items.map((item) => (
                <Card key={item.id} className="p-3 flex gap-3">
                  <div className="w-16 h-16 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                    {item.photos?.[0] ? (
                      <img src={item.photos[0]} alt={item.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                    <div className="flex gap-1.5 mt-1 flex-wrap">
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0">{CATEGORY_LABELS[item.category]}</Badge>
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{CONDITION_LABELS[item.condition]}</Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1 truncate">
                      Looking for: {item.swap_preferences.map(c => CATEGORY_LABELS[c]).join(', ')}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => navigate(`/items/${item.id}/edit`)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive" onClick={() => handleDelete(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <Package className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-center text-sm">No items yet. Add your first item to start swapping!</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
