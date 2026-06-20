import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Afflizen",
  description:
    "Contactez Afflizen pour une question, une suggestion, un partenariat ou une demande liée au site.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Contact
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Contacter Afflizen
        </h1>

        <p className="mb-8 text-lg leading-8 text-slate-700">
          Pour une question, une suggestion, une demande de partenariat ou une
          correction à signaler, vous pouvez contacter Afflizen.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="mb-3 text-2xl font-semibold">Adresse de contact</h2>

          <p className="text-slate-700">
            Email à ajouter prochainement.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Cette page sera complétée avec un formulaire ou une adresse email
            officielle.
          </p>
        </div>
      </section>
    </main>
  );
}