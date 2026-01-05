import { motion } from 'framer-motion';
import { ArrowLeftRight, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_NAME, APP_TAGLINE, APP_DESCRIPTION } from '@/config/branding';
import { Link } from 'react-router-dom';

export function Hero() {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 animate-auth-gradient"
        style={{
          background: `
            linear-gradient(
              135deg,
              hsl(262 83% 58% / 0.12) 0%,
              hsl(340 82% 52% / 0.08) 25%,
              hsl(172 66% 50% / 0.06) 50%,
              hsl(262 83% 58% / 0.10) 75%,
              hsl(340 82% 52% / 0.12) 100%
            )
          `,
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Animated blobs */}
      <div 
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 animate-blob-slow" 
        style={{ background: 'hsl(262 83% 58% / 0.4)' }} 
      />
      <div 
        className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-25 animate-blob-slow-reverse" 
        style={{ background: 'hsl(340 82% 52% / 0.35)' }} 
      />
      <div 
        className="absolute top-[50%] left-[60%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 animate-blob-slow-delay" 
        style={{ background: 'hsl(172 66% 50% / 0.3)' }} 
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary shadow-glow mb-8"
        >
          <ArrowLeftRight className="w-10 h-10 text-primary-foreground" />
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl md:text-7xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent mb-6"
        >
          {APP_NAME}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl font-medium text-foreground mb-4"
        >
          {APP_TAGLINE}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          {APP_DESCRIPTION}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold gradient-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
            <Link to="/auth">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-8 text-lg font-semibold"
            onClick={scrollToHowItWorks}
          >
            How it Works
            <ChevronDown className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div>
            <p className="text-3xl font-bold text-primary">10K+</p>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary">50K+</p>
            <p className="text-sm text-muted-foreground">Items Traded</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">15+</p>
            <p className="text-sm text-muted-foreground">Countries</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
