import { useNavigate } from 'react-router-dom';
import { Item } from '@/types/database';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowLeftRight, MessageCircle, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Confetti } from './Confetti';

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
    <>
      <Confetti show={open} />
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md border-none bg-transparent shadow-none overflow-visible">
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                className="bg-card rounded-3xl p-6 shadow-2xl border border-border/50"
              >
                {/* Title */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-center mb-6"
                >
                  <h2 className="text-4xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                    It's a Match!
                  </h2>
                </motion.div>

                {/* Items */}
                <div className="flex items-center justify-center gap-4 py-4">
                  {/* My Item */}
                  <motion.div
                    initial={{ x: -100, opacity: 0, rotate: -15 }}
                    animate={{ x: 0, opacity: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="w-28 h-28 rounded-2xl overflow-hidden bg-muted border-4 border-primary shadow-lg shadow-primary/30">
                      {myPhoto ? (
                        <img src={myPhoto} alt={myItem.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Package className="w-10 h-10 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-center mt-2 font-medium line-clamp-1 text-foreground">
                      {myItem.title}
                    </p>
                  </motion.div>

                  {/* Swap Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 200, delay: 0.4 }}
                    className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-glow"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: 0.8, repeat: 2 }}
                    >
                      <ArrowLeftRight className="w-7 h-7 text-primary-foreground" />
                    </motion.div>
                  </motion.div>

                  {/* Their Item */}
                  <motion.div
                    initial={{ x: 100, opacity: 0, rotate: 15 }}
                    animate={{ x: 0, opacity: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="w-28 h-28 rounded-2xl overflow-hidden bg-muted border-4 border-secondary shadow-lg shadow-secondary/30">
                      {theirPhoto ? (
                        <img src={theirPhoto} alt={theirItem.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Package className="w-10 h-10 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-center mt-2 font-medium line-clamp-1 text-foreground">
                      {theirItem.title}
                    </p>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-muted-foreground mt-4 mb-6"
                >
                  You both want to swap! Start chatting to arrange the exchange.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3"
                >
                  <Button variant="outline" onClick={onClose} className="flex-1">
                    Keep Swiping
                  </Button>
                  <motion.div
                    className="flex-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.5, delay: 1, repeat: 2 }}
                  >
                    <Button
                      onClick={() => {
                        onClose();
                        navigate('/matches');
                      }}
                      className="w-full gradient-primary shadow-glow"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat Now
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
}
