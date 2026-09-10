import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

const SYNTHESIA_AFFILIATE_LINK = "https://www.synthesia.io/?via=sebastien-foulon";

export const metadata = createPageMetadata({
  title: "Synthesia avis : vidéos avec avatars IA, tarifs et limites",
  description: "Comprendre Synthesia : création de vidéos avec avatars IA, formules, crédits, droits d’image et de voix, usages professionnels et limites à vérifier.",
  path: "/outils-ia/synthesia",
  type: "article",
});

const features = [
  { title: "Du script à la vidéo", text: "Composez des scènes autour d’un texte et d’un présentateur virtuel. Cette approche peut servir à expliquer une procédure ou à préparer un support de formation." },
  { title: "Voix et versions multilingues", text: "Synthesia propose plusieurs langues et voix. L’accès au doublage, à la traduction et aux avatars varie selon la formule : vérifiez les fonctions utiles à votre projet." },
  { title: "Des supports réutilisables", text: "L’éditeur associe avatars, texte et médias. Pour une série de tutoriels, partez d’une structure commune puis relisez chaque version avant sa diffusion." },
];

const plans = [
  { name: "Basic", price: "0 USD", detail: "1 200 crédits mensuels annoncés. La formule gratuite permet d’examiner l’outil, avec des fonctions et des exports limités." },
  { name: "Starter", price: "29 USD / mois", detail: "Facturation mensuelle affichée ; 1 200 crédits par mois, téléchargement des vidéos et retrait du logo Synthesia." },
  { name: "Creator", price: "89 USD / mois", detail: "Facturation mensuelle affichée ; 3 600 crédits par mois et des fonctions supplémentaires, dont l’accès à l’API." },
  { name: "Enterprise", price: "Sur devis", detail: "Configuration, volumes et services à définir avec Synthesia selon les besoins de l’organisation." },
];

const faq = [
  { question: "Synthesia remplace-t-il le travail de rédaction ?", answer: "Non. Préparez un script exact et relisez le résultat. Un avatar convaincant ne prouve pas que les informations présentées sont correctes." },
  { question: "Peut-on utiliser un avatar dans une publicité payante ?", answer: "La politique d’usage interdit les avatars du catalogue dans les publicités payantes ou sponsorisées sur les réseaux sociaux et médias similaires sans accord écrit de Synthesia. Un avatar personnalisé nécessite le consentement approprié de la personne représentée." },
  { question: "Les crédits donnent-ils des quotas cumulables ?", answer: "Les crédits constituent un budget partagé entre les fonctions concernées. Les durées maximales présentées pour la vidéo et le doublage ne sont pas des quotas indépendants à additionner. Vérifiez le barème dans la formule choisie." },
  { question: "Le lien Afflizen donne-t-il un bonus ?", answer: "Aucun bonus, cashback ou coupon spécifique n’est annoncé sur cette fiche. Afflizen peut percevoir une rémunération si vous souscrivez par son lien affilié professionnel." },
];

const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4";
const cta = `inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-emerald-200 ${focus}`;

export default function SynthesiaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faq.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      }).replace(/</g, "\\u003c") }} />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link href="/outils-ia" className={`inline-flex min-h-11 items-center rounded-sm font-semibold text-emerald-700 ${focus}`}>← Comparatif des outils IA</Link>
        <header className="mt-5 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-6 py-10 text-white shadow-xl md:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Outils IA · Vidéo et avatars</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">Synthesia : créer des vidéos avec des avatars IA</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Synthesia transforme un script en vidéo présentée par un avatar. L’outil vise notamment la formation, les explications de produits et la communication interne, avec une validation humaine du contenu final.</p>
          <div className="mt-8"><AffiliateButton href={SYNTHESIA_AFFILIATE_LINK} platform="Synthesia" category="Outils IA" location="hero" className={cta}>Découvrir Synthesia ↗</AffiliateButton></div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">Lien affilié : Afflizen peut percevoir une rémunération si vous souscrivez via ce lien. Cette fiche est publiée par Afflizen, un média distinct de Synthesia.</p>
        </header>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8" aria-labelledby="avis">
          <h2 id="avis" className="text-2xl font-bold">À qui cet outil peut-il convenir ?</h2>
          <p className="mt-4 leading-8 text-slate-700">Pour expliquer régulièrement un logiciel ou une procédure, un présentateur virtuel peut éviter de refaire un tournage à chaque modification. Comparez toutefois le temps de préparation du script, les corrections de prononciation et la relecture avec votre méthode actuelle.</p>
          <p className="mt-3 leading-8 text-slate-700">Pour filmer un événement, montrer un geste précis ou recueillir un véritable témoignage, une prise de vue réelle reste souvent plus adaptée. Un avatar ne doit pas être présenté comme une personne ayant vécu une expérience qu’elle n’a pas vécue.</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">Analyse documentaire des sources citées, révisée le 10 septembre 2026. Afflizen ne présente pas cette fiche comme le résultat d’un test pratique.</p>
        </section>

        <section className="mt-12" aria-labelledby="fonctions">
          <h2 id="fonctions" className="text-2xl font-bold">Les fonctions à examiner</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">{features.map((feature) => (
            <article key={feature.title} className="rounded-3xl border border-slate-200 p-6"><h3 className="text-xl font-bold">{feature.title}</h3><p className="mt-3 leading-7 text-slate-600">{feature.text}</p></article>
          ))}</div>
        </section>

        <section className="mt-12" aria-labelledby="tarifs">
          <h2 id="tarifs" className="text-2xl font-bold">Tarifs et budget de création</h2>
          <p className="mt-4 leading-7 text-slate-600">Repères relevés le 10 septembre 2026 en dollars américains. Taxes, devise, options et conditions de facturation sont à vérifier avant paiement. Les formules annuelles peuvent avoir un prix et un engagement différents.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">{plans.map((plan) => (
            <article key={plan.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-bold">{plan.name}</h3><p className="mt-3 text-2xl font-bold text-emerald-800">{plan.price}</p><p className="mt-3 leading-7 text-slate-600">{plan.detail}</p></article>
          ))}</div>
          <p className="mt-4 leading-7 text-slate-600">Les crédits sont partagés entre les fonctions concernées : ne cumulez pas les durées maximales annoncées pour chaque usage. Avant de choisir, estimez votre volume de vidéos et les exports nécessaires.</p>
          <p className="mt-3 leading-7 text-slate-600">Les conditions prévoient un renouvellement automatique sauf dispositions contraires. Vérifiez le préavis de non-renouvellement, les conditions de remboursement et la conservation des contenus avant de souscrire.</p>
          <a href="https://www.synthesia.io/pricing" target="_blank" rel="noopener noreferrer" className={`mt-4 inline-flex min-h-11 items-center rounded-sm font-semibold text-emerald-700 underline underline-offset-4 ${focus}`}>Vérifier les tarifs chez Synthesia ↗</a>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2" aria-label="Précautions et disponibilité">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold">Droits, avatars et relecture</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-700">
              <li>Vérifiez les droits sur les images, musiques et scripts importés, ainsi que le consentement à utiliser une voix ou une apparence.</li>
              <li>Les avatars du catalogue ont des restrictions d’usage, notamment pour la publicité payante et certains sujets sensibles. Un abonnement ne donne pas une autorisation générale.</li>
              <li>Relisez les chiffres, noms propres, traductions et affirmations. La qualité ou l’exactitude d’un résultat IA n’est pas garantie.</li>
              <li>Avant d’importer un document confidentiel, examinez les conditions de traitement des données et les réglages du compte.</li>
              <li>Conservez vos scripts et les exports autorisés en dehors du service.</li>
            </ul>
            <a href="https://www.synthesia.io/legal/acceptable-use-policy" target="_blank" rel="noopener noreferrer" className={`mt-4 inline-flex min-h-11 items-center rounded-sm font-semibold text-emerald-800 underline underline-offset-4 ${focus}`}>Lire les règles d’usage des avatars ↗</a>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold">Pays et accès au service</h2>
            <p className="mt-4 leading-8 text-slate-700">Les langues proposées ne constituent pas une confirmation de disponibilité par pays. Afflizen ne dispose pas d’une liste officielle confirmant séparément l’accès à toutes les fonctions depuis la Belgique, la France, le Luxembourg et la Suisse.</p>
            <p className="mt-3 leading-8 text-slate-700">Vérifiez votre situation auprès de Synthesia, notamment l’inscription, les moyens de paiement et les restrictions applicables. Pour un projet professionnel, confirmez aussi les droits de diffusion prévus pour l’avatar choisi.</p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="questions">
          <h2 id="questions" className="text-2xl font-bold">Questions fréquentes</h2>
          <div className="mt-6 space-y-4">{faq.map((item) => (
            <details key={item.question} className="rounded-2xl border border-slate-200 p-5"><summary className={`cursor-pointer rounded-sm font-semibold ${focus}`}>{item.question}</summary><p className="mt-4 leading-7 text-slate-600">{item.answer}</p></details>
          ))}</div>
        </section>

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white md:p-8" aria-labelledby="decouvrir">
          <h2 id="decouvrir" className="text-2xl font-bold">Examiner Synthesia pour votre projet</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">Préparez un court script représentatif de votre usage, puis évaluez le rendu, les droits de diffusion et le coût de la formule nécessaire.</p>
          <AffiliateButton href={SYNTHESIA_AFFILIATE_LINK} platform="Synthesia" category="Outils IA" location="bottom" className={`mt-6 ${cta}`}>Voir Synthesia et ses formules ↗</AffiliateButton>
          <p className="mt-3 text-sm text-slate-300">Lien affilié professionnel, sans bonus Afflizen annoncé.</p>
        </section>
        <nav aria-label="Autres outils IA" className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/outils-ia/elevenlabs" className={`inline-flex min-h-11 items-center rounded-sm font-semibold text-emerald-700 ${focus}`}>ElevenLabs : voix et audio IA →</Link>
          <Link href="/outils-ia/gamma" className={`inline-flex min-h-11 items-center rounded-sm font-semibold text-emerald-700 ${focus}`}>Gamma : présentations IA →</Link>
        </nav>
      </div>
    </main>
  );
}
