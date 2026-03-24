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
import { useTranslation } from 'react-i18next';

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

export function ReportButton({ 
  reportType, 
  targetId, 
  variant = 'icon',
  className 
}: ReportButtonProps) {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState<ReportReason | null>(null);
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const availableReasons: ReportReason[] = reportType === 'item' 
    ? ['prohibited_item', 'fake_listing', 'spam', 'scam', 'other']
    : reportType === 'user'
    ? ['spam', 'harassment', 'scam', 'inappropriate_content', 'other']
    : ['spam', 'harassment', 'inappropriate_content', 'other'];

  const dialogTitle = reportType === 'item' 
    ? t('report.titleItem') 
    : reportType === 'user' 
    ? t('report.titleUser') 
    : t('report.titleMessage');

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

      toast.success(t('report.submitted'), {
        description: t('report.submittedDescription'),
      });
      setOpen(false);
      setReason(null);
      setDescription('');
    } catch (error) {
      console.error('Failed to submit report:', error);
      toast.error(t('report.failedSubmit'), {
        description: t('report.failedSubmitDescription'),
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
      {t('report.report')}
    </button>
  ) : (
    <Button variant="outline" size="sm" className={className}>
      <Flag className="w-4 h-4 mr-2" />
      {t('report.report')}
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>
            {t('report.description')}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>{t('report.whatsTheIssue')}</Label>
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
                    <p className="font-medium text-sm">{t(`report.reasons.${r}`)}</p>
                    <p className="text-xs text-muted-foreground">{t(`report.reasons.${r}_desc`)}</p>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">{t('report.additionalDetails')}</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t('report.placeholder')}
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
            {t('report.cancel')}
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={!reason || submitting}
            variant="destructive"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {t('report.submitting')}
              </>
            ) : (
              t('report.submitReport')
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
