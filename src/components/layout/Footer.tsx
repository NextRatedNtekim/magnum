import { Mail } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { NAV_ITEMS, BOOK_NOW_ITEM, SITE, RENTAL_CATEGORIES } from '@/data/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-ink-line">
      <div className="container-magnum py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <p className="font-display text-xl text-porcelain mb-3">
            Magnum <span className="text-champagne italic">Photobooth</span>
          </p>
          <p className="text-sm text-mist leading-relaxed max-w-xs">
            Premium photo booth experiences and event rentals in {SITE.city}, by {SITE.founders}.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-champagne mb-4">Explore</h3>
          <ul className="flex flex-col gap-3">
            {[...NAV_ITEMS, BOOK_NOW_ITEM].map((item) => (
              <li key={item.path}>
                <a href={item.path} className="text-sm text-porcelain/85 hover:text-champagne transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-champagne mb-4">Rentals</h3>
          <ul className="flex flex-col gap-3">
            {RENTAL_CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <a href="/rentals" className="text-sm text-porcelain/85 hover:text-champagne transition-colors">
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-champagne mb-4">Contact</h3>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 text-sm text-porcelain/85 hover:text-champagne transition-colors mb-3"
          >
            <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
            {SITE.email}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-porcelain/85 hover:text-champagne transition-colors"
          >
            <InstagramIcon className="w-4 h-4 shrink-0" />
            @magnumphotobooth
          </a>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-magnum py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mist">
          <p>&copy; {year} {SITE.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-champagne transition-colors">
              Privacy Policy
            </a>
            {/* <p>Toronto, Ontario</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
