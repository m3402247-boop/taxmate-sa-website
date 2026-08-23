'use client';

import { useActionState } from 'react';

import { joinWaitlist } from '@/app/actions';
import { INITIAL_FORM_STATE } from '@/lib/form-state';

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, INITIAL_FORM_STATE);

  if (state.status === 'success') {
    return (
      <p className="rounded-xl bg-income-bg px-5 py-4 text-center font-medium text-income-text">
        {state.message}
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <form action={formAction} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.co.za"
          className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {pending ? 'Joining…' : 'Join the waitlist'}
        </button>
      </form>

      {state.status === 'error' ? (
        <p className="text-sm text-danger-text">{state.message}</p>
      ) : null}
    </div>
  );
}
