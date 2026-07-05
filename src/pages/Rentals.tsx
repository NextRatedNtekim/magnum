import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltImage } from '@/components/ui/TiltImage';
import { Reveal } from '@/components/ui/Reveal';
import { RENTAL_CATEGORIES } from '@/data/content';

export function Rentals() {
  return (
    <>
      <section className="py-20 sm:py-28 border-b border-ink-line">
        <div className="container-magnum">
          <Reveal>
            <SectionHeading
              eyebrow="Rentals"
              title="Backdrops, flower walls, chair & table rentals."
              description="Elevate your event setup with comfort and style — beyond the booth."
              align="center"
              className="mb-4"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-magnum flex flex-col gap-20">
          {RENTAL_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} variant="scale-blur">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="glass rounded-2xl overflow-hidden w-full">
                  <TiltImage src={cat.image} alt={cat.imageAlt} aspect="4/3" width={700} />
                </div>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl text-porcelain mb-4">{cat.name}</h2>
                  <p className="text-mist leading-relaxed mb-6">{cat.description}</p>
                  <ul className="glass-subtle rounded-2xl flex flex-col gap-3 mb-8 p-5">
                    {cat.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-porcelain/90">
                        <Check className="w-4 h-4 text-champagne shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button as="link" to="/book-now" variant="outline">
                    Request a quote
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-magnum">
          <Reveal variant="scale-blur">
            <div className="glass rounded-[2.5rem] px-6 sm:px-16 py-16 sm:py-20 text-center flex flex-col items-center gap-6">
              <h2 className="font-display text-4xl sm:text-5xl text-porcelain text-balance max-w-2xl">
                Mix and match rentals with your photo booth.
              </h2>
              <Button as="link" to="/book-now" size="lg">
                Book Now
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
