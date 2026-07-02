import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Reveal } from '@/components/ui/Reveal';
import { SITE } from '@/data/content';

export function About() {
  return (
    <>
      <section className="py-20 sm:py-28 border-b border-ink-line">
        <div className="container-magnum">
          <SectionHeading
            eyebrow="About Us"
            title="A better photo booth experience, built from a real gap we saw."
            align="center"
            className="mb-4"
          />
        </div>
      </section>

      <section className="py-20 sm:py-28 border-b border-ink-line">
        <div className="container-magnum grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <Reveal>
            <div className="glass rounded-2xl overflow-hidden w-full max-w-md">
              <PlaceholderImage label={`${SITE.founders}, founders`} aspect="4/5" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-6 text-mist leading-relaxed text-base sm:text-lg">
            <p>
              At {SITE.name}, we&rsquo;re elevating the photo booth experience to a whole new level. With
              high-resolution DSLR imaging, modern premium booth designs, and dedicated on-site attendants,
              we deliver a seamless blend of sophistication and fun &mdash; capturing bold, unforgettable
              moments at every event.
            </p>
            <p>
              We&rsquo;re {SITE.founders}, the founders of {SITE.fullName}. We started this company after
              noticing a clear gap in the photo booths around us. After attending countless events with
              low-quality photo booths, disengaged attendants, and outdated, cheesy setups, we knew there
              had to be a better way.
            </p>
            <p>
              Our vision was simple: to create a premium photo booth experience that feels luxurious,
              professional, and truly unforgettable. We achieve this by using professional DSLR cameras for
              crisp, high-quality images, offering sleek and modern booth designs, and ensuring every event
              is supported by friendly, attentive booth butlers who help create a seamless guest experience.
            </p>
            <p>
              Beyond photo booths, we also offer elegant chair and table rentals to elevate your event
              setup with comfort and style, as well as stunning flower wall backdrops that add a touch of
              sophistication and create the perfect photo-ready atmosphere.
            </p>
            <p>
              From weddings and corporate events to birthdays and graduation celebrations, we take pride in
              helping you create moments your guests will remember long after the event ends. At{' '}
              {SITE.fullName}, it&rsquo;s all about stunning photos, exceptional service, and unforgettable
              memories.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-magnum">
          <div className="glass rounded-[2.5rem] px-6 sm:px-16 py-16 sm:py-20 text-center flex flex-col items-center gap-6">
            <h2 className="font-display text-4xl sm:text-5xl text-porcelain text-balance max-w-2xl">
              Ready to bring Magnum to your event?
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
