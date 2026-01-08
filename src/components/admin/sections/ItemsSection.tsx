import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { DataTable } from '../DataTable';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Download, Filter } from 'lucide-react';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Item {
  id: string;
  title: string;
  category: string;
  condition: string;
  is_active: boolean;
  is_archived: boolean;
  created_at: string;
  user_id: string;
}

const columns = [
  { key: 'title', label: 'Item', type: 'text' as const },
  { key: 'category', label: 'Category', type: 'badge' as const },
  { 
    key: 'condition', 
    label: 'Condition', 
    type: 'badge' as const,
    badgeVariant: (value: string) => {
      if (value === 'new') return 'default';
      if (value === 'like_new') return 'secondary';
      return 'outline';
    },
  },
  { 
    key: 'status', 
    label: 'Status', 
    type: 'badge' as const,
    badgeVariant: (value: string) => {
      if (value === 'active') return 'default';
      if (value === 'archived') return 'secondary';
      return 'destructive';
    },
  },
  { key: 'created_at', label: 'Listed', type: 'date' as const },
  { key: 'actions', label: '', type: 'actions' as const },
];

const actions = [
  { label: 'View Item', value: 'view' },
  { label: 'Archive', value: 'archive' },
  { label: 'Delete', value: 'delete', destructive: true },
];

export function ItemsSection() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchItems();
  }, [page, search, categoryFilter]);

  async function fetchItems() {
    setLoading(true);
    try {
      let query = supabase
        .from('items')
        .select('*', { count: 'exact' });

      if (search) {
        query = query.ilike('title', `%${search}%`);
      }

      if (categoryFilter !== 'all') {
        query = query.eq('category', categoryFilter as any);
      }

      const { data, count, error } = await query
        .order('created_at', { ascending: false })
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (error) throw error;

      setItems(data || []);
      setTotalPages(Math.ceil((count || 0) / pageSize));
    } catch (error) {
      console.error('Error fetching items:', error);
      toast.error('Failed to load items');
    } finally {
      setLoading(false);
    }
  }

  const handleAction = async (action: string, item: Item) => {
    switch (action) {
      case 'view':
        toast.info('Item preview coming soon');
        break;
      case 'archive':
        try {
          const { error } = await supabase
            .from('items')
            .update({ is_archived: true })
            .eq('id', item.id);
          
          if (error) throw error;
          toast.success('Item archived');
          fetchItems();
        } catch (error) {
          toast.error('Failed to archive item');
        }
        break;
      case 'delete':
        try {
          const { error } = await supabase
            .from('items')
            .delete()
            .eq('id', item.id);
          
          if (error) throw error;
          toast.success('Item deleted');
          fetchItems();
        } catch (error) {
          toast.error('Failed to delete item');
        }
        break;
    }
  };

  const getStatus = (item: Item) => {
    if (item.is_archived) return 'archived';
    if (item.is_active) return 'active';
    return 'inactive';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Items</h2>
          <p className="text-muted-foreground">
            View and manage all listed items.
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search items..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="pl-9"
          />
        </div>
        <Select value={categoryFilter} onValueChange={(v) => { setCategoryFilter(v); setPage(1); }}>
          <SelectTrigger className="w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="clothes">Clothes</SelectItem>
            <SelectItem value="books">Books</SelectItem>
            <SelectItem value="games">Games</SelectItem>
            <SelectItem value="home_garden">Home & Garden</SelectItem>
            <SelectItem value="sports">Sports</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={items.map(item => ({
          ...item,
          status: getStatus(item),
        }))}
        loading={loading}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        onRowAction={handleAction}
        actions={actions}
      />
    </div>
  );
}
