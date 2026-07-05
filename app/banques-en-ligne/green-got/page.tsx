import type { Metadata } from "next";
import Link from "next/link";

const GREEN_GOT_OFFICIAL_LINK = "https://green-got.com/compte-courant";

export const metadata: Metadata = {
  title: "Green-Got : avis, compte éthique et carte | Afflizen",
  description:
    "Découvrez Green-Got, un compte et une carte orientés argent responsable. Avis Afflizen, points forts, limites, tarifs à vérifier et lien officiel provisoire.",
  alternates: {
    canonical: "https://afflizen.com/banques-en-ligne/green-got",
  },
  openGraph: {
    title: "Green-Got : avis, compte éthique et carte | Afflizen",
    description:
      "Découvrez Green-Got, un compte et une carte orientés argent responsable. Avis Afflizen, points forts, limites, tarifs à vérifier et lien officiel provisoire.",
    url: "https://afflizen.com/banques-en-ligne/green-got",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const strengths = [
  "Compte et carte pensés pour les utilisateurs qui veulent une approche plus responsable de leur argent.",
  "Positionnement engagé, avec une communication centrée sur la transparence et l’impact des projets financés.",
  "Application mobile et carte pour gérer des dépenses du quotidien selon les conditions disponibles.",
  "Peut intéresser les utilisateurs francophones qui veulent comparer une alternative bancaire plus éthique.",
  "Page officielle disponible en français, avec tarifs et conditions à vérifier avant ouverture.",
];

const limits = [
  "Green-Got ne doit pas être présenté comme une banque traditionnelle complète.",
  "Les services, tarifs, cartes, conditions, assurances, pays éligibles et fonctionnalités peuvent évoluer.",
  "L’impact écologique ne doit pas être exagéré : il faut lire les informations de transparence et les limites du modèle.",
  "La pertinence pour la France ou la Belgique doit être vérifiée directement selon la résidence, l’éligibilité et les documents demandés.",
  "Afflizen n’utilise pas encore de lien ou code de parrainage Green-Got.",
];

const benefits = [
  "Gérer un compte et une carte avec une approche plus alignée avec ses valeurs.",
  "Suivre certaines dépenses et fonctionnalités depuis l’application selon l’offre choisie.",
  "Comparer une solution engagée avec des banques mobiles plus classiques.",
  "Vérifier les tarifs à partir des informations officielles avant toute inscription.",
];

const checks = [
  "Tarifs mensuels, options, carte, plafonds, retraits, paiements et services inclus.",
  "Pays éligibles, documents demandés, IBAN, garanties et conditions d’ouverture.",
  "Fonctionnalités disponibles selon le compte choisi et l’évolution de l’offre.",
  "Conditions de parrainage éventuel, uniquement depuis le site ou l’application Green-Got.",
];

const relatedLinks = [
  {
    href: "/banques-en-ligne",
    title: "Comparatif banques en ligne Afflizen",
    text: "Revenir à la catégorie banques en ligne et comptes mobiles.",
  },
  {
    href: "/banques-en-ligne/hello-bank",
    title: "Hello bank!",
    text: "Une banque en ligne présente en France et en Belgique.",
  },
  {
    href: "/banques-en-ligne/qonto",
    title: "Qonto",
    text: "Un compte pro en ligne pour indépendants, PME et entreprises.",
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
    href: "/cartes-et-paiements/wise",
    title: "Wise",
    text: "Une solution multidevise pour paiements, conversions et transferts internationaux.",
  },
  {
    href: "/cartes-et-paiements",
    title: "Cartes et paiements",
    text: "Comparer les solutions de cartes, paiements et comptes en ligne.",
  },
  {
    href: "/investissement",
    title: "Investissement",
    text: "Explorer les plateformes d’investissement suivies par Afflizen.",
  },
];

const faq = [
  {
    question: "Green-Got est-il disponible en Belgique ?",
    answer:
      "Green-Got peut intéresser des utilisateurs francophones en France et en Belgique selon les informations disponibles, mais l’éligibilité, les services et les conditions doivent être vérifiés directement sur le site officiel Green-Got avant toute ouverture.",
  },
  {
    question: "Green-Got est-il une banque classique ?",
    answer:
      "Non. Green-Got doit plutôt être présenté comme une solution de compte et carte avec une approche engagée et responsable. Il ne faut pas le présenter comme une banque traditionnelle complète.",
  },
  {
    question: "Peut-on utiliser Green-Got comme compte principal ?",
    answer:
      "Cela dépend des besoins : revenus, virements, carte, retraits, paiements, assurances, support, pays de résidence et services attendus. Il faut comparer les conditions officielles avec celles de sa banque actuelle.",
  },
  {
    question: "Green-Got propose-t-il une carte ?",
    answer:
      "Oui, Green-Got présente une carte associée à son compte. Les caractéristiques, plafonds, frais, assurances et services disponibles doivent être vérifiés sur la page officielle.",
  },
  {
    question: "Existe-t-il un parrainage Green-Got ?",
    answer:
      "Green-Got dispose d’un système de parrainage pour ses membres, mais Afflizen n’utilise pas encore de lien ou code de parrainage Green-Got. Le bouton renvoie donc pour l’instant vers le site officiel.",
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

function GreenGotOfficialButton({
  location,
  className,
  children,
}: {
  location: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={GREEN_GOT_OFFICIAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-platform="Green-Got"
      data-category="banques-en-ligne"
      data-location={location}
      data-link-url={GREEN_GOT_OFFICIAL_LINK}
      className={className}
    >
      {children}
    </a>
  );
}

export default function GreenGotPage() {
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

          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            Banques en ligne
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Green-Got : le compte éthique pour mieux aligner son argent avec ses
            valeurs
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Une alternative bancaire engagée pour les utilisateurs francophones
            qui veulent un compte plus responsable. Green-Got propose un compte
            et une carte avec une approche orientée argent responsable, à
            comparer avec les banques mobiles et comptes en ligne plus
            classiques.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <GreenGotOfficialButton
              location="hero"
              className="rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Voir Green-Got
            </GreenGotOfficialButton>

            <Link
              href="/banques-en-ligne"
              className="rounded-full border border-slate-300 px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Comparer les banques en ligne
            </Link>
          </div>

          <div className="mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-950">
              Lien officiel provisoire, sans affiliation pour le moment
            </p>
            <p className="mt-2 text-sm leading-6 text-amber-950">
              Le bouton renvoie vers le site officiel Green-Got. Il n’est pas
              présenté comme un lien affilié, partenaire, sponsorisé,
              parrainage, réduction, code promo, offre exclusive ou mois gratuit.
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
            Compte + carte
          </p>
          <p className="mt-3 text-slate-600">
            Une solution orientée dépenses du quotidien et argent responsable.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Profil
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            Engagé
          </p>
          <p className="mt-3 text-slate-600">
            Pour les utilisateurs qui veulent mieux aligner leur argent avec
            leurs valeurs.
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
            Lien officiel provisoire, sans parrainage Afflizen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Présentation rapide de Green-Got
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Green-Got est une solution de compte et carte qui met en avant une
            approche plus responsable de l’argent. L’idée est de proposer une
            alternative aux comptes bancaires classiques pour les utilisateurs
            qui veulent donner davantage de sens à leurs dépenses et à leur
            relation bancaire.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Cette page reste volontairement prudente : Green-Got peut être une
            option intéressante à comparer, mais les tarifs, services, pays
            éligibles, conditions d’ouverture et informations d’impact doivent
            être vérifiés directement sur le site officiel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Ce que Green-Got peut apporter
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              {strengths.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Points à vérifier avant d’ouvrir un compte
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
            À qui s’adresse Green-Got ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Green-Got peut intéresser les utilisateurs qui veulent un compte et
            une carte avec une dimension plus engagée. Cela peut parler aux
            personnes qui souhaitent comparer leur banque actuelle avec une
            solution plus orientée transparence, impact et argent responsable.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {benefits.map((item) => (
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
            Green-Got est-il adapté à la Belgique et à la France ?
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Green-Got peut être pertinent pour des utilisateurs francophones en
            France et en Belgique selon les informations disponibles. Il faut
            toutefois vérifier l’éligibilité, les documents demandés, les
            services accessibles et les conditions du compte directement sur le
            site officiel avant de s’inscrire.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-semibold text-emerald-300">
              Prudence Afflizen
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Ne choisissez pas Green-Got uniquement pour son positionnement
              engagé. Comparez aussi les frais, les services, la carte, l’IBAN,
              les plafonds, le support et les besoins bancaires du quotidien.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Tarifs et conditions : rester prudent
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Green-Got affiche des tarifs à partir de certains montants mensuels
            selon le type de compte. Ces informations peuvent évoluer : il faut
            vérifier le prix actuel, les services inclus, les limites, les
            assurances, la carte, les paiements, les retraits et les conditions
            directement sur le site officiel.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {checks.map((item) => (
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
            Avis Afflizen sur Green-Got
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Green-Got est une option intéressante à comparer pour les
            utilisateurs qui veulent que leur compte courant reflète davantage
            leurs valeurs. Le positionnement est clair : compte, carte et
            approche responsable plutôt qu’une banque traditionnelle complète à
            tout faire.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Notre avis reste prudent : l’engagement peut être un vrai critère de
            choix, mais il ne doit pas faire oublier les besoins pratiques du
            quotidien. Tarifs, services, conditions, pays éligibles et limites
            doivent être vérifiés avant toute ouverture. Cette page ne constitue
            pas un conseil financier personnalisé.
          </p>

          <div className="mt-8">
            <GreenGotOfficialButton
              location="avis"
              className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
            >
              Voir Green-Got
            </GreenGotOfficialButton>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_340px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            FAQ Green-Got
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

          <div className="mt-8">
            <GreenGotOfficialButton
              location="faq"
              className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
            >
              Voir Green-Got
            </GreenGotOfficialButton>
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
            Cette page est une présentation générale. Les tarifs, services,
            cartes, assurances, pays éligibles, conditions d’ouverture,
            fonctionnalités, informations d’impact et éventuels programmes de
            parrainage peuvent évoluer. Vérifiez toujours les informations
            officielles Green-Got avant d’ouvrir un compte.
          </p>
        </div>
      </section>
    </main>
  );
}
