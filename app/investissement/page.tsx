import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Investissement : Trade Republic, eToro, Finary et DEGIRO comparés",
  description:
    "Comparez les plateformes d’investissement suivies par Afflizen : Trade Republic, eToro, Finary et DEGIRO. Actions, ETF, patrimoine, frais, avantages, limites et points à vérifier.",
  alternates: {
    canonical: "https://afflizen.com/investissement",
  },
  openGraph: {
    title: "Investissement : plateformes suivies par Afflizen",
    description:
      "Découvrez les fiches investissement Afflizen : applications d’investissement, courtiers, suivi de patrimoine, actions, ETF, frais, avantages et limites.",
    url: "https://afflizen.com/investissement",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "website",
  },
};

const platforms = [
  {
    name: "Trade Republic",
    slug: "/investissement/trade-republic",
    description:
      "Application d’investissement pour accéder simplement aux actions, ETF, plans d’investissement et autres produits financiers.",
    bonus: "Actions & ETF",
  },
  {
    name: "eToro",
    slug: "/investissement/etoro",
    description:
      "Plateforme d’investissement connue pour les actions, ETF, crypto, copy trading et parcours cashback potentiel via iGraal selon conditions.",
    bonus: "Copy trading",
  },
  {
    name: "Finary",
    slug: "/investissement/finary",
    description:
      "Application de suivi de patrimoine pour centraliser ses comptes, investissements, cryptos, budget, frais et vision globale de ses finances.",
    bonus: "Suivi patrimoine",
  },
  {
    name: "DEGIRO",
    slug: "/investissement/degiro",
    description:
      "Courtier en ligne orienté actions, ETF et marchés financiers, à comparer pour ses frais, ses produits disponibles et son profil investisseur.",
    bonus: "Courtier en ligne",
  },
];

export default function InvestissementPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">
            Investissement
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Applications d’investissement, courtiers, actions, ETF et suivi de
            patrimoine
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Comparez les plateformes d’investissement suivies par Afflizen :
            actions, ETF, copy trading, suivi de patrimoine, frais éventuels,
            conditions, bonus possibles, limites et avis pratique avant
            inscription.
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
            Les plateformes d’investissement comportent des risques : perte en
            capital, frais, fiscalité, volatilité des marchés, produits mal
            compris, conditions variables et restrictions selon le pays. Vérifiez
            toujours les informations officielles avant toute inscription,
            décision d’investissement ou dépôt d’argent.
          </p>
        </div>
      </section>
    </main>
  );
}