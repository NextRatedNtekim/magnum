import type { MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

interface StripFrame {
  src: string;
  alt: string;
}

interface PhotoStripProps {
  className?: string;
  rotation?: number;
  frames: StripFrame[];
}

/**
 * The site's signature visual: a die-cut photo-booth strip, tilted like
 * one pulled fresh from the printer. Reused (with restraint) in the
 * hero and Our Selfie Booth page. Adds a subtle 3D tilt toward the
 * cursor on hover, layered on top of its fixed printed-strip angle.
 */
export function PhotoStrip({ className = '', rotation = -4, frames }: PhotoStripProps) {
  const shouldReduceMotion = useReducedMotion();
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 160, damping: 15 });
  const rotateY = useSpring(rawRotateY, { stiffness: 160, damping: 15 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rawRotateY.set(px * 10);
    rawRotateX.set(-py * 10);
  }

  function handleMouseLeave() {
    rawRotateX.set(0);
    rawRotateY.set(0);
  }

  return (
    <div className={`w-fit ${className}`} style={{ transform: `rotate(${rotation}deg)`, perspective: 900 }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={shouldReduceMotion ? undefined : { rotateX, rotateY }}
        className="bg-porcelain p-3 pb-8 rounded-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]"
      >
        <div className="flex flex-col gap-2">
          {frames.map((frame, i) => (
            <div key={i} className="w-44 sm:w-52 overflow-hidden rounded-sm" style={{ aspectRatio: '4/3' }}>
              <img
                src={`${frame.src}?auto=format&fit=crop&q=80&w=420`}
                alt={frame.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="eyebrow text-charcoal/75 text-center pt-3">Magnum Photobooth</p>
      </motion.div>
    </div>
  );
}
