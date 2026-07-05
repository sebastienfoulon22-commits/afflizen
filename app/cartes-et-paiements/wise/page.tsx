import type { Metadata } from "next";
import Link from "next/link";

const WISE_FRANCE_LINK = "https://wise.com/fr/";
const WISE_BELGIQUE_LINK = "https://wise.com/be/";

export const metadata: Metadata = {
  title: "Wise avis : compte multidevise, carte et paiements internationaux",
  description:
    "Notre présentation de Wise, solution de paiement internationale pour envoyer, recevoir, convertir et dépenser de l’argent en plusieurs devises : points forts, limites, frais et précautions.",
  alternates: {
    canonical: "https://afflizen.com/cartes-et-paiements/wise",
  },
  openGraph: {
    title: "Wise avis : compte multidevise, carte et paiements internationaux",
    description:
      "Notre présentation de Wise, solution de paiement internationale pour envoyer, recevoir, convertir et dépenser de l’argent en plusieurs devises : points forts, limites, frais et précautions.",
    url: "https://afflizen.com/cartes-et-paiements/wise",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const strengths = [
  "Solution internationale de paiement et de transfert d’argent.",
  "Compte multidevise pour envoyer, recevoir, convertir et dépenser de l’argent dans plusieurs devises selon disponibilité.",
  "Utile pour les voyageurs, freelances, indépendants, expatriés, achats en devises et paiements internationaux.",
  "Alternative ou complément à une banque classique pour certains usages internationaux.",
  "Pages officielles disponibles pour la France et la Belgique.",
];

const limits = [
  "Wise n’est pas à présenter comme une banque traditionnelle classique.",
  "Les produits disponibles peuvent varier selon le pays de résidence.",
  "Les frais de conversion, frais de carte, limites, devises disponibles, délais de transfert et conditions doivent être vérifiés directement sur Wise.",
  "Les paiements internationaux peuvent dépendre du pays, de la devise, du mode de paiement et du bénéficiaire.",
  "Wise ne garantit pas un transfert gratuit, instantané ou le meilleur taux dans tous les cas.",
];

const useCases = [
  "Payer en devises lors d’un voyage ou d’un achat international.",
  "Recevoir ou envoyer de l’argent dans plusieurs devises selon disponibilité.",
  "Limiter certains frais de conversion en comparant les conditions avant l’opération.",
  "Gérer une activité freelance ou indépendante avec des clients ou fournisseurs internationaux.",
];

const products = [
  "Compte multidevise avec devises disponibles selon pays et conditions.",
  "Carte Wise selon disponibilité, frais et limites applicables.",
  "Transferts internationaux avec délais, frais et modes de paiement variables.",
  "Conversion de devises avec frais affichés à vérifier avant chaque opération.",
];

const relatedLinks = [
  {
    href: "/cartes-et-paiements",
    title: "Cartes et paiements",
    text: "Revenir à la catégorie cartes, paiements et wallets.",
  },
  {
    href: "/cartes-et-paiements/curve-pay",
    title: "Curve Pay",
    text: "Une solution de wallet pour regrouper plusieurs cartes bancaires.",
  },
  {
    href: "/banques-en-ligne",
    title: "Banques en ligne",
    text: "Comparer les comptes mobiles et applications financières suivies.",
  },
  {
    href: "/banques-en-ligne/revolut",
    title: "Revolut",
    text: "Une application financière connue pour les paiements, devises et cartes.",
  },
  {
    href: "/banques-en-ligne/n26",
    title: "N26",
    text: "Une banque mobile européenne orientée compte et carte au quotidien.",
  },
  {
    href: "/banques-en-ligne/qonto",
    title: "Qonto",
    text: "Un compte pro en ligne pour indépendants, PME et entreprises.",
  },
  {
    href: "/cashback",
    title: "Cashback",
    text: "Comparer les plateformes de cashback et codes promo référencées.",
  },
  {
    href: "/investissement",
    title: "Investissement",
    text: "Explorer les plateformes d’investissement suivies par Afflizen.",
  },
];

const faq = [
  {
    question: "Wise est-il une banque classique ?",
    answer:
      "Non. Wise est surtout une solution de paiement internationale et de compte multidevise. Elle peut compléter une banque classique, mais ne doit pas être présentée comme une banque traditionnelle.",
  },
  {
    question: "À quoi sert un compte multidevise Wise ?",
    answer:
      "Un compte multidevise Wise peut servir à envoyer, recevoir, convertir et dépenser de l’argent dans plusieurs devises selon les produits disponibles dans le pays de résidence.",
  },
  {
    question: "Wise est-il adapté aux voyageurs, freelances et expatriés ?",
    answer:
      "Wise peut être utile pour les voyageurs, freelances, indépendants et expatriés qui gèrent des paiements ou devises à l’international, mais les frais, limites et conditions doivent être vérifiés avant chaque usage.",
  },
  {
    question: "Faut-il utiliser Wise France ou Wise Belgique ?",
    answer:
      "Il faut utiliser le lien correspondant à son pays de résidence ou d’usage : Wise France pour la France, Wise Belgique pour la Belgique. Les produits, frais et conditions peuvent varier selon le pays.",
  },
  {
    question: "Les liens Wise sur Afflizen sont-ils affiliés ?",
    answer:
      "Non. Les liens utilisés sur cette page sont des liens officiels provisoires vers Wise France et Wise Belgique. Ils ne sont pas présentés comme affiliés, partenaires ou sponsorisés.",
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

export default function WisePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link
            href="/cartes-et-paiements"
            className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
          >
            Voir la catégorie cartes & paiements
          </Link>

          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            Compte multidevise
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Wise : un compte multidevise pour payer, convertir et envoyer de
            l’argent à l’international
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Wise est une solution internationale de paiement et de transfert
            d’argent. Elle permet d’envoyer, recevoir, convertir et dépenser de
            l’argent dans plusieurs devises selon les produits disponibles dans
            votre pays. Wise peut être utile pour les voyages, freelances,
            expatriés, achats en devises et paiements internationaux.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={WISE_FRANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder au site officiel Wise France
            </a>

            <a
              href={WISE_BELGIQUE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-950 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder au site officiel Wise Belgique
            </a>
          </div>

          <div className="mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-950">
              Liens officiels France et Belgique, sans affiliation pour le moment
            </p>
            <p className="mt-2 text-sm leading-6 text-amber-950">
              Les liens utilisés sur cette page renvoient vers les sites
              officiels Wise France et Wise Belgique. Ils ne sont pas présentés
              comme des liens affiliés, partenaires, sponsorisés, parrainage,
              bonus ou offre de bienvenue.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Usage
          </p>
          <p className="mt-3 text-3xl font-bold text-emerald-600">
            International
          </p>
          <p className="mt-3 text-slate-600">
            Paiements, transferts, devises et carte selon disponibilité.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Profil
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            Voyageurs
          </p>
          <p className="mt-3 text-slate-600">
            Utile aussi pour freelances, expatriés et paiements en devises.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Affiliation
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            Aucune
          </p>
          <p className="mt-3 text-slate-600">
            Liens officiels France et Belgique, sans parrainage Afflizen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            À qui s’adresse Wise ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Wise peut intéresser les utilisateurs qui paient, reçoivent ou
            transfèrent de l’argent dans plusieurs devises : voyageurs,
            freelances, indépendants, expatriés, achats internationaux ou
            paiements à des proches et partenaires à l’étranger.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Wise peut compléter une banque classique pour certains usages
            internationaux, mais il faut vérifier les frais, limites, délais,
            devises disponibles et conditions directement sur Wise avant chaque
            opération importante.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Points forts
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              {strengths.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Limites et points de vigilance
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              {limits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Wise est-il adapté aux voyageurs, freelances et expatriés ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Wise peut être pratique pour les profils qui jonglent avec plusieurs
            devises ou pays. L’intérêt dépend toutefois du pays, de la devise, du
            mode de paiement, du bénéficiaire, du montant, des frais et des
            délais affichés au moment de l’opération.
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Compte multidevise, carte et transferts internationaux
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Wise met en avant des services autour du compte multidevise, des
            conversions, des transferts internationaux et d’une carte selon
            disponibilité. Les produits exacts, frais de carte, limites, devises
            disponibles et délais peuvent varier selon le pays de résidence.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {products.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">
            France ou Belgique : quel lien utiliser ?
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Utilisez le lien officiel correspondant à votre pays de résidence ou
            d’usage. Wise France et Wise Belgique peuvent afficher des
            informations, produits, frais ou conditions différents selon le pays.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={WISE_FRANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300 hover:bg-white/10"
            >
              <span className="font-semibold text-emerald-300">
                Wise France
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-200">
                Accéder à la page officielle française.
              </span>
            </a>

            <a
              href={WISE_BELGIQUE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300 hover:bg-white/10"
            >
              <span className="font-semibold text-emerald-300">
                Wise Belgique
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-200">
                Accéder à la page officielle belge.
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div
          id="avis"
          className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-slate-950">
            Notre avis sur Wise
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Wise est une solution intéressante à comparer pour les paiements,
            transferts et conversions de devises à l’international. Elle peut
            être utile pour les voyageurs, freelances, expatriés ou personnes qui
            réalisent régulièrement des opérations en devises.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Notre approche reste prudente : Wise peut être pratique, mais les
            frais, délais, limites, devises disponibles et conditions doivent
            être vérifiés avant chaque opération. Cette page ne constitue pas un
            conseil financier personnalisé.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_340px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">FAQ Wise</h2>

          <div className="mt-6 space-y-5">
            {faq.map((item) => (
              <div
                key={item.question}
                className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0"
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
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Pages liées</h2>

          <div className="mt-5 space-y-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-2xl border border-slate-200 p-4 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                <span className="font-semibold text-slate-950">
                  {link.title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-slate-600">
                  {link.text}
                </span>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette page est une présentation générale. Les frais de conversion,
            frais de carte, limites, devises disponibles, délais de transfert,
            pays éligibles et conditions peuvent évoluer. Vérifiez toujours les
            informations officielles Wise France ou Wise Belgique avant toute
            opération.
          </p>
        </div>
      </section>
    </main>
  );
}
