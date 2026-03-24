import { useState } from 'react';
import { UserMinus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useUnmatchMutation } from '@/hooks/useMissedMatches';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

interface UnmatchButtonProps {
  matchId: string;
  theirName: string;
  onSuccess?: () => void;
}

export function UnmatchButton({ matchId, theirName, onSuccess }: UnmatchButtonProps) {
  const [open, setOpen] = useState(false);
  const unmatchMutation = useUnmatchMutation();
  const { t } = useTranslation();

  const handleUnmatch = async () => {
    try {
      await unmatchMutation.mutateAsync(matchId);
      toast.success(t('unmatch.success'));
      setOpen(false);
      onSuccess?.();
    } catch (error) {
      toast.error(t('unmatch.failed'));
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
          <UserMinus className="w-4 h-4 mr-1" />
          {t('unmatch.button')}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('unmatch.title', { name: theirName })}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('unmatch.description')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t('common.cancel')}</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleUnmatch}
            disabled={unmatchMutation.isPending}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {unmatchMutation.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin mr-1" />
            ) : (
              <UserMinus className="w-4 h-4 mr-1" />
            )}
            {t('unmatch.button')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
