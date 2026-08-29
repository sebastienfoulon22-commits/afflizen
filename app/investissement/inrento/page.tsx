import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import Link from "next/link";

const INRENTO_AFFILIATE_LINK =
  "https://c.trackmytarget.com/?a=x295dc&i=20ctay";

export const metadata = createPageMetadata({
  title: "InRento avis : investir dans l'immobilier dès 500 €",
  description:
    "Découvrez InRento, plateforme européenne de financement participatif immobilier accessible dès 500 €. Fonctionnement, bonus sous conditions, risques, France et Belgique.",
  path: "/investissement/inrento",
  type: "article",
});

const steps = [
  {
    title: "Créer et vérifier son compte",
    text: "L’inscription implique une vérification d’identité et l’ouverture d’un compte de paiement compatible avec la plateforme.",
  },
  {
    title: "Étudier un projet",
    text: "Chaque projet possède ses propres caractéristiques, documents, durée, sûretés, frais, rendement attendu et facteurs de risque.",
  },
  {
    title: "Investir à partir de 500 €",
    text: "L’utilisateur choisit son montant dans les limites du projet et confirme avoir lu les informations essentielles avant d’investir.",
  },
  {
    title: "Suivre les éventuelles distributions",
    text: "Les intérêts, remboursements ou autres distributions dépendent du projet et du respect de ses obligations par le porteur de projet.",
  },
];

const projectTypes = [
  "Logements et immeubles résidentiels existants ou à transformer.",
  "Projets de rénovation, conversion ou amélioration d’actifs immobiliers.",
  "Hôtels, hébergements et autres actifs liés à l’accueil selon les projets disponibles.",
  "Biens générant ou visant des revenus locatifs, avec des modalités propres à chaque financement.",
];

const strengths = [
  "Accès à des projets immobiliers européens à partir de 500 €.",
  "Possibilité de répartir progressivement son capital entre plusieurs projets, sans que cela supprime le risque.",
  "Informations propres à chaque projet pour étudier la durée, les sûretés, le porteur et les risques.",
  "Plateforme de financement participatif disposant d’une licence vérifiable auprès de la Banque de Lituanie.",
  "Marché secondaire disponible pour certaines positions selon l’offre, la demande, les frais et les conditions en vigueur.",
];

const risks = [
  "Le capital n’est pas garanti et une perte partielle ou totale reste possible.",
  "Le porteur de projet peut subir un retard, un défaut ou rencontrer des difficultés à rembourser.",
  "Une sûreté immobilière ne garantit ni le remboursement intégral ni un délai rapide de récupération.",
  "La revente peut être difficile ou impossible : le marché secondaire ne garantit pas la liquidité.",
  "Les performances passées et rendements affichés ne préjugent pas des résultats futurs.",
  "Un investissement immobilier participatif peut immobiliser l’argent pendant toute la durée du projet, voire davantage en cas de difficulté.",
];

const suitableProfiles = [
  "Investisseur majeur qui comprend le financement participatif et le risque de crédit.",
  "Personne capable d’immobiliser au moins 500 € sans utiliser son épargne de précaution.",
  "Profil prêt à lire la documentation de chaque projet avant toute décision.",
  "Investisseur qui accepte une liquidité limitée et diversifie prudemment ses placements.",
];

const checks = [
  "Le document d’informations clés, la durée et les modalités de remboursement du projet.",
  "L’identité et la situation financière du porteur de projet.",
  "La nature, le rang et les limites des éventuelles sûretés immobilières.",
  "Les frais de paiement, de marché secondaire, d’inactivité ou liés à un retard.",
  "La fiscalité applicable en Belgique ou en France selon votre situation.",
  "Les conditions exactes de l’offre promotionnelle au moment de l’inscription et du premier investissement.",
];

const relatedLinks = [
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Comparer InRento avec les autres plateformes d’investissement suivies.",
  },
  {
    href: "/investissement/monefit",
    title: "Monefit SmartSaver",
    text: "Une autre solution d’investissement alternatif, liée à un portefeuille de prêts européens.",
  },
  {
    href: "/investissement/bullionvault",
    title: "BullionVault",
    text: "Une plateforme consacrée à l’achat, la vente et la conservation de métaux précieux.",
  },
  {
    href: "/investissement/finary",
    title: "Finary",
    text: "Un outil pour centraliser et suivre son patrimoine et ses investissements.",
  },
];

const faq = [
  {
    question: "Qu’est-ce qu’InRento ?",
    answer:
      "InRento est une plateforme européenne de financement participatif qui met en relation des investisseurs et des porteurs de projets immobiliers. L’investissement prend généralement la forme d’un financement lié à un projet, avec des conditions et risques propres à celui-ci.",
  },
  {
    question: "Quel est le montant minimum pour investir sur InRento ?",
    answer:
      "InRento indique un investissement minimum de 500 €. Certains projets ou certaines offres peuvent toutefois appliquer des conditions particulières qu’il faut vérifier avant de confirmer une opération.",
  },
  {
    question: "InRento est-il disponible en Belgique et en France ?",
    answer:
      "L’offre partenaire présentée par Afflizen indique actuellement la Belgique et la France comme pays éligibles. L’acceptation finale dépend du profil, de la vérification d’identité et des conditions d’InRento au moment de l’inscription.",
  },
  {
    question: "Quel bonus InRento est proposé via Afflizen ?",
    answer:
      "L’offre partenaire annonce actuellement 20 € de bonus après un premier investissement éligible de 500 €, ou 50 € après un premier investissement éligible de 1 000 €. Elle est annoncée jusqu’à fin septembre 2026 et reste soumise aux conditions du programme.",
  },
  {
    question: "Le rendement d’un projet InRento est-il garanti ?",
    answer:
      "Non. Aucun rendement ni remboursement n’est garanti. Le capital peut être perdu, les paiements peuvent être retardés et les performances passées ne permettent pas de prévoir les résultats futurs.",
  },
  {
    question: "Peut-on revendre facilement un investissement InRento ?",
    answer:
      "InRento propose un marché secondaire, mais une vente dépend de la présence d’un acheteur, des conditions du projet et des frais applicables. Il ne faut donc pas considérer l’investissement comme liquide ou disponible à tout moment.",
  },
  {
    question: "InRento est-il une banque ou un produit d’épargne garanti ?",
    answer:
      "Non. InRento est un prestataire de services de financement participatif, pas une banque ni un livret d’épargne. Les investissements ne sont pas couverts par le système de garantie des dépôts.",
  },
  {
    question: "Le lien InRento d’Afflizen est-il affilié ?",
    answer:
      "Oui. Les CTA InRento utilisent un lien affilié professionnel. Afflizen peut percevoir une commission si une action éligible est réalisée via ce lien, sans surcoût annoncé pour l’utilisateur. La rémunération éventuelle ne modifie pas notre approche éditoriale.",
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

function InRentoButton({
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
      href={INRENTO_AFFILIATE_LINK}
      platform="InRento"
      category="investissement"
      location={location}
      className={className}
    >
      {children}
    </AffiliateButton>
  );
}

export default function InRentoPage() {
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
              Investissement immobilier participatif
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              InRento : investir dans des projets immobiliers européens dès 500 €
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              InRento permet de financer des projets immobiliers européens à
              partir de 500 €. Le capital et les rendements ne sont pas garantis :
              chaque projet doit être étudié selon sa durée, ses sûretés, son
              porteur et ses risques.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <InRentoButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir l’offre InRento
              </InRentoButton>

              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Offre partenaire InRento sous conditions
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                L’offre annonce 20 € de bonus après un premier investissement
                éligible de 500 €, ou 50 € après un premier investissement
                éligible de 1 000 €. Elle est annoncée jusqu’à fin septembre 2026
                pour la Belgique et la France. Vérifiez les conditions avant de
                vous inscrire : le bonus et les investissements ne sont pas garantis.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">Résumé Afflizen</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight">InRento</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une plateforme européenne pour financer des projets immobiliers
                à partir de 500 €.
              </p>
              <p>
                À envisager uniquement avec un horizon adapté, une diversification
                prudente et la capacité d’assumer une perte en capital.
              </p>
            </div>
            <InRentoButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Voir InRento
            </InRentoButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Type", "Crowdfunding immobilier"],
            ["Minimum", "500 €"],
            ["Disponibilité", "Belgique et France"],
            ["Capital", "Non garanti"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 font-semibold text-slate-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Qu’est-ce qu’InRento ?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              InRento est une plateforme européenne de financement participatif
              immobilier. Elle met en relation des investisseurs avec des porteurs
              de projets qui recherchent un financement lié à un actif immobilier.
              L’investisseur ne devient pas automatiquement propriétaire direct du
              bien : il finance un projet selon les documents et contrats proposés.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              UAB Inrento figure au registre de la Banque de Lituanie comme
              prestataire de services de financement participatif. Cette licence
              encadre l’activité de la plateforme, mais ne garantit ni le capital,
              ni le rendement, ni le remboursement d’un projet.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Comment fonctionne InRento ?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-emerald-700">
                    Étape {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Quels projets immobiliers peut-on financer ?</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Les projets accessibles évoluent. InRento présente notamment des
              actifs résidentiels, des rénovations, des conversions et des projets
              d’hébergement dans plusieurs pays européens.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {projectTypes.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-emerald-950">
              Bonus InRento : 20 € ou 50 € selon l’investissement
            </h2>
            <p className="mt-4 leading-7 text-emerald-950">
              L’offre partenaire communiquée à Afflizen prévoit actuellement 20 €
              après un premier investissement éligible de 500 €, ou 50 € après un
              premier investissement éligible de 1 000 €. La Belgique et la France
              sont indiquées comme éligibles et la promotion est annoncée jusqu’à
              fin septembre 2026.
            </p>
            <p className="mt-4 text-sm leading-6 text-emerald-950">
              Le premier investissement doit être validé pour déclencher l’action.
              L’offre, sa durée, son attribution et ses critères peuvent évoluer.
              Un bonus ne compense jamais le risque de perte lié à l’investissement.
            </p>
            <div className="mt-6">
              <InRentoButton
                location="offer"
                className="inline-flex rounded-full bg-emerald-700 px-7 py-4 font-semibold text-white transition hover:bg-emerald-800"
              >
                Consulter l’offre InRento
              </InRentoButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">InRento en Belgique et en France</h2>
            <p className="mt-4 leading-7 text-slate-700">
              L’offre partenaire indique que les résidents de Belgique et de France
              sont éligibles. L’accès reste soumis aux contrôles d’identité, au
              profil de l’investisseur, aux moyens de paiement et aux conditions
              en vigueur au moment de l’inscription.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              La fiscalité des intérêts et gains éventuels dépend du pays et de la
              situation personnelle. Afflizen ne fournit pas de conseil fiscal ou
              financier personnalisé.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-950">Avantages potentiels</h2>
              <ul className="mt-5 space-y-3">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-emerald-950">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-amber-950">Risques et limites</h2>
              <ul className="mt-5 space-y-3">
                {risks.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-amber-950">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-red-950">Capital non garanti et liquidité limitée</h2>
            <p className="mt-4 leading-7 text-red-950">
              Investir via InRento comporte un risque de perte partielle ou totale.
              Les investissements ne sont pas couverts par la garantie des dépôts
              ni par un mécanisme garantissant le remboursement. Même lorsqu’un
              projet prévoit une sûreté immobilière, sa réalisation peut prendre du
              temps et ne pas couvrir toutes les sommes dues.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">À quel profil InRento peut-il convenir ?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {suitableProfiles.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 leading-7 text-slate-700">
              InRento ne convient pas à une personne qui recherche un placement
              garanti, une disponibilité immédiate de son argent ou une solution
              pour son épargne de précaution.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Points à vérifier avant d’investir</h2>
            <div className="mt-6 grid gap-4">
              {checks.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="avis" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Avis Afflizen sur InRento</h2>
            <p className="mt-4 leading-7 text-slate-700">
              InRento peut être étudié par les investisseurs qui souhaitent accéder
              au financement immobilier européen avec un ticket initial de 500 €.
              La sélection de projets, les documents disponibles et le cadre du
              financement participatif apportent une structure utile à l’analyse.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Notre avis reste prudent : le bonus ne doit pas guider seul une
              décision, la diversification ne supprime pas le risque et chaque
              projet exige une lecture attentive. Il faut pouvoir conserver son
              investissement jusqu’à son terme et supporter une éventuelle perte.
            </p>
            <div className="mt-8">
              <InRentoButton
                location="review"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Découvrir InRento
              </InRentoButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">FAQ InRento</h2>
            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <InRentoButton
                location="faq"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir l’offre InRento
              </InRentoButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">À retenir</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Investissement minimum annoncé : 500 €.</li>
              <li>• Belgique et France indiquées comme éligibles.</li>
              <li>• Capital et rendements non garantis.</li>
              <li>• Liquidité potentiellement limitée.</li>
              <li>• Documentation de chaque projet à lire intégralement.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Pages liées</h2>
            <div className="mt-5 space-y-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-emerald-300 hover:bg-white"
                >
                  <p className="font-semibold">{link.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{link.text}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-bold text-amber-950">Lien affilié</h2>
            <p className="mt-3 text-sm leading-6 text-amber-950">
              Les CTA InRento utilisent un lien affilié professionnel. Afflizen
              peut recevoir une commission après une action éligible, sans surcoût
              annoncé pour l’utilisateur. Cela ne garantit ni le bonus, ni le
              rendement, ni le remboursement de l’investissement.
            </p>
          </div>
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette fiche est une présentation éditoriale et ne constitue pas un
            conseil financier, fiscal ou juridique personnalisé. Investir dans le
            financement participatif immobilier comporte un risque de perte
            partielle ou totale, de retard et d’illiquidité. Les investissements
            ne sont pas couverts par la garantie des dépôts. Les offres, frais,
            projets et conditions peuvent évoluer. Consultez les documents officiels
            et le document d’informations clés de chaque projet avant toute décision.
          </p>
        </div>
      </section>
    </main>
  );
}
