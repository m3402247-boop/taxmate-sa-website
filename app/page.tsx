import Image from 'next/image';

import { WaitlistForm } from '@/components/waitlist-form';
import {
  ExpensesMockup,
  HomeMockup,
  IncomeMockup,
  ReportsMockup,
  TaxMockup,
} from '@/components/marketing/mock-screens';

const PAIN_POINTS = [
  {
    icon: '📅',
    title: 'Deadlines sneak up',
    body: "31 August and end of February arrive fast when nothing's been tracked in between.",
  },
  {
    icon: '🧾',
    title: 'Statements are tedious',
    body: "Sorting a month of bank transactions into business and personal by hand eats an evening you don't have.",
  },
  {
    icon: '🏢',
    title: 'Built for someone else',
    body: 'Xero and QuickBooks are for VAT-registered companies with payroll — not one person invoicing clients.',
  },
];

const GRID_FEATURES = [
  { icon: '🤖', tint: 'a', title: 'AI statement reading', body: 'Upload a PDF, get every transaction pulled out and pre-sorted.' },
  { icon: '👆', tint: 'b', title: 'Swipe to sort', body: 'Business or personal, decided in seconds per transaction.' },
  { icon: '📸', tint: 'c', title: 'Receipt photos', body: 'Snap a slip, attach it to the expense, keep the paper trail.' },
  { icon: '📄', tint: 'a', title: 'PDF exports', body: 'Branded CRJ and CPJ journals, ready to send or file.' },
  { icon: '⏰', tint: 'b', title: 'Deadline reminders', body: 'A nudge before each SARS date, and to keep your books current.' },
  { icon: '🔒', tint: 'c', title: 'Private by design', body: 'Your books are reachable by nobody but you — enforced by the database itself.' },
];

export default function Home() {
  return (
    <div className="mkt">
      {/* ============================== HERO ============================== */}
      <section className="hero" id="top">
        <div className="hero__glow" aria-hidden="true" />
        <div className="mkt-wrap hero__inner">
          <div className="hero__copy" data-reveal>
            <p className="eyebrow">🇿🇦&nbsp; Built for South African freelancers</p>
            <h1>
              Know what <span className="hl hl--blue">SARS</span> will want.
              <br />
              Before <span className="hl hl--squiggle">they ask</span>.
            </h1>
            <p className="hero__lede">
              TaxMate SA tracks what you earn and what you spend, then keeps a live estimate
              of your provisional tax — so deadline day is never an ambush.
            </p>

            <WaitlistForm variant="hero" id="hero-email" />
          </div>

          <div className="hero__art" data-reveal data-reveal-delay="1">
            <div className="screen-wrap screen-wrap--float">
              <div className="screen" data-tilt>
                <div className="screen__inner">
                  <HomeMockup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== PAIN ============================== */}
      <section className="pain">
        <div className="mkt-wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow eyebrow--dark">The problem</p>
            <h2>Provisional tax has a way of creeping up in the dark.</h2>
            <p className="section-lede">
              Two SARS deadlines a year, and no monthly payslip telling you where you stand
              in between. By the time most freelancers work it out, it&apos;s either too late
              to plan for, or too rushed to get right.
            </p>
          </div>

          <div className="pain__grid">
            {PAIN_POINTS.map((point, i) => (
              <div className="pain__card" data-reveal data-reveal-delay={i > 0 ? i : undefined} key={point.title}>
                <div className="pain__icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== FEATURE ROWS ============================== */}
      <section className="features">
        <div className="mkt-wrap">
          <FeatureRow
            eyebrow="Income"
            title="Log income your way"
            body="One payment from one client — or a single lump sum for a busy week when you don't have time to itemise. Both count towards the same running total."
            points={[
              'Saved client list, so logging a payment is a few taps',
              'Detailed mode for per-payment records, Quick mode for weekly totals',
              'Every entry feeds straight into your tax estimate',
            ]}
          >
            <IncomeMockup />
          </FeatureRow>

          <FeatureRow
            eyebrow="Expenses"
            title="Sorted automatically, not by hand"
            body="Upload a bank statement and every transaction on it gets found, categorised, and totalled — you just confirm the guesses. Cash spending gets its own quick entry, since it never hits a statement."
            points={[
              'Bank statement reading, powered by AI',
              'Swipe right to keep as business, left to mark personal',
              'Photograph a receipt and attach it to the expense',
            ]}
            reverse
          >
            <ExpensesMockup />
          </FeatureRow>

          <FeatureRow
            eyebrow="Provisional tax"
            title="See exactly what you'll owe"
            body="A full breakdown — brackets, rebates, medical credits, retirement deductions — updating live as you log. No mystery number, no spreadsheet, and a warning if your estimate looks too low against your last assessment."
            points={[
              'Both SARS filing periods, with a live countdown',
              'Tax tables pulled from a live source, so a Budget change never goes stale',
              'Always labelled an estimate — never presented as advice',
            ]}
          >
            <TaxMockup />
          </FeatureRow>

          <FeatureRow
            eyebrow="Reports"
            title="Journals your accountant will actually want"
            body="A proper South African-style Cash Receipts and Cash Payments Journal, built from what you've already logged — exported as a clean, branded PDF you can hand over or file."
            points={[
              'CRJ and CPJ, grouped by month',
              'Export receipts only, payments only, or both',
              'Your logo, your name, ready for a bookkeeper',
            ]}
            reverse
          >
            <ReportsMockup />
          </FeatureRow>
        </div>
      </section>

      {/* ============================== FEATURE GRID ============================== */}
      <section className="grid-features">
        <div className="mkt-wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow eyebrow--dark">Everything else</p>
            <h2>Small details that add up to a lot less admin.</h2>
          </div>

          <div className="grid-features__grid">
            {GRID_FEATURES.map((item, i) => (
              <div
                className="grid-features__item"
                data-reveal
                data-reveal-delay={(i % 3) > 0 ? i % 3 : undefined}
                key={item.title}
              >
                <div className={`grid-features__icon grid-features__icon--${item.tint}`}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== WHO IT'S FOR ============================== */}
      <section className="audience">
        <div className="mkt-wrap audience__inner" data-reveal>
          <p className="eyebrow eyebrow--dark">Built for one person, one set of books</p>
          <h2>Freelancers, consultants, and sole proprietors.</h2>
          <p className="audience__lede">
            If you invoice clients directly and don&apos;t have an accountant doing this for
            you yet, TaxMate SA is built around exactly that. It&apos;s deliberately not built
            for VAT-registered or multi-company businesses — that&apos;s a different product,
            with different rules.
          </p>
        </div>
      </section>

      {/* ============================== WAITLIST / FINAL CTA ============================== */}
      <section className="cta" id="waitlist">
        <div className="cta__glow" aria-hidden="true" />
        <div className="mkt-wrap cta__inner" data-reveal>
          <Image src="/logo.png" alt="" width={56} height={56} className="cta__logo" />
          <h2>Be first through the door.</h2>
          <p>
            We&apos;ll email you the moment TaxMate SA is ready to download. No spam — just
            one email, at launch.
          </p>

          <WaitlistForm variant="cta" id="cta-email" />

          <p className="cta__disclaimer">
            TaxMate SA gives you an estimate to help you plan ahead. Always confirm the final
            number with SARS or a registered tax practitioner before filing.
          </p>
        </div>
      </section>
    </div>
  );
}

function FeatureRow({
  eyebrow,
  title,
  body,
  points,
  reverse,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`feature-row${reverse ? ' feature-row--reverse' : ''}`}>
      <div className="feature-row__copy" data-reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <ul className="feature-row__points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="feature-row__art" data-reveal data-reveal-delay="1">
        <div className="screen-wrap">
          <div className="screen">
            <div className="screen__inner">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
