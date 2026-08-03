import { createPageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import Link from "next/link";

const AMERICAN_EXPRESS_BELGIQUE_OFFICIAL_LINK =
  "https://www.americanexpress.com/be/fr/cartes/comparer/";

const primaryButtonClassName =
  "inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700";

const secondaryButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-50";

export const metadata = createPageMetadata({
  title: "American Express Belgique : comparer les cartes",
  description: "Comparez les cartes American Express proposées aux résidents belges. Blue, Green, Gold et Platinum : avantages, cotisations, assurances, limites et conditions à vérifier.",
  path: "/cartes-et-paiements/american-express-belgique",
  type: "article",
});

const cardRows = [
  {
    name: "Carte Blue",
    positioning: "Entrée de gamme",
    points: "Programme de points selon les conditions de la carte",
    insurance: "Protections éventuelles à vérifier dans les documents officiels",
    travel: "Services généralement plus limités que sur les cartes supérieures",
    feeLevel: "Niveau de cotisation à vérifier",
    profile: "Utilisateur belge qui veut découvrir l'écosystème American Express",
  },
  {
    name: "Carte Green",
    positioning: "Usage quotidien",
    points: "Membership Rewards selon l'offre disponible",
    insurance: "Garanties et exclusions variables selon les conditions",
    travel: "Avantages possibles selon la carte et les activations requises",
    feeLevel: "Cotisation intermédiaire à vérifier",
    profile: "Résident belge qui souhaite une carte de paiement avec programme de fidélité",
  },
  {
    name: "Carte Gold",
    positioning: "Voyage et avantages intermédiaires",
    points: "Accumulation de points selon les dépenses éligibles",
    insurance: "Assurances achats ou voyages selon plafonds et exclusions",
    travel: "Avantages voyage possibles selon les conditions en vigueur",
    feeLevel: "Cotisation plus élevée à comparer avec l'usage réel",
    profile: "Utilisateur belge qui voyage ou veut davantage de services",
  },
  {
    name: "Carte Platinum",
    positioning: "Services premium",
    points: "Programme de fidélité selon conditions actualisées",
    insurance: "Garanties potentiellement plus larges, à vérifier en détail",
    travel: "Services premium et accès voyage possibles selon disponibilité",
    feeLevel: "Cotisation premium à examiner attentivement",
    profile: "Résident belge qui recherche des services haut de gamme",
  },
];

const advantages = [
  "Comparaison possible entre plusieurs niveaux de cartes pour particuliers en Belgique.",
  "Programme Membership Rewards selon la carte, les dépenses éligibles et les conditions en vigueur.",
  "Assurances, services ou avantages de voyage possibles selon la carte choisie.",
  "Cartes supplémentaires ou services associés selon l'offre disponible.",
  "Intérêt potentiel pour des utilisateurs belges qui valorisent le service, la fidélité et les voyages.",
];

const limits = [
  "Offre réservée aux résidents belges éligibles, légalement et fiscalement domiciliés en Belgique.",
  "Une cotisation peut s'appliquer et son niveau dépend de la carte choisie.",
  "Une demande de carte reste soumise aux critères d'acceptation et à l'approbation d'American Express.",
  "Des critères de revenus, justificatifs ou conditions d'éligibilité peuvent exister.",
  "Les assurances, plafonds, exclusions, activations et limites varient selon la carte.",
  "La carte peut être moins largement acceptée que Visa ou Mastercard chez certains commerçants.",
  "Les campagnes de bienvenue et de parrainage peuvent changer sans préavis.",
  "Les tarifs, conditions générales et documents d'assurance officiels doivent être consultés avant toute demande.",
];

const checks = [
  "La domiciliation légale et fiscale en Belgique.",
  "La carte réellement adaptée à l'usage prévu : quotidien, voyages, services ou premium.",
  "Le niveau de cotisation et les conditions exactes de la carte choisie.",
  "Les assurances incluses, leurs plafonds, exclusions et modalités d'activation.",
  "L'acceptation American Express chez les commerçants utilisés régulièrement.",
  "Les conditions actualisées du programme Membership Rewards et des campagnes éventuelles.",
];

const relatedLinks = [
  {
    href: "/cartes-et-paiements",
    title: "Cartes et paiements",
    text: "Revenir à la catégorie cartes, paiements, wallets et solutions de paiement.",
  },
  {
    href: "/cartes-et-paiements/wise",
    title: "Wise",
    text: "Une solution multidevise pour paiements et transferts internationaux.",
  },
  {
    href: "/cartes-et-paiements/curve-pay",
    title: "Curve Pay",
    text: "Une application pour regrouper plusieurs cartes dans un wallet.",
  },
  {
    href: "/banques-en-ligne",
    title: "Banques en ligne",
    text: "Comparer les banques en ligne et comptes mobiles suivis par Afflizen.",
  },
];

const faq = [
  {
    question: "American Express est-il disponible en Belgique ?",
    answer:
      "Oui, American Express propose des cartes pour particuliers en Belgique. Cette page concerne uniquement les cartes belges et les personnes éligibles légalement et fiscalement domiciliées en Belgique.",
  },
  {
    question: "Cette page est-elle valable pour les résidents français ?",
    answer:
      "Non. Cette page concerne uniquement les cartes proposées par American Express Belgique aux personnes légalement et fiscalement domiciliées en Belgique. Les offres françaises sont distinctes.",
  },
  {
    question: "Quelles cartes American Express existent en Belgique ?",
    answer:
      "American Express Belgique peut proposer notamment des cartes Blue, Green, Gold et Platinum. Les caractéristiques exactes, cotisations, services et conditions doivent être vérifiés sur le site officiel.",
  },
  {
    question: "American Express est-il une banque ?",
    answer:
      "Non. Cette page présente American Express Belgique comme un émetteur ou fournisseur de cartes de paiement avec services associés, pas comme une banque belge traditionnelle ou un compte courant.",
  },
  {
    question: "La carte est-elle acceptée partout ?",
    answer:
      "Non. American Express peut être acceptée par de nombreux commerçants, mais pas partout. Il faut vérifier l'acceptation chez les commerçants importants avant de dépendre uniquement de cette carte.",
  },
  {
    question: "Les cartes American Express sont-elles gratuites ?",
    answer:
      "Pas nécessairement. Une cotisation peut s'appliquer et son montant dépend de la carte et des conditions en vigueur. Les tarifs doivent être vérifiés directement sur le site officiel belge.",
  },
  {
    question: "Comment fonctionne Membership Rewards ?",
    answer:
      "Membership Rewards est un programme de fidélité qui peut permettre de collecter des points selon les dépenses éligibles, la carte et les conditions applicables. Les règles, exclusions et valeurs d'utilisation peuvent évoluer.",
  },
  {
    question: "Les assurances sont-elles identiques sur toutes les cartes ?",
    answer:
      "Non. Les assurances, plafonds, exclusions, délais, franchises et modalités d'activation varient selon la carte. Les documents d'assurance officiels doivent être consultés avant de souscrire.",
  },
  {
    question: "Faut-il disposer d'un revenu minimum ?",
    answer:
      "Des critères d'acceptation, de revenus ou de solvabilité peuvent exister selon la carte. Une demande reste soumise à l'approbation d'American Express Belgique.",
  },
  {
    question: "Existe-t-il un programme de parrainage en Belgique ?",
    answer:
      "American Express Belgique propose le programme Amex Friends pour les titulaires éligibles, selon les conditions en vigueur. Les récompenses, règles de partage et campagnes peuvent changer.",
  },
  {
    question: "Afflizen utilise-t-il déjà un lien de parrainage American Express ?",
    answer:
      "Non. Afflizen utilise actuellement un lien officiel non affilié vers American Express Belgique. Un lien personnel pourra être ajouté ultérieurement, sous réserve des conditions du programme Amex Friends.",
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

function AmericanExpressBelgiqueOfficialButton({
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
      href={AMERICAN_EXPRESS_BELGIQUE_OFFICIAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-platform="American Express Belgique"
      data-category="cartes-et-paiements"
      data-location={location}
      data-link-url={AMERICAN_EXPRESS_BELGIQUE_OFFICIAL_LINK}
      className={className}
    >
      {children}
    </a>
  );
}

export default function AmericanExpressBelgiquePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
          <div>
            <Link
              href="/cartes-et-paiements"
              className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            >
              Voir la catégorie cartes & paiements
            </Link>

            <div className="mb-4 flex flex-wrap gap-3">
              <p className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                Cartes et paiements
              </p>
              <p className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
                Belgique uniquement
              </p>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              American Express Belgique : comparer les cartes et leurs avantages
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Découvrez les cartes American Express proposées aux résidents
              belges, leurs services, leurs cotisations et les conditions à
              vérifier avant de souscrire.
            </p>

            <p className="mt-4 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-950">
              Offre réservée aux résidents belges éligibles.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <AmericanExpressBelgiqueOfficialButton
                location="hero"
                className={primaryButtonClassName}
              >
                Comparer les cartes American Express Belgique
              </AmericanExpressBelgiqueOfficialButton>

              <a href="#cartes" className={secondaryButtonClassName}>
                Voir les cartes Blue, Green, Gold et Platinum
              </a>
            </div>

            <div className="mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-semibold text-slate-950">
                Lien officiel belge provisoire, sans affiliation Afflizen
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Afflizen utilise actuellement un lien officiel non affilié vers
                American Express Belgique. Un lien personnel de parrainage pourra
                être ajouté ultérieurement, sous réserve des conditions du
                programme Amex Friends.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Belgique uniquement
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight">
              American Express Belgique
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Cartes de paiement avec programme de fidélité, services et
              assurances selon la carte choisie. Les caractéristiques exactes
              doivent être vérifiées sur le site officiel.
            </p>
            <AmericanExpressBelgiqueOfficialButton
              location="summary"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Comparer les cartes
            </AmericanExpressBelgiqueOfficialButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Pays</p>
            <p className="mt-2 text-2xl font-bold text-slate-950">Belgique</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Page destinée uniquement aux résidents belges éligibles.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Cartes</p>
            <p className="mt-2 text-2xl font-bold text-slate-950">
              Blue, Green, Gold, Platinum
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Disponibilité et caractéristiques à vérifier.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Usage</p>
            <p className="mt-2 text-2xl font-bold text-slate-950">
              Paiement & fidélité
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Services variables selon la carte et les conditions.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Afflizen</p>
            <p className="mt-2 text-2xl font-bold text-slate-950">
              Lien officiel
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Aucun lien de parrainage actuellement utilisé.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Présentation d’American Express Belgique
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                American Express Belgique propose des cartes de paiement pour
                particuliers pouvant inclure, selon la carte et les conditions en
                vigueur, un programme de fidélité, des assurances, des services
                liés aux voyages ou des expériences spécifiques. Cette page aide
                à comparer les grands positionnements sans recopier les tarifs ni
                les avantages détaillés susceptibles de changer.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                American Express n’est pas présenté ici comme une banque belge
                traditionnelle, un compte courant, une carte gratuite dans tous
                les cas, un produit d’investissement ou une solution
                systématiquement plus avantageuse qu’une Visa ou Mastercard.
              </p>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-amber-950">
                Belgique uniquement : qui peut demander une carte ?
              </h2>
              <p className="mt-4 text-base leading-8 text-amber-950">
                Offre réservée aux résidents belges éligibles. Cette page ne
                vise pas les résidents français et ne doit pas être utilisée pour
                les diriger vers une offre belge. Les cartes françaises,
                conditions françaises et éventuels programmes français sont
                distincts.
              </p>
              <p className="mt-4 text-base leading-8 text-amber-950">
                Une demande de carte peut dépendre de critères d’acceptation, de
                revenus, de solvabilité et de justificatifs. L’approbation finale
                appartient à American Express Belgique.
              </p>
            </section>

            <section
              id="cartes"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="text-3xl font-bold text-slate-950">
                Les principales cartes disponibles
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                American Express Belgique peut proposer plusieurs cartes pour
                particuliers, notamment Blue, Green, Gold et Platinum. Le tableau
                ci-dessous reste volontairement qualitatif : les caractéristiques
                exactes doivent être vérifiées sur le site officiel.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid bg-slate-950 px-4 py-3 text-sm font-semibold text-white md:grid-cols-6">
                  <p>Carte</p>
                  <p>Positionnement</p>
                  <p>Points</p>
                  <p>Assurances</p>
                  <p>Voyage</p>
                  <p>Profil potentiel</p>
                </div>
                {cardRows.map((card) => (
                  <div
                    key={card.name}
                    className="grid gap-3 border-t border-slate-200 px-4 py-4 text-sm leading-6 text-slate-700 md:grid-cols-6"
                  >
                    <p className="font-semibold text-slate-950">{card.name}</p>
                    <p>{card.positioning}</p>
                    <p>{card.points}</p>
                    <p>{card.insurance}</p>
                    <p>{card.travel}</p>
                    <p>{card.profile}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Les caractéristiques exactes doivent être vérifiées sur le site
                officiel.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-950">
                  Carte Blue : positionnement général
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  La carte Blue peut être comprise comme une porte d’entrée vers
                  l’univers American Express Belgique. Son intérêt dépend du
                  niveau de cotisation, des services inclus et de l’usage réel de
                  la carte.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-950">
                  Carte Green : positionnement général
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  La carte Green peut viser un usage quotidien avec programme de
                  fidélité et services associés selon les conditions. Les frais,
                  avantages et assurances doivent être comparés à l’usage prévu.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-950">
                  Carte Gold : positionnement général
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  La carte Gold peut intéresser les résidents belges qui
                  recherchent davantage de services, notamment autour des voyages
                  ou assurances. Les plafonds, exclusions et conditions doivent
                  être lus avec attention.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-950">
                  Carte Platinum : positionnement général
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  La carte Platinum se positionne sur des services premium. Elle
                  doit être évaluée avec prudence, car la cotisation, les
                  avantages et les conditions doivent être cohérents avec
                  l’utilisation réelle.
                </p>
              </article>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Membership Rewards
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Membership Rewards est le programme de fidélité associé à
                certaines cartes American Express. Il peut permettre de cumuler
                des points sur des dépenses éligibles, puis de les utiliser selon
                les possibilités et conditions en vigueur. Les règles
                d’accumulation, exclusions, valeurs d’utilisation et campagnes
                peuvent évoluer.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Assurances et avantages de voyage
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Selon la carte, certains services peuvent comprendre des
                assurances achats ou voyages, des avantages liés aux déplacements,
                des services spécifiques ou un accès à certains espaces de
                voyage. Ces éléments ne sont pas identiques sur toutes les cartes
                et peuvent nécessiter une activation, un paiement avec la carte
                ou le respect de conditions précises.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Acceptation chez les commerçants
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                American Express peut être acceptée dans de nombreux commerces,
                mais son acceptation peut être moins large que Visa ou Mastercard
                chez certains commerçants. Avant de dépendre uniquement d’une
                carte American Express, il faut vérifier l’acceptation auprès des
                commerces, hôtels, plateformes ou services utilisés
                régulièrement.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Cotisations et critères à vérifier
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Une cotisation peut s’appliquer et son niveau dépend de la carte.
                Des critères d’acceptation, de revenus, de solvabilité ou de
                justificatifs peuvent exister. Les tarifs, conditions générales,
                documents d’assurance et informations d’éligibilité doivent être
                consultés directement sur le site officiel belge.
              </p>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
              <h2 className="text-xl font-bold text-emerald-950">
                Avantages potentiels
              </h2>
              <ul className="mt-4 space-y-3">
                {advantages.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-emerald-950"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-xl font-bold text-amber-950">
                Limites et vigilance
              </h2>
              <ul className="mt-4 space-y-3">
                {limits.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-amber-950"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Programme Amex Friends
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            American Express Belgique propose le programme Amex Friends,
            permettant aux titulaires éligibles de partager un lien personnalisé
            et de recevoir une récompense lorsqu’une demande de carte est
            approuvée, selon les conditions en vigueur. Afflizen ne possède pas
            encore ce lien personnel.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Si un lien personnel est ajouté plus tard, les conditions du
            programme devront être vérifiées à nouveau, ainsi que l’autorisation
            de publication publique sur Afflizen. Le lien devra rester belge et
            ne viser que des personnes légalement et fiscalement domiciliées en
            Belgique.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Avis Afflizen sur American Express Belgique
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            American Express Belgique peut être intéressante pour certains
            résidents belges qui recherchent une carte de paiement avec programme
            de fidélité, services de voyage ou assurances selon la carte choisie.
            L’intérêt réel dépend toutefois de la cotisation, de l’acceptation
            chez les commerçants, des avantages effectivement utilisés et des
            conditions d’éligibilité.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Cette page ne constitue pas un conseil financier ou assurantiel. Les
            documents officiels restent la référence.
          </p>
          <div className="mt-6">
            <AmericanExpressBelgiqueOfficialButton
              location="avis"
              className={primaryButtonClassName}
            >
              Comparer les cartes American Express Belgique
            </AmericanExpressBelgiqueOfficialButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              FAQ American Express Belgique
            </h2>
            <div className="mt-6 space-y-4">
              {faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="font-semibold text-slate-950">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-xl font-bold text-amber-950">
                À vérifier avant de demander une carte
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-950">
                {checks.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">Pages liées</h2>
              <div className="mt-4 space-y-3">
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Belgique uniquement
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Comparer les cartes American Express Belgique
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200">
            Offre réservée aux résidents belges éligibles. Vérifiez les cartes,
            cotisations, assurances, conditions d’acceptation et documents
            officiels avant toute demande.
          </p>
          <div className="mt-6">
            <AmericanExpressBelgiqueOfficialButton
              location="final"
              className="inline-flex rounded-full bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
            >
              Comparer les cartes American Express Belgique
            </AmericanExpressBelgiqueOfficialButton>
          </div>
        </div>
      </section>
    </main>
  );
}
