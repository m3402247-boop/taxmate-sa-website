import { LegalPage, LegalSection } from '@/components/legal-section';

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="23 August 2026">
      <LegalSection heading="What this covers">
        This policy covers both the TaxMate SA app and this website — what we collect on
        each, why, and how to have it deleted. TaxMate SA is built for South African
        freelancers and sole proprietors to track income and expenses and estimate
        provisional tax. It does not move money, and it is not a bank.
      </LegalSection>

      <LegalSection heading="This website">
        If you join the waitlist, we collect the email address you enter, only to email
        you when the app launches. If you use the contact form, we collect your name,
        email, the category you chose, and your message, only to reply to you. Neither
        form can be read back through this site or any public API — the only way either
        list is seen is through our own Supabase dashboard.
      </LegalSection>

      <LegalSection heading="The app">
        Once you're using the app itself, we collect your name and email, the details you
        enter to estimate your tax (age band, medical scheme membership, retirement
        contributions, tax already paid), and the income and expense entries you log —
        amounts, dates, payer names, and categories. If you upload a bank statement or a
        receipt photo, we collect that file and the transactions it contains.
      </LegalSection>

      <LegalSection heading="Bank statements and receipts">
        A statement PDF is sent once to an AI reader to extract its transactions, then
        deleted from our storage automatically as soon as that succeeds — we do not keep
        a copy of your statement once its transactions are safely saved. A receipt photo
        is kept until you delete it or your account. Currently that AI reader is Google
        Gemini; it may occasionally be Anthropic's Claude. Either only ever receives the
        file itself, only to extract transaction data, never anything else in your
        account.
      </LegalSection>

      <LegalSection heading="Where it's stored">
        Everything lives in Supabase, a hosted database and file storage provider. Data
        tied to your app account is protected by Row Level Security, a database-level
        rule that only lets your signed-in account read or write your own rows.
      </LegalSection>

      <LegalSection heading="What we don't do">
        We do not sell your data. We do not use it for advertising. Neither this website
        nor the app has analytics or advertising software built into it — nobody besides
        you and the processors named above ever sees your information.
      </LegalSection>

      <LegalSection heading="Your rights">
        In the app, you can correct anything by editing it, delete individual entries at
        any time, and delete your entire account from Settings → Delete account, which
        permanently removes your profile, every entry, every uploaded file, and your
        login — immediately, and without needing to contact us first. For the waitlist or
        a contact message, email us and we'll remove it.
      </LegalSection>

      <LegalSection heading="Children">
        TaxMate SA is for people old enough to run a business or freelance income in
        South Africa, and neither this website nor the app is directed at children.
      </LegalSection>

      <LegalSection heading="Questions">
        Use the <a href="/contact" className="text-accent-text underline">contact page</a>{' '}
        for anything in this policy, including a request to see or delete your data.
      </LegalSection>
    </LegalPage>
  );
}
