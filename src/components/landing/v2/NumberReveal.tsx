import { motion, useScroll, useTransform, useReducedMotion, animate, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function BigCounter({ target, suffix }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, target, { duration: 2, ease: 'easeOut' });
    const unsub = mv.on('change', (v) => setDisplay(Math.round(v).toLocaleString()));
    return () => { ctrl.stop(); unsub(); };
  }, [inView, target, mv]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export function NumberReveal() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-30%', '30%']);
  const blobScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const stats = [
    { value: 50000, suffix: 'K+', label: t('landing.v2.numbers.users', 'Users'), display: 50, sfx: 'K+' },
    { value: 120000, suffix: 'K+', label: t('landing.v2.numbers.swaps', 'Swaps'), display: 120, sfx: 'K+' },
    { value: 27, suffix: '', label: t('landing.v2.numbers.cities', 'Cities'), display: 27, sfx: '' },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-foreground">
      <motion.div
        style={{ y: blobY, scale: blobScale }}
        className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-[120px]"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <p className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-b from-background to-background/60 bg-clip-text text-transparent leading-none">
              <BigCounter target={s.display} suffix={s.sfx} />
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-background/60">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
