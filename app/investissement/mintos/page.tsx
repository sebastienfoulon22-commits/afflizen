import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import type { ReactNode } from "react";

const MINTOS_AFFILIATE_LINK = "https://invest.mintos.com/Gb4L39";

export const metadata = createPageMetadata({
  title: "Mintos avis : prêts, obligations, ETF et frais",
  description:
    "Découvrez Mintos, ses prêts, obligations, ETF et investissements immobiliers, ses frais, ses minimums, sa réglementation et les risques à connaître.",
  path: "/investissement/mintos",
  type: "article",
});

const products = [
  {
    title: "Prêts",
    text: "Des instruments adossés à des prêts proposés par différentes sociétés de crédit, avec sélection manuelle ou portefeuilles automatisés selon l’offre disponible.",
  },
  {
    title: "Obligations",
    text: "Des obligations d’entreprises accessibles individuellement ou via certains portefeuilles. Le coupon et le remboursement dépendent de la solidité de l’émetteur.",
  },
  {
    title: "ETF",
    text: "Des ETF à sélectionner soi-même, y compris par fractions, ainsi qu’un portefeuille Core ETFs automatisé. Chaque fonds conserve ses propres frais et risques de marché.",
  },
  {
    title: "Immobilier",
    text: "Des titres liés à des biens immobiliers locatifs, avec revenus et évolution de valeur potentiels, sans garantie sur les loyers, la revente ou le capital.",
  },
  {
    title: "Crypto ETP",
    text: "Des produits cotés donnant une exposition aux cryptoactifs sans portefeuille crypto personnel. Leur volatilité et leur risque de perte peuvent être élevés.",
  },
  {
    title: "Smart Cash",
    text: "Un produit fondé sur un fonds monétaire, disponible seulement dans certains pays. Il ne s’agit pas d’un dépôt bancaire et son rendement peut évoluer.",
  },
];

const steps = [
  {
    title: "Créer et vérifier le compte",
    text: "Choisissez un compte particulier ou professionnel, confirmez votre identité et fournissez les informations demandées sur votre résidence.",
  },
  {
    title: "Répondre au questionnaire investisseur",
    text: "Mintos réalise une évaluation d’adéquation et de caractère approprié avant de donner accès aux produits correspondant au profil déclaré.",
  },
  {
    title: "Approvisionner le compte",
    text: "Le virement bancaire en euros est une option gratuite. Les dépôts par carte ou portefeuille mobile peuvent entraîner des frais.",
  },
  {
    title: "Choisir et suivre les investissements",
    text: "Sélectionnez un produit ou un portefeuille, consultez sa documentation, puis surveillez paiements, frais, valorisation et liquidité.",
  },
];

const minimums = [
  {
    title: "Prêts",
    value: "50 € / 1 €",
    text: "Minimum généralement indiqué sur le marché primaire / secondaire.",
  },
  {
    title: "Obligations",
    value: "50 € / 1 €",
    text: "Minimum généralement indiqué sur le marché primaire / secondaire.",
  },
  {
    title: "Immobilier",
    value: "50 € / 1 €",
    text: "Minimum généralement indiqué sur le marché primaire / secondaire.",
  },
  {
    title: "ETF",
    value: "Dès 1 € ou 50 €",
    text: "Sélection fractionnée annoncée dès 1 € ; Core ETFs annoncé dès 50 €.",
  },
  {
    title: "Crypto ETP",
    value: "Dès 5 €",
    text: "Seuil affiché par Mintos pour cette catégorie à la date de revue.",
  },
  {
    title: "Smart Cash",
    value: "Dès 1 €",
    text: "Uniquement pour les résidences fiscales et profils éligibles.",
  },
];

const fees = [
  {
    title: "Investissement manuel",
    text: "Mintos affiche actuellement 0 € pour les ETF, l’immobilier, les prêts manuels et les obligations manuelles. Les ETF conservent les frais internes de leur émetteur.",
  },
  {
    title: "Portefeuilles automatisés",
    text: "Les portefeuilles de prêts et d’obligations affichent des frais annuels de 0,29 % à 0,39 % selon la formule choisie.",
  },
  {
    title: "Marché secondaire",
    text: "La vente d’un investissement sur le marché secondaire est actuellement facturée 0,85 % et reste soumise à la présence d’un acheteur.",
  },
  {
    title: "Dépôts et devises",
    text: "Les virements bancaires sont annoncés gratuits. Les dépôts par carte, Apple Pay ou Google Pay coûtent 2 %, et le change démarre à 0,50 %.",
  },
  {
    title: "Autres frais utiles",
    text: "Mintos affiche 0,19 % par an pour Smart Cash, 0,49 % par transaction sur les Crypto ETP avec un minimum de 0,99 €, et 4,90 € par mois en cas d’inactivité.",
  },
];

const countries = [
  {
    title: "Belgique",
    text: "L’inscription est généralement possible pour un adulte éligible. Smart Cash n’est toutefois pas disponible pour les résidents fiscaux belges dans la liste officielle actuelle.",
  },
  {
    title: "France",
    text: "Les résidents et citoyens éligibles peuvent généralement ouvrir un compte. Smart Cash figure actuellement parmi les produits accessibles aux résidents fiscaux français.",
  },
  {
    title: "Luxembourg",
    text: "L’ouverture de compte est généralement possible et Smart Cash figure dans la liste actuelle des résidences fiscales éligibles.",
  },
  {
    title: "Suisse",
    text: "Les citoyens et résidents suisses majeurs sont généralement acceptés. Smart Cash est actuellement annoncé pour les résidents fiscaux suisses.",
  },
];

const strengths = [
  "Plusieurs catégories d’investissement réunies sur une même plateforme.",
  "Entreprise d’investissement agréée et supervisée par Latvijas Banka.",
  "Choix entre sélection manuelle et portefeuilles automatisés selon les produits.",
  "Seuils d’entrée relativement accessibles sur plusieurs catégories.",
  "Tarification officielle détaillée et documentation par instrument.",
  "Accès généralement ouvert aux adultes éligibles de l’UE, de l’EEE et de Suisse.",
];

const risks = [
  "Perte partielle ou totale du capital investi.",
  "Défaut d’un emprunteur, d’une société de crédit, d’un émetteur ou d’une autre contrepartie.",
  "Baisse du prix d’un ETF, d’une obligation, d’un bien immobilier ou d’un Crypto ETP.",
  "Risque de plateforme, opérationnel, juridique ou lié à la conservation des actifs.",
  "Liquidité insuffisante et absence d’acheteur sur le marché secondaire.",
  "Risque de change pour les investissements ou flux dans une autre devise.",
  "Disponibilité, frais et règles propres à chaque pays ou produit.",
  "Rendements, paiements, loyers, coupons et délais de sortie non garantis.",
];

const relatedLinks = [
  {
    href: "/investissement/lendermarket",
    title: "Lendermarket",
    text: "Une marketplace consacrée aux investissements dans des prêts P2P.",
  },
  {
    href: "/investissement/loanch",
    title: "Loanch",
    text: "Une plateforme donnant accès à des créances liées à des prêts à la consommation.",
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
    question: "Qu’est-ce que Mintos ?",
    answer:
      "Mintos est une plateforme européenne d’investissement lancée en 2015 pour l’investissement dans des prêts. Elle propose aujourd’hui plusieurs catégories, notamment des prêts, obligations, ETF, investissements immobiliers, Crypto ETP et Smart Cash selon le pays et l’éligibilité.",
  },
  {
    question: "Mintos est-elle réglementée ?",
    answer:
      "Oui. AS Mintos Marketplace est une entreprise d’investissement agréée depuis 2021 et supervisée par Latvijas Banka, la banque centrale de Lettonie. Cette réglementation n’élimine pas les risques propres aux produits proposés.",
  },
  {
    question: "Quel est le minimum pour investir sur Mintos ?",
    answer:
      "Le minimum dépend du produit et du marché. Les prêts, obligations et investissements immobiliers commencent généralement à 50 € sur le marché primaire et à 1 € sur le secondaire. Mintos annonce aussi les ETF en sélection fractionnée dès 1 €, Core ETFs dès 50 €, les Crypto ETP dès 5 € et Smart Cash dès 1 € lorsqu’il est disponible.",
  },
  {
    question: "Mintos est-elle disponible en Belgique ?",
    answer:
      "L’inscription est généralement ouverte aux citoyens et résidents majeurs de l’UE et de l’EEE, sous réserve de l’acceptation du dossier. Tous les produits ne sont pas nécessairement disponibles : Smart Cash n’est notamment pas proposé aux résidents fiscaux belges dans la liste officielle actuelle.",
  },
  {
    question: "Mintos est-elle disponible en France, au Luxembourg et en Suisse ?",
    answer:
      "Les citoyens et résidents majeurs de l’UE, de l’EEE ou de Suisse peuvent généralement s’inscrire, sous réserve des contrôles Mintos. La France, le Luxembourg et la Suisse figurent aussi dans la liste actuelle des résidences fiscales éligibles à Smart Cash, mais chaque autre produit doit être vérifié séparément.",
  },
  {
    question: "Quels frais Mintos facture-t-elle ?",
    answer:
      "Mintos annonce actuellement l’investissement manuel sans frais sur les prêts, obligations, ETF et immobilier. Des frais s’appliquent notamment aux portefeuilles automatisés, à Smart Cash, aux Crypto ETP, aux ventes sur le marché secondaire, aux dépôts par carte, au change et à l’inactivité. La grille officielle doit être relue avant d’investir.",
  },
  {
    question: "La protection de 20 000 € garantit-elle le capital ?",
    answer:
      "Non. Le régime national d’indemnisation peut intervenir jusqu’à 20 000 € si Mintos est incapable de restituer des instruments financiers ou des fonds couverts. Il ne rembourse pas les pertes de marché, le défaut d’un emprunteur, d’une société de crédit ou d’un émetteur, ni l’absence de liquidité.",
  },
  {
    question: "Peut-on revendre un investissement à tout moment ?",
    answer:
      "Non. Certains investissements peuvent être proposés sur le marché secondaire, mais la vente dépend d’un acheteur et des critères d’éligibilité de la position. Le délai et le prix de sortie ne sont jamais garantis.",
  },
  {
    question: "Mintos propose-t-elle un bonus de bienvenue via Afflizen ?",
    answer:
      "Afflizen ne présente actuellement aucun bonus public Mintos confirmé. Il faut se référer aux informations affichées par Mintos au moment de l’inscription et ne pas supposer qu’une promotion est disponible.",
  },
  {
    question: "Afflizen a-t-il personnellement investi chez Mintos ?",
    answer:
      "Non. Cette fiche repose sur l’étude des pages officielles de Mintos et du registre de Latvijas Banka, pas sur une expérience personnelle d’investissement du propriétaire d’Afflizen.",
  },
  {
    question: "Le lien Mintos d’Afflizen est-il affilié ?",
    answer:
      "Oui. Les CTA Mintos utilisent un lien affilié professionnel. Afflizen peut percevoir une commission lorsqu’une action éligible est réalisée via ce lien. Cette rémunération éventuelle ne modifie ni les conditions affichées par Mintos ni notre approche éditoriale.",
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

function MintosButton({
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
      href={MINTOS_AFFILIATE_LINK}
      platform="mintos"
      category="investissement"
      location={location}
      className={className}
    >
      {children}
    </AffiliateButton>
  );
}

export default function MintosPage() {
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
              Plateforme européenne multi-investissements
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
              Mintos : prêts, obligations, ETF et immobilier sur une même plateforme
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Mintos réunit plusieurs catégories d’investissement avec sélection
              manuelle ou automatisée selon les produits. Les rendements et la
              liquidité ne sont pas garantis, et le capital investi est à risque.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <MintosButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Découvrir Mintos
              </MintosButton>
              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire notre analyse
              </a>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">
              Aucun bonus de bienvenue public n’est présenté par Afflizen à la
              date de cette revue. Vérifiez toujours les conditions directement
              sur Mintos avant toute inscription.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">Résumé Afflizen</p>
            <h2 className="mt-4 text-2xl font-black">Mintos</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Catégories : prêts, obligations, ETF et plus</li>
              <li>• Licence : entreprise d’investissement depuis 2021</li>
              <li>• Accès : UE, EEE et Suisse sous conditions</li>
              <li>• Capital garanti : non</li>
            </ul>
            <MintosButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Accéder à Mintos
            </MintosButton>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 md:grid-cols-4">
          {[
            ["Lancement", "2015"],
            ["Supervision", "Latvijas Banka"],
            ["Produits", "Selon pays et profil"],
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
            <h2 className="text-3xl font-bold">Qu’est-ce que Mintos ?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Mintos est une plateforme européenne lancée en 2015 autour de
              l’investissement dans des prêts. Son offre s’est depuis élargie à
              d’autres instruments financiers, avec une interface commune pour
              investir et suivre son portefeuille.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              La société AS Mintos Marketplace est enregistrée en Lettonie. Elle
              exerce comme entreprise d’investissement agréée et supervisée, ce
              qui encadre ses services sans transformer les investissements en
              produits garantis.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Les investissements proposés</h2>
            <p className="mt-4 leading-7 text-slate-700">
              L’accès réel dépend du pays de résidence, du profil investisseur,
              des évaluations réglementaires et de l’offre disponible au moment
              de la connexion.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {products.map((product) => (
                <div key={product.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-950">{product.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{product.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Comment commencer sur Mintos ?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-emerald-700">Étape {index + 1}</p>
                  <h3 className="mt-2 font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <MintosButton
                location="steps"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Vérifier les produits accessibles
              </MintosButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Minimums d’investissement</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Un minimum unique de 50 € serait trompeur : le seuil varie selon
              l’actif, le marché et le mode d’investissement. Voici les montants
              officiels affichés lors de la revue du 6 septembre 2026.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {minimums.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold">{item.title}</h3>
                    <span className="text-right font-bold text-emerald-700">{item.value}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Frais Mintos utiles à connaître</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Les frais ci-dessous correspondent à la grille officielle consultée
              le 6 septembre 2026. Ils peuvent changer et doivent être vérifiés
              avant chaque opération.
            </p>
            <div className="mt-6 space-y-4">
              {fees.map((fee) => (
                <div key={fee.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold">{fee.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{fee.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-sky-950">
              Belgique, France, Luxembourg et Suisse
            </h2>
            <p className="mt-4 leading-7 text-sky-950">
              Mintos accepte généralement les citoyens et résidents majeurs de
              l’UE, de l’EEE ou de Suisse. Cette règle d’inscription ne signifie
              pas que chaque produit est commercialisé dans chaque pays.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {countries.map((country) => (
                <div key={country.title} className="rounded-2xl border border-sky-200 bg-white p-5">
                  <h3 className="font-bold text-sky-950">{country.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-sky-900">{country.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-sky-900">
              La résidence fiscale, la nationalité, le questionnaire investisseur
              et la documentation locale peuvent modifier l’accès. Vérifiez le
              catalogue visible dans votre propre compte.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase text-emerald-300">
              Cadre réglementaire
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Licence européenne et indemnisation des investisseurs
            </h2>
            <p className="mt-4 leading-7 text-slate-200">
              Latvijas Banka recense AS Mintos Marketplace comme entreprise
              d’investissement autorisée depuis le 17 août 2021. La supervision
              impose notamment des règles de conduite, d’information et de
              séparation des actifs.
            </p>
            <p className="mt-4 leading-7 text-slate-200">
              Le régime national d’indemnisation peut couvrir jusqu’à 20 000 € de
              créances éligibles si Mintos ne peut pas restituer des instruments
              financiers ou des fonds. Il ne protège pas contre une baisse de
              prix, un défaut d’emprunteur, de société de crédit ou d’émetteur, ni
              contre l’absence d’un marché pour revendre.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Cette protection n’est ni une garantie bancaire des dépôts ni une
              assurance du capital. Son champ dépend aussi de la nature juridique
              de l’investissement concerné.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-emerald-950">Avantages</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-emerald-950">
                {strengths.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-rose-950">Points de vigilance</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-rose-950">
                {risks.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-amber-950">
              Liquidité et rendement : aucun résultat garanti
            </h2>
            <p className="mt-4 leading-7 text-amber-950">
              La possibilité de vendre sur un marché secondaire ou de sortir d’un
              portefeuille dépend des règles du produit, de son état et de la
              demande. Une vente peut prendre du temps, se faire à un prix moins
              favorable ou rester impossible.
            </p>
            <p className="mt-4 leading-7 text-amber-950">
              Les taux, coupons, loyers ou performances passées servent uniquement
              d’indications. Ils ne garantissent ni le rendement futur ni la
              récupération du capital.
            </p>
          </section>

          <section id="avis" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Notre avis sur Mintos</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Mintos peut intéresser un investisseur qui souhaite centraliser des
              actifs traditionnels et alternatifs et qui accepte d’étudier des
              risques très différents. La licence européenne et la documentation
              disponible sont des points utiles, sans remplacer l’analyse de
              chaque instrument.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Pour un résident belge, la restriction actuelle de Smart Cash mérite
              une attention particulière. Dans tous les pays, les frais des
              portefeuilles, la liquidité et le risque des contreparties doivent
              être comparés avant d’investir.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Afflizen n’a pas investi personnellement chez Mintos. Cette analyse
              repose sur les informations officielles consultées à la date de revue.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">FAQ Mintos</h2>
            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <div key={item.question} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <MintosButton
                location="final"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Consulter Mintos
              </MintosButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">À retenir</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Plusieurs catégories, avec disponibilités variables.</li>
              <li>• Smart Cash non disponible aux résidents fiscaux belges.</li>
              <li>• Indemnisation de 20 000 € à portée limitée.</li>
              <li>• Capital, rendement et liquidité non garantis.</li>
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
            Transparence : les CTA Mintos de cette page utilisent un lien affilié.
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
