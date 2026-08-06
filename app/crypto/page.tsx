import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Plateformes et services crypto",
  description:
    "Découvrez les plateformes et services crypto présentés sur Afflizen, avec leur disponibilité, leurs restrictions, leurs risques et leur statut actuel.",
  path: "/crypto",
  type: "website",
});

const mainPlatforms = [
  {
    name: "Crypto.com",
    slug: "/crypto/crypto-com",
    description:
      "Application crypto avec achat, conservation, carte et services complémentaires dont la disponibilité varie selon le produit et le pays.",
    badge: "Application crypto",
  },
  {
    name: "Coinbase",
    slug: "/crypto/coinbase",
    description:
      "Plateforme crypto connue pour son interface simple, avec services et conditions à vérifier selon le pays de résidence.",
    badge: "Débutants crypto",
  },
  {
    name: "Ledger",
    slug: "/crypto/ledger",
    description:
      "Portefeuille matériel non dépositaire pour sécuriser ses clés privées et conserver ses crypto-actifs hors plateforme.",
    badge: "Wallet non dépositaire",
  },
  {
    name: "Nexo",
    slug: "/crypto/nexo",
    description:
      "Services crypto, produits Earn ou Borrow et carte relevant de conditions, entités et risques distincts.",
    badge: "Services crypto",
  },
  {
    name: "Kraken",
    slug: "/crypto/kraken",
    description:
      "Plateforme crypto dont les services principaux et produits complémentaires sont détaillés dans la fiche Afflizen.",
    badge: "Exchange crypto",
  },
  {
    name: "SwissBorg",
    slug: "/crypto/swissborg",
    description:
      "Application crypto européenne avec conditions, frais et disponibilité à vérifier selon le service et le pays.",
    badge: "Application crypto",
  },
  {
    name: "Waltio",
    slug: "/crypto/waltio",
    description:
      "Logiciel fiscal crypto pour centraliser ses transactions et préparer ses calculs, sans fournir de service sur crypto-actifs.",
    badge: "Logiciel fiscal",
  },
  {
    name: "Bybit",
    slug: "/crypto/bybit",
    description:
      "Environnement crypto européen accessible par le site officiel indiqué dans la fiche, sans bonus ni parrainage Afflizen.",
    badge: "Site européen officiel",
  },
  {
    name: "Meria",
    slug: "/crypto/meria",
    description:
      "Plateforme crypto française dont les services, conditions et informations réglementaires sont détaillés dans la fiche.",
    badge: "Plateforme française",
  },
  {
    name: "Deblock",
    slug: "/crypto/deblock",
    description:
      "Application combinant compte en euros et services crypto relevant de cadres et protections distincts.",
    badge: "Compte et crypto",
  },
  {
    name: "Bitpanda",
    slug: "/crypto/bitpanda",
    description:
      "Courtier européen proposant plusieurs catégories d’actifs et services dont la disponibilité varie selon le pays.",
    badge: "Courtier multi-actifs",
  },
];

const suspendedPlatforms = [
  {
    name: "Binance",
    slug: "/crypto/binance",
    description:
      "Fiche informative : le CTA Afflizen reste suspendu dans l’attente d’une clarification réglementaire suffisante.",
    badge: "Inscription suspendue",
  },
  {
    name: "Bitget",
    slug: "/crypto/bitget",
    description:
      "Services arrêtés en France et statut belge à confirmer. Aucun lien d’inscription n’est proposé par Afflizen.",
    badge: "Services suspendus",
  },
  {
    name: "HTX",
    slug: "/crypto/htx",
    description:
      "Les conditions officielles consultées excluent les résidents de l’Union européenne. Inscription suspendue sur Afflizen.",
    badge: "Indisponible dans l’UE",
  },
  {
    name: "AscendEX",
    slug: "/crypto/ascendex",
    description:
      "AscendEX a cessé ses opérations le 1er juillet 2026. La fiche est conservée pour informer les anciens utilisateurs.",
    badge: "Opérations cessées",
  },
  {
    name: "KuCoin",
    slug: "/crypto/kucoin",
    description:
      "Les services européens ne sont pas actuellement ouverts malgré l’existence d’un agrément de l’entité européenne.",
    badge: "Services UE non ouverts",
  },
];

const platformCardClassName =
  "flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600";

export default function CryptoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <p className="text-sm font-semibold text-emerald-700">Crypto</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Plateformes et services crypto
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Découvrez les plateformes, applications, wallets et outils crypto
            présentés sur Afflizen, avec leur statut actuel, leurs restrictions,
            leurs risques et les conditions à vérifier avant toute démarche.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">
            Plateformes et services crypto à consulter
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            La disponibilité, les services et les protections peuvent varier
            selon la plateforme, le produit et le pays de résidence.
          </p>

          <aside
            aria-labelledby="crypto-surface-transparency-title"
            className="mt-8 rounded-lg border border-amber-300 bg-amber-50 p-5"
          >
            <h3
              id="crypto-surface-transparency-title"
              className="font-bold text-amber-950"
            >
              Information et transparence
            </h3>
            <p className="mt-3 text-lg font-bold leading-7 text-slate-950">
              Monnaie virtuelle, risques réels. En crypto seul le risque est
              garanti.
            </p>
            <p className="mt-3 max-w-4xl leading-7 text-slate-800">
              Certaines fiches crypto contiennent des liens affiliés ou de
              parrainage clairement identifiés. D’autres utilisent uniquement un
              lien officiel ou ne proposent plus aucun lien d’inscription.
              Consultez chaque fiche pour connaître le statut actuel, les
              restrictions et les risques.
            </p>
          </aside>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mainPlatforms.map((platform) => (
              <article key={platform.name}>
                <Link href={platform.slug} className={platformCardClassName}>
                  <span className="w-fit rounded border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-800">
                    {platform.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{platform.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {platform.description}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-emerald-700">
                    Voir la fiche et le statut actuel
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">
            Inscriptions suspendues ou services indisponibles
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Ces fiches restent disponibles à titre informatif. Afflizen ne
            propose actuellement aucun lien d’inscription vers ces plateformes.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {suspendedPlatforms.map((platform) => (
              <article key={platform.name}>
                <Link
                  href={platform.slug}
                  className="flex h-full flex-col rounded-lg border border-slate-300 bg-white p-5 transition hover:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700"
                >
                  <span className="w-fit rounded border border-slate-300 bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                    {platform.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{platform.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {platform.description}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-slate-800">
                    Consulter la fiche informative
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-sm leading-7 text-slate-600">
            Les crypto-actifs comportent des risques de volatilité, de perte en
            capital, d’erreur de transfert, de conservation, de sécurité et de
            restrictions géographiques. Vérifiez toujours les informations
            officielles, l’entité contractante et les conditions applicables à
            votre pays avant toute utilisation.
          </p>
        </div>
      </section>
    </main>
  );
}
