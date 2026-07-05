import type { Metadata } from "next";
import Link from "next/link";

const HELLO_BANK_FRANCE_LINK = "https://www.hellobank.fr/";
const HELLO_BANK_BELGIQUE_LINK = "https://www.hellobank.be/fr";

export const metadata: Metadata = {
  title: "Hello bank! avis : banque en ligne en France et en Belgique",
  description:
    "Notre présentation de Hello bank!, banque en ligne et mobile présente en France et en Belgique : comptes, cartes, services, points forts, limites, frais et précautions.",
  alternates: {
    canonical: "https://afflizen.com/banques-en-ligne/hello-bank",
  },
  openGraph: {
    title: "Hello bank! avis : banque en ligne en France et en Belgique",
    description:
      "Notre présentation de Hello bank!, banque en ligne et mobile présente en France et en Belgique : comptes, cartes, services, points forts, limites, frais et précautions.",
    url: "https://afflizen.com/banques-en-ligne/hello-bank",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const strengths = [
  "Banque en ligne et mobile connue, avec des offres dédiées en France et en Belgique.",
  "Alternative plus digitale à une banque traditionnelle pour gérer un compte, une carte et des paiements.",
  "Hello bank! France est liée à BNP Paribas, tandis que Hello bank! Belgique est liée à BNP Paribas Fortis.",
  "Peut convenir aux utilisateurs qui veulent suivre leurs opérations depuis une interface en ligne ou mobile.",
  "Présence de deux sites officiels distincts, utile pour comparer l’offre selon son pays de résidence.",
];

const limits = [
  "Hello bank! France et Hello bank! Belgique sont deux offres distinctes : il ne faut pas mélanger leurs conditions.",
  "Les cartes, frais, services, crédits, épargne, assurances et conditions peuvent varier selon le pays.",
  "Les éventuelles offres commerciales, primes ou avantages doivent être vérifiés directement sur les sites officiels.",
  "Une banque en ligne ne correspond pas forcément à tous les besoins, notamment pour les profils qui veulent une agence ou un accompagnement très personnalisé.",
  "Les tarifs, documents contractuels, conditions d’ouverture et critères d’éligibilité doivent être lus avant toute inscription.",
];

const services = [
  "Compte courant, carte et paiements selon les offres disponibles dans le pays.",
  "Application mobile et espace en ligne pour suivre les opérations et gérer certains services.",
  "Virements, retraits, plafonds et frais à vérifier dans les documents tarifaires officiels.",
  "Services complémentaires possibles, comme l’épargne, le crédit ou l’assurance, selon pays et conditions.",
];

const beginnerUseCases = [
  "Ouvrir un compte dans une banque en ligne connue.",
  "Gérer une carte et des paiements depuis une interface digitale.",
  "Comparer une offre mobile à une banque traditionnelle.",
  "Choisir le site officiel correspondant à son pays de résidence.",
];

const relatedLinks = [
  {
    href: "/banques-en-ligne",
    title: "Comparatif banques en ligne Afflizen",
    text: "Revenir à la catégorie banques en ligne et comptes mobiles.",
  },
  {
    href: "/banques-en-ligne/revolut",
    title: "Revolut",
    text: "Une application financière mobile à comparer pour les comptes, cartes et devises.",
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
    href: "/cartes-et-paiements",
    title: "Cartes et paiements",
    text: "Comparer les solutions de cartes, paiements et comptes en ligne.",
  },
  {
    href: "/cartes-et-paiements/wise",
    title: "Wise",
    text: "Une solution multidevise pour paiements, conversions et transferts internationaux.",
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
    question: "Hello bank! est-elle disponible en France et en Belgique ?",
    answer:
      "Oui, Hello bank! dispose de pages officielles pour la France et la Belgique. Il faut toutefois bien distinguer les deux offres, car les produits, frais, services et conditions peuvent varier selon le pays.",
  },
  {
    question: "Hello bank! France et Hello bank! Belgique sont-elles identiques ?",
    answer:
      "Non. Hello bank! France est liée à BNP Paribas, tandis que Hello bank! Belgique est liée à BNP Paribas Fortis. Les conditions françaises et belges ne doivent pas être mélangées.",
  },
  {
    question: "Quels points vérifier avant d’ouvrir un compte Hello bank! ?",
    answer:
      "Il faut vérifier les tarifs, cartes disponibles, frais de retrait ou de paiement, conditions d’ouverture, plafonds, services inclus, documents contractuels et éventuelles offres commerciales directement sur le site officiel du pays concerné.",
  },
  {
    question: "Hello bank! convient-elle aux débutants ?",
    answer:
      "Hello bank! peut convenir aux utilisateurs qui veulent une banque en ligne connue et une gestion digitale simple. Le bon choix dépend toutefois du pays, des frais, de la carte souhaitée, du besoin d’accompagnement et des services bancaires attendus.",
  },
  {
    question: "Les liens Hello bank! sur Afflizen sont-ils affiliés ?",
    answer:
      "Non. Les liens utilisés sur cette page sont des liens officiels provisoires vers Hello bank! France et Hello bank! Belgique. Ils ne sont pas présentés comme des liens affiliés, partenaires ou sponsorisés.",
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

export default function HelloBankPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link
            href="/banques-en-ligne"
            className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
          >
            Voir la catégorie banques en ligne
          </Link>

          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700">
            Banque en ligne
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Hello bank! : une banque en ligne pour gérer son compte en France ou
            en Belgique
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Hello bank! est une banque en ligne et mobile présente en France et
            en Belgique. Elle permet de gérer un compte, une carte, des
            paiements et certains services bancaires selon le pays. Hello bank!
            France est liée à BNP Paribas, tandis que Hello bank! Belgique est
            liée à BNP Paribas Fortis.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={HELLO_BANK_FRANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder au site officiel Hello bank! France
            </a>

            <a
              href={HELLO_BANK_BELGIQUE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-950 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder au site officiel Hello bank! Belgique
            </a>
          </div>

          <div className="mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-950">
              Liens officiels France et Belgique, sans affiliation pour le moment
            </p>
            <p className="mt-2 text-sm leading-6 text-amber-950">
              Les liens utilisés sur cette page renvoient vers les sites
              officiels Hello bank! France et Hello bank! Belgique. Ils ne sont
              pas présentés comme des liens affiliés, partenaires, sponsorisés,
              parrainage, bonus, code promo ou offre de bienvenue.
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
            Quotidien
          </p>
          <p className="mt-3 text-slate-600">
            Compte, carte, paiements et services bancaires selon pays et
            conditions.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Pays
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            France / Belgique
          </p>
          <p className="mt-3 text-slate-600">
            Deux sites officiels et deux offres à comparer séparément.
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
            À qui s’adresse Hello bank! ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Hello bank! peut intéresser les utilisateurs qui veulent une banque
            en ligne connue, avec une gestion mobile du compte, de la carte et
            des paiements. Elle peut servir d’alternative plus digitale à une
            banque traditionnelle, selon les besoins et les services disponibles
            dans le pays concerné.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Le choix doit rester prudent : une offre française ne se compare pas
            automatiquement à une offre belge. Avant d’ouvrir un compte, il faut
            vérifier les tarifs, les cartes, les frais, les documents officiels,
            les services inclus et les conditions d’éligibilité sur le site
            Hello bank! correspondant à son pays.
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
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">
            Hello bank! France ou Belgique : quel lien utiliser ?
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Utilisez le lien officiel correspondant à votre pays de résidence ou
            d’usage. Les produits, tarifs, cartes, services, crédits, épargne,
            assurances, conditions et documents officiels peuvent être différents
            entre Hello bank! France et Hello bank! Belgique.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={HELLO_BANK_FRANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300 hover:bg-white/10"
            >
              <span className="font-semibold text-emerald-300">
                Hello bank! France
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-200">
                Accéder à la page officielle française.
              </span>
            </a>

            <a
              href={HELLO_BANK_BELGIQUE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300 hover:bg-white/10"
            >
              <span className="font-semibold text-emerald-300">
                Hello bank! Belgique
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-200">
                Accéder à la page officielle belge francophone.
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Compte, carte, paiements et services bancaires
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Hello bank! met en avant des services de banque en ligne autour du
            compte, de la carte, des paiements et de certains services bancaires.
            Les produits exacts, les frais, les plafonds, les conditions
            d’ouverture et les services complémentaires varient selon le pays.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {services.map((item) => (
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
            Hello bank! est-elle adaptée aux débutants ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Hello bank! peut être adaptée aux débutants qui veulent gérer un
            compte bancaire depuis une interface digitale, à condition de bien
            comprendre l’offre choisie. Il faut comparer les frais, cartes,
            retraits, paiements, services inclus et options utiles selon son pays
            et son usage réel.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {beginnerUseCases.map((item) => (
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
        <div
          id="avis"
          className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-slate-950">
            Notre avis sur Hello bank!
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Hello bank! est une option sérieuse à comparer pour les utilisateurs
            qui veulent une banque en ligne adossée à un grand groupe bancaire
            dans leur pays. Son intérêt dépend surtout de la résidence, de la
            carte souhaitée, des frais, des services attendus et de la place que
            l’on veut donner au digital dans sa gestion bancaire.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Notre approche reste prudente : Hello bank! France et Hello bank!
            Belgique doivent être comparées séparément. Les tarifs, conditions,
            documents officiels et éventuelles offres commerciales doivent être
            vérifiés directement avant toute ouverture. Cette page ne constitue
            pas un conseil financier personnalisé.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_340px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            FAQ Hello bank!
          </h2>

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
            Cette page est une présentation générale. Les produits, cartes,
            frais, services bancaires, crédits, épargne, assurances, conditions
            d’ouverture, documents officiels et offres commerciales peuvent
            évoluer. Vérifiez toujours les informations officielles Hello bank!
            France ou Hello bank! Belgique avant toute ouverture de compte.
          </p>
        </div>
      </section>
    </main>
  );
}
