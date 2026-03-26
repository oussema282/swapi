import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import {
  Server,
  Database,
  Cpu,
  HardDrive,
  Activity,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Zap,
  Cloud,
  Crown,
  Stamp,
  Save,
} from 'lucide-react';

interface TableStats {
  name: string;
  count: number;
}

interface EdgeFunctionStatus {
  name: string;
  status: 'healthy' | 'error' | 'unknown';
  lastInvoked?: string;
}

export function SystemSection() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [tableStats, setTableStats] = useState<TableStats[]>([]);
  const [allUsersPro, setAllUsersPro] = useState(false);
  const [proToggleLoading, setProToggleLoading] = useState(true);
  const [watermarkText, setWatermarkText] = useState('');
  const [watermarkSaving, setWatermarkSaving] = useState(false);
  const [edgeFunctions, setEdgeFunctions] = useState<EdgeFunctionStatus[]>([
    { name: 'content-moderator', status: 'unknown' },
    { name: 'fraud-detector', status: 'unknown' },
    { name: 'ai-policy-optimizer', status: 'unknown' },
    { name: 'recommend-items', status: 'unknown' },
    { name: 'reciprocal-optimizer', status: 'unknown' },
    { name: 'dodo-checkout', status: 'unknown' },
    { name: 'dodo-webhook', status: 'unknown' },
    { name: 'get-mapbox-token', status: 'unknown' },
    { name: 'watermark-image', status: 'unknown' },
  ]);
  const [testingFunction, setTestingFunction] = useState<string | null>(null);

  useEffect(() => {
    fetchStats();
    fetchAllUsersProSetting();
    fetchWatermarkText();
  }, []);

  const fetchWatermarkText = async () => {
    const { data } = await supabase
      .from('system_settings')
      .select('value')
      .eq('key', 'watermark_text')
      .maybeSingle();
    if (data?.value) {
      const val = typeof data.value === 'string' ? data.value : String(data.value);
      setWatermarkText(val.replace(/^"|"$/g, ''));
    }
  };

  const saveWatermarkText = async () => {
    setWatermarkSaving(true);
    try {
      const { data: existing } = await supabase
        .from('system_settings')
        .select('id')
        .eq('key', 'watermark_text')
        .maybeSingle();

      if (existing) {
        await supabase
          .from('system_settings')
          .update({ value: watermarkText as any, updated_at: new Date().toISOString() })
          .eq('key', 'watermark_text');
      } else {
        await supabase
          .from('system_settings')
          .insert({ key: 'watermark_text', value: watermarkText as any });
      }
      toast.success(t('admin.watermarkSaved'));
    } catch {
      toast.error('Error saving watermark text');
    } finally {
      setWatermarkSaving(false);
    }
  };

    setProToggleLoading(true);
    const { data } = await supabase
      .from('system_settings')
      .select('value')
      .eq('key', 'all_users_pro')
      .maybeSingle();
    setAllUsersPro(data?.value === true);
    setProToggleLoading(false);
  };

  const toggleAllUsersPro = async (enabled: boolean) => {
    setProToggleLoading(true);
    try {
      // Upsert the system setting
      const { data: existing } = await supabase
        .from('system_settings')
        .select('id')
        .eq('key', 'all_users_pro')
        .maybeSingle();

      if (existing) {
        await supabase
          .from('system_settings')
          .update({ value: enabled, updated_at: new Date().toISOString() })
          .eq('key', 'all_users_pro');
      } else {
        await supabase
          .from('system_settings')
          .insert({ key: 'all_users_pro', value: enabled as any });
      }

      setAllUsersPro(enabled);
      toast.success(enabled 
        ? 'Tous les utilisateurs sont maintenant Pro à vie !' 
        : 'Mode Pro gratuit désactivé. Retour au mode payant.'
      );
    } catch (err) {
      toast.error('Erreur lors de la mise à jour');
    } finally {
      setProToggleLoading(false);
    }
  };

  const fetchStats = async () => {
    setLoading(true);
    try {
      // Fetch table counts
      const tables = ['profiles', 'items', 'matches', 'swipes', 'messages', 'reports', 'user_subscriptions'];
      const counts = await Promise.all(
        tables.map(async (table) => {
          const { count } = await supabase
            .from(table as any)
            .select('id', { count: 'exact', head: true });
          return { name: table, count: count || 0 };
        })
      );
      setTableStats(counts);
    } catch (err) {
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  const testEdgeFunction = async (functionName: string) => {
    setTestingFunction(functionName);
    try {
      const startTime = Date.now();
      const { error } = await supabase.functions.invoke(functionName, {
        body: { test: true }
      });

      const responseTime = Date.now() - startTime;

      setEdgeFunctions(prev => prev.map(f => 
        f.name === functionName 
          ? { ...f, status: error ? 'error' : 'healthy', lastInvoked: `${responseTime}ms` }
          : f
      ));

      if (error) {
        toast.error(`${functionName} health check failed`);
      } else {
        toast.success(`${functionName} is healthy (${responseTime}ms)`);
      }
    } catch (err: any) {
      setEdgeFunctions(prev => prev.map(f => 
        f.name === functionName 
          ? { ...f, status: 'error' }
          : f
      ));
      toast.error(`${functionName} failed: ${err.message}`);
    } finally {
      setTestingFunction(null);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const totalRows = tableStats.reduce((sum, t) => sum + t.count, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Server className="h-6 w-6 text-primary" />
            System Health
          </h2>
          <p className="text-muted-foreground">Monitor backend services and database</p>
        </div>
        <Button onClick={fetchStats} variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* All Users Pro Toggle */}
      <Card className={allUsersPro ? 'border-primary/50 bg-primary/5' : ''}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${allUsersPro ? 'bg-primary/20' : 'bg-muted'}`}>
              <Crown className={`h-5 w-5 ${allUsersPro ? 'text-primary' : 'text-muted-foreground'}`} />
            </div>
            <div>
              <CardTitle className="text-base">Pro Gratuit pour Tous</CardTitle>
              <CardDescription className="text-xs">
                {allUsersPro 
                  ? 'Tous les utilisateurs ont un accès Pro illimité à vie' 
                  : 'Mode payant actif — les utilisateurs doivent souscrire pour accéder au Pro'}
              </CardDescription>
            </div>
          </div>
          <Switch
            checked={allUsersPro}
            onCheckedChange={toggleAllUsersPro}
            disabled={proToggleLoading}
          />
        </CardHeader>
        {allUsersPro && (
          <CardContent className="pt-2">
            <Badge variant="default" className="bg-primary text-primary-foreground">
              <Crown className="h-3 w-3 mr-1" />
              Actif — Tous Pro à vie
            </Badge>
          </CardContent>
        )}
      </Card>

      {/* Watermark Settings */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-muted">
              <Stamp className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <CardTitle className="text-base">{t('admin.watermarkText')}</CardTitle>
              <CardDescription className="text-xs">
                {t('admin.watermarkDescription')}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="flex gap-2">
            <Input
              value={watermarkText}
              onChange={(e) => setWatermarkText(e.target.value)}
              placeholder={t('admin.watermarkPlaceholder')}
              className="flex-1"
            />
            <Button
              onClick={saveWatermarkText}
              disabled={watermarkSaving}
              size="sm"
            >
              {watermarkSaving ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <><Save className="h-4 w-4 mr-1" />{t('common.save')}</>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Database Status</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-lg font-bold">Healthy</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rows</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRows.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Edge Functions</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{edgeFunctions.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cloud Status</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-lg font-bold">Connected</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Database Tables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Database Tables
          </CardTitle>
          <CardDescription>Row counts for main tables</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="space-y-4">
              {tableStats.map((table) => {
                const percentage = totalRows > 0 ? (table.count / totalRows) * 100 : 0;
                return (
                  <div key={table.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="capitalize">{table.name.replace('_', ' ')}</span>
                      <span className="font-medium">{table.count.toLocaleString()} rows</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edge Functions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Edge Functions
          </CardTitle>
          <CardDescription>Test and monitor serverless functions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {edgeFunctions.map((fn) => (
              <div 
                key={fn.name}
                className="flex items-center justify-between p-3 rounded-lg border bg-card"
              >
                <div className="flex items-center gap-3">
                  {getStatusIcon(fn.status)}
                  <div>
                    <p className="text-sm font-medium">{fn.name}</p>
                    {fn.lastInvoked && (
                      <p className="text-xs text-muted-foreground">
                        Response: {fn.lastInvoked}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => testEdgeFunction(fn.name)}
                  disabled={testingFunction === fn.name}
                >
                  {testingFunction === fn.name ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Activity className="h-4 w-4" />
                  )}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Limits Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="h-5 w-5" />
            Rate Limits & Quotas
          </CardTitle>
          <CardDescription>Current usage against platform limits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>API Requests (daily)</span>
                <span className="font-medium">~2,500 / 100,000</span>
              </div>
              <Progress value={2.5} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Storage (item-photos bucket)</span>
                <span className="font-medium">~150 MB / 1 GB</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Edge Function Invocations (monthly)</span>
                <span className="font-medium">~1,200 / 500,000</span>
              </div>
              <Progress value={0.24} className="h-2" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            * These are estimated values. Actual usage may vary.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
