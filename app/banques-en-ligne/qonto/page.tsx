import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

const QONTO_FRANCE_LINK = "https://qonto.com/fr";
const QONTO_BELGIQUE_LINK = "https://qonto.com/fr-be";

export const metadata = createPageMetadata({
  title: "Qonto avis : compte pro en ligne pour indépendants et entreprises",
  description: "Notre présentation de Qonto, compte pro en ligne pour indépendants, PME et entreprises en France et en Belgique : fonctionnalités, tarifs, points forts, limites et précautions.",
  path: "/banques-en-ligne/qonto",
  type: "article",
});

const strengths = [
  "Solution de compte professionnel en ligne pensée pour les indépendants, sociétés, PME et équipes.",
  "Outils utiles pour gérer les dépenses, cartes, virements, factures et tâches administratives selon les offres.",
  "Présence en France et en Belgique avec des pages officielles dédiées.",
  "Interface moderne, plus orientée gestion pro qu’une banque grand public classique.",
  "Peut simplifier le suivi financier d’une activité si les services correspondent au statut et aux besoins.",
];

const limits = [
  "Qonto ne doit pas être confondu avec une banque grand public classique.",
  "Les offres, tarifs, services, cartes, virements, outils de facturation, comptabilité et financement peuvent varier selon le pays.",
  "Les conditions d’ouverture peuvent dépendre du statut juridique, du pays, de l’activité et du profil de l’entreprise.",
  "Certains types d’activités peuvent être refusés.",
  "Les tarifs, limites, commissions, services inclus et conditions doivent être vérifiés directement sur les sites officiels Qonto France et Belgique.",
];

const proUseCases = [
  "Séparer un compte professionnel d’un compte personnel.",
  "Gérer des cartes physiques ou virtuelles selon l’offre choisie.",
  "Suivre les dépenses d’une activité indépendante, d’une société ou d’une équipe.",
  "Centraliser certains virements, justificatifs, factures et outils administratifs.",
];

const tools = [
  "Cartes et moyens de paiement selon formule, pays et conditions.",
  "Virements, limites, commissions et services inclus à vérifier dans la grille officielle.",
  "Outils de facturation, justificatifs et comptabilité selon les offres disponibles.",
  "Services ou financements complémentaires susceptibles de varier selon le profil et le pays.",
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
    text: "Une application financière grand public à comparer pour les comptes, cartes et devises.",
  },
  {
    href: "/banques-en-ligne/n26",
    title: "N26",
    text: "Une banque mobile européenne orientée compte et carte au quotidien.",
  },
  {
    href: "/cartes-et-paiements",
    title: "Cartes et paiements",
    text: "Comparer les solutions de cartes, paiements et comptes en ligne.",
  },
  {
    href: "/investissement",
    title: "Investissement",
    text: "Explorer aussi les plateformes d’investissement suivies par Afflizen.",
  },
  {
    href: "/cashback",
    title: "Cashback",
    text: "Comparer les plateformes de cashback et codes promo référencées.",
  },
];

const faq = [
  {
    question: "Qonto est-il une banque grand public classique ?",
    answer:
      "Non. Qonto doit surtout être présenté comme une solution de compte professionnel en ligne pour indépendants, sociétés, PME et équipes. Elle ne vise pas le même usage qu’une banque grand public classique.",
  },
  {
    question: "Qonto s’adresse-t-il aux indépendants et PME ?",
    answer:
      "Oui, Qonto vise notamment les indépendants, sociétés, PME et équipes qui veulent gérer un compte pro, des cartes, des dépenses, des virements, des factures ou certaines tâches administratives selon les offres disponibles.",
  },
  {
    question: "Faut-il utiliser le lien Qonto France ou Belgique ?",
    answer:
      "Il faut utiliser le lien correspondant à son pays de résidence ou d’activité : la page France pour la France, la page Belgique pour la Belgique. Les offres, tarifs et conditions peuvent varier selon le pays.",
  },
  {
    question: "Quels points vérifier avant d’ouvrir un compte Qonto ?",
    answer:
      "Il faut vérifier les tarifs, cartes, virements, limites, commissions, services inclus, conditions d’ouverture, pays éligibles, types d’activités acceptés et outils disponibles directement sur le site officiel.",
  },
  {
    question: "Les liens Qonto sur Afflizen sont-ils affiliés ?",
    answer:
      "Non. Les liens utilisés sur cette page sont des liens officiels provisoires vers Qonto France et Qonto Belgique. Ils ne sont pas présentés comme des liens affiliés, partenaires ou sponsorisés.",
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

export default function QontoPage() {
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
            Compte pro en ligne
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Qonto : un compte pro en ligne pour indépendants, PME et entreprises
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Qonto est une solution de compte professionnel en ligne orientée
            indépendants, sociétés, PME et équipes. Elle peut aider à gérer les
            dépenses, cartes, virements, factures, justificatifs, outils
            comptables et tâches administratives selon les offres disponibles en
            France ou en Belgique.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={QONTO_FRANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder au site officiel Qonto France
            </a>

            <a
              href={QONTO_BELGIQUE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-950 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder au site officiel Qonto Belgique
            </a>
          </div>

          <div className="mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-950">
              Liens officiels France et Belgique, sans affiliation pour le moment
            </p>
            <p className="mt-2 text-sm leading-6 text-amber-950">
              Les liens utilisés sur cette page renvoient vers les sites
              officiels Qonto France et Qonto Belgique. Ils ne sont pas présentés
              comme des liens affiliés, partenaires, sponsorisés, parrainage,
              bonus ou offre de bienvenue.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Profil
          </p>
          <p className="mt-3 text-3xl font-bold text-emerald-600">
            Professionnels
          </p>
          <p className="mt-3 text-slate-600">
            Indépendants, sociétés, PME et équipes selon statut et conditions.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Usage
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            Compte pro
          </p>
          <p className="mt-3 text-slate-600">
            Cartes, virements, factures, dépenses et administration selon les
            offres.
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
            À qui s’adresse Qonto ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Qonto s’adresse principalement aux professionnels qui veulent un
            compte dédié à leur activité : indépendants, sociétés, PME, équipes
            ou structures avec plusieurs utilisateurs. La plateforme se distingue
            d’une banque grand public classique par son orientation pro :
            dépenses, cartes, justificatifs, facturation, comptabilité et suivi
            administratif.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Avant d’ouvrir un compte, il faut comparer les offres selon son
            statut, son pays, son activité, les frais, les cartes nécessaires et
            les outils réellement utiles pour l’entreprise.
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
            Qonto est-il adapté aux indépendants et PME ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Qonto peut être adapté aux indépendants et PME qui veulent structurer
            leur gestion financière sans multiplier les outils. La valeur dépend
            toutefois du statut juridique, du volume d’opérations, du nombre de
            cartes, des besoins de facturation et des outils comptables attendus.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {proUseCases.map((item) => (
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
            d’activité. Les pages Qonto France et Qonto Belgique peuvent afficher
            des offres, tarifs, conditions, services ou informations
            réglementaires différents.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={QONTO_FRANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300 hover:bg-white/10"
            >
              <span className="font-semibold text-emerald-300">
                Qonto France
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-200">
                Accéder à la page officielle française.
              </span>
            </a>

            <a
              href={QONTO_BELGIQUE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300 hover:bg-white/10"
            >
              <span className="font-semibold text-emerald-300">
                Qonto Belgique
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
            Tarifs, cartes, virements et outils pro
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Les tarifs, cartes, virements, plafonds, commissions, outils de
            facturation, fonctions comptables et services inclus doivent être
            vérifiés directement sur Qonto. Les offres peuvent varier selon le
            pays, le statut de l’entreprise, le nombre d’utilisateurs et les
            services nécessaires.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tools.map((item) => (
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
            Notre avis sur Qonto
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Qonto est une option sérieuse à comparer pour les professionnels qui
            veulent un compte pro en ligne avec une interface moderne et des
            outils orientés gestion d’activité. Son intérêt dépend surtout du
            pays, du statut, du volume d’opérations, des cartes nécessaires et du
            besoin réel d’outils de facturation ou de comptabilité.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Notre approche reste prudente : Qonto peut être utile pour une
            activité professionnelle, mais les tarifs, conditions, limites et
            services inclus doivent être vérifiés avant toute ouverture. Cette
            page ne constitue pas un conseil juridique, fiscal ou financier
            personnalisé.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_340px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">FAQ Qonto</h2>

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
            Cette page est une présentation générale. Les offres, tarifs,
            services, cartes, virements, outils, conditions d’ouverture, pays
            éligibles et activités acceptées peuvent évoluer. Vérifiez toujours
            les informations officielles Qonto France ou Qonto Belgique avant de
            créer un compte professionnel.
          </p>
        </div>
      </section>
    </main>
  );
}
