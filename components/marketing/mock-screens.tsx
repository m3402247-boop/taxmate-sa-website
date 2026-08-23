/**
 * Decorative phone-screen mockups used in the hero and feature rows.
 *
 * These are illustrations, not real screenshots — hand-built from the same
 * design tokens as the app (see globals.css's --income/--expense/--accent
 * etc.) so they read as the same product without needing to keep an actual
 * screenshot in sync with the app's UI as it changes.
 */

export function HomeMockup() {
  return (
    <div className="mock">
      <div className="mock__header">
        <div className="mock__identity">
          <img src="/logo.png" alt="" className="mock__logo" />
          <div>
            <p className="mock__greeting">Good morning</p>
            <p className="mock__name">Thandi</p>
          </div>
        </div>
        <div className="mock__avatar">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="3.4" stroke="#5F6672" strokeWidth="1.6" />
            <path
              d="M5 20c1.2-4 4-6 7-6s5.8 2 7 6"
              stroke="#5F6672"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="mock__hero">
        <p className="mock__hero-label">Estimated tax owed</p>
        <p className="mock__hero-value">R12 480</p>
        <div className="mock__hero-foot">
          <span>First period · 18 days left</span>
          <span className="mock__pill">Details ›</span>
        </div>
      </div>

      <div className="mock__stats">
        <div className="mock__stat mock__stat--income">
          <p>Income</p>
          <strong>R84 200</strong>
        </div>
        <div className="mock__stat mock__stat--expense">
          <p>Expenses</p>
          <strong>R19 650</strong>
        </div>
      </div>

      <p className="mock__section-title">Recent</p>
      <div className="mock__list">
        <MockRow icon="↓" direction="income" title="Kagiso Media" meta="14 Aug" amount="+R12 500.00" />
        <MockRow
          icon="↑"
          direction="expense"
          title="Adobe Creative Cloud"
          meta="Software · 10 Aug"
          amount="-R1 099.00"
        />
        <MockRow icon="↓" direction="income" title="Brightwater Studio" meta="9 Aug" amount="+R8 400.00" />
      </div>
    </div>
  );
}

export function IncomeMockup() {
  return (
    <div className="mock">
      <div className="mock__page-head">
        <div>
          <h4>Income</h4>
          <p>2027 tax year to date</p>
        </div>
        <strong className="mock__page-total mock__page-total--income">R84 200</strong>
      </div>
      <div className="mock__actions">
        <span className="mock__action mock__action--primary">+ Log a payment</span>
        <span className="mock__action mock__action--secondary">⚡ Quick total</span>
      </div>
      <p className="mock__section-title">August 2026</p>
      <div className="mock__list">
        <MockRow icon="↓" direction="income" title="Kagiso Media" meta="Retainer · 11 Aug" amount="+R12 500.00" />
        <MockRow icon="↓" direction="income" title="Brightwater Studio" meta="14 Aug" amount="+R8 400.00" />
        <MockRow icon="⚡" direction="income" title="Weekly total" meta="18 Aug" amount="+R6 200.00" />
      </div>
    </div>
  );
}

export function ExpensesMockup() {
  return (
    <div className="mock">
      <div className="mock__page-head">
        <div>
          <h4>Expenses</h4>
          <p>2027 tax year to date</p>
        </div>
        <strong className="mock__page-total mock__page-total--expense">R19 650</strong>
      </div>
      <div className="mock__banner">
        <span className="mock__banner-icon">☁︎</span>
        <span>
          <strong>Upload a bank statement</strong>
          <small>We read it and sort the expenses for you</small>
        </span>
      </div>
      <p className="mock__section-title">Where it goes</p>
      <div className="mock__bars">
        <div className="mock__bar-row">
          <span>Marketing</span>
          <div className="mock__bar">
            <i style={{ width: '82%' }} />
          </div>
          <strong>R14 220</strong>
        </div>
        <div className="mock__bar-row">
          <span>Software</span>
          <div className="mock__bar">
            <i style={{ width: '32%' }} />
          </div>
          <strong>R3 430</strong>
        </div>
        <div className="mock__bar-row">
          <span>Fuel</span>
          <div className="mock__bar">
            <i style={{ width: '14%' }} />
          </div>
          <strong>R2 000</strong>
        </div>
      </div>
    </div>
  );
}

export function TaxMockup() {
  return (
    <div className="mock">
      <div className="mock__tax-hero">
        <p>Estimated first payment</p>
        <strong>R12 480</strong>
        <span>Due 31 Aug 2026 · 18 days left</span>
      </div>
      <p className="mock__section-title">How we got there</p>
      <div className="mock__lines">
        <div className="mock__line">
          <span>Income logged so far</span>
          <strong>R84 200.00</strong>
        </div>
        <div className="mock__line">
          <span>Business expenses</span>
          <strong>− R19 650.00</strong>
        </div>
        <div className="mock__line mock__line--strong">
          <span>Profit so far</span>
          <strong>R64 550.00</strong>
        </div>
        <div className="mock__line">
          <span>Tax on that amount</span>
          <strong>R21 130.00</strong>
        </div>
        <div className="mock__line">
          <span>Less rebate</span>
          <strong>− R17 820.00</strong>
        </div>
        <div className="mock__line mock__line--strong">
          <span>Effective rate</span>
          <strong>5.9%</strong>
        </div>
      </div>
    </div>
  );
}

export function ReportsMockup() {
  return (
    <div className="mock">
      <div className="mock__segment">
        <span className="mock__segment-item mock__segment-item--active">Summary</span>
        <span className="mock__segment-item">Table</span>
      </div>
      <div className="mock__stats">
        <div className="mock__stat mock__stat--income">
          <p>Received</p>
          <strong>R84 200</strong>
        </div>
        <div className="mock__stat mock__stat--expense">
          <p>Paid out</p>
          <strong>R19 650</strong>
        </div>
      </div>
      <div className="mock__journal">
        <div className="mock__journal-head">
          <div>
            <strong>Cash Receipts Journal</strong>
            <small>CRJ · August 2026</small>
          </div>
          <span className="mock__row-icon mock__row-icon--income">⇩</span>
        </div>
        <div className="mock__journal-line">
          <span>Kagiso Media</span>
          <strong>R12 500.00</strong>
        </div>
        <div className="mock__journal-line">
          <span>Brightwater Studio</span>
          <strong>R8 400.00</strong>
        </div>
        <div className="mock__journal-line mock__journal-line--total">
          <span>Total receipts</span>
          <strong>R84 200.00</strong>
        </div>
      </div>
    </div>
  );
}

function MockRow({
  icon,
  direction,
  title,
  meta,
  amount,
}: {
  icon: string;
  direction: 'income' | 'expense';
  title: string;
  meta: string;
  amount: string;
}) {
  return (
    <div className="mock__row">
      <span className={`mock__row-icon mock__row-icon--${direction}`}>{icon}</span>
      <span className="mock__row-text">
        <strong>{title}</strong>
        <small>{meta}</small>
      </span>
      <strong className={`mock__row-amount mock__row-amount--${direction}`}>{amount}</strong>
    </div>
  );
}
