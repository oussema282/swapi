import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { DataTable } from '../DataTable';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Download, Filter, Flag, CheckCircle, XCircle, Eye } from 'lucide-react';
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
  is_flagged: boolean;
  flagged_reason: string | null;
  created_at: string;
  user_id: string;
  moderation_status?: 'safe' | 'blocked' | 'pending' | 'unknown';
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
    key: 'status_badge', 
    label: 'Status', 
    type: 'custom' as const,
  },
  { key: 'created_at', label: 'Listed', type: 'date' as const },
  { key: 'actions', label: '', type: 'actions' as const },
];

const actions = [
  { label: 'View Item', value: 'view' },
  { label: 'Flag Item', value: 'flag' },
  { label: 'Unflag Item', value: 'unflag' },
  { label: 'Archive', value: 'archive' },
  { label: 'Delete', value: 'delete', destructive: true },
];

export function ItemsSection() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchItems();
  }, [page, search, categoryFilter, statusFilter]);

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

      if (statusFilter === 'flagged') {
        query = query.eq('is_flagged', true);
      } else if (statusFilter === 'active') {
        query = query.eq('is_active', true).eq('is_archived', false);
      } else if (statusFilter === 'archived') {
        query = query.eq('is_archived', true);
      }

      const { data, count, error } = await query
        .order('created_at', { ascending: false })
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (error) throw error;

      // Fetch moderation status for items (check if they have any moderation logs)
      const itemIds = data?.map(i => i.id) || [];
      // Note: Since item photos are stored as arrays, we'd need to match by user_id
      // For now, we'll mark moderation status based on is_flagged

      const itemsWithStatus = (data || []).map(item => ({
        ...item,
        moderation_status: item.is_flagged ? 'blocked' as const : 'safe' as const,
      }));

      setItems(itemsWithStatus);
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
      case 'flag':
        try {
          const { error } = await supabase
            .from('items')
            .update({ is_flagged: true, flagged_reason: 'Flagged by admin' })
            .eq('id', item.id);
          
          if (error) throw error;
          toast.success('Item flagged');
          fetchItems();
        } catch (error) {
          toast.error('Failed to flag item');
        }
        break;
      case 'unflag':
        try {
          const { error } = await supabase
            .from('items')
            .update({ is_flagged: false, flagged_reason: null })
            .eq('id', item.id);
          
          if (error) throw error;
          toast.success('Item unflagged');
          fetchItems();
        } catch (error) {
          toast.error('Failed to unflag item');
        }
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

  const getStatusBadges = (item: Item) => {
    const badges = [];
    
    if (item.is_flagged) {
      badges.push(
        <Badge key="flagged" variant="destructive" className="text-xs">
          <Flag className="h-3 w-3 mr-1" />
          Flagged
        </Badge>
      );
    }
    
    if (item.moderation_status === 'blocked') {
      badges.push(
        <Badge key="blocked" variant="destructive" className="text-xs">
          <XCircle className="h-3 w-3 mr-1" />
          Blocked
        </Badge>
      );
    } else if (item.moderation_status === 'pending') {
      badges.push(
        <Badge key="pending" variant="outline" className="border-warning text-warning text-xs">
          <Eye className="h-3 w-3 mr-1" />
          Review
        </Badge>
      );
    }
    
    if (item.is_archived) {
      badges.push(
        <Badge key="archived" variant="secondary" className="text-xs">
          Archived
        </Badge>
      );
    } else if (item.is_active && !item.is_flagged) {
      badges.push(
        <Badge key="active" variant="secondary" className="bg-success/10 text-success text-xs">
          <CheckCircle className="h-3 w-3 mr-1" />
          Active
        </Badge>
      );
    } else if (!item.is_active && !item.is_flagged) {
      badges.push(
        <Badge key="inactive" variant="outline" className="text-xs">
          Inactive
        </Badge>
      );
    }
    
    return <div className="flex flex-wrap gap-1">{badges}</div>;
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
          <SelectTrigger className="w-[150px]">
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
        <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(1); }}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="flagged">Flagged</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={items.map(item => ({
          ...item,
          status_badge: getStatusBadges(item),
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
