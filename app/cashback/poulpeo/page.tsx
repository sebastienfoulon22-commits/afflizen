import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

const POULPEO_OFFICIAL_LINK = "https://www.poulpeo.com/";

export const metadata = createPageMetadata({
  title: "Poulpeo avis : cashback, codes promo et réductions en ligne",
  description: "Notre présentation de Poulpeo, plateforme française de cashback, codes promo et réductions : fonctionnement, points forts, limites, conditions et précautions avant de l’utiliser.",
  path: "/cashback/poulpeo",
  type: "article",
});

const strengths = [
  "Plateforme française de cashback et de codes promo.",
  "Permet de récupérer une partie de certains achats en ligne sous forme de cashback.",
  "Propose aussi des codes promo, réductions, une application mobile et une extension navigateur.",
  "Peut compléter iGraal, Widilo et eBuyClub pour comparer les marchands et les offres disponibles.",
  "Intéressant pour les achats réguliers en ligne, surtout quand l’achat était déjà prévu.",
];

const limits = [
  "Le cashback doit généralement être activé avant l’achat pour être suivi.",
  "Le montant dépend du marchand, de l’offre et des conditions au moment de l’achat.",
  "Les codes promo et le cashback ne sont pas toujours cumulables.",
  "Le cashback peut prendre du temps à être validé, puis payé.",
  "Certaines commandes peuvent être refusées si les conditions ne sont pas respectées.",
];

const steps = [
  "Créer ou ouvrir son compte Poulpeo avant de commander.",
  "Rechercher le marchand ou le code promo disponible.",
  "Activer le cashback avant de quitter Poulpeo vers le site marchand.",
  "Finaliser l’achat sans interrompre le suivi de la commande.",
  "Attendre la validation du cashback selon les délais et conditions du marchand.",
];

const relatedLinks = [
  {
    href: "/cashback",
    title: "Comparatif cashback Afflizen",
    text: "Revenir à la catégorie cashback pour comparer les plateformes suivies.",
  },
  {
    href: "/cashback/igraal",
    title: "iGraal",
    text: "Une plateforme de cashback connue, avec codes promo et lien de parrainage Afflizen.",
  },
  {
    href: "/cashback/widilo",
    title: "Widilo",
    text: "Une autre plateforme cashback à comparer pour les marchands et conditions.",
  },
  {
    href: "/cashback/ebuyclub",
    title: "eBuyClub",
    text: "Un service cashback avec offres en ligne, en magasin et bons d’achat selon conditions.",
  },
  {
    href: "/bons-plans",
    title: "Bons plans",
    text: "Explorer les autres bons plans et offres référencés par Afflizen.",
  },
  {
    href: "/e-commerce/back-market",
    title: "Back Market",
    text: "Une fiche e-commerce utile pour comparer les achats reconditionnés en ligne.",
  },
];

const faq = [
  {
    question: "Poulpeo est-il une plateforme française de cashback ?",
    answer:
      "Oui, Poulpeo est présenté comme une plateforme française de cashback, codes promo et réductions en ligne. Elle permet de récupérer une partie de certains achats sous forme de cashback selon les marchands et conditions.",
  },
  {
    question: "Comment activer le cashback Poulpeo ?",
    answer:
      "Il faut généralement passer par Poulpeo avant l’achat, choisir le marchand, activer le cashback puis finaliser la commande sur le site marchand. Les conditions précises doivent être vérifiées avant chaque achat.",
  },
  {
    question: "Le cashback Poulpeo est-il garanti ?",
    answer:
      "Non. Le cashback peut être refusé si les conditions ne sont pas respectées, si un code promo incompatible est utilisé, si la commande est annulée ou si le suivi ne fonctionne pas correctement.",
  },
  {
    question: "Poulpeo est-il intéressant face à iGraal, Widilo et eBuyClub ?",
    answer:
      "Poulpeo peut être une alternative ou un complément utile. Le mieux est de comparer les marchands disponibles, les taux, les codes promo, les délais de validation et les seuils de paiement avant d’acheter.",
  },
  {
    question: "Le lien Poulpeo sur Afflizen est-il affilié ?",
    answer:
      "Non. Le lien utilisé sur cette page est un lien officiel français vers Poulpeo. Il n’est pas présenté comme un lien affilié, partenaire ou sponsorisé.",
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

export default function PoulpeoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Link
            href="/cashback"
            className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
          >
            Voir la catégorie cashback
          </Link>

          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700">
            Cashback & codes promo
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Poulpeo : une plateforme française pour récupérer du cashback sur
            ses achats en ligne
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Poulpeo est une plateforme française de cashback, codes promo et
            réductions. Elle permet de récupérer une partie de certains achats en
            ligne sous forme de cashback, à condition d’activer l’offre avant de
            commander et de respecter les conditions du marchand.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={POULPEO_OFFICIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Accéder au site officiel de Poulpeo
            </a>

            <Link
              href="/cashback"
              className="rounded-full border border-slate-300 px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres plateformes cashback
            </Link>
          </div>

          <div className="mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-950">
              Lien officiel français, sans affiliation pour le moment
            </p>
            <p className="mt-2 text-sm leading-6 text-amber-950">
              Le lien utilisé sur cette page renvoie vers le site officiel de
              Poulpeo. Il n’est pas présenté comme un lien affilié, partenaire,
              sponsorisé, parrainage, bonus ou offre de bienvenue.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Notre avis
          </p>
          <p className="mt-3 text-3xl font-bold text-emerald-600">
            Utile avec méthode
          </p>
          <p className="mt-3 text-slate-600">
            Une option à comparer avant des achats en ligne déjà prévus.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Usage
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            Cashback
          </p>
          <p className="mt-3 text-slate-600">
            Cashback, codes promo, réductions, application et extension selon
            disponibilité.
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
            Lien officiel français, sans parrainage Afflizen pour le moment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            À qui s’adresse Poulpeo ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Poulpeo s’adresse surtout aux personnes qui achètent régulièrement en
            ligne et veulent comparer les possibilités de cashback avant de
            commander. La plateforme peut servir d’alternative ou de complément à
            iGraal, Widilo et eBuyClub, notamment pour comparer les marchands,
            les codes promo, les taux affichés et les conditions du moment.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Le cashback doit rester une économie complémentaire sur un achat déjà
            prévu, pas une raison d’acheter plus. Les montants, délais, seuils de
            paiement et conditions peuvent évoluer.
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
            Comment fonctionne le cashback Poulpeo ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Le principe du cashback est simple, mais il demande de respecter un
            ordre précis. Il faut généralement passer par Poulpeo avant l’achat,
            activer l’offre, puis finaliser la commande chez le marchand sans
            casser le suivi. Le cashback apparaît ensuite en attente, puis peut
            être validé après confirmation du marchand.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-sm font-semibold text-emerald-600">
                  Étape {index + 1}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">
            Poulpeo est-il intéressant face à iGraal, Widilo et eBuyClub ?
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Poulpeo peut être intéressant comme outil de comparaison. Selon les
            marchands, un site de cashback peut afficher un meilleur taux, un
            code promo plus pertinent ou des conditions plus simples qu’un autre.
            L’idéal est donc de comparer Poulpeo avec iGraal, Widilo et eBuyClub
            avant les achats importants.
          </p>

          <p className="mt-5 leading-8 text-slate-200">
            Il faut toutefois rester attentif : un taux élevé ne suffit pas si
            les exclusions sont nombreuses, si le code promo annule le cashback
            ou si le délai de validation est long.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div
          id="avis"
          className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-slate-950">
            Notre avis sur Poulpeo
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Poulpeo est une plateforme utile pour optimiser des achats en ligne,
            surtout si l’on prend le réflexe de vérifier les conditions avant de
            commander. Son intérêt dépend du marchand, du taux proposé, des codes
            promo compatibles, du délai de validation et du seuil de paiement.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Notre approche reste prudente : Poulpeo peut aider à récupérer une
            petite partie de dépenses déjà prévues, mais aucun gain ne doit être
            considéré comme garanti. Les conditions officielles doivent toujours
            être vérifiées avant l’achat.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_340px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            FAQ Poulpeo
          </h2>

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
            Cette page est une présentation générale. Le cashback, les codes
            promo, les seuils de paiement, les délais, les marchands disponibles
            et les conditions peuvent évoluer. Vérifiez toujours les informations
            officielles sur Poulpeo et chez le marchand avant de finaliser un
            achat.
          </p>
        </div>
      </section>
    </main>
  );
}
