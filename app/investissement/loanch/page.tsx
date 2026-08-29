import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import type { ReactNode } from "react";

const LOANCH_AFFILIATE_LINK =
  "https://c.trackmytarget.com/?a=mt4qfe&i=20ctay";

export const metadata = createPageMetadata({
  title: "Loanch avis : prêts P2P et Auto Invest",
  description:
    "Découvrez Loanch, sa cession de créances sur des prêts à la consommation, Auto Invest, le bonus de 20 € sous conditions et les risques à connaître.",
  path: "/investissement/loanch",
  type: "article",
});

const steps = [
  {
    title: "Créer et vérifier son compte",
    text: "L’investisseur ouvre un compte puis réalise le contrôle d’identité demandé. Une preuve d’adresse peut également être requise.",
  },
  {
    title: "Approvisionner le compte",
    text: "Les fonds sont versés sur le compte Loanch avant d’être affectés aux créances disponibles. Les délais et frais éventuels doivent être vérifiés.",
  },
  {
    title: "Choisir une créance",
    text: "La sélection peut être manuelle ou automatisée avec Auto Invest lorsqu’il est disponible, selon les critères définis par l’utilisateur.",
  },
  {
    title: "Suivre les paiements",
    text: "Les remboursements dépendent des emprunteurs, des prêteurs ou originators et des contrats applicables à chaque créance acquise.",
  },
];

const strengths = [
  "Accès à des créances liées à des prêts à la consommation.",
  "Sélection manuelle ou Auto Invest lorsque la fonctionnalité est disponible.",
  "Paramètres d’automatisation configurables selon les opportunités présentes.",
  "Informations sur les originators et les créances avant investissement.",
  "Bonus de premier investissement de 20 € annoncé jusqu’au 31 décembre 2026.",
  "Belgique et France indiquées comme éligibles par le programme partenaire.",
];

const risks = [
  "Perte partielle ou totale du capital investi.",
  "Défaut ou retard de paiement de l’emprunteur.",
  "Défaillance du prêteur, de l’originator, du servicer ou de l’obligé au rachat.",
  "Risque opérationnel ou financier lié à la plateforme Loanch.",
  "Risque juridique et contractuel propre à la cession de créances.",
  "Liquidité limitée et impossibilité éventuelle de sortir avant l’échéance.",
  "Rendement, intérêts et calendrier de remboursement non garantis.",
  "Risque de change, réglementaire ou fiscal selon la créance et le pays concerné.",
];

const profiles = [
  {
    title: "Investisseur averti",
    text: "Pour une personne capable d’étudier les contrats, l’originator, la durée et le risque de chaque créance.",
  },
  {
    title: "Portefeuille diversifié",
    text: "Pour compléter prudemment un portefeuille existant avec une poche P2P limitée et répartie.",
  },
  {
    title: "Capital immobilisable",
    text: "Pour un investisseur qui peut conserver ses positions jusqu’à leur terme et supporter une perte.",
  },
];

const relatedLinks = [
  {
    href: "/investissement/7harvests",
    title: "7harvests",
    text: "Une plateforme suisse proposant plusieurs catégories de prêts P2P.",
  },
  {
    href: "/investissement/lendermarket",
    title: "Lendermarket",
    text: "Une marketplace de prêts P2P avec gestion manuelle et automatisée.",
  },
  {
    href: "/investissement/monefit",
    title: "Monefit SmartSaver",
    text: "Une solution alternative liée à un portefeuille de prêts européens.",
  },
  {
    href: "/investissement",
    title: "Comparatif investissement",
    text: "Comparer les plateformes d’investissement suivies par Afflizen.",
  },
];

const faq = [
  {
    question: "Qu’est-ce que Loanch ?",
    answer:
      "Loanch est une plateforme d’investissement donnant accès à des créances liées à des prêts à la consommation. Elle est actuellement exploitée par PRZEMEK SAVJETOVANJE d.o.o., société enregistrée en Croatie.",
  },
  {
    question: "Loanch est-elle une banque ou un courtier ?",
    answer:
      "Non. Les documents contractuels présentent Loanch comme l’opérateur d’une plateforme fondée principalement sur la cession de créances. Sauf indication contraire dans un contrat précis, Loanch n’est ni le prêteur, ni l’emprunteur, ni le débiteur principal de la créance.",
  },
  {
    question: "Comment fonctionne la cession de créances sur Loanch ?",
    answer:
      "L’investisseur acquiert tout ou partie des droits attachés à une créance au moyen d’un contrat de cession. Ses droits et paiements dépendent donc du contrat, de l’emprunteur et des différentes parties chargées du prêt et de son recouvrement.",
  },
  {
    question: "Quels prêts sont proposés sur Loanch ?",
    answer:
      "Loanch présente principalement des créances issues de prêts à la consommation accordés par des sociétés de crédit, notamment en Asie du Sud et du Sud-Est. La disponibilité et les partenaires peuvent évoluer.",
  },
  {
    question: "Peut-on utiliser Auto Invest sur Loanch ?",
    answer:
      "Oui, lorsqu’il est disponible. Auto Invest affecte automatiquement les fonds aux créances correspondant aux paramètres définis. Chaque allocation produit des effets juridiques et l’automatisation ne supprime aucun risque.",
  },
  {
    question: "Comment obtenir le bonus Loanch de 20 € ?",
    answer:
      "L’offre annoncée du 28 juillet au 31 décembre 2026 est réservée aux nouveaux investisseurs. Après le KYC, et une preuve d’adresse si elle est demandée, il faut déposer puis investir au moins 500 € dans les sept jours suivant la vérification, sur des prêts d’une durée minimale de 60 jours. Le bonus est soumis aux conditions en vigueur.",
  },
  {
    question: "Quelles sont les conditions de la campagne Early Bird Returns ?",
    answer:
      "Une communication partenaire annonce une campagne du 1er au 30 septembre 2026 pour les nouveaux investisseurs et les investisseurs existants. Elle concerne de nouveaux dépôts investis dans des prêts Tambadana éligibles, avec jusqu’à 3 % de cashback du 1er au 10 septembre, 2 % du 11 au 20 et 1 % du 21 au 30, sous conditions.",
  },
  {
    question: "Loanch est-elle accessible en Belgique et en France ?",
    answer:
      "Le programme partenaire indique actuellement la Belgique et la France comme pays éligibles. L’ouverture effective du compte reste soumise à l’acceptation de Loanch, au contrôle d’identité et aux règles applicables dans le pays de résidence.",
  },
  {
    question: "Le buyback garantit-il le capital investi ?",
    answer:
      "Non. Le buyback est un engagement contractuel applicable à certains prêts et dépend de la capacité financière de la partie obligée à le respecter. En cas de défaillance de l’originator ou d’une autre partie, une perte reste possible.",
  },
  {
    question: "Peut-on récupérer son argent à tout moment ?",
    answer:
      "Non. Les créances peuvent être illiquides et aucune sortie anticipée n’est garantie. L’investisseur peut devoir attendre les paiements prévus au contrat, avec un risque de retard ou de défaut.",
  },
  {
    question: "Le lien Loanch d’Afflizen est-il affilié ?",
    answer:
      "Oui. Les CTA Loanch utilisent un lien affilié professionnel. Afflizen peut percevoir une commission lorsqu’une action éligible est réalisée via ce lien, sans surcoût supplémentaire pour le lecteur. Cette rémunération éventuelle ne modifie pas notre approche éditoriale.",
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

function LoanchButton({
  location,
  className,
  children,
}: {
  location: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <AffiliateButton
      href={LOANCH_AFFILIATE_LINK}
      platform="loanch"
      category="investissement"
      location={location}
      className={className}
    >
      {children}
    </AffiliateButton>
  );
}

export default function LoanchPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-emerald-700">
              Créances sur des prêts à la consommation
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Loanch : investir dans des créances de prêts à la consommation
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Loanch donne accès à des créances proposées par des prêteurs ou
              originators. Le capital, les intérêts et la liquidité ne sont pas
              garantis : chaque contrat doit être étudié avant d’investir.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <LoanchButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir Loanch
              </LoanchButton>
              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire notre avis
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                20 € de bonus de premier investissement sous conditions
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Offre annoncée jusqu’au 31 décembre 2026 pour les nouveaux
                investisseurs : vérification du compte, puis dépôt et investissement
                d’au moins 500 € dans les délais et produits éligibles.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">Résumé Afflizen</p>
            <h2 className="mt-4 text-2xl font-black">Loanch</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Produit : créances sur des prêts à la consommation</li>
              <li>• Modèle : cession de créances</li>
              <li>• Gestion : manuelle et Auto Invest</li>
              <li>• Risque : perte partielle ou totale du capital</li>
            </ul>
            <LoanchButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Voir l’offre Loanch
            </LoanchButton>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 md:grid-cols-4">
          {[
            ["Produit", "Prêts à la consommation"],
            ["Modèle", "Cession de créances"],
            ["Pays partenaire", "Belgique et France"],
            ["Capital garanti", "Non"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
              <p className="mt-2 font-bold text-slate-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Qu’est-ce que Loanch ?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Loanch est un environnement en ligne permettant à des investisseurs
              éligibles d’acquérir des créances, ou des fractions de créances,
              liées principalement à des prêts à la consommation.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              La plateforme est actuellement exploitée par PRZEMEK SAVJETOVANJE
              d.o.o., société croate. Elle fournit l’accès, le suivi et des services
              opérationnels, sans être automatiquement le prêteur, l’emprunteur ou
              le débiteur principal de chaque créance.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Comment fonctionne Loanch ?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-emerald-700">Étape {index + 1}</p>
                  <h3 className="mt-2 font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Comprendre la cession de créances</h2>
            <p className="mt-4 leading-7 text-slate-200">
              L’investisseur ne dépose pas son argent sur un livret bancaire. Il
              acquiert des droits contractuels sur une créance existante au moyen
              d’un contrat de cession. L’étendue de ces droits dépend du contrat et
              du droit applicable à la créance concernée.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Emprunteur", "La personne qui doit rembourser le prêt à l’origine de la créance."],
                ["Originator", "La société de crédit qui a accordé ou gère le prêt proposé sur la plateforme."],
                ["Investisseur", "L’acquéreur de tout ou partie des droits transférés par le contrat de cession."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                  <h3 className="font-bold text-emerald-300">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Prêts à la consommation et originators</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Loanch présente des créances issues de prêts à la consommation
              accordés par des sociétés de crédit, principalement sur des marchés
              d’Asie du Sud et du Sud-Est. Les originators, produits et volumes
              disponibles peuvent évoluer.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Avant chaque investissement, il faut vérifier le prêteur d’origine,
              la devise, la durée, les retards, les engagements de rachat éventuels
              et les documents contractuels. La sélection d’un originator par la
              plateforme ne garantit pas sa solvabilité future.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Investissement manuel ou Auto Invest</h2>
            <p className="mt-4 leading-7 text-slate-700">
              La sélection manuelle permet d’examiner chaque créance avant de
              conclure le contrat. Auto Invest peut répartir les fonds selon des
              paramètres tels que la durée, l’exposition maximale, l’originator ou
              d’autres critères disponibles dans le compte.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Une allocation automatique produit les mêmes effets juridiques qu’une
              sélection manuelle. Elle facilite l’exécution d’une stratégie, mais
              ne garantit ni la diversification réelle, ni les remboursements, ni
              le rendement.
            </p>
          </section>

          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-emerald-950">
              Bonus Loanch de 20 € sous conditions
            </h2>
            <p className="mt-4 leading-7 text-emerald-950">
              L’offre officielle est annoncée du 28 juillet au 31 décembre 2026
              pour les nouveaux investisseurs. Il faut s’inscrire pendant cette
              période, terminer le KYC et fournir une preuve d’adresse si elle est
              demandée.
            </p>
            <p className="mt-4 leading-7 text-emerald-950">
              Dans les sept jours suivant la vérification, l’utilisateur doit
              déposer puis investir au moins 500 € au total dans des prêts d’une
              durée minimale de 60 jours. Loanch annonce un crédit immédiat du
              bonus après qualification, avec un retrait du bonus bloqué pendant
              60 jours.
            </p>
            <p className="mt-4 text-sm leading-6 text-emerald-900">
              Offre limitée, réservée aux personnes éligibles et soumise aux
              conditions en vigueur. Le bonus n’est ni permanent, ni garanti si
              l’ensemble des critères n’est pas rempli. Vérifiez les conditions
              officielles avant toute inscription ou tout dépôt.
            </p>
            <div className="mt-6">
              <LoanchButton
                location="offer"
                className="inline-flex rounded-full bg-emerald-700 px-7 py-4 font-semibold text-white transition hover:bg-emerald-800"
              >
                Consulter l’offre actuelle
              </LoanchButton>
            </div>
          </section>

          <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase text-sky-800">
              Offre partenaire datée et conditionnelle
            </p>
            <h2 className="mt-3 text-3xl font-bold text-sky-950">
              Campagne Early Bird Returns annoncée du 1er au 30 septembre 2026
            </h2>
            <p className="mt-4 leading-7 text-sky-950">
              Une communication partenaire reçue par Afflizen annonce une campagne
              du 1er au 30 septembre 2026 pour les nouveaux investisseurs comme
              pour les investisseurs existants, sur de nouveaux dépôts investis dans des prêts
              Tambadana éligibles.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["1er au 10 septembre", "Jusqu’à 3 % de cashback"],
                ["11 au 20 septembre", "Jusqu’à 2 % de cashback"],
                ["21 au 30 septembre", "Jusqu’à 1 % de cashback"],
              ].map(([period, cashback]) => (
                <div key={period} className="rounded-2xl border border-sky-200 bg-white p-5">
                  <p className="text-sm font-semibold text-sky-800">{period}</p>
                  <p className="mt-2 font-bold text-sky-950">{cashback}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-sky-900">
              Cette présentation repose sur une communication partenaire reçue par
              Afflizen, et non sur une page publique officielle 2026 identifiée lors
              de la rédaction. Les prêts éligibles, seuils, calculs, exclusions et
              modalités de versement doivent être vérifiés dans les conditions en
              vigueur. Il ne s’agit pas d’un rendement garanti ni d’un avantage
              permanent.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Belgique et France</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Le programme partenaire indique actuellement que la Belgique et la
              France sont éligibles. L’accès effectif reste soumis au contrôle
              d’identité, aux critères de Loanch et aux lois applicables dans le
              pays de résidence.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Loanch précise que ses services ne sont pas proposés lorsque leur
              fourniture nécessiterait une autorisation locale qui n’est pas
              détenue. L’utilisateur doit donc vérifier son éligibilité au moment
              de l’inscription.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Avantages à considérer</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {strengths.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Risques et limites</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {risks.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-red-950">
              Le buyback ne garantit pas le capital
            </h2>
            <p className="mt-4 leading-7 text-red-950">
              Loanch et certains originators présentent un mécanisme de rachat pour
              des prêts en retard. Il s’agit d’un engagement contractuel lié aux
              produits concernés, pas d’une assurance générale contre toute perte.
            </p>
            <p className="mt-4 leading-7 text-red-950">
              Son exécution dépend de la solvabilité de la partie obligée au rachat.
              Si un originator, un garant, un servicer ou une autre contrepartie ne
              peut plus honorer ses obligations, le capital et les intérêts restent
              exposés à une perte.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Cadre contractuel et prestataire</h2>
            <p className="mt-4 leading-7 text-slate-700">
              La fiche précontractuelle entrée en vigueur le 29 mai 2026 identifie
              PRZEMEK SAVJETOVANJE d.o.o., établie à Zagreb en Croatie, comme
              prestataire exploitant la plateforme Loanch.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Les créances ne sont pas des dépôts bancaires et ne bénéficient pas
              d’un système de garantie des dépôts. Elles peuvent aussi ne pas être
              couvertes par un mécanisme d’indemnisation des investisseurs. Les
              contrats, frais éventuels et protections doivent être examinés pour
              chaque opération.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Pour quel profil d’investisseur ?</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {profiles.map((profile) => (
                <div key={profile.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold">{profile.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{profile.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="avis" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Avis Afflizen sur Loanch</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Loanch peut intéresser un investisseur averti qui souhaite étudier
              des créances de prêts à la consommation et utiliser, si besoin, une
              stratégie automatisée. Le modèle de cession rend indispensable la
              lecture des contrats et l’analyse des contreparties.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Le bonus de bienvenue peut compléter une première allocation, mais
              il ne doit pas déterminer seul la décision d’investissement. La
              priorité reste la diversification, la qualité des originators et la
              capacité à immobiliser les fonds jusqu’aux échéances.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">FAQ Loanch</h2>
            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <div key={item.question} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <LoanchButton
                location="final"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Accéder à Loanch
              </LoanchButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">À retenir</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Capital et rendement non garantis.</li>
              <li>• Droits limités aux contrats de cession.</li>
              <li>• Buyback dépendant de la contrepartie.</li>
              <li>• Liquidité non garantie avant l’échéance.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Pages liées</h2>
            <div className="mt-5 space-y-4">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-2xl border border-slate-200 p-4 transition hover:border-emerald-300 hover:bg-emerald-50">
                  <span className="font-semibold text-slate-950">{item.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Transparence : les CTA Loanch de cette page utilisent un lien affilié.
            Afflizen peut percevoir une commission lorsqu’un utilisateur passe par
            ce lien et réalise une action éligible, sans surcoût supplémentaire
            pour le lecteur. Cette page est informative et ne constitue pas un
            conseil financier, fiscal ou juridique personnalisé. Le capital est à risque.
          </p>
        </div>
      </section>
    </main>
  );
}
