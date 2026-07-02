import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/types';

interface AccordionProps {
  items: FaqItem[];
}

/**
 * Uses native <details>/<summary> — free keyboard support, screen-reader
 * semantics, and no JS state management required.
 */
export function Accordion({ items }: AccordionProps) {
  return (
    <div className="glass-subtle rounded-3xl px-6 sm:px-8 divide-y divide-white/8">
      {items.map((item, i) => (
        <details key={item.question} className="group py-5" open={i === 0}>
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display text-lg sm:text-xl text-porcelain marker:content-none">
            <span>{item.question}</span>
            <ChevronDown
              className="w-5 h-5 shrink-0 text-champagne transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="pt-4 text-mist leading-relaxed max-w-2xl">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
