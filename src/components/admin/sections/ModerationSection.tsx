import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye,
  RefreshCw,
  Play,
  Users,
  Image,
  Flag,
  Clock
} from 'lucide-react';
import { format } from 'date-fns';
import { ImagePreviewModal } from '../ImagePreviewModal';
import { RiskDetailPanel } from '../RiskDetailPanel';
import { UserDetailModal } from '../UserDetailModal';

interface ModerationLog {
  id: string;
  user_id: string;
  content_type: string;
  content_url: string;
  is_safe: boolean;
  violation_type: string | null;
  confidence_score: number | null;
  action_taken: string;
  created_at: string;
  appeal_status?: string | null;
  admin_decision?: string | null;
}

interface RiskScore {
  id: string;
  user_id: string;
  risk_score: number;
  risk_level: string;
  signals: any;
  auto_flagged: boolean;
  admin_reviewed: boolean;
  admin_notes: string | null;
  last_analyzed_at: string;
}

interface FraudRun {
  id: string;
  run_type: string;
  users_analyzed: number;
  high_risk_found: number;
  created_at: string;
  completed_at: string | null;
}

export function ModerationSection() {
  const [activeTab, setActiveTab] = useState('content');
  const [contentSubTab, setContentSubTab] = useState('all');
  const [moderationLogs, setModerationLogs] = useState<ModerationLog[]>([]);
  const [pendingLogs, setPendingLogs] = useState<ModerationLog[]>([]);
  const [riskScores, setRiskScores] = useState<RiskScore[]>([]);
  const [fraudRuns, setFraudRuns] = useState<FraudRun[]>([]);
  const [loading, setLoading] = useState(true);
  const [runningFraudDetection, setRunningFraudDetection] = useState(false);
  const [selectedLog, setSelectedLog] = useState<ModerationLog | null>(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [userModalOpen, setUserModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'content') {
        const [allLogs, pending] = await Promise.all([
          supabase
            .from('content_moderation_logs')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(100),
          supabase
            .from('content_moderation_logs')
            .select('*')
            .in('action_taken', ['review_required', 'flagged'])
            .is('admin_decision', null)
            .order('created_at', { ascending: false })
            .limit(50),
        ]);
        setModerationLogs(allLogs.data || []);
        setPendingLogs(pending.data || []);
      } else if (activeTab === 'fraud') {
        const { data: scores } = await supabase
          .from('user_risk_scores')
          .select('*')
          .order('risk_score', { ascending: false })
          .limit(100);
        setRiskScores(scores || []);

        const { data: runs } = await supabase
          .from('fraud_detection_runs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(10);
        setFraudRuns(runs || []);
      }
    } catch (err) {
      console.error('Error fetching moderation data:', err);
    } finally {
      setLoading(false);
    }
  };

  const runFraudDetection = async () => {
    setRunningFraudDetection(true);
    try {
      const { data, error } = await supabase.functions.invoke('fraud-detector', {
        body: { run_type: 'manual' }
      });

      if (error) throw error;

      toast.success('Fraud detection complete', {
        description: `Analyzed ${data.users_analyzed} users, found ${data.high_risk_found} high-risk`
      });
      fetchData();
    } catch (err: any) {
      toast.error('Fraud detection failed', {
        description: err.message
      });
    } finally {
      setRunningFraudDetection(false);
    }
  };

  const getActionBadge = (action: string, adminDecision?: string | null) => {
    if (adminDecision) {
      return adminDecision === 'approved' 
        ? <Badge variant="secondary" className="bg-success/10 text-success"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>
        : <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
    }
    switch (action) {
      case 'blocked':
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Blocked</Badge>;
      case 'allowed':
        return <Badge variant="secondary" className="bg-success/10 text-success"><CheckCircle className="w-3 h-3 mr-1" />Allowed</Badge>;
      case 'flagged':
      case 'review_required':
        return <Badge variant="outline" className="border-warning text-warning"><Eye className="w-3 h-3 mr-1" />Review</Badge>;
      default:
        return <Badge variant="secondary">{action}</Badge>;
    }
  };

  const stats = {
    totalLogs: moderationLogs.length,
    blocked: moderationLogs.filter(l => l.action_taken === 'blocked').length,
    pending: pendingLogs.length,
    highRiskUsers: riskScores.filter(r => r.risk_level === 'high' || r.risk_level === 'critical').length
  };

  const openImagePreview = (log: ModerationLog) => {
    setSelectedLog(log);
    setImageModalOpen(true);
  };

  const openUserDetail = (userId: string) => {
    setSelectedUserId(userId);
    setUserModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Content & Fraud Moderation</h2>
          <p className="text-muted-foreground">AI-powered content safety and fraud detection</p>
        </div>
        <Button onClick={fetchData} variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalLogs}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blocked</CardTitle>
            <XCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{stats.blocked}</div>
          </CardContent>
        </Card>
        <Card className={stats.pending > 0 ? 'border-warning/50 bg-warning/5' : ''}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Users</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{stats.highRiskUsers}</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="content" className="relative">
            <Image className="w-4 h-4 mr-2" />
            Content Moderation
            {stats.pending > 0 && (
              <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-[10px]">
                {stats.pending}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="fraud">
            <Shield className="w-4 h-4 mr-2" />
            Fraud Detection
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="mt-4 space-y-4">
          {/* Content Sub-tabs */}
          <Tabs value={contentSubTab} onValueChange={setContentSubTab}>
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="pending" className="relative">
                <Clock className="w-4 h-4 mr-2" />
                Pending Review
                {stats.pending > 0 && (
                  <Badge variant="destructive" className="ml-2">{stats.pending}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="all">
                <Image className="w-4 h-4 mr-2" />
                All Logs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pending" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Human Review Queue</CardTitle>
                  <CardDescription>Images flagged for manual review (AI confidence 60-85%)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    {loading ? (
                      <div className="flex items-center justify-center py-8">
                        <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
                      </div>
                    ) : pendingLogs.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                        <CheckCircle className="w-12 h-12 mb-2 text-success opacity-50" />
                        <p>No pending reviews!</p>
                        <p className="text-xs">All content has been reviewed</p>
                      </div>
                    ) : (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {pendingLogs.map((log) => (
                          <div 
                            key={log.id} 
                            className="p-3 rounded-lg border bg-card cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => openImagePreview(log)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-16 h-16 rounded bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img 
                                  src={log.content_url} 
                                  alt="Content" 
                                  className="w-full h-full object-cover blur-sm"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  {getActionBadge(log.action_taken, log.admin_decision)}
                                </div>
                                <p className="text-sm capitalize">{log.content_type.replace('_', ' ')}</p>
                                <p className="text-xs text-muted-foreground">
                                  {format(new Date(log.created_at), 'MMM d, HH:mm')}
                                </p>
                                {log.violation_type && (
                                  <p className="text-xs text-destructive capitalize mt-1">
                                    Suspected: {log.violation_type}
                                  </p>
                                )}
                                {log.confidence_score && (
                                  <p className="text-xs text-muted-foreground">
                                    Confidence: {(log.confidence_score * 100).toFixed(0)}%
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="all" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Moderation Logs</CardTitle>
                  <CardDescription>Complete history of AI-analyzed image uploads</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    {loading ? (
                      <div className="flex items-center justify-center py-8">
                        <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
                      </div>
                    ) : moderationLogs.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                        <Image className="w-12 h-12 mb-2 opacity-50" />
                        <p>No moderation logs yet</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {moderationLogs.map((log) => (
                          <div 
                            key={log.id} 
                            className="flex items-center justify-between p-3 rounded-lg border bg-card cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => openImagePreview(log)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded bg-muted flex items-center justify-center overflow-hidden">
                                <img 
                                  src={log.content_url} 
                                  alt="Content" 
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              </div>
                              <div>
                                <p className="text-sm font-medium capitalize">{log.content_type.replace('_', ' ')}</p>
                                <p className="text-xs text-muted-foreground">
                                  {format(new Date(log.created_at), 'MMM d, HH:mm')}
                                </p>
                                {log.violation_type && (
                                  <p className="text-xs text-destructive capitalize">{log.violation_type}</p>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {log.confidence_score && (
                                <span className="text-xs text-muted-foreground">
                                  {(log.confidence_score * 100).toFixed(0)}%
                                </span>
                              )}
                              {getActionBadge(log.action_taken, log.admin_decision)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="fraud" className="mt-4 space-y-4">
          {/* Run Fraud Detection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Fraud Detection</span>
                <Button 
                  onClick={runFraudDetection} 
                  disabled={runningFraudDetection}
                  size="sm"
                >
                  {runningFraudDetection ? (
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Play className="w-4 h-4 mr-2" />
                  )}
                  Run Detection
                </Button>
              </CardTitle>
              <CardDescription>Analyze user behavior patterns for fraud</CardDescription>
            </CardHeader>
            <CardContent>
              {fraudRuns.length > 0 && (
                <div className="mb-4 p-3 rounded-lg bg-muted">
                  <p className="text-sm font-medium">Last Run</p>
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(fraudRuns[0].created_at), 'MMM d, HH:mm')} - 
                    Analyzed {fraudRuns[0].users_analyzed} users, 
                    found {fraudRuns[0].high_risk_found} high-risk
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Risk Scores with Expandable Detail Panels */}
          <Card>
            <CardHeader>
              <CardTitle>User Risk Scores</CardTitle>
              <CardDescription>Click to expand and take action on users</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
                  </div>
                ) : riskScores.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                    <Users className="w-12 h-12 mb-2 opacity-50" />
                    <p>No risk assessments yet</p>
                    <p className="text-xs">Run fraud detection to analyze users</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {riskScores.map((score) => (
                      <RiskDetailPanel 
                        key={score.id} 
                        riskScore={score} 
                        onUpdated={fetchData}
                        onOpenUserDetail={openUserDetail}
                      />
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        log={selectedLog}
        open={imageModalOpen}
        onOpenChange={setImageModalOpen}
        onUpdated={fetchData}
      />

      {/* User Detail Modal */}
      <UserDetailModal
        userId={selectedUserId}
        open={userModalOpen}
        onOpenChange={setUserModalOpen}
        onUserUpdated={fetchData}
      />
    </div>
  );
}
