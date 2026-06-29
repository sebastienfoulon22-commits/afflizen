import type { Metadata } from "next";
import Link from "next/link";

const DEGIRO_OFFICIAL_LINK = "https://www.degiro.fr/";

export const metadata: Metadata = {
  title: "DEGIRO avis 2026 : courtier en ligne, actions, ETF, frais et limites",
  description:
    "Notre avis sur DEGIRO en 2026 : courtier en ligne pour actions, ETF et marchés financiers. Avantages, limites, frais à vérifier, fiscalité belge et points de vigilance.",
  alternates: {
    canonical: "https://afflizen.com/investissement/degiro",
  },
  openGraph: {
    title: "DEGIRO avis 2026 : courtier en ligne, actions, ETF, frais et limites",
    description:
      "Notre avis sur DEGIRO en 2026 : courtier en ligne pour actions, ETF et marchés financiers. Avantages, limites, frais à vérifier, fiscalité belge et points de vigilance.",
    url: "https://afflizen.com/investissement/degiro",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "DEGIRO est-il une banque en ligne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DEGIRO est surtout un courtier en ligne. Il sert principalement à investir en actions, ETF et autres produits financiers, pas à gérer un compte bancaire quotidien comme une banque en ligne classique.",
      },
    },
    {
      "@type": "Question",
      name: "DEGIRO est-il adapté aux débutants ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DEGIRO peut convenir à un débutant motivé qui veut investir en actions ou ETF, mais il faut comprendre les frais, les risques de marché, les ordres de bourse et la fiscalité avant d’investir.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on investir en ETF avec DEGIRO ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, DEGIRO permet d’investir dans des ETF selon les marchés et produits disponibles. Certains ETF peuvent faire partie d’une sélection à frais réduits, mais les conditions doivent toujours être vérifiées sur le site officiel.",
      },
    },
    {
      "@type": "Question",
      name: "Afflizen a-t-il un lien de parrainage DEGIRO ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Afflizen ne dispose pas encore d’un lien de parrainage DEGIRO. La page utilise donc un lien officiel temporaire, à remplacer si un lien d’affiliation ou de parrainage devient disponible.",
      },
    },
  ],
};

const strengths = [
  "Courtier en ligne connu en Europe.",
  "Accès aux actions, ETF et marchés financiers selon disponibilité.",
  "Intéressant pour construire un portefeuille long terme.",
  "Peut être comparé à Trade Republic, eToro ou Interactive Brokers.",
  "Approche davantage orientée investissement que banque quotidienne.",
];

const limits = [
  "Pas une banque en ligne classique pour le quotidien.",
  "Frais, places boursières et conditions à vérifier avant chaque opération.",
  "Fiscalité belge à comprendre avant d’investir régulièrement.",
  "Investir en actions ou ETF comporte un risque de perte en capital.",
  "Pas encore de lien d’affiliation Afflizen disponible pour DEGIRO.",
];

const useCases = [
  {
    title: "Investir en actions",
    text: "DEGIRO peut servir à acheter des actions cotées sur différents marchés selon les produits accessibles au compte.",
  },
  {
    title: "Construire un portefeuille ETF",
    text: "La plateforme peut être utilisée pour investir progressivement dans des ETF, à condition de comprendre les frais, la fiscalité et le risque de marché.",
  },
  {
    title: "Comparer les courtiers",
    text: "DEGIRO est intéressant à comparer avec Trade Republic, eToro ou Interactive Brokers selon les frais, les marchés disponibles et la simplicité recherchée.",
  },
  {
    title: "Investir sur le long terme",
    text: "DEGIRO peut convenir à une approche long terme, mais il faut rester discipliné et éviter d’acheter des produits que l’on ne comprend pas.",
  },
];

const relatedLinks = [
  {
    href: "/investissement/trade-republic",
    title: "Trade Republic",
    text: "Une application simple pour actions, ETF et plans d’investissement.",
  },
  {
    href: "/investissement/etoro",
    title: "eToro",
    text: "Une plateforme avec actions, ETF, crypto et copy trading.",
  },
  {
    href: "/investissement/finary",
    title: "Finary",
    text: "Un outil pour suivre son patrimoine, ses investissements et ses cryptos.",
  },
  {
    href: "/crypto/waltio",
    title: "Waltio",
    text: "Un assistant utile pour organiser le suivi fiscal de ses opérations crypto.",
  },
];

export default function DegiroPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
              Investissement · Courtier en ligne · Actions · ETF
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              DEGIRO avis 2026 : un courtier en ligne pour investir en actions
              et ETF
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              DEGIRO est un courtier en ligne connu pour permettre d’investir en
              actions, ETF et autres produits financiers. Sur Afflizen, nous le
              classons dans la catégorie investissement, car il s’adresse surtout
              aux personnes qui veulent construire un portefeuille sur les
              marchés financiers.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={DEGIRO_OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir le site officiel DEGIRO
              </a>

              <Link
                href="/investissement"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Voir la catégorie investissement
              </Link>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
              Afflizen ne dispose pas encore d’un lien de parrainage DEGIRO.
              Cette page utilise donc un lien officiel temporaire. Si un lien
              d’affiliation ou de parrainage devient disponible plus tard, il
              pourra remplacer cette constante sans changer toute la page.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Résumé Afflizen
            </p>

            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-950">Profil idéal</p>
                <p>
                  Investisseur qui veut acheter des actions ou ETF via un
                  courtier en ligne.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Point fort</p>
                <p>
                  Accès aux marchés financiers et comparaison intéressante avec
                  d’autres courtiers.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Point faible</p>
                <p>
                  Demande de comprendre les frais, la fiscalité et les risques de
                  marché.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Affiliation</p>
                <p>
                  Aucun lien Afflizen disponible pour le moment : lien officiel
                  temporaire.
                </p>
              </div>
            </div>

            <a
              href={DEGIRO_OFFICIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Accéder à DEGIRO
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Catégorie</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Courtier en ligne
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              DEGIRO est davantage un courtier d’investissement qu’une banque en
              ligne classique.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Produits</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Actions et ETF
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              La plateforme est surtout utilisée pour investir sur les marchés :
              actions, ETF et autres produits selon disponibilité.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Attention</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Risque de perte
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Les marchés peuvent baisser. Investir implique toujours un risque
              de perte en capital.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Avis Afflizen
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Notre avis sur DEGIRO
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-700">
              DEGIRO peut être intéressant pour un investisseur qui veut accéder
              à un courtier en ligne plutôt complet, avec une approche davantage
              orientée marchés financiers que banque quotidienne. C’est une
              plateforme à regarder si tu veux investir en actions, ETF ou
              construire progressivement un portefeuille long terme.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-700">
              Son intérêt principal sur Afflizen est la comparaison. DEGIRO ne
              se positionne pas comme Trade Republic, eToro ou Finary. Trade
              Republic mise beaucoup sur la simplicité, eToro sur l’interface
              sociale et le copy trading, Finary sur le suivi de patrimoine,
              tandis que DEGIRO est plus proche d’un courtier classique en
              ligne.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-700">
              Le bon réflexe est donc de ne pas choisir DEGIRO uniquement parce
              que le nom est connu ou parce que les frais peuvent sembler bas.
              Il faut regarder les frais réels, les places boursières utilisées,
              les produits disponibles, les frais de change éventuels, la
              fiscalité belge et la simplicité d’utilisation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">
                Les avantages
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">Les limites</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {limits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Usages
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              À quoi peut servir DEGIRO ?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
              DEGIRO peut servir à investir sur les marchés financiers depuis un
              courtier en ligne. L’objectif n’est pas de gérer un compte courant,
              mais d’acheter, conserver ou vendre des instruments financiers en
              fonction de sa stratégie.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">
              Parcours recommandé
            </h3>

            <ol className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
              <li>1. Comparer DEGIRO avec d’autres courtiers.</li>
              <li>2. Lire la grille tarifaire officielle.</li>
              <li>3. Vérifier les marchés et produits disponibles.</li>
              <li>4. Comprendre la fiscalité applicable en Belgique.</li>
              <li>5. Commencer avec une stratégie simple.</li>
              <li>6. Ne pas investir dans des produits mal compris.</li>
            </ol>

            <a
              href={DEGIRO_OFFICIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Voir DEGIRO
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Points de vigilance
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Ce qu’il faut vérifier avant d’utiliser DEGIRO
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Avant d’ouvrir un compte ou de passer un ordre, il faut lire la
              grille tarifaire officielle. Les frais peuvent dépendre du produit,
              de la place boursière, de la devise, du type d’ordre et des
              conditions en vigueur.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Frais réels</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Les frais ne se limitent pas toujours à la commission affichée :
                frais de change, frais de place ou conditions spécifiques peuvent
                s’ajouter.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Fiscalité belge</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Un investisseur belge doit comprendre ses obligations fiscales,
                notamment selon les produits détenus et les opérations réalisées.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Risque de marché</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Actions, ETF et autres instruments financiers peuvent perdre de
                la valeur. Le capital investi n’est pas garanti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Comparaison
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            DEGIRO ou Trade Republic ?
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-700">
            DEGIRO et Trade Republic peuvent tous les deux intéresser un
            investisseur particulier, mais ils ne répondent pas exactement au
            même besoin. Trade Republic est souvent perçu comme plus simple et
            plus orienté application mobile, tandis que DEGIRO se rapproche
            davantage d’un courtier en ligne classique avec une logique de
            marchés financiers.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-700">
            Le meilleur choix dépendra du profil : montant investi, fréquence des
            ordres, produits recherchés, fiscalité, préférence mobile ou desktop,
            frais réels et niveau d’expérience.
          </p>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Résumé simple
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Pour un débutant qui veut une interface très simple, Trade
              Republic peut être plus facile à prendre en main. Pour quelqu’un
              qui veut comparer davantage de marchés, de produits ou utiliser un
              courtier plus classique, DEGIRO peut être pertinent. Dans les deux
              cas, il faut vérifier les frais et comprendre les risques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Verdict
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  DEGIRO complète bien la catégorie investissement
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  DEGIRO a sa place sur Afflizen parce que le site compare déjà
                  Trade Republic, eToro et Finary. Là où Finary sert à suivre
                  son patrimoine, et où eToro se distingue par son aspect social,
                  DEGIRO représente plutôt le courtier en ligne classique pour
                  investir sur les marchés.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  La recommandation reste prudente : DEGIRO peut être utile,
                  mais il faut vérifier les frais, les conditions, la fiscalité
                  belge, les produits disponibles et les risques avant
                  d’investir.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <a
                  href={DEGIRO_OFFICIAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Voir DEGIRO
                </a>

                <Link
                  href="/investissement"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  Retour à investissement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            À lire aussi
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Comparer avant de choisir un outil d’investissement
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}