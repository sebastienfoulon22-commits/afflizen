import type { Metadata } from "next";
import Link from "next/link";

const INTERACTIVE_BROKERS_OFFICIAL_LINK = "https://www.interactivebrokers.eu/";

export const metadata: Metadata = {
  title: "Interactive Brokers avis : courtier international pour investir en bourse",
  description:
    "Notre présentation d’Interactive Brokers, courtier international pour investir sur actions, ETF, options, futures, devises, obligations et fonds : points forts, limites, frais et précautions.",
  alternates: {
    canonical: "https://afflizen.com/investissement/interactive-brokers",
  },
  openGraph: {
    title:
      "Interactive Brokers avis : courtier international pour investir en bourse",
    description:
      "Notre présentation d’Interactive Brokers, courtier international pour investir sur actions, ETF, options, futures, devises, obligations et fonds : points forts, limites, frais et précautions.",
    url: "https://afflizen.com/investissement/interactive-brokers",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const strengths = [
  "Courtier en ligne international donnant accès à de nombreux marchés.",
  "Large choix de produits financiers : actions, ETF, options, futures, devises, obligations et fonds.",
  "Plateforme complète pour les investisseurs autonomes, actifs ou expérimentés.",
  "Solution intéressante pour comparer les courtiers internationaux avec DEGIRO, eToro ou Trade Republic.",
  "Outils avancés utiles pour les profils qui veulent gérer leurs ordres, leurs devises et leurs marchés avec précision.",
];

const limits = [
  "Moins simple qu’une application d’investissement très grand public.",
  "Les frais, commissions, frais de change, frais de marché et conditions doivent être vérifiés directement sur le site officiel.",
  "Les produits complexes comme options, futures, CFD ou marge ne conviennent pas à tous les profils.",
  "Investir en bourse comporte un risque de perte en capital.",
  "L’accès à de nombreux produits peut être un avantage, mais aussi augmenter le risque d’erreurs pour un débutant.",
];

const beginnerPoints = [
  "Commencer par des produits simples avant d’étudier les outils avancés.",
  "Comprendre les types d’ordres, les devises et les frais avant toute opération.",
  "Éviter les produits à effet de levier si leur fonctionnement n’est pas maîtrisé.",
  "Vérifier les conditions officielles selon son pays de résidence et son profil.",
];

const products = [
  "Actions et ETF sur de nombreux marchés internationaux.",
  "Options, futures et produits plus avancés pour profils expérimentés.",
  "Devises, obligations et fonds selon disponibilité et conditions du compte.",
  "Frais de courtage, frais de change et frais de marché à vérifier avant d’investir.",
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
    text: "Un autre courtier en ligne orienté actions, ETF et marchés financiers.",
  },
  {
    href: "/investissement/etoro",
    title: "eToro",
    text: "Une plateforme plus grand public avec actions, ETF, crypto et copy trading.",
  },
  {
    href: "/investissement/finary",
    title: "Finary",
    text: "Un outil pour suivre son patrimoine, ses investissements et son allocation globale.",
  },
  {
    href: "/crypto/ledger",
    title: "Ledger",
    text: "Une page utile pour comprendre la logique de conservation personnelle côté crypto.",
  },
];

const faq = [
  {
    question: "Interactive Brokers est-il un courtier international ?",
    answer:
      "Oui, Interactive Brokers est un courtier en ligne international qui permet d’accéder à de nombreux marchés et produits financiers selon le pays, le profil du compte et les conditions applicables.",
  },
  {
    question: "Quels produits peut-on trouver chez Interactive Brokers ?",
    answer:
      "Interactive Brokers permet notamment d’investir sur actions, ETF, options, futures, devises, obligations et fonds, selon disponibilité, réglementation et profil utilisateur.",
  },
  {
    question: "Interactive Brokers est-il adapté aux débutants ?",
    answer:
      "Interactive Brokers peut être utilisé par un débutant motivé, mais la plateforme est plutôt complète et avancée. Elle convient mieux aux investisseurs autonomes qui prennent le temps de comprendre les frais, les produits et les risques.",
  },
  {
    question: "Interactive Brokers est-il toujours le courtier le moins cher ?",
    answer:
      "Non, il ne faut pas supposer que les frais sont toujours les plus bas pour tout le monde. Les commissions, frais de change, frais de marché et conditions doivent être vérifiés directement sur le site officiel.",
  },
  {
    question: "Le lien Interactive Brokers sur Afflizen est-il affilié ?",
    answer:
      "Non. Le lien utilisé sur cette page est un lien officiel provisoire vers le site d’Interactive Brokers. Il n’est pas présenté comme un lien affilié, partenaire ou sponsorisé.",
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

export default function InteractiveBrokersPage() {
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
              Interactive Brokers : un courtier international pour investir sur
              les marchés mondiaux
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Interactive Brokers est un courtier en ligne international qui
              permet d’accéder à de nombreux marchés et produits financiers :
              actions, ETF, options, futures, devises, obligations et fonds. Sur
              Afflizen, nous le classons dans les plateformes d’investissement
              avancées, adaptées aux investisseurs autonomes qui veulent comparer
              les marchés, les frais et les outils avant d’agir.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={INTERACTIVE_BROKERS_OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Accéder au site officiel d’Interactive Brokers
              </a>

              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Lien officiel provisoire, sans affiliation pour le moment
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Le lien utilisé sur cette page renvoie vers le site officiel
                d’Interactive Brokers. Il n’est pas présenté comme un lien
                affilié, partenaire, sponsorisé, parrainage, bonus ou offre de
                bienvenue.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              Interactive Brokers
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Un courtier international complet, plutôt pensé pour les
                investisseurs autonomes, actifs ou expérimentés.
              </p>

              <p>
                À utiliser avec prudence : la richesse de l’offre demande de
                comprendre les frais, les devises, les marchés et les produits
                complexes.
              </p>
            </div>

            <a
              href={INTERACTIVE_BROKERS_OFFICIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel Interactive Brokers
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
              Autonome à avancé
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
              À qui s’adresse Interactive Brokers ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Interactive Brokers s’adresse surtout aux investisseurs autonomes
              qui veulent accéder à de nombreux marchés internationaux et à une
              large gamme de produits financiers. La plateforme peut être
              intéressante pour les profils actifs ou expérimentés, capables de
              comparer les frais, les devises, les ordres et les conditions
              avant de passer une opération.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Elle est moins adaptée aux personnes qui cherchent une application
              ultra simple, centrée uniquement sur quelques actions ou ETF. Son
              intérêt principal est sa profondeur, mais cette profondeur demande
              de la méthode et de la prudence.
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
              Interactive Brokers est-il adapté aux débutants ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Interactive Brokers peut être utilisé par un débutant motivé, mais
              ce n’est pas la plateforme la plus simple pour commencer. Son
              interface, ses outils et sa gamme de produits sont plutôt pensés
              pour des investisseurs qui veulent aller plus loin qu’un achat
              très simple d’actions ou d’ETF.
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
              Frais, marchés et produits disponibles
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Interactive Brokers permet d’accéder à de nombreux produits
              financiers et marchés internationaux. Cette richesse peut être un
              vrai atout pour diversifier ses investissements, mais elle impose
              de vérifier précisément les frais et les conditions applicables.
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
                Point de prudence
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-950">
                Les options, futures, CFD, opérations sur marge et produits à
                effet de levier sont complexes. Ils peuvent entraîner des pertes
                importantes et ne conviennent pas à tous les investisseurs.
              </p>
            </div>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Notre avis sur Interactive Brokers
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Interactive Brokers est un courtier sérieux à étudier pour les
              investisseurs qui veulent accéder à une plateforme internationale,
              complète et avancée. Son intérêt principal est l’étendue des
              marchés et des produits disponibles, ce qui peut convenir aux
              profils autonomes qui savent précisément ce qu’ils cherchent.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Notre avis est plus prudent pour les débutants complets. Avant
              d’utiliser Interactive Brokers, il faut comprendre les frais, les
              commissions, les frais de change, la fiscalité, les types d’ordres
              et les risques associés aux produits complexes.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5">
              <p className="font-semibold text-slate-950">Verdict Afflizen</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Interactive Brokers peut être une excellente plateforme à
                comparer pour un investisseur autonome, mais elle doit être
                abordée avec méthode. Ce n’est pas une promesse de performance,
                ni un conseil financier personnalisé.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              FAQ Interactive Brokers
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
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser Interactive Brokers
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Les commissions selon le marché et le produit.</li>
              <li>• Les frais de change et frais de marché éventuels.</li>
              <li>• Les produits disponibles selon votre pays.</li>
              <li>• Les risques associés à la marge et aux produits dérivés.</li>
              <li>• La fiscalité applicable à vos investissements.</li>
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
            conseil financier personnalisé. Les investissements en bourse
            comportent un risque de perte en capital. Vérifiez toujours les
            informations officielles d’Interactive Brokers avant toute
            inscription, opération ou décision d’investissement.
          </p>
        </div>
      </section>
    </main>
  );
}
