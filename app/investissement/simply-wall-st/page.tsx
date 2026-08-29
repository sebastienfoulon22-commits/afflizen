import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import Link from "next/link";

const SIMPLY_WALL_ST_AFFILIATE_LINK = "https://goto.simplywall.st/zzD1Or";

export const metadata = createPageMetadata({
  title: "Simply Wall St avis : analyse d’actions et portefeuille",
  description:
    "Découvrez Simply Wall St pour analyser des actions, utiliser le Snowflake, suivre un portefeuille et filtrer des titres. Essai Premium de 14 jours sous conditions.",
  path: "/investissement/simply-wall-st",
  type: "article",
});

const analysisSections = [
  {
    title: "Valorisation",
    text: "Le rapport confronte plusieurs approches, dont des estimations de juste valeur, des ratios et des comparaisons avec le marché ou le secteur.",
  },
  {
    title: "Croissance future",
    text: "Les prévisions disponibles synthétisent notamment les attentes de chiffre d’affaires, de bénéfices et de flux de trésorerie.",
  },
  {
    title: "Performance passée",
    text: "L’outil présente l’évolution historique des revenus, résultats, marges et mesures de rentabilité lorsqu’elles sont disponibles.",
  },
  {
    title: "Santé financière",
    text: "Le bilan, la dette, la liquidité et la capacité à couvrir les engagements sont regroupés pour faciliter leur lecture.",
  },
  {
    title: "Dividendes",
    text: "Le rapport examine le rendement, l’historique, la couverture et les prévisions de dividendes selon les données disponibles.",
  },
];

const strengths = [
  "Des rapports visuels qui structurent rapidement les données fondamentales.",
  "Un Snowflake utile pour repérer les forces et faiblesses à approfondir.",
  "Un suivi de portefeuille avec rendements, dividendes et répartition des positions.",
  "Un screener combinant marchés, secteurs et critères fondamentaux.",
  "Des watchlists pour suivre les entreprises et leurs évolutions importantes.",
  "Des données financières issues principalement de S&P Global Market Intelligence.",
];

const limits = [
  "Les modèles et estimations reposent sur des hypothèses qui peuvent se révéler inexactes.",
  "Le Snowflake simplifie l’information et ne remplace pas l’étude des chiffres détaillés.",
  "La couverture et les estimations disponibles varient selon les entreprises.",
  "Certaines fonctions et limites d’utilisation dépendent de l’abonnement choisi.",
  "Les données peuvent intégrer un délai de mise à jour après une publication financière.",
  "Aucun score, scénario de valorisation ou consensus ne garantit une performance future.",
];

const profiles = [
  {
    title: "Investisseur débutant",
    text: "Pour apprendre à lire les principaux piliers d’une analyse fondamentale sans commencer par un tableau de données brut.",
  },
  {
    title: "Investisseur autonome",
    text: "Pour présélectionner des actions, suivre un portefeuille et confronter plusieurs hypothèses avant une décision personnelle.",
  },
  {
    title: "Investisseur long terme",
    text: "Pour suivre la qualité financière, la croissance, la valorisation et les dividendes plutôt que les mouvements de très court terme.",
  },
];

const relatedLinks = [
  {
    href: "/investissement/tradingview",
    title: "TradingView",
    text: "Une plateforme de graphiques, alertes et suivi des marchés financiers.",
  },
  {
    href: "/investissement/finary",
    title: "Finary",
    text: "Un outil pour centraliser et analyser son patrimoine global.",
  },
  {
    href: "/investissement/trade-republic",
    title: "Trade Republic",
    text: "Un courtier pour investir en actions et ETF selon les produits disponibles.",
  },
  {
    href: "/investissement",
    title: "Comparatif investissement",
    text: "Comparer les plateformes d’investissement suivies par Afflizen.",
  },
];

const faq = [
  {
    question: "Qu’est-ce que Simply Wall St ?",
    answer:
      "Simply Wall St est un outil en ligne d’analyse d’actions et de suivi de portefeuille. Il transforme des données fondamentales en rapports visuels couvrant notamment la valorisation, la croissance, les performances passées, la santé financière et les dividendes.",
  },
  {
    question: "Simply Wall St est-il un courtier ?",
    answer:
      "Non. Simply Wall St est une plateforme de recherche et d’analyse. Elle ne sert pas à exécuter directement des ordres de bourse et ne remplace pas le courtier utilisé pour acheter ou vendre des titres.",
  },
  {
    question: "Comment fonctionne le Snowflake Simply Wall St ?",
    answer:
      "Le Snowflake résume visuellement plusieurs dimensions de l’analyse d’une entreprise. Il aide à repérer des points à approfondir, mais ses branches et scores ne constituent ni une recommandation d’achat ou de vente ni une garantie de performance.",
  },
  {
    question: "À quoi sert le Portfolio Demo ?",
    answer:
      "Le Portfolio Demo permet d’explorer un exemple public de portefeuille Simply Wall St. Il montre notamment les positions, les rendements, les dividendes, la comparaison avec un indice et le Portfolio Snowflake sans avoir à construire immédiatement son propre portefeuille.",
  },
  {
    question: "Quel avantage Simply Wall St est proposé via Afflizen ?",
    answer:
      "L’offre partenaire annonce actuellement un essai Premium de 14 jours au lieu de l’essai standard de 7 jours. Cet avantage et les éventuelles offres sur un premier abonnement restent soumis aux conditions en vigueur affichées lors de l’inscription.",
  },
  {
    question: "Simply Wall St est-il accessible en France et en Belgique ?",
    answer:
      "Simply Wall St est un service en ligne couvrant de nombreux marchés internationaux. Aucun blocage spécifique à la France ou à la Belgique n’a été identifié dans les sources consultées, mais les conditions de compte, d’abonnement et les fonctionnalités disponibles doivent être vérifiées au moment de l’utilisation.",
  },
  {
    question: "D’où viennent les données de Simply Wall St ?",
    answer:
      "Simply Wall St indique utiliser principalement les données de S&P Global Market Intelligence, puis appliquer ses propres méthodes de calcul et de visualisation. Les données, estimations et modèles doivent toujours être confrontés aux publications officielles des entreprises.",
  },
  {
    question: "Le lien Simply Wall St d’Afflizen est-il affilié ?",
    answer:
      "Oui. Les CTA Simply Wall St utilisent un lien affilié professionnel. Afflizen peut percevoir une commission si une action éligible est réalisée via ce lien, sans surcoût supplémentaire annoncé pour l’utilisateur. Cette rémunération éventuelle ne modifie pas notre approche éditoriale.",
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

function SimplyWallStButton({
  location,
  className,
  children,
}: {
  location: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <AffiliateButton
      href={SIMPLY_WALL_ST_AFFILIATE_LINK}
      platform="Simply Wall St"
      category="investissement"
      location={location}
      className={className}
    >
      {children}
    </AffiliateButton>
  );
}

export default function SimplyWallStPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-emerald-700">
              Analyse fondamentale et portefeuille actions
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Simply Wall St : analyser des actions avec des rapports visuels
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Simply Wall St organise les données fondamentales d’entreprises
              cotées dans des rapports visuels. Son Snowflake, son screener et
              ses outils de portefeuille facilitent la recherche, sans remplacer
              une analyse personnelle ni fournir de conseil personnalisé.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <SimplyWallStButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Essayer Simply Wall St pendant 14 jours
              </SimplyWallStButton>
              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire notre avis
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">Offre partenaire sous conditions</p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Le lien partenaire annonce actuellement un essai Premium de
                14 jours au lieu de 7 jours. La durée, l’éligibilité et les
                éventuelles offres sur un premier abonnement dépendent des
                conditions en vigueur au moment de l’inscription.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">Résumé Afflizen</p>
            <h2 className="mt-4 text-2xl font-black">Simply Wall St</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Type : recherche et analyse d’actions</li>
              <li>• Outils : Snowflake, screener et portefeuille</li>
              <li>• Données : fondamentaux et estimations</li>
              <li>• Limite : aucun résultat futur garanti</li>
            </ul>
            <SimplyWallStButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Ouvrir le Portfolio Demo
            </SimplyWallStButton>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 md:grid-cols-4">
          {[
            ["Usage", "Analyse d’actions"],
            ["Vue", "Snowflake"],
            ["Suivi", "Portefeuilles"],
            ["Conseil personnalisé", "Non"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
              <p className="mt-2 font-bold text-slate-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Qu’est-ce que Simply Wall St ?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Simply Wall St est une plateforme de recherche destinée aux
              investisseurs qui souhaitent mieux comprendre les entreprises
              cotées. Elle rassemble des données financières, des estimations
              d’analystes et des calculs propriétaires dans une interface visuelle.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Ce n’est pas un courtier : la plateforme n’exécute pas les achats
              ou ventes d’actions. Ses informations sont générales et ne tiennent
              pas compte de vos objectifs, de votre situation financière ou de
              vos besoins personnels.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">À quoi sert le Snowflake ?</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Le Snowflake condense plusieurs contrôles du modèle Simply Wall St
              en une forme visuelle. Ses branches permettent d’identifier les
              dimensions fortes ou faibles d’une entreprise et d’accéder ensuite
              aux explications détaillées du rapport.
            </p>
            <p className="mt-4 leading-7 text-slate-200">
              Cette synthèse est un point de départ, pas un verdict. Deux sociétés
              au profil visuel proche peuvent présenter des activités, risques,
              prix et perspectives très différents.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Analyser une action en cinq dimensions</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {analysisSections.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-emerald-700">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Suivi de portefeuille</h2>
            <p className="mt-4 leading-7 text-slate-700">
              L’outil Portfolio rassemble les positions et transactions pour
              présenter la valeur, les rendements réalisés et non réalisés, les
              dividendes, l’effet des devises et la comparaison avec un indice.
              Les fonctions et limites dépendent du plan utilisé.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Le Portfolio Snowflake agrège les caractéristiques des titres suivis.
              Il aide à repérer une concentration ou une faiblesse à examiner,
              sans mesurer à lui seul le risque réel de l’ensemble du patrimoine.
            </p>
          </section>

          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-emerald-950">Explorer le Portfolio Demo</h2>
            <p className="mt-4 leading-7 text-emerald-950">
              Le Portfolio Demo est un exemple public recommandé pour découvrir
              l’interface : positions, performances, dividendes, actualités,
              analyses et Snowflake de portefeuille. Les chiffres affichés sont
              ceux d’un portefeuille de démonstration, pas une promesse de résultat.
            </p>
            <div className="mt-6">
              <SimplyWallStButton
                location="demo"
                className="inline-flex rounded-full bg-emerald-700 px-7 py-4 font-semibold text-white transition hover:bg-emerald-800"
              >
                Explorer la démonstration
              </SimplyWallStButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Screener et watchlists</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Le screener filtre les actions par marché, secteur et critères
              fondamentaux comme la valorisation, la croissance, la santé
              financière, les dividendes ou la performance passée. Les résultats
              servent à construire une liste de recherche, pas une sélection garantie.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Les watchlists permettent de suivre des entreprises, de consulter
              leurs changements fondamentaux et d’organiser ses idées avant une
              éventuelle décision d’investissement.
            </p>
          </section>

          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-amber-950">Essai Premium de 14 jours</h2>
            <p className="mt-4 leading-7 text-amber-950">
              Via l’offre partenaire Afflizen, Simply Wall St annonce actuellement
              un essai Premium de 14 jours, au lieu des 7 jours affichés pour
              l’essai standard. Des offres exclusives peuvent également être
              proposées sur un premier abonnement selon les conditions en vigueur.
            </p>
            <p className="mt-4 text-sm leading-6 text-amber-900">
              Vérifiez la durée, le plan concerné, l’éligibilité et les modalités
              affichées avant de valider l’inscription ou un abonnement. Aucun
              avantage ne doit être considéré comme permanent ou garanti.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Avantages à considérer</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {strengths.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Limites à connaître</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {limits.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-red-950">Les estimations ne prédisent pas le marché</h2>
            <p className="mt-4 leading-7 text-red-950">
              Une juste valeur, un consensus, un score ou une prévision peut être
              contredit par les résultats futurs, une nouvelle information ou un
              changement de marché. Consultez les publications de l’entreprise,
              comprenez les hypothèses et construisez votre propre analyse.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Pour quel profil d’utilisateur ?</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {profiles.map((profile) => (
                <div key={profile.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold">{profile.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{profile.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Simply Wall St en France et en Belgique</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Le service fonctionne en ligne et couvre des marchés internationaux.
              Aucune restriction spécifique à la France ou à la Belgique n’a été
              identifiée dans les sources officielles consultées. L’interface,
              les données et une partie importante de l’aide restent toutefois
              principalement proposées en anglais.
            </p>
          </section>

          <section id="avis" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Avis Afflizen sur Simply Wall St</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Simply Wall St rend l’analyse fondamentale plus lisible grâce à
              une hiérarchie claire et à des visualisations cohérentes. Le
              Portfolio Demo constitue un bon moyen de comprendre l’outil avant
              d’importer ou de saisir ses propres positions.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Sa simplicité visuelle demande cependant du recul : il faut ouvrir
              le détail des calculs, vérifier les données sensibles et ne jamais
              transformer un Snowflake ou une estimation en signal automatique.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">FAQ Simply Wall St</h2>
            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <div key={item.question} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <SimplyWallStButton
                location="final"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Découvrir Simply Wall St
              </SimplyWallStButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">À retenir</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Outil d’analyse, pas courtier.</li>
              <li>• Snowflake à lire comme une synthèse.</li>
              <li>• Estimations et résultats non garantis.</li>
              <li>• Vérification personnelle indispensable.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Pages liées</h2>
            <div className="mt-5 space-y-4">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-2xl border border-slate-200 p-4 transition hover:border-emerald-300 hover:bg-emerald-50">
                  <span className="font-semibold text-slate-950">{item.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Transparence : les CTA Simply Wall St de cette page utilisent un
            lien affilié. Afflizen peut percevoir une commission si une action
            éligible est réalisée via ce lien, sans surcoût supplémentaire annoncé
            pour l’utilisateur. Cette page est informative et ne constitue pas
            un conseil financier, fiscal ou juridique personnalisé.
          </p>
        </div>
      </section>
    </main>
  );
}
