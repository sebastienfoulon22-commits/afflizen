import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

const MYPOS_BELGIUM_OFFICIAL_LINK = "https://www.mypos.com/fr-be";
const MYPOS_FRANCE_OFFICIAL_LINK = "https://www.mypos.com/fr-fr";

export const metadata: Metadata = {
  title: "myPOS : terminaux de paiement pour professionnels | Afflizen",
  description:
    "Découvrez myPOS, une solution de terminaux de paiement et d'encaissement destinée aux indépendants et entreprises en Belgique et en France. Fonctionnement, avantages, limites et frais à vérifier.",
  alternates: {
    canonical: "https://afflizen.com/cartes-et-paiements/mypos",
  },
  openGraph: {
    title: "myPOS : terminaux de paiement pour professionnels | Afflizen",
    description:
      "Découvrez myPOS, une solution de terminaux de paiement et d'encaissement destinée aux indépendants et entreprises en Belgique et en France. Fonctionnement, avantages, limites et frais à vérifier.",
    url: "https://afflizen.com/cartes-et-paiements/mypos",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const professionals = [
  "Indépendants, freelances et professions libérales qui encaissent des clients en présentiel.",
  "Commerçants, artisans, restaurateurs et activités de service avec paiement par carte.",
  "Entreprises qui vendent en déplacement, sur salon, à domicile ou lors d’événements.",
  "PME qui veulent comparer terminaux, encaissement en ligne, liens de paiement et cartes professionnelles.",
];

const products = [
  "Terminaux de paiement physiques pour encaisser les cartes en magasin ou en déplacement.",
  "Paiements mobiles et acceptation possible depuis un téléphone compatible selon conditions.",
  "Paiements en ligne, liens de paiement et outils utiles pour vendre à distance.",
  "Compte professionnel de monnaie électronique, cartes physiques ou virtuelles et suivi des transactions.",
];

const strengths = [
  "Solution pensée principalement pour les professionnels, pas pour les particuliers.",
  "Utilisable pour des ventes physiques, mobiles ou en ligne selon les services disponibles.",
  "Offre qui peut réunir terminaux, encaissement, compte professionnel et cartes myPOS.",
  "Pages officielles en français pour la Belgique et la France.",
  "Alternative à comparer avec une banque, un terminal classique ou une autre solution d’encaissement.",
];

const limits = [
  "myPOS ne doit pas être présenté comme une banque traditionnelle belge ou française.",
  "L’ouverture et l’utilisation sont soumises à vérification, acceptation et conditions en vigueur.",
  "Les services, terminaux, cartes et fonctionnalités peuvent varier entre la Belgique et la France.",
  "Les tarifs peuvent dépendre du terminal, du pays, du type de carte, du volume et de la transaction.",
  "Des frais de transaction, change, remboursement, retrait ou autres frais peuvent s’appliquer.",
];

const checks = [
  "Prix du terminal, éventuelle TVA, frais de livraison, accessoires et conditions de retour.",
  "Frais de transaction selon carte, pays, devise, moyen de paiement, volume et activité.",
  "Frais de change, retrait, remboursement, virement ou autres opérations professionnelles.",
  "Délais et modalités de versement des encaissements selon les conditions applicables.",
  "Obligations comptables, fiscales et réglementaires dans le pays de l’entreprise.",
];

const relatedLinks = [
  {
    href: "/cartes-et-paiements",
    title: "Cartes et paiements",
    text: "Revenir à la catégorie cartes, paiements, wallets et solutions d’encaissement.",
  },
  {
    href: "/cartes-et-paiements/sumup",
    title: "SumUp",
    text: "Une autre solution de paiement pour accepter les cartes et le sans contact.",
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
    href: "/banques-en-ligne/qonto",
    title: "Qonto",
    text: "Un compte professionnel en ligne pour indépendants, PME et entreprises.",
  },
  {
    href: "/banques-en-ligne",
    title: "Banques en ligne",
    text: "Comparer les comptes mobiles, comptes pros et applications financières suivies.",
  },
];

const faq = [
  {
    question: "myPOS est-il disponible en Belgique ?",
    answer:
      "myPOS propose un site officiel en français pour la Belgique. Les professionnels belges doivent vérifier l’éligibilité, les documents demandés, les terminaux, les frais, les délais de versement et les conditions applicables.",
  },
  {
    question: "myPOS est-il disponible en France ?",
    answer:
      "myPOS propose un site officiel en français pour la France. Les entreprises françaises doivent vérifier les services disponibles, les tarifs, la TVA éventuelle, les modalités d’encaissement et les obligations professionnelles.",
  },
  {
    question: "myPOS est-il réservé aux entreprises ?",
    answer:
      "myPOS est principalement destiné aux professionnels : indépendants, commerçants, artisans, professions libérales, restaurateurs, services et PME. Cette page ne vise pas un usage personnel grand public.",
  },
  {
    question: "myPOS est-il une banque ?",
    answer:
      "Non. myPOS fournit des services de paiement et de monnaie électronique. Le compte myPOS ne doit pas être présenté comme un compte bancaire traditionnel belge ou français.",
  },
  {
    question: "Quels terminaux de paiement myPOS propose-t-il ?",
    answer:
      "myPOS peut proposer plusieurs terminaux de paiement selon le pays et les conditions. Les modèles disponibles, prix, accessoires, compatibilités et frais doivent être vérifiés sur le site officiel.",
  },
  {
    question: "Peut-on accepter des paiements avec un téléphone ?",
    answer:
      "Certaines fonctionnalités peuvent permettre d’accepter des paiements depuis un téléphone compatible. La disponibilité dépend du pays, de l’appareil, des cartes acceptées et des conditions techniques en vigueur.",
  },
  {
    question: "Peut-on encaisser des paiements en ligne ?",
    answer:
      "myPOS peut proposer des solutions d’encaissement en ligne et des liens de paiement. Les fonctionnalités exactes, frais, limites et conditions doivent être vérifiés pour la Belgique ou la France.",
  },
  {
    question: "Existe-t-il des frais mensuels ?",
    answer:
      "Les frais peuvent varier selon le service, le terminal, le pays, le volume et le type d’opérations. Il faut vérifier la tarification officielle, car certains prix peuvent être hors TVA ou évoluer.",
  },
  {
    question: "Quels frais de transaction faut-il vérifier ?",
    answer:
      "Il faut vérifier les frais par carte, pays, devise, type de transaction, encaissement en ligne ou en magasin, remboursement, retrait, change et éventuels frais complémentaires.",
  },
  {
    question: "myPOS convient-il aux indépendants ?",
    answer:
      "myPOS peut convenir à certains indépendants qui doivent encaisser des paiements par carte, en mobilité ou en ligne. L’intérêt dépend de l’activité, du volume, des frais et des obligations professionnelles.",
  },
  {
    question: "Afflizen utilise-t-il déjà un lien affilié myPOS ?",
    answer:
      "Non. Afflizen utilise actuellement les sites officiels myPOS Belgique et France. Un lien affilié professionnel pourra être ajouté ultérieurement après acceptation dans le programme partenaire.",
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

function MyposOfficialButton({
  href,
  country,
  location,
  className,
  children,
}: {
  href: string;
  country: "Belgique" | "France";
  location: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-platform="myPOS"
      data-category="cartes-et-paiements"
      data-location={`${location}-${country.toLowerCase()}`}
      data-link-url={href}
      className={className}
    >
      {children}
    </a>
  );
}

export default function MyposPage() {
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
              myPOS : terminaux de paiement et solutions d’encaissement pour
              professionnels
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Une solution destinée aux indépendants et entreprises en Belgique
              et en France pour accepter des paiements en magasin, en déplacement
              ou en ligne. myPOS doit être analysé comme un service professionnel
              de paiement et de monnaie électronique, pas comme une banque
              traditionnelle.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <MyposOfficialButton
                href={MYPOS_BELGIUM_OFFICIAL_LINK}
                country="Belgique"
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir myPOS Belgique
              </MyposOfficialButton>

              <MyposOfficialButton
                href={MYPOS_FRANCE_OFFICIAL_LINK}
                country="France"
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir myPOS France
              </MyposOfficialButton>
            </div>

            <div className="mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Liens officiels provisoires, sans affiliation Afflizen
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Afflizen utilise actuellement des liens officiels non affiliés
                vers myPOS Belgique et myPOS France. Un lien affilié
                professionnel pourra être ajouté ultérieurement après acceptation
                dans le programme partenaire.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">myPOS</h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une solution professionnelle pour accepter des paiements par
                carte, en magasin, en mobilité ou en ligne selon les services
                disponibles.
              </p>

              <p>
                Les frais, terminaux, pays, délais de versement et conditions
                doivent être vérifiés sur le site officiel correspondant.
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              <MyposOfficialButton
                href={MYPOS_BELGIUM_OFFICIAL_LINK}
                country="Belgique"
                location="sidebar"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
              >
                myPOS Belgique
              </MyposOfficialButton>

              <MyposOfficialButton
                href={MYPOS_FRANCE_OFFICIAL_LINK}
                country="France"
                location="sidebar"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-emerald-300 hover:bg-white/10"
              >
                myPOS France
              </MyposOfficialButton>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Paiement pro
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Usage</p>
            <p className="mt-2 font-semibold text-slate-950">
              Magasin, mobile, web
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Public</p>
            <p className="mt-2 font-semibold text-slate-950">
              Pros BE et FR
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Afflizen</p>
            <p className="mt-2 font-semibold text-slate-950">
              Liens officiels
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Présentation de myPOS
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              myPOS propose des solutions professionnelles autour de
              l’encaissement : terminaux de paiement, paiements mobiles,
              paiements en ligne, liens de paiement, compte professionnel de
              monnaie électronique, cartes professionnelles et suivi des
              transactions selon les conditions et pays disponibles.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              La plateforme s’adresse d’abord aux professionnels qui doivent
              encaisser des clients. Elle ne doit pas être présentée comme un
              compte bancaire personnel, une banque traditionnelle, une solution
              gratuite dans tous les cas ou une garantie d’augmentation du chiffre
              d’affaires.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À quels professionnels myPOS peut-il convenir ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              myPOS peut convenir à des activités qui encaissent en boutique,
              chez le client, en déplacement, sur événement ou en ligne. L’intérêt
              réel dépend du type d’activité, des volumes, des cartes acceptées,
              des outils nécessaires et des frais applicables.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {professionals.map((item) => (
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
              Terminaux de paiement physiques
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              myPOS peut proposer plusieurs terminaux de paiement pour accepter
              les cartes en magasin, sur comptoir ou en mobilité. Le choix du
              matériel doit être comparé avec le prix du terminal, la TVA
              éventuelle, les frais de transaction, la connectivité, l’autonomie,
              les accessoires et les conditions de service.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">
              Paiements mobiles et encaissement depuis un téléphone
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Un terminal de paiement n’est pas forcément nécessaire pour toutes
              les fonctionnalités. Certaines solutions peuvent permettre
              d’accepter des paiements depuis un téléphone compatible, selon le
              pays, l’appareil, la carte utilisée, les limites techniques et les
              conditions myPOS en vigueur.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Paiements en ligne et liens de paiement
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              myPOS peut aussi être utilisé pour vendre à distance grâce à des
              solutions d’encaissement en ligne ou des liens de paiement. Ces
              services peuvent aider des prestataires, boutiques ou activités
              hybrides, mais les frais, délais, limites, pays et moyens de
              paiement acceptés doivent être contrôlés avant souscription.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Compte professionnel et cartes myPOS
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              myPOS peut inclure un compte professionnel de monnaie électronique,
              des cartes professionnelles physiques ou virtuelles, et des outils
              de suivi des transactions. Ce compte ne doit pas être présenté
              comme un compte bancaire traditionnel avec l’ensemble des services
              d’une banque belge ou française.
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

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              myPOS pour les entreprises belges et françaises
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Les services, terminaux, tarifs, documents demandés et
              fonctionnalités peuvent différer entre la Belgique et la France.
              Un professionnel doit donc utiliser le site officiel correspondant
              à son pays et vérifier les conditions avant de commander un
              terminal ou d’ouvrir un compte.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <MyposOfficialButton
                href={MYPOS_BELGIUM_OFFICIAL_LINK}
                country="Belgique"
                location="country-section"
                className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 font-semibold text-emerald-800 transition hover:border-emerald-400 hover:bg-white"
              >
                Site officiel myPOS Belgique
              </MyposOfficialButton>

              <MyposOfficialButton
                href={MYPOS_FRANCE_OFFICIAL_LINK}
                country="France"
                location="country-section"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-semibold text-slate-900 transition hover:border-emerald-300 hover:bg-white"
              >
                Site officiel myPOS France
              </MyposOfficialButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Tarifs, commissions et frais à vérifier
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Il ne faut pas résumer myPOS à un tarif unique. Les coûts peuvent
              dépendre du terminal choisi, du type de carte, du pays, du volume,
              de la devise, du moyen de paiement et de la transaction. Certains
              prix peuvent être affichés hors TVA et les tarifs peuvent évoluer.
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
                Limites et points de vigilance
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
              Programme d’affiliation et de recommandation
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              myPOS dispose d’un programme d’affiliation professionnel pouvant
              fournir un lien de suivi après acceptation, notamment pour des
              articles, sites internet, publicités ou publications sociales.
              myPOS propose aussi un programme de recommandation client après
              ouverture et validation d’un compte.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Pour Afflizen, le lien à privilégier plus tard sera le lien
              d’affiliation professionnel, sauf confirmation explicite qu’un lien
              personnel de recommandation autorise un usage commercial public.
              Aujourd’hui, Afflizen utilise uniquement les sites officiels myPOS.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              myPOS face à une banque ou un terminal classique
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Une banque traditionnelle peut proposer des services bancaires
              larges, du financement, un accompagnement ou des offres de TPE via
              ses propres partenaires. myPOS se positionne plutôt comme une
              solution spécialisée dans l’encaissement, les paiements et certains
              services de monnaie électronique.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Le bon choix dépend du volume de transactions, du besoin de
              mobilité, des frais réels, des délais de versement, de la
              compatibilité avec la comptabilité et du niveau d’accompagnement
              attendu par le professionnel.
            </p>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Avis Afflizen sur myPOS
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              myPOS est une solution pertinente à comparer pour les professionnels
              belges et français qui veulent encaisser des paiements par carte en
              boutique, en déplacement ou en ligne. Elle peut être intéressante
              pour les indépendants, commerçants, artisans, restaurateurs,
              professions libérales, services et PME.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Notre avis reste prudent : les frais, fonctionnalités, délais de
              versement, terminaux, cartes, pays et obligations professionnelles
              doivent être vérifiés avant de s’engager. Cette page ne fournit pas
              de conseil juridique, fiscal ou comptable personnalisé.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <MyposOfficialButton
                href={MYPOS_BELGIUM_OFFICIAL_LINK}
                country="Belgique"
                location="avis"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir myPOS Belgique
              </MyposOfficialButton>

              <MyposOfficialButton
                href={MYPOS_FRANCE_OFFICIAL_LINK}
                country="France"
                location="avis"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir myPOS France
              </MyposOfficialButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">FAQ myPOS</h2>

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

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">
              Accéder aux sites officiels myPOS
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Choisissez le site correspondant à votre pays pour vérifier les
              tarifs, terminaux, conditions, services disponibles et documents
              demandés.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <MyposOfficialButton
                href={MYPOS_BELGIUM_OFFICIAL_LINK}
                country="Belgique"
                location="final"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-400"
              >
                Voir myPOS Belgique
              </MyposOfficialButton>

              <MyposOfficialButton
                href={MYPOS_FRANCE_OFFICIAL_LINK}
                country="France"
                location="final"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:border-emerald-300 hover:bg-white/10"
              >
                Voir myPOS France
              </MyposOfficialButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser myPOS
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Les frais par transaction et par moyen de paiement.</li>
              <li>• Le prix du terminal et l’éventuelle TVA.</li>
              <li>• Les délais et modalités de versement.</li>
              <li>• Les services disponibles en Belgique ou en France.</li>
              <li>• Les obligations comptables, fiscales et réglementaires.</li>
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
            conseil juridique, fiscal ou comptable personnalisé. myPOS fournit
            des services de paiement et de monnaie électronique, mais n’est pas
            présenté comme une banque traditionnelle belge ou française. Les
            tarifs, commissions, frais, prix hors TVA éventuels, terminaux,
            cartes, délais de versement, fonctionnalités, pays disponibles et
            conditions peuvent évoluer. Vérifiez toujours les informations
            officielles myPOS Belgique ou myPOS France avant toute souscription.
          </p>
        </div>
      </section>
    </main>
  );
}
