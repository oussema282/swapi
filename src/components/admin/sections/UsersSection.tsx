import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { DataTable } from '../DataTable';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, UserPlus, Download } from 'lucide-react';
import { toast } from 'sonner';

interface User {
  id: string;
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  email?: string;
  created_at: string;
  is_pro: boolean;
  location: string | null;
}

const columns = [
  { key: 'display_name', label: 'User', type: 'avatar' as const },
  { 
    key: 'is_pro', 
    label: 'Status', 
    type: 'badge' as const,
    badgeVariant: (value: string) => value === 'Pro' ? 'default' : 'secondary' as any,
  },
  { key: 'location', label: 'Location', type: 'text' as const },
  { key: 'created_at', label: 'Joined', type: 'date' as const },
  { key: 'actions', label: '', type: 'actions' as const },
];

const actions = [
  { label: 'View Profile', value: 'view' },
  { label: 'Make Admin', value: 'make_admin' },
  { label: 'Ban User', value: 'ban', destructive: true },
];

export function UsersSection() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchUsers();
  }, [page, search]);

  async function fetchUsers() {
    setLoading(true);
    try {
      let query = supabase
        .from('profiles')
        .select('id, user_id, display_name, avatar_url, location, created_at', { count: 'exact' });

      if (search) {
        query = query.ilike('display_name', `%${search}%`);
      }

      const { data: profiles, count, error } = await query
        .order('created_at', { ascending: false })
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (error) throw error;

      // Fetch subscription status for each user
      const userIds = profiles?.map(p => p.user_id) || [];
      const { data: subscriptions } = await supabase
        .from('user_subscriptions')
        .select('user_id, is_pro')
        .in('user_id', userIds);

      const subMap = new Map(subscriptions?.map(s => [s.user_id, s.is_pro]) || []);

      const usersWithSub = profiles?.map(p => ({
        ...p,
        is_pro: subMap.get(p.user_id) || false,
      })) || [];

      setUsers(usersWithSub);
      setTotalPages(Math.ceil((count || 0) / pageSize));
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  }

  const handleAction = async (action: string, user: User) => {
    switch (action) {
      case 'view':
        window.open(`/user/${user.user_id}`, '_blank');
        break;
      case 'make_admin':
        try {
          const { error } = await supabase
            .from('user_roles')
            .insert({ user_id: user.user_id, role: 'admin' });
          
          if (error) throw error;
          toast.success(`${user.display_name} is now an admin`);
        } catch (error: any) {
          if (error.code === '23505') {
            toast.error('User is already an admin');
          } else {
            toast.error('Failed to update role');
          }
        }
        break;
      case 'ban':
        toast.info('Ban functionality requires additional implementation');
        break;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">
            Manage user accounts and permissions.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="pl-9"
          />
        </div>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={users.map(u => ({
          ...u,
          is_pro: u.is_pro ? 'Pro' : 'Free',
        }))}
        loading={loading}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        onRowAction={(action, row) => {
          const originalUser = users.find(u => u.id === row.id);
          if (originalUser) handleAction(action, originalUser);
        }}
        actions={actions}
      />
    </div>
  );
}
