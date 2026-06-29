import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bons plans financiers - Offres, parrainages et économies",
  description:
    "Découvrez les bons plans financiers, offres de parrainage, cashback, codes utiles et solutions pour économiser avec Afflizen.",
  alternates: {
    canonical: "https://afflizen.com/bons-plans",
  },
  openGraph: {
    title: "Bons plans financiers - Offres, parrainages et économies",
    description:
      "Découvrez les bons plans financiers, offres de parrainage, cashback, codes utiles et solutions pour économiser avec Afflizen.",
    url: "https://afflizen.com/bons-plans",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "website",
  },
};

const bonsPlans = [
  {
    title: "Cashback",
    description:
      "Repérez les plateformes qui permettent de récupérer une partie de vos achats en ligne.",
    href: "/cashback",
  },
  {
    title: "Parrainages",
    description:
      "Découvrez les offres de parrainage intéressantes sur les services financiers, applications utiles et plateformes comparées sur Afflizen.",
    href: "/",
  },
  {
    title: "Back Market",
    description:
      "Utilisez le code Back Market Afflizen et comparez les produits reconditionnés avant d’acheter.",
    href: "/e-commerce/back-market",
  },
  {
    title: "E-commerce",
    description:
      "Comparez les plateformes e-commerce utiles pour acheter moins cher, mieux choisir et éviter les mauvaises surprises.",
    href: "/e-commerce",
  },
  {
    title: "Cartes & paiements",
    description:
      "Découvrez les cartes, applications de paiement et solutions pratiques pour optimiser vos dépenses.",
    href: "/cartes-et-paiements",
  },
  {
    title: "Offres à surveiller",
    description:
      "Une sélection de bons plans, codes, bonus et plateformes à suivre pour optimiser vos dépenses.",
    href: "/",
  },
];

export default function BonsPlansPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Bons plans
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Bons plans financiers, cashback et parrainages
        </h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-slate-700">
          Afflizen regroupe des offres utiles pour économiser, profiter de bonus
          de bienvenue, comparer les programmes de parrainage et découvrir des
          services financiers ou e-commerce avantageux.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {bonsPlans.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md"
            >
              <h2 className="mb-3 text-xl font-semibold text-slate-950">
                {item.title}
              </h2>

              <p className="text-slate-700">{item.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold text-slate-950">
            Vérifiez toujours les conditions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Les codes promo, offres de parrainage, bonus, conditions de cashback
            et avantages peuvent changer avec le temps. Avant d’ouvrir un compte
            ou de passer commande, vérifiez toujours les conditions officielles
            sur le site concerné.
          </p>
        </div>
      </section>
    </main>
  );
}