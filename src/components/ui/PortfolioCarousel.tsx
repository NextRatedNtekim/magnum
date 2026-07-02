import { useEffect, useRef, useState, useCallback } from 'react';
import type { KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { PortfolioItem } from '@/types';
import { PlaceholderImage } from './PlaceholderImage';

interface PortfolioCarouselProps {
  items: PortfolioItem[];
  /** Milliseconds between auto-advances */
  interval?: number;
  className?: string;
}

// Responsive fan spacing via clamp() so the stack scales with viewport
// width instead of needing per-breakpoint JS measurements.
const OFFSET_1 = 'clamp(58px, 17vw, 128px)';
const OFFSET_2 = 'clamp(104px, 28vw, 220px)';

function getSignedOffset(index: number, active: number, total: number) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

/**
 * A fanned, overlapping card stack that auto-advances — the site's
 * signature portfolio presentation. Pauses on hover/focus/touch and
 * respects prefers-reduced-motion (autoplay disabled, manual dots only).
 */
export function PortfolioCarousel({ items, interval = 3800, className = '' }: PortfolioCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const total = items.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (i: number) => {
      setActive(((i % total) + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (paused || shouldReduceMotion || total <= 1) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, interval);
    return () => clearInterval(id);
  }, [paused, shouldReduceMotion, total, interval]);

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(active - 1);
    }
  }

  const activeItem = items[active];

  return (
    <div className={className}>
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Portfolio gallery"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        className="relative h-[340px] sm:h-[400px] md:h-[440px] flex items-center justify-center outline-none"
      >
        {items.map((item, i) => {
          const diff = getSignedOffset(i, active, total);
          const a = Math.abs(diff);
          const sign = Math.sign(diff);
          const visible = a <= 2;

          const translateX = a === 0 ? '0px' : a === 1 ? `calc(${sign} * ${OFFSET_1})` : `calc(${sign} * ${OFFSET_2})`;
          const rotate = diff * 7;
          const scale = a === 0 ? 1 : a === 1 ? 0.9 : 0.82;
          const opacity = a === 0 ? 1 : a === 1 ? 0.65 : visible ? 0.28 : 0;
          const zIndex = 30 - a;

          return (
            <motion.div
              key={item.id}
              className="absolute w-40 sm:w-52 md:w-60 will-change-transform"
              style={{ zIndex }}
              animate={
                shouldReduceMotion
                  ? { opacity: a === 0 ? 1 : 0, x: 0 }
                  : { x: translateX, rotate, scale, opacity }
              }
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden={a !== 0}
            >
              <div className="glass rounded-2xl overflow-hidden">
                <PlaceholderImage label={a === 0 ? item.caption : undefined} aspect="3/4" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Caption crossfades with the active slide */}
      <div className="text-center mt-6 min-h-[3.5rem]">
        <motion.div
          key={activeItem.id}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 6 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow text-champagne mb-1">{activeItem.category}</p>
          <p className="font-display text-lg text-porcelain">{activeItem.caption}</p>
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-6" role="group" aria-label="Choose a slide">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-current={i === active ? 'true' : undefined}
            aria-label={`Go to slide ${i + 1}: ${item.caption}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-champagne' : 'w-2 bg-white/25 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Screen-reader announcement of the current slide */}
      <p className="sr-only" aria-live="polite">
        Showing slide {active + 1} of {total}: {activeItem.caption}
      </p>
    </div>
  );
}
