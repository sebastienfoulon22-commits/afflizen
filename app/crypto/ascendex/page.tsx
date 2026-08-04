import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import CryptoAvailabilityNotice, {
  SuspendedRegistrationMessage,
} from "@/components/CryptoAvailabilityNotice";

export const metadata = createPageMetadata({
  title: "AscendEX : cessation des opérations et informations",
  description: "Informations sur la cessation des opérations d’AscendEX depuis le 1er juillet 2026, les retraits limités et les précautions à prendre.",
  path: "/crypto/ascendex",
  type: "article",
});

const strengths = [
  "Plateforme crypto connue sous l’ancien nom BitMax.io.",
  "Historique d’une offre comprenant spot, margin, futures et Earn avant la cessation.",
  "Accès limité aux retraits annoncé pour les comptes existants.",
  "Alternative à comparer avec Binance, Bybit, HTX, Bitget et Kraken.",
  "Fiche maintenue pour informer les anciens utilisateurs et documenter la cessation.",
];

const limits = [
  "Plateforme plus avancée qu’une application crypto très débutant.",
  "Produits à risque si l’utilisateur ne comprend pas le trading crypto.",
  "Frais et conditions à vérifier directement sur AscendEX.",
  "Inscriptions, dépôts, trading, swap, staking, lending et promotions arrêtés.",
  "AscendEX a annoncé la cessation de ses opérations au 1er juillet 2026.",
];

const useCases = [
  {
    title: "Acheter et vendre des cryptos",
    text: "Ces services ont cessé. La fiche les conserve uniquement pour expliquer l’activité passée de la plateforme.",
  },
  {
    title: "Comparer les exchanges",
    text: "La plateforme peut être comparée à Binance, Bybit, HTX, Bitget, Kraken ou Coinbase selon les frais, produits et conditions.",
  },
  {
    title: "Utiliser des outils avancés",
    text: "Spot, margin, futures, Earn et copy trading sont décrits à titre historique et ne sont plus proposés depuis la cessation.",
  },
  {
    title: "Retirer des actifs existants",
    text: "Les anciens utilisateurs doivent suivre les instructions officielles relatives à l’accès limité aux retraits.",
  },
];

const ascendexSteps = [
  {
    title: "1. Vérifier l’annonce officielle",
    text: "Consulte l’annonce de cessation publiée par AscendEX et méfie-toi des domaines ou messages non officiels.",
  },
  {
    title: "2. Ne pas créer de nouveau compte",
    text: "Les nouvelles inscriptions et les programmes de recommandation ont pris fin avec la cessation des opérations.",
  },
  {
    title: "3. Sécuriser l’accès existant",
    text: "Les anciens utilisateurs doivent protéger leur accès et utiliser uniquement le canal officiel pour retirer leurs actifs.",
  },
  {
    title: "4. Suivre les modalités de retrait",
    text: "Vérifie les actifs concernés, les réseaux pris en charge et les éventuels délais dans les instructions officielles.",
  },
  {
    title: "5. Rester vigilant",
    text: "La cessation peut susciter des tentatives d’hameçonnage : ne communique jamais tes identifiants ou codes de sécurité.",
  },
];

const relatedLinks = [
  {
    href: "/crypto/binance",
    title: "Binance",
    text: "Une plateforme crypto très complète, à comparer avec AscendEX.",
  },
  {
    href: "/crypto/bybit",
    title: "Bybit",
    text: "Une plateforme crypto avancée orientée trading.",
  },
  {
    href: "/crypto/htx",
    title: "HTX",
    text: "Un autre exchange crypto avancé à utiliser avec prudence.",
  },
  {
    href: "/crypto/kraken",
    title: "Kraken",
    text: "Une plateforme crypto reconnue, souvent appréciée pour son sérieux.",
  },
];

export default function AscendexPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
              Crypto · Ancien BitMax · Cessation des opérations
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              AscendEX : cessation des opérations depuis le 1er juillet 2026
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              AscendEX, anciennement BitMax.io, proposait des services de trading,
              du spot, du margin, des futures, Earn et d’autres fonctions crypto.
              Cette fiche est désormais conservée comme information historique
              et pour orienter les anciens utilisateurs vers les modalités
              officielles de retrait.
            </p>

            <CryptoAvailabilityNotice
              title="AscendEX a cessé ses opérations"
              level="unavailable"
            >
              <p>
                AscendEX a annoncé la cessation de ses opérations à compter du
                1er juillet 2026. Les nouvelles inscriptions, dépôts, opérations
                de trading, swaps, produits de staking ou de lending et programmes
                promotionnels ne sont plus disponibles.
              </p>
              <p>
                Un accès limité aux retraits reste annoncé pour les comptes
                existants. Afflizen ne propose aucun lien d’inscription ou de
                parrainage vers AscendEX.
              </p>
              <p>
                L’AMF avait également publié un avertissement concernant
                AscendEX. Les anciens utilisateurs doivent suivre uniquement les
                instructions officielles de retrait et éviter les sites ou
                interlocuteurs non vérifiés.
              </p>
            </CryptoAvailabilityNotice>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <SuspendedRegistrationMessage />
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
              Les anciens liens d’invitation ont été retirés. Les utilisateurs
              disposant déjà d’un compte doivent suivre uniquement les
              instructions officielles relatives aux retraits.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Résumé Afflizen
            </p>

            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-950">Ancien nom</p>
                <p>AscendEX s’appelait auparavant BitMax.io.</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Public concerné</p>
                <p>
                  Anciens utilisateurs devant vérifier leur accès et leurs
                  possibilités de retrait.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Situation</p>
                <p>
                  Opérations cessées depuis le 1er juillet 2026; retraits limités
                  annoncés pour les comptes existants.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Vigilance</p>
                <p>
                  Aucun nouveau dépôt, échange ou produit de rendement n’est
                  disponible.
                </p>
              </div>
            </div>

            <SuspendedRegistrationMessage className="mt-6" />
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Catégorie</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Crypto avancée
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              AscendEX est davantage un exchange crypto complet qu’une simple
              application pour acheter quelques cryptos.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">À vérifier</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Frais et produits
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Les frais, produits disponibles et conditions peuvent varier selon
              le pays, le compte et le type d’opération.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Attention</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Risque crypto
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Les cryptos sont volatiles. Les produits avancés peuvent entraîner
              des pertes rapides s’ils sont mal compris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Avis Afflizen
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Notre avis sur AscendEX
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-700">
              AscendEX mérite une page sur Afflizen parce que c’est une
              plateforme crypto connue des utilisateurs qui comparent plusieurs
              exchanges. Son ancien nom, BitMax.io, peut aussi être utile pour le
              SEO, car certains utilisateurs recherchent encore la plateforme
              sous son ancien branding.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-700">
              L’intérêt principal d’AscendEX est de compléter la comparaison
              entre plateformes crypto avancées. Là où Coinbase est plus simple
              pour débuter, AscendEX se rapproche davantage de plateformes comme
              Bybit, HTX, Bitget ou Binance, avec plus d’outils mais aussi plus
              de points à vérifier.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-700">
              Depuis la cessation annoncée au 1er juillet 2026, Afflizen ne
              recommande aucune nouvelle utilisation d’AscendEX. La priorité des
              anciens utilisateurs est de consulter les modalités officielles de
              retrait et de sécuriser leur accès.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">
                Les avantages
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">Les limites</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {limits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Usages
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Quels usages sont encore possibles sur AscendEX ?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
              Les opérations d’achat, de vente, d’échange et de trading ont pris
              fin. AscendEX annonce uniquement un accès limité aux retraits pour
              les comptes existants; la fiche conserve les autres usages à titre
              historique.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">
              Parcours recommandé
            </h3>

            <ol className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
              <li>1. Lire l’annonce officielle de cessation.</li>
              <li>2. Ne pas créer de nouveau compte.</li>
              <li>3. Sécuriser l’accès à un compte existant.</li>
              <li>4. Vérifier les modalités de retrait.</li>
              <li>5. Utiliser uniquement les canaux officiels.</li>
              <li>6. Se méfier des tentatives d’hameçonnage.</li>
            </ol>

            <SuspendedRegistrationMessage className="mt-6" />
          </aside>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Cessation
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Les inscriptions et programmes promotionnels ont pris fin
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              AscendEX a annoncé la fin des nouvelles inscriptions, dépôts,
              échanges, produits de rendement et programmes de recommandation.
              Afflizen a supprimé son ancien lien d’invitation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Lien supprimé</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Aucun lien ou code d’invitation AscendEX n’est actif sur cette
                fiche.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Retraits limités</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Les détenteurs d’un compte existant doivent suivre les modalités
                officielles de retrait publiées par AscendEX.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Vigilance</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Une cessation d’activité peut attirer des tentatives
                d’hameçonnage; utilisez uniquement les canaux officiels.
              </p>
            </div>
          </div>

          <SuspendedRegistrationMessage className="mt-8 max-w-xl" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Étapes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Que faire après la cessation d’AscendEX ?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
              Il n’est plus question de commencer à utiliser la plateforme. Les
              étapes ci-dessous concernent uniquement la vérification de
              l’annonce et la récupération éventuelle d’actifs par un ancien
              utilisateur.
            </p>

            <div className="mt-8 space-y-5">
              {ascendexSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">
              À retenir pour un compte existant
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              N’effectue aucun nouveau dépôt. Consulte l’annonce officielle,
              vérifie les modalités de retrait et protège tes identifiants contre
              les tentatives d’hameçonnage.
            </p>

            <SuspendedRegistrationMessage className="mt-6" />
          </aside>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Verdict
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  AscendEX complète bien la catégorie crypto, mais doit rester
                  une page prudente
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  AscendEX ajoute une plateforme supplémentaire à la partie
                  crypto avancée d’Afflizen. C’est utile pour le SEO, notamment
                  grâce à l’ancien nom BitMax.io, et pour créer des comparatifs
                  plus complets entre exchanges.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Afflizen ne recommande plus AscendEX pour une nouvelle
                  utilisation. La fiche reste en ligne pour informer sur la
                  cessation et orienter les anciens utilisateurs vers les sources
                  officielles.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <SuspendedRegistrationMessage />

                <Link
                  href="/crypto"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  Voir la catégorie crypto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            À lire aussi
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Comparer AscendEX avec d’autres plateformes crypto
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
