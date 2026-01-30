import { useState } from 'react';
import { Flag, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

type ReportType = 'item' | 'user' | 'message';
type ReportReason = 
  | 'prohibited_item' 
  | 'fake_listing' 
  | 'spam' 
  | 'harassment' 
  | 'inappropriate_content' 
  | 'scam' 
  | 'other';

interface ReportButtonProps {
  reportType: ReportType;
  targetId: string;
  variant?: 'icon' | 'button' | 'menu-item';
  className?: string;
}

const REASON_LABELS: Record<ReportReason, { label: string; description: string }> = {
  prohibited_item: {
    label: 'Prohibited Item',
    description: 'Item is illegal, dangerous, or violates our policies',
  },
  fake_listing: {
    label: 'Fake Listing',
    description: 'Photos or description don\'t match the actual item',
  },
  spam: {
    label: 'Spam',
    description: 'Repetitive, promotional, or irrelevant content',
  },
  harassment: {
    label: 'Harassment',
    description: 'Threatening, abusive, or bullying behavior',
  },
  inappropriate_content: {
    label: 'Inappropriate Content',
    description: 'Offensive, explicit, or disturbing material',
  },
  scam: {
    label: 'Suspected Scam',
    description: 'Attempt to defraud or deceive users',
  },
  other: {
    label: 'Other',
    description: 'Something else that concerns you',
  },
};

export function ReportButton({ 
  reportType, 
  targetId, 
  variant = 'icon',
  className 
}: ReportButtonProps) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState<ReportReason | null>(null);
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Filter reasons based on report type
  const availableReasons: ReportReason[] = reportType === 'item' 
    ? ['prohibited_item', 'fake_listing', 'spam', 'scam', 'other']
    : reportType === 'user'
    ? ['spam', 'harassment', 'scam', 'inappropriate_content', 'other']
    : ['spam', 'harassment', 'inappropriate_content', 'other'];

  const handleSubmit = async () => {
    if (!user || !reason) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('reports')
        .insert({
          reporter_id: user.id,
          report_type: reportType,
          target_id: targetId,
          reason,
          description: description.trim() || null,
        });

      if (error) throw error;

      toast.success('Report submitted', {
        description: 'Thank you for helping keep our community safe.',
      });
      setOpen(false);
      setReason(null);
      setDescription('');
    } catch (error) {
      console.error('Failed to submit report:', error);
      toast.error('Failed to submit report', {
        description: 'Please try again later.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) return null;

  const trigger = variant === 'icon' ? (
    <Button variant="ghost" size="icon" className={className}>
      <Flag className="w-4 h-4" />
    </Button>
  ) : variant === 'menu-item' ? (
    <button className={`flex items-center gap-2 w-full px-2 py-1.5 text-sm text-destructive hover:bg-destructive/10 rounded ${className}`}>
      <Flag className="w-4 h-4" />
      Report
    </button>
  ) : (
    <Button variant="outline" size="sm" className={className}>
      <Flag className="w-4 h-4 mr-2" />
      Report
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Report {reportType === 'item' ? 'Item' : reportType === 'user' ? 'User' : 'Message'}</DialogTitle>
          <DialogDescription>
            Help us understand what's wrong. Your report is confidential.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>What's the issue?</Label>
            <RadioGroup
              value={reason || ''}
              onValueChange={(value) => setReason(value as ReportReason)}
              className="space-y-2"
            >
              {availableReasons.map((r) => (
                <label
                  key={r}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    reason === r ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/50'
                  }`}
                >
                  <RadioGroupItem value={r} className="mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">{REASON_LABELS[r].label}</p>
                    <p className="text-xs text-muted-foreground">{REASON_LABELS[r].description}</p>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Additional details (optional)</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide any additional information that might help us investigate..."
              rows={3}
              maxLength={500}
            />
            <p className="text-xs text-muted-foreground text-right">
              {description.length}/500
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} disabled={submitting}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={!reason || submitting}
            variant="destructive"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Report'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
