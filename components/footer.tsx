import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} TaxMate SA</p>

        <nav className="flex gap-5 font-medium">
          <Link href="/privacy" className="hover:text-text-secondary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-text-secondary">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-text-secondary">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
