import { useNavigate } from 'react-router-dom';
import { Item } from '@/types/database';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { HeartOff, Package, Lock, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { VerifiedName } from '@/components/ui/verified-name';
import { MissedMatch } from '@/hooks/useMissedMatches';

interface MissedMatchModalProps {
  open: boolean;
  onClose: () => void;
  missedMatch: MissedMatch | null;
  isPro: boolean;
}

export function MissedMatchModal({ open, onClose, missedMatch, isPro }: MissedMatchModalProps) {
  const navigate = useNavigate();

  if (!missedMatch) return null;

  const theirPhoto = missedMatch.their_item?.photos?.[0];
  const myPhoto = missedMatch.my_item?.photos?.[0];

  return (
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
                className="text-center mb-4"
              >
                <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                  <HeartOff className="w-7 h-7 text-destructive" />
                </div>
                <h2 className="text-2xl font-display font-bold text-destructive">
                  You Missed a Match!
                </h2>
              </motion.div>

              {isPro ? (
                // PRO USER: Show full details
                <>
                  {/* User Info */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center gap-2 mb-4"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={missedMatch.their_item?.owner_avatar_url || undefined} />
                      <AvatarFallback className="text-xs">
                        {missedMatch.their_item?.owner_display_name?.charAt(0) || '?'}
                      </AvatarFallback>
                    </Avatar>
                    <VerifiedName 
                      name={missedMatch.their_item?.owner_display_name || 'Someone'} 
                      isPro={missedMatch.their_item?.owner_is_pro}
                      className="font-medium"
                      badgeClassName="w-4 h-4"
                    />
                    <span className="text-muted-foreground">wanted to swap!</span>
                  </motion.div>

                  {/* Items Display */}
                  <div className="flex items-center justify-center gap-4 py-4">
                    {/* Their Item */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.3 }}
                      className="relative"
                    >
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-muted border-4 border-destructive/30 shadow-lg">
                        {theirPhoto ? (
                          <img src={theirPhoto} alt={missedMatch.their_item?.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Package className="w-8 h-8 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-center mt-2 font-medium line-clamp-1 text-foreground max-w-[96px]">
                        {missedMatch.their_item?.title}
                      </p>
                      <p className="text-[10px] text-center text-muted-foreground">Their item</p>
                    </motion.div>

                    {/* Arrow Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 10, stiffness: 200, delay: 0.4 }}
                      className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center"
                    >
                      <HeartOff className="w-5 h-5 text-destructive" />
                    </motion.div>

                    {/* My Item */}
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.35 }}
                      className="relative"
                    >
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-muted border-4 border-primary/30 shadow-lg">
                        {myPhoto ? (
                          <img src={myPhoto} alt={missedMatch.my_item?.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Package className="w-8 h-8 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-center mt-2 font-medium line-clamp-1 text-foreground max-w-[96px]">
                        {missedMatch.my_item?.title}
                      </p>
                      <p className="text-[10px] text-center text-muted-foreground">Your item</p>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-muted-foreground mt-2 mb-6 text-sm"
                  >
                    They liked your item but you swiped left on theirs.
                  </motion.p>

                  {/* Button */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button onClick={onClose} className="w-full" variant="outline">
                      Got it
                    </Button>
                  </motion.div>
                </>
              ) : (
                // FREE USER: Show blurred/locked content with upgrade CTA
                <>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative py-6"
                  >
                    {/* Blurred preview */}
                    <div className="flex items-center justify-center gap-4 blur-md pointer-events-none select-none">
                      <div className="w-20 h-20 rounded-2xl bg-muted" />
                      <div className="w-8 h-8 rounded-full bg-muted" />
                      <div className="w-20 h-20 rounded-2xl bg-muted" />
                    </div>
                    
                    {/* Lock overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <Lock className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-center">
                        Someone wants to swap with you!
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mb-6"
                  >
                    <p className="text-muted-foreground text-sm mb-4">
                      Upgrade to Valexo Pro to see who wanted to match with you and what items they have.
                    </p>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col gap-2"
                  >
                    <Button 
                      onClick={() => {
                        onClose();
                        navigate('/checkout');
                      }} 
                      className="w-full gradient-primary"
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      Upgrade to Pro
                    </Button>
                    <Button onClick={onClose} variant="ghost" className="w-full">
                      Maybe later
                    </Button>
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
