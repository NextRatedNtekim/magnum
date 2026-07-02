import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { FAQ_ITEMS, SITE } from '@/data/content';

export function FAQ() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="container-magnum grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <div>
            <SectionHeading
              eyebrow="FAQs"
              title="Questions, answered."
              description="Can't find what you're looking for? Reach out and we'll get back to you personally."
            />
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 mt-8 text-champagne font-medium hover:gap-3 transition-all duration-200"
            >
              Email us <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-magnum">
          <div className="glass rounded-[2.5rem] px-6 sm:px-16 py-16 sm:py-20 text-center flex flex-col items-center gap-6">
            <h2 className="font-display text-4xl sm:text-5xl text-porcelain text-balance max-w-2xl">
              Still have questions about your event?
            </h2>
            <Button as="link" to="/book-now" size="lg">
              Book Now
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
