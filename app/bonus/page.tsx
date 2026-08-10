import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Bonus, parrainages et offres disponibles",
  description:
    "Retrouvez les bonus, parrainages et offres présentés sur Afflizen, avec leurs conditions, leur disponibilité et les risques à vérifier avant toute inscription.",
  path: "/bonus",
  type: "website",
});

const activeCryptoOffers = [
  {
    name: "Crypto.com",
    url: "/crypto/crypto-com",
    status: "Lien de parrainage",
    advantage: "Avantage potentiel selon les conditions de la plateforme",
    description:
      "Crypto.com propose un programme de parrainage dont les conditions et avantages peuvent évoluer. La fiche distingue les services crypto, la carte et les paiements.",
  },
  {
    name: "Coinbase",
    url: "/crypto/coinbase",
    status: "Lien de parrainage",
    advantage: "Offre variable selon le pays et l’éligibilité",
    description:
      "Coinbase peut proposer un avantage de parrainage sous conditions. Vérifiez l’offre actuellement affichée et les critères applicables avant de vous inscrire.",
  },
  {
    name: "Nexo",
    url: "/crypto/nexo",
    status: "Lien de parrainage",
    advantage: "Parrainage distinct des produits Earn et Borrow",
    description:
      "Le parrainage Nexo et les produits Earn ou Borrow sont distincts. Les rendements sont variables et ne bénéficient pas d’une garantie bancaire.",
  },
  {
    name: "Kraken",
    url: "/crypto/kraken",
    status: "Lien de parrainage",
    advantage: "Récompense éventuelle soumise aux conditions en vigueur",
    description:
      "Le lien d’invitation applique les conditions affichées par Kraken. Le montant, la disponibilité et l’éligibilité peuvent évoluer ou disparaître.",
  },
  {
    name: "SwissBorg",
    url: "/crypto/swissborg",
    status: "Lien de parrainage",
    advantage: "Avantage potentiel lié au code et au pays",
    description:
      "Le code SwissBorg peut donner accès à un avantage potentiel selon les conditions en vigueur, la période et le pays de résidence.",
  },
];

const suspendedCryptoOffers = [
  { name: "Binance", url: "/crypto/binance" },
  { name: "Bitget", url: "/crypto/bitget" },
];

const otherOffers = [
  {
    name: "Revolut",
    category: "Banque en ligne",
    url: "/banques-en-ligne/revolut",
    status: "Lien affilié",
    advantage: "Parrainage ou offre variable",
  },
  {
    name: "N26",
    category: "Banque en ligne",
    url: "/banques-en-ligne/n26",
    status: "Lien officiel",
    advantage: "Offres commerciales variables",
  },
  {
    name: "iGraal",
    category: "Cashback",
    url: "/cashback/igraal",
    status: "Lien de parrainage",
    advantage: "Cashback et parrainage sous conditions",
  },
  {
    name: "OVHcloud",
    category: "Hébergement web",
    url: "/hebergement-web/ovh",
    status: "Lien officiel",
    advantage: "Offres commerciales variables",
  },
];

const platformsWithoutPublicReferral = [
  {
    name: "Trade Republic",
    category: "Investissement",
    url: "/investissement/trade-republic",
    description:
      "Afflizen ne publie aucun lien personnel de parrainage Trade Republic. La fiche propose uniquement les sites officiels belge et français.",
  },
  {
    name: "Widilo",
    category: "Cashback",
    url: "/cashback/widilo",
    description:
      "Le programme personnel de parrainage Widilo reste destiné à un cadre privé. La fiche utilise le site officiel sans affiliation.",
  },
  {
    name: "Hostinger",
    category: "Hébergement web",
    url: "/hebergement-web/hostinger",
    description:
      "Afflizen n’utilise plus le programme personnel de parrainage Hostinger. La fiche propose un lien officiel non affilié.",
  },
];

const cardClassName =
  "flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm";

export default function BonusPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <p className="text-sm font-semibold text-emerald-700">
            Bonus et promotions
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Bonus, parrainages et offres disponibles
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Cette page regroupe des offres de parrainage, avantages
            d’inscription, programmes de cashback, liens affiliés et offres
            officielles. Leur disponibilité dépend notamment du pays, de la
            période et des critères d’éligibilité.
          </p>

          <p className="mt-4 max-w-3xl border-l-4 border-amber-400 pl-4 text-sm font-semibold leading-6 text-slate-800">
            Les offres, montants et conditions peuvent évoluer ou être suspendus.
            Vérifiez toujours la fiche détaillée et les conditions officielles
            avant toute inscription.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-sm font-semibold text-emerald-700">Crypto</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Offres crypto actuellement accessibles
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Les liens ci-dessous mènent d’abord vers les fiches Afflizen afin de
            consulter les risques, l’entité concernée, la disponibilité en
            Belgique et en France ainsi que les sources officielles.
          </p>

          <aside
            aria-labelledby="crypto-bonus-disclosure-title"
            className="mt-8 rounded-lg border border-amber-300 bg-amber-50 p-5 text-slate-900"
          >
            <h3
              id="crypto-bonus-disclosure-title"
              className="text-base font-bold text-amber-950"
            >
              Publicité et liens affiliés
            </h3>
            <p className="mt-3 text-lg font-bold leading-7 text-slate-950">
              Monnaie virtuelle, risques réels. En crypto seul le risque est
              garanti.
            </p>
            <p className="mt-3 leading-7">
              Certaines fiches présentées dans cette section contiennent des
              liens affiliés ou de parrainage. Afflizen peut recevoir une
              rémunération lorsqu’une action éligible est réalisée, sans coût
              supplémentaire direct pour vous. Les avantages, bonus et conditions
              ne sont jamais garantis.
            </p>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-800 md:grid-cols-2">
              <li>• Une perte partielle ou totale est possible.</li>
              <li>• La valeur des crypto-actifs peut fortement varier.</li>
              <li>
                • Les crypto-actifs ne bénéficient généralement pas de la garantie
                des dépôts bancaires.
              </li>
              <li>
                • Les services et protections varient selon l’entité et le pays.
              </li>
              <li className="md:col-span-2">
                • Un bonus ne doit jamais être le seul motif d’ouverture d’un
                compte crypto. Les pertes peuvent dépasser la valeur de
                l’avantage obtenu.
              </li>
            </ul>
          </aside>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activeCryptoOffers.map((offer) => (
              <article key={offer.name} className={cardClassName}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-emerald-700">
                    Crypto
                  </span>
                  <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-800">
                    {offer.status}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{offer.name}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                  {offer.advantage}
                </p>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {offer.description}
                </p>
                <Link
                  href={offer.url}
                  className="mt-5 inline-flex w-fit font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
                >
                  Voir la fiche et les conditions
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-sm font-semibold text-slate-600">
            Information uniquement
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Offres crypto actuellement suspendues
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Ces plateformes restent mentionnées pour informer les visiteurs qui
            auraient trouvé une ancienne offre. Afflizen ne propose actuellement
            aucun lien d’inscription ou de parrainage actif pour elles.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {suspendedCryptoOffers.map((offer) => (
              <article
                key={offer.name}
                className="rounded-lg border border-slate-300 bg-white p-5"
              >
                <span className="inline-flex rounded border border-slate-300 bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                  Actuellement suspendu
                </span>
                <h3 className="mt-4 text-xl font-bold">{offer.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  L’inscription et le parrainage ne sont actuellement pas
                  proposés par Afflizen pour cette plateforme. Consultez sa fiche
                  pour connaître les restrictions en vigueur.
                </p>
                <Link
                  href={offer.url}
                  className="mt-5 inline-flex font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700"
                >
                  Consulter la situation actuelle
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-sm font-semibold text-emerald-700">
            Autres catégories
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Parrainages, cashback et offres commerciales
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Ces offres ne relèvent pas de l’avertissement crypto. Consultez chaque
            fiche pour vérifier le lien utilisé, la disponibilité géographique,
            les conditions et les éventuels délais de validation.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherOffers.map((offer) => (
              <article key={offer.name} className={cardClassName}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-emerald-700">
                    {offer.category}
                  </span>
                  <span className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-700">
                    {offer.status}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{offer.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {offer.advantage}. Les conditions, montants et disponibilités
                  peuvent évoluer.
                </p>
                <Link
                  href={offer.url}
                  className="mt-5 inline-flex w-fit font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
                >
                  Voir la fiche et les conditions
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-sm font-semibold text-slate-600">
            Information commerciale
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Plateformes actuellement sans parrainage public
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Ces plateformes restent présentées sur Afflizen à titre informatif.
            Leurs fiches ne publient aucun programme personnel de parrainage et
            renvoient uniquement vers des destinations officielles.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {platformsWithoutPublicReferral.map((platform) => (
              <article key={platform.name} className={cardClassName}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-emerald-700">
                    {platform.category}
                  </span>
                  <span className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-700">
                    Pas de parrainage public
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{platform.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {platform.description}
                </p>
                <Link
                  href={platform.url}
                  className="mt-5 inline-flex w-fit font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
                >
                  Voir la fiche informative
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Comment fonctionnent les bonus ?
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Une offre peut exiger une inscription éligible, un dépôt, un achat,
              une transaction ou un délai de validation. Les critères varient
              selon la plateforme et le pays.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Vérifiez les pays et profils éligibles.</li>
              <li>• Contrôlez le dépôt ou l’action éventuellement requis.</li>
              <li>• Consultez le délai et les règles de validation.</li>
              <li>• Vérifiez la date de fin ou la disponibilité limitée.</li>
              <li>• Relisez les conditions officielles avant toute inscription.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight">Transparence</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Certaines fiches contiennent des liens affiliés ou de parrainage.
              Afflizen peut recevoir une rémunération lorsqu’une action éligible
              est réalisée, sans coût supplémentaire direct pour le visiteur.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Aucun bonus, cashback, rendement ou avantage n’est garanti. La
              rémunération éventuelle d’Afflizen ne remplace pas la vérification
              des risques, des frais et des conditions officielles.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
