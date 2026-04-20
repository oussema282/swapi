import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, MapPin, Shield } from 'lucide-react';

const beats = [
  { icon: Sparkles, color: 'from-primary to-accent', titleKey: 'landing.v2.showcase.b1.title', descKey: 'landing.v2.showcase.b1.desc', defaultTitle: 'Smart match', defaultDesc: 'AI finds your perfect swap' },
  { icon: MapPin, color: 'from-accent to-primary', titleKey: 'landing.v2.showcase.b2.title', descKey: 'landing.v2.showcase.b2.desc', defaultTitle: 'Stay local', defaultDesc: 'Trade with neighbors near you' },
  { icon: Shield, color: 'from-primary to-secondary', titleKey: 'landing.v2.showcase.b3.title', descKey: 'landing.v2.showcase.b3.desc', defaultTitle: 'Safe deals', defaultDesc: 'Verified users and secure chat' },
];

export function StickyShowcase() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const phoneY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -40]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-3, 3]);
  const screenHue = useTransform(scrollYProgress, [0, 0.5, 1], [0, 60, 120]);

  return (
    <section ref={ref} className="relative py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Sticky phone */}
        <div className="lg:sticky lg:top-24 lg:h-[80vh] flex items-center justify-center">
          <motion.div
            style={{ y: phoneY, rotate: phoneRotate }}
            className="relative h-[560px] w-[280px] rounded-[3rem] border-[10px] border-foreground/90 bg-foreground/90 shadow-2xl"
          >
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-foreground/95 z-10" />
            {/* Screen */}
            <motion.div
              style={{ filter: useTransform(screenHue, (h) => `hue-rotate(${h}deg)`) }}
              className="absolute inset-0 rounded-[2.3rem] overflow-hidden bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="space-y-3 mt-8">
                  <div className="h-2 w-20 rounded-full bg-background/60" />
                  <div className="h-3 w-32 rounded-full bg-background/80" />
                </div>
                <div className="space-y-3">
                  <motion.div
                    className="h-32 rounded-2xl bg-background/30 backdrop-blur-md border border-background/20"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 rounded-xl bg-background/40" />
                    <div className="h-10 rounded-xl bg-primary/60" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scrolling beats */}
        <div className="flex flex-col gap-32 lg:gap-[40vh] py-12">
          {beats.map((beat, i) => {
            const Icon = beat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-30%' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className={`inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br ${beat.color} items-center justify-center shadow-lg mb-5`}>
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                  {t(beat.titleKey, beat.defaultTitle)}
                </h3>
                <p className="mt-3 text-lg text-muted-foreground max-w-sm">
                  {t(beat.descKey, beat.defaultDesc)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
