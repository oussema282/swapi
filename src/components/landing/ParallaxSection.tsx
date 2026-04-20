import { motion, useScroll, useTransform, useReducedMotion, MotionStyle } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // -1 to 1; negative = slower upward, positive = faster upward
  className?: string;
  as?: 'section' | 'div';
  style?: MotionStyle;
}

/**
 * Wrap content to apply scroll-linked Y parallax based on element progress
 * through the viewport. Disabled if user prefers reduced motion.
 */
export function ParallaxSection({
  children,
  speed = 0.3,
  className,
  as = 'section',
  style,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const distance = 80 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const Comp = as === 'section' ? motion.section : motion.div;

  return (
    <Comp ref={ref as never} className={className} style={{ ...style, y: reduced ? 0 : y }}>
      {children}
    </Comp>
  );
}
