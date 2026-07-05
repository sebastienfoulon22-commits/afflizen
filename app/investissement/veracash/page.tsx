import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

const VERACASH_FRANCE_LINK = "https://www.veracash.com/fr/";
const VERACASH_BELGIQUE_LINK =
  "https://www.veracash.com/fr/campagnes/acheter-et-vendre-or-en-belgique-avec-veracash";

export const metadata: Metadata = {
  title: "VeraCash : compte or, métaux précieux et carte | Afflizen",
  description:
    "Découvrez VeraCash, une solution pour détenir des métaux précieux avec un compte et une carte. Avis Afflizen, disponibilité France et Belgique, risques, limites et liens officiels provisoires.",
  alternates: {
    canonical: "https://afflizen.com/investissement/veracash",
  },
  openGraph: {
    title: "VeraCash : compte or, métaux précieux et carte | Afflizen",
    description:
      "Découvrez VeraCash, une solution pour détenir des métaux précieux avec un compte et une carte. Avis Afflizen, disponibilité France et Belgique, risques, limites et liens officiels provisoires.",
    url: "https://afflizen.com/investissement/veracash",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const strengths = [
  "Solution française orientée détention de métaux précieux, notamment or et argent.",
  "Compte accessible en ligne avec suivi de l’épargne en métaux précieux selon les conditions en vigueur.",
  "Carte de paiement associée selon disponibilité, fonctionnement, plafonds et frais applicables.",
  "Peut intéresser les résidents belges et français qui veulent comparer une solution francophone.",
  "Approche de diversification patrimoniale à analyser avec méthode, frais et risques compris.",
];

const limits = [
  "VeraCash n’est pas une banque traditionnelle.",
  "VeraCash n’est pas un livret garanti ni un conseiller financier.",
  "L’or, l’argent et les métaux précieux fluctuent à la hausse comme à la baisse.",
  "Il existe un risque de perte en capital, notamment selon le prix d’achat, le prix de vente, les frais et l’horizon de détention.",
  "Les frais, conditions, pays éligibles, cartes, plafonds, vérification d’identité et fonctionnalités peuvent évoluer.",
];

const useCases = [
  "Diversifier une partie de son épargne vers l’or ou l’argent.",
  "Suivre des métaux précieux depuis un compte en ligne et une application.",
  "Comparer une solution adossée à des métaux avec d’autres supports d’investissement.",
  "Utiliser une carte liée au compte selon les conditions, frais et disponibilités.",
];

const products = [
  "Compte permettant de détenir des métaux précieux selon les produits disponibles et les conditions officielles.",
  "Or, argent ou autres métaux proposés selon les cours, frais, fiscalité et modalités VeraCash.",
  "Carte de paiement Mastercard selon éligibilité, plafonds, frais, pays et conditions en vigueur.",
  "Application et espace membre pour suivre le compte, les cours et les opérations selon les fonctionnalités actives.",
];

const checks = [
  "Frais d’achat, de vente, de carte, de paiement, de retrait, de change et de services éventuels.",
  "Cours appliqués, spreads, fiscalité, stockage, assurance et conditions de revente.",
  "Éligibilité France ou Belgique, vérification d’identité, documents demandés et limites d’usage.",
  "Conditions du système de parrainage VeraCash, si vous souhaitez l’utiliser plus tard.",
];

const relatedLinks = [
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Revenir à la catégorie investissement pour comparer les plateformes suivies.",
  },
  {
    href: "/investissement/tradingview",
    title: "TradingView",
    text: "Un outil de graphiques, alertes et analyse des marchés financiers.",
  },
  {
    href: "/investissement/finary",
    title: "Finary",
    text: "Un outil pour suivre son patrimoine, ses comptes et ses investissements.",
  },
  {
    href: "/investissement/saxo",
    title: "Saxo",
    text: "Un courtier en ligne international pour investisseurs autonomes.",
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
  {
    href: "/cartes-et-paiements",
    title: "Cartes et paiements",
    text: "Comparer les solutions de cartes, paiements et comptes en ligne.",
  },
];

const faq = [
  {
    question: "VeraCash est-il disponible en Belgique ?",
    answer:
      "VeraCash dispose d’une page officielle dédiée à l’achat et la vente d’or en Belgique. Les résidents belges doivent toutefois vérifier l’éligibilité, les documents demandés, les frais, la carte et les conditions directement sur VeraCash.",
  },
  {
    question: "VeraCash est-il disponible en France ?",
    answer:
      "Oui, VeraCash propose une page officielle française. Les résidents français doivent vérifier les conditions d’ouverture, la vérification d’identité, les frais, les métaux disponibles, la carte et la fiscalité applicable.",
  },
  {
    question: "VeraCash est-il une banque ?",
    answer:
      "Non. VeraCash doit être présenté comme une solution de compte adossé à des métaux précieux avec services de paiement selon conditions. Ce n’est pas une banque traditionnelle ni un livret garanti.",
  },
  {
    question: "VeraCash permet-il de détenir de l’or ?",
    answer:
      "Oui, VeraCash met en avant la détention de métaux précieux, notamment de l’or et de l’argent. Leur valeur peut toutefois varier et il existe un risque de perte en capital.",
  },
  {
    question: "Peut-on payer avec une carte VeraCash ?",
    answer:
      "VeraCash met en avant une carte de paiement Mastercard. Les frais, plafonds, pays, conditions d’utilisation et fonctionnalités de la carte doivent être vérifiés sur le site officiel.",
  },
  {
    question: "Quels sont les risques avec VeraCash ?",
    answer:
      "Les principaux risques concernent la variation du prix des métaux précieux, le risque de perte en capital, les frais, la fiscalité, les conditions de revente, la sécurité du compte et l’évolution des conditions du service.",
  },
  {
    question: "Existe-t-il un parrainage VeraCash sur Afflizen ?",
    answer:
      "VeraCash dispose d’un système de parrainage pour ses membres, mais Afflizen n’utilise pas encore de code de parrainage VeraCash. Les boutons renvoient donc pour l’instant vers les pages officielles VeraCash France et Belgique.",
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

function VeraCashOfficialButton({
  href,
  location,
  className,
  children,
}: {
  href: string;
  location: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-platform="VeraCash"
      data-category="investissement"
      data-location={location}
      data-link-url={href}
      className={className}
    >
      {children}
    </a>
  );
}

export default function VeraCashPage() {
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
              VeraCash : compte adossé aux métaux précieux et carte de paiement
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Une solution pour détenir de l’or et d’autres métaux précieux tout
              en conservant une carte de paiement, avec des risques et frais à
              bien comprendre. VeraCash peut intéresser des résidents belges et
              français qui veulent comparer une solution francophone de
              diversification patrimoniale.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <VeraCashOfficialButton
                href={VERACASH_FRANCE_LINK}
                location="hero-france"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir VeraCash France
              </VeraCashOfficialButton>

              <VeraCashOfficialButton
                href={VERACASH_BELGIQUE_LINK}
                location="hero-belgique"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir VeraCash Belgique
              </VeraCashOfficialButton>

              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Liens officiels provisoires, sans affiliation Afflizen
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Les boutons renvoient vers les pages officielles VeraCash France
                et Belgique. Ils ne sont pas présentés comme un partenariat, un
                parrainage Afflizen, une prime, un code, une réduction ou un
                avantage garanti.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              VeraCash
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une solution française pour détenir des métaux précieux via un
                compte, avec carte de paiement selon conditions.
              </p>

              <p>
                À analyser comme un outil de diversification, pas comme une
                banque classique ni un placement sans risque.
              </p>
            </div>

            <VeraCashOfficialButton
              href={VERACASH_FRANCE_LINK}
              location="sidebar-france"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel France
            </VeraCashOfficialButton>

            <VeraCashOfficialButton
              href={VERACASH_BELGIQUE_LINK}
              location="sidebar-belgique"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              Page officielle Belgique
            </VeraCashOfficialButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Métaux précieux
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Actifs</p>
            <p className="mt-2 font-semibold text-slate-950">Or et argent</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Public</p>
            <p className="mt-2 font-semibold text-slate-950">
              France et Belgique
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Afflizen</p>
            <p className="mt-2 font-semibold text-slate-950">
              Aucun code pour le moment
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Présentation rapide de VeraCash
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              VeraCash est une solution française qui permet de détenir des
              métaux précieux, notamment de l’or et de l’argent, via un compte
              accessible en ligne. Elle met aussi en avant une carte de paiement
              liée au compte, selon les conditions en vigueur.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              La fiche est classée dans Investissement, car VeraCash touche
              surtout à l’épargne en métaux précieux et à la diversification
              patrimoniale. Ce n’est pas une banque traditionnelle, un livret
              garanti ou un conseil financier personnalisé.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À quoi sert VeraCash ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              VeraCash peut servir à acheter, détenir, suivre et éventuellement
              utiliser des métaux précieux dans une logique d’épargne ou de
              diversification. L’intérêt dépend de votre situation, de votre
              compréhension des frais, de la fiscalité, de l’horizon de détention
              et de votre tolérance au risque.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">
              VeraCash pour les résidents belges et français
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              VeraCash peut être pertinent pour des utilisateurs francophones en
              France et en Belgique, sous réserve d’éligibilité, de vérification
              d’identité et de conditions à jour. Afflizen propose donc deux
              liens officiels : la page générale française et la page officielle
              VeraCash dédiée à la Belgique.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <VeraCashOfficialButton
                href={VERACASH_FRANCE_LINK}
                location="france-section"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-emerald-300 hover:bg-white/10"
              >
                <span className="font-semibold text-emerald-300">
                  VeraCash France
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-200">
                  Accéder à la page officielle française.
                </span>
              </VeraCashOfficialButton>

              <VeraCashOfficialButton
                href={VERACASH_BELGIQUE_LINK}
                location="belgique-section"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-emerald-300 hover:bg-white/10"
              >
                <span className="font-semibold text-emerald-300">
                  VeraCash Belgique
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-200">
                  Accéder à la page officielle dédiée à la Belgique.
                </span>
              </VeraCashOfficialButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Compte, métaux précieux et carte : ce qu’il faut comprendre
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              VeraCash mélange plusieurs usages : détention de métaux précieux,
              suivi du compte, conversion ou revente selon conditions, et carte
              de paiement. Il faut bien distinguer l’épargne en or ou argent du
              solde d’un compte bancaire classique.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {products.map((item) => (
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
                Limites et risques à connaître
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

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Or, argent et diversification : rester prudent
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Les métaux précieux peuvent intéresser certains profils pour
              diversifier une partie de leur patrimoine. Mais l’or et l’argent
              ne montent pas toujours, ne génèrent pas automatiquement de revenu,
              et leur prix peut baisser. Ils ne doivent pas être présentés comme
              un placement sans risque.
            </p>

            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="text-xl font-bold text-red-950">
                Risque de perte en capital
              </h3>
              <p className="mt-3 text-sm leading-6 text-red-950">
                La valeur des métaux précieux peut varier fortement. Selon le
                moment d’achat, le cours de revente, les frais et la fiscalité,
                vous pouvez récupérer moins que le montant engagé.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Frais, carte et conditions : à vérifier sur le site officiel
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Les frais VeraCash doivent être vérifiés directement sur les pages
              officielles. Le coût réel dépend des métaux utilisés, du cours, des
              opérations, de la carte, des retraits, des paiements, de la
              fiscalité, du stockage et des conditions applicables au moment de
              l’utilisation.
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
              Parrainage VeraCash : pas encore utilisé sur Afflizen
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              VeraCash dispose d’un système de parrainage pour ses membres, mais
              Afflizen n’utilise pas encore de code de parrainage VeraCash. Les
              boutons de cette page renvoient donc pour l’instant vers les pages
              officielles France et Belgique, sans promesse de prime ou
              d’avantage.
            </p>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Avis Afflizen sur VeraCash
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              VeraCash est une fiche intéressante pour Afflizen car elle se
              situe entre épargne en métaux précieux, diversification
              patrimoniale et usage de paiement. Elle peut parler à des
              utilisateurs français ou belges qui veulent comparer une solution
              francophone liée à l’or et à l’argent.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Notre avis reste prudent : VeraCash n’est pas une banque
              traditionnelle, pas un livret garanti et pas un conseiller
              financier. Les métaux précieux peuvent fluctuer et entraîner une
              perte en capital. Avant toute inscription, il faut vérifier les
              frais, la carte, la fiscalité, les conditions et l’éligibilité sur
              le site officiel.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <VeraCashOfficialButton
                href={VERACASH_FRANCE_LINK}
                location="avis-france"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir VeraCash France
              </VeraCashOfficialButton>

              <VeraCashOfficialButton
                href={VERACASH_BELGIQUE_LINK}
                location="avis-belgique"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir VeraCash Belgique
              </VeraCashOfficialButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              FAQ VeraCash
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

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <VeraCashOfficialButton
                href={VERACASH_FRANCE_LINK}
                location="faq-france"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir VeraCash France
              </VeraCashOfficialButton>

              <VeraCashOfficialButton
                href={VERACASH_BELGIQUE_LINK}
                location="faq-belgique"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir VeraCash Belgique
              </VeraCashOfficialButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser VeraCash
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Les frais d’achat, vente, carte, retrait et paiement.</li>
              <li>• Les cours appliqués et les conditions de revente.</li>
              <li>• L’éligibilité France ou Belgique et les documents demandés.</li>
              <li>• La fiscalité applicable aux métaux précieux.</li>
              <li>• Le risque de perte en capital.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Liens officiels
            </h2>

            <div className="mt-5 space-y-3">
              <VeraCashOfficialButton
                href={VERACASH_FRANCE_LINK}
                location="official-links-france"
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-emerald-300 hover:bg-white"
              >
                <span className="font-semibold text-slate-950">
                  VeraCash France
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">
                  Page officielle française.
                </span>
              </VeraCashOfficialButton>

              <VeraCashOfficialButton
                href={VERACASH_BELGIQUE_LINK}
                location="official-links-belgique"
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-emerald-300 hover:bg-white"
              >
                <span className="font-semibold text-slate-950">
                  VeraCash Belgique
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">
                  Page officielle dédiée à la Belgique.
                </span>
              </VeraCashOfficialButton>
            </div>
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
            conseil financier, fiscal ou juridique personnalisé. VeraCash n’est
            pas présenté comme une banque traditionnelle ni comme un livret
            garanti. Les métaux précieux fluctuent, et il existe un risque de
            perte en capital. Les frais, conditions, pays éligibles, cartes,
            plafonds, fiscalité et fonctionnalités peuvent évoluer. Vérifiez
            toujours les informations officielles VeraCash France ou Belgique
            avant toute inscription ou utilisation.
          </p>
        </div>
      </section>
    </main>
  );
}
