import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotation: number;
}

export function Confetti({ show }: { show: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (show) {
      const colors = [
        'hsl(var(--primary))',
        'hsl(var(--secondary))',
        'hsl(var(--accent))',
        '#FFD700',
        '#FF69B4',
        '#00CED1',
      ];

      const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 6 + Math.random() * 8,
        rotation: Math.random() * 360,
      }));

      setPieces(newPieces);

      const timeout = setTimeout(() => setPieces([]), 3000);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            opacity: 1,
            y: -20,
            x: `${piece.x}vw`,
            rotate: 0,
            scale: 0,
          }}
          animate={{
            opacity: [1, 1, 0],
            y: '100vh',
            rotate: piece.rotation + 720,
            scale: [0, 1, 1, 0.5],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeOut',
          }}
          className="fixed pointer-events-none z-[100]"
          style={{
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            top: 0,
          }}
        />
      ))}
    </AnimatePresence>
  );
}
