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
  Flag
} from 'lucide-react';
import { format } from 'date-fns';

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
}

interface RiskScore {
  id: string;
  user_id: string;
  risk_score: number;
  risk_level: string;
  signals: any;
  auto_flagged: boolean;
  admin_reviewed: boolean;
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
  const [moderationLogs, setModerationLogs] = useState<ModerationLog[]>([]);
  const [riskScores, setRiskScores] = useState<RiskScore[]>([]);
  const [fraudRuns, setFraudRuns] = useState<FraudRun[]>([]);
  const [loading, setLoading] = useState(true);
  const [runningFraudDetection, setRunningFraudDetection] = useState(false);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'content') {
        const { data } = await supabase
          .from('content_moderation_logs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(100);
        setModerationLogs(data || []);
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

  const getActionBadge = (action: string) => {
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

  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'critical':
        return <Badge variant="destructive">Critical</Badge>;
      case 'high':
        return <Badge className="bg-destructive/80 text-destructive-foreground">High</Badge>;
      case 'medium':
        return <Badge variant="outline" className="border-warning text-warning">Medium</Badge>;
      case 'low':
        return <Badge variant="secondary" className="bg-success/10 text-success">Low</Badge>;
      default:
        return <Badge variant="secondary">{level}</Badge>;
    }
  };

  const stats = {
    totalLogs: moderationLogs.length,
    blocked: moderationLogs.filter(l => l.action_taken === 'blocked').length,
    flagged: moderationLogs.filter(l => ['flagged', 'review_required'].includes(l.action_taken)).length,
    highRiskUsers: riskScores.filter(r => r.risk_level === 'high' || r.risk_level === 'critical').length
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Eye className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">{stats.flagged}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Users</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">{stats.highRiskUsers}</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="content">
            <Image className="w-4 h-4 mr-2" />
            Content Moderation
          </TabsTrigger>
          <TabsTrigger value="fraud">
            <Shield className="w-4 h-4 mr-2" />
            Fraud Detection
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Moderation Logs</CardTitle>
              <CardDescription>AI-analyzed image uploads</CardDescription>
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
                        className="flex items-center justify-between p-3 rounded-lg border bg-card"
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
                          {getActionBadge(log.action_taken)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
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

          {/* Risk Scores */}
          <Card>
            <CardHeader>
              <CardTitle>User Risk Scores</CardTitle>
              <CardDescription>Users sorted by risk level</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
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
                      <div 
                        key={score.id} 
                        className="flex items-center justify-between p-3 rounded-lg border bg-card"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            score.risk_level === 'critical' ? 'bg-destructive/10' :
                            score.risk_level === 'high' ? 'bg-destructive/10' :
                            score.risk_level === 'medium' ? 'bg-warning/10' :
                            'bg-success/10'
                          }`}>
                            {score.risk_level === 'critical' || score.risk_level === 'high' ? (
                              <AlertTriangle className={`w-5 h-5 ${
                                score.risk_level === 'critical' ? 'text-destructive' : 'text-destructive/80'
                              }`} />
                            ) : (
                              <Shield className={`w-5 h-5 ${
                                score.risk_level === 'medium' ? 'text-warning' : 'text-success'
                              }`} />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium font-mono">
                              {score.user_id.slice(0, 8)}...
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Score: {score.risk_score.toFixed(0)}/100
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {score.auto_flagged && (
                            <Flag className="w-4 h-4 text-warning" />
                          )}
                          {getRiskBadge(score.risk_level)}
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
    </div>
  );
}
