import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Bons plans, cashback et parrainages",
  description:
    "Découvrez les principales plateformes de cashback, parrainages et bons plans présentées sur Afflizen, avec leurs conditions et fiches détaillées.",
  path: "/bons-plans",
  type: "website",
});

type Deal = {
  name: string;
  category: string;
  description: string;
  use: string;
  href: string;
  badge?: string;
};

const cashbackDeals: Deal[] = [
  {
    name: "iGraal",
    category: "Cashback",
    description:
      "Une plateforme généraliste pour récupérer une partie de certains achats réalisés chez ses marchands partenaires.",
    use: "Pour comparer les marchands, les modalités de validation et accéder au site officiel non affilié.",
    href: "/cashback/igraal",
    badge: "Lien officiel",
  },
  {
    name: "Widilo",
    category: "Cashback",
    description:
      "Un service de cashback et de codes promotionnels à consulter avant un achat en ligne éligible.",
    use: "Pour étudier le catalogue et les conditions de retrait depuis le lien officiel présenté dans la fiche.",
    href: "/cashback/widilo",
    badge: "Lien officiel",
  },
  {
    name: "eBuyClub",
    category: "Cashback",
    description:
      "Une solution de cashback couvrant des achats en ligne et, selon les enseignes, des usages complémentaires.",
    use: "Pour vérifier les formes de cashback disponibles et les conditions du lien présenté.",
    href: "/cashback/ebuyclub",
    badge: "Lien affilié",
  },
  {
    name: "Poulpeo",
    category: "Cashback",
    description:
      "Une autre plateforme généraliste à mettre en regard des taux, enseignes et seuils proposés ailleurs.",
    use: "Pour comparer son fonctionnement à celui des autres services sans présumer d'une offre active.",
    href: "/cashback/poulpeo",
    badge: "Lien officiel",
  },
];

const financialReferralDeals: Deal[] = [
  {
    name: "Revolut",
    category: "Compte et paiements",
    description:
      "Une application financière internationale pour les paiements, les conversions et la gestion courante.",
    use: "Pour consulter les services, les limites et les sites officiels belge et français.",
    href: "/banques-en-ligne/revolut",
    badge: "Liens officiels",
  },
  {
    name: "Trade Republic",
    category: "Investissement",
    description:
      "Une plateforme d'investissement à examiner selon les produits accessibles, les frais et votre pays.",
    use: "Pour comprendre les services avant de consulter les sites officiels belge ou français.",
    href: "/investissement/trade-republic",
    badge: "Liens officiels",
  },
];

const cryptoReferralDeals: Deal[] = [
  {
    name: "Crypto.com",
    category: "Crypto",
    description:
      "Un écosystème crypto associant application, échange et services dont la disponibilité peut varier.",
    use: "Pour vérifier les produits accessibles et consulter le site officiel non affilié.",
    href: "/crypto/crypto-com",
    badge: "Lien officiel",
  },
  {
    name: "Coinbase",
    category: "Crypto",
    description:
      "Une plateforme d'achat et de vente de cryptoactifs avec une interface orientée grand public.",
    use: "Pour examiner les frais, les risques et consulter le site officiel non affilié.",
    href: "/crypto/coinbase",
    badge: "Lien officiel",
  },
  {
    name: "Kraken",
    category: "Crypto",
    description:
      "Une plateforme d'échange de cryptoactifs pour les visiteurs souhaitant comparer sécurité, frais et outils.",
    use: "Pour consulter les conditions actuelles du lien de parrainage et les risques associés.",
    href: "/crypto/kraken",
    badge: "Lien de parrainage",
  },
  {
    name: "SwissBorg",
    category: "Crypto",
    description:
      "Une application crypto centrée sur l'achat, la vente et la gestion d'actifs numériques.",
    use: "Pour vérifier les services, les conditions applicables et consulter le site officiel non affilié.",
    href: "/crypto/swissborg",
    badge: "Lien officiel",
  },
  {
    name: "Nexo",
    category: "Crypto",
    description:
      "Une plateforme proposant des services crypto, avec des produits Earn, Borrow et carte à distinguer du parrainage.",
    use: "Pour examiner les conditions du lien, les entités concernées et les risques propres à chaque produit.",
    href: "/crypto/nexo",
    badge: "Lien de parrainage",
  },
];

const ecommerceDeals: Deal[] = [
  {
    name: "Back Market",
    category: "Produits reconditionnés",
    description:
      "Une place de marché spécialisée dans les appareils reconditionnés, avec des vendeurs et états variés.",
    use: "Pour comprendre le service et accéder aux sites officiels belge ou français avant un achat.",
    href: "/e-commerce/back-market",
    badge: "Liens officiels",
  },
  {
    name: "Dealabs",
    category: "Communauté de bons plans",
    description:
      "Une communauté qui recense et évalue des promotions publiées par ses membres.",
    use: "Pour repérer des offres puis contrôler le vendeur, le prix et les conditions par vous-même.",
    href: "/e-commerce/dealabs",
    badge: "Lien officiel",
  },
];

const paymentDeals: Deal[] = [
  {
    name: "Curve Pay",
    category: "Regroupement de cartes",
    description:
      "Un service qui permet de réunir plusieurs cartes de paiement dans une même application.",
    use: "Pour étudier les usages en voyage, les limites et consulter le site officiel non affilié.",
    href: "/cartes-et-paiements/curve-pay",
    badge: "Lien officiel",
  },
  {
    name: "Wise",
    category: "Paiements internationaux",
    description:
      "Un service de transferts, conversions et coordonnées de compte pour des usages internationaux.",
    use: "Pour comparer les frais et les disponibilités selon votre pays et votre besoin.",
    href: "/cartes-et-paiements/wise",
    badge: "Lien officiel",
  },
  {
    name: "American Express Belgique",
    category: "Cartes et avantages",
    description:
      "Une gamme de cartes à étudier selon leurs frais, assurances et programmes d'avantages.",
    use: "Pour vérifier les conditions belges et choisir selon vos dépenses, sans supposer un gain automatique.",
    href: "/cartes-et-paiements/american-express-belgique",
    badge: "Lien officiel",
  },
];

const toolDeals: Deal[] = [
  {
    name: "ElevenLabs",
    category: "Voix et audio IA",
    description:
      "Un outil de génération vocale à découvrir selon les fonctions et limites disponibles au moment de l'essai.",
    use: "Pour évaluer les usages, les précautions et les formules présentées.",
    href: "/outils-ia/elevenlabs",
  },
  {
    name: "Make",
    category: "Automatisation",
    description:
      "Une plateforme visuelle pour relier des applications et automatiser des tâches sans tout développer.",
    use: "Pour déterminer si ses scénarios correspondent à votre niveau et à vos outils.",
    href: "/outils-ia/make",
  },
  {
    name: "n8n",
    category: "Workflows avancés",
    description:
      "Une solution d'automatisation flexible pour les profils qui souhaitent davantage de contrôle technique.",
    use: "Pour comparer son approche, ses intégrations et ses contraintes de mise en place.",
    href: "/outils-ia/n8n",
  },
  {
    name: "Gamma",
    category: "Création assistée par IA",
    description:
      "Un outil pour produire des présentations et documents à partir d'une structure assistée par IA.",
    use: "Pour vérifier si les fonctions accessibles répondent à votre besoin de création.",
    href: "/outils-ia/gamma",
  },
  {
    name: "TradingView",
    category: "Analyse des marchés",
    description:
      "Une plateforme de graphiques et de suivi des marchés dont le programme partenaire annonce un coupon de 15 $ sur un nouvel abonnement éligible, selon conditions.",
    use: "Pour vérifier le coupon, les abonnements concernés, les limites web/app et les risques liés à leur utilisation.",
    href: "/investissement/tradingview",
    badge: "Coupon 15 $ selon conditions",
  },
];

function DealCard({ deal }: { deal: Deal }) {
  return (
    <Link
      href={deal.href}
      className="group flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="text-sm font-semibold text-emerald-700">{deal.category}</p>
        {deal.badge ? (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {deal.badge}
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 text-xl font-bold text-slate-950">{deal.name}</h3>
      <p className="mt-3 leading-7 text-slate-700">{deal.description}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{deal.use}</p>
      <span className="mt-auto pt-5 text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
        Voir la fiche et les conditions
      </span>
    </Link>
  );
}

function DealGrid({ deals }: { deals: Deal[] }) {
  return (
    <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {deals.map((deal) => (
        <DealCard key={deal.name} deal={deal} />
      ))}
    </div>
  );
}

function CategoryLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center rounded-full border border-emerald-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  );
}

export default function BonsPlansPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-emerald-50/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold text-emerald-700">Bons plans Afflizen</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-5xl">
            Bons plans, cashback et parrainages
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Retrouvez les principales plateformes de cashback, les parrainages,
            les avantages d&apos;inscription et les services utiles déjà étudiés
            sur Afflizen. Chaque lien mène à une fiche détaillée pour comparer
            le fonctionnement, les limites et les conditions.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Les avantages, conditions et disponibilités peuvent évoluer.
            Consultez toujours la fiche détaillée et les conditions officielles
            avant une inscription, un achat ou une ouverture de compte.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <section aria-labelledby="resume-title">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 id="resume-title" className="text-2xl font-bold">
              En bref
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-slate-950">Pour le cashback</h3>
                <p className="mt-1 leading-7 text-slate-700">
                  Comparez iGraal, Widilo, eBuyClub et Poulpeo selon vos enseignes
                  et habitudes d&apos;achat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-950">Pour un parrainage</h3>
                <p className="mt-1 leading-7 text-slate-700">
                  Consultez la fiche de chaque service pour connaître le lien et
                  les conditions actuellement présentés.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-950">Pour les achats</h3>
                <p className="mt-1 leading-7 text-slate-700">
                  Explorez le reconditionné avec Back Market ou les offres
                  signalées par la communauté Dealabs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-950">Avant de choisir</h3>
                <p className="mt-1 leading-7 text-slate-700">
                  Vérifiez le pays de disponibilité, les frais et les conditions
                  officielles, même si une fiche mentionne un avantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="cashback-title" className="pt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-emerald-700">Économiser sur ses achats</p>
            <h2 id="cashback-title" className="mt-2 text-3xl font-bold">
              Plateformes de cashback
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Ces services peuvent reverser une partie de certains achats auprès
              de marchands partenaires. Comparez les enseignes, le suivi et les
              conditions de retrait plutôt que de vous fier à un seul taux.
            </p>
          </div>
          <DealGrid deals={cashbackDeals} />
          <div className="mt-6">
            <CategoryLink href="/cashback">Voir toutes les plateformes de cashback</CategoryLink>
          </div>
        </section>

        <section aria-labelledby="referral-title" className="pt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-emerald-700">Liens et conditions</p>
            <h2 id="referral-title" className="mt-2 text-3xl font-bold">
              Parrainages et avantages d&apos;inscription
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Une mention de parrainage ou d&apos;affiliation décrit le lien présent
              dans la fiche, pas la garantie d&apos;un bonus. Les produits financiers
              et crypto doivent d&apos;abord correspondre à votre besoin et à votre
              compréhension du risque.
            </p>
          </div>
          <DealGrid deals={financialReferralDeals} />

          <div className="mt-12 border-t border-slate-200 pt-10">
            <h3 className="text-2xl font-bold text-slate-950">
              Fiches crypto et statut des liens
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              Chaque carte dirige d’abord vers une fiche Afflizen présentant le
              statut du lien, qu’il soit affilié ou officiel, ainsi que les
              conditions, les restrictions et les risques.
            </p>

            <aside
              aria-labelledby="bons-plans-crypto-disclosure-title"
              className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-5"
            >
              <h4
                id="bons-plans-crypto-disclosure-title"
                className="font-bold text-amber-950"
              >
                Publicité et liens affiliés
              </h4>
              <p className="mt-3 text-lg font-bold leading-7 text-slate-950">
                Monnaie virtuelle, risques réels. En crypto seul le risque est
                garanti.
              </p>
              <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-800">
                Afflizen peut recevoir une rémunération lorsqu’une action
                éligible est réalisée depuis le lien présenté dans une fiche.
                Aucun bonus, rendement ou avantage n’est garanti.
              </p>
            </aside>

            <DealGrid deals={cryptoReferralDeals} />

            <p className="mt-7 max-w-3xl text-sm leading-6 text-slate-600">
              Certaines anciennes offres crypto, notamment Binance et Bitget,
              sont actuellement suspendues. Consultez la page Bonus pour
              connaître leur statut. {" "}
              <Link
                href="/bonus"
                className="font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
              >
                Voir les offres disponibles et suspendues
              </Link>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <CategoryLink href="/banques-en-ligne">Explorer les banques en ligne</CategoryLink>
            <CategoryLink href="/investissement">Explorer l&apos;investissement</CategoryLink>
            <CategoryLink href="/crypto">Explorer les plateformes crypto</CategoryLink>
          </div>
        </section>

        <section aria-labelledby="ecommerce-title" className="pt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-emerald-700">Comparer avant d&apos;acheter</p>
            <h2 id="ecommerce-title" className="mt-2 text-3xl font-bold">
              Achats et e-commerce
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Back Market aide à chercher du matériel reconditionné, tandis que
              Dealabs centralise des bons plans publiés par une communauté.
              Aucune réduction n&apos;est garantie : contrôlez toujours le vendeur,
              le prix final et les conditions de retour.
            </p>
          </div>
          <DealGrid deals={ecommerceDeals} />
          <div className="mt-6">
            <CategoryLink href="/e-commerce">Voir les plateformes e-commerce</CategoryLink>
          </div>
        </section>

        <section aria-labelledby="payments-title" className="pt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-emerald-700">Dépenses et voyage</p>
            <h2 id="payments-title" className="mt-2 text-3xl font-bold">
              Cartes et paiements
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Ces services répondent à des usages différents : regroupement de
              cartes, paiements internationaux ou programmes d&apos;avantages. Ils
              ne donnent pas tous automatiquement droit à du cashback ou à une prime.
            </p>
          </div>
          <DealGrid deals={paymentDeals} />
          <div className="mt-6">
            <CategoryLink href="/cartes-et-paiements">Comparer les cartes et paiements</CategoryLink>
          </div>
        </section>

        <section aria-labelledby="tools-title" className="pt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-emerald-700">Sélection secondaire</p>
            <h2 id="tools-title" className="mt-2 text-3xl font-bold">
              Outils et services à découvrir
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Certaines plateformes proposent une formule gratuite, une
              démonstration ou des fonctionnalités limitées selon les conditions
              du moment. Leur fiche permet d&apos;évaluer le service avant de choisir.
            </p>
          </div>
          <DealGrid deals={toolDeals} />
          <div className="mt-6">
            <CategoryLink href="/outils-ia">Découvrir les outils IA</CategoryLink>
          </div>
        </section>

        <section aria-labelledby="transparency-title" className="pt-16">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 id="transparency-title" className="text-2xl font-bold">
              Transparence et vigilance
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">
              Certaines fiches contiennent un lien affilié ou de parrainage qui
              peut générer une commission pour Afflizen, sans coût supplémentaire
              direct pour vous. Les offres et conditions évoluent : vérifiez les
              informations officielles. Une inscription à une plateforme
              financière ou crypto comporte des risques et ne doit jamais être
              motivée uniquement par un bonus éventuel.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
