export default function ComparatifsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">
            Comparatifs
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Comparatifs Afflizen
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Retrouvez prochainement les comparatifs Afflizen pour choisir plus
            facilement entre les plateformes crypto, banques en ligne,
            applications d’investissement, cashback et hébergement web.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-bold">Pages à venir</h2>

          <p className="mt-4 leading-7 text-slate-600">
            Cette section servira à publier des comparatifs détaillés :
            meilleures plateformes crypto, meilleures banques en ligne,
            meilleures applications d’investissement, meilleurs sites de
            cashback et meilleurs hébergeurs web.
          </p>
        </div>
      </section>
    </main>
  );
}