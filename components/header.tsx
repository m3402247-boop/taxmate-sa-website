import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={32} height={32} priority />
          <span className="text-lg font-semibold tracking-tight text-text">TaxMate SA</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-text-secondary">
          <Link href="/#waitlist" className="hidden hover:text-text sm:inline">
            Waitlist
          </Link>
          <Link href="/contact" className="hover:text-text">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
