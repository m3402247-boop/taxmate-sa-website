/**
 * Writes a row to the shared Supabase project — the same backend the app
 * uses — without pulling in the full @supabase/supabase-js SDK for what is
 * just two simple inserts (waitlist signups, contact messages).
 *
 * Only ever called from Server Actions, so the anon key never reaches the
 * browser bundle. It's safe either way (Row Level Security only allows
 * inserts, never reads — see supabase/migrations/0007_waitlist.sql and
 * 0008_contact_submissions.sql in the finance-app repo), but there's no
 * reason to ship it client-side when it doesn't need to be.
 */
export async function insertRow(
  table: 'waitlist_signups' | 'contact_submissions',
  row: Record<string, string>,
): Promise<{ ok: true; duplicate?: boolean } | { ok: false; message: string }> {
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return { ok: false, message: 'Server is not configured yet. Please try again later.' };
  }

  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(row),
  });

  if (response.ok) return { ok: true };

  // Postgres reports a duplicate email as a unique-constraint violation.
  // Not really a failure from the person's point of view — they're already
  // getting what they wanted — so this is reported as a duplicate, not an
  // error, and the caller decides how to present that.
  if (response.status === 409) {
    return { ok: true, duplicate: true };
  }

  return { ok: false, message: 'Something went wrong. Please try again.' };
}
