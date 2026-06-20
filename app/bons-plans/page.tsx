import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bons plans financiers - Offres, parrainages et économies",
  description:
    "Découvrez les bons plans financiers, offres de parrainage, cashback et solutions pour économiser avec Afflizen.",
};

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
          Afflizen regroupe des offres utiles pour économiser, profiter de
          bonus de bienvenue, comparer les programmes de parrainage et découvrir
          des services financiers avantageux.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Cashback</h2>
            <p className="text-slate-700">
              Repérez les plateformes qui permettent de récupérer une partie de
              vos achats.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Parrainages</h2>
            <p className="text-slate-700">
              Découvrez les offres de parrainage intéressantes sur les services
              financiers et applications utiles.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Offres à surveiller</h2>
            <p className="text-slate-700">
              Une sélection de bons plans à suivre pour optimiser vos dépenses.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}