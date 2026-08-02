import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

const BULLIONVAULT_OFFICIAL_LINK = "https://or.bullionvault.fr/";

export const metadata: Metadata = {
  title: "BullionVault : acheter et stocker de l'or | Afflizen",
  description:
    "Découvrez BullionVault, une plateforme en français pour acheter, vendre et stocker de l'or et d'autres métaux précieux. Fonctionnement, frais à vérifier, risques et disponibilité en Belgique et en France.",
  alternates: {
    canonical: "https://afflizen.com/investissement/bullionvault",
  },
  openGraph: {
    title: "BullionVault : acheter et stocker de l'or | Afflizen",
    description:
      "Découvrez BullionVault, une plateforme en français pour acheter, vendre et stocker de l'or et d'autres métaux précieux. Fonctionnement, frais à vérifier, risques et disponibilité en Belgique et en France.",
    url: "https://afflizen.com/investissement/bullionvault",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const metals = [
  "Or physique, généralement sous forme de fractions de grandes barres professionnelles.",
  "Argent physique selon les marchés, frais, fiscalité et conditions disponibles.",
  "Platine pour les utilisateurs qui veulent comparer plusieurs métaux précieux.",
  "Palladium selon les conditions, la disponibilité et les lieux de stockage proposés.",
];

const strengths = [
  "Plateforme internationale spécialisée dans l'achat, la vente et la conservation de métaux précieux.",
  "Interface en français utile pour les résidents belges, français et utilisateurs francophones.",
  "Accès à des fractions de grandes barres professionnelles conservées dans des coffres.",
  "Possibilité de comparer plusieurs métaux : or, argent, platine et palladium.",
  "Solution à étudier pour diversifier une partie de son patrimoine avec prudence.",
];

const risks = [
  "BullionVault n'est pas une banque, un compte d'épargne, un livret garanti ou un ETF.",
  "Le prix de l'or, de l'argent, du platine et du palladium peut monter ou baisser.",
  "Il existe un risque de perte en capital et aucun rendement n'est garanti.",
  "Les métaux précieux ne produisent pas automatiquement un revenu régulier.",
  "Les frais, devises, taux de change, coûts de stockage, retrait ou livraison peuvent influencer le résultat final.",
];

const checks = [
  "Conditions d'inscription, vérification d'identité et pays réellement acceptés.",
  "Prix d'achat, prix de revente, spread, commissions et éventuels frais de change.",
  "Frais de stockage, assurance, retrait, livraison et modalités de conservation en coffre.",
  "Fiscalité applicable en Belgique ou en France selon la situation personnelle.",
  "Liquidité réelle, prix de revente possible et conditions actualisées sur le site officiel.",
];

const relatedLinks = [
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Revenir à la catégorie investissement pour comparer les plateformes suivies.",
  },
  {
    href: "/investissement/gold-avenue",
    title: "GOLD AVENUE",
    text: "Une plateforme en français pour acheter, stocker et vendre des métaux précieux physiques.",
  },
  {
    href: "/investissement/veracash",
    title: "VeraCash",
    text: "Une solution liée aux métaux précieux, avec compte, carte, risques et frais à vérifier.",
  },
  {
    href: "/investissement/monefit",
    title: "Monefit SmartSaver",
    text: "Une plateforme d'investissement alternative liée à un portefeuille de prêts européens.",
  },
  {
    href: "/investissement/tradingview",
    title: "TradingView",
    text: "Un outil de graphiques et d'analyse pour suivre les marchés financiers.",
  },
  {
    href: "/banques-en-ligne",
    title: "Banques en ligne",
    text: "Comparer les comptes mobiles et applications financières suivies.",
  },
];

const faq = [
  {
    question: "BullionVault est-il disponible en Belgique ?",
    answer:
      "BullionVault est une plateforme internationale qui peut intéresser les résidents belges. L'accès réel dépend toutefois des conditions d'inscription, de vérification, de paiement, de fiscalité et de disponibilité en vigueur.",
  },
  {
    question: "BullionVault est-il disponible en France ?",
    answer:
      "BullionVault propose un site en français et peut intéresser les résidents français. Avant toute opération, il faut vérifier les conditions officielles, les frais, les modalités de retrait ou livraison et les règles fiscales applicables.",
  },
  {
    question: "BullionVault est-il une banque ?",
    answer:
      "Non. BullionVault ne doit pas être présenté comme une banque, un compte d'épargne, un livret garanti, un courtier en actions, un ETF ou un conseiller financier ou fiscal.",
  },
  {
    question: "Peut-on acheter de l'or physique avec BullionVault ?",
    answer:
      "Oui, BullionVault permet d'acheter de l'or physique via une plateforme en ligne. L'investisseur détient généralement une fraction de grandes barres professionnelles stockées en coffre, selon les modalités officielles.",
  },
  {
    question: "Peut-on acheter de l'argent, du platine ou du palladium ?",
    answer:
      "BullionVault peut proposer l'or, l'argent, le platine et le palladium. Les métaux disponibles, les marchés, les frais et les conditions doivent être vérifiés directement sur le site officiel.",
  },
  {
    question: "Où les métaux sont-ils conservés ?",
    answer:
      "Les métaux peuvent être conservés dans des coffres professionnels selon les lieux et modalités proposés par BullionVault. Les détails de conservation, assurance et audit doivent être vérifiés dans les documents officiels.",
  },
  {
    question: "Peut-on demander une livraison physique ?",
    answer:
      "Une livraison ou un retrait physique peut être possible selon le métal, la quantité, le pays, les seuils, les coûts et les conditions en vigueur. Il ne faut pas considérer cette option comme automatique.",
  },
  {
    question: "Quels frais faut-il vérifier ?",
    answer:
      "Il faut vérifier les commissions d'achat et de vente, les spreads, les frais de stockage, d'assurance, de change, de retrait, de livraison et la fiscalité applicable. Ces éléments peuvent évoluer.",
  },
  {
    question: "Peut-on perdre de l'argent avec BullionVault ?",
    answer:
      "Oui. Le prix des métaux précieux peut baisser, les devises peuvent évoluer défavorablement et les frais peuvent réduire le résultat final. Il existe donc un risque de perte en capital.",
  },
  {
    question: "Afflizen utilise-t-il déjà un lien de recommandation BullionVault ?",
    answer:
      "Non. Afflizen utilise actuellement un lien officiel non affilié vers BullionVault. Ce lien pourra être remplacé ultérieurement par un lien personnel conforme au programme de recommandation.",
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

function BullionVaultOfficialButton({
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
      href={BULLIONVAULT_OFFICIAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-platform="BullionVault"
      data-category="investissement"
      data-location={location}
      data-link-url={BULLIONVAULT_OFFICIAL_LINK}
      className={className}
    >
      {children}
    </a>
  );
}

export default function BullionVaultPage() {
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
              BullionVault : acheter et stocker de l’or et des métaux précieux
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Une plateforme en français donnant accès à l’achat, à la vente et
              au stockage professionnel d’or, d’argent, de platine et de
              palladium. Cette fiche s’adresse aux résidents belges, français et
              utilisateurs francophones qui veulent comparer une solution de
              métaux précieux avec prudence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <BullionVaultOfficialButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir BullionVault
              </BullionVaultOfficialButton>

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
                BullionVault. Un lien personnel de recommandation pourra être
                ajouté ultérieurement après ouverture et validation du compte.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              BullionVault
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une plateforme internationale pour acheter, vendre et conserver
                des métaux précieux physiques via une interface en ligne.
              </p>

              <p>
                À analyser comme une solution d’investissement avec risque de
                prix, pas comme une banque, un livret garanti ou un placement
                sans risque.
              </p>
            </div>

            <BullionVaultOfficialButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel BullionVault
            </BullionVaultOfficialButton>
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
            <p className="text-sm text-slate-500">Métaux</p>
            <p className="mt-2 font-semibold text-slate-950">
              Or, argent, platine
            </p>
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
              Lien officiel
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Présentation de BullionVault
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              BullionVault permet aux investisseurs privés d’acheter, vendre et
              conserver des métaux précieux sur une plateforme en ligne. La page
              française peut être utile aux utilisateurs francophones qui veulent
              comparer une solution spécialisée dans l’or et d’autres métaux
              avant d’ouvrir un compte.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Sur Afflizen, BullionVault est classé dans Investissement parce
              qu’il touche à la détention de métaux précieux physiques. Il ne
              doit pas être présenté comme une banque, un compte d’épargne, un
              livret garanti, un courtier en actions, un ETF ou un conseiller
              financier ou fiscal.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Comment fonctionne la plateforme ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Le principe est d’accéder à un marché en ligne où l’utilisateur
              peut acheter ou vendre des métaux précieux. La détention peut
              porter sur une fraction de grandes barres professionnelles,
              conservées dans des coffres selon les lieux, règles de conservation
              et modalités disponibles au moment de l’opération.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Les conditions d’ouverture de compte, de vérification, de dépôt,
              de vente, de retrait ou de livraison doivent toujours être
              vérifiées directement sur le site officiel BullionVault.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Quels métaux précieux peut-on acheter ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              BullionVault peut donner accès à plusieurs métaux précieux. Les
              produits, marchés, devises, frais et lieux de conservation peuvent
              varier : il faut donc confirmer les informations au moment de
              l’utilisation.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {metals.map((item) => (
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
              Détention fractionnée et stockage en coffre
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              BullionVault permet de détenir des fractions de grandes barres
              professionnelles plutôt que d’acheter forcément une barre entière.
              Les métaux sont conservés dans des coffres professionnels selon
              les options disponibles, avec des règles de conservation, audit,
              assurance et frais à vérifier.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Cette détention ne transforme pas l’investissement en dépôt
              bancaire garanti. La valeur dépend notamment du prix du métal, de
              la devise, des frais et des conditions de revente.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Achat, vente et éventuelle livraison
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              L’utilisateur peut chercher à acheter ou vendre des métaux précieux
              via la plateforme. Une livraison ou un retrait physique peut être
              proposé dans certains cas, mais il ne faut pas présenter cette
              option comme automatique : elle dépend des seuils, frais, pays,
              métaux et conditions applicables.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              BullionVault pour les résidents belges et français
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              BullionVault est une plateforme internationale accessible aux
              investisseurs privés sous réserve des conditions d’inscription et
              de vérification en vigueur. Les résidents belges et français
              doivent vérifier l’éligibilité, les moyens de paiement, les
              documents demandés, les retraits, la livraison éventuelle et les
              conséquences fiscales dans leur pays.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Frais, stockage et conversion des devises
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Les frais sont une partie importante de l’analyse. Commissions,
              spreads, stockage, assurance, change, retrait, livraison et
              fiscalité peuvent modifier le résultat final. Les tarifs peuvent
              évoluer et doivent être vérifiés directement sur le site officiel.
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
                Limites et risques importants
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

          <section className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-red-950">
              Risque de perte en capital
            </h2>

            <p className="mt-4 text-base leading-7 text-red-950">
              Les métaux précieux ne garantissent aucun rendement. Leur prix
              peut monter ou baisser, la liquidité et le prix de revente ne sont
              pas garantis, et les taux de change peuvent influencer le résultat
              final. BullionVault ne doit pas être présenté comme une protection
              absolue contre les crises ou l’inflation.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Programme de recommandation BullionVault
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              BullionVault dispose d’un programme de recommandation soumis à
              conditions, pouvant permettre de recommander la plateforme à des
              proches ou aux visiteurs d’un site. Afflizen n’utilise pas encore
              son propre lien et renvoie temporairement vers le site officiel
              français.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Cette mention ne constitue pas une promesse de revenu, de
              commission, de durée de rémunération ou d’avantage garanti pour le
              visiteur. Le lien pourra être remplacé plus tard uniquement par un
              lien personnel conforme au programme.
            </p>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Avis Afflizen sur BullionVault
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              BullionVault peut être une plateforme intéressante à comparer pour
              les utilisateurs belges, français et francophones qui veulent
              s’informer sur l’achat, la vente et la conservation de métaux
              précieux physiques. Elle complète les fiches liées aux métaux
              précieux déjà suivies par Afflizen.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              L’avis reste prudent : les métaux précieux sont volatils, ne
              produisent pas automatiquement un revenu et peuvent entraîner une
              perte en capital. Avant toute décision, il faut vérifier les frais,
              conditions, devises, fiscalité et documents officiels.
            </p>

            <div className="mt-8">
              <BullionVaultOfficialButton
                location="avis"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Découvrir BullionVault
              </BullionVaultOfficialButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              FAQ BullionVault
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
              <BullionVaultOfficialButton
                location="faq"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Découvrir BullionVault
              </BullionVaultOfficialButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser BullionVault
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Le prix des métaux peut monter ou baisser.</li>
              <li>• Le capital est exposé à un risque de perte.</li>
              <li>• Aucun rendement n’est garanti.</li>
              <li>• Les frais et taux de change peuvent peser sur le résultat.</li>
              <li>• La fiscalité peut différer entre Belgique et France.</li>
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
            conseil financier, fiscal ou juridique personnalisé. BullionVault
            n’est pas présenté comme une banque, un compte d’épargne, un livret
            garanti, un courtier en actions, un ETF, un conseiller financier ou
            fiscal, un placement sans risque ou une protection absolue contre
            l’inflation. Le capital est à risque, aucun rendement n’est garanti
            et les conditions, frais, devises, retraits, livraisons, prix de
            revente et règles fiscales peuvent évoluer. Vérifiez toujours les
            informations officielles BullionVault avant toute opération.
          </p>
        </div>
      </section>
    </main>
  );
}
