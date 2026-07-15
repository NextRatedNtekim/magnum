import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import type { BookingFormValues } from '@/types';
import { EVENT_TYPES, HEAR_ABOUT_OPTIONS } from '@/data/content';
import { validateBookingForm, EMPTY_BOOKING_FORM, type FormErrors } from '@/lib/validation';
import { sendBookingRequest } from '@/lib/emailjs';
import { Field, inputClasses } from './FormField';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function BookingForm() {
  const [values, setValues] = useState<BookingFormValues>(EMPTY_BOOKING_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [submitError, setSubmitError] = useState<string>('');
  const liveRegionRef = useRef<HTMLDivElement>(null);

  function update<K extends keyof BookingFormValues>(key: K, value: BookingFormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot: if this hidden field has a value, silently drop the submission.
    if (values.companyWebsite) {
      setStatus('success');
      return;
    }

    const nextErrors = validateBookingForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstErrorField = document.getElementById(Object.keys(nextErrors)[0]);
      firstErrorField?.focus();
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    try {
      await sendBookingRequest(values);
      setStatus('success');
      setValues(EMPTY_BOOKING_FORM);
    } catch (err) {
      setStatus('error');
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong sending your request. Please try again.'
      );
    }
  }

  if (status === 'success') {
    return (
      <div
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        className="flex flex-col items-center text-center gap-4 py-16 px-6 bg-ink-raised border border-ink-line rounded-2xl"
      >
        <CheckCircle2 className="w-12 h-12 text-champagne" aria-hidden="true" />
        <h3 className="font-display text-2xl text-porcelain">Request sent!</h3>
        <p className="text-mist max-w-md">
          Thank you for reaching out. We will review your event details and get back to you with a quote
          shortly.
        </p>
        <Button type="button" variant="outline" onClick={() => setStatus('idle')} className="mt-2">
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6" aria-describedby={submitError ? 'form-error' : undefined}>
      {/* Honeypot — hidden from real users, visible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsite}
          onChange={(e) => update('companyWebsite', e.target.value)}
        />
      </div>

      <fieldset className="grid sm:grid-cols-2 gap-6">
        <legend className="sr-only">Contact information</legend>
        <Field id="firstName" label="First name" required error={errors.firstName}>
          <input
            id="firstName"
            className={inputClasses}
            value={values.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            autoComplete="given-name"
          />
        </Field>
        <Field id="lastName" label="Last name" required error={errors.lastName}>
          <input
            id="lastName"
            className={inputClasses}
            value={values.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            autoComplete="family-name"
          />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            type="email"
            className={inputClasses}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            autoComplete="email"
          />
        </Field>
        <Field id="phone" label="Phone number" required error={errors.phone}>
          <input
            id="phone"
            type="tel"
            className={inputClasses}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            autoComplete="tel"
            placeholder="(416) 555-1234"
          />
        </Field>
      </fieldset>

      <fieldset className="grid sm:grid-cols-2 gap-6">
        <legend className="sr-only">Event schedule</legend>
        <Field id="eventDate" label="Event date" required error={errors.eventDate}>
          <input
            id="eventDate"
            type="date"
            className={inputClasses}
            value={values.eventDate}
            onChange={(e) => update('eventDate', e.target.value)}
            aria-invalid={Boolean(errors.eventDate)}
            aria-describedby={errors.eventDate ? 'eventDate-error' : undefined}
          />
        </Field>
        <Field id="eventTime" label="Event time" required error={errors.eventTime}>
          <input
            id="eventTime"
            type="time"
            className={inputClasses}
            value={values.eventTime}
            onChange={(e) => update('eventTime', e.target.value)}
            aria-invalid={Boolean(errors.eventTime)}
            aria-describedby={errors.eventTime ? 'eventTime-error' : undefined}
          />
        </Field>
      </fieldset>

      <fieldset className="grid sm:grid-cols-2 gap-6">
        <legend className="sr-only">Event details</legend>
        <Field id="eventType" label="Event type" required error={errors.eventType}>
          <select
            id="eventType"
            className={inputClasses}
            value={values.eventType}
            onChange={(e) => update('eventType', e.target.value as BookingFormValues['eventType'])}
            aria-invalid={Boolean(errors.eventType)}
            aria-describedby={errors.eventType ? 'eventType-error' : undefined}
          >
            <option value="">Select an event type</option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field id="eventLocation" label="Event location" required error={errors.eventLocation}>
          <input
            id="eventLocation"
            className={inputClasses}
            value={values.eventLocation}
            onChange={(e) => update('eventLocation', e.target.value)}
            aria-invalid={Boolean(errors.eventLocation)}
            aria-describedby={errors.eventLocation ? 'eventLocation-error' : undefined}
            placeholder="Venue name or address"
          />
        </Field>
      </fieldset>

      <Field id="hearAboutUs" label="How did you hear about us?" required error={errors.hearAboutUs}>
        <select
          id="hearAboutUs"
          className={inputClasses}
          value={values.hearAboutUs}
          onChange={(e) => update('hearAboutUs', e.target.value)}
          aria-invalid={Boolean(errors.hearAboutUs)}
          aria-describedby={errors.hearAboutUs ? 'hearAboutUs-error' : undefined}
        >
          <option value="">Select an option</option>
          {HEAR_ABOUT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <div className="pt-2 border-t border-ink-line">
        <p className="eyebrow text-champagne mb-5 pt-6">Tell us more about your event</p>
        <div className="grid sm:grid-cols-3 gap-6">
          <Field id="setupTime" label="Setup / delivery time" hint="Optional">
            <input
              id="setupTime"
              type="time"
              className={inputClasses}
              value={values.setupTime}
              onChange={(e) => update('setupTime', e.target.value)}
            />
          </Field>
          <Field id="startTime" label="Event start time" hint="Optional">
            <input
              id="startTime"
              type="time"
              className={inputClasses}
              value={values.startTime}
              onChange={(e) => update('startTime', e.target.value)}
            />
          </Field>
          <Field id="endTime" label="Event end time" hint="Optional">
            <input
              id="endTime"
              type="time"
              className={inputClasses}
              value={values.endTime}
              onChange={(e) => update('endTime', e.target.value)}
            />
          </Field>
        </div>
      </div>

      <Field id="maxBudget" label="Maximum budget" hint="Optional — helps us tailor your quote" error={errors.maxBudget}>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mist" aria-hidden="true">
            $
          </span>
          <input
            id="maxBudget"
            type="number"
            min="0"
            inputMode="numeric"
            className={`${inputClasses} pl-8`}
            value={values.maxBudget}
            onChange={(e) => update('maxBudget', e.target.value)}
            aria-invalid={Boolean(errors.maxBudget)}
            aria-describedby={errors.maxBudget ? 'maxBudget-error' : undefined}
            placeholder="1500"
          />
        </div>
      </Field>

      <Field id="details" label="Anything else we should know?" hint="Vision, theme, guest count — anything helps">
        <textarea
          id="details"
          rows={4}
          className={inputClasses}
          value={values.details}
          onChange={(e) => update('details', e.target.value)}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-porcelain/85 cursor-pointer">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 w-4 h-4 accent-champagne shrink-0"
            checked={values.consent}
            onChange={(e) => update('consent', e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span>
            I agree to be contacted about my quote. See our{' '}
            <a href="/privacy-policy" className="text-champagne underline underline-offset-2">
              Privacy Policy
            </a>{' '}
            for details.
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className="mt-1.5 text-xs text-bordeaux-light font-medium">
            {errors.consent}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div
          id="form-error"
          role="alert"
          className="flex items-start gap-3 bg-bordeaux/15 border border-bordeaux-light/40 rounded-lg px-4 py-3 text-sm text-porcelain"
        >
          <AlertCircle className="w-5 h-5 text-bordeaux-light shrink-0 mt-0.5" aria-hidden="true" />
          <span>{submitError}</span>
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === 'submitting'} className="self-start mt-2">
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Sending request&hellip;
          </>
        ) : (
          'Submit booking request'
        )}
      </Button>
    </form>
  );
}
