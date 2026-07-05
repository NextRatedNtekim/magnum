import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface HeadlineSegment {
  text: string;
  italic?: boolean;
  className?: string;
}

interface AnimatedHeadlineProps {
  segments: HeadlineSegment[];
  as?: 'h1' | 'h2';
  className?: string;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.1 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/**
 * Splits headline text into words and cascades them in on mount — the
 * one deliberately bolder motion moment on the site, reserved for the
 * hero. Falls back to a plain, un-split heading for reduced motion.
 */
export function AnimatedHeadline({ segments, as = 'h1', className = '' }: AnimatedHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = as;

  if (shouldReduceMotion) {
    return (
      <Tag className={className}>
        {segments.map((seg, i) => (
          <span key={i} className={seg.italic ? `italic text-champagne ${seg.className ?? ''}` : seg.className}>
            {seg.text}{' '}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate="show"
        className="inline"
        aria-hidden="true"
      >
        {segments.map((seg, segIndex) => {
          const words = seg.text.split(' ');
          return words.map((w, i) => (
            <motion.span
              key={`${segIndex}-${i}`}
              variants={word}
              className={`inline-block ${seg.italic ? `italic text-champagne ${seg.className ?? ''}` : (seg.className ?? '')}`}
            >
              {w}
              {i < words.length - 1 || segIndex < segments.length - 1 ? '\u00A0' : ''}
            </motion.span>
          ));
        })}
      </motion.span>
      {/* Real text for accessibility/SEO — visually hidden, screen readers and crawlers still see it */}
      <span className="sr-only">
        {segments.map((s) => s.text).join(' ')}
      </span>
    </Tag>
  );
}
