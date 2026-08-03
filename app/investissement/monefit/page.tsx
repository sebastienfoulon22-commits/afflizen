import { createPageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import Link from "next/link";

const MONEFIT_OFFICIAL_LINK = "https://monefit.com/fr-fr/smartsaver/";

export const metadata = createPageMetadata({
  title: "Monefit SmartSaver : fonctionnement et risques",
  description: "Découvrez Monefit SmartSaver, une plateforme d’investissement dans des prêts accessible en France et en Belgique. Fonctionnement, rendements attendus, retraits, risques et absence de garantie bancaire.",
  path: "/investissement/monefit",
  type: "article",
});

const strengths = [
  "Plateforme d’investissement alternative liée au groupe Creditstar.",
  "Interface en français qui peut intéresser les résidents belges et français.",
  "Accès à un portefeuille de prêts européens sans gérer soi-même chaque prêt.",
  "Compte principal et placements à durée déterminée selon les conditions en vigueur.",
  "Solution à comparer pour les investisseurs qui comprennent le risque de crédit et de liquidité.",
];

const risks = [
  "Monefit SmartSaver n’est pas une banque, un compte d’épargne bancaire ou un livret réglementé.",
  "Le capital investi est exposé à un risque de perte.",
  "Les rendements affichés sont attendus ou indicatifs, jamais garantis.",
  "Monefit SmartSaver n’est pas couvert par la garantie européenne des dépôts.",
  "Les retraits peuvent dépendre de la liquidité, des remboursements de prêts et des conditions de la plateforme.",
];

const features = [
  "Compte principal avec accès plus souple aux fonds selon conditions.",
  "Placements à durée déterminée pouvant viser des rendements attendus différents selon durée et modalités.",
  "Financement indirect d’un portefeuille de prêts à la consommation accordés par des sociétés du groupe Creditstar en Europe.",
  "Retraits rapides possibles dans certaines limites, puis délais standards ou contraintes selon les montants et la liquidité.",
];

const checks = [
  "Rendement attendu actuel, modalités de calcul, conditions, frais et documents de risque.",
  "Délais de retrait, limites, liquidité, conditions de fermeture anticipée et contraintes des placements fixes.",
  "Éligibilité réelle en Belgique, en France, dans l’Espace économique européen ou en Suisse.",
  "Fiscalité applicable, absence de garantie bancaire et exposition au remboursement des prêts financés.",
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
    text: "Un outil pour suivre son patrimoine, ses comptes et ses investissements.",
  },
  {
    href: "/investissement/tradingview",
    title: "TradingView",
    text: "Un outil de graphiques et d’analyse pour suivre les marchés financiers.",
  },
  {
    href: "/investissement/veracash",
    title: "VeraCash",
    text: "Une solution liée aux métaux précieux, avec risques et frais à vérifier.",
  },
  {
    href: "/investissement/gold-avenue",
    title: "GOLD AVENUE",
    text: "Une plateforme pour acheter, stocker et vendre des métaux précieux physiques.",
  },
  {
    href: "/banques-en-ligne",
    title: "Banques en ligne",
    text: "Comparer les comptes mobiles et applications financières suivies.",
  },
];

const faq = [
  {
    question: "Monefit SmartSaver est-il disponible en Belgique ?",
    answer:
      "Monefit indique accepter les résidents ou citoyens de l’Espace économique européen et de Suisse, notamment en Belgique. L’éligibilité et les conditions doivent toutefois être vérifiées au moment de l’inscription.",
  },
  {
    question: "Monefit SmartSaver est-il disponible en France ?",
    answer:
      "Monefit indique accepter les résidents ou citoyens de l’Espace économique européen et de Suisse, notamment en France. Les conditions, documents demandés et restrictions éventuelles doivent être vérifiés sur le site officiel.",
  },
  {
    question: "Monefit est-il une banque ?",
    answer:
      "Non. Monefit SmartSaver est un produit d’investissement lié au financement d’un portefeuille de prêts. Ce n’est pas une banque, un compte d’épargne bancaire ou un livret réglementé.",
  },
  {
    question: "L’argent placé chez Monefit est-il garanti ?",
    answer:
      "Non. Monefit SmartSaver n’est pas couvert par la garantie européenne des dépôts et ne doit pas être présenté comme un dépôt bancaire traditionnel. Le capital est à risque.",
  },
  {
    question: "Comment Monefit génère-t-il les rendements ?",
    answer:
      "Les fonds investis contribuent au financement d’un portefeuille de prêts à la consommation accordés par des sociétés du groupe Creditstar en Europe. Les revenus dépendent notamment du remboursement de ces prêts.",
  },
  {
    question: "Peut-on perdre son capital ?",
    answer:
      "Oui. Le capital investi peut être perdu, notamment si les prêts financés ne sont pas remboursés comme prévu ou si la plateforme rencontre des difficultés.",
  },
  {
    question: "Les rendements sont-ils garantis ?",
    answer:
      "Non. Les rendements affichés doivent être compris comme des rendements attendus ou cibles. Ils ne sont pas garantis, et les performances passées ne garantissent pas les résultats futurs.",
  },
  {
    question: "Peut-on retirer son argent à tout moment ?",
    answer:
      "Il ne faut pas présenter la liquidité comme garantie. Monefit peut proposer un montant limité de retraits rapides selon les conditions en vigueur. Les montants supérieurs peuvent suivre un délai standard, et les retraits restent soumis à la liquidité et aux conditions de la plateforme.",
  },
  {
    question: "Quelle est la différence entre le compte principal et les placements à durée fixe ?",
    answer:
      "Le compte principal peut offrir davantage de souplesse selon les conditions, tandis que les placements à durée déterminée peuvent viser des rendements attendus différents avec des contraintes supplémentaires. Les modalités exactes doivent être vérifiées sur le site officiel.",
  },
  {
    question: "Afflizen utilise-t-il déjà un lien affilié Monefit ?",
    answer:
      "Non. Afflizen utilise actuellement un lien officiel non affilié vers Monefit SmartSaver. Un lien affilié professionnel pourra être ajouté ultérieurement après acceptation dans le programme partenaire.",
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

function MonefitOfficialButton({
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
      href={MONEFIT_OFFICIAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-platform="Monefit SmartSaver"
      data-category="investissement"
      data-location={location}
      data-link-url={MONEFIT_OFFICIAL_LINK}
      className={className}
    >
      {children}
    </a>
  );
}

export default function MonefitPage() {
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
              Monefit SmartSaver : investir dans un portefeuille de prêts
              européens
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Une plateforme d’investissement alternative accessible en France
              et en Belgique, avec des rendements attendus mais un capital non
              garanti. Monefit SmartSaver doit être analysé comme un produit
              d’investissement, pas comme un compte bancaire garanti.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <MonefitOfficialButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir Monefit SmartSaver
              </MonefitOfficialButton>

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
                Monefit SmartSaver. Un lien affilié professionnel pourra être
                ajouté ultérieurement après acceptation dans le programme
                partenaire.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              Monefit SmartSaver
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une plateforme liée au groupe Creditstar pour investir dans un
                portefeuille de prêts à la consommation en Europe.
              </p>

              <p>
                À réserver aux utilisateurs qui comprennent le risque de crédit,
                le risque de liquidité et l’absence de garantie bancaire.
              </p>
            </div>

            <MonefitOfficialButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel Monefit
            </MonefitOfficialButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Prêts européens
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Produit</p>
            <p className="mt-2 font-semibold text-slate-950">
              Investissement
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Public</p>
            <p className="mt-2 font-semibold text-slate-950">
              France et Belgique
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Garantie</p>
            <p className="mt-2 font-semibold text-slate-950">
              Dépôts non couverts
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Présentation de Monefit SmartSaver
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Monefit SmartSaver est une plateforme d’investissement liée au
              groupe Creditstar. L’argent investi contribue au financement d’un
              portefeuille de prêts à la consommation accordés par des sociétés
              du groupe Creditstar en Europe.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              SmartSaver n’est pas un produit d’épargne bancaire. Il ne doit pas
              être présenté comme une banque, un livret réglementé, un dépôt
              garanti ou un placement sans risque.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Comment fonctionne SmartSaver ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Le principe est de mettre des fonds à disposition d’un portefeuille
              de prêts. Les revenus attendus dépendent notamment du remboursement
              de ces prêts, des conditions de la plateforme, des durées choisies
              et du fonctionnement réel du portefeuille.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">
              Monefit pour les résidents belges et français
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Monefit indique accepter les résidents ou citoyens de l’Espace
              économique européen et de Suisse, notamment en Belgique et en
              France. L’éligibilité et les conditions doivent toutefois être
              vérifiées au moment de l’inscription.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Les règles fiscales peuvent différer selon le pays et la situation
              personnelle. Cette page ne fournit pas de conseil fiscal ou
              financier personnalisé.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Rendements attendus : ce qu’il faut comprendre
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Monefit peut afficher des rendements attendus ou cibles selon les
              produits et durées. Ces rendements ne sont pas garantis, le capital
              reste à risque et les performances passées ne garantissent pas les
              résultats futurs. Le taux actuel doit toujours être vérifié sur le
              site officiel.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Retraits et liquidité : délais et limites possibles
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Il ne faut pas écrire que tous les retraits sont instantanés.
              Monefit peut proposer un montant limité de retraits rapides selon
              les conditions en vigueur. Les montants supérieurs peuvent suivre
              un délai standard, et les retraits restent soumis à la liquidité et
              aux conditions de la plateforme.
            </p>
          </section>

          <section className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-red-950">
              Absence de garantie bancaire
            </h2>

            <p className="mt-4 text-base leading-7 text-red-950">
              Monefit SmartSaver n’est pas couvert par la garantie européenne
              des dépôts et n’est pas couvert comme un dépôt bancaire
              traditionnel. L’investissement dépend notamment du remboursement
              des prêts financés, et le capital peut être perdu.
            </p>
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
                Risques et limites importantes
              </h2>

              <ul className="mt-5 space-y-3">
                {risks.map((item) => (
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

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Conditions à vérifier sur le site officiel
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Les conditions, rendements, durées, frais, modalités de retrait et
              documents juridiques peuvent évoluer. Avant tout investissement,
              il faut consulter les informations officielles, les conditions
              générales et l’avertissement sur les risques de Monefit.
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

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Programme d’affiliation professionnel
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Monefit dispose d’un programme d’affiliation professionnel destiné
              notamment aux sites de contenu, blogueurs, créateurs, comparateurs
              et sites européens traitant d’investissement ou de finance. Ce
              programme est distinct d’un parrainage personnel. Afflizen n’est
              pas encore accepté dans ce programme et n’utilise donc pas encore
              d’URL suivie personnelle.
            </p>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Avis Afflizen sur Monefit SmartSaver
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Monefit SmartSaver peut être une solution à étudier pour les
              utilisateurs qui comprennent le risque de crédit, le risque de
              liquidité, l’absence de garantie bancaire et le risque de perte en
              capital. Elle ne doit pas être confondue avec un compte d’épargne
              bancaire classique.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Afflizen ne recommande pas d’y placer une épargne de précaution,
              de l’argent nécessaire à court terme, la totalité d’un patrimoine
              ou de l’argent que l’utilisateur ne peut pas se permettre de
              perdre. Cette page ne donne pas de recommandation personnalisée
              d’allocation.
            </p>

            <div className="mt-8">
              <MonefitOfficialButton
                location="avis"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Découvrir Monefit SmartSaver
              </MonefitOfficialButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              FAQ Monefit SmartSaver
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

            <div className="mt-8">
              <MonefitOfficialButton
                location="faq"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Découvrir Monefit SmartSaver
              </MonefitOfficialButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser Monefit
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Le capital est exposé à un risque de perte.</li>
              <li>• Les rendements attendus ne sont pas garantis.</li>
              <li>• Il n’y a pas de garantie européenne des dépôts.</li>
              <li>• Les retraits peuvent être soumis à délais et liquidité.</li>
              <li>• Les documents de risque officiels doivent être lus.</li>
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
            conseil financier, fiscal ou juridique personnalisé. Monefit
            SmartSaver est présenté comme un produit d’investissement, pas comme
            une banque, un compte d’épargne bancaire, un livret réglementé, un
            dépôt garanti ou un conseiller financier. Le capital est à risque,
            les rendements ne sont pas garantis, les performances passées ne
            garantissent pas les résultats futurs et la garantie européenne des
            dépôts ne s’applique pas. Vérifiez toujours les documents officiels
            avant toute décision.
          </p>
        </div>
      </section>
    </main>
  );
}
