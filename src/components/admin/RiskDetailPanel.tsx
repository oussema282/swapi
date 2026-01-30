import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { toast } from 'sonner';
import { format } from 'date-fns';
import {
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Shield,
  Clock,
  Ban,
  CheckCircle,
  Flag,
  RefreshCw,
  Save,
} from 'lucide-react';

interface RiskDetailPanelProps {
  riskScore: {
    id: string;
    user_id: string;
    risk_score: number;
    risk_level: string;
    signals: any;
    auto_flagged: boolean;
    admin_reviewed: boolean;
    admin_notes: string | null;
    last_analyzed_at: string;
  };
  onUpdated: () => void;
  onOpenUserDetail: (userId: string) => void;
}

export function RiskDetailPanel({ riskScore, onUpdated, onOpenUserDetail }: RiskDetailPanelProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adminNotes, setAdminNotes] = useState(riskScore.admin_notes || '');
  const [suspendDays, setSuspendDays] = useState('7');
  const [suspendReason, setSuspendReason] = useState('');

  const handleSaveNotes = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('user_risk_scores')
        .update({
          admin_notes: adminNotes,
          admin_reviewed: true,
        })
        .eq('id', riskScore.id);

      if (error) throw error;
      toast.success('Notes saved');
      onUpdated();
    } catch (err: any) {
      toast.error('Failed to save notes', { description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleClearFlag = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('user_risk_scores')
        .update({
          auto_flagged: false,
          admin_reviewed: true,
          admin_notes: adminNotes || 'Cleared by admin - false positive',
        })
        .eq('id', riskScore.id);

      if (error) throw error;
      toast.success('Flag cleared');
      onUpdated();
    } catch (err: any) {
      toast.error('Failed to clear flag', { description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSuspend = async () => {
    if (!suspendReason) {
      toast.error('Please provide a suspension reason');
      return;
    }
    setLoading(true);
    try {
      const suspendedUntil = new Date();
      suspendedUntil.setDate(suspendedUntil.getDate() + parseInt(suspendDays));

      const { error } = await supabase
        .from('profiles')
        .update({
          is_suspended: true,
          suspended_until: suspendedUntil.toISOString(),
          suspension_reason: suspendReason,
        })
        .eq('user_id', riskScore.user_id);

      if (error) throw error;

      // Also mark as reviewed
      await supabase
        .from('user_risk_scores')
        .update({ admin_reviewed: true })
        .eq('id', riskScore.id);

      toast.success(`User suspended for ${suspendDays} days`);
      setSuspendReason('');
      onUpdated();
    } catch (err: any) {
      toast.error('Failed to suspend user', { description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleBan = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          is_banned: true,
          banned_at: new Date().toISOString(),
          ban_reason: adminNotes || 'High risk score - banned by admin',
        })
        .eq('user_id', riskScore.user_id);

      if (error) throw error;

      await supabase
        .from('user_risk_scores')
        .update({ admin_reviewed: true })
        .eq('id', riskScore.id);

      toast.success('User banned');
      onUpdated();
    } catch (err: any) {
      toast.error('Failed to ban user', { description: err.message });
    } finally {
      setLoading(false);
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
      default:
        return <Badge variant="secondary" className="bg-success/10 text-success">Low</Badge>;
    }
  };

  const signals = riskScore.signals || {};

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border rounded-lg">
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              riskScore.risk_level === 'critical' || riskScore.risk_level === 'high' 
                ? 'bg-destructive/10' 
                : riskScore.risk_level === 'medium' 
                  ? 'bg-warning/10' 
                  : 'bg-success/10'
            }`}>
              {riskScore.risk_level === 'critical' || riskScore.risk_level === 'high' ? (
                <AlertTriangle className={`w-5 h-5 ${
                  riskScore.risk_level === 'critical' ? 'text-destructive' : 'text-destructive/80'
                }`} />
              ) : (
                <Shield className={`w-5 h-5 ${
                  riskScore.risk_level === 'medium' ? 'text-warning' : 'text-success'
                }`} />
              )}
            </div>
            <div>
              <p className="text-sm font-medium font-mono">
                {riskScore.user_id.slice(0, 8)}...
              </p>
              <p className="text-xs text-muted-foreground">
                Score: {riskScore.risk_score.toFixed(0)}/100
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {riskScore.auto_flagged && <Flag className="w-4 h-4 text-warning" />}
            {riskScore.admin_reviewed && <CheckCircle className="w-4 h-4 text-success" />}
            {getRiskBadge(riskScore.risk_level)}
            {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>
        </div>
      </CollapsibleTrigger>
      
      <CollapsibleContent>
        <div className="px-4 pb-4 space-y-4 border-t pt-4">
          {/* Signals */}
          <div>
            <h4 className="text-sm font-medium mb-2">Risk Signals</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(signals).map(([key, value]) => (
                <div key={key} className="flex justify-between p-2 rounded bg-muted/50">
                  <span className="text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</span>
                  <span className="font-medium">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Last Analyzed */}
          <div className="text-sm text-muted-foreground">
            Last analyzed: {format(new Date(riskScore.last_analyzed_at), 'MMM d, yyyy HH:mm')}
          </div>

          {/* Admin Notes */}
          <div>
            <Label htmlFor={`notes-${riskScore.id}`}>Admin Notes</Label>
            <Textarea
              id={`notes-${riskScore.id}`}
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.target.value)}
              placeholder="Add notes about this user..."
              rows={2}
            />
            <Button 
              onClick={handleSaveNotes} 
              disabled={loading} 
              size="sm" 
              variant="outline"
              className="mt-2"
            >
              {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
              Save Notes
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2 pt-2 border-t">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onOpenUserDetail(riskScore.user_id)}
            >
              View Full Profile
            </Button>
            
            {riskScore.auto_flagged && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleClearFlag}
                disabled={loading}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Clear Flag
              </Button>
            )}
          </div>

          {/* Suspend Section */}
          <div className="pt-2 border-t">
            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-warning" />
              Suspend User
            </h4>
            <div className="flex gap-2 items-end">
              <div className="w-24">
                <Label htmlFor={`days-${riskScore.id}`}>Days</Label>
                <Input
                  id={`days-${riskScore.id}`}
                  type="number"
                  value={suspendDays}
                  onChange={(e) => setSuspendDays(e.target.value)}
                  min="1"
                  max="365"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor={`reason-${riskScore.id}`}>Reason</Label>
                <Input
                  id={`reason-${riskScore.id}`}
                  value={suspendReason}
                  onChange={(e) => setSuspendReason(e.target.value)}
                  placeholder="Suspension reason..."
                />
              </div>
              <Button 
                variant="outline" 
                onClick={handleSuspend}
                disabled={loading || !suspendReason}
              >
                Suspend
              </Button>
            </div>
          </div>

          {/* Ban Button */}
          <div className="pt-2 border-t">
            <Button 
              variant="destructive" 
              size="sm"
              onClick={handleBan}
              disabled={loading}
            >
              <Ban className="h-4 w-4 mr-2" />
              Ban User Permanently
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
