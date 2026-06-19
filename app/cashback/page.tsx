const platforms = [
  {
    name: "iGraal",
    slug: "/cashback/igraal",
    description:
      "Plateforme de cashback permettant de récupérer une partie de ses achats en ligne.",
    bonus: "À vérifier",
  },
  {
    name: "Widilo",
    slug: "/cashback/widilo",
    description:
      "Plateforme combinant cashback, codes promo et offres partenaires pour les achats en ligne.",
    bonus: "À vérifier",
  },
];

export default function CashbackPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">Cashback</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Cashback, remboursements et codes promo pour économiser en ligne
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Comparez les plateformes de cashback suivies par Afflizen :
            avantages, limites, bonus éventuels, conditions de validation et avis
            pratique avant inscription.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-emerald-600">
                {platform.bonus}
              </p>

              <h2 className="mt-3 text-2xl font-bold">{platform.name}</h2>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {platform.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-slate-950">
                Voir la fiche →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}