import { SectionHeading } from '@/components/ui/SectionHeading';
import { BookingForm } from '@/components/forms/BookingForm';

export function BookNow() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-magnum grid lg:grid-cols-[0.9fr_1.3fr] gap-16">
        <div>
          <SectionHeading
            eyebrow="Book Now"
            title="Tell us about your event."
            description="Fill out the form and we'll follow up with a custom quote. The more detail you share, the better we can tailor your experience."
          />
          <div className="mt-10 glass-subtle rounded-2xl p-6 hidden lg:block">
            <p className="eyebrow text-champagne mb-3">Prefer email?</p>
            <a href="mailto:magnumeventrentals@gmail.com" className="text-porcelain hover:text-champagne transition-colors">
              magnumeventrentals@gmail.com
            </a>
          </div>
        </div>
        <div className="glass-subtle rounded-3xl p-6 sm:p-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
