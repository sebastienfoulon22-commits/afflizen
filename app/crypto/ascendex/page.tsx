import type { Metadata } from "next";
import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";

const ASCENDEX_AFFILIATE_LINK =
  "https://m.a3dex.com/en/register?inviteCode=ELYWZJHW";

const ASCENDEX_OFFICIAL_LINK = "https://ascendex.com/";

export const metadata: Metadata = {
  title:
    "AscendEX avis 2026 : ancien BitMax, crypto, trading, frais et parrainage",
  description:
    "Notre avis sur AscendEX en 2026 : ancien BitMax.io, plateforme crypto avancée, spot, margin, futures, Earn, frais, risques, sécurité et lien de parrainage.",
  alternates: {
    canonical: "https://afflizen.com/crypto/ascendex",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AscendEX s’appelait comment avant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AscendEX s’appelait auparavant BitMax.io. Le changement de nom vers AscendEX a été annoncé en 2021.",
      },
    },
    {
      "@type": "Question",
      name: "AscendEX est-il adapté aux débutants ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AscendEX peut être utilisé par un débutant prudent, mais la plateforme vise surtout des utilisateurs crypto déjà à l’aise avec les exchanges, les frais, les ordres, le trading et les produits avancés.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on utiliser un lien de parrainage AscendEX ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, AscendEX permet d’utiliser un code ou lien d’invitation. Les avantages éventuels dépendent des conditions du programme, du pays, du compte et des règles affichées au moment de l’inscription.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les risques avec AscendEX ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les principaux risques sont la volatilité des crypto-actifs, la perte en capital, les frais, les produits avancés mal compris, les restrictions selon les pays, les changements réglementaires et les erreurs de trading.",
      },
    },
  ],
};

const strengths = [
  "Plateforme crypto connue sous l’ancien nom BitMax.io.",
  "Offre crypto complète avec spot, margin, futures et Earn selon disponibilité.",
  "Possibilité d’utiliser un lien ou code d’invitation.",
  "Alternative à comparer avec Binance, Bybit, HTX, Bitget et Kraken.",
  "Peut convenir à un utilisateur crypto déjà habitué aux exchanges.",
];

const limits = [
  "Plateforme plus avancée qu’une application crypto très débutant.",
  "Produits à risque si l’utilisateur ne comprend pas le trading crypto.",
  "Frais et conditions à vérifier directement sur AscendEX.",
  "Services, restrictions et disponibilité variables selon le pays.",
  "Les avantages de parrainage ne doivent jamais être considérés comme garantis.",
];

const useCases = [
  {
    title: "Acheter et vendre des cryptos",
    text: "AscendEX peut servir à acheter, vendre ou échanger des crypto-actifs selon les services disponibles dans ton pays.",
  },
  {
    title: "Comparer les exchanges",
    text: "La plateforme peut être comparée à Binance, Bybit, HTX, Bitget, Kraken ou Coinbase selon les frais, produits et conditions.",
  },
  {
    title: "Utiliser des outils avancés",
    text: "AscendEX met en avant des fonctionnalités comme le spot, le margin, les futures, Earn ou le copy trading selon disponibilité.",
  },
  {
    title: "Tester un lien d’invitation",
    text: "Le lien de parrainage peut donner accès à des avantages éventuels, mais uniquement si les conditions AscendEX sont respectées.",
  },
];

const ascendexSteps = [
  {
    title: "1. Vérifier le domaine et l’application",
    text: "Avant de créer un compte, vérifie que le lien ouvre bien l’environnement AscendEX attendu et que tu n’es pas redirigé vers une page douteuse.",
  },
  {
    title: "2. Utiliser le lien d’invitation",
    text: "Le lien Afflizen contient ton code d’invitation. Les avantages éventuels peuvent varier selon le pays, la période et les conditions AscendEX.",
  },
  {
    title: "3. Créer le compte et sécuriser l’accès",
    text: "Comme pour toute plateforme crypto, il faut utiliser un mot de passe solide, activer la double authentification et rester vigilant avec les emails.",
  },
  {
    title: "4. Lire les frais et les restrictions",
    text: "Les frais peuvent varier selon les produits, les volumes, le niveau du compte et les conditions en vigueur. Vérifie toujours avant de trader.",
  },
  {
    title: "5. Commencer avec prudence",
    text: "AscendEX propose des outils avancés. Le plus prudent est de commencer avec de petits montants et d’éviter les produits que tu ne comprends pas.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
              Crypto · Ancien BitMax · Trading · Parrainage
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              AscendEX avis 2026 : l’ancien BitMax à comparer avec prudence
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              AscendEX est une plateforme crypto anciennement connue sous le nom
              BitMax.io. Elle se positionne comme un exchange plutôt complet,
              avec des services de trading, du spot, du margin, des futures,
              Earn et d’autres fonctions crypto selon disponibilité. Pour
              Afflizen, AscendEX est une plateforme à classer dans la crypto
              avancée, au même niveau de prudence que HTX, Bybit ou Bitget.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <AffiliateButton
                href={ASCENDEX_AFFILIATE_LINK}
                platform="ascendex"
                category="crypto"
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                S’inscrire sur AscendEX avec l’invitation
              </AffiliateButton>

              <a
                href={ASCENDEX_OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Voir le site officiel AscendEX
              </a>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
              Les avantages liés au lien d’invitation AscendEX peuvent varier
              selon le pays, la période, les conditions du compte, les produits
              utilisés et les règles en vigueur. Avant toute inscription ou
              dépôt, vérifie toujours les informations affichées directement par
              AscendEX.
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
                <p className="font-semibold text-slate-950">Profil idéal</p>
                <p>
                  Utilisateur crypto déjà habitué aux exchanges et aux outils de
                  trading.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Point fort</p>
                <p>
                  Plateforme complète avec spot, margin, futures et Earn selon
                  disponibilité.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Point faible</p>
                <p>
                  Moins adaptée à un débutant complet qu’une plateforme très
                  simple.
                </p>
              </div>
            </div>

            <AffiliateButton
              href={ASCENDEX_AFFILIATE_LINK}
              platform="ascendex"
              category="crypto"
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Utiliser le lien AscendEX
            </AffiliateButton>
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
              La recommandation Afflizen doit donc rester prudente : AscendEX
              peut être intéressante pour un utilisateur crypto déjà à l’aise,
              mais ce n’est pas une plateforme à recommander sans nuance. Les
              frais, restrictions, conditions de parrainage, produits disponibles
              et risques doivent toujours être vérifiés avant utilisation.
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
              À quoi peut servir AscendEX ?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
              AscendEX peut servir à acheter, vendre, échanger ou trader des
              crypto-actifs selon les services disponibles dans ton pays. Son
              intérêt principal est d’élargir la comparaison Afflizen entre les
              plateformes crypto avancées.
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
              <li>1. Vérifier le lien et le domaine utilisé.</li>
              <li>2. Lire les conditions de parrainage.</li>
              <li>3. Créer le compte avec le lien Afflizen.</li>
              <li>4. Activer la sécurité du compte.</li>
              <li>5. Vérifier les frais avant toute opération.</li>
              <li>6. Commencer avec de petits montants.</li>
            </ol>

            <AffiliateButton
              href={ASCENDEX_AFFILIATE_LINK}
              platform="ascendex"
              category="crypto"
              location="usages"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Commencer avec AscendEX
            </AffiliateButton>
          </aside>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Parrainage
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Le parrainage AscendEX : utile, mais à vérifier avant inscription
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              AscendEX permet d’utiliser un lien ou un code d’invitation au
              moment de l’inscription. Cela peut donner accès à des avantages
              éventuels selon les règles en vigueur. Comme toujours avec les
              plateformes crypto, il ne faut pas créer un compte ou déposer de
              l’argent uniquement pour une récompense potentielle.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Lien d’invitation</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Le lien Afflizen contient le code d’invitation associé à
                AscendEX.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Conditions variables</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Les avantages peuvent dépendre de la région, du compte, de la
                période et des règles du programme.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Pas une raison de trader</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Un bonus potentiel ne doit jamais justifier un dépôt ou un trade
                que tu ne comprends pas.
              </p>
            </div>
          </div>

          <AffiliateButton
            href={ASCENDEX_AFFILIATE_LINK}
            platform="ascendex"
            category="crypto"
            location="parrainage"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            Utiliser le parrainage AscendEX
          </AffiliateButton>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Étapes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Comment utiliser AscendEX sans brûler les étapes ?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
              Comme pour HTX ou Bybit, le plus important est de ne pas commencer
              par les fonctions les plus risquées. Il faut d’abord comprendre le
              compte, les dépôts, les retraits, les frais, les produits proposés
              et les restrictions éventuelles.
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
              À retenir avant dépôt
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              AscendEX peut être intéressante pour comparer les plateformes
              crypto, mais un dépôt doit toujours être réfléchi. Vérifie la
              disponibilité dans ton pays, les frais, les conditions de retrait,
              les produits disponibles, les risques et les conditions du
              parrainage avant d’envoyer de l’argent.
            </p>

            <AffiliateButton
              href={ASCENDEX_AFFILIATE_LINK}
              platform="ascendex"
              category="crypto"
              location="prudence"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Vérifier AscendEX
            </AffiliateButton>
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
                  La recommandation doit rester mesurée : AscendEX peut convenir
                  à un utilisateur crypto expérimenté, mais elle n’est pas idéale
                  pour quelqu’un qui débute totalement. Les frais, restrictions,
                  conditions de parrainage et risques doivent être vérifiés avant
                  utilisation.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <AffiliateButton
                  href={ASCENDEX_AFFILIATE_LINK}
                  platform="ascendex"
                  category="crypto"
                  location="avis"
                  className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Découvrir AscendEX
                </AffiliateButton>

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