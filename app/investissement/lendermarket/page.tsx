import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import Link from "next/link";

const LENDERMARKET_AFFILIATE_LINK =
  "https://c.trackmytarget.com/?a=1zcrdc&i=20ctay";

export const metadata = createPageMetadata({
  title: "Lendermarket avis : investir dans des prêts P2P",
  description:
    "Découvrez Lendermarket, marketplace d’investissement dans des prêts P2P. Fonctionnement, Auto Invest FLEX, bonus de 1,5 % sous conditions et risques.",
  path: "/investissement/lendermarket",
  type: "article",
});

const steps = [
  {
    title: "Créer et vérifier son compte",
    text: "L’inscription comprend une vérification d’identité et d’éligibilité avant de pouvoir investir.",
  },
  {
    title: "Choisir son mode d’investissement",
    text: "Les prêts peuvent être sélectionnés manuellement ou selon des critères définis avec Auto Invest.",
  },
  {
    title: "Financer des prêts",
    text: "Chaque prêt est proposé par un organisme initiateur avec ses propres caractéristiques et risques.",
  },
  {
    title: "Suivre les remboursements",
    text: "Le tableau de bord permet de consulter les échéances, intérêts et éventuels retards.",
  },
];

const products = [
  {
    title: "Investissement manuel",
    text: "Vous sélectionnez chaque prêt après avoir examiné sa durée, son taux cible, son initiateur et ses documents.",
  },
  {
    title: "Auto Invest",
    text: "Vous définissez des critères d’allocation et la plateforme automatise les investissements compatibles.",
  },
  {
    title: "Auto Invest FLEX",
    text: "Cette formule vise davantage de souplesse, mais une sortie anticipée dépend notamment de financements de remplacement et n’est pas garantie.",
  },
];

const strengths = [
  "Une marketplace spécialisée dans les prêts P2P européens.",
  "Un investissement minimum actuellement annoncé à 10 € par prêt.",
  "Des modes manuel et automatisé pour adapter la gestion du portefeuille.",
  "Plusieurs organismes initiateurs et des documents propres à chaque offre.",
  "Une inscription ouverte sous conditions aux résidents fiscaux de l’Union européenne et de Suisse.",
];

const risks = [
  "Perte partielle ou totale du capital investi.",
  "Défaut ou retard de paiement des emprunteurs.",
  "Défaillance d’un organisme initiateur, y compris lorsqu’un mécanisme de rachat est annoncé.",
  "Risque opérationnel, financier ou de cessation d’activité de la plateforme.",
  "Taux cibles et performances passées sans garantie de résultat futur.",
  "Liquidité limitée : une sortie FLEX peut être retardée, partielle ou impossible.",
];

const checks = [
  "Lire les informations et documents du prêt avant chaque investissement.",
  "Identifier l’organisme initiateur et comprendre sa solidité financière.",
  "Vérifier les frais, délais et conditions de retrait en vigueur.",
  "Diversifier entre plusieurs prêts, durées et initiateurs sans y placer son épargne de précaution.",
];

const relatedLinks = [
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Comparer Lendermarket avec les autres plateformes d’investissement suivies.",
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
    href: "/investissement/finary",
    title: "Finary",
    text: "Un outil pour suivre et analyser son patrimoine financier.",
  },
];

const faq = [
  {
    question: "Qu’est-ce que Lendermarket ?",
    answer:
      "Lendermarket est une marketplace d’investissement dans des prêts P2P. Elle permet aux investisseurs de financer des créances proposées par différents organismes initiateurs selon les offres disponibles.",
  },
  {
    question: "Lendermarket est-il disponible en Belgique et en France ?",
    answer:
      "Oui, la Belgique et la France font partie des pays actuellement éligibles à l’offre partenaire. Lendermarket indique plus largement accepter, sous conditions, les personnes majeures ayant leur résidence fiscale dans l’Union européenne ou en Suisse et un compte bancaire dans l’Espace économique européen ou en Suisse.",
  },
  {
    question: "Quel est le montant minimum pour investir ?",
    answer:
      "Lendermarket annonce actuellement un minimum de 10 € par prêt. Ce seuil peut évoluer et doit être vérifié avant d’investir.",
  },
  {
    question: "Quel bonus Lendermarket est proposé via Afflizen ?",
    answer:
      "L’offre partenaire annonce actuellement un bonus de 1,5 % des fonds nets investis pendant les 90 premiers jours suivant la validation de l’inscription. Son versement intervient après cette période selon les conditions du programme. L’offre est soumise aux conditions en vigueur et non cumulable avec d’autres promotions.",
  },
  {
    question: "Les taux affichés sur Lendermarket sont-ils garantis ?",
    answer:
      "Non. Les taux sont des objectifs contractuels ou indicatifs selon les offres. Ils ne garantissent ni le rendement final ni le remboursement du capital.",
  },
  {
    question: "Une obligation de rachat supprime-t-elle le risque ?",
    answer:
      "Non. Son exécution dépend notamment de la capacité financière de l’organisme initiateur. Une défaillance de cet organisme peut empêcher ou retarder le rachat annoncé.",
  },
  {
    question: "Peut-on retirer son argent à tout moment avec Auto Invest FLEX ?",
    answer:
      "Non. La sortie anticipée dépend notamment de la disponibilité de financements de remplacement et des conditions en vigueur. Elle peut être retardée, partielle ou impossible, et des frais peuvent s’appliquer.",
  },
  {
    question: "Tous les investissements Lendermarket sont-ils réglementés ?",
    answer:
      "Non. Lendermarket Limited est autorisée comme prestataire européen de services de financement participatif, mais la plateforme présente des services réglementés et non réglementés. Le statut applicable doit être vérifié sur la fiche de chaque investissement.",
  },
  {
    question: "Le lien Lendermarket d’Afflizen est-il affilié ?",
    answer:
      "Oui. Les CTA Lendermarket utilisent un lien affilié. Afflizen peut percevoir une commission si une action éligible est réalisée via ce lien, sans surcoût annoncé pour l’utilisateur. Cette rémunération éventuelle ne modifie pas notre approche éditoriale.",
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

function LendermarketButton({
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
      href={LENDERMARKET_AFFILIATE_LINK}
      platform="Lendermarket"
      category="investissement"
      location={location}
      className={className}
    >
      {children}
    </AffiliateButton>
  );
}

export default function LendermarketPage() {
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
              Investissement dans les prêts P2P
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Lendermarket : investir dans des prêts européens dès 10 €
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Lendermarket donne accès à des prêts proposés par plusieurs
              organismes initiateurs. Le capital et le rendement ne sont pas
              garantis : chaque offre doit être examinée avant d’investir.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <LendermarketButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir Lendermarket
              </LendermarketButton>
              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire notre avis
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Offre partenaire sous conditions
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                L’offre annonce actuellement un bonus de 1,5 % des fonds nets
                investis durant les 90 premiers jours après validation. Son
                versement intervient après cette période selon les conditions
                applicables. Elle n’est pas cumulable avec d’autres offres.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">Résumé Afflizen</p>
            <h2 className="mt-4 text-2xl font-black">Lendermarket</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Type : marketplace de prêts P2P</li>
              <li>• Minimum annoncé : 10 € par prêt</li>
              <li>• Gestion : manuelle, Auto Invest et FLEX</li>
              <li>• Risque : perte partielle ou totale du capital</li>
            </ul>
            <LendermarketButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Voir l’offre Lendermarket
            </LendermarketButton>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 md:grid-cols-4">
          {[
            ["Produit", "Prêts P2P"],
            ["Minimum", "10 € par prêt"],
            ["Pays", "Belgique et France"],
            ["Garantie", "Aucune"],
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
            <h2 className="text-3xl font-bold">Qu’est-ce que Lendermarket ?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Lendermarket est une marketplace qui met en relation des
              investisseurs et des organismes initiateurs proposant des prêts.
              L’investisseur finance une créance, pas un dépôt bancaire, et
              s’expose aux risques de l’emprunteur, de l’initiateur et de la
              plateforme.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Lendermarket Limited est autorisée comme prestataire européen de
              services de financement participatif par la Banque centrale
              d’Irlande. La plateforme propose toutefois des services
              réglementés et non réglementés : il faut identifier le cadre de
              chaque offre avant d’investir.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Comment investir sur Lendermarket ?</h2>
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
            <h2 className="text-3xl font-bold">Manuel, Auto Invest ou FLEX</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Le bon mode dépend du niveau de contrôle recherché et de votre
              besoin de disponibilité. Aucun ne supprime les risques de crédit
              ou de liquidité.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {products.map((product) => (
                <div key={product.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                  <h3 className="font-bold text-emerald-300">{product.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{product.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-emerald-950">
              Bonus Lendermarket de 1,5 % sous conditions
            </h2>
            <p className="mt-4 leading-7 text-emerald-950">
              L’offre partenaire en cours annonce un bonus utilisateur égal à
              1,5 % des fonds nets investis pendant les 90 premiers jours après
              validation de l’inscription. Le paiement intervient après les 90 jours,
              selon les conditions du programme.
            </p>
            <p className="mt-4 text-sm leading-6 text-emerald-900">
              Cette offre est soumise aux conditions en vigueur, non cumulable
              et susceptible d’évoluer. Vérifiez toujours les modalités affichées
              au moment de l’inscription ; le bonus n’est pas un rendement garanti.
            </p>
            <div className="mt-6">
              <LendermarketButton
                location="offer"
                className="inline-flex rounded-full bg-emerald-700 px-7 py-4 font-semibold text-white transition hover:bg-emerald-800"
              >
                Consulter l’offre actuelle
              </LendermarketButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Belgique, France et autres pays éligibles</h2>
            <p className="mt-4 leading-7 text-slate-700">
              L’offre partenaire vise notamment les résidents de Belgique et de
              France. Lendermarket indique accepter sous conditions les personnes
              majeures ayant leur résidence fiscale dans l’Union européenne ou
              en Suisse et un compte bancaire dans l’Espace économique européen
              ou en Suisse. La validation finale dépend des contrôles de la
              plateforme.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Avantages à étudier</h2>
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
            <h2 className="text-3xl font-bold text-red-950">Le capital peut être entièrement perdu</h2>
            <p className="mt-4 leading-7 text-red-950">
              Les prêts P2P ne bénéficient pas de la garantie des dépôts. Une
              obligation de rachat ou une stratégie automatisée ne constitue pas
              une garantie. N’investissez qu’une somme que vous pouvez immobiliser
              et perdre, en conservant une diversification adaptée.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">À qui Lendermarket peut-il convenir ?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              La plateforme peut intéresser un investisseur autonome qui comprend
              le risque de crédit, accepte une liquidité limitée et souhaite
              diversifier une petite partie de son portefeuille. Elle convient
              moins à une personne recherchant un capital garanti, un revenu
              certain ou une épargne disponible à tout moment.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Points à vérifier avant d’investir</h2>
            <div className="mt-6 grid gap-4">
              {checks.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="avis" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Avis Afflizen sur Lendermarket</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Lendermarket offre une interface spécialisée et plusieurs méthodes
              d’investissement dans les prêts P2P. La possibilité d’automatiser
              l’allocation est pratique, mais ne remplace pas l’analyse des
              initiateurs, des contrats et de la liquidité.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Nous la considérons comme une solution de diversification à haut
              risque, à réserver à une fraction maîtrisée d’un portefeuille et
              non à l’épargne de sécurité.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">FAQ Lendermarket</h2>
            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <div key={item.question} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <LendermarketButton
                location="faq"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Accéder à Lendermarket
              </LendermarketButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">À retenir</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Capital et rendement non garantis.</li>
              <li>• Liquidité FLEX conditionnelle.</li>
              <li>• Cadre réglementaire à vérifier par offre.</li>
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
            Transparence : les CTA Lendermarket de cette page utilisent un lien
            affilié. Afflizen peut percevoir une commission si une action éligible
            est réalisée via ce lien, sans surcoût annoncé pour l’utilisateur.
            Cette page est informative et ne constitue pas un conseil financier,
            fiscal ou juridique. Le capital est à risque et les conditions peuvent évoluer.
          </p>
        </div>
      </section>
    </main>
  );
}
