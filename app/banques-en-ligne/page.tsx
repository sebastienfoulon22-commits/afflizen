import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banques en ligne : comparatif Revolut, N26 et comptes mobiles",
  description:
    "Comparez les banques en ligne et applications financières suivies par Afflizen : Revolut, N26, cartes, comptes mobiles, frais, avantages et points à vérifier.",
  alternates: {
    canonical: "https://afflizen.com/banques-en-ligne",
  },
  openGraph: {
    title: "Banques en ligne : comparatif Revolut, N26 et comptes mobiles",
    description:
      "Découvrez les banques en ligne et applications financières suivies par Afflizen : avantages, limites, cartes, comptes et conditions.",
    url: "https://afflizen.com/banques-en-ligne",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "website",
  },
};

const platforms = [
  {
    name: "Revolut",
    slug: "/banques-en-ligne/revolut",
    description:
      "Application financière moderne avec carte, compte, paiements, devises et services mobiles.",
    bonus: "Compte mobile",
  },
  {
    name: "N26",
    slug: "/banques-en-ligne/n26",
    description:
      "Banque mobile avec compte, carte, application simple et offres adaptées au quotidien.",
    bonus: "Banque mobile",
  },
];

export default function BanquesEnLignePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">
            Banques en ligne
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Banques en ligne, cartes et comptes mobiles
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Comparez les banques en ligne et applications financières suivies
            par Afflizen : avantages, limites, offres éventuelles, frais,
            conditions, cartes bancaires et avis pratique avant inscription.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-emerald-600">
                {platform.bonus}
              </p>

              <h2 className="mt-3 text-2xl font-bold">{platform.name}</h2>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {platform.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-slate-950">
                Voir la fiche →
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Les frais, conditions, cartes disponibles, plafonds, primes,
            fonctionnalités et pays éligibles peuvent évoluer. Vérifiez toujours
            les informations directement sur les sites officiels avant
            inscription.
          </p>
        </div>
      </section>
    </main>
  );
}