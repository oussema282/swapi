import { useNavigate } from 'react-router-dom';
import { Item } from '@/types/database';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowLeftRight, MessageCircle, Package } from 'lucide-react';

interface MatchModalProps {
  open: boolean;
  onClose: () => void;
  myItem: Item | null;
  theirItem: Item | null;
}

export function MatchModal({ open, onClose, myItem, theirItem }: MatchModalProps) {
  const navigate = useNavigate();

  if (!myItem || !theirItem) return null;

  const myPhoto = myItem.photos?.[0];
  const theirPhoto = theirItem.photos?.[0];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            <span className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              It's a Match!
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl overflow-hidden bg-muted border-4 border-primary shadow-lg">
                {myPhoto ? (
                  <img src={myPhoto} alt={myItem.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-10 h-10 text-muted-foreground" />
                  </div>
                )}
              </div>
              <p className="text-xs text-center mt-2 font-medium line-clamp-1">{myItem.title}</p>
            </div>

            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow animate-pulse">
              <ArrowLeftRight className="w-6 h-6 text-primary-foreground" />
            </div>

            <div className="relative">
              <div className="w-28 h-28 rounded-2xl overflow-hidden bg-muted border-4 border-secondary shadow-lg">
                {theirPhoto ? (
                  <img src={theirPhoto} alt={theirItem.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-10 h-10 text-muted-foreground" />
                  </div>
                )}
              </div>
              <p className="text-xs text-center mt-2 font-medium line-clamp-1">{theirItem.title}</p>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-6">
            You both want to swap! Start chatting to arrange the exchange.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Keep Swiping
          </Button>
          <Button
            onClick={() => {
              onClose();
              navigate('/matches');
            }}
            className="flex-1 gradient-primary"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
