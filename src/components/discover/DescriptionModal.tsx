import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface DescriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
}

export function DescriptionModal({ open, onOpenChange, title, description }: DescriptionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-display">{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">
            {description}
          </p>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
