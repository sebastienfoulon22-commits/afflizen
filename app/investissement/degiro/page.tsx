import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DEGIRO avis 2026 : courtier en ligne, actions, ETF, frais et limites",
  description:
    "Notre avis sur DEGIRO en 2026 : courtier en ligne pour actions, ETF et marchés financiers. Avantages, limites, frais à vérifier et points de vigilance.",
  alternates: {
    canonical: "https://afflizen.com/investissement/degiro",
  },
};

export default function DegiroPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">
            Investissement · Courtier en ligne
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            DEGIRO avis 2026 : un courtier en ligne pour investir en actions et ETF
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DEGIRO est un courtier en ligne connu pour permettre d’investir en
            actions, ETF et autres produits financiers. Sur Afflizen, nous le
            classons dans la catégorie investissement, car il s’adresse surtout
            aux personnes qui veulent construire un portefeuille sur les marchés
            financiers.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.degiro.fr/"
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
            Afflizen ne dispose pas encore d’un lien de parrainage DEGIRO. Cette
            page utilise donc un lien officiel temporaire, à remplacer plus tard
            si un lien d’affiliation ou de parrainage devient disponible.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-600">Catégorie</p>
            <h2 className="mt-3 text-xl font-bold">Courtier en ligne</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              DEGIRO sert surtout à investir sur les marchés financiers :
              actions, ETF et autres produits selon disponibilité.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-600">À vérifier</p>
            <h2 className="mt-3 text-xl font-bold">Frais et produits</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Les frais, produits disponibles, places boursières et conditions
              doivent toujours être vérifiés sur le site officiel.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-600">Attention</p>
            <h2 className="mt-3 text-xl font-bold">Risque de marché</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Investir en actions ou ETF comporte un risque de perte en capital.
              Les performances passées ne garantissent pas les résultats futurs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">
            Notre avis sur DEGIRO
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
            DEGIRO peut être intéressant pour un investisseur qui veut accéder à
            une large gamme de marchés financiers depuis une interface de
            courtage en ligne. La plateforme est davantage orientée
            investissement que banque quotidienne.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
            Le principal intérêt est de pouvoir comparer DEGIRO avec d’autres
            solutions comme Trade Republic, eToro ou Interactive Brokers. Le
            choix dépendra surtout du profil de l’utilisateur, des frais, des
            marchés accessibles, des produits disponibles et du niveau de
            simplicité recherché.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
            Comme toujours avec l’investissement, il faut éviter de choisir une
            plateforme uniquement sur base d’un prix ou d’une promesse marketing.
            Il faut comprendre les frais, les risques, la fiscalité, les produits
            utilisés et la stratégie d’investissement.
          </p>
        </div>
      </section>
    </main>
  );
}