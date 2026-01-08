import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { DataTable } from '../DataTable';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Download } from 'lucide-react';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Match {
  id: string;
  item_a_id: string;
  item_b_id: string;
  is_completed: boolean;
  confirmed_by_user_a: boolean;
  confirmed_by_user_b: boolean;
  created_at: string;
  completed_at: string | null;
}

const columns = [
  { key: 'id', label: 'Match ID', type: 'text' as const },
  { 
    key: 'status', 
    label: 'Status', 
    type: 'badge' as const,
    badgeVariant: (value: string) => {
      if (value === 'Completed') return 'default';
      if (value === 'Pending') return 'secondary';
      return 'outline';
    },
  },
  { key: 'confirmations', label: 'Confirmations', type: 'text' as const },
  { key: 'created_at', label: 'Created', type: 'date' as const },
  { key: 'completed_at', label: 'Completed', type: 'date' as const },
  { key: 'actions', label: '', type: 'actions' as const },
];

const actions = [
  { label: 'View Details', value: 'view' },
  { label: 'Force Complete', value: 'complete' },
  { label: 'Delete Match', value: 'delete', destructive: true },
];

export function MatchesSection() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchMatches();
  }, [page, search, statusFilter]);

  async function fetchMatches() {
    setLoading(true);
    try {
      let query = supabase
        .from('matches')
        .select('*', { count: 'exact' });

      if (search) {
        query = query.ilike('id', `%${search}%`);
      }

      if (statusFilter === 'completed') {
        query = query.eq('is_completed', true);
      } else if (statusFilter === 'pending') {
        query = query.eq('is_completed', false);
      }

      const { data, count, error } = await query
        .order('created_at', { ascending: false })
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (error) throw error;

      setMatches(data || []);
      setTotalPages(Math.ceil((count || 0) / pageSize));
    } catch (error) {
      console.error('Error fetching matches:', error);
      toast.error('Failed to load matches');
    } finally {
      setLoading(false);
    }
  }

  const handleAction = async (action: string, match: Match) => {
    switch (action) {
      case 'view':
        toast.info('Match details view coming soon');
        break;
      case 'complete':
        try {
          const { error } = await supabase
            .from('matches')
            .update({ 
              is_completed: true, 
              completed_at: new Date().toISOString(),
              confirmed_by_user_a: true,
              confirmed_by_user_b: true,
            })
            .eq('id', match.id);
          
          if (error) throw error;
          toast.success('Match marked as completed');
          fetchMatches();
        } catch (error) {
          toast.error('Failed to complete match');
        }
        break;
      case 'delete':
        try {
          const { error } = await supabase
            .from('matches')
            .delete()
            .eq('id', match.id);
          
          if (error) throw error;
          toast.success('Match deleted');
          fetchMatches();
        } catch (error) {
          toast.error('Failed to delete match');
        }
        break;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Matches</h2>
          <p className="text-muted-foreground">
            View and manage all matches and swaps.
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
            placeholder="Search by match ID..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(1); }}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={matches.map(match => ({
          ...match,
          id: match.id.slice(0, 8) + '...',
          status: match.is_completed ? 'Completed' : 'Pending',
          confirmations: `${(match.confirmed_by_user_a ? 1 : 0) + (match.confirmed_by_user_b ? 1 : 0)}/2`,
        }))}
        loading={loading}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        onRowAction={(action, row) => handleAction(action, matches.find(m => m.id.startsWith(row.id.replace('...', '')))!)}
        actions={actions}
      />
    </div>
  );
}
