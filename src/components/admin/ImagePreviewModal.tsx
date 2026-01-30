import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { format } from 'date-fns';
import {
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  AlertTriangle,
  RefreshCw,
} from 'lucide-react';

interface ImagePreviewModalProps {
  log: {
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
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdated: () => void;
}

export function ImagePreviewModal({ log, open, onOpenChange, onUpdated }: ImagePreviewModalProps) {
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adminNotes, setAdminNotes] = useState('');

  const handleApprove = async () => {
    if (!log) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from('content_moderation_logs')
        .update({
          admin_decision: 'approved',
          admin_decision_at: new Date().toISOString(),
          action_taken: 'allowed',
          appeal_notes: adminNotes || null,
        })
        .eq('id', log.id);

      if (error) throw error;
      toast.success('Content approved');
      onUpdated();
      onOpenChange(false);
    } catch (err: any) {
      toast.error('Failed to approve content', { description: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    if (!log) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from('content_moderation_logs')
        .update({
          admin_decision: 'rejected',
          admin_decision_at: new Date().toISOString(),
          action_taken: 'blocked',
          appeal_notes: adminNotes || null,
        })
        .eq('id', log.id);

      if (error) throw error;
      toast.success('Content rejected');
      onUpdated();
      onOpenChange(false);
    } catch (err: any) {
      toast.error('Failed to reject content', { description: err.message });
    } finally {
      setLoading(false);
    }
  };

  if (!log) return null;

  const isPending = log.action_taken === 'review_required' || log.action_taken === 'flagged';
  const needsBlur = !log.is_safe || log.violation_type;

  return (
    <Dialog open={open} onOpenChange={(o) => {
      if (!o) setRevealed(false);
      onOpenChange(o);
    }}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Content Review
            {log.violation_type && (
              <Badge variant="destructive" className="capitalize">
                {log.violation_type}
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription>
            {log.content_type.replace('_', ' ')} uploaded {format(new Date(log.created_at), 'MMM d, yyyy HH:mm')}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Image Preview */}
          <div className="relative rounded-lg overflow-hidden bg-muted aspect-video flex items-center justify-center">
            <img
              src={log.content_url}
              alt="Content under review"
              className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                needsBlur && !revealed ? 'blur-xl scale-105' : ''
              }`}
            />
            {needsBlur && !revealed && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50">
                <AlertTriangle className="h-12 w-12 text-warning mb-2" />
                <p className="text-sm font-medium mb-3">
                  Content may contain: <span className="capitalize">{log.violation_type || 'violations'}</span>
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setRevealed(true)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Reveal Content
                </Button>
              </div>
            )}
            {needsBlur && revealed && (
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => setRevealed(false)}
              >
                <EyeOff className="h-4 w-4 mr-2" />
                Hide
              </Button>
            )}
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">AI Confidence</p>
              <p className="font-medium">
                {log.confidence_score ? `${(log.confidence_score * 100).toFixed(0)}%` : 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Current Status</p>
              <Badge variant={
                log.action_taken === 'blocked' ? 'destructive' :
                log.action_taken === 'allowed' ? 'secondary' : 'outline'
              }>
                {log.action_taken}
              </Badge>
            </div>
            <div>
              <p className="text-muted-foreground">User ID</p>
              <p className="font-mono text-xs">{log.user_id.slice(0, 16)}...</p>
            </div>
            <div>
              <p className="text-muted-foreground">Admin Decision</p>
              <p className="font-medium capitalize">{log.admin_decision || 'Pending'}</p>
            </div>
          </div>

          {/* Admin Notes */}
          {isPending && (
            <div>
              <Label htmlFor="adminNotes">Admin Notes (optional)</Label>
              <Textarea
                id="adminNotes"
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                placeholder="Add notes about your decision..."
                rows={2}
              />
            </div>
          )}
        </div>

        <DialogFooter>
          {isPending ? (
            <>
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleReject}
                disabled={loading}
              >
                {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <XCircle className="h-4 w-4 mr-2" />}
                Reject
              </Button>
              <Button
                onClick={handleApprove}
                disabled={loading}
              >
                {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <CheckCircle className="h-4 w-4 mr-2" />}
                Approve
              </Button>
            </>
          ) : (
            <Button onClick={() => onOpenChange(false)}>Close</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
