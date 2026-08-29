import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({
  title: "Investissement : Trade Republic, TradingView, Invvest, BullionVault, Monefit, VeraCash, GOLD AVENUE, Robinhood, Interactive Brokers, Saxo, eToro et DEGIRO comparés",
  description: "Comparez les plateformes d’investissement suivies par Afflizen : Trade Republic, TradingView, Invvest, BullionVault, Monefit SmartSaver, VeraCash, GOLD AVENUE, Robinhood, Interactive Brokers, Saxo, eToro, Finary et DEGIRO. Actions, ETF, crypto, prêts, métaux précieux, patrimoine, graphiques, frais, avantages, limites et points à vérifier.",
  path: "/investissement",
  type: "website",
});

const platforms = [
  {
    name: "Trade Republic",
    slug: "/investissement/trade-republic",
    description:
      "Application d’investissement pour accéder simplement aux actions, ETF, plans d’investissement et autres produits financiers.",
    bonus: "Actions & ETF",
  },
  {
    name: "TradingView",
    slug: "/investissement/tradingview",
    description:
      "Plateforme de graphiques, alertes, listes de surveillance et analyse des marchés financiers, à utiliser comme outil et non comme conseil financier.",
    bonus: "Graphiques & analyse",
  },
  {
    name: "Simply Wall St",
    slug: "/investissement/simply-wall-st",
    description:
      "Analysez des actions et suivez votre portefeuille avec des visualisations simples et des données fondamentales.",
    bonus: "Essai Premium 14 jours via l’offre partenaire",
  },
  {
    name: "Invvest",
    slug: "/investissement/invvest",
    description:
      "Outil en français pour suivre son patrimoine, regrouper ses portefeuilles et analyser actions, ETF, crypto, immobilier et revenus passifs.",
    bonus: "Suivi patrimoine",
  },
  {
    name: "Monefit SmartSaver",
    slug: "/investissement/monefit",
    description:
      "Plateforme d’investissement alternative liée à un portefeuille de prêts européens, avec rendements attendus, capital à risque et absence de garantie bancaire.",
    bonus: "Prêts européens",
  },
  {
    name: "Lendermarket",
    slug: "/investissement/lendermarket",
    description:
      "Investissez dans des prêts P2P européens avec gestion manuelle ou automatisée.",
    bonus: "Bonus actuel de 1,5 % sous conditions",
  },
  {
    name: "7harvests",
    slug: "/investissement/7harvests",
    description:
      "Investissez dans différents types de prêts P2P via une plateforme suisse accessible notamment en Belgique et en France.",
    bonus: "Jusqu’à 21 € de bonus sous conditions",
  },
  {
    name: "InRento",
    slug: "/investissement/inrento",
    description:
      "Investissez dès 500 € dans des projets immobiliers européens via une plateforme de financement participatif.",
    bonus: "Jusqu’à 50 € sous conditions jusqu’à fin septembre 2026",
  },
  {
    name: "BullionVault",
    slug: "/investissement/bullionvault",
    description:
      "Plateforme en français pour acheter, vendre et conserver de l’or, de l’argent, du platine et du palladium avec frais et risques à vérifier.",
    bonus: "Métaux précieux",
  },
  {
    name: "VeraCash",
    slug: "/investissement/veracash",
    description:
      "Solution française pour détenir de l’or et d’autres métaux précieux via un compte et une carte, avec risques, frais et conditions à vérifier.",
    bonus: "Métaux précieux",
  },
  {
    name: "GOLD AVENUE",
    slug: "/investissement/gold-avenue",
    description:
      "Plateforme suisse en français pour acheter, stocker et vendre de l’or, de l’argent et d’autres métaux précieux physiques.",
    bonus: "Or & métaux précieux",
  },
  {
    name: "Interactive Brokers",
    slug: "/investissement/interactive-brokers",
    description:
      "Courtier international complet pour investir sur actions, ETF, options, futures, devises, obligations et fonds avec prudence.",
    bonus: "Courtier international",
  },
  {
    name: "Saxo",
    slug: "/investissement/saxo",
    description:
      "Courtier en ligne international pour investir et trader sur actions, ETF, obligations, options, futures, forex et autres marchés selon conditions.",
    bonus: "Courtier international",
  },
  {
    name: "Robinhood",
    slug: "/investissement/robinhood",
    description:
      "Application d’investissement connue à l’international, avec actions tokenisées, crypto et produits avancés selon disponibilité.",
    bonus: "Application d’investissement",
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
