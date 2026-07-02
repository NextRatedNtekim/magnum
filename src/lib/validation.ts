import type { BookingFormValues } from '@/types';

export type FormErrors = Partial<Record<keyof BookingFormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts common North American formats: 4165551234, 416-555-1234, (416) 555-1234, +1 416 555 1234
const PHONE_RE = /^[+]?[\d\s().-]{10,17}$/;

export function validateBookingForm(values: BookingFormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = 'First name is required.';
  if (!values.lastName.trim()) errors.lastName = 'Last name is required.';

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!PHONE_RE.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }

  if (!values.eventDate) {
    errors.eventDate = 'Event date is required.';
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = new Date(values.eventDate);
    if (chosen < today) {
      errors.eventDate = 'Event date can\u2019t be in the past.';
    }
  }

  if (!values.eventTime) errors.eventTime = 'Event time is required.';
  if (!values.eventType) errors.eventType = 'Select an event type.';
  if (!values.eventLocation.trim()) errors.eventLocation = 'Event location is required.';
  if (!values.hearAboutUs) errors.hearAboutUs = 'Let us know how you heard about us.';

  if (values.maxBudget.trim() && Number(values.maxBudget) < 0) {
    errors.maxBudget = 'Budget can\u2019t be negative.';
  }

  if (!values.consent) {
    errors.consent = 'Please agree to be contacted to submit your request.';
  }

  return errors;
}

export const EMPTY_BOOKING_FORM: BookingFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  eventDate: '',
  eventTime: '',
  eventType: '',
  eventLocation: '',
  hearAboutUs: '',
  setupTime: '',
  startTime: '',
  endTime: '',
  maxBudget: '',
  details: '',
  consent: false,
  companyWebsite: '',
};
