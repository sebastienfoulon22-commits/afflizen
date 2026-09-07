import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import type { ReactNode } from "react";

const LONVEST_AFFILIATE_LINK =
  "https://c.trackmytarget.com/?a=m0c71f&i=20ctay";

export const metadata = createPageMetadata({
  title: "Lonvest avis : prêts P2P, fonctionnement et risques",
  description:
    "Analyse de Lonvest : prêts P2P via Auto Invest, minimum annoncé de 50 €, disponibilité, frais, statut sans licence formelle et risques.",
  path: "/investissement/lonvest",
  type: "article",
});

const steps = [
  {
    title: "Créer et vérifier son compte",
    text: "L’inscription est réservée aux personnes majeures et comprend des contrôles d’identité, de résidence et de lutte contre le blanchiment.",
  },
  {
    title: "Alimenter le compte",
    text: "Lonvest indique accepter les virements bancaires provenant de l’Union européenne ou de pays appliquant des règles comparables de lutte contre le blanchiment.",
  },
  {
    title: "Configurer Auto Invest",
    text: "L’investisseur définit ses critères, puis l’outil automatise l’allocation entre les prêts disponibles qui y correspondent.",
  },
  {
    title: "Suivre les remboursements",
    text: "Le tableau de bord présente les échéances, intérêts, retards et mécanismes contractuels associés aux créances.",
  },
];

const countries = [
  {
    title: "Belgique",
    text: "La Belgique ne figure pas dans la liste d’exclusion publiée par Lonvest. L’ouverture reste soumise aux contrôles d’éligibilité et KYC.",
  },
  {
    title: "France",
    text: "La France ne figure pas dans la liste d’exclusion publiée par Lonvest. L’acceptation finale dépend des vérifications de la plateforme.",
  },
  {
    title: "Luxembourg",
    text: "Le Luxembourg ne figure pas dans la liste d’exclusion publiée par Lonvest. Les conditions de résidence et de financement restent applicables.",
  },
  {
    title: "Suisse",
    text: "La Suisse ne figure pas dans la liste d’exclusion publiée par Lonvest. L’éligibilité doit néanmoins être confirmée lors de l’inscription.",
  },
];

const strengths = [
  "Un investissement minimum actuellement annoncé à 50 €.",
  "Une allocation automatisée selon les critères choisis par l’investisseur.",
  "Des informations publiées sur les organismes initiateurs et les prêts proposés.",
  "Une interface destinée aux investisseurs européens, sous réserve d’éligibilité.",
];

const risks = [
  "Perte partielle ou totale du capital en cas de défaut ou de recouvrement insuffisant.",
  "Défaillance d’un organisme initiateur ou du groupe censé soutenir ses obligations.",
  "Absence de licence financière formelle et de supervision prudentielle équivalente à celle d’un établissement réglementé.",
  "Absence de garantie publique des dépôts et de régime public d’indemnisation des investisseurs.",
  "Liquidité limitée : les créances peuvent rester immobilisées jusqu’à leur remboursement.",
  "Taux affichés et performances passées sans garantie de résultat futur.",
];

const checks = [
  "Identifier l’organisme initiateur, l’emprunteur sous-jacent et les contrats applicables.",
  "Examiner la durée, le taux, les retards et la concentration avant de valider une stratégie Auto Invest.",
  "Vérifier les frais applicables dans les conditions Lonvest en vigueur au moment d’investir.",
  "Ne pas assimiler le buyback ou la garantie de groupe à une garantie publique ou à un remboursement certain.",
  "Diversifier prudemment et ne pas investir son épargne de précaution.",
];

const relatedLinks = [
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Comparer Lonvest avec les autres plateformes d’investissement suivies.",
  },
  {
    href: "/investissement/lendermarket",
    title: "Lendermarket",
    text: "Une autre marketplace de prêts P2P, avec ses propres règles et risques.",
  },
  {
    href: "/investissement/mintos",
    title: "Mintos",
    text: "Une plateforme européenne proposant plusieurs familles de placements.",
  },
  {
    href: "/investissement/monefit",
    title: "Monefit SmartSaver",
    text: "Une solution alternative liée à un portefeuille de prêts européens.",
  },
];

const faq = [
  {
    question: "Qu’est-ce que Lonvest ?",
    answer:
      "Lonvest est une plateforme exploitée par Lonvest Platform d.o.o., société croate. Elle permet d’investir dans des créances proposées par des organismes initiateurs au moyen d’une stratégie Auto Invest.",
  },
  {
    question: "Quel est le minimum pour investir sur Lonvest ?",
    answer:
      "Lonvest annonce actuellement un minimum de 50 €. Ce seuil peut évoluer et doit être vérifié dans l’interface avant tout investissement.",
  },
  {
    question: "Lonvest est-elle réglementée par une autorité financière ?",
    answer:
      "Non. Lonvest indique opérer sous la juridiction croate sans disposer actuellement d’une licence financière formelle. La société applique notamment des contrôles KYC et AML, mais ceux-ci ne remplacent pas une autorisation ni une supervision prudentielle.",
  },
  {
    question: "Lonvest est-elle disponible en Belgique, France, Luxembourg et Suisse ?",
    answer:
      "Ces quatre pays ne figurent pas dans la liste d’exclusion publiée par Lonvest lors de notre revue. L’éligibilité reste toutefois conditionnée à la résidence, au compte bancaire utilisé et aux contrôles KYC et AML de la plateforme.",
  },
  {
    question: "Le buyback Lonvest garantit-il le remboursement ?",
    answer:
      "Non. Le buyback annoncé après plus de 90 jours de retard est un mécanisme contractuel à la charge de l’organisme initiateur. Son exécution dépend de la validité du contrat et de la solvabilité de cet organisme.",
  },
  {
    question: "La garantie de groupe supprime-t-elle le risque ?",
    answer:
      "Non. La garantie de groupe est un engagement contractuel supplémentaire. Elle dépend de la capacité financière du groupe concerné et ne constitue ni une garantie publique ni une assurance de remboursement.",
  },
  {
    question: "Les fonds investis sont-ils protégés par une garantie publique ?",
    answer:
      "Non. Les conditions Lonvest précisent que le compte n’est pas un compte bancaire ou un dépôt et qu’aucun système public de garantie des dépôts ou d’indemnisation des investisseurs ne couvre les sommes investies.",
  },
  {
    question: "Quels frais Lonvest applique-t-elle ?",
    answer:
      "La documentation commerciale évoque l’absence de frais cachés, tandis que les conditions prévoient que des frais de service peuvent s’appliquer selon la grille publiée par Lonvest. Vérifiez les conditions et tarifs en vigueur dans votre compte au moment d’investir.",
  },
  {
    question: "Le lien Lonvest d’Afflizen donne-t-il droit à un cashback ?",
    answer:
      "Afflizen ne promet actuellement aucun cashback avec ce lien, faute de confirmation officielle reliant cette offre précise au parcours Afflizen. Toute promotion éventuellement affichée par Lonvest doit être vérifiée directement dans ses conditions avant d’investir.",
  },
  {
    question: "Le lien Lonvest d’Afflizen est-il affilié ?",
    answer:
      "Oui. Les CTA Lonvest utilisent un lien affilié professionnel. Afflizen peut percevoir une commission lorsqu’une action éligible est réalisée via ce lien. Cette rémunération éventuelle ne modifie ni les conditions de Lonvest ni notre approche éditoriale.",
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

function LonvestButton({
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
      href={LONVEST_AFFILIATE_LINK}
      platform="Lonvest"
      category="investissement"
      location={location}
      className={className}
    >
      {children}
    </AffiliateButton>
  );
}

export default function LonvestPage() {
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
              Lonvest : investir dans des prêts P2P via Auto Invest
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Lonvest propose d’automatiser l’investissement dans des créances à
              partir de 50 €. Le capital, le rendement et la liquidité ne sont
              pas garantis, et la plateforme ne dispose pas d’une licence
              financière formelle.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <LonvestButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir Lonvest
              </LonvestButton>
              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire notre analyse
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Aucun cashback promis par Afflizen
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Lonvest publie une politique générale de cashback, mais son
                application au lien Afflizen n’est pas explicitement confirmée.
                Nous ne présentons donc aucun avantage public comme acquis.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">Résumé Afflizen</p>
            <h2 className="mt-4 text-2xl font-black">Lonvest</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Produit : créances issues de prêts</li>
              <li>• Minimum annoncé : 50 €</li>
              <li>• Gestion : Auto Invest</li>
              <li>• Licence financière formelle : non</li>
            </ul>
            <LonvestButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Accéder à Lonvest
            </LonvestButton>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 md:grid-cols-4">
          {[
            ["Produit", "Prêts P2P"],
            ["Minimum", "50 €"],
            ["Allocation", "Automatisée"],
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
            <h2 className="text-3xl font-bold">Qu’est-ce que Lonvest ?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Lonvest est exploitée par Lonvest Platform d.o.o., société croate
              enregistrée sous le numéro 081501022 et établie à Zagreb. La
              plateforme met en relation des investisseurs avec des organismes
              initiateurs qui proposent des créances issues de prêts.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              L’investisseur acquiert des droits contractuels liés à ces créances.
              Il ne réalise pas un dépôt bancaire et s’expose notamment au risque
              de défaut de l’emprunteur, de l’organisme initiateur et des autres
              parties chargées d’exécuter les engagements.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Comment investir sur Lonvest ?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-emerald-700">Étape {index + 1}</p>
                  <h3 className="mt-2 font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{step.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              L’automatisation facilite l’allocation, mais elle ne remplace pas
              l’examen des critères, des organismes initiateurs et des risques.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Minimum, rendement et frais</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Lonvest annonce actuellement un investissement minimum de 50 €.
              Les taux présentés sur la plateforme sont des rendements annoncés
              ou contractuels selon les créances : ils ne garantissent pas la
              performance finale ni le remboursement du capital.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Le site commercial évoque l’absence de frais cachés, tandis que les
              conditions prévoient que des frais de service peuvent être dus selon
              la grille publiée par Lonvest. Les frais applicables doivent donc être
              vérifiés dans les conditions et dans le compte au moment d’investir.
            </p>
          </section>

          <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-sky-950">
              Buyback et garantie de groupe : des engagements contractuels
            </h2>
            <p className="mt-4 leading-7 text-sky-950">
              Lonvest annonce un mécanisme de buyback lorsqu’un prêt dépasse
              90 jours de retard. L’obligation repose sur l’organisme initiateur
              selon le contrat de cession applicable. Si celui-ci devient
              insolvable ou conteste l’obligation, le rachat peut être retardé,
              incomplet ou impossible.
            </p>
            <p className="mt-4 leading-7 text-sky-950">
              La garantie de groupe est elle aussi un engagement privé. Elle dépend
              de la capacité financière du groupe à honorer ses obligations et ne
              constitue jamais une garantie de remboursement du capital.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Belgique, France, Luxembourg et Suisse</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Lors de notre revue du 7 septembre 2026, aucun de ces quatre pays ne
              figurait dans la liste des juridictions exclues publiée par Lonvest.
              Cela indique une éligibilité possible, pas un droit automatique à
              l’ouverture d’un compte.
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

          <section className="rounded-3xl border border-slate-700 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase text-emerald-300">
              Cadre juridique
            </p>
            <h2 className="mt-3 text-3xl font-bold">Aucune licence financière formelle</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Lonvest indique opérer sous la juridiction croate, qui lui permet
              actuellement d’exercer cette activité sans licence financière
              formelle. Ses contrôles d’identité et de lutte contre le blanchiment
              ne doivent pas être confondus avec une autorisation ou une supervision
              prudentielle par une autorité financière.
            </p>
            <p className="mt-4 leading-7 text-slate-200">
              Les conditions précisent également que le compte n’est ni un compte
              courant, ni un compte d’épargne, ni un dépôt. Les investissements ne
              bénéficient d’aucune garantie publique des dépôts ni d’aucun régime
              public d’indemnisation des investisseurs.
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
            <h2 className="text-3xl font-bold text-red-950">
              Le capital peut être entièrement perdu
            </h2>
            <p className="mt-4 leading-7 text-red-950">
              Ni le buyback, ni la garantie de groupe, ni la séparation annoncée
              des fonds ne protège l’investisseur contre toutes les pertes.
              N’investissez qu’une somme que vous pouvez immobiliser et perdre.
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
            <h2 className="text-3xl font-bold">Avis Afflizen sur Lonvest</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Lonvest rend l’investissement P2P accessible avec un seuil de 50 €
              et une gestion automatisée. Cette simplicité ne réduit cependant ni
              le risque de crédit, ni le risque de contrepartie, ni l’incertitude
              liée à une plateforme sans licence financière formelle.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              La plateforme peut uniquement être envisagée comme une exposition
              risquée et limitée dans un portefeuille diversifié, après lecture des
              contrats, des frais et de la situation financière des organismes
              initiateurs.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">FAQ Lonvest</h2>
            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <div key={item.question} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <LonvestButton
                location="faq"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Consulter Lonvest
              </LonvestButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">À retenir</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Capital et rendement non garantis.</li>
              <li>• Aucun cashback promis par Afflizen.</li>
              <li>• Aucune licence financière formelle.</li>
              <li>• Frais à vérifier avant d’investir.</li>
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
            Transparence : les CTA Lonvest de cette page utilisent un lien
            affilié professionnel. Afflizen peut percevoir une commission si une
            action éligible est réalisée via ce lien. Cette page est informative
            et ne constitue pas un conseil financier, fiscal ou juridique. Le
            capital est à risque et les conditions peuvent évoluer.
          </p>
        </div>
      </section>
    </main>
  );
}
