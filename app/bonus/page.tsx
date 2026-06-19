const bonusSections = [
  {
    category: "Crypto",
    description:
      "Offres de bienvenue, bonus d’inscription ou avantages ponctuels sur les plateformes crypto.",
    offers: [
      {
        name: "Binance",
        url: "/crypto/binance",
        bonus: "À vérifier",
      },
      {
        name: "Bitget",
        url: "/crypto/bitget",
        bonus: "À vérifier",
      },
      {
        name: "Crypto.com",
        url: "/crypto/crypto-com",
        bonus: "À vérifier",
      },
    ],
  },
  {
    category: "Investissement",
    description:
      "Offres liées aux applications d’investissement, actions, ETF ou comptes titres.",
    offers: [
      {
        name: "Trade Republic",
        url: "/investissement/trade-republic",
        bonus: "À vérifier",
      },
    ],
  },
  {
    category: "Banques",
    description:
      "Primes de bienvenue, parrainages ou offres liées aux banques en ligne et applications financières.",
    offers: [
      {
        name: "Revolut",
        url: "/banques/revolut",
        bonus: "À vérifier",
      },
      {
        name: "N26",
        url: "/banques/n26",
        bonus: "À vérifier",
      },
    ],
  },
  {
    category: "Cashback",
    description:
      "Bonus d’inscription, cashback de bienvenue ou avantages pour les achats en ligne.",
    offers: [
      {
        name: "iGraal",
        url: "/cashback/igraal",
        bonus: "À vérifier",
      },
      {
        name: "Widilo",
        url: "/cashback/widilo",
        bonus: "À vérifier",
      },
    ],
  },
  {
    category: "Hébergement web",
    description:
      "Codes promo, réductions ou offres de bienvenue sur les hébergeurs web.",
    offers: [
      {
        name: "Hostinger",
        url: "/hebergement/hostinger",
        bonus: "À vérifier",
      },
      {
        name: "OVHcloud",
        url: "/hebergement/ovh",
        bonus: "À vérifier",
      },
    ],
  },
];

export default function BonusPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">
            Bonus / Promotions
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Bonus, primes, codes promo et offres de bienvenue
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Retrouvez les offres suivies par Afflizen : bonus crypto, primes de
            banques en ligne, cashback, codes promo et réductions sur les
            services utiles. Chaque offre doit être vérifiée avant publication.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-10">
          {bonusSections.map((section) => (
            <div
              key={section.category}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-emerald-600">
                    {section.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">
                    Offres {section.category}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.offers.map((offer) => (
                  <a
                    key={offer.name}
                    href={offer.url}
                    className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
                  >
                    <p className="text-sm font-semibold text-emerald-600">
                      {offer.bonus}
                    </p>
                    <h3 className="mt-3 text-xl font-bold">{offer.name}</h3>
                    <p className="mt-5 text-sm font-semibold text-slate-950">
                      Voir les conditions →
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-bold">
            Important avant de profiter d’un bonus
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Les bonus, primes et codes promo changent régulièrement. Avant toute
            inscription, il faut vérifier le montant exact, les conditions, la
            durée de validité, les frais éventuels et la date de mise à jour de
            l’offre.
          </p>
        </div>
      </section>
    </main>
  );
}