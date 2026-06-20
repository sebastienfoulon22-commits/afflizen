import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cartes & paiements : applications, wallets et bons plans | Afflizen",
  description:
    "Découvrez les applications de paiement, cartes multi-devises, wallets, solutions de cashback et outils pour mieux gérer vos paiements au quotidien.",
  alternates: {
    canonical: "https://afflizen.com/cartes-et-paiements",
  },
};

const solutions = [
  {
    name: "Curve Pay",
    description:
      "Une application de paiement qui permet de regrouper plusieurs cartes bancaires dans un seul wallet, avec des fonctions comme Go Back in Time.",
    href: "/cartes-et-paiements/curve-pay",
    tag: "Carte & wallet",
  },
];

const themes = [
  "Cartes multi-devises",
  "Applications de paiement",
  "Cashback sur les dépenses",
  "Paiements à l’étranger",
  "Wallets et cartes intelligentes",
  "Frais bancaires réduits",
];

export default function CartesEtPaiementsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            Cartes · Paiements · Wallets · Cashback
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Cartes & paiements : applications, bons plans et solutions à comparer
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Cette catégorie regroupe les applications de paiement, cartes
            multi-devises, wallets, solutions de cashback et outils permettant
            de mieux gérer ses dépenses au quotidien ou à l’étranger.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
            Afflizen peut recevoir une commission ou un avantage lorsque vous
            utilisez certains liens ou codes présents sur les pages de cette
            catégorie. Les frais, conditions et avantages peuvent évoluer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {themes.map((theme) => (
            <div
              key={theme}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-slate-950">{theme}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight">
            Solutions disponibles
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Les pages ci-dessous présentent les avantages, inconvénients, frais,
            conditions, risques et éventuels liens de parrainage des solutions
            analysées par Afflizen.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => (
              <a
                key={solution.href}
                href={solution.href}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {solution.tag}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-slate-950">
                  {solution.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {solution.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-emerald-700">
                  Lire l’avis Afflizen →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-bold text-amber-950">
            À vérifier avant d’utiliser une application de paiement
          </h2>

          <ul className="mt-5 space-y-3 text-sm leading-6 text-amber-900">
            <li>• Les frais de change et de paiement à l’étranger.</li>
            <li>• Les limites gratuites selon le plan choisi.</li>
            <li>• Les frais après dépassement des plafonds.</li>
            <li>• Les conditions du cashback ou des récompenses.</li>
            <li>• La disponibilité du service dans votre pays.</li>
            <li>• Les règles du parrainage ou des codes promotionnels.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}