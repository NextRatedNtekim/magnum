import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  /** 'fade' is the original subtle fade-up. 'scale-blur' is a slightly
   *  more cinematic entrance — cards arrive a touch softer/smaller and
   *  sharpen into place. Reserved for card grids (features, rentals,
   *  portfolio) rather than used everywhere. */
  variant?: 'fade' | 'scale-blur';
}

export function Reveal({ children, delay = 0, className = '', y = 16, variant = 'fade' }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const initial =
    variant === 'scale-blur'
      ? { opacity: 0, scale: 0.92, filter: 'blur(8px)' }
      : { opacity: 0, y };
  const whileInView =
    variant === 'scale-blur'
      ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? undefined : initial}
      whileInView={shouldReduceMotion ? undefined : whileInView}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: variant === 'scale-blur' ? 0.7 : 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
