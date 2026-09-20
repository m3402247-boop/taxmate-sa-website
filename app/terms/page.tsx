import { LegalPage, LegalSection } from '@/components/legal-section';

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="20 September 2026">
      <LegalSection heading="Using this site and the app">
        TaxMate SA is for tracking your own income and expenses and estimating
        provisional tax. You must be at least 18, or the age of majority where you live,
        to join the waitlist, use the contact form, or use the app itself — it assumes
        you're old enough to be running a freelance income or small business.
      </LegalSection>

      <LegalSection heading="Estimates, not tax advice">
        Every figure TaxMate SA shows you — provisional tax owed, deductions, rebates —
        is an estimate based on what you've entered and the current SARS tax tables. It
        is not tax advice, and the amount you eventually file with SARS may differ.
        Always check anything significant with SARS or a registered tax practitioner
        before you rely on it.
      </LegalSection>

      <LegalSection heading="Your data, your responsibility">
        You're responsible for the accuracy of what you enter or upload — TaxMate SA
        extracts and calculates from it, but doesn't verify it against SARS or your
        bank. Keep your login private; anyone who can sign in as you can see and edit
        everything in your account.
      </LegalSection>

      <LegalSection heading="Subscription and billing">
        The app is free for your first 30 days. After that, TaxMate SA Pro is an
        auto-renewing monthly subscription; the price is shown in the app before you
        subscribe. Payment is taken by Apple from your Apple ID when you confirm the
        purchase, and the subscription renews every month until you cancel. To avoid
        the next charge, cancel at least 24 hours before the end of the current period:
        open iPhone Settings, tap your name, then Subscriptions. Refunds are handled by
        Apple, at reportaproblem.apple.com. Deleting your TaxMate SA account does not
        cancel a subscription, so cancel it in your Apple settings first.
      </LegalSection>

      <LegalSection heading="Account deletion">
        You can delete your account at any time from Settings → Delete account. This
        permanently removes everything you've logged and cannot be undone — there is no
        recovery period and no backup kept on your behalf once it's done.
      </LegalSection>

      <LegalSection heading="No warranty">
        TaxMate SA, and this website, are provided as-is, without any guarantee that
        they are free of errors or that the app's estimates are accurate for your
        situation. To the extent the law allows, we are not liable for any loss arising
        from relying on figures the app produces.
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        If these terms change in a way that matters, we'll make that clear the next time
        you open the app, not just update the date above.
      </LegalSection>

      <LegalSection heading="Governing law">
        These terms are governed by the laws of South Africa.
      </LegalSection>

      <LegalSection heading="Questions">
        Use the <a href="/contact" className="text-accent-text underline">contact page</a>.
      </LegalSection>
    </LegalPage>
  );
}
