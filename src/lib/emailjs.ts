import emailjs from '@emailjs/browser';
import type { BookingFormValues } from '@/types';

// EmailJS is configured entirely through environment variables so no
// secrets live in source. Create a .env.local (see .env.example) with:
//   VITE_EMAILJS_SERVICE_ID
//   VITE_EMAILJS_TEMPLATE_ID
//   VITE_EMAILJS_PUBLIC_KEY
// Sign up free at https://www.emailjs.com — the public key is safe to
// expose in client code by design (it's not a secret).
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export class EmailConfigError extends Error {}

export async function sendBookingRequest(values: BookingFormValues): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new EmailConfigError(
      'Email service is not configured yet. Add your EmailJS keys to .env.local — see README.md.'
    );
  }

  // Template params — field names should match the variables used in
  // your EmailJS template (e.g. {{first_name}}, {{email}}, etc).
  const templateParams = {
    first_name: values.firstName,
    last_name: values.lastName,
    email: values.email,
    phone: values.phone,
    event_date: values.eventDate,
    event_time: values.eventTime,
    event_type: values.eventType,
    event_location: values.eventLocation,
    hear_about_us: values.hearAboutUs,
    setup_time: values.setupTime || 'Not specified',
    start_time: values.startTime || 'Not specified',
    end_time: values.endTime || 'Not specified',
    max_budget: values.maxBudget ? `$${values.maxBudget}` : 'Not specified',
    details: values.details || 'No additional details provided.',
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });
}
