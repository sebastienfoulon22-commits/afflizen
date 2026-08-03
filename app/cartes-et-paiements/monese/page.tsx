import { createPageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import Link from "next/link";

const MONESE_OFFICIAL_LINK = "https://www.monese.com/";

export const metadata = createPageMetadata({
  title: "Monese : compte mobile, carte et paiements",
  description: "Découvrez Monese, une solution mobile pour gérer un compte, une carte Mastercard, des paiements et plusieurs devises. Avis Afflizen, points forts, limites et lien officiel provisoire.",
  path: "/cartes-et-paiements/monese",
  type: "article",
});

const strengths = [
  "Application mobile pensée pour gérer un compte, une carte et des paiements depuis un smartphone.",
  "Carte Mastercard et paiements selon les conditions, frais et pays disponibles.",
  "Fonctionnalités utiles pour les voyageurs, expatriés, frontaliers et utilisateurs mobiles.",
  "Approche internationale avec transferts, usages multi-devises et application multilingue selon disponibilité.",
  "Alternative bancaire mobile à comparer avec une banque classique, une néobanque ou un compte multidevise.",
];

const limits = [
  "Monese ne doit pas être présenté comme une banque traditionnelle complète.",
  "Les frais, cartes, devises, pays disponibles, plafonds et fonctionnalités peuvent évoluer.",
  "Les services disponibles peuvent varier selon le pays de résidence, le plan choisi et les conditions en vigueur.",
  "Le programme d’invitation Monese peut être limité, soumis à conditions et ne doit pas être présenté comme une affiliation publique.",
  "Afflizen utilise actuellement un lien officiel provisoire, sans code Monese exploitable.",
];

const useCases = [
  "Gérer un compte mobile depuis une application simple.",
  "Payer avec une carte Mastercard selon disponibilité et conditions.",
  "Voyager ou vivre entre plusieurs pays avec une solution mobile à comparer.",
  "Envoyer ou recevoir de l’argent selon les fonctionnalités disponibles.",
];

const products = [
  "Compte mobile et détails de compte à vérifier selon pays, éligibilité et conditions d’ouverture.",
  "Carte Mastercard physique ou virtuelle selon l’offre, le plan et la disponibilité locale.",
  "Paiements, virements, prélèvements, transferts internationaux et notifications selon les services actifs.",
  "Fonctionnalités multi-devises, budget, pots, Apple Pay ou Google Pay selon pays, appareil et conditions.",
];

const checks = [
  "Frais de tenue de compte, carte, retrait, paiement à l’étranger, change et transferts.",
  "Plans disponibles, plafonds, limites gratuites, frais après dépassement et délais d’exécution.",
  "Pays éligibles, justificatifs demandés, type de compte proposé et entité qui fournit le service.",
  "Conditions du système d’invitation, s’il est disponible, et compatibilité avec un éventuel code personnel.",
];

const relatedLinks = [
  {
    href: "/cartes-et-paiements",
    title: "Cartes et paiements",
    text: "Revenir à la catégorie cartes, paiements et wallets.",
  },
  {
    href: "/cartes-et-paiements/wise",
    title: "Wise",
    text: "Une solution multidevise pour paiements, conversions et transferts internationaux.",
  },
  {
    href: "/cartes-et-paiements/curve-pay",
    title: "Curve Pay",
    text: "Une application pour regrouper plusieurs cartes bancaires dans un wallet.",
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
    href: "/crypto",
    title: "Crypto",
    text: "Comparer les plateformes et outils crypto suivis par Afflizen.",
  },
  {
    href: "/investissement",
    title: "Investissement",
    text: "Explorer les plateformes d’investissement suivies par Afflizen.",
  },
];

const faq = [
  {
    question: "Monese est-il disponible en Belgique ?",
    answer:
      "Monese communique sur des services pour des clients dans l’Espace économique européen, avec une entité liée à la Belgique pour certains clients européens. La disponibilité exacte en Belgique, les cartes, frais et fonctionnalités doivent être vérifiés sur le site officiel avant inscription.",
  },
  {
    question: "Monese est-il disponible en France ?",
    answer:
      "Monese peut concerner des utilisateurs européens, mais les conditions, pays éligibles, documents demandés, frais et fonctionnalités disponibles peuvent évoluer. Il faut donc vérifier directement sur Monese depuis son pays de résidence.",
  },
  {
    question: "Monese est-il une banque classique ?",
    answer:
      "Non. Monese doit être présenté comme une application de compte mobile ou une alternative bancaire mobile. Ce n’est pas une banque traditionnelle complète avec agences physiques et tous les services d’une banque classique.",
  },
  {
    question: "Monese propose-t-il une carte Mastercard ?",
    answer:
      "Oui, Monese met en avant une carte de débit Mastercard. Les frais, plafonds, conditions, disponibilité physique ou virtuelle et fonctionnalités associées doivent être vérifiés sur le site officiel.",
  },
  {
    question: "Peut-on utiliser Monese en voyage ?",
    answer:
      "Monese peut être utile pour certains voyageurs, expatriés ou frontaliers grâce à son approche mobile, aux paiements et aux usages multi-devises selon les conditions. Les frais de change, retraits, limites et pays disponibles doivent toujours être vérifiés.",
  },
  {
    question: "Existe-t-il un parrainage Monese sur Afflizen ?",
    answer:
      "Monese propose ou a proposé un système d’invitation sous conditions, mais Afflizen n’utilise pas encore de code Monese. Le bouton renvoie donc pour l’instant vers le site officiel. Un code personnel ne sera ajouté que s’il est compatible avec les conditions Monese.",
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

function MoneseOfficialButton({
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
      href={MONESE_OFFICIAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-platform="Monese"
      data-category="cartes-et-paiements"
      data-location={location}
      data-link-url={MONESE_OFFICIAL_LINK}
      className={className}
    >
      {children}
    </a>
  );
}

export default function MonesePage() {
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

            <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
              Cartes et paiements
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Monese : compte mobile, carte Mastercard et gestion d’argent
              depuis une application
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Une alternative bancaire mobile pensée pour gérer son argent,
              payer, voyager et utiliser plusieurs devises plus facilement.
              Monese peut intéresser les utilisateurs mobiles, expatriés,
              voyageurs, frontaliers ou personnes qui veulent gérer un compte et
              une carte depuis une application.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <MoneseOfficialButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir Monese
              </MoneseOfficialButton>

              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <div className="mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Lien officiel provisoire, sans affiliation Afflizen
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Le bouton renvoie vers le site officiel Monese. Il n’est pas
                présenté comme un partenariat, un parrainage Afflizen, un code,
                une prime, un avantage garanti ou une offre réservée à Afflizen.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">Monese</h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une application de compte mobile avec carte Mastercard,
                paiements, transferts et fonctionnalités internationales selon
                disponibilité.
              </p>

              <p>
                À analyser comme une alternative bancaire mobile, pas comme une
                banque traditionnelle complète. Les frais, pays et conditions
                doivent être vérifiés directement.
              </p>
            </div>

            <MoneseOfficialButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel Monese
            </MoneseOfficialButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">Compte mobile</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Carte</p>
            <p className="mt-2 font-semibold text-slate-950">Mastercard</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Usage</p>
            <p className="mt-2 font-semibold text-slate-950">
              Paiements et devises
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
              Présentation rapide de Monese
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Monese est une application de compte mobile qui permet de gérer
              son argent depuis un smartphone, avec compte, carte Mastercard,
              paiements, transferts et fonctionnalités multi-devises selon les
              conditions en vigueur.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              La page reste volontairement prudente : Monese peut être pratique,
              mais ne doit pas être présenté comme une banque traditionnelle
              complète. Les frais, pays disponibles, cartes, devises,
              fonctionnalités et conditions doivent être vérifiés sur le site
              officiel.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À qui s’adresse Monese ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Monese peut intéresser les personnes qui veulent une solution
              mobile et flexible pour gérer un compte et une carte. Cela peut
              concerner les voyageurs, expatriés, frontaliers, utilisateurs qui
              changent souvent de pays ou personnes qui cherchent une
              alternative simple aux comptes classiques.
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

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Compte mobile, carte et paiements : ce qu’il faut comprendre
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Monese met en avant une expérience mobile pour ouvrir et utiliser
              un compte, payer avec une carte Mastercard, suivre ses dépenses,
              envoyer de l’argent et gérer certains usages internationaux. Les
              possibilités réelles dépendent toutefois du pays, du plan, de
              l’éligibilité et des conditions du moment.
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

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">
              Fonctionnalités utiles pour voyager ou gérer plusieurs devises
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Monese peut être utile pour certains usages internationaux :
              paiements à l’étranger, transferts, notifications en temps réel,
              suivi des dépenses ou gestion de plusieurs devises selon les
              services disponibles. Ces éléments doivent être comparés avec les
              frais de change, retraits, plafonds et conditions affichés par
              Monese.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-emerald-300">
                Prudence Afflizen
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Ne choisissez pas Monese uniquement pour son positionnement
                international. Vérifiez les frais réels selon vos pays, devises,
                retraits, paiements et habitudes d’utilisation.
              </p>
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-950">
                Points forts potentiels
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
                Limites et points à vérifier
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
              Frais, cartes et conditions : à vérifier sur le site officiel
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Les frais Monese ne doivent pas être résumés trop vite. Le coût
              réel dépend du pays, du plan choisi, de la carte, des retraits, du
              change, des transferts, des plafonds et des fonctionnalités
              utilisées. Les informations officielles doivent être consultées
              avant toute inscription.
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
              Monese est-il adapté aux utilisateurs en Belgique et en France ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Monese communique sur des services européens et dispose
              d’informations en français. Cela peut intéresser des utilisateurs
              en Belgique, en France ou ailleurs en Europe francophone, mais
              l’éligibilité, l’entité concernée, les cartes, les frais et les
              fonctionnalités doivent être vérifiés directement depuis le site
              officiel.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Pour un usage principal au quotidien, comparez Monese avec votre
              banque actuelle, une banque en ligne, un compte multidevise et vos
              besoins réels en paiements, virements, retraits et voyages.
            </p>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Avis Afflizen sur Monese
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Monese est une solution intéressante à comparer pour les profils
              mobiles : voyageurs, expatriés, frontaliers ou utilisateurs qui
              veulent gérer leur argent depuis une application claire, avec
              carte et paiements internationaux selon disponibilité.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Notre avis reste prudent : Monese n’est pas une banque
              traditionnelle complète, et son intérêt dépend fortement des frais,
              pays disponibles, limites, cartes, devises, conditions et règles
              du système d’invitation. Afflizen utilise actuellement un lien
              officiel provisoire vers Monese. Un éventuel code personnel ne sera
              ajouté que s’il est compatible avec les conditions Monese.
            </p>

            <div className="mt-8">
              <MoneseOfficialButton
                location="avis"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir Monese
              </MoneseOfficialButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">FAQ Monese</h2>

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
              <MoneseOfficialButton
                location="faq"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir Monese
              </MoneseOfficialButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser Monese
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Les frais de compte, carte, retrait, change et transfert.</li>
              <li>• Les pays éligibles et les documents demandés.</li>
              <li>• Le type de compte et la protection applicable aux fonds.</li>
              <li>• Les plafonds, limites et délais selon le plan choisi.</li>
              <li>• Les conditions du système d’invitation Monese.</li>
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

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette page est une présentation éditoriale et ne constitue pas un
            conseil financier, fiscal ou juridique personnalisé. Les frais,
            cartes, devises, pays disponibles, fonctionnalités, protections,
            plans, conditions et règles d’invitation peuvent évoluer. Vérifiez
            toujours les informations officielles Monese avant toute inscription
            ou utilisation.
          </p>
        </div>
      </section>
    </main>
  );
}
