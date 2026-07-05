import type { NavItem, FaqItem, RentalCategory, PortfolioItem, EventType } from '@/types';

export const SITE = {
  name: 'Magnum Photobooth',
  fullName: 'Magnum Photobooth Events & Rentals',
  tagline: 'Bold, unforgettable moments — captured.',
  city: 'Toronto',
  email: 'magnumeventrentals@gmail.com',
  founders: 'Theodora & Anthony',
  heroImage: 'https://images.unsplash.com/photo-1712314947761-a8d718bd8c32',
  heroImageAlt: 'Elegant banquet hall reception with chandeliers, set for a wedding',
  aboutImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
  aboutImageAlt: 'Guests laughing and celebrating together at an event',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Selfie Booth', path: '/selfie-booth' },
  { label: 'Rentals', path: '/rentals' },
  { label: 'FAQs', path: '/faqs' },
];

export const BOOK_NOW_ITEM: NavItem = { label: 'Book Now', path: '/book-now' };

export const EVENT_TYPES: EventType[] = [
  'Birthday',
  'Wedding',
  'Corporate Event',
  'Bridal Shower',
  'Baby Shower',
  'Engagement Party',
  'Graduation',
  'Other',
];

export const HEAR_ABOUT_OPTIONS = [
  'Instagram',
  'TikTok',
  'Google Search',
  'Referral from a friend',
  'Vendor / Venue recommendation',
  'Wedding Fair / Event',
  'Other',
];

export const BOOTH_FEATURES: { title: string; description: string }[] = [
  {
    title: 'Unlimited sessions',
    description: 'Take as many photos as you want for the entire duration of your booking — no caps, no clock-watching.',
  },
  {
    title: 'DSLR camera',
    description: 'Every shot is captured on a professional DSLR, not a webcam, for crisp, gallery-quality photos.',
  },
  {
    title: '4x6 or 2x6 prints',
    description: 'High-quality instant prints customized to match your event theme and colour palette.',
  },
  {
    title: 'Professional printer',
    description: 'On-the-spot prints so every guest walks away with a keepsake in hand.',
  },
  {
    title: 'On-site attendant',
    description: 'A dedicated booth butler keeps the line moving and the experience seamless from start to finish.',
  },
  {
    title: 'Black & white option',
    description: 'Switch to timeless monochrome prints for a classic, editorial look.',
  },
  {
    title: 'Online gallery',
    description: 'Every photo from your event, delivered to a private online gallery to revisit and share.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    caption: 'Wedding reception, Toronto',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1714972383570-44ddc9738355',
    imageAlt: 'Couple dancing at a wedding reception dance floor',
  },
  {
    id: 'p2',
    caption: 'Corporate holiday party',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1758520144658-c87be518b87e',
    imageAlt: 'Coworkers in party hats dancing at an office celebration',
  },
  {
    id: 'p3',
    caption: 'Sweet 16 celebration',
    category: 'Birthday',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d',
    imageAlt: 'Happy birthday sign at a birthday celebration',
  },
  {
    id: 'p4',
    caption: 'Engagement party backdrop',
    category: 'Engagement',
    image: 'https://images.unsplash.com/photo-1781958893458-ff5e3763751d',
    imageAlt: 'Couple embracing while dancing at an engagement celebration',
  },
  {
    id: 'p5',
    caption: 'Bridal shower setup',
    category: 'Bridal Shower',
    image: 'https://images.unsplash.com/photo-1561940329-7382e6704231',
    imageAlt: 'Assorted pastries and desserts styled on a table for a bridal shower',
  },
  {
    id: 'p6',
    caption: 'Graduation open house',
    category: 'Graduation',
    image: 'https://images.unsplash.com/photo-1757367529666-2521d7002ae4',
    imageAlt: 'Graduates in caps and gowns celebrating with confetti',
  },
];

export const RENTAL_CATEGORIES: RentalCategory[] = [
  {
    id: 'backdrops',
    name: 'Backdrops',
    description: 'Sequin, drape, and textured backdrops that set the tone for every photo taken in front of them.',
    features: ['Custom colour options', 'Sequin & drape styles', 'Delivery & setup included'],
    image: 'https://images.unsplash.com/photo-1598993947191-58e49166849e',
    imageAlt: 'Purple and gold floral draped backdrop curtain',
  },
  {
    id: 'flower-walls',
    name: 'Flower Walls',
    description: 'Lush, photo-ready floral walls that instantly elevate any step-and-repeat or lounge area.',
    features: ['Premium faux florals', 'Multiple sizes available', 'Ideal for weddings & showers'],
    image: 'https://images.unsplash.com/photo-1636737187961-95526fcf39bc',
    imageAlt: 'Two chairs set in front of a pink flower wall backdrop',
  },
  {
    id: 'chairs',
    name: 'Chair Rentals',
    description: 'Elegant seating that complements your event\u2019s style, from ceremony rows to reception lounges.',
    features: ['Chiavari & modern styles', 'Bulk quantities available', 'Setup & teardown included'],
    image: 'https://images.unsplash.com/photo-1601482441062-b9f13131f33a',
    imageAlt: 'Rows of event chairs set up in a reception room',
  },
  {
    id: 'tables',
    name: 'Table Rentals',
    description: 'Reception, cocktail, and lounge tables sized and styled to fit your floor plan.',
    features: ['Round, rectangular & cocktail', 'Linens available on request', 'Delivery included'],
    image: 'https://images.unsplash.com/photo-1698934641149-93431f3bd4f7',
    imageAlt: 'Banquet hall set with round tables, chairs, and chandeliers',
  },
];

export const DIFFERENTIATORS: { title: string; description: string }[] = [
  {
    title: 'Professional DSLR imaging',
    description: 'Every shot is captured on a real DSLR camera, not a tablet or webcam — the difference shows in every print.',
  },
  {
    title: 'Sleek, modern booth design',
    description: 'No cheesy backdrops or dated setups. Our booths are built to look as premium as the events they\u2019re part of.',
  },
  {
    title: 'Dedicated on-site attendants',
    description: 'A friendly, attentive booth butler runs the experience end to end, so guests never have to figure it out themselves.',
  },
  {
    title: 'A seamless guest experience',
    description: 'From setup to the last print, every detail is handled so you can focus on hosting, not troubleshooting.',
  },
];

export const BOOTH_COMPARISON = {
  basic: {
    label: 'Basic photo booths',
    points: [
      'Low-resolution tablet or webcam photos',
      'Dated, cluttered booth designs',
      'No attendant, guests self-manage',
      'Grainy prints guests rarely keep',
    ],
  },
  magnum: {
    label: 'Magnum Photobooth',
    points: [
      'High-resolution professional DSLR imaging',
      'Sleek, modern premium booth design',
      'Dedicated on-site booth attendant',
      'Crisp 4x6 / 2x6 prints guests actually keep',
    ],
  },
};
// starter placeholders written to match Magnum's tone. Swap in the
// real answers in src/data/content.ts before launch.
// FAQ content was marked "to be provided" in the brief — these are
// starter placeholders written to match Magnum's tone. Swap in the
// real answers in src/data/content.ts before launch.
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking as soon as your date is confirmed, especially for weekends and peak wedding season. Popular dates fill quickly, so early booking guarantees availability.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'We\u2019re based in Toronto and service the Greater Toronto Area. For events outside the GTA, reach out and we\u2019ll let you know about travel availability and fees.',
  },
  {
    question: 'How much space does the booth need?',
    answer:
      'Our setup typically needs about a 10x10 ft area with access to a standard power outlet. Let us know your venue layout and we\u2019ll confirm it works.',
  },
  {
    question: 'Is a deposit required to book?',
    answer:
      'Yes, a deposit secures your date once your quote is confirmed. The remaining balance is due ahead of your event — full details are shared after you submit a booking request.',
  },
  {
    question: 'Can I customize the photo prints?',
    answer:
      'Absolutely. We customize print layouts, colours, and text to match your event theme, including names, dates, and logos for corporate events.',
  },
  {
    question: 'Do you offer both colour and black & white prints?',
    answer:
      'Yes — guests can choose between vibrant colour prints or timeless black & white at the booth.',
  },
];
