import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-lg px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-text">Contact us</h1>
      <p className="mt-2 text-text-secondary">
        A question, a recommendation, or feedback on the app — this goes straight to the
        person building it.
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
