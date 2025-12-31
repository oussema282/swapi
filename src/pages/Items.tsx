import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMyItems, useDeleteItem, useUnarchiveItem } from '@/hooks/useItems';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, Package, Trash2, Edit, Loader2, Archive, ArchiveRestore } from 'lucide-react';
import { CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function Items() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: items, isLoading } = useMyItems();
  const deleteItem = useDeleteItem();
  const unarchiveItem = useUnarchiveItem();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  const handleDelete = async () => {
    if (!deleteId) return;
    setIsDeleting(true);
    try {
      await deleteItem.mutateAsync(deleteId);
      toast({ title: 'Item deleted successfully' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Failed to delete item' });
    } finally {
      setIsDeleting(false);
      setDeleteId(null);
    }
  };

  const handleUnarchive = async (id: string) => {
    try {
      await unarchiveItem.mutateAsync(id);
      toast({ title: 'Item restored for trading!' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Failed to restore item' });
    }
  };

  // Separate active and archived items
  const activeItems = items?.filter(item => !item.is_archived) || [];
  const archivedItems = items?.filter(item => item.is_archived) || [];

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col h-full max-w-lg mx-auto w-full"
      >
        {/* Fixed Header */}
        <div className="flex-shrink-0 px-4 pt-4 pb-3 bg-background">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold">My Items</h1>
              <p className="text-sm text-muted-foreground">
                {activeItems.length} active{archivedItems.length > 0 ? `, ${archivedItems.length} archived` : ''}
              </p>
            </div>
            <Button onClick={() => navigate('/items/new')} className="gradient-primary shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-24">
          {/* Active Items */}
          {activeItems.length > 0 && (
            <div className="space-y-3 mb-6">
              <AnimatePresence mode="popLayout">
                {activeItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: index * 0.05 }}
                    layout
                  >
                    <Card className="p-4 flex gap-4 hover:shadow-md transition-shadow">
                      <div className="w-20 h-20 rounded-xl bg-muted flex-shrink-0 overflow-hidden">
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
                        <div className="flex gap-2 mt-2 flex-wrap">
                          <Badge variant="outline" className="text-xs">{CATEGORY_LABELS[item.category]}</Badge>
                          <Badge variant="secondary" className="text-xs">{CONDITION_LABELS[item.condition]}</Badge>
                        </div>
                        {item.value_min && item.value_max && (
                          <p className="text-xs text-muted-foreground mt-2">
                            ${item.value_min} - ${item.value_max}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-9 w-9"
                          onClick={() => navigate(`/items/${item.id}/edit`)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-9 w-9 border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => setDeleteId(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Archived Items Section */}
          {archivedItems.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 py-2">
                <Archive className="w-4 h-4 text-muted-foreground" />
                <h2 className="text-sm font-medium text-muted-foreground">Archived Items</h2>
              </div>
              <AnimatePresence mode="popLayout">
                {archivedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: index * 0.05 }}
                    layout
                  >
                    <Card className="p-4 flex gap-4 bg-muted/30 border-border/50">
                      <div className="w-20 h-20 rounded-xl bg-muted flex-shrink-0 overflow-hidden opacity-60">
                        {item.photos?.[0] ? (
                          <img src={item.photos[0]} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Package className="w-8 h-8 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold truncate text-muted-foreground">{item.title}</h3>
                          <Badge variant="secondary" className="text-xs bg-muted">Swapped</Badge>
                        </div>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          <Badge variant="outline" className="text-xs opacity-60">{CATEGORY_LABELS[item.category]}</Badge>
                          <Badge variant="secondary" className="text-xs opacity-60">{CONDITION_LABELS[item.condition]}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          This item was swapped and is no longer available for trading.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-9 w-9 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() => handleUnarchive(item.id)}
                          title="Restore for trading"
                        >
                          <ArchiveRestore className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-9 w-9 border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => setDeleteId(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Empty State */}
          {activeItems.length === 0 && archivedItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <Package className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">No items yet</h3>
              <p className="text-muted-foreground text-center text-sm mb-6 max-w-xs">
                Add your first item to start swapping with others!
              </p>
              <Button onClick={() => navigate('/items/new')} className="gradient-primary shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Item
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this item?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the item and remove all related matches.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AppLayout>
  );
}