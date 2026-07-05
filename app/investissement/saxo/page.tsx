import type { Metadata } from "next";
import Link from "next/link";

const SAXO_FRANCE_LINK = "https://www.home.saxo/fr-fr";
const SAXO_BELGIQUE_LINK = "https://www.home.saxo/fr-be";

export const metadata: Metadata = {
  title: "Saxo avis : courtier en ligne pour investir et trader",
  description:
    "Notre présentation de Saxo, courtier en ligne pour investir et trader sur actions, ETF, obligations, options, futures, forex et autres marchés : frais, points forts, limites et précautions.",
  alternates: {
    canonical: "https://afflizen.com/investissement/saxo",
  },
  openGraph: {
    title: "Saxo avis : courtier en ligne pour investir et trader",
    description:
      "Notre présentation de Saxo, courtier en ligne pour investir et trader sur actions, ETF, obligations, options, futures, forex et autres marchés : frais, points forts, limites et précautions.",
    url: "https://afflizen.com/investissement/saxo",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const strengths = [
  "Courtier en ligne international donnant accès à de nombreux marchés selon pays, profil et conditions.",
  "Offre orientée investissement et trading, avec actions, ETF, obligations, fonds et produits plus avancés selon disponibilité.",
  "Plateformes et outils adaptés aux investisseurs autonomes, actifs ou expérimentés.",
  "Présence de pages officielles distinctes pour la France et la Belgique francophone.",
  "Solution intéressante à comparer avec DEGIRO, Interactive Brokers, eToro, Finary ou Robinhood selon les besoins.",
];

const limits = [
  "Saxo peut être moins simple qu’une application d’investissement très grand public.",
  "Les produits complexes comme options, futures, forex, CFD, produits à effet de levier ou marge ne conviennent pas à tous les profils.",
  "Les frais, commissions, frais de change, frais de marché, frais de garde éventuels, fiscalité et conditions doivent être vérifiés directement sur Saxo.",
  "Il ne faut pas promettre que Saxo est toujours le courtier le moins cher.",
  "Investir ou trader comporte un risque de perte en capital, y compris avec des produits réputés simples.",
];

const beginnerPoints = [
  "Comprendre les actions, ETF, ordres de bourse, devises et frais avant d’aller plus loin.",
  "Éviter les produits complexes ou à effet de levier si leur fonctionnement n’est pas parfaitement compris.",
  "Comparer Saxo avec des plateformes plus simples si l’objectif est seulement de débuter progressivement.",
  "Lire les documents officiels, les avertissements de risque et les conditions du pays concerné.",
];

const products = [
  "Actions, ETF, obligations, fonds et autres produits d’investissement selon disponibilité.",
  "Options, futures, forex, CFD ou instruments avancés selon pays, profil, réglementation et conditions.",
  "Plateformes Saxo pour investir ou trader avec des outils plus complets qu’une app très simplifiée.",
  "Produits et marchés à comparer selon stratégie, horizon, expérience et tolérance au risque.",
];

const fees = [
  "Commissions de courtage selon marché, produit, place boursière et niveau de compte.",
  "Frais de change, frais de marché, frais éventuels de garde ou frais liés aux données de marché.",
  "Fiscalité, déclarations et règles propres au pays de résidence, notamment France ou Belgique.",
  "Conditions de marge, exigences de couverture et avertissements de risque pour les produits avancés.",
];

const relatedLinks = [
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Revenir à la catégorie investissement pour comparer les plateformes suivies.",
  },
  {
    href: "/investissement/degiro",
    title: "DEGIRO",
    text: "Un courtier en ligne orienté actions, ETF et marchés financiers.",
  },
  {
    href: "/investissement/interactive-brokers",
    title: "Interactive Brokers",
    text: "Un courtier international complet pour investisseurs autonomes.",
  },
  {
    href: "/investissement/etoro",
    title: "eToro",
    text: "Une plateforme plus grand public avec actions, ETF, crypto et copy trading.",
  },
  {
    href: "/investissement/finary",
    title: "Finary",
    text: "Un outil pour suivre son patrimoine, ses investissements et son allocation.",
  },
  {
    href: "/investissement/robinhood",
    title: "Robinhood",
    text: "Une application d’investissement connue à l’international.",
  },
  {
    href: "/crypto",
    title: "Crypto",
    text: "Comparer les plateformes crypto référencées sur Afflizen.",
  },
  {
    href: "/banques-en-ligne",
    title: "Banques en ligne",
    text: "Comparer les comptes mobiles et applications financières suivies.",
  },
];

const faq = [
  {
    question: "Saxo est-il un courtier en ligne international ?",
    answer:
      "Oui. Saxo est un courtier en ligne et broker d’investissement international, avec des pages officielles pour la France et la Belgique. Les produits, frais et conditions doivent toutefois être vérifiés selon le pays et le profil du compte.",
  },
  {
    question: "Quels produits peut-on trouver chez Saxo ?",
    answer:
      "Saxo peut donner accès à des actions, ETF, obligations, fonds, options, futures, forex, CFD et autres instruments selon le pays, le profil, la réglementation et les conditions applicables.",
  },
  {
    question: "Saxo est-il adapté aux débutants ?",
    answer:
      "Saxo peut convenir à un débutant motivé, mais la plateforme s’adresse plutôt aux investisseurs autonomes, actifs ou expérimentés. Un débutant doit commencer par comprendre les frais, les produits simples, la fiscalité et le risque de perte en capital.",
  },
  {
    question: "Saxo est-il toujours le courtier le moins cher ?",
    answer:
      "Non. Il ne faut pas le promettre. Le coût réel dépend des marchés, produits, montants, devises, frais de courtage, frais de change, frais de marché et conditions du compte.",
  },
  {
    question: "Les liens Saxo sur Afflizen sont-ils affiliés ?",
    answer:
      "Non. Les liens utilisés sur cette page sont des liens officiels provisoires vers Saxo France et Saxo Belgique. Ils ne sont pas présentés comme des liens affiliés, partenaires ou sponsorisés.",
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

export default function SaxoPage() {
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
              Courtier international
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Saxo : un courtier en ligne pour investir et trader sur les
              marchés mondiaux
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Saxo est un courtier en ligne international qui permet d’investir
              ou de trader sur de nombreux marchés selon le pays, le profil et
              les conditions applicables. La plateforme peut convenir aux
              investisseurs autonomes, actifs ou expérimentés qui veulent
              comparer actions, ETF, obligations, fonds et produits plus avancés
              avec méthode.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={SAXO_FRANCE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Accéder au site officiel Saxo France
              </a>

              <a
                href={SAXO_BELGIQUE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Accéder au site officiel Saxo Belgique
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Liens officiels France et Belgique, sans affiliation pour le moment
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Les liens utilisés sur cette page renvoient vers les sites
                officiels Saxo France et Saxo Belgique. Ils ne sont pas
                présentés comme des liens affiliés, partenaires, sponsorisés,
                parrainage, bonus, réduction, code promo ou offre de bienvenue.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              Saxo
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Un courtier international complet, davantage orienté
                investisseurs autonomes que simple application grand public.
              </p>

              <p>
                À comparer avec DEGIRO, Interactive Brokers, eToro, Finary ou
                Robinhood selon les marchés recherchés, les frais, les outils et
                le niveau d’expérience.
              </p>
            </div>

            <a
              href={SAXO_FRANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel Saxo France
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Courtier en ligne
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Profil</p>
            <p className="mt-2 font-semibold text-slate-950">
              Autonome à expérimenté
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Marchés</p>
            <p className="mt-2 font-semibold text-slate-950">
              Internationaux
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Affiliation</p>
            <p className="mt-2 font-semibold text-slate-950">
              Aucune pour le moment
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À qui s’adresse Saxo ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Saxo s’adresse surtout aux investisseurs qui veulent une plateforme
              plus complète qu’une application très simplifiée. Elle peut
              intéresser les profils autonomes, actifs ou expérimentés qui
              veulent accéder à plusieurs marchés, comparer des produits et
              piloter leurs ordres avec davantage d’outils.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Pour un débutant complet, Saxo peut demander plus de travail
              d’apprentissage. Il faut comprendre les frais, les devises, les
              types d’ordres, la fiscalité et la différence entre investissement
              long terme et trading plus actif.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-950">
                Points forts
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

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Limites et points de vigilance
              </h2>

              <ul className="mt-5 space-y-3">
                {limits.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Saxo est-il adapté aux débutants ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Saxo peut être utilisé par un débutant motivé, mais ce n’est pas
              forcément la porte d’entrée la plus simple. La plateforme devient
              surtout pertinente si l’utilisateur veut apprendre sérieusement,
              comparer les frais et comprendre les produits disponibles avant de
              passer des ordres.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {beginnerPoints.map((item) => (
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
              Actions, ETF, obligations et produits avancés
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Saxo peut proposer une large gamme de produits financiers selon le
              pays et le profil : actions, ETF, obligations, fonds, options,
              futures, forex, CFD ou autres instruments. Cette diversité peut
              être utile, mais elle impose de distinguer les produits simples
              des produits complexes.
            </p>

            <div className="mt-6 grid gap-4">
              {products.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-xl font-bold text-amber-950">
                Produits complexes
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-950">
                Les options, futures, forex, CFD, produits à effet de levier et
                opérations sur marge peuvent entraîner des pertes rapides et
                importantes. Ils ne conviennent pas à tous les investisseurs.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">
              France ou Belgique : quel lien utiliser ?
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Utilisez le lien officiel correspondant à votre pays de résidence
              ou d’usage. Saxo France et Saxo Belgique peuvent présenter des
              produits, comptes, frais, conditions, documents contractuels et
              informations réglementaires différents.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={SAXO_FRANCE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300 hover:bg-white/10"
              >
                <span className="font-semibold text-emerald-300">
                  Saxo France
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-200">
                  Accéder à la page officielle française.
                </span>
              </a>

              <a
                href={SAXO_BELGIQUE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300 hover:bg-white/10"
              >
                <span className="font-semibold text-emerald-300">
                  Saxo Belgique
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-200">
                  Accéder à la page officielle belge francophone.
                </span>
              </a>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              Saxo Belgique indique être la succursale belge de Saxo Bank A/S,
              enregistrée en Belgique auprès de la BNB et contrôlée par la FSMA
              et la BNB. Cette information réglementaire ne constitue pas une
              garantie contre les pertes de marché.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Frais, marchés et conditions à vérifier
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Les frais Saxo doivent être vérifiés directement sur les pages
              officielles France ou Belgique. Le coût réel dépend du marché, du
              produit, de la devise, du type d’ordre, des données de marché, du
              profil du compte et des conditions en vigueur.
            </p>

            <div className="mt-6 grid gap-4">
              {fees.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Notre avis sur Saxo
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Saxo est une plateforme sérieuse à comparer pour les investisseurs
              qui veulent aller au-delà d’une application très grand public. Son
              intérêt dépend surtout du niveau d’expérience, des marchés
              recherchés, de la fréquence d’investissement, des frais réels et
              du besoin d’outils avancés.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Notre avis reste prudent : Saxo peut être pertinent pour un
              investisseur autonome, mais il faut lire les tarifs, comprendre les
              risques, distinguer produits simples et produits complexes, et
              vérifier les conditions France ou Belgique avant toute ouverture.
              Cette page ne constitue pas un conseil financier personnalisé.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5">
              <p className="font-semibold text-slate-950">Verdict Afflizen</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Saxo peut compléter utilement la catégorie investissement
                d’Afflizen aux côtés de DEGIRO et Interactive Brokers pour les
                profils qui veulent comparer des courtiers plus complets.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">FAQ Saxo</h2>

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
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser Saxo
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Les produits disponibles dans votre pays.</li>
              <li>• Les commissions, frais de change et frais de marché.</li>
              <li>• Les risques des produits avancés ou à effet de levier.</li>
              <li>• La fiscalité applicable à vos investissements.</li>
              <li>• Les conditions officielles France ou Belgique.</li>
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
            conseil financier personnalisé. Les investissements et le trading
            comportent un risque de perte en capital. Les produits, marchés,
            frais, commissions, conditions, restrictions et obligations fiscales
            peuvent évoluer. Vérifiez toujours les informations officielles Saxo
            France ou Saxo Belgique avant toute inscription, opération ou
            décision d’investissement.
          </p>
        </div>
      </section>
    </main>
  );
}
