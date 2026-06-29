import type { Metadata } from "next";
import Link from "next/link";
import AffiliateButton from "../../../components/AffiliateButton";

const BACK_MARKET_URL = "https://www.backmarket.fr/fr-fr";
const BACK_MARKET_CODE = "ffcb15bb420025aa";

export const metadata: Metadata = {
  title: "Back Market avis 2026 : code parrainage, reconditionné et bons plans",
  description:
    "Notre avis sur Back Market : code parrainage, avantages, limites, garantie, retours, prix et conseils avant d’acheter un produit reconditionné.",
  alternates: {
    canonical: "https://afflizen.com/e-commerce/back-market",
  },
  openGraph: {
    title:
      "Back Market avis 2026 : code parrainage, reconditionné et bons plans",
    description:
      "Notre avis sur Back Market : code parrainage, avantages, limites, garantie, retours, prix et conseils avant d’acheter un produit reconditionné.",
    url: "https://afflizen.com/e-commerce/back-market",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "article",
  },
};

const benefits = [
  {
    title: "Un grand choix de produits reconditionnés",
    description:
      "Smartphones, ordinateurs, tablettes, consoles, audio, électroménager : Back Market regroupe de nombreux vendeurs spécialisés dans le reconditionné.",
  },
  {
    title: "Des prix souvent plus bas que le neuf",
    description:
      "L’intérêt principal est de trouver des appareils récents ou plus anciens à prix réduit, selon l’état, le modèle, le vendeur et la disponibilité.",
  },
  {
    title: "Un code de parrainage simple à utiliser",
    description:
      "Le code permet généralement de bénéficier d’un avantage sur une commande éligible, sous réserve des conditions Back Market.",
  },
  {
    title: "Une alternative plus durable",
    description:
      "Acheter reconditionné peut permettre de prolonger la durée de vie d’un appareil au lieu d’acheter systématiquement du neuf.",
  },
];

const warnings = [
  "Comparer l’état du produit : parfait état, très bon état, bon état, etc.",
  "Vérifier le vendeur, les avis, la garantie et les conditions de retour.",
  "Comparer le prix avec le neuf et avec d’autres plateformes avant d’acheter.",
  "Lire les conditions du code promo ou du parrainage avant validation.",
  "Vérifier la batterie, les accessoires inclus et la compatibilité du produit.",
];

const steps = [
  {
    title: "1. Ouvre Back Market",
    description:
      "Clique sur le bouton Afflizen pour accéder au site officiel Back Market.",
  },
  {
    title: "2. Choisis un produit éligible",
    description:
      "Compare le modèle, l’état, le prix, la garantie, le vendeur et les délais de livraison.",
  },
  {
    title: "3. Utilise le code",
    description: `Au moment de la commande, utilise le code ${BACK_MARKET_CODE} si l’espace code promo ou parrainage est disponible.`,
  },
  {
    title: "4. Vérifie l’avantage appliqué",
    description:
      "Avant de payer, vérifie que l’avantage est bien appliqué et que les conditions sont respectées.",
  },
];

const faq = [
  {
    question: "Back Market est-il fiable ?",
    answer:
      "Back Market est une grande plateforme spécialisée dans les produits reconditionnés. Cela ne dispense pas de vérifier l’état du produit, le vendeur, la garantie, les avis, les conditions de retour et le prix final avant d’acheter.",
  },
  {
    question: "Quel est le code parrainage Back Market Afflizen ?",
    answer: `Le code parrainage Back Market Afflizen est ${BACK_MARKET_CODE}. Il peut permettre de bénéficier d’un avantage de parrainage, sous réserve des conditions en vigueur.`,
  },
  {
    question: "Le code Back Market fonctionne-t-il toujours ?",
    answer:
      "Les codes de parrainage, montants minimums, limites d’utilisation et offres promotionnelles peuvent évoluer. Il faut toujours vérifier que l’avantage est bien appliqué avant le paiement.",
  },
  {
    question: "Back Market est-il toujours moins cher que le neuf ?",
    answer:
      "Non. Back Market peut proposer de bons prix, mais il faut comparer avec le neuf, les promotions classiques, les marketplaces et les boutiques officielles avant de commander.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function BackMarketPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Link
                href="/e-commerce"
                className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                Voir la catégorie e-commerce
              </Link>
            </div>

            <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              E-commerce reconditionné · Code parrainage
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Back Market avis 2026 : code parrainage, bons plans et conseils
              avant d’acheter reconditionné
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Back Market est une plateforme spécialisée dans les produits
              reconditionnés. Elle peut être intéressante pour acheter un
              smartphone, un ordinateur, une tablette ou d’autres appareils à
              prix réduit, mais il faut comparer l’état, le vendeur, la garantie,
              le prix final et les conditions avant de commander.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AffiliateButton
                href={BACK_MARKET_URL}
                platform="back-market"
                category="e-commerce"
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir Back Market
              </AffiliateButton>

              <a
                href="#code-back-market"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Voir le code parrainage
              </a>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Certains liens peuvent être des liens de parrainage ou
              d’affiliation. Afflizen peut recevoir un avantage si tu passes par
              ces liens, sans surcoût pour toi. Vérifie toujours les conditions
              officielles avant de commander.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl lg:w-80">
            <p className="text-sm font-semibold text-emerald-300">
              Utilise le code
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-slate-300">
                Code parrainage Back Market
              </p>
              <p className="mt-2 break-all text-2xl font-black tracking-wide text-white">
                {BACK_MARKET_CODE}
              </p>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Utilise le code pour bénéficier de l’offre de parrainage Back
              Market, sous réserve des conditions en vigueur.
            </p>

            <AffiliateButton
              href={BACK_MARKET_URL}
              platform="back-market"
              category="e-commerce"
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Utiliser le code sur Back Market
            </AffiliateButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section
            id="code-back-market"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Code parrainage Back Market
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Utilise le code {BACK_MARKET_CODE}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Utilise le code <strong>{BACK_MARKET_CODE}</strong> pour
              bénéficier de l’offre de parrainage Back Market, sous réserve des
              conditions en vigueur au moment de la commande. Les conditions
              peuvent concerner le montant minimum, le pays, le type de produit,
              la limite d’utilisation ou la durée de validité.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-800">
                Code à copier
              </p>

              <p className="mt-2 break-all rounded-xl bg-white px-4 py-3 text-2xl font-black tracking-wide text-slate-950 shadow-sm">
                {BACK_MARKET_CODE}
              </p>

              <p className="mt-3 text-sm leading-6 text-emerald-900">
                Copie le code, ouvre Back Market, ajoute ton produit au panier
                puis vérifie que l’avantage est bien appliqué avant de payer.
              </p>
            </div>

            <div className="mt-6">
              <AffiliateButton
                href={BACK_MARKET_URL}
                platform="back-market"
                category="e-commerce"
                location="code"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Utiliser le code sur Back Market
              </AffiliateButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Notre avis sur Back Market
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Back Market peut être une bonne option si tu veux acheter un
              produit tech reconditionné sans payer le prix du neuf. Le site est
              surtout intéressant pour les smartphones, ordinateurs portables,
              tablettes, montres connectées, consoles et accessoires.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Le point important est de ne pas acheter uniquement parce qu’un
              prix semble bas. Sur le reconditionné, il faut regarder l’état du
              produit, le vendeur, la batterie, les accessoires, la garantie, les
              retours et le prix du même modèle ailleurs.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Les points à vérifier avant d’acheter
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Back Market peut proposer de bonnes affaires, mais tous les
              produits ne se valent pas. Avant de commander, prends quelques
              minutes pour vérifier ces éléments.
            </p>

            <ul className="mt-6 space-y-3">
              {warnings.map((warning) => (
                <li
                  key={warning}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Comment utiliser le code Back Market ?
            </h2>

            <div className="mt-6 grid gap-4">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Avantages et inconvénients de Back Market
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="text-xl font-bold text-emerald-900">
                  Avantages
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-950">
                  <li>• Large choix de produits reconditionnés.</li>
                  <li>• Prix parfois très compétitifs selon les modèles.</li>
                  <li>• Code de parrainage simple à utiliser.</li>
                  <li>• Possibilité de comparer plusieurs états de produits.</li>
                  <li>
                    • Alternative intéressante au neuf pour certains achats.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="text-xl font-bold text-amber-900">
                  Inconvénients
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-950">
                  <li>• Les prix ne sont pas toujours meilleurs que le neuf.</li>
                  <li>
                    • L’état réel peut varier selon le vendeur et le produit.
                  </li>
                  <li>• Les codes promo peuvent avoir des conditions.</li>
                  <li>• Tous les accessoires ne sont pas toujours inclus.</li>
                  <li>• Il faut lire les conditions de garantie et de retour.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Verdict Afflizen
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Back Market est une plateforme pertinente si tu veux acheter un
              appareil reconditionné tout en essayant de réduire ton budget. Le
              code <strong>{BACK_MARKET_CODE}</strong> peut être intéressant si
              tu passes une commande éligible.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Notre conseil : ne te limite pas au montant de la réduction.
              Compare le prix final, l’état du produit, la garantie, les avis du
              vendeur et les conditions de retour. C’est comme ça que Back Market
              devient réellement intéressant.
            </p>

            <div className="mt-6">
              <AffiliateButton
                href={BACK_MARKET_URL}
                platform="back-market"
                category="e-commerce"
                location="avis"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Utiliser le code sur Back Market
              </AffiliateButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Questions fréquentes
            </h2>

            <div className="mt-6 space-y-4">
              {faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Résumé rapide
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Back Market
            </h2>

            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-slate-500">Catégorie</dt>
                <dd className="mt-1 font-bold text-slate-950">
                  E-commerce reconditionné
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-500">Code</dt>
                <dd className="mt-1 break-all rounded-xl bg-slate-100 px-3 py-2 font-black text-slate-950">
                  {BACK_MARKET_CODE}
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-500">À vérifier</dt>
                <dd className="mt-1 text-slate-700">
                  Prix final, état, vendeur, garantie, retour et conditions du
                  code.
                </dd>
              </div>
            </dl>

            <AffiliateButton
              href={BACK_MARKET_URL}
              platform="back-market"
              category="e-commerce"
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Ouvrir Back Market
            </AffiliateButton>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Offre, réduction et conditions susceptibles de changer. Vérifie
              toujours le panier avant paiement.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}