import type { NavItem, FaqItem, RentalCategory, PortfolioItem, EventType } from '@/types';

export const SITE = {
  name: 'Magnum Photobooth',
  fullName: 'Magnum Photobooth Events & Rentals',
  tagline: 'Bold, unforgettable moments — captured.',
  city: 'Toronto',
  email: 'magnumeventrentals@gmail.com',
  founders: 'Theodora & Anthony',
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
  { id: 'p1', caption: 'Wedding reception, Toronto', category: 'Wedding' },
  { id: 'p2', caption: 'Corporate holiday party', category: 'Corporate' },
  { id: 'p3', caption: 'Sweet 16 celebration', category: 'Birthday' },
  { id: 'p4', caption: 'Engagement party backdrop', category: 'Engagement' },
  { id: 'p5', caption: 'Bridal shower setup', category: 'Bridal Shower' },
  { id: 'p6', caption: 'Graduation open house', category: 'Graduation' },
];

export const RENTAL_CATEGORIES: RentalCategory[] = [
  {
    id: 'backdrops',
    name: 'Backdrops',
    description: 'Sequin, drape, and textured backdrops that set the tone for every photo taken in front of them.',
    features: ['Custom colour options', 'Sequin & drape styles', 'Delivery & setup included'],
  },
  {
    id: 'flower-walls',
    name: 'Flower Walls',
    description: 'Lush, photo-ready floral walls that instantly elevate any step-and-repeat or lounge area.',
    features: ['Premium faux florals', 'Multiple sizes available', 'Ideal for weddings & showers'],
  },
  {
    id: 'chairs',
    name: 'Chair Rentals',
    description: 'Elegant seating that complements your event\u2019s style, from ceremony rows to reception lounges.',
    features: ['Chiavari & modern styles', 'Bulk quantities available', 'Setup & teardown included'],
  },
  {
    id: 'tables',
    name: 'Table Rentals',
    description: 'Reception, cocktail, and lounge tables sized and styled to fit your floor plan.',
    features: ['Round, rectangular & cocktail', 'Linens available on request', 'Delivery included'],
  },
];

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
