import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="mkt-nav" id="nav">
      <div className="mkt-wrap mkt-nav__inner">
        <Link href="/" className="mkt-nav__brand">
          <Image src="/logo.png" alt="" width={30} height={30} className="mkt-nav__logo" priority />
          <span>
            TaxMate <em>SA</em>
          </span>
        </Link>

        <nav className="flex items-center gap-5">
          <Link href="/contact" className="hidden text-sm font-medium text-text-secondary hover:text-text sm:inline">
            Contact
          </Link>
          <Link href="/#waitlist" className="btn btn--primary btn--sm">
            Join the waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
