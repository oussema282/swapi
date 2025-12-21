import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star, Loader2, Check, Package, ArrowLeftRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CompleteSwapModalProps {
  open: boolean;
  onClose: () => void;
  onComplete: (rating: number, feedback: string) => Promise<void>;
  myItemTitle: string;
  theirItemTitle: string;
  myItemPhoto?: string;
  theirItemPhoto?: string;
}

export function CompleteSwapModal({
  open,
  onClose,
  onComplete,
  myItemTitle,
  theirItemTitle,
  myItemPhoto,
  theirItemPhoto,
}: CompleteSwapModalProps) {
  const [step, setStep] = useState<'confirm' | 'rate' | 'success'>('confirm');
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setStep('rate');
  };

  const handleComplete = async () => {
    setLoading(true);
    try {
      await onComplete(rating, feedback);
      setStep('success');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setStep('confirm');
    setRating(5);
    setFeedback('');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          {step === 'confirm' && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <DialogHeader>
                <DialogTitle>Complete This Swap?</DialogTitle>
                <DialogDescription>
                  Confirm that you've successfully exchanged items with the other user.
                </DialogDescription>
              </DialogHeader>

              <div className="flex items-center justify-center gap-3 py-6">
                <div className="w-16 h-16 rounded-lg bg-muted overflow-hidden">
                  {myItemPhoto ? (
                    <img src={myItemPhoto} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <ArrowLeftRight className="w-6 h-6 text-success" />
                <div className="w-16 h-16 rounded-lg bg-muted overflow-hidden">
                  {theirItemPhoto ? (
                    <img src={theirItemPhoto} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground mb-4">
                <span className="font-medium text-foreground">{myItemTitle}</span>
                {' ↔ '}
                <span className="font-medium text-foreground">{theirItemTitle}</span>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={handleClose} className="flex-1">
                  Cancel
                </Button>
                <Button onClick={handleConfirm} className="flex-1 gradient-primary text-primary-foreground">
                  Yes, Complete
                </Button>
              </div>
            </motion.div>
          )}

          {step === 'rate' && (
            <motion.div
              key="rate"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <DialogHeader>
                <DialogTitle>Rate This Exchange</DialogTitle>
                <DialogDescription>
                  How was your experience with this swap?
                </DialogDescription>
              </DialogHeader>

              <div className="py-6 space-y-6">
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={cn(
                          'w-8 h-8 transition-colors',
                          star <= rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        )}
                      />
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback">Feedback (optional)</Label>
                  <Textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Share your experience..."
                    maxLength={200}
                    rows={3}
                  />
                </div>
              </div>

              <Button
                onClick={handleComplete}
                disabled={loading}
                className="w-full gradient-primary text-primary-foreground"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Completing...
                  </>
                ) : (
                  'Submit & Complete'
                )}
              </Button>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 flex flex-col items-center gap-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-20 h-20 rounded-full bg-success flex items-center justify-center"
              >
                <Check className="w-10 h-10 text-success-foreground" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-1">Swap Complete!</h3>
                <p className="text-sm text-muted-foreground">Thanks for using SwapSpace</p>
              </motion.div>
              <Button onClick={handleClose} variant="outline" className="mt-2">
                Done
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}