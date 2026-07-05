export type EventType =
  | 'Birthday'
  | 'Wedding'
  | 'Corporate Event'
  | 'Bridal Shower'
  | 'Baby Shower'
  | 'Engagement Party'
  | 'Graduation'
  | 'Other';

export interface NavItem {
  label: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RentalCategory {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export interface PortfolioItem {
  id: string;
  caption: string;
  category: string;
  image: string;
  imageAlt: string;
}

export interface BookingFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventTime: string;
  eventType: EventType | '';
  eventLocation: string;
  hearAboutUs: string;
  setupTime: string;
  startTime: string;
  endTime: string;
  maxBudget: string;
  details: string;
  consent: boolean;
  /** Honeypot field — must stay empty. Invisible to real visitors. */
  companyWebsite: string;
}
