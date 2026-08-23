# TaxMate SA — marketing website

The public site: what the app does, the waitlist, and the Privacy Policy /
Terms of Service pages the App Store submission points to. Not the web app
version of TaxMate SA — that's a separate, later build, and this site
deliberately has no login system.

## Stack

Next.js (App Router) + Tailwind, deployed to Vercel. Both forms (waitlist
signup, contact) write to the same Supabase project the mobile app uses —
`waitlist_signups` and `contact_submissions`, two tables that only accept
inserts (see `supabase/migrations/0007_waitlist.sql` and
`0008_contact_submissions.sql` in the finance-app repo). Nothing on this site
can read them back — the only way to see submissions is the Supabase
dashboard's Table Editor.

## Running locally

```bash
npm install
npm run dev
```

Needs `.env.local` — copy `.env.example` and fill in `SUPABASE_URL` and
`SUPABASE_ANON_KEY` from the Supabase dashboard (Project settings → API).
Same project as the app.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, connect the repo — the empty `taxmate-sa` project already in
   the account is the natural home for it.
3. Add the two environment variables (`SUPABASE_URL`, `SUPABASE_ANON_KEY`)
   in Vercel's Project Settings → Environment Variables.
4. Deploy. No build configuration needed beyond that — it's a standard
   Next.js app.

Once it's live, put its `/privacy` URL into App Store Connect's Privacy
Policy field.

## Checking submissions

Supabase dashboard → Table Editor → `waitlist_signups` or
`contact_submissions`.
