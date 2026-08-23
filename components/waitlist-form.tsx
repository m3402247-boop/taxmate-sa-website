'use client';

import { useActionState } from 'react';

import { joinWaitlist } from '@/app/actions';
import { INITIAL_FORM_STATE } from '@/lib/form-state';

type Variant = 'hero' | 'cta';

const CLASSES: Record<Variant, { form: string; status: string; button: string }> = {
  hero: { form: 'hero__form', status: 'hero__note', button: 'btn btn--primary' },
  cta: { form: 'cta__form', status: 'cta__status', button: 'btn btn--primary btn--lg' },
};

export function WaitlistForm({ variant, id }: { variant: Variant; id?: string }) {
  const [state, formAction, pending] = useActionState(joinWaitlist, INITIAL_FORM_STATE);
  const classes = CLASSES[variant];
  const statusClass =
    state.status === 'success' ? 'is-success' : state.status === 'error' ? 'is-error' : '';

  return (
    <>
      <form action={formAction} className={classes.form}>
        <label className="sr-only" htmlFor={id}>
          Email address
        </label>
        <input
          id={id}
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.co.za"
          required
          disabled={state.status === 'success'}
        />
        <button className={classes.button} type="submit" disabled={pending || state.status === 'success'}>
          {pending ? 'Joining…' : 'Join the waitlist'}
        </button>
      </form>
      <p className={`${classes.status} ${statusClass}`}>
        {state.status === 'idle'
          ? variant === 'hero'
            ? 'Free while we build. One email at launch — nothing else.'
            : 'Free while we build.'
          : state.message}
      </p>
    </>
  );
}
