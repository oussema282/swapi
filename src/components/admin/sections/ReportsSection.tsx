import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { 
  Flag, 
  Loader2, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  User,
  Package,
  MessageSquare,
  Eye
} from 'lucide-react';
import { toast } from 'sonner';
import { formatDistanceToNow } from 'date-fns';

interface Report {
  id: string;
  reporter_id: string;
  report_type: 'item' | 'user' | 'message';
  target_id: string;
  reason: string;
  description: string | null;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed';
  admin_notes: string | null;
  resolved_by: string | null;
  created_at: string;
  resolved_at: string | null;
}

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  reviewed: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  resolved: 'bg-green-500/10 text-green-500 border-green-500/20',
  dismissed: 'bg-muted text-muted-foreground border-border',
};

const TYPE_ICONS = {
  item: Package,
  user: User,
  message: MessageSquare,
};

export function ReportsSection() {
  const queryClient = useQueryClient();
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [adminNotes, setAdminNotes] = useState('');
  const [activeTab, setActiveTab] = useState('pending');

  const { data: reports = [], isLoading } = useQuery({
    queryKey: ['admin-reports'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Report[];
    },
  });

  const updateReportMutation = useMutation({
    mutationFn: async ({ 
      reportId, 
      status, 
      notes 
    }: { 
      reportId: string; 
      status: string; 
      notes?: string 
    }) => {
      const { error } = await supabase
        .from('reports')
        .update({
          status,
          admin_notes: notes || null,
          resolved_at: status === 'resolved' || status === 'dismissed' ? new Date().toISOString() : null,
        })
        .eq('id', reportId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-reports'] });
      setSelectedReport(null);
      setAdminNotes('');
      toast.success('Report updated');
    },
    onError: () => {
      toast.error('Failed to update report');
    },
  });

  const flagItemMutation = useMutation({
    mutationFn: async ({ itemId, reason }: { itemId: string; reason: string }) => {
      const { error } = await supabase
        .from('items')
        .update({
          is_flagged: true,
          flagged_reason: reason,
          is_active: false,
        })
        .eq('id', itemId);

      if (error) throw error;
    },
    onSuccess: () => {
      toast.success('Item flagged and hidden');
    },
    onError: () => {
      toast.error('Failed to flag item');
    },
  });

  const filteredReports = reports.filter(r => {
    if (activeTab === 'all') return true;
    return r.status === activeTab;
  });

  const pendingCount = reports.filter(r => r.status === 'pending').length;

  const handleResolve = (status: 'resolved' | 'dismissed') => {
    if (!selectedReport) return;
    updateReportMutation.mutate({
      reportId: selectedReport.id,
      status,
      notes: adminNotes,
    });
  };

  const handleFlagItem = () => {
    if (!selectedReport || selectedReport.report_type !== 'item') return;
    flagItemMutation.mutate({
      itemId: selectedReport.target_id,
      reason: selectedReport.reason,
    });
    handleResolve('resolved');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Flag className="w-6 h-6" />
            Reports
          </h2>
          <p className="text-muted-foreground">
            Review and manage user reports
          </p>
        </div>
        {pendingCount > 0 && (
          <Badge variant="destructive" className="text-sm">
            {pendingCount} pending
          </Badge>
        )}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="pending">
            Pending
            {pendingCount > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 text-xs bg-destructive text-destructive-foreground rounded-full">
                {pendingCount}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
          <TabsTrigger value="dismissed">Dismissed</TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-4">
          {filteredReports.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Flag className="w-12 h-12 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">No reports in this category</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredReports.map((report) => {
                const TypeIcon = TYPE_ICONS[report.report_type];
                return (
                  <Card key={report.id} className="hover:bg-muted/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <TypeIcon className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className={STATUS_COLORS[report.status]}>
                              {report.status}
                            </Badge>
                            <Badge variant="secondary" className="capitalize">
                              {report.report_type}
                            </Badge>
                            <Badge variant="outline">
                              {report.reason.replace('_', ' ')}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                            {report.description || 'No additional description provided'}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Reported {formatDistanceToNow(new Date(report.created_at), { addSuffix: true })}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedReport(report);
                            setAdminNotes(report.admin_notes || '');
                          }}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Review Dialog */}
      <Dialog open={!!selectedReport} onOpenChange={() => setSelectedReport(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Review Report</DialogTitle>
            <DialogDescription>
              Take action on this report
            </DialogDescription>
          </DialogHeader>

          {selectedReport && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Type</Label>
                  <p className="font-medium capitalize">{selectedReport.report_type}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Reason</Label>
                  <p className="font-medium capitalize">{selectedReport.reason.replace('_', ' ')}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Target ID</Label>
                  <p className="font-mono text-sm">{selectedReport.target_id.slice(0, 8)}...</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Reporter ID</Label>
                  <p className="font-mono text-sm">{selectedReport.reporter_id.slice(0, 8)}...</p>
                </div>
              </div>

              {selectedReport.description && (
                <div>
                  <Label className="text-muted-foreground">Description</Label>
                  <p className="text-sm mt-1 p-3 bg-muted rounded-lg">
                    {selectedReport.description}
                  </p>
                </div>
              )}

              <div>
                <Label htmlFor="admin-notes">Admin Notes</Label>
                <Textarea
                  id="admin-notes"
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Add notes about your decision..."
                  rows={3}
                />
              </div>
            </div>
          )}

          <DialogFooter className="flex-col sm:flex-row gap-2">
            {selectedReport?.report_type === 'item' && (
              <Button
                variant="destructive"
                onClick={handleFlagItem}
                disabled={updateReportMutation.isPending}
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Flag & Hide Item
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => handleResolve('dismissed')}
              disabled={updateReportMutation.isPending}
            >
              <XCircle className="w-4 h-4 mr-2" />
              Dismiss
            </Button>
            <Button
              onClick={() => handleResolve('resolved')}
              disabled={updateReportMutation.isPending}
            >
              {updateReportMutation.isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <CheckCircle className="w-4 h-4 mr-2" />
              )}
              Resolve
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
