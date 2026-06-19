export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">
            Guides
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Guides Afflizen
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Retrouvez prochainement les guides Afflizen pour mieux comprendre
            les plateformes crypto, banques en ligne, applications
            d’investissement, cashback, hébergement web et offres de bienvenue.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-bold">Guides à venir</h2>

          <p className="mt-4 leading-7 text-slate-600">
            Cette section servira à publier des contenus pratiques :
            comment choisir une plateforme, comment comparer les frais,
            comment vérifier une offre de bienvenue et comment éviter les
            erreurs fréquentes avant inscription.
          </p>
        </div>
      </section>
    </main>
  );
}