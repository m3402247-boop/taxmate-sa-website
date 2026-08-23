export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-text">{title}</h1>
      <p className="mt-2 text-sm text-text-muted">Last updated {updated}</p>
      <div className="mt-10 flex flex-col gap-8">{children}</div>
    </div>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-text">{heading}</h2>
      <p className="mt-2 leading-relaxed text-text-secondary">{children}</p>
    </section>
  );
}
