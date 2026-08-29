import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import Link from "next/link";

const SEVEN_HARVESTS_AFFILIATE_LINK =
  "https://c.trackmytarget.com/?a=u0650w&i=20ctay";

export const metadata = createPageMetadata({
  title: "7harvests avis : plateforme suisse de prêts P2P",
  description:
    "Découvrez 7harvests, plateforme suisse de prêts P2P : fonctionnement, prêts disponibles, Auto-invest, bonus jusqu’à 21 € sous conditions et risques.",
  path: "/investissement/7harvests",
  type: "article",
});

const steps = [
  {
    title: "Créer et vérifier son compte",
    text: "L’investisseur renseigne son profil et réalise la vérification d’identité demandée avant de pouvoir investir.",
  },
  {
    title: "Déposer des fonds",
    text: "Les conditions officielles annoncent actuellement un minimum de 50 €, certains moyens de paiement pouvant appliquer leurs propres limites ou frais.",
  },
  {
    title: "Choisir des prêts",
    text: "Les opportunités peuvent être sélectionnées manuellement ou selon des critères définis avec les outils Auto-invest disponibles.",
  },
  {
    title: "Suivre les remboursements",
    text: "Le tableau de bord présente les échéances, intérêts, remboursements et éventuels retards selon chaque contrat.",
  },
];

const loanTypes = [
  {
    title: "Prêts à la consommation",
    text: "Des créances liées à des emprunteurs particuliers, proposées par des organismes initiateurs et exposées au risque de défaut.",
  },
  {
    title: "Prêts aux PME",
    text: "Des financements destinés à des entreprises, dont la solidité, les flux de trésorerie et les garanties éventuelles doivent être étudiés.",
  },
  {
    title: "Prêts immobiliers",
    text: "Des projets liés à l’immobilier, avec une durée, un emprunteur, des sûretés et un risque propres à chaque dossier.",
  },
];

const strengths = [
  "Plusieurs catégories de prêts accessibles depuis une même plateforme.",
  "Sélection manuelle ou automatisée selon les outils et seuils disponibles.",
  "Minimum d’investissement actuellement annoncé à 50 €.",
  "Informations sur les prêts, emprunteurs et organismes initiateurs avant investissement.",
  "Aucun frais investisseur annoncé dans les conditions générales, sauf mention contraire.",
  "Bonus de bienvenue pouvant atteindre 21 € lorsque toutes les étapes sont validées.",
];

const risks = [
  "Perte partielle ou totale du capital investi.",
  "Défaut, retard ou remboursement anticipé de l’emprunteur.",
  "Défaillance de l’organisme initiateur et incapacité à honorer un rachat annoncé.",
  "Risque opérationnel, financier ou de cessation d’activité de la plateforme.",
  "Liquidité limitée : une sortie avant l’échéance peut être indisponible.",
  "Rendement cible, intérêts et performances passées non garantis.",
  "Évolution du cadre juridique, fiscal ou réglementaire selon le pays et le produit.",
];

const profiles = [
  {
    title: "Investisseur autonome",
    text: "Pour une personne capable d’examiner chaque prêt, son initiateur, sa durée et ses documents.",
  },
  {
    title: "Profil diversifié",
    text: "Pour compléter prudemment un portefeuille existant avec une exposition limitée aux prêts P2P.",
  },
  {
    title: "Horizon moyen ou long",
    text: "Pour un investisseur qui peut immobiliser les fonds jusqu’aux échéances et supporter une perte.",
  },
];

const relatedLinks = [
  {
    href: "/investissement/lendermarket",
    title: "Lendermarket",
    text: "Une autre marketplace de prêts P2P avec sélection manuelle et Auto Invest.",
  },
  {
    href: "/investissement/monefit",
    title: "Monefit SmartSaver",
    text: "Une solution alternative liée à un portefeuille de prêts européens.",
  },
  {
    href: "/investissement/inrento",
    title: "InRento",
    text: "Une plateforme européenne de financement participatif immobilier.",
  },
  {
    href: "/investissement",
    title: "Comparatif investissement",
    text: "Comparer les plateformes d’investissement suivies par Afflizen.",
  },
];

const faq = [
  {
    question: "Qu’est-ce que 7harvests ?",
    answer:
      "7harvests est une plateforme de crowdlending P2P exploitée par 7 Harvests AG, société enregistrée à Zoug en Suisse. Elle agit comme intermédiaire pour permettre aux investisseurs d’acquérir des créances liées à différents prêts.",
  },
  {
    question: "7harvests est-elle une banque ?",
    answer:
      "Non. Les conditions générales précisent que 7 Harvests AG agit comme intermédiaire et n’est pas une banque. Les fonds investis ne bénéficient pas de l’assurance suisse des dépôts.",
  },
  {
    question: "Quels prêts sont disponibles sur 7harvests ?",
    answer:
      "La plateforme annonce des prêts à la consommation, des prêts aux PME et des prêts liés à l’immobilier. Les offres disponibles évoluent et chaque dossier possède ses propres conditions et risques.",
  },
  {
    question: "Quel est le minimum pour investir sur 7harvests ?",
    answer:
      "Les conditions officielles indiquent actuellement un minimum de 50 €. Ce seuil peut être supérieur selon le moyen de paiement ou l’opportunité et doit être vérifié avant le dépôt.",
  },
  {
    question: "Peut-on automatiser ses investissements ?",
    answer:
      "Oui. 7harvests présente des outils d’investissement manuel et Auto-invest. Les critères, minimums et fonctionnalités disponibles dépendent toutefois de l’offre et du niveau d’accès du compte.",
  },
  {
    question: "Comment obtenir le bonus 7harvests de 21 € ?",
    answer:
      "L’offre partenaire annonce jusqu’à 21 € : 7 € après l’inscription, 7 € après la vérification d’identité et 7 € après un premier investissement. Les trois étapes doivent être réalisées dans les sept jours suivant l’inscription, selon les conditions en vigueur. Le bonus n’est pas garanti si les critères ne sont pas remplis.",
  },
  {
    question: "7harvests est-elle accessible en Belgique et en France ?",
    answer:
      "L’offre partenaire indique actuellement la Belgique et la France comme pays éligibles. L’ouverture effective du compte dépend néanmoins de la vérification d’identité, de l’acceptation par 7harvests et des règles applicables au pays de résidence.",
  },
  {
    question: "7harvests est-elle réglementée en Suisse ?",
    answer:
      "7 Harvests AG indique être enregistrée en Suisse et affiliée à une organisation d’autorégulation pour ses obligations de lutte contre le blanchiment. Ses conditions précisent qu’elle n’est pas directement supervisée par la FINMA et que les dépôts ne sont pas couverts par l’assurance suisse des dépôts.",
  },
  {
    question: "La garantie de rachat empêche-t-elle toute perte ?",
    answer:
      "Non. Un mécanisme de rachat dépend de la capacité financière de l’organisme initiateur et, le cas échéant, de la plateforme. Il ne supprime ni le risque de crédit ni le risque de perte totale du capital.",
  },
  {
    question: "Le lien 7harvests d’Afflizen est-il affilié ?",
    answer:
      "Oui. Les CTA 7harvests utilisent un lien affilié professionnel. Afflizen peut percevoir une commission si une action éligible est réalisée via ce lien, sans surcoût annoncé pour le lecteur. Cette rémunération éventuelle ne modifie pas notre approche éditoriale.",
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

function SevenHarvestsButton({
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
      href={SEVEN_HARVESTS_AFFILIATE_LINK}
      platform="7harvests"
      category="investissement"
      location={location}
      className={className}
    >
      {children}
    </AffiliateButton>
  );
}

export default function SevenHarvestsPage() {
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
              Plateforme suisse de prêts P2P
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              7harvests : investir dans des prêts P2P à partir de 50 €
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              7harvests donne accès à des prêts à la consommation, aux PME et à
              l’immobilier. Le capital, les intérêts et la liquidité ne sont pas
              garantis : chaque opportunité doit être étudiée avant d’investir.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <SevenHarvestsButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir 7harvests
              </SevenHarvestsButton>
              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire notre avis
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Jusqu’à 21 € de bonus sous conditions
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                L’offre annonce 7 € après l’inscription, 7 € après la vérification
                et 7 € après le premier investissement. Les trois étapes doivent
                être réalisées dans les sept jours suivant l’inscription, selon
                les conditions en vigueur.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">Résumé Afflizen</p>
            <h2 className="mt-4 text-2xl font-black">7harvests</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Type : crowdlending et prêts P2P</li>
              <li>• Minimum annoncé : 50 €</li>
              <li>• Gestion : manuelle et automatisée</li>
              <li>• Risque : perte partielle ou totale du capital</li>
            </ul>
            <SevenHarvestsButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Voir l’offre 7harvests
            </SevenHarvestsButton>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 md:grid-cols-4">
          {[
            ["Produit", "Prêts P2P"],
            ["Minimum", "50 €"],
            ["Pays", "Belgique et France"],
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
            <h2 className="text-3xl font-bold">Qu’est-ce que 7harvests ?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              7harvests est une plateforme de crowdlending exploitée par
              7 Harvests AG, société enregistrée à Zoug. Elle sert d’intermédiaire
              entre investisseurs et emprunteurs : l’investisseur acquiert une
              créance liée à un prêt plutôt qu’un dépôt bancaire.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Les remboursements dépendent de l’emprunteur, de l’organisme
              initiateur et des engagements contractuels applicables. La plateforme
              n’est pas une banque et le capital placé reste exposé à une perte.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Comment fonctionne l’investissement P2P ?</h2>
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
            <h2 className="text-3xl font-bold">Quels types de prêts sont proposés ?</h2>
            <p className="mt-4 leading-7 text-slate-200">
              La disponibilité change selon les projets et les marchés. Il faut
              comparer les contrats, durées, emprunteurs, sûretés et risques de
              chaque opportunité.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {loanTypes.map((loan) => (
                <div key={loan.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                  <h3 className="font-bold text-emerald-300">{loan.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{loan.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Investissement manuel ou Auto-invest</h2>
            <p className="mt-4 leading-7 text-slate-700">
              La sélection manuelle permet de choisir chaque prêt après lecture
              de sa documentation. Les outils Auto-invest répartissent les fonds
              selon des critères prédéfinis, avec des fonctionnalités et seuils
              qui peuvent varier selon le compte.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              L’automatisation facilite l’allocation, mais ne vérifie pas à votre
              place la qualité de chaque prêt et ne supprime aucun risque de
              crédit, d’initiateur, de plateforme ou de liquidité.
            </p>
          </section>

          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-emerald-950">
              Bonus 7harvests jusqu’à 21 €
            </h2>
            <p className="mt-4 leading-7 text-emerald-950">
              L’offre partenaire en cours prévoit trois étapes pouvant rapporter
              7 € chacune : inscription, vérification d’identité puis premier
              investissement. Pour atteindre 21 €, elles doivent toutes être
              validées dans les sept jours suivant l’inscription.
            </p>
            <p className="mt-4 text-sm leading-6 text-emerald-900">
              Le bonus est soumis aux conditions en vigueur, à l’éligibilité et à
              la validation de chaque étape. Il peut évoluer et ne constitue ni
              un rendement ni un avantage garanti ou permanent.
            </p>
            <div className="mt-6">
              <SevenHarvestsButton
                location="offer"
                className="inline-flex rounded-full bg-emerald-700 px-7 py-4 font-semibold text-white transition hover:bg-emerald-800"
              >
                Consulter l’offre actuelle
              </SevenHarvestsButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Belgique et France</h2>
            <p className="mt-4 leading-7 text-slate-700">
              L’offre partenaire indique actuellement que les résidents belges et
              français sont éligibles. L’acceptation reste soumise au contrôle
              d’identité, aux critères de 7harvests et aux règles applicables dans
              le pays de résidence au moment de l’inscription.
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
            <h2 className="text-3xl font-bold text-red-950">Aucune protection n’élimine le risque de perte</h2>
            <p className="mt-4 leading-7 text-red-950">
              Les mécanismes de rachat, sûretés, contrôles d’initiateurs et comptes
              séparés peuvent réduire certains risques, mais ils dépendent des
              contrats et de la solidité des parties concernées. Ils ne garantissent
              ni le capital, ni les intérêts, ni une sortie anticipée.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Cadre suisse : ce qu’il faut comprendre</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Selon ses documents officiels, 7 Harvests AG est enregistrée en
              Suisse et affiliée à une organisation d’autorégulation dans le cadre
              des obligations de lutte contre le blanchiment. Cette affiliation ne
              correspond pas à une surveillance prudentielle directe de la FINMA.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Les conditions générales précisent également que les dépôts ne sont
              pas assurés par le système suisse de garantie des dépôts. Le statut,
              le droit applicable et les protections doivent être vérifiés pour
              chaque produit et pays de résidence.
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
            <h2 className="text-3xl font-bold">Avis Afflizen sur 7harvests</h2>
            <p className="mt-4 leading-7 text-slate-700">
              7harvests propose une approche diversifiée du crowdlending avec
              plusieurs catégories de prêts et des outils d’automatisation. La
              plateforme étant récente, son historique opérationnel reste plus
              court que celui d’acteurs établis sur plusieurs cycles économiques.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Elle peut être étudiée pour une petite poche de diversification,
              à condition d’analyser les initiateurs, de répartir les fonds et de
              pouvoir conserver les investissements jusqu’à leur terme.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">FAQ 7harvests</h2>
            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <div key={item.question} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <SevenHarvestsButton
                location="final"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Accéder à 7harvests
              </SevenHarvestsButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">À retenir</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Capital et rendement non garantis.</li>
              <li>• Rachat conditionné à la solvabilité.</li>
              <li>• Liquidité non garantie avant l’échéance.</li>
              <li>• Diversification indispensable.</li>
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
            Transparence : les CTA 7harvests de cette page utilisent un lien
            affilié. Afflizen peut percevoir une commission si une action éligible
            est réalisée via ce lien, sans surcoût annoncé pour le lecteur. Cette
            page est informative et ne constitue pas un conseil financier, fiscal
            ou juridique personnalisé. Le capital est à risque.
          </p>
        </div>
      </section>
    </main>
  );
}
