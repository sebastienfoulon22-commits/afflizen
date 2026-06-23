import type { Metadata } from "next";
import Link from "next/link";
import AffiliateButton from "../../../components/AffiliateButton";

const KRAKEN_REFERRAL_URL = "https://invite.kraken.com/JDNW/eos2efdv";

const primaryButtonClassName =
  "inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700";

const secondaryButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50";

const fullButtonClassName =
  "inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700";

export const metadata: Metadata = {
  title: "Kraken avis : frais, sécurité, avantages et inconvénients | Afflizen",
  description:
    "Notre avis sur Kraken : frais, avantages, inconvénients, sécurité, Kraken Pro, crypto disponibles, fiabilité et risques à connaître.",
  alternates: {
    canonical: "https://afflizen.com/crypto/kraken",
  },
  openGraph: {
    title: "Kraken avis : frais, sécurité, avantages et inconvénients",
    description:
      "Avis Afflizen sur Kraken : frais, sécurité, Kraken Pro, avantages, limites et risques à connaître avant inscription.",
    url: "https://afflizen.com/crypto/kraken",
    siteName: "Afflizen",
    type: "article",
  },
};

const avantages = [
  "Plateforme crypto reconnue et présente depuis de nombreuses années",
  "Interface adaptée aux débutants avec une version plus avancée via Kraken Pro",
  "Large choix de cryptomonnaies disponibles selon les pays",
  "Frais potentiellement plus intéressants sur Kraken Pro pour les utilisateurs actifs",
  "Mise en avant de la sécurité et de la preuve de réserves",
  "Cadre réglementaire européen plus structuré avec MiCA pour les clients de l’EEE",
];

const inconvenients = [
  "Les frais peuvent varier selon le type d’ordre, le moyen de paiement et la plateforme utilisée",
  "Kraken Pro peut être moins simple pour un débutant complet",
  "Certaines fonctionnalités peuvent ne pas être disponibles dans tous les pays",
  "Les cryptomonnaies restent très volatiles",
  "La plateforme est centralisée : vous ne contrôlez pas directement vos clés privées",
  "Les conditions, frais et services peuvent évoluer dans le temps",
];

const pointsCles = [
  {
    label: "Type",
    value: "Exchange crypto",
  },
  {
    label: "Profil",
    value: "Débutant à avancé",
  },
  {
    label: "Version avancée",
    value: "Kraken Pro",
  },
  {
    label: "Affiliation",
    value: "Lien de parrainage Afflizen",
  },
];

const faq = [
  {
    question: "Kraken est-il adapté aux débutants ?",
    answer:
      "Oui, Kraken peut convenir aux débutants qui veulent acheter des cryptomonnaies sur une plateforme reconnue. En revanche, il faut prendre le temps de comprendre les frais, la sécurité du compte, les risques liés aux cryptos et la différence entre l’interface simple et Kraken Pro.",
  },
  {
    question: "Quelle est la différence entre Kraken et Kraken Pro ?",
    answer:
      "Kraken est l’interface plus simple pour acheter, vendre ou convertir des cryptomonnaies. Kraken Pro s’adresse davantage aux utilisateurs actifs qui veulent passer des ordres plus précis et accéder à une grille de frais plus détaillée selon le volume et le type d’ordre.",
  },
  {
    question: "Kraken est-il gratuit ?",
    answer:
      "Non. Des frais peuvent s’appliquer selon l’opération, le moyen de paiement, la devise, le type d’ordre, l’utilisation de Kraken ou Kraken Pro, et les conditions en vigueur. Il faut toujours vérifier la grille tarifaire officielle avant de passer un ordre.",
  },
  {
    question: "Kraken est-il sécurisé ?",
    answer:
      "Kraken met fortement en avant la sécurité, la conservation des actifs et la preuve de réserves. Cela ne supprime pas tous les risques : une plateforme centralisée reste différente d’un portefeuille personnel dont vous contrôlez vous-même les clés privées.",
  },
  {
    question: "Afflizen touche-t-il une commission avec Kraken ?",
    answer:
      "Oui. Cette page contient un lien de parrainage Kraken. Si vous ouvrez un compte via ce lien, Afflizen peut recevoir une commission ou un avantage, sans coût supplémentaire direct pour vous.",
  },
];

export default function KrakenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Link
            href="/"
            className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
          >
            ← Retour à l’accueil
          </Link>

          <div className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            Crypto · Exchange · Kraken Pro
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Kraken : avis, frais, sécurité et fonctionnement
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Kraken est une plateforme crypto reconnue qui permet d’acheter,
            vendre, échanger et gérer des actifs numériques. Elle peut convenir
            aussi bien à un débutant prudent qu’à un utilisateur plus actif grâce
            à Kraken Pro, mais les frais, les risques et les conditions doivent
            être vérifiés avant chaque utilisation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <AffiliateButton
              href={KRAKEN_REFERRAL_URL}
              platform="kraken"
              category="crypto"
              location="hero"
              className={primaryButtonClassName}
            >
              Découvrir Kraken
            </AffiliateButton>

            <a href="#avis" className={secondaryButtonClassName}>
              Lire l’avis Afflizen
            </a>

            <Link href="/crypto" className={secondaryButtonClassName}>
              Voir les autres plateformes crypto
            </Link>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
            Cette page contient un lien de parrainage. Afflizen peut recevoir
            une commission ou un avantage si vous ouvrez un compte via ce lien,
            sans coût supplémentaire direct pour vous.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          {pointsCles.map((point) => (
            <div
              key={point.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-500">{point.label}</p>
              <p className="mt-2 font-semibold text-slate-950">
                {point.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Notre résumé sur Kraken
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Kraken fait partie des plateformes crypto les plus connues du
                marché. Son positionnement est plus sérieux que ludique : la
                plateforme met en avant la sécurité, la profondeur de marché,
                l’accès à de nombreux actifs numériques et des outils plus
                avancés pour les utilisateurs expérimentés.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Pour un débutant, Kraken peut être une bonne porte d’entrée à
                condition de rester simple : acheter progressivement, sécuriser
                son compte, éviter l’effet de levier et ne pas se précipiter sur
                les fonctionnalités avancées. Pour un utilisateur plus actif,
                Kraken Pro peut être plus adapté grâce aux ordres avancés et à
                une grille tarifaire plus détaillée.
              </p>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-900">
                  Rappel important
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Les cryptomonnaies sont volatiles. Vous pouvez perdre une
                  partie ou la totalité du capital investi. Les frais, services,
                  promotions, actifs disponibles et conditions peuvent changer
                  selon le pays, le profil du compte et la réglementation.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
                <h2 className="text-2xl font-bold text-emerald-950">
                  Avantages
                </h2>

                <ul className="mt-5 space-y-3">
                  {avantages.map((avantage) => (
                    <li
                      key={avantage}
                      className="flex gap-3 text-sm leading-6 text-emerald-950"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                      <span>{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-2xl font-bold text-slate-950">
                  Inconvénients
                </h2>

                <ul className="mt-5 space-y-3">
                  {inconvenients.map((inconvenient) => (
                    <li
                      key={inconvenient}
                      className="flex gap-3 text-sm leading-6 text-slate-700"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                      <span>{inconvenient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Frais, prix et conditions
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Les frais Kraken dépendent de plusieurs éléments : achat simple,
                conversion, trading sur Kraken Pro, méthode de paiement, devise,
                volume de trading et type d’ordre. Il faut donc éviter de
                comparer uniquement les frais affichés sur une seule opération.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                En règle générale, l’achat instantané est plus simple, mais peut
                être moins optimisé en frais. Kraken Pro demande plus de
                compréhension, mais peut être plus intéressant pour les
                utilisateurs qui passent des ordres plus précis et veulent mieux
                contrôler leurs coûts.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">
                  À vérifier avant d’utiliser Kraken
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• Les frais d’achat, de vente ou de conversion.</li>
                  <li>• Les frais liés au moyen de paiement utilisé.</li>
                  <li>• Les frais maker/taker sur Kraken Pro.</li>
                  <li>• Les frais de retrait crypto ou fiat.</li>
                  <li>• La disponibilité des actifs dans votre pays.</li>
                  <li>
                    • Les conditions de staking ou de récompenses, si
                    disponibles.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Kraken ou Kraken Pro : quelle différence ?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                L’interface Kraken classique est pensée pour acheter, vendre ou
                convertir des cryptomonnaies plus simplement. Elle convient
                mieux à un utilisateur qui veut réaliser des opérations de base
                sans gérer un carnet d’ordres avancé.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Kraken Pro s’adresse aux utilisateurs qui veulent plus de
                contrôle : ordres limit, carnet d’ordres, graphiques, frais
                maker/taker et exécution plus précise. C’est souvent plus
                pertinent pour un investisseur actif, mais moins intuitif pour
                un débutant complet.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Sécurité et fiabilité
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Kraken met fortement en avant la sécurité des comptes, la
                conservation des actifs et la transparence via la preuve de
                réserves. Cette approche peut rassurer les utilisateurs qui
                veulent éviter les plateformes opaques ou peu connues.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Cela ne supprime pas tous les risques. Kraken reste une
                plateforme centralisée : tant que vos cryptos restent sur la
                plateforme, vous ne les détenez pas comme sur un portefeuille
                personnel dont vous contrôlez les clés privées. Pour des montants
                importants, il peut être utile de combiner plateforme d’échange
                et stockage personnel sécurisé.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">
                  Bonnes pratiques de sécurité
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• Activer la double authentification.</li>
                  <li>• Utiliser un mot de passe unique et solide.</li>
                  <li>• Vérifier l’adresse du site avant de se connecter.</li>
                  <li>• Se méfier des faux emails et faux supports clients.</li>
                  <li>
                    • Ne pas laisser de gros montants inutilisés sur un exchange.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Pour qui Kraken est-il adapté ?
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <h3 className="font-semibold text-emerald-950">
                    Kraken peut convenir si :
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950">
                    <li>• Vous voulez utiliser une plateforme crypto reconnue.</li>
                    <li>• Vous cherchez une alternative à Binance ou Coinbase.</li>
                    <li>• Vous voulez acheter des cryptos de manière progressive.</li>
                    <li>• Vous voulez accéder à Kraken Pro plus tard.</li>
                    <li>
                      • Vous accordez de l’importance à la sécurité et à la
                      transparence.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950">
                    Kraken est moins adapté si :
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <li>• Vous cherchez une application ultra simplifiée.</li>
                    <li>• Vous ne voulez jamais comparer les frais.</li>
                    <li>• Vous ne comprenez pas encore les risques crypto.</li>
                    <li>• Vous voulez un rendement garanti.</li>
                    <li>
                      • Vous refusez de confier temporairement vos actifs à une
                      plateforme centralisée.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              id="avis"
              className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Avis Afflizen sur Kraken
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Kraken est une plateforme crypto sérieuse, particulièrement
                intéressante pour les utilisateurs qui veulent une alternative
                reconnue aux grands exchanges les plus médiatisés. Son principal
                avantage est de proposer une expérience qui peut évoluer avec le
                niveau de l’utilisateur : simple au départ, plus avancée avec
                Kraken Pro.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Notre avis est positif pour un investisseur crypto prudent qui
                veut acheter progressivement, sécuriser son compte et comprendre
                les frais avant d’agir. Pour un débutant complet, il faut éviter
                d’aller trop vite vers les fonctions avancées ou les produits
                plus risqués.
              </p>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5">
                <p className="font-semibold text-slate-950">
                  Verdict Afflizen
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Kraken est une bonne plateforme crypto à étudier pour acheter,
                  vendre et gérer des actifs numériques avec un cadre sérieux.
                  Elle reste toutefois à utiliser avec prudence, en vérifiant
                  les frais et en gardant en tête le risque de perte en capital.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <AffiliateButton
                  href={KRAKEN_REFERRAL_URL}
                  platform="kraken"
                  category="crypto"
                  location="avis"
                  className={primaryButtonClassName}
                >
                  S’inscrire sur Kraken
                </AffiliateButton>

                <Link href="/crypto" className={secondaryButtonClassName}>
                  Voir les autres plateformes crypto
                </Link>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                FAQ Kraken
              </h2>

              <div className="mt-6 space-y-5">
                {faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="font-semibold text-slate-950">
                      {item.question}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Exchange crypto
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Découvrir Kraken
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                Kraken peut être une bonne option si vous cherchez une
                plateforme crypto reconnue, avec une interface simple et une
                version plus avancée via Kraken Pro.
              </p>

              <div className="mt-6">
                <AffiliateButton
                  href={KRAKEN_REFERRAL_URL}
                  platform="kraken"
                  category="crypto"
                  location="sidebar"
                  className={fullButtonClassName}
                >
                  S’inscrire sur Kraken
                </AffiliateButton>
              </div>

              <Link
                href="/crypto"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Voir les autres plateformes crypto
              </Link>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Transparence Afflizen
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Ce bouton contient un lien de parrainage. Afflizen peut
                  recevoir une commission ou un avantage si vous ouvrez un compte
                  via ce lien. Notre avis reste indépendant et informatif.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  Risque crypto
                </p>

                <p className="mt-2 text-xs leading-5 text-amber-900">
                  Les cryptomonnaies sont volatiles. Les frais, services et
                  conditions peuvent évoluer. N’investissez pas de l’argent dont
                  vous pourriez avoir besoin à court terme.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}