import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxDividerProps {
  flip?: boolean;
  className?: string;
}

export function ParallaxDivider({ flip = false, className = '' }: ParallaxDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <div ref={ref} className={`relative w-full overflow-hidden h-16 ${className}`} aria-hidden>
      <motion.svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ y: reduced ? 0 : y, transform: flip ? 'scaleY(-1)' : undefined }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          className="fill-muted/40"
        />
      </motion.svg>
    </div>
  );
}
