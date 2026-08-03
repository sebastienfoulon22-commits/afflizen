import { createPageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import Link from "next/link";

const INVVEST_OFFICIAL_LINK = "https://invvest.co/fr";

export const metadata = createPageMetadata({
  title: "Invvest : suivi de patrimoine et portefeuilles",
  description: "Découvrez Invvest, un outil en français pour suivre son patrimoine, regrouper ses portefeuilles et analyser ses investissements. Fonctionnalités, avantages, limites et disponibilité en Belgique et en France.",
  path: "/investissement/invvest",
  type: "article",
});

const strengths = [
  "Outil en français pour suivre plusieurs portefeuilles et classes d’actifs au même endroit.",
  "Suivi possible des actions, ETF, cryptomonnaies, liquidités, immobilier et autres actifs compatibles.",
  "Ajout manuel utile lorsque certaines plateformes ou certains actifs ne sont pas synchronisés.",
  "Vision globale du patrimoine, de la répartition et des revenus passifs selon les fonctionnalités disponibles.",
  "Service à comparer pour les investisseurs belges et français qui utilisent plusieurs plateformes.",
];

const limits = [
  "Invvest n’est pas une banque, un courtier, un conseiller financier ou un gestionnaire de patrimoine réglementé.",
  "L’outil sert au suivi et à l’analyse, pas à l’achat ou la vente directe de titres.",
  "Les données affichées peuvent comporter des retards, erreurs ou différences avec les relevés officiels.",
  "Les synchronisations dépendent des établissements compatibles et peuvent évoluer.",
  "Certaines fonctionnalités peuvent nécessiter un abonnement payant dont les prix et formules peuvent changer.",
];

const assets = [
  "Actions et ETF détenus sur plusieurs plateformes selon les données ajoutées ou connectées.",
  "Cryptomonnaies, liquidités, immobilier ou autres actifs compatibles selon les fonctionnalités disponibles.",
  "Dividendes, revenus passifs et historique à analyser avec prudence selon les données disponibles.",
  "Répartition du portefeuille par actif, catégorie, zone, devise ou autre filtre selon l’offre du moment.",
];

const checks = [
  "Liste actuelle des banques, courtiers, wallets ou plateformes compatibles.",
  "Différence entre ajout manuel, import, synchronisation automatique et données réellement actualisées.",
  "Prix, formules, limitations gratuites, fonctions payantes et conditions d’abonnement.",
  "Fiabilité des données, décalages possibles et comparaison avec les relevés officiels.",
  "Fiscalité applicable en Belgique ou en France, à vérifier avec des sources adaptées.",
];

const relatedLinks = [
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Revenir à la catégorie investissement pour comparer les plateformes suivies.",
  },
  {
    href: "/investissement/finary",
    title: "Finary",
    text: "Un autre outil pour suivre son patrimoine, ses comptes et ses investissements.",
  },
  {
    href: "/investissement/tradingview",
    title: "TradingView",
    text: "Un outil de graphiques et d’analyse pour suivre les marchés financiers.",
  },
  {
    href: "/investissement/trade-republic",
    title: "Trade Republic",
    text: "Une application d’investissement à comparer pour actions, ETF et autres produits.",
  },
  {
    href: "/crypto",
    title: "Crypto",
    text: "Comparer les plateformes et outils crypto suivis par Afflizen.",
  },
  {
    href: "/banques-en-ligne",
    title: "Banques en ligne",
    text: "Comparer les comptes mobiles et applications financières suivies.",
  },
];

const faq = [
  {
    question: "Invvest est-il disponible en Belgique ?",
    answer:
      "Invvest est un service en ligne francophone qui peut intéresser les investisseurs particuliers belges. Les abonnements, connexions disponibles, fonctionnalités et conditions doivent toutefois être vérifiés sur le site officiel.",
  },
  {
    question: "Invvest est-il disponible en France ?",
    answer:
      "Invvest peut aussi intéresser les investisseurs particuliers français qui souhaitent suivre leur patrimoine et leurs portefeuilles. Il faut vérifier les fonctionnalités, prix et connexions disponibles au moment de l’inscription.",
  },
  {
    question: "Invvest est-il un courtier ?",
    answer:
      "Non. Invvest ne doit pas être présenté comme un courtier ou une plateforme d’exécution d’ordres. C’est un outil de suivi, de regroupement et d’analyse de portefeuille.",
  },
  {
    question: "Peut-on acheter des actions avec Invvest ?",
    answer:
      "Non. Invvest ne doit pas être présenté comme un service permettant directement d’acheter ou vendre des titres. Les opérations restent à effectuer sur les banques, courtiers ou plateformes concernés.",
  },
  {
    question: "Quels actifs peut-on suivre ?",
    answer:
      "Selon les fonctionnalités disponibles, Invvest peut aider à suivre actions, ETF, crypto, liquidités, immobilier, dividendes, revenus passifs ou autres actifs compatibles. La liste exacte doit être vérifiée.",
  },
  {
    question: "Peut-on connecter ses comptes ou ses courtiers ?",
    answer:
      "Certaines connexions ou synchronisations peuvent être disponibles, mais elles dépendent des établissements compatibles et peuvent évoluer. Il faut vérifier la liste actuelle sur le site officiel.",
  },
  {
    question: "Peut-on ajouter un portefeuille manuellement ?",
    answer:
      "Oui, l’ajout manuel peut être utile pour suivre des actifs ou plateformes qui ne sont pas connectés automatiquement. Les données manuelles doivent toutefois être tenues à jour par l’utilisateur.",
  },
  {
    question: "Invvest permet-il de suivre les dividendes ?",
    answer:
      "Invvest peut proposer des fonctions de suivi des dividendes et revenus passifs selon l’offre disponible. Ces données doivent être contrôlées avec les relevés officiels des courtiers ou établissements.",
  },
  {
    question: "Invvest est-il gratuit ?",
    answer:
      "Certaines fonctionnalités peuvent être gratuites et d’autres nécessiter un abonnement payant. Les formules, prix et limites peuvent évoluer et doivent être vérifiés directement sur Invvest.",
  },
  {
    question: "Les données affichées sont-elles toujours identiques à celles du courtier ?",
    answer:
      "Non. Les données peuvent comporter des retards, erreurs, différences de calcul ou écarts avec les relevés officiels. Les relevés des banques, courtiers et plateformes restent les sources à vérifier.",
  },
  {
    question: "Afflizen utilise-t-il déjà un lien affilié Invvest ?",
    answer:
      "Non. Afflizen utilise actuellement un lien officiel non affilié vers Invvest. Un lien affilié professionnel pourra être ajouté ultérieurement après inscription et validation dans le programme partenaire.",
  },
];

const faqJsonLd = {
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

function InvvestOfficialButton({
  location,
  className,
  children,
}: {
  location: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={INVVEST_OFFICIAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-platform="Invvest"
      data-category="investissement"
      data-location={location}
      data-link-url={INVVEST_OFFICIAL_LINK}
      className={className}
    >
      {children}
    </a>
  );
}

export default function InvvestPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
          <div>
            <Link
              href="/investissement"
              className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            >
              Voir la catégorie investissement
            </Link>

            <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
              Investissement
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Invvest : suivre son patrimoine et analyser ses investissements
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Un outil en français pour regrouper ses actifs, suivre ses
              portefeuilles et mieux comprendre la répartition de son patrimoine.
              Invvest sert au suivi et à l’analyse : il ne remplace pas une
              banque, un courtier ou un conseiller financier.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <InvvestOfficialButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir Invvest
              </InvvestOfficialButton>

              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Lien officiel provisoire, sans affiliation Afflizen
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Afflizen utilise actuellement un lien officiel non affilié vers
                Invvest. Un lien affilié professionnel pourra être ajouté
                ultérieurement après inscription et validation dans le programme
                partenaire.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">Invvest</h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Un outil de suivi patrimonial pour regrouper portefeuilles,
                actifs, revenus passifs et analyses selon les fonctionnalités
                disponibles.
              </p>

              <p>
                Les données doivent être contrôlées avec les sources officielles
                des banques, courtiers et plateformes utilisées.
              </p>
            </div>

            <InvvestOfficialButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel Invvest
            </InvvestOfficialButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Suivi patrimoine
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Actifs</p>
            <p className="mt-2 font-semibold text-slate-950">
              Actions, ETF, crypto
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Public</p>
            <p className="mt-2 font-semibold text-slate-950">
              Belgique et France
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Afflizen</p>
            <p className="mt-2 font-semibold text-slate-950">
              Lien officiel
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Présentation d’Invvest
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Invvest est un outil de suivi de patrimoine, de portefeuille et
              d’analyse financière. Il peut aider à regrouper plusieurs actifs,
              suivre la valeur globale d’un patrimoine, étudier une répartition
              et mieux comprendre l’évolution de ses investissements.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Invvest ne doit pas être confondu avec une banque, un courtier, un
              conseiller financier, un gestionnaire de patrimoine réglementé ou
              une solution fiscale officielle. L’utilisateur reste responsable de
              ses décisions d’investissement.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À qui s’adresse Invvest ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Invvest peut intéresser les investisseurs particuliers belges et
              français qui détiennent des actifs sur plusieurs plateformes,
              suivent plusieurs portefeuilles ou veulent une vision plus claire
              de leurs actions, ETF, cryptomonnaies, liquidités, immobilier et
              revenus passifs.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Suivi global du patrimoine
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              L’intérêt principal d’un outil comme Invvest est de regrouper les
              informations dispersées entre plusieurs comptes, courtiers,
              portefeuilles ou classes d’actifs. Cette vision globale aide à
              mieux lire une allocation, mais elle ne garantit pas de meilleure
              performance.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">
              Portefeuilles manuels et synchronisés
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              L’ajout manuel permet de renseigner soi-même certains actifs ou
              portefeuilles. La synchronisation automatique, lorsqu’elle est
              disponible, dépend des établissements compatibles, des connexions
              proposées et des conditions techniques du moment.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Il ne faut pas garantir qu’une banque, un courtier ou une
              plateforme précise est compatible. La liste actuelle des connexions
              doit être vérifiée directement sur Invvest.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Actions, ETF, crypto, immobilier et autres actifs
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Selon les fonctionnalités et abonnements disponibles, Invvest peut
              aider à suivre plusieurs types d’actifs et à comprendre leur poids
              dans le patrimoine. Les données affichées ne remplacent toutefois
              pas les relevés officiels des établissements.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {assets.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Suivi des dividendes et revenus passifs
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Invvest peut être utile pour suivre des dividendes et revenus
              passifs selon les actifs renseignés et les données disponibles.
              Ces informations doivent être considérées comme des outils de
              suivi, pas comme une source fiscale officielle ou une garantie de
              revenus futurs.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Outils d’analyse et de comparaison
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Invvest peut proposer des outils d’analyse, de comparaison,
              screeners ou données de marché selon l’offre disponible. Ces outils
              aident à observer et comprendre un portefeuille, mais ils ne
              choisissent pas automatiquement les meilleurs placements et ne
              remplacent pas un conseil financier personnalisé.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Invvest pour les utilisateurs belges et français
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Invvest est présenté ici comme un service francophone utilisable
              depuis la Belgique et la France, sous réserve des conditions,
              abonnements, connexions et fonctionnalités disponibles. Les règles
              fiscales peuvent différer selon le pays et la situation personnelle.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Version gratuite, abonnements et fonctionnalités à vérifier
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Certaines fonctionnalités peuvent être gratuites, tandis que
              d’autres peuvent nécessiter un abonnement payant. Il ne faut pas
              recopier un tarif précis sans vérification, car les prix, limites
              et formules peuvent évoluer.
            </p>

            <div className="mt-6 grid gap-4">
              {checks.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-950">
                Avantages potentiels
              </h2>

              <ul className="mt-5 space-y-3">
                {strengths.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-emerald-950"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-amber-950">
                Limites et points de vigilance
              </h2>

              <ul className="mt-5 space-y-3">
                {limits.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-amber-950"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-red-950">
              Risques d’investissement et limites des données
            </h2>

            <p className="mt-4 text-base leading-7 text-red-950">
              Les performances passées ne garantissent pas les performances
              futures et investir comporte un risque de perte en capital. Les
              données affichées par Invvest peuvent comporter des retards,
              erreurs ou écarts avec les données des courtiers, banques et
              plateformes. Les relevés officiels restent à vérifier.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Programme d’affiliation Invvest
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Invvest dispose d’un programme d’affiliation professionnel qui
              annonce actuellement une rémunération récurrente sur les
              abonnements apportés. Afflizen n’est pas encore inscrit ou accepté
              dans ce programme et ne possède pas encore d’URL suivie personnelle.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Afflizen utilise donc actuellement un lien officiel non affilié
              vers Invvest. Un lien affilié professionnel pourra être ajouté
              ultérieurement après inscription et validation dans le programme
              partenaire, sans promesse de rémunération ou d’avantage garanti
              pour l’utilisateur.
            </p>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Avis Afflizen sur Invvest
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Invvest peut être intéressant pour les investisseurs belges et
              français qui veulent centraliser leurs portefeuilles, suivre leurs
              actifs et mieux comprendre leur répartition. Il complète bien les
              outils de suivi de patrimoine et d’analyse déjà présents sur
              Afflizen.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Notre avis reste prudent : Invvest est un outil de suivi, pas une
              garantie de performance. Les données doivent être vérifiées avec
              les sources officielles, les prix et abonnements peuvent évoluer,
              et toute décision d’investissement reste sous la responsabilité de
              l’utilisateur.
            </p>

            <div className="mt-8">
              <InvvestOfficialButton
                location="avis"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Découvrir Invvest
              </InvvestOfficialButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">FAQ Invvest</h2>

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

            <div className="mt-8">
              <InvvestOfficialButton
                location="faq"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Découvrir Invvest
              </InvvestOfficialButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser Invvest
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Les connexions réellement disponibles.</li>
              <li>• Les fonctionnalités gratuites et payantes.</li>
              <li>• Les écarts possibles avec les relevés officiels.</li>
              <li>• Les prix, limites et conditions d’abonnement.</li>
              <li>• La fiscalité applicable dans son pays.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Pages liées</h2>

            <div className="mt-5 space-y-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-emerald-300 hover:bg-white"
                >
                  <p className="font-semibold text-slate-950">{link.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {link.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette page est une présentation éditoriale et ne constitue pas un
            conseil financier, fiscal ou patrimonial personnalisé. Invvest est
            présenté comme un outil de suivi et d’analyse, pas comme une banque,
            un courtier, une plateforme d’achat ou vente de titres, un
            conseiller financier, un gestionnaire de patrimoine réglementé ou une
            solution fiscale officielle. Les données peuvent comporter des
            retards, erreurs ou écarts avec les relevés officiels. Investir
            comporte un risque de perte en capital.
          </p>
        </div>
      </section>
    </main>
  );
}
