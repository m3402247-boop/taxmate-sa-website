import Image from 'next/image';

import { WaitlistForm } from '@/components/waitlist-form';

const FEATURES = [
  {
    title: 'Log income your way',
    body: "Detailed, payment by payment with who paid you — or Quick, one lump total for the week. Both count toward the same numbers.",
    tint: 'bg-income-bg text-income-text',
  },
  {
    title: 'Upload a bank statement',
    body: "Upload a month's statement and it reads every transaction, guesses what's business, and hands it to you to confirm with a swipe.",
    tint: 'bg-accent-bg text-accent-text',
  },
  {
    title: 'Know what SARS will want',
    body: "A running provisional tax estimate, updated every time you log something, with a reminder before both SARS deadlines.",
    tint: 'bg-expense-bg text-expense-text',
  },
  {
    title: 'Real journals, not just numbers',
    body: 'Monthly Cash Receipts and Cash Payments Journals, the South African bookkeeping standard, exportable as a PDF for your accountant.',
    tint: 'bg-card-alt text-text-secondary',
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 pt-20 pb-16 text-center">
        <Image src="/logo.png" alt="" width={72} height={72} priority />

        <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Track what you earn, what you spend,
          <br className="hidden sm:block" /> and what SARS will want.
        </h1>

        <p className="max-w-xl text-lg text-text-secondary">
          Freelance in SA? Know what SARS will want before they ask. TaxMate SA is built
          for South African freelancers and sole proprietors — not accountants.
        </p>

        <div id="waitlist" className="mt-4 w-full max-w-md scroll-mt-24">
          <WaitlistForm />
          <p className="mt-3 text-sm text-text-muted">
            Not on the App Store yet — join the waitlist and we&apos;ll email you at launch.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 py-16 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-2xl bg-bg p-6">
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${feature.tint}`}>
                {feature.title}
              </span>
              <p className="mt-3 text-text-secondary">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-text">Estimates, not tax advice</h2>
        <p className="mx-auto mt-3 max-w-xl text-text-secondary">
          Every figure TaxMate SA shows you is an estimate based on what you&apos;ve entered
          and the current SARS tax tables. Always check anything significant with SARS or
          a registered tax practitioner before you rely on it.
        </p>
      </section>
    </>
  );
}
