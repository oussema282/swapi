import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Loader2, UserPlus, Phone, Lock, User, Trash2, Wallet } from 'lucide-react';
import { format } from 'date-fns';

interface RechargeAccount {
  id: string;
  phone: string;
  display_name: string;
  is_active: boolean;
  balance: number;
  created_at: string;
}

export function RechargeAccountsManager() {
  const queryClient = useQueryClient();
  const [showCreate, setShowCreate] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [balanceInput, setBalanceInput] = useState('');

  const { data: accounts, isLoading } = useQuery({
    queryKey: ['recharge-accounts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('recharge_accounts' as any)
        .select('id, phone, display_name, is_active, balance, created_at')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return (data || []) as unknown as RechargeAccount[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.rpc('create_recharge_account', {
        p_phone: phone,
        p_password: password,
        p_display_name: displayName,
      });
      if (error) throw error;
      const result = data as any;
      if (!result.success) throw new Error(result.error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recharge-accounts'] });
      setShowCreate(false);
      setPhone(''); setPassword(''); setDisplayName(''); setBalanceInput('');
      toast.success('Compte créé avec succès');
    },
    onError: (err: any) => toast.error(err.message || 'Erreur'),
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ id, active }: { id: string; active: boolean }) => {
      const { error } = await supabase
        .from('recharge_accounts' as any)
        .update({ is_active: active } as any)
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recharge-accounts'] });
      toast.success('Statut mis à jour');
    },
  });

  const updateBalanceMutation = useMutation({
    mutationFn: async ({ id, amount }: { id: string; amount: number }) => {
      const { error } = await supabase
        .from('recharge_accounts' as any)
        .update({ balance: amount } as any)
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recharge-accounts'] });
      toast.success('Solde mis à jour');
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Comptes Recharge</h3>
        <Button size="sm" onClick={() => setShowCreate(true)}>
          <UserPlus className="h-4 w-4 mr-1" /> Créer un compte
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-6"><Loader2 className="h-5 w-5 animate-spin" /></div>
      ) : !accounts?.length ? (
        <p className="text-center text-muted-foreground py-6 text-sm">Aucun compte</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tél</TableHead>
                <TableHead>Nom</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-mono">{a.phone}</TableCell>
                  <TableCell>{a.display_name || '—'}</TableCell>
                  <TableCell>
                    <Badge variant={a.is_active ? 'default' : 'secondary'}>
                      {a.is_active ? 'Actif' : 'Désactivé'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs">{format(new Date(a.created_at), 'dd/MM/yyyy')}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm"
                      onClick={() => toggleMutation.mutate({ id: a.id, active: !a.is_active })}>
                      {a.is_active ? 'Désactiver' : 'Activer'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Create Account Dialog */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nouveau compte recharge</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2"><User className="h-4 w-4" /> Nom</Label>
              <Input placeholder="Nom du client" value={displayName}
                onChange={(e) => setDisplayName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2"><Phone className="h-4 w-4" /> Téléphone</Label>
              <Input type="text" inputMode="numeric" placeholder="8 chiffres" value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 8))} />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2"><Lock className="h-4 w-4" /> Mot de passe</Label>
              <Input type="text" placeholder="Mot de passe" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreate(false)}>Annuler</Button>
            <Button disabled={phone.length !== 8 || !password || createMutation.isPending}
              onClick={() => createMutation.mutate()}>
              {createMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-1" /> : <UserPlus className="h-4 w-4 mr-1" />}
              Créer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
