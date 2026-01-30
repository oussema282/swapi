import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { format } from 'date-fns';
import {
  Brain,
  Play,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Settings,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react';

interface Policy {
  id: string;
  policy_version: string;
  weights: Record<string, number> | any;
  exploration_policy: any;
  reciprocal_policy: any;
  active: boolean | null;
  description: string | null;
  created_at: string;
  created_by: string | null;
}

interface PolicyMetric {
  id: string;
  policy_version: string;
  metric_snapshot: any;
  period_start: string;
  period_end: string;
}

export function AlgorithmSection() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [metrics, setMetrics] = useState<PolicyMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [optimizing, setOptimizing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [policiesResult, metricsResult] = await Promise.all([
        supabase
          .from('algorithm_policies')
          .select('*')
          .order('created_at', { ascending: false }),
        supabase
          .from('algorithm_policy_metrics')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(20),
      ]);

      setPolicies(policiesResult.data || []);
      setMetrics(metricsResult.data || []);
    } catch (err) {
      console.error('Error fetching algorithm data:', err);
    } finally {
      setLoading(false);
    }
  };

  const runOptimization = async () => {
    setOptimizing(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-policy-optimizer', {
        body: { mode: 'optimize' }
      });

      if (error) throw error;

      if (data.new_version) {
        toast.success('New policy version created', {
          description: `Version: ${data.new_version}`
        });
      } else {
        toast.info('No optimization needed', {
          description: 'Current policy is already optimal'
        });
      }
      fetchData();
    } catch (err: any) {
      toast.error('Optimization failed', { description: err.message });
    } finally {
      setOptimizing(false);
    }
  };

  const togglePolicyActive = async (policyId: string, currentActive: boolean) => {
    try {
      const { error } = await supabase
        .from('algorithm_policies')
        .update({ active: !currentActive })
        .eq('id', policyId);

      if (error) throw error;
      toast.success(currentActive ? 'Policy deactivated' : 'Policy activated');
      fetchData();
    } catch (err: any) {
      toast.error('Failed to update policy', { description: err.message });
    }
  };

  const activePolicy = policies.find(p => p.active);
  const weightLabels: Record<string, string> = {
    geoScore: 'Geographic Proximity',
    categoryMatch: 'Category Match',
    conditionSimilarity: 'Condition Match',
    valueAlignment: 'Value Alignment',
    communityRating: 'Community Rating',
    reciprocalInterest: 'Reciprocal Interest',
    temporalBoost: 'Time Decay Boost',
    explorationBonus: 'Exploration Bonus',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Algorithm Policy Management
          </h2>
          <p className="text-muted-foreground">Configure and optimize matching algorithm weights</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={fetchData} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button onClick={runOptimization} disabled={optimizing}>
            {optimizing ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 mr-2" />
            )}
            Run AI Optimization
          </Button>
        </div>
      </div>

      {/* Active Policy Card */}
      {activePolicy && (
        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Active Policy: {activePolicy.policy_version}
            </CardTitle>
            <CardDescription>
              {activePolicy.description || 'No description'}
              <span className="ml-2 text-xs">
                Created {format(new Date(activePolicy.created_at), 'MMM d, yyyy HH:mm')}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(activePolicy.weights).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{weightLabels[key] || key}</span>
                    <span className="font-medium">{((value as number) * 100).toFixed(0)}%</span>
                  </div>
                  <Progress value={(value as number) * 100} className="h-2" />
                </div>
              ))}
            </div>

            {activePolicy.exploration_policy && (
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Exploration Policy</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <Badge variant="outline">
                    ε: {activePolicy.exploration_policy.epsilon}
                  </Badge>
                  <Badge variant="outline">
                    Decay: {activePolicy.exploration_policy.epsilon_decay}
                  </Badge>
                  <Badge variant="outline">
                    Min ε: {activePolicy.exploration_policy.min_epsilon}
                  </Badge>
                </div>
              </div>
            )}

            {activePolicy.reciprocal_policy && (
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Reciprocal Interest Policy</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <Badge variant="outline">
                    Boost: {activePolicy.reciprocal_policy.boost_factor}x
                  </Badge>
                  <Badge variant="outline">
                    Decay Rate: {activePolicy.reciprocal_policy.decay_rate}
                  </Badge>
                  <Badge variant="outline">
                    Max Age: {activePolicy.reciprocal_policy.max_age_days}d
                  </Badge>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* All Policies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Policy Versions
          </CardTitle>
          <CardDescription>
            All algorithm policy versions. Toggle to activate/deactivate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
              </div>
            ) : policies.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                <Brain className="w-12 h-12 mb-2 opacity-50" />
                <p>No policies created yet</p>
                <p className="text-xs">Run AI optimization to create the first policy</p>
              </div>
            ) : (
              <div className="space-y-3">
                {policies.map((policy) => (
                  <div 
                    key={policy.id} 
                    className={`p-4 rounded-lg border ${
                      policy.active ? 'border-primary bg-primary/5' : 'bg-card'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{policy.policy_version}</h4>
                        {policy.active && (
                          <Badge variant="default" className="bg-primary">Active</Badge>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => togglePolicyActive(policy.id, policy.active || false)}
                      >
                        {policy.active ? (
                          <ToggleRight className="h-5 w-5 text-primary" />
                        ) : (
                          <ToggleLeft className="h-5 w-5 text-muted-foreground" />
                        )}
                      </Button>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-2">
                      {Object.entries(policy.weights).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="text-xs">
                          <span className="text-muted-foreground">{key.slice(0, 3)}:</span>
                          <span className="ml-1 font-medium">{((value as number) * 100).toFixed(0)}%</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground">
                      {policy.description || 'No description'} • 
                      Created {format(new Date(policy.created_at), 'MMM d, yyyy')}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Policy Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Policy Performance Metrics
          </CardTitle>
          <CardDescription>
            Historical performance data for each policy version
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            {metrics.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                <TrendingUp className="w-12 h-12 mb-2 opacity-50" />
                <p>No metrics recorded yet</p>
                <p className="text-xs">Metrics are collected as policies run</p>
              </div>
            ) : (
              <div className="space-y-3">
                {metrics.map((metric) => (
                  <div key={metric.id} className="p-3 rounded-lg border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{metric.policy_version}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(metric.period_start), 'MMM d')} 
                        <ArrowRight className="h-3 w-3 inline mx-1" />
                        {format(new Date(metric.period_end), 'MMM d, yyyy')}
                      </span>
                    </div>
                    {metric.metric_snapshot && (
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        {Object.entries(metric.metric_snapshot).slice(0, 6).map(([key, value]) => (
                          <div key={key}>
                            <span className="text-muted-foreground capitalize">{key.replace(/_/g, ' ')}: </span>
                            <span className="font-medium">{typeof value === 'number' ? value.toFixed(2) : String(value)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
