import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

const GOLD_AVENUE_OFFICIAL_LINK = "https://www.goldavenue.com/fr";

export const metadata: Metadata = {
  title: "GOLD AVENUE : acheter et stocker de l’or | Afflizen",
  description:
    "Découvrez GOLD AVENUE, une plateforme en français pour acheter, stocker et vendre de l’or et des métaux précieux. Avis, risques, frais à vérifier et disponibilité pour la France et la Belgique.",
  alternates: {
    canonical: "https://afflizen.com/investissement/gold-avenue",
  },
  openGraph: {
    title: "GOLD AVENUE : acheter et stocker de l’or | Afflizen",
    description:
      "Découvrez GOLD AVENUE, une plateforme en français pour acheter, stocker et vendre de l’or et des métaux précieux. Avis, risques, frais à vérifier et disponibilité pour la France et la Belgique.",
    url: "https://afflizen.com/investissement/gold-avenue",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const metals = [
  "Or physique sous forme de pièces, lingots ou lingotins selon disponibilité.",
  "Argent physique à comparer selon prix, frais, stockage, TVA et fiscalité.",
  "Platine et palladium selon les produits proposés et les conditions du moment.",
  "Produits stockés ou livrables selon pays, disponibilité, frais et règles officielles.",
];

const strengths = [
  "Plateforme suisse spécialisée dans les métaux précieux physiques.",
  "Interface en français pouvant intéresser les résidents français et belges.",
  "Possibilité d’acheter, stocker, revendre ou demander une livraison selon conditions.",
  "Large univers de produits autour de l’or, de l’argent, du platine et du palladium.",
  "Solution à comparer pour diversifier une partie de son patrimoine avec prudence.",
];

const limits = [
  "GOLD AVENUE n’est pas une banque, un courtier en actions ou un compte d’épargne garanti.",
  "Les métaux précieux ne sont pas un placement sans risque et aucun rendement n’est garanti.",
  "Le prix de l’or, de l’argent, du platine et du palladium peut monter ou baisser.",
  "Les frais, marges, prix d’achat et de revente, stockage, assurance et livraison peuvent varier.",
  "La fiscalité peut différer entre la France et la Belgique et doit être vérifiée avec des sources adaptées.",
];

const checks = [
  "Prix d’achat, prix de revente, marge, spread et éventuels frais de transaction.",
  "Conditions de stockage, assurance, livraison, retrait physique et revente.",
  "Fiscalité applicable en France ou en Belgique selon votre situation personnelle.",
  "Pays éligibles, vérification d’identité, moyens de paiement et conditions actualisées.",
];

const relatedLinks = [
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Revenir à la catégorie investissement pour comparer les plateformes suivies.",
  },
  {
    href: "/investissement/veracash",
    title: "VeraCash",
    text: "Une autre solution liée aux métaux précieux, avec compte et carte selon conditions.",
  },
  {
    href: "/investissement/tradingview",
    title: "TradingView",
    text: "Un outil de graphiques et d’analyse pour suivre les marchés financiers.",
  },
  {
    href: "/investissement/finary",
    title: "Finary",
    text: "Un outil pour suivre son patrimoine et ses investissements.",
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
    question: "GOLD AVENUE est-il disponible en français ?",
    answer:
      "Oui. GOLD AVENUE propose une interface en français, ce qui peut être utile pour les résidents français, belges et plus largement les utilisateurs francophones.",
  },
  {
    question: "GOLD AVENUE est-il accessible depuis la Belgique ?",
    answer:
      "GOLD AVENUE peut intéresser des résidents belges, mais il faut vérifier l’éligibilité, les moyens de paiement, la livraison, le stockage, les frais et la fiscalité directement sur le site officiel.",
  },
  {
    question: "GOLD AVENUE est-il accessible depuis la France ?",
    answer:
      "GOLD AVENUE s’adresse aussi aux résidents français. Les conditions d’achat, de stockage, de revente, de livraison et la fiscalité doivent toutefois être vérifiées avant toute opération.",
  },
  {
    question: "Peut-on acheter de l’or physique avec GOLD AVENUE ?",
    answer:
      "Oui, GOLD AVENUE est spécialisée dans les métaux précieux physiques, notamment l’or. Les produits disponibles, prix, frais, stockage et conditions doivent être vérifiés sur le site officiel.",
  },
  {
    question: "Peut-on demander la livraison des métaux ?",
    answer:
      "La livraison peut être disponible selon les produits, le pays, les frais et les conditions. Il faut vérifier les modalités exactes sur GOLD AVENUE avant d’acheter.",
  },
  {
    question: "Le stockage est-il obligatoire ?",
    answer:
      "Le stockage peut être une option importante de la plateforme, mais les possibilités de stockage, livraison ou revente dépendent des produits et conditions officielles.",
  },
  {
    question: "Quels sont les risques liés aux métaux précieux ?",
    answer:
      "Le prix des métaux précieux peut monter ou baisser. Il existe un risque de perte en capital, aucun rendement n’est garanti, et les frais, marges, fiscalité, stockage ou livraison peuvent réduire la performance réelle.",
  },
  {
    question: "GOLD AVENUE est-il une banque ?",
    answer:
      "Non. GOLD AVENUE ne doit pas être présenté comme une banque, un courtier en actions, un compte d’épargne garanti ou un conseiller financier ou fiscal.",
  },
  {
    question: "Afflizen utilise-t-il déjà un lien affilié GOLD AVENUE ?",
    answer:
      "Non. Afflizen utilise actuellement un lien officiel non affilié vers GOLD AVENUE. Un lien d’affiliation personnel pourra être ajouté ultérieurement après ouverture du compte et acceptation dans le programme.",
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

function GoldAvenueOfficialButton({
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
      href={GOLD_AVENUE_OFFICIAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-platform="GOLD AVENUE"
      data-category="investissement"
      data-location={location}
      data-link-url={GOLD_AVENUE_OFFICIAL_LINK}
      className={className}
    >
      {children}
    </a>
  );
}

export default function GoldAvenuePage() {
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
              GOLD AVENUE : acheter et stocker de l’or et des métaux précieux
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Une plateforme suisse en français pour acheter, stocker ou
              revendre de l’or, de l’argent et d’autres métaux précieux, avec
              des risques et des frais à bien comprendre. Cette fiche s’adresse
              aux résidents français et belges qui veulent comparer une solution
              francophone avant de décider.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <GoldAvenueOfficialButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir GOLD AVENUE
              </GoldAvenueOfficialButton>

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
                Le bouton renvoie vers le site officiel français de GOLD AVENUE.
                Il n’est pas présenté comme un partenariat, une commission
                Afflizen, une réduction, un code promotionnel ou un avantage
                exclusif.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              GOLD AVENUE
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une plateforme suisse pour acheter, vendre, stocker ou faire
                livrer des métaux précieux physiques selon conditions.
              </p>

              <p>
                À analyser comme une solution de diversification, pas comme une
                banque, un livret garanti ou un placement sans risque.
              </p>
            </div>

            <GoldAvenueOfficialButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel GOLD AVENUE
            </GoldAvenueOfficialButton>
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
            <p className="text-sm text-slate-500">Produits</p>
            <p className="mt-2 font-semibold text-slate-950">
              Pièces et lingots
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
              Aucun lien personnel
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Présentation de GOLD AVENUE
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              GOLD AVENUE est une plateforme suisse spécialisée dans l’achat, la
              vente, le stockage et, selon les conditions et pays disponibles, la
              livraison de métaux précieux physiques. Les produits peuvent
              concerner l’or, l’argent, le platine, le palladium, des pièces, des
              lingots et des lingotins.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Sur Afflizen, GOLD AVENUE est classée dans Investissement parce
              qu’elle touche à la diversification patrimoniale. Elle ne doit pas
              être présentée comme une banque, un courtier en actions, un compte
              d’épargne garanti ou un conseiller financier ou fiscal.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À qui s’adresse la plateforme ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              GOLD AVENUE peut intéresser les résidents français et belges qui
              souhaitent comparer une plateforme francophone pour acheter,
              stocker ou revendre des métaux précieux. Elle peut aussi parler
              aux utilisateurs qui veulent diversifier une partie de leur
              patrimoine sans confondre métaux précieux et placement garanti.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Quels métaux précieux peut-on acheter ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Les produits exacts, formats, stocks, prix, primes et conditions
              peuvent évoluer. Avant toute opération, il faut vérifier les
              informations actualisées sur le site officiel.
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
              Achat, stockage, revente et livraison
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Le fonctionnement général peut inclure l’achat de métaux précieux,
              le stockage, la revente et parfois la livraison physique selon les
              produits, le pays, les seuils, les frais et les conditions. Ces
              éléments doivent être vérifiés directement, car ils peuvent changer
              et avoir un impact important sur le coût réel.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              GOLD AVENUE pour les résidents français et belges
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              La page officielle française peut être utile aux visiteurs
              francophones résidant notamment en France et en Belgique. Les
              résidents belges doivent aussi être attentifs à la fiscalité locale
              et aux conditions de livraison ou de stockage. Cette page ne donne
              pas de conseil fiscal personnalisé.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Frais, marges et conditions à vérifier
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Les frais et marges sont essentiels avec les métaux précieux. Le
              prix affiché, la prime, le spread, le stockage, l’assurance, la
              livraison, la revente et la fiscalité peuvent réduire ou modifier
              la performance réelle.
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
                Limites et risques
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
              Risques liés aux métaux précieux
            </h2>

            <p className="mt-4 text-base leading-7 text-red-950">
              Le prix des métaux précieux peut monter ou baisser. Il existe un
              risque de perte en capital, aucun rendement n’est garanti, et l’or
              ou l’argent ne produisent pas automatiquement de revenu. Les frais,
              marges, prix d’achat et de revente, stockage, assurance,
              livraison, fiscalité et conditions peuvent varier.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Programme de recommandation ou d’affiliation
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              GOLD AVENUE propose un programme de recommandation ou
              d’affiliation soumis à conditions. Afflizen utilise actuellement un
              lien officiel non affilié, qui pourra être remplacé ultérieurement
              par un lien personnel approuvé.
            </p>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Avis Afflizen sur GOLD AVENUE
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              GOLD AVENUE complète bien la catégorie Investissement d’Afflizen
              parce qu’elle permet d’explorer un univers différent des actions,
              ETF, crypto ou courtiers : les métaux précieux physiques. Elle
              peut être intéressante à comparer pour les résidents français et
              belges qui veulent comprendre l’achat, le stockage et la revente.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Notre avis reste prudent : les métaux précieux ne garantissent pas
              un gain, ne produisent pas automatiquement de revenu et peuvent
              baisser. Avant toute décision, il faut vérifier les frais, marges,
              conditions de stockage, livraison, fiscalité et prix actualisés sur
              le site officiel.
            </p>

            <div className="mt-8">
              <GoldAvenueOfficialButton
                location="avis"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Découvrir GOLD AVENUE
              </GoldAvenueOfficialButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              FAQ GOLD AVENUE
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
              <GoldAvenueOfficialButton
                location="faq"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Découvrir GOLD AVENUE
              </GoldAvenueOfficialButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser GOLD AVENUE
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Les prix d’achat, de revente, primes, spreads et frais.</li>
              <li>• Le stockage, l’assurance, la livraison et les seuils.</li>
              <li>• La fiscalité applicable en France ou en Belgique.</li>
              <li>• Les conditions officielles et les pays disponibles.</li>
              <li>• Le risque de perte en capital.</li>
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
            conseil financier, fiscal ou juridique personnalisé. GOLD AVENUE
            n’est pas présenté comme une banque, un courtier en actions, un
            compte d’épargne garanti ou un placement sans risque. Les métaux
            précieux peuvent fluctuer et comportent un risque de perte en
            capital. Les frais, marges, prix, stockage, assurance, livraison,
            fiscalité et conditions peuvent évoluer. Vérifiez toujours les
            informations officielles GOLD AVENUE avant toute opération.
          </p>
        </div>
      </section>
    </main>
  );
}
