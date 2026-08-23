import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="mkt-wrap footer__inner">
        <Link href="/" className="mkt-nav__brand">
          <Image src="/logo.png" alt="" width={30} height={30} className="mkt-nav__logo" />
          <span>
            TaxMate <em>SA</em>
          </span>
        </Link>
        <p className="footer__tagline">Track what you earn, what you spend, and what SARS will want.</p>

        <nav className="flex gap-5 text-sm font-medium text-text-secondary">
          <Link href="/privacy" className="hover:text-text">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-text">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-text">
            Contact
          </Link>
        </nav>

        <p className="footer__legal">© {new Date().getFullYear()} TaxMate SA. Built in South Africa. Not affiliated with SARS.</p>
      </div>
    </footer>
  );
}
