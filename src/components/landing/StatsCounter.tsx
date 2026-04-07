import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Counter({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => `${Math.round(v).toLocaleString()}${suffix}`);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, target, { duration });
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [inView, target, duration, motionVal, rounded]);

  return <span ref={ref}>{display}</span>;
}

export function StatsCounter() {
  const { t } = useTranslation();

  const stats = [
    { target: 50000, suffix: '+', label: t('landing.stats.users', 'Active Users') },
    { target: 120000, suffix: '+', label: t('landing.stats.traded', 'Items Traded') },
    { target: 27, suffix: '', label: t('landing.stats.countries', 'Countries') },
    { target: 98, suffix: '%', label: t('landing.stats.satisfaction', 'Satisfaction') },
  ];

  return (
    <section className="py-16 px-4 gradient-primary">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl sm:text-4xl font-bold text-primary-foreground">
              <Counter target={s.target} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-primary-foreground/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
