import { LegalPage, LegalSection } from '@/components/legal-section';

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="3 September 2026">
      <LegalSection heading="What this covers">
        This policy covers both the TaxMate SA app and this website — what we collect on
        each, why, and how to have it deleted. TaxMate SA is built for South African
        freelancers and sole proprietors to track income and expenses and estimate
        provisional tax. It does not move money, and it is not a bank. Under South
        Africa&apos;s Protection of Personal Information Act (POPIA), TaxMate SA is the
        &quot;responsible party&quot; for everything described below.
      </LegalSection>

      <LegalSection heading="Who's responsible for this information">
        Reach us, and our Information Officer, through the{' '}
        <a href="/contact" className="text-accent-text underline">contact page</a> — that&apos;s
        the fastest way to reach a real person about anything in this policy, including a
        request to see, correct, or delete your data, or a complaint about how it&apos;s
        handled.
      </LegalSection>

      <LegalSection heading="This website">
        If you join the waitlist, we collect the email address you enter, only to email
        you when the app launches. If you use the contact form, we collect your name,
        email, the category you chose, and your message, only to reply to you. Both are
        optional — you don&apos;t need to give us anything to browse this site. Neither
        form can be read back through this site or any public API — the only way either
        list is seen is through our own Supabase dashboard.
      </LegalSection>

      <LegalSection heading="The app">
        Once you're using the app itself, your name and email are required to create an
        account. The details you enter to estimate your tax — age band, medical scheme
        membership, retirement contributions, tax already paid — are optional; leave them
        blank and the app just won&apos;t be able to estimate your tax yet. Income and
        expense entries, and any statement or receipt you upload, are the whole point of
        the app, so those are required for it to do anything useful for you.
      </LegalSection>

      <LegalSection heading="Bank statements and receipts">
        Reading a statement or a receipt means sending the file to a third-party AI
        service. The app asks you before it does this the first time and names the
        service; you can turn it off afterwards in Settings → Statement &amp; receipt
        reading, and then statements and receipts are entered by hand. That service is
        Google Gemini, used on its paid tier, which means Google receives only the file
        itself, only to extract the transaction data, does not use it to train or improve
        its models, and is held to the same protection of your data set out in this
        policy. A statement PDF is deleted from our storage automatically as soon as its
        transactions are saved; a receipt photo is kept until you delete it or your
        account. If a statement shows other people&apos;s names — a client paying you, or
        anyone else on the account — that&apos;s unavoidable to read the statement, and
        you&apos;re responsible for having the right to share it (see our Terms).
      </LegalSection>

      <LegalSection heading="Where it's stored, and who else sees it">
        Everything lives in Supabase, a hosted database and file storage provider. Data
        tied to your app account is protected by Row Level Security, a database-level
        rule that only lets your signed-in account read or write your own rows. A waitlist
        or contact submission is relayed to our own inbox through Resend, an email
        delivery service. Some of these providers, including Supabase, our AI reader, and
        Resend, may be based or hold data outside South Africa. Sending your information
        to them is necessary to provide the service you asked for — reading your
        statement, storing your account, replying to your message — which is the basis we
        rely on under POPIA&apos;s rules for sending personal information abroad. We
        don&apos;t use any provider we don&apos;t need, and none of them may use your data
        for anything except providing that service to us.
      </LegalSection>

      <LegalSection heading="How long we keep it">
        A statement PDF is deleted automatically as soon as its transactions are safely
        extracted. A receipt photo, and everything else you&apos;ve logged in the app, is
        kept until you delete it yourself or delete your account — which removes
        everything immediately, with no recovery period and no backup kept on our behalf.
        A waitlist or contact submission is kept until you ask us to remove it.
      </LegalSection>

      <LegalSection heading="What we don't do">
        We do not sell your data. We do not use it for advertising. Neither this website
        nor the app has analytics or advertising software built into it — nobody besides
        you and the processors named above ever sees your information.
      </LegalSection>

      <LegalSection heading="Marketing emails">
        The only email we send from your waitlist signup is the one-time launch
        announcement you signed up for — nothing else, no ongoing newsletter. Every email
        we send tells you how to ask us to stop.
      </LegalSection>

      <LegalSection heading="Keeping it secure">
        In the app, Row Level Security stops any account from seeing another account's
        data, even if there were a bug elsewhere in the app. Receipts and statements sit
        in private storage — never publicly accessible — and the app only ever gets a
        temporary, expiring link to show you one. Everything moves over an encrypted
        connection.
      </LegalSection>

      <LegalSection heading="Your rights">
        Under POPIA, you can ask us to confirm what we hold about you, correct it, or
        delete it. In the app, you can correct anything by editing it, delete individual
        entries at any time, and delete your entire account from Settings → Delete
        account, which permanently removes your profile, every entry, every uploaded
        file, and your login — immediately, and without needing to contact us first. For
        the waitlist or a contact message, email us and we&apos;ll remove it.
      </LegalSection>

      <LegalSection heading="If something goes wrong">
        If we ever discover that your information has been accessed by someone who
        shouldn&apos;t have it, we&apos;ll tell you and South Africa&apos;s Information
        Regulator as soon as we reasonably can, with enough detail for you to protect
        yourself.
      </LegalSection>

      <LegalSection heading="Children">
        TaxMate SA is for people 18 or older who are old enough to run a business or
        freelance income in South Africa. Neither this website nor the app is directed at
        children, and we don&apos;t knowingly collect information from anyone under 18.
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        If this policy changes in a way that matters, we&apos;ll make that clear the next
        time you open the app or visit this site, not just update the date above.
      </LegalSection>

      <LegalSection heading="Questions and complaints">
        Use the <a href="/contact" className="text-accent-text underline">contact page</a>{' '}
        for anything in this policy, including a request to see, correct, or delete your
        data. If you feel we haven&apos;t handled it properly, you can also complain to
        South Africa&apos;s Information Regulator at{' '}
        <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-accent-text underline">
          POPIAComplaints@inforegulator.org.za
        </a>{' '}
        or{' '}
        <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="text-accent-text underline">
          inforegulator.org.za
        </a>
        .
      </LegalSection>
    </LegalPage>
  );
}
