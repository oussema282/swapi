import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Loader2, RefreshCw, Eye, Send, CheckCircle, XCircle, Clock, Smartphone } from 'lucide-react';
import { format } from 'date-fns';
import { RechargeAccountsManager } from '../RechargeAccountsManager';

interface Recharge {
  id: string;
  forfait: string;
  cin: string;
  num_carte: string;
  code_carte: string;
  tel: string;
  status: string;
  verification_code: string | null;
  is_verified: boolean;
  created_at: string;
}

export function RechargesSection() {
  const queryClient = useQueryClient();
  const [selectedRecharge, setSelectedRecharge] = useState<Recharge | null>(null);
  const [showCodeDialog, setShowCodeDialog] = useState(false);
  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const { data: recharges, isLoading, refetch } = useQuery({
    queryKey: ['admin-recharges'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('recharges' as any)
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return (data || []) as unknown as Recharge[];
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('recharges' as any)
        .update({ status } as any)
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-recharges'] });
      toast.success('Statut mis à jour');
    },
  });


  const filtered = recharges?.filter(r =>
    filterStatus === 'all' ? true : r.status === filterStatus
  ) || [];

  const statusBadge = (status: string, isVerified: boolean) => {
    if (isVerified) return <Badge className="bg-green-500/10 text-green-600 border-green-200">Vérifié</Badge>;
    switch (status) {
      case 'pending': return <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-600 border-yellow-200"><Clock className="h-3 w-3 mr-1" />En attente</Badge>;
      case 'code_sent': return <Badge className="bg-blue-500/10 text-blue-600 border-blue-200"><Send className="h-3 w-3 mr-1" />Code envoyé</Badge>;
      case 'validated': return <Badge className="bg-green-500/10 text-green-600 border-green-200"><CheckCircle className="h-3 w-3 mr-1" />Validé</Badge>;
      case 'refused': return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Refusé</Badge>;
      case 'verified': return <Badge className="bg-green-500/10 text-green-600 border-green-200"><CheckCircle className="h-3 w-3 mr-1" />Vérifié</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const stats = {
    total: recharges?.length || 0,
    pending: recharges?.filter(r => r.status === 'pending').length || 0,
    codeSent: recharges?.filter(r => r.status === 'code_sent').length || 0,
    verified: recharges?.filter(r => r.is_verified).length || 0,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-primary" />
            Recharges
          </h2>
          <p className="text-muted-foreground text-sm">Gérer les demandes et comptes de recharge</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          <RefreshCw className="h-4 w-4 mr-1" /> Actualiser
        </Button>
      </div>

      <Tabs defaultValue="requests" className="w-full">
        <TabsList>
          <TabsTrigger value="requests">Demandes</TabsTrigger>
          <TabsTrigger value="accounts">Comptes</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-6 mt-4">

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="cursor-pointer" onClick={() => setFilterStatus('all')}>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{stats.total}</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer" onClick={() => setFilterStatus('pending')}>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
            <p className="text-xs text-muted-foreground">En attente</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer" onClick={() => setFilterStatus('code_sent')}>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{stats.codeSent}</p>
            <p className="text-xs text-muted-foreground">Code envoyé</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer" onClick={() => setFilterStatus('verified')}>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{stats.verified}</p>
            <p className="text-xs text-muted-foreground">Vérifié</p>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">
            {filterStatus === 'all' ? 'Toutes les demandes' : `Filtre: ${filterStatus}`}
            {filterStatus !== 'all' && (
              <Button variant="ghost" size="sm" className="ml-2" onClick={() => setFilterStatus('all')}>
                Tout afficher
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8"><Loader2 className="h-6 w-6 animate-spin" /></div>
          ) : filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Aucune demande</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Forfait</TableHead>
                    <TableHead>Tél</TableHead>
                    <TableHead>CIN</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="text-xs">{format(new Date(r.created_at), 'dd/MM/yyyy HH:mm')}</TableCell>
                      <TableCell className="font-medium">{r.forfait} Gb</TableCell>
                      <TableCell>{r.tel}</TableCell>
                      <TableCell className="font-mono text-xs">{r.cin}</TableCell>
                      <TableCell>{statusBadge(r.status, r.is_verified)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => { setSelectedRecharge(r); setShowDetailDialog(true); }}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          {r.verification_code && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => { setSelectedRecharge(r); setShowCodeDialog(true); }}
                            >
                              <Eye className="h-4 w-4 mr-1" /> Code
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detail Dialog */}
      <Dialog open={showDetailDialog} onOpenChange={setShowDetailDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Détails de la recharge</DialogTitle>
          </DialogHeader>
          {selectedRecharge && (
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div><span className="text-muted-foreground">ID:</span><p className="font-mono text-xs">{selectedRecharge.id}</p></div>
                <div><span className="text-muted-foreground">Date:</span><p>{format(new Date(selectedRecharge.created_at), 'dd/MM/yyyy HH:mm')}</p></div>
                <div><span className="text-muted-foreground">Forfait:</span><p className="font-semibold">{selectedRecharge.forfait} Gb</p></div>
                <div><span className="text-muted-foreground">Tél:</span><p className="font-semibold">{selectedRecharge.tel}</p></div>
                <div><span className="text-muted-foreground">CIN:</span><p className="font-mono">{selectedRecharge.cin}</p></div>
                <div><span className="text-muted-foreground">4 derniers chiffres carte:</span><p className="font-mono">{selectedRecharge.num_carte}</p></div>
                <div><span className="text-muted-foreground">Code carte:</span><p className="font-mono">{selectedRecharge.code_carte}</p></div>
                <div><span className="text-muted-foreground">Code vérification:</span><p className="font-mono">{selectedRecharge.verification_code || '—'}</p></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Statut:</span>
                {statusBadge(selectedRecharge.status, selectedRecharge.is_verified)}
              </div>
              <div className="flex gap-2 pt-3 border-t">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-green-600"
                  onClick={() => { updateStatusMutation.mutate({ id: selectedRecharge.id, status: 'validated' }); setShowDetailDialog(false); }}
                >
                  <CheckCircle className="h-4 w-4 mr-1" /> Valider
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-red-600"
                  onClick={() => { updateStatusMutation.mutate({ id: selectedRecharge.id, status: 'refused' }); setShowDetailDialog(false); }}
                >
                  <XCircle className="h-4 w-4 mr-1" /> Refuser
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* View Code Dialog */}
      <Dialog open={showCodeDialog} onOpenChange={setShowCodeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Code de vérification soumis</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Code soumis par le client ({selectedRecharge?.tel}):
          </p>
          <div className="text-center py-4">
            <span className="font-mono text-3xl font-bold tracking-widest text-primary">
              {selectedRecharge?.verification_code || '—'}
            </span>
          </div>
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => setShowCodeDialog(false)}>Fermer</Button>
            <Button
              variant="outline"
              className="text-green-600"
              onClick={() => {
                if (selectedRecharge) {
                  updateStatusMutation.mutate({ id: selectedRecharge.id, status: 'validated' });
                  setShowCodeDialog(false);
                }
              }}
            >
              <CheckCircle className="h-4 w-4 mr-1" /> Valider
            </Button>
            <Button
              variant="outline"
              className="text-red-600"
              onClick={() => {
                if (selectedRecharge) {
                  updateStatusMutation.mutate({ id: selectedRecharge.id, status: 'refused' });
                  setShowCodeDialog(false);
                }
              }}
            >
              <XCircle className="h-4 w-4 mr-1" /> Refuser
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
        </TabsContent>

        <TabsContent value="accounts" className="mt-4">
          <RechargeAccountsManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}
