import { motion } from 'framer-motion';
import { ArrowLeftRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function EmptyMatchesState() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex-1 flex flex-col items-center justify-center text-center py-16 px-4"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 shadow-lg"
      >
        <ArrowLeftRight className="w-10 h-10 text-primary" />
      </motion.div>
      
      <h3 className="text-xl font-display font-bold mb-2">No matches yet</h3>
      <p className="text-muted-foreground mb-6 max-w-xs">
        Start swiping to find items you'd love to exchange. Your matches will appear here!
      </p>
      
      <Button 
        onClick={() => navigate('/discover')} 
        className="gradient-primary text-primary-foreground gap-2"
        size="lg"
      >
        <Sparkles className="w-4 h-4" />
        Discover Items
      </Button>
    </motion.div>
  );
}
