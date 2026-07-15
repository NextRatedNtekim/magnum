import emailjs from '@emailjs/browser';
import type { BookingFormValues } from '@/types';


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export const isEmailConfigured = Boolean(
  SERVICE_ID && TEMPLATE_ID && AUTOREPLY_TEMPLATE_ID && PUBLIC_KEY
);

export class EmailConfigError extends Error {}

export async function sendBookingRequest(values: BookingFormValues): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !AUTOREPLY_TEMPLATE_ID || !PUBLIC_KEY) {
    throw new EmailConfigError(
      'Email service is not configured yet. Add your EmailJS keys to .env.local — see README.md.'
    );
  }

  // Template params — field names must match the {{variables}} used in
  // both EmailJS templates.
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

  // Send the business notification first — if this fails, the customer
  // never gets a false "we received it" auto-reply.
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });

  // Auto-reply to the customer. Wrapped so a failure here doesn't make
  // the whole submission look like it failed — the booking was already
  // captured by the notification email above.
  try {
    await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });
  } catch (err) {
    console.error('Auto-reply email failed to send:', err);
  }
}