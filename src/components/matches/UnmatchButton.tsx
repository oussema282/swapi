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

interface UnmatchButtonProps {
  matchId: string;
  theirName: string;
  onSuccess?: () => void;
}

export function UnmatchButton({ matchId, theirName, onSuccess }: UnmatchButtonProps) {
  const [open, setOpen] = useState(false);
  const unmatchMutation = useUnmatchMutation();

  const handleUnmatch = async () => {
    try {
      await unmatchMutation.mutateAsync(matchId);
      toast.success('Unmatched successfully');
      setOpen(false);
      onSuccess?.();
    } catch (error) {
      toast.error('Failed to unmatch');
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
          <UserMinus className="w-4 h-4 mr-1" />
          Unmatch
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Unmatch with {theirName}?</AlertDialogTitle>
          <AlertDialogDescription>
            This will remove the match and you won't be able to message each other anymore. 
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
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
            Unmatch
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
