import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hébergement web - Comparatifs hébergeurs et noms de domaine",
  description:
    "Comparez les solutions d’hébergement web, noms de domaine et outils pour créer un site internet avec Afflizen.",
};

export default function HebergementWebPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Hébergement web
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Comparer les solutions d’hébergement web
        </h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-slate-700">
          Afflizen aide les particuliers, créateurs de contenu et entrepreneurs
          à comparer les hébergeurs web, noms de domaine et outils utiles pour
          lancer un site internet.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Hébergement</h2>
            <p className="text-slate-700">
              Comparez les offres d’hébergement mutualisé, WordPress, cloud et
              serveurs adaptés aux petits projets.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Noms de domaine</h2>
            <p className="text-slate-700">
              Trouvez des solutions simples pour acheter et connecter un nom de
              domaine à votre site.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Outils web</h2>
            <p className="text-slate-700">
              Découvrez les outils utiles pour créer, sécuriser et développer un
              site internet.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}