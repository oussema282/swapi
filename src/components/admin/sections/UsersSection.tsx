import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { DataTable } from '../DataTable';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Download, AlertTriangle, Ban, Clock, CheckCircle, Crown, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { UserDetailModal } from '../UserDetailModal';

interface User {
  id: string;
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  created_at: string;
  is_pro: boolean;
  location: string | null;
  is_suspended?: boolean;
  is_banned?: boolean;
  is_verified?: boolean;
  risk_level?: string;
  risk_score?: number;
}

const columns = [
  { key: 'display_name', label: 'User', type: 'avatar' as const },
  { 
    key: 'status_badge', 
    label: 'Status', 
    type: 'custom' as const,
  },
  { key: 'location', label: 'Location', type: 'text' as const },
  { key: 'created_at', label: 'Joined', type: 'date' as const },
  { key: 'actions', label: '', type: 'actions' as const },
];

const actions = [
  { label: 'View Details', value: 'view' },
  { label: 'View Profile', value: 'profile' },
  { label: 'Make Admin', value: 'make_admin' },
  { label: 'Suspend User', value: 'suspend' },
  { label: 'Ban User', value: 'ban', destructive: true },
];

export function UsersSection() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    fetchUsers();
  }, [page, search]);

  async function fetchUsers() {
    setLoading(true);
    try {
      let query = supabase
        .from('profiles')
        .select('id, user_id, display_name, avatar_url, location, created_at, is_suspended, is_banned, is_verified', { count: 'exact' });

      if (search) {
        query = query.ilike('display_name', `%${search}%`);
      }

      const { data: profiles, count, error } = await query
        .order('created_at', { ascending: false })
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (error) throw error;

      // Fetch subscription status and risk scores for each user
      const userIds = profiles?.map(p => p.user_id) || [];
      
      const [subscriptionsResult, riskScoresResult] = await Promise.all([
        supabase
          .from('user_subscriptions')
          .select('user_id, is_pro')
          .in('user_id', userIds),
        supabase
          .from('user_risk_scores')
          .select('user_id, risk_level, risk_score')
          .in('user_id', userIds),
      ]);

      const subMap = new Map(subscriptionsResult.data?.map(s => [s.user_id, s.is_pro]) || []);
      const riskMap = new Map(riskScoresResult.data?.map(r => [r.user_id, { level: r.risk_level, score: r.risk_score }]) || []);

      const usersWithData = profiles?.map(p => ({
        ...p,
        is_pro: subMap.get(p.user_id) || false,
        risk_level: riskMap.get(p.user_id)?.level,
        risk_score: riskMap.get(p.user_id)?.score,
      })) || [];

      setUsers(usersWithData);
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
        setSelectedUserId(user.user_id);
        setUserModalOpen(true);
        break;
      case 'profile':
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
      case 'suspend':
        setSelectedUserId(user.user_id);
        setUserModalOpen(true);
        break;
      case 'ban':
        setSelectedUserId(user.user_id);
        setUserModalOpen(true);
        break;
    }
  };

  const getStatusBadges = (user: User) => {
    const badges = [];
    
    if (user.is_banned) {
      badges.push(
        <Badge key="banned" variant="destructive" className="text-xs">
          <Ban className="h-3 w-3 mr-1" />
          Banned
        </Badge>
      );
    } else if (user.is_suspended) {
      badges.push(
        <Badge key="suspended" variant="outline" className="border-warning text-warning text-xs">
          <Clock className="h-3 w-3 mr-1" />
          Suspended
        </Badge>
      );
    }
    
    if (user.is_verified) {
      badges.push(
        <Badge key="verified" variant="outline" className="border-primary text-primary text-xs">
          <CheckCircle className="h-3 w-3 mr-1" />
          Verified
        </Badge>
      );
    }
    
    if (user.is_pro) {
      badges.push(
        <Badge key="pro" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs">
          <Crown className="h-3 w-3 mr-1" />
          Pro
        </Badge>
      );
    }
    
    if (user.risk_level === 'high' || user.risk_level === 'critical') {
      badges.push(
        <Badge key="risk" variant="destructive" className="text-xs">
          <AlertTriangle className="h-3 w-3 mr-1" />
          {user.risk_level}
        </Badge>
      );
    } else if (user.risk_level === 'medium') {
      badges.push(
        <Badge key="risk" variant="outline" className="border-warning text-warning text-xs">
          <Shield className="h-3 w-3 mr-1" />
          Medium Risk
        </Badge>
      );
    }
    
    if (badges.length === 0) {
      badges.push(
        <Badge key="active" variant="secondary" className="text-xs">
          Active
        </Badge>
      );
    }
    
    return <div className="flex flex-wrap gap-1">{badges}</div>;
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
          status_badge: getStatusBadges(u),
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

      {/* User Detail Modal */}
      <UserDetailModal
        userId={selectedUserId}
        open={userModalOpen}
        onOpenChange={setUserModalOpen}
        onUserUpdated={fetchUsers}
      />
    </div>
  );
}
