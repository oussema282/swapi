import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useMouseParallax } from './MouseParallax';

const items = [
  { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=70', alt: 'Sneakers' },
  { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=70', alt: 'Headphones' },
  { src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=70', alt: 'Watch' },
  { src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=70', alt: 'Camera' },
  { src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=70', alt: 'Glasses' },
  { src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=70', alt: 'Bag' },
];

const positions = [
  { top: '5%', left: '8%', size: 200, speed: 0.3, rot: -8 },
  { top: '10%', right: '10%', size: 180, speed: 0.5, rot: 6 },
  { top: '40%', left: '40%', size: 220, speed: 0.2, rot: -4 },
  { bottom: '10%', left: '15%', size: 170, speed: 0.4, rot: 10 },
  { bottom: '15%', right: '20%', size: 200, speed: 0.35, rot: -6 },
  { top: '55%', right: '5%', size: 150, speed: 0.6, rot: 8 },
];

export function TiltCollage() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const { x: mx, y: my } = useMouseParallax(20);

  return (
    <section ref={ref} className="relative h-[120vh] overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background hidden md:block">
      {positions.map((pos, i) => {
        const item = items[i];
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [200 * pos.speed, -200 * pos.speed]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const offsetX = useTransform(mx, (v) => v * (i % 2 === 0 ? 1 : -1) * 0.8);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const offsetY = useTransform(my, (v) => v * 0.5);

        return (
          <motion.div
            key={i}
            style={{
              y,
              x: offsetX,
              translateY: offsetY,
              rotate: pos.rot,
              width: pos.size,
              height: pos.size,
              ...pos,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
            className="absolute rounded-3xl overflow-hidden shadow-2xl border border-border/40"
          >
            <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          </motion.div>
        );
      })}

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
    </section>
  );
}
