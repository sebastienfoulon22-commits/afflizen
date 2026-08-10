import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

const ETORO_OFFICIAL_LINK = "https://www.etoro.com/fr/";

export const metadata = createPageMetadata({
  title: "eToro avis 2026 : copy trading, actions, ETF et crypto",
  description: "Notre avis sur eToro en 2026 : fonctionnement, copy trading, actions, ETF, crypto, avantages, limites et points de vigilance.",
  path: "/investissement/etoro",
  type: "article",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "eToro est-il adapté aux débutants ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eToro peut convenir aux débutants grâce à une interface simple, un compte démo et des fonctionnalités comme le CopyTrader. Cela ne supprime pas le risque de perte : il faut comprendre les produits utilisés, les frais, les spreads, la fiscalité et les conditions propres à son pays.",
      },
    },
    {
      "@type": "Question",
      name: "Afflizen propose-t-il une offre cashback eToro ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Des offres eToro peuvent ponctuellement apparaître sur des plateformes de cashback externes. Afflizen ne propose actuellement aucun lien de cashback ou de parrainage eToro.",
      },
    },
    {
      "@type": "Question",
      name: "Le solde non investi sur eToro peut-il générer des intérêts ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eToro affiche actuellement un taux annuel de 2,75 % sur le solde cash disponible en USD pour les résidents européens éligibles entre 1 dollar et 50 000 dollars. Ce taux peut varier et ne doit pas être confondu avec un investissement en actions, ETF ou crypto, qui peut monter ou baisser.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les principaux risques avec eToro ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les principaux risques sont la perte en capital, la volatilité des marchés, les frais ou spreads, les erreurs de choix d’actifs, le copy trading mal compris, les conditions variables selon le pays et la fiscalité. Les crypto-actifs et les produits à effet de levier sont particulièrement risqués.",
      },
    },
  ],
};

const strengths = [
  "Interface moderne et relativement simple à prendre en main.",
  "Accès à plusieurs univers : actions, ETF, crypto et trading selon les pays.",
  "Fonction CopyTrader pour observer ou copier d’autres investisseurs.",
  "Compte démo utile pour tester sans utiliser immédiatement de capital réel.",
  "Site officiel accessible directement depuis la fiche Afflizen.",
];

const limits = [
  "Les frais, spreads et conditions doivent être vérifiés avant chaque opération.",
  "Le copy trading ne garantit aucun résultat et peut entraîner des pertes.",
  "Les crypto-actifs restent très volatils et peuvent perdre fortement en valeur.",
  "Certains produits peuvent être limités ou indisponibles selon le pays.",
  "Les offres externes éventuelles peuvent changer sans préavis.",
];

const relatedLinks = [
  {
    href: "/investissement/trade-republic",
    title: "Trade Republic",
    text: "Une alternative simple pour actions, ETF et plans d’investissement.",
  },
  {
    href: "/crypto/coinbase",
    title: "Coinbase",
    text: "Une plateforme crypto connue, plutôt orientée débutants.",
  },
  {
    href: "/crypto/binance",
    title: "Binance",
    text: "Une plateforme crypto très complète, mais plus dense à prendre en main.",
  },
  {
    href: "/cashback/igraal",
    title: "iGraal",
    text: "À consulter avant de s’inscrire sur une plateforme éligible au cashback.",
  },
];

export default function EToroPage() {
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
              Investissement · Actions · ETF · Crypto · Copy trading
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              eToro avis 2026 : une plateforme simple pour investir, copier et
              découvrir les marchés
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              eToro est une plateforme d’investissement connue pour son
              interface accessible, son univers multi-actifs et sa fonction de
              copy trading. Des offres eToro peuvent ponctuellement apparaître
              sur des plateformes de cashback externes. Afflizen ne propose
              actuellement aucun lien de cashback ou de parrainage eToro.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={ETORO_OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Voir le site officiel eToro
              </a>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
              Le bouton proposé dirige uniquement vers le site officiel eToro.
              Il ne s’agit pas d’un lien affilié et Afflizen ne reçoit aucune
              commission via ce lien.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Résumé Afflizen
            </p>

            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-950">Profil idéal</p>
                <p>
                  Débutant ou investisseur curieux qui veut une interface
                  simple.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Point fort</p>
                <p>Copy trading, compte démo et plateforme multi-actifs.</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Point faible</p>
                <p>Frais, spreads et conditions à vérifier avant d’investir.</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">
                  Disponibilité de l’offre
                </p>
                <p>
                  Aucun lien de cashback ou de parrainage eToro n’est
                  actuellement publié par Afflizen.
                </p>
              </div>
            </div>

            <p className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
              Les éventuelles offres proposées par des services externes doivent
              être vérifiées directement auprès d’eux, sans promesse Afflizen.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Catégorie</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Investissement
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              eToro se place davantage dans l’investissement et le trading que
              dans la banque en ligne classique.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">À vérifier</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Frais et spreads
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Les frais peuvent varier selon l’actif, le pays, le type de
              position et les conditions en vigueur.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Offres externes</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Disponibilité variable
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Afflizen ne publie actuellement aucun lien de cashback ou de
              parrainage eToro.
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
              Notre avis sur eToro
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              eToro est intéressant pour une personne qui veut découvrir
              plusieurs marchés depuis une seule interface : actions, ETF,
              crypto et fonctionnalités sociales. La plateforme est plus
              accessible visuellement que certains courtiers traditionnels, mais
              cette simplicité ne doit pas faire oublier les risques.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Son gros avantage marketing est le CopyTrader : tu peux observer
              d’autres investisseurs et, dans certains cas, copier leurs
              positions. C’est pratique pour comprendre des stratégies, mais ce
              n’est pas un raccourci magique. Copier quelqu’un ne garantit aucun
              résultat, et une bonne performance passée peut se retourner.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Des offres eToro peuvent ponctuellement apparaître sur des
              plateformes externes, avec leurs propres conditions. Afflizen ne
              propose actuellement aucun lien de cashback ou de parrainage eToro
              et n’en garantit ni la présence ni la validation.
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
        <div className="max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Offres externes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Cashback eToro : aucune offre publiée par Afflizen
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Des offres eToro peuvent ponctuellement apparaître sur des
            plateformes de cashback externes. Leur présence, leurs montants et
            leurs conditions peuvent évoluer. Afflizen ne propose actuellement
            aucun lien de cashback ou de parrainage eToro.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Une éventuelle offre externe reste distincte des services
            d’investissement proposés par eToro. Elle ne garantit ni gain, ni
            rendement, ni validation d’un cashback et ne doit jamais justifier à
            elle seule un dépôt ou un investissement.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Risques
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Ce qu’il faut comprendre avant d’utiliser eToro
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              eToro est simple à utiliser, mais les produits proposés peuvent
              rester risqués. Les actions peuvent baisser, les ETF peuvent
              perdre de la valeur, les crypto-actifs sont très volatils et le
              copy trading ne transforme pas automatiquement un débutant en bon
              investisseur.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Perte en capital</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Investir implique toujours un risque. Il ne faut pas engager de
                l’argent dont tu peux avoir besoin à court terme.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Crypto volatile</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Les crypto-actifs peuvent monter ou baisser très fortement. Ils
                ne bénéficient pas des mêmes protections que les dépôts
                bancaires.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Conditions locales</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Les produits disponibles, les frais, les règles fiscales et les
                restrictions peuvent varier selon le pays de résidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Pour qui ?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            eToro peut convenir si...
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu veux une plateforme simple
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              eToro peut être intéressant si tu veux une interface claire pour
              découvrir les marchés, observer des portefeuilles et tester avec
              un compte démo avant de placer de l’argent réel.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu vérifies les offres externes avec prudence
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Afflizen ne publie actuellement aucun lien de cashback ou de
              parrainage eToro. Toute offre vue ailleurs doit être vérifiée
              directement auprès du service concerné.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu acceptes de vérifier les frais
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Avant toute opération, il faut regarder le prix final, le spread,
              les frais éventuels, le type d’actif et les conditions propres au
              compte.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu ne cherches pas une garantie de rendement
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              eToro reste une plateforme d’investissement. Elle ne garantit ni
              gain, ni rendement, ni succès avec le copy trading. Les intérêts et
              offres externes éventuels ne changent pas ces risques.
            </p>
          </div>
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
                  eToro est intéressant, mais à utiliser avec méthode
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  eToro mérite une place dans la catégorie investissement
                  d’Afflizen parce que la plateforme est connue, simple à
                  comprendre et différente d’un courtier classique grâce à son
                  approche sociale. Mais la bonne approche reste prudente :
                  vérifier les frais, commencer petit, éviter les produits mal
                  compris et ne pas copier aveuglément d’autres investisseurs.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Afflizen ne propose actuellement aucun lien de cashback ou de
                  parrainage eToro. Le seul lien externe publié sur cette fiche
                  renvoie vers le site officiel eToro, sans affiliation.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/investissement"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  Voir la catégorie investissement
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
            Comparer avant de choisir
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
