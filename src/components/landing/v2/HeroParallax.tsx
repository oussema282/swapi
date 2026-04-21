import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMouseParallax } from './MouseParallax';

export function HeroParallax() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const meshY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '40%']);
  const shapesY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 200]);
  const cardsY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 120]);
  const cardsRot = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 8]);
  const headlineY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -80]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, reduced ? 1 : 0]);

  const { x: mx, y: my } = useMouseParallax(15);

  const scrollToAuth = () => {
    document.getElementById('auth-panel')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Layer 1: Animated mesh gradient (deepest) */}
      <motion.div
        style={{ y: meshY }}
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/20" />
        <motion.div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/30 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/30 blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -80, 0], y: [0, -60, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/40 blur-[100px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Layer 2: Floating SVG shapes (slow + mouse parallax) */}
      <motion.div style={{ y: shapesY, x: mx }} className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <motion.div
          className="absolute top-[18%] left-[12%] h-16 w-16 rounded-2xl border-2 border-primary/30 backdrop-blur-sm bg-primary/5"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-[60%] right-[15%] h-20 w-20 rounded-full border-2 border-accent/30 bg-accent/5"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[20%] h-12 w-12 rotate-45 border-2 border-primary/30 bg-primary/5"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-[30%] right-[25%] h-3 w-3 rounded-full bg-primary/60"
          animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[35%] right-[10%] h-2 w-2 rounded-full bg-accent"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </motion.div>

      {/* Layer 3: Tilted product card stack (medium + mouse) */}
      <motion.div
        style={{ y: cardsY, rotate: cardsRot, x: useTransform(mx, (v) => v * 1.5), translateY: my }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden md:block pointer-events-none scale-75 lg:scale-100"
        aria-hidden
      >
        <div className="relative h-[420px] w-[300px]">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-3xl border border-border/40 bg-card/80 backdrop-blur-xl shadow-2xl"
              style={{
                rotate: `${(i - 1) * 6}deg`,
                translateX: `${(i - 1) * 30}px`,
                translateY: `${(i - 1) * 20}px`,
                zIndex: 3 - i,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            >
              <div className="h-2/3 rounded-t-3xl bg-gradient-to-br from-primary/40 to-accent/40" />
              <div className="p-4 space-y-2">
                <div className="h-3 w-3/4 rounded-full bg-muted" />
                <div className="h-2 w-1/2 rounded-full bg-muted/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Layer 4: Headline (fastest) */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 backdrop-blur-md px-4 py-1.5 mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-medium text-foreground/80">{t('landing.v2.hero.badge', 'echange.tn')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight"
        >
          <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_ease-in-out_infinite]">
            {t('landing.v2.hero.word1', 'Swap.')}
          </span>
          <span className="block text-foreground">{t('landing.v2.hero.word2', 'Match.')}</span>
          <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_ease-in-out_infinite]">
            {t('landing.v2.hero.word3', 'Smile.')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-md text-base sm:text-lg text-muted-foreground"
        >
          {t('landing.v2.hero.tagline', 'Trade what you have. Get what you want.')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <Button
            size="lg"
            onClick={scrollToAuth}
            className="rounded-full px-8 h-12 text-base font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-shadow"
          >
            {t('landing.v2.hero.cta', 'Get started')}
          </Button>
        </motion.div>
      </motion.div>

      {/* Layer 5: scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t('landing.v2.hero.scroll', 'scroll')}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
