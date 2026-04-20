import { useEffect } from 'react';
import { useMotionValue, useSpring, useReducedMotion, MotionValue } from 'framer-motion';

/**
 * Tracks mouse position normalized to [-1, 1] across the viewport.
 * Returns spring-smoothed motion values. Disabled if reduced motion.
 */
export function useMouseParallax(strength = 1): { x: MotionValue<number>; y: MotionValue<number> } {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 60, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (reduced) return;
    const handler = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2 * strength;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2 * strength;
      x.set(nx);
      y.set(ny);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [reduced, strength, x, y]);

  return { x: sx, y: sy };
}
