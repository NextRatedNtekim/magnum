import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface HeroBackgroundProps {
  src: string;
  alt: string;
  /** How far the background drifts (px) across the hero's scroll range */
  range?: number;
}

/**
 * Full-bleed background photo for the hero, with a dark gradient wash
 * so headline/body text keeps full contrast, and a slow parallax drift
 * as the person scrolls past — the background moves at a different
 * rate than the foreground content, giving it depth.
 */
export function HeroBackground({ src, alt, range = 70 }: HeroBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, range]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.img
        src={`${src}?auto=format&fit=crop&q=75&w=2000`}
        alt={alt}
        loading="eager"
        decoding="async"
        style={shouldReduceMotion ? undefined : { y }}
        className="absolute inset-0 w-full h-[130%] object-cover"
      />
      {/* Dark wash + bottom fade so text stays crisp and the section
          blends into the ink background below it */}
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/10" />
    </div>
  );
}
