const categories = [
  {
    name: "Crypto",
    url: "/crypto",
    description:
      "Plateformes crypto, bonus d’inscription, frais, sécurité et avis pour débuter prudemment.",
  },
  {
    name: "Investissement",
    url: "/investissement",
    description:
      "Applications d’investissement, actions, ETF et plateformes simples pour construire son patrimoine.",
  },
  {
    name: "Banques",
    url: "/banques",
    description:
      "Banques en ligne, cartes, comptes mobiles, primes et conditions à vérifier avant inscription.",
  },
  {
    name: "Cashback",
    url: "/cashback",
    description:
      "Cashback, remboursements, codes promo et bons plans pour économiser sur ses achats en ligne.",
  },
  {
    name: "Hébergement",
    url: "/hebergement",
    description:
      "Hébergement web, domaines, WordPress et solutions pour lancer un site ou un projet en ligne.",
  },
];

const featuredPlatforms = [
  {
    name: "Binance",
    category: "Crypto",
    url: "/crypto/binance",
  },
  {
    name: "Trade Republic",
    category: "Investissement",
    url: "/investissement/trade-republic",
  },
  {
    name: "Revolut",
    category: "Banques",
    url: "/banques/revolut",
  },
  {
    name: "iGraal",
    category: "Cashback",
    url: "/cashback/igraal",
  },
  {
    name: "Hostinger",
    category: "Hébergement",
    url: "/hebergement/hostinger",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Afflizen
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Comparez les plateformes finance, crypto, banques, cashback et web
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Afflizen aide les utilisateurs francophones à comparer les
            plateformes utiles pour gérer leur argent, investir, profiter de
            bonus, économiser en ligne et lancer leurs projets web.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/bonus"
              className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Voir les bonus
            </a>

            <a
              href="/crypto"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Explorer les comparatifs
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold">10</p>
              <p className="mt-1 text-sm text-slate-600">
                plateformes déjà structurées
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold">5</p>
              <p className="mt-1 text-sm text-slate-600">
                grandes catégories comparées
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold">1</p>
              <p className="mt-1 text-sm text-slate-600">
                objectif : choisir plus clairement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-600">
              Catégories
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Trouvez rapidement le bon comparatif
            </h2>
          </div>

          <a
            href="/bonus"
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Voir toutes les offres →
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.url}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <h3 className="text-2xl font-bold">{category.name}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {category.description}
              </p>
              <p className="mt-6 text-sm font-semibold text-slate-950">
                Voir la catégorie →
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold text-emerald-400">
            Plateformes mises en avant
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Les fiches importantes à consulter en priorité
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {featuredPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-emerald-400"
              >
                <p className="text-sm font-semibold text-emerald-400">
                  {platform.category}
                </p>
                <h3 className="mt-3 text-xl font-bold">{platform.name}</h3>
                <p className="mt-5 text-sm font-semibold text-white">
                  Voir la fiche →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-emerald-600">
              Bonus / Promotions
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Retrouvez les offres à vérifier avant inscription
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Les bonus, primes, codes promo et offres de bienvenue changent
              régulièrement. Afflizen regroupe les plateformes à suivre, avec
              des fiches prévues pour détailler les conditions importantes.
            </p>
            <a
              href="/bonus"
              className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Voir la page Bonus
            </a>
          </div>

          <div className="rounded-3xl bg-amber-50 p-8">
            <p className="text-sm font-semibold text-amber-700">
              Avertissement
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Comparer avant de s’inscrire
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Afflizen a pour objectif d’aider à comparer des plateformes et des
              offres. Les informations doivent toujours être vérifiées sur les
              sites officiels avant toute inscription, notamment les frais, les
              risques, les conditions de bonus et les règles applicables dans
              votre pays.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}