'use server';

import type { FormState } from '@/lib/form-state';
import { insertRow } from '@/lib/supabase';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function joinWaitlist(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();

  if (!isValidEmail(email)) {
    return { status: 'error', message: 'Enter a real email address.' };
  }

  const result = await insertRow('waitlist_signups', { email });

  if (!result.ok) return { status: 'error', message: result.message };
  if (result.duplicate) {
    return { status: 'success', message: "That email's already on the list." };
  }
  return { status: 'success', message: "You're on the list — we'll email you at launch." };
}

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const category = String(formData.get('category') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name) return { status: 'error', message: 'Enter your name.' };
  if (!isValidEmail(email)) return { status: 'error', message: 'Enter a real email address.' };
  if (!['query', 'recommendation', 'feedback'].includes(category)) {
    return { status: 'error', message: 'Choose what this is about.' };
  }
  if (!message) return { status: 'error', message: 'Enter a message.' };

  const result = await insertRow('contact_submissions', { name, email, category, message });

  if (!result.ok) return { status: 'error', message: result.message };
  return { status: 'success', message: "Sent — we'll get back to you by email." };
}
