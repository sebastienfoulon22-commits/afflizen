import type { Metadata } from "next";
import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";

const FINARY_AFFILIATE_LINK = "https://finary.com/referral/PQCTXT";
const FINARY_OFFICIAL_LINK = "https://finary.com/fr";

export const metadata: Metadata = {
  title: "Finary avis 2026 : suivre son patrimoine, budget, investissements et crypto",
  description:
    "Notre avis sur Finary en 2026 : suivi de patrimoine, budget, investissements, crypto, frais, avantages, limites et parrainage Finary Premium.",
  alternates: {
    canonical: "https://afflizen.com/investissement/finary",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "À quoi sert Finary ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finary sert à centraliser et suivre son patrimoine : comptes bancaires, placements, investissements, crypto, immobilier, crédits et autres actifs selon les connexions disponibles.",
      },
    },
    {
      "@type": "Question",
      name: "Finary est-il utile pour un débutant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Finary peut être utile pour un débutant qui veut avoir une vision claire de ses finances, suivre ses comptes et mieux comprendre la répartition de son patrimoine. Il ne remplace pas un conseiller financier.",
      },
    },
    {
      "@type": "Question",
      name: "Le parrainage Finary donne quoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le programme de parrainage Finary peut permettre d’obtenir un mois de Finary Premium lorsque le filleul s’inscrit avec un lien de parrainage et respecte les conditions, notamment la connexion de comptes selon les règles en vigueur.",
      },
    },
    {
      "@type": "Question",
      name: "Finary garantit-il de mieux investir ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Finary aide à suivre, analyser et mieux organiser ses finances, mais ne garantit aucun rendement. Les décisions d’investissement restent sous la responsabilité de l’utilisateur.",
      },
    },
  ],
};

const strengths = [
  "Vue globale du patrimoine depuis une seule interface.",
  "Suivi possible des comptes bancaires, investissements, crypto et autres actifs.",
  "Utile pour repérer sa diversification, ses frais et son allocation.",
  "Application moderne, claire et pensée pour les investisseurs particuliers.",
  "Parrainage intéressant avec un mois de Premium potentiel sous conditions.",
];

const limits = [
  "Certaines fonctions avancées peuvent nécessiter Finary Premium.",
  "La synchronisation dépend des banques et plateformes compatibles.",
  "L’outil aide à analyser, mais ne prend pas les décisions à ta place.",
  "Il faut rester prudent avec les données financières connectées.",
  "Le parrainage dépend des conditions Finary en vigueur au moment de l’inscription.",
];

const useCases = [
  {
    title: "Suivre son patrimoine global",
    text: "Finary permet de regrouper plusieurs comptes et actifs pour voir plus clairement la valeur totale de son patrimoine.",
  },
  {
    title: "Analyser ses investissements",
    text: "L’outil aide à mieux visualiser la répartition entre actions, ETF, crypto, immobilier, liquidités ou autres placements.",
  },
  {
    title: "Repérer les frais",
    text: "Finary peut aider à prendre conscience de certains frais ou de la structure globale de ses placements.",
  },
  {
    title: "Préparer ses objectifs",
    text: "C’est utile pour suivre une trajectoire financière : épargne, indépendance financière, patrimoine long terme ou diversification.",
  },
];

const relatedLinks = [
  {
    href: "/investissement/trade-republic",
    title: "Trade Republic",
    text: "Une solution simple pour investir en actions, ETF et plans programmés.",
  },
  {
    href: "/investissement/etoro",
    title: "eToro",
    text: "Une plateforme orientée investissement, copy trading et offre iGraal potentielle.",
  },
  {
    href: "/crypto/waltio",
    title: "Waltio",
    text: "Un assistant pour mieux préparer le suivi fiscal de ses opérations crypto.",
  },
  {
    href: "/crypto/coinbase",
    title: "Coinbase",
    text: "Une plateforme crypto connue, plutôt accessible pour débuter.",
  },
];

export default function FinaryPage() {
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
              Investissement · Patrimoine · Budget · Crypto
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Finary avis 2026 : suivre son patrimoine, ses investissements et
              ses cryptos au même endroit
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Finary est une application française pensée pour centraliser ses
              finances : comptes bancaires, placements, actions, ETF, crypto,
              immobilier, crédits et autres actifs selon les connexions
              disponibles. Pour Afflizen, c’est une page importante parce
              qu’elle fait le lien entre investissement, budget, crypto et
              gestion de patrimoine.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <AffiliateButton
                href={FINARY_AFFILIATE_LINK}
                platform="finary"
                category="investissement"
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir Finary avec le parrainage
              </AffiliateButton>

              <a
                href={FINARY_OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Voir le site officiel Finary
              </a>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
              Le parrainage Finary peut permettre d’obtenir un mois de Finary
              Premium sous conditions. Les avantages, critères de validation et
              fonctionnalités disponibles peuvent évoluer : il faut toujours
              vérifier les conditions affichées par Finary au moment de
              l’inscription.
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
                  Investisseur particulier qui veut une vue claire de tout son
                  patrimoine.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Point fort</p>
                <p>
                  Centralisation des comptes, investissements, crypto et autres
                  actifs.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Point faible</p>
                <p>
                  Les fonctions les plus avancées peuvent nécessiter une offre
                  payante.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Parrainage</p>
                <p>
                  Un mois de Premium potentiel si les conditions Finary sont
                  respectées.
                </p>
              </div>
            </div>

            <AffiliateButton
              href={FINARY_AFFILIATE_LINK}
              platform="finary"
              category="investissement"
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Utiliser le lien Finary
            </AffiliateButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Catégorie</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Patrimoine
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Finary n’est pas une simple banque ou une simple plateforme crypto.
              C’est surtout un tableau de bord patrimonial.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Utilité</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Vision globale
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              L’intérêt est de mieux comprendre où se trouve son argent et
              comment son patrimoine est réparti.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Attention</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Pas une garantie
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Finary aide à suivre et analyser. L’application ne garantit pas de
              rendement et ne remplace pas un conseiller financier.
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
              Notre avis sur Finary
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Finary est particulièrement intéressant si tu commences à avoir
              plusieurs comptes, plusieurs plateformes ou plusieurs types
              d’actifs. Quand l’argent est dispersé entre une banque, une
              application d’investissement, une plateforme crypto, un courtier
              et éventuellement de l’immobilier, il devient difficile de savoir
              précisément où tu en es.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-700">
              L’intérêt de Finary est de regrouper ces informations pour obtenir
              une vision plus claire : patrimoine total, répartition par classe
              d’actifs, évolution dans le temps, exposition crypto, liquidités,
              dettes ou encore objectifs financiers. C’est exactement le genre
              d’outil qui peut aider un utilisateur Afflizen à passer d’une
              logique “j’utilise plusieurs applications” à une logique “je
              pilote mes finances”.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-700">
              Il ne faut pas pour autant présenter Finary comme une solution
              magique. L’application ne décide pas à ta place. Elle peut
              améliorer ta visibilité, mais tes choix d’investissement, ta
              tolérance au risque, ta fiscalité et ta stratégie restent sous ta
              responsabilité.
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
              Fonctionnalités
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              À quoi peut servir Finary au quotidien ?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
              Finary est surtout utile quand tu veux arrêter de regarder tes
              finances application par application. L’objectif est d’avoir un
              tableau de bord plus global pour suivre l’évolution de ton argent,
              repérer les déséquilibres et mieux comprendre ta situation.
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
              <li>1. Créer un compte avec le lien de parrainage.</li>
              <li>2. Connecter les comptes utiles.</li>
              <li>3. Vérifier la répartition de son patrimoine.</li>
              <li>4. Identifier les doublons, frais ou déséquilibres.</li>
              <li>5. Utiliser l’outil comme tableau de bord régulier.</li>
            </ol>

            <AffiliateButton
              href={FINARY_AFFILIATE_LINK}
              platform="finary"
              category="investissement"
              location="fonctionnalites"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Commencer avec Finary
            </AffiliateButton>
          </aside>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Parrainage
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Le parrainage Finary : un mois Premium potentiel
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Le lien de parrainage Finary peut permettre de bénéficier d’un
              mois de Finary Premium selon les conditions en vigueur. Le principe
              est simple : le filleul s’inscrit avec le lien, connecte les
              comptes demandés par Finary, puis l’avantage peut être crédité si
              toutes les conditions sont respectées.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">1 mois Premium</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                L’avantage mis en avant par Finary est un mois de Premium, sous
                réserve des conditions du programme.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Comptes à connecter</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Le parrainage peut nécessiter la connexion d’établissements ou
                comptes pour être validé.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Conditions variables</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Les règles peuvent changer. Il faut toujours vérifier les
                conditions Finary affichées au moment de l’inscription.
              </p>
            </div>
          </div>

          <AffiliateButton
            href={FINARY_AFFILIATE_LINK}
            platform="finary"
            category="investissement"
            location="parrainage"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            Profiter du parrainage Finary
          </AffiliateButton>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Pour qui ?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Finary peut convenir si...
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu as plusieurs comptes
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Finary devient intéressant dès que ton argent est réparti entre
              plusieurs banques, courtiers, plateformes crypto ou produits
              d’épargne.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu veux comprendre ta répartition
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              L’application peut aider à voir si ton patrimoine est trop exposé
              à une seule catégorie : cash, actions, crypto, immobilier ou autre.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu veux suivre tes cryptos avec le reste
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Finary est intéressant pour ne pas isoler les cryptos du reste du
              patrimoine et mieux visualiser leur poids réel.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu veux piloter ton argent
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Finary peut devenir un tableau de bord régulier pour suivre ton
              évolution financière, tes objectifs et tes décisions.
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
                  Finary est une excellente page à ajouter à Afflizen
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  Finary complète très bien les pages Trade Republic, eToro,
                  Coinbase, Binance ou Waltio. Là où ces plateformes permettent
                  d’investir, d’acheter de la crypto ou de suivre la fiscalité,
                  Finary sert plutôt à prendre du recul sur l’ensemble de son
                  patrimoine.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  C’est donc une page stratégique pour Afflizen : elle parle aux
                  personnes qui veulent gagner en clarté, mieux organiser leurs
                  finances et suivre leur progression patrimoniale sans se
                  limiter à une seule plateforme.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <AffiliateButton
                  href={FINARY_AFFILIATE_LINK}
                  platform="finary"
                  category="investissement"
                  location="avis"
                  className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Découvrir Finary
                </AffiliateButton>

                <Link
                  href="/investissement"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  Voir la catégorie investissement
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
            Continuer à construire sa stratégie financière
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