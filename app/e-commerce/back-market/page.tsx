import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

const BACK_MARKET_BELGIUM_URL = "https://www.backmarket.be/fr-be";
const BACK_MARKET_FRANCE_URL = "https://www.backmarket.fr/fr-fr";

export const metadata = createPageMetadata({
  title: "Back Market avis 2026 : reconditionné, prix et conseils",
  description: "Notre avis sur Back Market : produits reconditionnés, avantages, limites, garantie, retours, prix et liens officiels belge et français.",
  path: "/e-commerce/back-market",
  type: "article",
});

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
    title: "Deux sites officiels selon le pays",
    description:
      "Afflizen dirige les visiteurs vers les sites officiels belge et français afin de consulter les produits et conditions adaptés à leur marché.",
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
  "Lire les conditions de vente et les éventuelles promotions avant validation.",
  "Vérifier la batterie, les accessoires inclus et la compatibilité du produit.",
];

const steps = [
  {
    title: "1. Choisis le site correspondant à ton pays",
    description:
      "Utilise le lien officiel belge ou français proposé par Afflizen.",
  },
  {
    title: "2. Choisis un produit éligible",
    description:
      "Compare le modèle, l’état, le prix, la garantie, le vendeur et les délais de livraison.",
  },
  {
    title: "3. Vérifie toutes les conditions",
    description:
      "Lis les informations sur la garantie, les retours, la batterie, les accessoires et la livraison.",
  },
  {
    title: "4. Contrôle le prix final",
    description:
      "Avant de payer, compare le total avec le neuf et avec d’autres vendeurs.",
  },
];

const faq = [
  {
    question: "Back Market est-il fiable ?",
    answer:
      "Back Market est une grande plateforme spécialisée dans les produits reconditionnés. Cela ne dispense pas de vérifier l’état du produit, le vendeur, la garantie, les avis, les conditions de retour et le prix final avant d’acheter.",
  },
  {
    question: "Afflizen publie-t-il un code de parrainage Back Market ?",
    answer:
      "Non. Afflizen ne publie actuellement aucun code personnel de parrainage Back Market. Les liens de la fiche dirigent vers les sites officiels belge et français.",
  },
  {
    question: "Quel site Back Market faut-il utiliser ?",
    answer:
      "Utilisez le site belge si vous résidez en Belgique et le site français si vous résidez en France. Vérifiez ensuite les prix, vendeurs, garanties et conditions applicables localement.",
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
              E-commerce reconditionné
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Back Market avis 2026 : bons plans et conseils avant d’acheter
              reconditionné
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Back Market est une plateforme spécialisée dans les produits
              reconditionnés. Elle peut être intéressante pour acheter un
              smartphone, un ordinateur, une tablette ou d’autres appareils à
              prix réduit, mais il faut comparer l’état, le vendeur, la garantie,
              le prix final et les conditions avant de commander.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BACK_MARKET_BELGIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir Back Market Belgique
              </a>

              <a
                href={BACK_MARKET_FRANCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Voir Back Market France
              </a>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Liens officiels non affiliés. Afflizen ne publie actuellement
              aucun code personnel de parrainage Back Market.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl lg:w-80">
            <p className="text-sm font-semibold text-emerald-300">
              Liens officiels non affiliés
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-slate-300">
                Choisissez votre pays
              </p>
              <p className="mt-2 text-xl font-black text-white">
                Belgique ou France
              </p>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Les destinations proposées mènent directement aux sites officiels
              correspondant à chaque marché.
            </p>

            <a
              href={BACK_MARKET_BELGIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Voir Back Market Belgique
            </a>
            <a
              href={BACK_MARKET_FRANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Voir Back Market France
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section
            id="sites-officiels-back-market"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Liens officiels non affiliés
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Accéder au site adapté à votre pays
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Afflizen ne publie actuellement aucun code personnel de
              parrainage Back Market. Les liens proposés dirigent directement
              vers les sites officiels belge et français.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-800">
                Avant de commander
              </p>

              <p className="mt-3 text-sm leading-6 text-emerald-900">
                Vérifiez le vendeur, l’état du produit, la garantie, les retours,
                les accessoires inclus et le prix final sur le site local.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={BACK_MARKET_BELGIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir Back Market Belgique
              </a>
              <a
                href={BACK_MARKET_FRANCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-900 transition hover:border-emerald-400 hover:text-emerald-700"
              >
                Voir Back Market France
              </a>
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
              Comment préparer un achat sur Back Market ?
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
                  <li>• Sites officiels adaptés à la Belgique et à la France.</li>
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
                  <li>• Les promotions éventuelles peuvent avoir des conditions.</li>
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
              appareil reconditionné tout en essayant de réduire ton budget.
              Afflizen renvoie vers les sites officiels sans publier de code
              personnel de parrainage.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Notre conseil : ne te limite pas au montant de la réduction.
              Compare le prix final, l’état du produit, la garantie, les avis du
              vendeur et les conditions de retour. C’est comme ça que Back Market
              devient réellement intéressant.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={BACK_MARKET_BELGIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir Back Market Belgique
              </a>
              <a
                href={BACK_MARKET_FRANCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-900 transition hover:border-emerald-400 hover:text-emerald-700"
              >
                Voir Back Market France
              </a>
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
                <dt className="font-semibold text-slate-500">Liens</dt>
                <dd className="mt-1 text-slate-700">
                  Sites officiels belge et français, sans affiliation
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-500">À vérifier</dt>
                <dd className="mt-1 text-slate-700">
                  Prix final, état, vendeur, garantie et conditions de retour.
                </dd>
              </div>
            </dl>

            <a
              href={BACK_MARKET_BELGIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Voir Back Market Belgique
            </a>
            <a
              href={BACK_MARKET_FRANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-emerald-400 hover:text-emerald-700"
            >
              Voir Back Market France
            </a>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Vérifie toujours le produit, le vendeur et le panier avant
              paiement.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
