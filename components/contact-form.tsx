'use client';

import { useActionState } from 'react';

import { submitContact } from '@/app/actions';
import { INITIAL_FORM_STATE } from '@/lib/form-state';

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, INITIAL_FORM_STATE);

  if (state.status === 'success') {
    return (
      <p className="rounded-xl bg-income-bg px-5 py-4 text-center font-medium text-income-text">
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <Field label="Name">
        <input
          type="text"
          name="name"
          required
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-text focus:border-accent focus:outline-none"
        />
      </Field>

      <Field label="Email">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.co.za"
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
      </Field>

      <Field label="What's this about?">
        <select
          name="category"
          required
          defaultValue=""
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-text focus:border-accent focus:outline-none"
        >
          <option value="" disabled>
            Choose one
          </option>
          <option value="query">A question</option>
          <option value="recommendation">A recommendation</option>
          <option value="feedback">Feedback</option>
        </select>
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-text focus:border-accent focus:outline-none"
        />
      </Field>

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? 'Sending…' : 'Send message'}
      </button>

      {state.status === 'error' ? <p className="text-sm text-danger-text">{state.message}</p> : null}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-text-secondary">{label}</span>
      {children}
    </label>
  );
}
