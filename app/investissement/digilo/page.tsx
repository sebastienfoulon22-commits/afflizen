import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import type { ReactNode } from "react";

const DIGILO_AFFILIATE_LINK =
  "https://c.trackmytarget.com/?a=o7f4e1&i=20ctay";

export const metadata = createPageMetadata({
  title: "Digilo avis : crowdfunding immobilier et risques",
  description:
    "Découvrez Digilo, ses prêts participatifs adossés à des biens immobiliers, son minimum, ses frais, sa licence ECSP et les risques à connaître.",
  path: "/investissement/digilo",
  type: "article",
});

const steps = [
  {
    title: "Créer et vérifier son compte",
    text: "L’investisseur renseigne son profil, transmet une pièce d’identité et un justificatif de domicile, puis passe les contrôles Digilo et Lemonway.",
  },
  {
    title: "Approvisionner le portefeuille",
    text: "Un compte de paiement Lemonway est ouvert lors de l’inscription. Les fonds doivent provenir d’un compte bancaire éligible au nom de l’investisseur.",
  },
  {
    title: "Étudier un projet",
    text: "Chaque offre présente notamment l’emprunteur, l’objet du financement, la durée, le taux attendu, le calendrier, le LTV et les documents d’information clés.",
  },
  {
    title: "Investir et suivre les remboursements",
    text: "L’investisseur conclut un contrat de prêt avec le porteur du projet et suit ensuite les intérêts, le principal, les actualités et les éventuels retards.",
  },
];

const projectTypes = [
  {
    title: "Développement d’entreprise",
    text: "Des prêts destinés à des PME, entreprises, commerçants individuels ou indépendants pour financer leur activité et leur croissance.",
  },
  {
    title: "Fonds de roulement",
    text: "Des besoins de trésorerie professionnelle financés pour une durée et selon un calendrier propres à chaque offre.",
  },
  {
    title: "Projets liés à l’immobilier",
    text: "Des financements associés à des opérations immobilières, sans que l’investisseur devienne directement propriétaire du bien donné en sûreté.",
  },
  {
    title: "Actifs immobiliers variés",
    text: "Les sûretés peuvent porter sur des terrains, appartements, maisons, locaux commerciaux ou d’autres biens acceptés par Digilo.",
  },
];

const strengths = [
  "Prestataire européen de services de financement participatif agréé.",
  "Projets adossés à une sûreté immobilière selon les critères actuels de Digilo.",
  "LTV annoncé au maximum à 60 % lors de la sélection des projets.",
  "Minimum d’investissement public actuellement fixé à 150 € par projet.",
  "Documents, calendrier, LTV et risque affichés pour chaque opportunité.",
  "Sélection manuelle ou Auto-Invest avec paramètres personnalisables.",
];

const risks = [
  "Perte partielle ou totale du capital investi.",
  "Défaut, insolvabilité ou retard de paiement de l’emprunteur.",
  "Baisse de la valeur du bien donné en sûreté ou évaluation initiale inexacte.",
  "Procédure de recouvrement longue, coûteuse ou insuffisante pour rembourser les investisseurs.",
  "Liquidité limitée et impossibilité éventuelle de sortir avant l’échéance.",
  "Risque opérationnel, informatique ou de cessation d’activité de la plateforme.",
  "Risque lié au prestataire de paiement et aux délais de transfert.",
  "Intérêts, remboursement et rendement final non garantis.",
];

const countries = [
  {
    title: "Belgique",
    text: "Le passeport européen de Digilo couvre la Belgique. Un résident majeur reste soumis au KYC, au test d’adéquation et à l’acceptation de son compte.",
  },
  {
    title: "France",
    text: "La France figure dans le registre des pays où les services ECSP peuvent être fournis, sous réserve des conditions individuelles d’inscription.",
  },
  {
    title: "Luxembourg",
    text: "Le Luxembourg figure également dans le passeport déclaré. L’investisseur doit résider dans l’EEE et disposer d’un compte bancaire EEE à son nom.",
  },
  {
    title: "Suisse",
    text: "Les conditions publiques actuelles limitent les investisseurs particuliers aux résidents de l’EEE. Un résident suisse n’est donc pas présenté comme généralement éligible.",
  },
];

const profiles = [
  {
    title: "Investisseur averti",
    text: "Pour une personne capable de lire la fiche d’informations clés, d’évaluer l’emprunteur, la sûreté et le calendrier de remboursement.",
  },
  {
    title: "Portefeuille diversifié",
    text: "Pour compléter prudemment un portefeuille avec une poche de crowdlending limitée et répartie entre plusieurs projets.",
  },
  {
    title: "Capital immobilisable",
    text: "Pour un investisseur qui peut attendre l’échéance, supporter des retards et accepter une perte totale en cas de scénario défavorable.",
  },
];

const relatedLinks = [
  {
    href: "/investissement/inrento",
    title: "InRento",
    text: "Une plateforme européenne de financement participatif immobilier.",
  },
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
    href: "/investissement",
    title: "Comparatif investissement",
    text: "Comparer les plateformes d’investissement suivies par Afflizen.",
  },
];

const faq = [
  {
    question: "Qu’est-ce que Digilo ?",
    answer:
      "Digilo est une plateforme européenne de financement participatif exploitée par CSP Growth Solutions SIA. Elle permet à des investisseurs de financer des prêts destinés à des projets professionnels, actuellement adossés à des sûretés immobilières.",
  },
  {
    question: "Digilo est-elle réglementée ?",
    answer:
      "Oui. CSP Growth Solutions SIA détient depuis le 16 septembre 2025 une licence européenne de prestataire de services de financement participatif, ou ECSP, délivrée et supervisée par Latvijas Banka. Cette licence encadre le service, mais ne garantit pas les investissements.",
  },
  {
    question: "Dans quels pays peut-on s’inscrire sur Digilo ?",
    answer:
      "Les conditions actuelles acceptent les personnes majeures résidant dans l’Espace économique européen et disposant d’un compte bancaire EEE à leur nom. La Belgique, la France et le Luxembourg figurent dans le passeport européen déclaré. La Suisse n’appartient pas à l’EEE et n’est pas présentée comme généralement éligible.",
  },
  {
    question: "Quel est le minimum pour investir sur Digilo ?",
    answer:
      "Digilo indique actuellement un minimum de 150 € par projet pour un investissement manuel. Ce seuil public est distinct des conditions de la campagne de cashback, pour laquelle aucun minimum spécifique n’a été communiqué à Afflizen.",
  },
  {
    question: "Quel rendement Digilo annonce-t-elle ?",
    answer:
      "Digilo affiche actuellement des rendements annuels attendus généralement compris entre 9 % et 12 % selon le projet. Il s’agit d’objectifs propres aux offres disponibles, pas d’un rendement garanti. Un défaut ou un recouvrement insuffisant peut entraîner une perte.",
  },
  {
    question: "La sûreté immobilière protège-t-elle entièrement l’investissement ?",
    answer:
      "Non. La valeur du bien peut baisser et sa réalisation peut être longue ou coûteuse. Le produit d’une vente forcée peut ne pas suffire à rembourser le principal, les intérêts et les frais. Une sûreté réduit certains risques sans garantir le capital.",
  },
  {
    question: "Que signifie un LTV maximal de 60 % ?",
    answer:
      "Le LTV compare le montant du prêt à la valeur estimée du bien donné en sûreté. Digilo indique ne pas dépasser 60 % au moment de l’analyse. Cette marge n’empêche ni une baisse future de la valeur, ni un défaut, ni des difficultés de recouvrement.",
  },
  {
    question: "Quels frais Digilo facture-t-elle aux investisseurs ?",
    answer:
      "Les conditions actuelles n’imposent pas de frais pour les services de Digilo ou de l’agent des sûretés aux investisseurs. Des frais Lemonway peuvent toutefois s’appliquer et un retrait peut actuellement entraîner une retenue de 1 €. La grille en vigueur doit être vérifiée avant chaque opération.",
  },
  {
    question: "Digilo propose-t-elle Auto-Invest ?",
    answer:
      "Oui. Le mode Set & Forget démarre actuellement à 150 €, tandis que Select & Maximize, avec davantage de critères, démarre à 300 €. L’automatisation ne supprime aucun risque et le délai de réflexion de quatre jours prévu pour certains investissements manuels ne s’applique pas aux contrats conclus via Auto-Invest.",
  },
  {
    question: "Les investissements Digilo sont-ils couverts par une garantie des dépôts ?",
    answer:
      "Non. Les investissements ne sont ni des dépôts bancaires couverts par une garantie des dépôts, ni protégés par un régime européen d’indemnisation des investisseurs. La licence ECSP ne rembourse pas les pertes liées aux projets.",
  },
  {
    question: "Comment fonctionne l’offre de 3 % de cashback ?",
    answer:
      "La communication partenaire reçue par Afflizen réserve l’offre aux nouveaux investisseurs inscrits via un lien affilié valide. Elle annonce 3 % de cashback sur les investissements réalisés pendant les 60 premiers jours après l’inscription. Aucun minimum propre au cashback, plafond ou terme de campagne n’a été communiqué. L’offre est susceptible d’évoluer et reste soumise aux conditions confirmées par Digilo.",
  },
  {
    question: "Le lien Digilo d’Afflizen est-il affilié ?",
    answer:
      "Oui. Les CTA Digilo utilisent un lien affilié professionnel. Afflizen peut percevoir une commission lorsqu’une action éligible est réalisée via ce lien. Cette rémunération éventuelle ne modifie ni les conditions de Digilo ni notre approche éditoriale.",
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

function DigiloButton({
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
      href={DIGILO_AFFILIATE_LINK}
      platform="digilo"
      category="investissement"
      location={location}
      className={className}
    >
      {children}
    </AffiliateButton>
  );
}

export default function DigiloPage() {
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
              Crowdfunding adossé à l’immobilier
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
              Digilo : financer des projets professionnels adossés à des sûretés immobilières
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Digilo propose des prêts participatifs à partir de 150 € par projet.
              La sûreté immobilière et le LTV annoncé ne garantissent ni le capital,
              ni les intérêts, ni la liquidité.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <DigiloButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir Digilo
              </DigiloButton>
              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire notre analyse
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                3 % de cashback pour les nouveaux investisseurs sous conditions
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Offre partenaire susceptible d’évolution : inscription via un lien
                affilié valide, puis investissements réalisés pendant les 60 premiers
                jours. Aucun minimum propre au cashback, plafond ou terme de campagne
                n’a été communiqué à Afflizen.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">Résumé Afflizen</p>
            <h2 className="mt-4 text-2xl font-black">Digilo</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Produit : prêts participatifs professionnels</li>
              <li>• Minimum : 150 € par projet</li>
              <li>• Cadre : licence européenne ECSP</li>
              <li>• Capital garanti : non</li>
            </ul>
            <DigiloButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Accéder à Digilo
            </DigiloButton>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 md:grid-cols-4">
          {[
            ["Minimum", "150 € par projet"],
            ["LTV annoncé", "60 % maximum"],
            ["Supervision", "Latvijas Banka"],
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
            <h2 className="text-3xl font-bold">Qu’est-ce que Digilo ?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Digilo est une plateforme de financement participatif exploitée par
              CSP Growth Solutions SIA, société lettone enregistrée sous le numéro
              40203585248. Elle met en relation des investisseurs avec des porteurs
              de projets professionnels recherchant un financement par prêt.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Les investisseurs financent notamment des PME, entreprises,
              commerçants individuels et indépendants. Les fonds peuvent servir au
              développement, au besoin de trésorerie, à l’expansion ou à une
              opération liée à l’immobilier.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Comment fonctionne Digilo ?</h2>
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
            <h2 className="text-3xl font-bold">Quels projets peut-on financer ?</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Digilo finance des besoins professionnels au moyen de contrats de
              prêt. L’offre disponible peut rester limitée et évoluer rapidement :
              chaque dossier doit être examiné séparément.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {projectTypes.map((project) => (
                <div key={project.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                  <h3 className="font-bold text-emerald-300">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase text-emerald-800">
              Offre affiliée susceptible d’évolution
            </p>
            <h2 className="mt-3 text-3xl font-bold text-emerald-950">
              3 % de cashback pendant les 60 premiers jours
            </h2>
            <p className="mt-4 leading-7 text-emerald-950">
              La communication partenaire reçue par Afflizen annonce 3 % de
              cashback pour les nouveaux investisseurs qui s’inscrivent via un
              lien affilié valide. Le cashback porte sur les investissements
              réalisés pendant les 60 premiers jours après l’inscription.
            </p>
            <p className="mt-4 text-sm leading-6 text-emerald-900">
              Aucun minimum spécifique au cashback, aucun plafond et aucune date de
              fin n’ont été communiqués. L’éligibilité, le calcul, l’attribution et
              la disponibilité de l’offre doivent être vérifiés auprès de Digilo
              avant tout investissement. Le cashback ne compense pas le risque de perte.
            </p>
            <div className="mt-6">
              <DigiloButton
                location="offer"
                className="inline-flex rounded-full bg-emerald-700 px-7 py-4 font-semibold text-white transition hover:bg-emerald-800"
              >
                Vérifier l’offre Digilo
              </DigiloButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Minimum, rendement attendu et durée</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Minimum", "150 €", "Montant public actuellement annoncé pour un investissement manuel dans un projet."],
                ["Rendement attendu", "9 à 12 %", "Fourchette actuellement affichée selon les projets, sans garantie de résultat."],
                ["Durée indicative", "12 à 36 mois", "Fourchette présentée par Digilo, à vérifier dans chaque offre et contrat."],
              ].map(([label, value, text]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-500">{label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Ces chiffres décrivent l’offre publique consultée le 6 septembre
              2026. Ils peuvent évoluer et ne constituent ni une promesse de
              rendement ni une garantie de remboursement.
            </p>
          </section>

          <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-sky-950">
              Sûreté immobilière et LTV : une protection limitée
            </h2>
            <p className="mt-4 leading-7 text-sky-950">
              Digilo indique que chaque projet est adossé à une sûreté immobilière
              et que le ratio entre le prêt et la valeur du bien, ou LTV, ne dépasse
              pas 60 % lors de l’analyse. La sûreté est gérée par un agent agissant
              dans l’intérêt des investisseurs selon les contrats applicables.
            </p>
            <p className="mt-4 leading-7 text-sky-950">
              Cette structure n’est pas une garantie du capital. Une expertise peut
              devenir obsolète, le prix du bien peut baisser et la réalisation de la
              sûreté peut prendre du temps. Après les coûts de procédure, les sommes
              récupérées peuvent rester inférieures aux montants dus.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Frais actuels pour l’investisseur</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Les conditions Digilo en vigueur indiquent que l’investisseur ne paie
              pas les services fournis par Digilo ou l’agent des sûretés. Le virement
              entrant vers le portefeuille Lemonway est actuellement annoncé sans
              frais de traitement.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Des frais liés à Lemonway peuvent néanmoins être prévus par la grille
              tarifaire. Les conditions mentionnent notamment une retenue possible
              de 1 € lors d’un retrait. Les tarifs peuvent être modifiés : vérifiez
              la version visible dans le compte avant tout transfert.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Investissement manuel ou Auto-Invest</h2>
            <p className="mt-4 leading-7 text-slate-700">
              La sélection manuelle permet d’examiner chaque projet et sa fiche
              d’informations clés avant de conclure le contrat. Pour certains
              investisseurs non avertis, un délai de réflexion de quatre jours peut
              s’appliquer selon les conditions et le règlement européen.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold">Set &amp; Forget</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Investissement automatisé d’un montant défini dans chaque nouveau
                  projet correspondant, avec un minimum actuel de 150 €.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold">Select &amp; Maximize</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Paramètres plus détaillés sur le LTV, le taux, la durée, la zone
                  et la sûreté, avec un minimum actuel de 300 €.
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Auto-Invest facilite l’exécution, mais ne garantit pas la diversification
              ni le rendement. Le délai de réflexion de quatre jours ne s’applique
              pas aux contrats conclus automatiquement selon les paramètres validés.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Disponibilité géographique</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Le passeport ECSP et les conditions d’inscription doivent être lus
              ensemble. La présence d’un pays dans le registre autorise la fourniture
              du service, sans obliger Digilo à accepter chaque dossier.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {countries.map((country) => (
                <div key={country.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold">{country.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{country.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase text-emerald-300">
              Cadre réglementaire
            </p>
            <h2 className="mt-3 text-3xl font-bold">Licence ECSP de CSP Growth Solutions SIA</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Latvijas Banka a autorisé CSP Growth Solutions SIA le 16 septembre
              2025 comme prestataire de services de financement participatif selon
              le règlement européen 2020/1503. Le registre couvre la facilitation
              de prêts, Auto-Invest, un tableau d’annonces et l’évaluation de projets.
            </p>
            <p className="mt-4 leading-7 text-slate-200">
              La licence encadre l’activité de la plateforme et ses obligations
              d’information. Elle ne valide pas la qualité de chaque projet et ne
              protège pas l’investisseur contre le défaut d’un emprunteur.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-emerald-950">Avantages à considérer</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-emerald-950">
                {strengths.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-rose-950">Risques et limites</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-rose-950">
                {risks.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-red-950">
              Ni garantie des dépôts, ni régime d’indemnisation
            </h2>
            <p className="mt-4 leading-7 text-red-950">
              Les investissements Digilo ne sont pas des dépôts bancaires. Ils ne
              sont couverts ni par un système de garantie des dépôts au titre de la
              directive 2014/49/UE, ni par un régime d’indemnisation des investisseurs
              au titre de la directive 97/9/CE.
            </p>
            <p className="mt-4 leading-7 text-red-950">
              Le tableau d’annonces n’est pas un marché secondaire et ne garantit
              pas qu’un acheteur sera trouvé. Il faut pouvoir conserver le prêt
              jusqu’à son échéance et absorber une perte complète.
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

          <section id="avis" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Notre analyse de Digilo</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Digilo associe un cadre ECSP, un seuil d’entrée accessible et des
              projets adossés à des actifs immobiliers. La lecture du LTV, des
              documents clés, de la qualité de l’emprunteur et du rang de la sûreté
              reste indispensable pour chaque offre.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              La licence sous sa forme actuelle date de 2025 et l’historique public
              de la plateforme reste court. Digilo peut donc être étudiée comme une
              poche limitée et diversifiée, jamais comme un placement garanti ou
              une solution de trésorerie disponible à tout moment.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">FAQ Digilo</h2>
            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <div key={item.question} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <DigiloButton
                location="final"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Consulter Digilo
              </DigiloButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">À retenir</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Minimum public de 150 € par projet.</li>
              <li>• LTV annoncé à 60 % maximum.</li>
              <li>• Sûreté immobilière sans garantie du capital.</li>
              <li>• Aucune garantie des dépôts ou indemnisation.</li>
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
            Transparence : les CTA Digilo de cette page utilisent un lien affilié.
            Afflizen peut percevoir une commission lorsqu’un utilisateur passe par
            ce lien et réalise une action éligible. Cette rémunération éventuelle
            ne modifie pas notre approche éditoriale. Cette page est informative et
            ne constitue pas un conseil financier, fiscal ou juridique personnalisé.
            Le capital investi est à risque.
          </p>
        </div>
      </section>
    </main>
  );
}
