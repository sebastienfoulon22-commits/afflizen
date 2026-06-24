import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Crypto : comparatif Binance, Bitget, Crypto.com, Coinbase, Nexo, Kraken, SwissBorg et Waltio",
  description:
    "Comparez les plateformes crypto suivies par Afflizen : Binance, Bitget, Crypto.com, Coinbase, Nexo, Kraken, SwissBorg et Waltio. Avis, avantages, limites et points à vérifier.",
  alternates: {
    canonical: "https://afflizen.com/crypto",
  },
  openGraph: {
    title: "Crypto : comparatif des plateformes suivies par Afflizen",
    description:
      "Découvrez les fiches crypto Afflizen : plateformes d’échange, applications crypto, fiscalité crypto, avantages, limites et points à vérifier.",
    url: "https://afflizen.com/crypto",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "website",
  },
};

const platforms = [
  {
    name: "Binance",
    slug: "/crypto/binance",
    description:
      "Plateforme crypto complète pour acheter, vendre et gérer des cryptomonnaies.",
    bonus: "Exchange crypto",
  },
  {
    name: "Bitget",
    slug: "/crypto/bitget",
    description:
      "Exchange crypto connu pour le trading, les copies de stratégies et les offres promotionnelles.",
    bonus: "Trading crypto",
  },
  {
    name: "Crypto.com",
    slug: "/crypto/crypto-com",
    description:
      "Application crypto populaire avec carte, achat de cryptos et services associés.",
    bonus: "Application crypto",
  },
  {
    name: "Coinbase",
    slug: "/crypto/coinbase",
    description:
      "Plateforme crypto connue pour son interface simple, adaptée aux débutants qui veulent acheter et gérer leurs premières cryptomonnaies.",
    bonus: "Débutants crypto",
  },
  {
    name: "Nexo",
    slug: "/crypto/nexo",
    description:
      "Plateforme crypto orientée épargne, services financiers crypto et gestion d’actifs numériques.",
    bonus: "Services crypto",
  },
  {
    name: "Kraken",
    slug: "/crypto/kraken",
    description:
      "Exchange crypto reconnu pour acheter, vendre et gérer des cryptomonnaies avec une approche sérieuse.",
    bonus: "Exchange crypto",
  },
  {
    name: "SwissBorg",
    slug: "/crypto/swissborg",
    description:
      "Application crypto européenne pensée pour acheter, vendre et gérer ses actifs numériques simplement.",
    bonus: "Application crypto",
  },
  {
    name: "Waltio",
    slug: "/crypto/waltio",
    description:
      "Assistant fiscal crypto pour centraliser ses transactions, préparer ses calculs et mieux organiser sa déclaration.",
    bonus: "Fiscalité crypto",
  },
];

export default function CryptoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">Crypto</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Plateformes crypto, applications et outils pour mieux gérer ses
            actifs numériques
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Comparez les plateformes crypto suivies par Afflizen : avantages,
            limites, bonus éventuels, conditions d’inscription, sécurité,
            fiscalité crypto et avis pratique pour choisir plus facilement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Les plateformes crypto comportent des risques : volatilité, perte en
            capital, erreurs de transfert, fiscalité, sécurité des comptes et
            évolution des réglementations. Vérifiez toujours les informations
            officielles avant toute inscription ou utilisation.
          </p>
        </div>
      </section>
    </main>
  );
}