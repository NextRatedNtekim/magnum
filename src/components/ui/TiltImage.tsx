import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from 'framer-motion';

interface TiltImageProps {
  src: string;
  alt: string;
  /** Aspect ratio, e.g. '3/4', '4/5', '16/9' */
  aspect?: string;
  className?: string;
  /** Max vertical scroll-parallax drift in px. 0 disables. */
  parallax?: number;
  /** Max tilt in degrees on hover. 0 disables. */
  tilt?: number;
  /** Unsplash width param for the fetched image */
  width?: number;
}

/**
 * The site's signature "advanced" photo treatment: the image drifts
 * gently as the page scrolls (parallax), and tilts in 3D toward the
 * cursor on hover — like tipping a printed photo card in your hand.
 * Both effects are skipped entirely under prefers-reduced-motion.
 */
export function TiltImage({
  src,
  alt,
  aspect = '4/5',
  className = '',
  parallax = 22,
  tilt = 10,
  width = 800,
}: TiltImageProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 180, damping: 16 });
  const rotateY = useSpring(rawRotateY, { stiffness: 180, damping: 16 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !tilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rawRotateY.set(px * tilt * 2);
    rawRotateX.set(-py * tilt * 2);
  }

  function handleMouseLeave() {
    rawRotateX.set(0);
    rawRotateY.set(0);
  }

  const imgUrl = `${src}?auto=format&fit=crop&q=80&w=${width}`;

  return (
    <motion.div
      ref={outerRef}
      style={shouldReduceMotion || !parallax ? undefined : { y }}
      className="w-full h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          shouldReduceMotion
            ? undefined
            : { rotateX, rotateY, transformPerspective: 900 }
        }
        className={`relative overflow-hidden ${className}`}
      >
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
          <img
            src={imgUrl}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover scale-[1.06]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
