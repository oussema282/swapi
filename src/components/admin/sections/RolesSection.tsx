import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Shield, UserPlus, Trash2, Search } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

interface UserRole {
  id: string;
  user_id: string;
  role: 'admin' | 'moderator' | 'user';
  created_at: string;
  profile?: {
    display_name: string;
    avatar_url: string | null;
  };
}

export function RolesSection() {
  const { user } = useAuth();
  const [roles, setRoles] = useState<UserRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchEmail, setSearchEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState<'admin' | 'moderator'>('admin');
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetchRoles();
  }, []);

  async function fetchRoles() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Fetch profile info for each user
      const userIds = data?.map(r => r.user_id) || [];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, display_name, avatar_url')
        .in('user_id', userIds);

      const profileMap = new Map(profiles?.map(p => [p.user_id, p]) || []);

      const rolesWithProfiles = data?.map(role => ({
        ...role,
        profile: profileMap.get(role.user_id),
      })) || [];

      setRoles(rolesWithProfiles);
    } catch (error) {
      console.error('Error fetching roles:', error);
      toast.error('Failed to load roles');
    } finally {
      setLoading(false);
    }
  }

  async function addRole() {
    if (!searchEmail.trim()) {
      toast.error('Please enter a user ID');
      return;
    }

    setAdding(true);
    try {
      // Check if user exists
      const { data: profile } = await supabase
        .from('profiles')
        .select('user_id, display_name')
        .eq('user_id', searchEmail.trim())
        .single();

      if (!profile) {
        toast.error('User not found');
        return;
      }

      // Add role
      const { error } = await supabase
        .from('user_roles')
        .insert({ user_id: profile.user_id, role: selectedRole });

      if (error) {
        if (error.code === '23505') {
          toast.error('User already has this role');
        } else {
          throw error;
        }
        return;
      }

      toast.success(`${profile.display_name} is now a ${selectedRole}`);
      setSearchEmail('');
      fetchRoles();
    } catch (error) {
      console.error('Error adding role:', error);
      toast.error('Failed to add role');
    } finally {
      setAdding(false);
    }
  }

  async function removeRole(roleId: string, userId: string) {
    if (userId === user?.id) {
      toast.error("You cannot remove your own admin role");
      return;
    }

    try {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('id', roleId);

      if (error) throw error;

      toast.success('Role removed');
      fetchRoles();
    } catch (error) {
      console.error('Error removing role:', error);
      toast.error('Failed to remove role');
    }
  }

  const roleColors: Record<string, string> = {
    admin: 'bg-red-500/10 text-red-600 border-red-200',
    moderator: 'bg-blue-500/10 text-blue-600 border-blue-200',
    user: 'bg-gray-500/10 text-gray-600 border-gray-200',
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Role Management</h2>
        <p className="text-muted-foreground">
          Manage admin and moderator access to the platform.
        </p>
      </div>

      {/* Add Role Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Add Role
          </CardTitle>
          <CardDescription>
            Grant admin or moderator privileges to a user by their user ID.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="userId" className="sr-only">User ID</Label>
              <Input
                id="userId"
                placeholder="Enter user ID (UUID)"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
              />
            </div>
            <Select value={selectedRole} onValueChange={(v: 'admin' | 'moderator') => setSelectedRole(v)}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="moderator">Moderator</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={addRole} disabled={adding}>
              {adding ? 'Adding...' : 'Add Role'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Current Roles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Current Roles
          </CardTitle>
          <CardDescription>
            Users with elevated privileges.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 animate-pulse">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-1/4 bg-muted rounded" />
                    <div className="h-3 w-1/3 bg-muted rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : roles.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No roles assigned yet. Add your first admin above.
            </p>
          ) : (
            <div className="space-y-3">
              {roles.map((role) => (
                <div 
                  key={role.id} 
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={role.profile?.avatar_url || undefined} />
                      <AvatarFallback>
                        {role.profile?.display_name?.charAt(0).toUpperCase() || '?'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">
                        {role.profile?.display_name || 'Unknown User'}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {role.user_id.slice(0, 8)}...
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className={roleColors[role.role]}>
                      {role.role}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeRole(role.id, role.user_id)}
                      disabled={role.user_id === user?.id}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
