import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";

const SIGNUP_URL = "https://www.gameswap.be/formulaire";
const REFERRAL_CODE = "GSBA2A62";
const card = "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8";
const paragraph = "mt-4 text-base leading-7 text-slate-600";
const button = "inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-center font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2";
const sourceLink = "font-semibold text-emerald-700 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600";

export const metadata = createPageMetadata({
  title: "GameSwap : avis, échange de jeux en Belgique et parrainage",
  description: "Découvrez GameSwap : échanges de jeux vidéo physiques en Belgique, Points Jeu, Wallet Points, frais, livraison bpost et code personnel de parrainage.",
  path: "/bons-plans/gameswap",
  type: "article",
});

const fees = [
  ["1 jeu", "10,49 €"],
  ["2 jeux", "12,49 €"],
  ["3 jeux", "13,49 €"],
  ["4 jeux", "14,49 €"],
  ["5 jeux", "15,49 €"],
  ["6 jeux et plus", "16,49 €"],
];

const steps = [
  {
    title: "Créer son compte et ajouter ses jeux",
    text: "Inscrivez-vous, vérifiez votre e-mail et votre GSM, puis ajoutez au moins trois jeux pour accéder aux échanges. Le scan du code-barres facilite leur identification. Précisez l’édition, la console et l’état réel de chaque exemplaire, avec des photos claires.",
  },
  {
    title: "Trouver un jeu qui vous intéresse",
    text: "Parcourez les jeux proposés par les autres membres. Vérifiez le support, la langue et la compatibilité avec votre matériel, puis sélectionnez le ou les titres souhaités. Le catalogue public permet déjà de découvrir les jeux avant de créer votre compte.",
  },
  {
    title: "Proposer et accepter un échange",
    text: "Choisissez les jeux que vous proposez en retour. L’autre membre peut accepter, refuser ou faire une contre-proposition. Les valeurs en PJ et la compensation éventuelle en WP aident à trouver un accord, y compris pour plusieurs jeux contre un seul.",
  },
  {
    title: "Expédier et confirmer la réception",
    text: "Après accord et paiement des frais, utilisez l’étiquette fournie pour envoyer votre colis. Suivez son trajet dans GameSwap, contrôlez les jeux reçus puis confirmez la réception et évaluez l’échange. Une fois finalisé, le jeu reçu rejoint votre stock en statut archivé, réactivable pour un prochain swap.",
  },
];

const benefits = [
  "Faire circuler ses jeux physiques plutôt que les laisser dans une armoire.",
  "Proposer plusieurs jeux dans un même échange.",
  "Utiliser les PJ et WP pour rapprocher des valeurs différentes.",
  "Retrouver l’étiquette, le suivi et les évaluations dans le même service.",
];
const limits = [
  "Trouver une proposition qui intéresse les deux joueurs.",
  "Prévoir les frais de service et de transport dans son budget.",
  "Disposer de jeux physiques en état de fonctionnement : les téléchargements ne sont pas concernés.",
  "Respecter les consignes d’envoi et de réception de la plateforme.",
];

const faq = [
  {
    question: "Peut-on vendre ses jeux sur GameSwap ?",
    answer: "Non. Chaque participant propose au moins un jeu en échange de ceux de l’autre membre. GameSwap ne rachète pas les jeux et ne verse pas leur prix au propriétaire.",
  },
  {
    question: "Comment fonctionnent les PJ et WP ?",
    answer: "Les PJ représentent la valeur relative des jeux. Les WP servent à compenser une différence entre les lots échangés, selon le calcul présenté lors de la proposition.",
  },
  {
    question: "Combien coûte un échange ?",
    answer: "Chaque membre paie selon le nombre de jeux qu’il envoie : de 10,49 € pour un jeu à 16,49 € pour six jeux ou plus dans le barème vérifié le 19 septembre 2026. Le total affiché avant paiement fait référence.",
  },
  {
    question: "Quel est le code de parrainage ?",
    answer: "GSBA2A62. Saisissez-le dans le champ prévu lors de l’inscription ; il n’est pas ajouté automatiquement par le lien. Les conditions du bonus figurent dans l’encadré Parrainage ci-dessus.",
  },
  {
    question: "GameSwap est-il disponible hors Belgique ?",
    answer: "Le parcours présenté concerne la Belgique. L’accès aux échanges depuis la France, le Luxembourg ou la Suisse n’est pas confirmé : renseignez-vous auprès de GameSwap si vous résidez ailleurs.",
  },
];

export default function GameSwapPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
          <Link href="/bons-plans" className={sourceLink}>Voir les bons plans</Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Jeux vidéo · Belgique
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            GameSwap : donnez une nouvelle vie à vos jeux
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Échangez vos jeux vidéo physiques avec d’autres joueurs pour renouveler votre collection.
          </p>
          <div className="mt-6">
            <AffiliateButton href={SIGNUP_URL} platform="gameswap" category="bons-plans" location="hero" className={button}>
              Découvrir GameSwap
            </AffiliateButton>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Code personnel <code className="select-all font-bold text-slate-950">{REFERRAL_CODE}</code>
            {" "}· 25 WP pour le parrain et le filleul, <a href="#parrainage" className={sourceLink}>sous conditions</a>.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-7 px-6 py-9 md:py-12">
        <section className={card}>
          <h2 className="text-2xl font-bold">GameSwap, c’est quoi ?</h2>
          <p className={paragraph}>
            Un jeu terminé peut devenir la prochaine découverte d’un autre joueur.
            GameSwap repose sur cette idée : mettre en relation des particuliers
            pour échanger leurs disques et cartouches, sans passer par un système
            classique d’achat et de revente. Vous choisissez ce que vous proposez
            et ce que vous aimeriez recevoir ; la plateforme organise le parcours.
          </p>
          <p className={paragraph}>
            Le service référence notamment des jeux PlayStation, Xbox et Nintendo.
            Pour vous faire une idée des titres, explorez le{" "}
            <a href="https://www.gameswap.be/jeux-disponibles" target="_blank" rel="noopener noreferrer" className={sourceLink}>
              catalogue public
            </a>.
            {" "}La fiche d’un jeu aide à le repérer ; les informations sur
            l’exemplaire proposé par le membre permettent ensuite d’en apprécier l’état.
          </p>
        </section>

        <section className={card}>
          <h2 className="text-2xl font-bold">Comment ça marche ?</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-slate-50 p-5">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold"><span className="sr-only">Étape {index + 1} : </span>{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={card}>
          <h2 className="text-2xl font-bold">PJ et WP : comprendre les points</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-lg font-bold">Points Jeu (PJ)</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Ils représentent la valeur relative des jeux. GameSwap les calcule
                à partir du marché de l’occasion et peut les réévaluer avec le temps.
                Ils servent de repère pour composer une proposition.
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-5">
              <h3 className="text-lg font-bold">Wallet Points (WP)</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Ils permettent d’équilibrer certaines différences de valeur entre
                les jeux proposés. Ils complètent l’échange : chaque côté doit
                toujours apporter au moins un jeu.
              </p>
            </div>
          </div>
          <p className={paragraph}>
            Par exemple, un jeu à 450 PJ échangé contre un jeu à 410 PJ peut être
            équilibré par 40 WP versés au membre qui cède le jeu le mieux valorisé.
            Le calcul est présenté avant l’accord. Les WP sont des points internes,
            non convertibles en euros ; ils ne règlent pas les frais d’envoi ou de service.
          </p>
          <p className={paragraph}>
            Les conditions vérifiées prévoient 600 WP de bienvenue après validation
            de l’e-mail et du GSM, distincts du bonus de parrainage. Le portefeuille
            est plafonné à 2 000 WP par utilisateur.
          </p>
        </section>

        <section id="parrainage" className="scroll-mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold">Parrainage GameSwap</h2>
          <p className="mt-4 font-semibold">Code personnel GameSwap :</p>
          <code className="mt-2 block select-all break-all text-3xl font-bold tracking-wide">{REFERRAL_CODE}</code>
          <p className="mt-4 text-lg font-semibold text-emerald-950">
            25 WP pour le parrain et 25 WP pour le filleul, selon les conditions GameSwap.
          </p>
          <p className="mt-3 leading-7 text-emerald-950">
            Saisissez le code à l’inscription, puis vérifiez votre GSM pour déclencher
            le bonus. Le lien ne remplit pas le champ automatiquement. Le crédit reste
            soumis au plafond du portefeuille ; les points excédentaires sont perdus.
          </p>
          <p className="mt-4 border-t border-emerald-200 pt-4 text-sm leading-6 text-emerald-950">
            Ce code est un code personnel de parrainage. Il ne s’agit pas d’un
            partenariat commercial entre Afflizen et GameSwap. Afflizen peut
            recevoir les WP du parrain lorsque les conditions sont remplies.
          </p>
        </section>

        <section className={card}>
          <h2 className="text-2xl font-bold">Frais et livraison</h2>
          <p className={paragraph}>
            L’inscription et l’ajout de jeux sont gratuits. Pour réaliser un swap,
            chaque participant paie ses propres frais de service et de transport,
            selon le nombre de jeux qu’il envoie. Le prix du jeu reçu n’est pas
            facturé entre utilisateurs.
          </p>
          <table className="mt-5 w-full text-left text-sm">
            <caption className="mb-3 text-left leading-6 text-slate-600">
              Barème vérifié le 19 septembre 2026 · service et livraison inclus
            </caption>
            <thead className="bg-slate-100">
              <tr><th scope="col" className="p-3">Jeux envoyés</th><th scope="col" className="p-3">Total par membre</th></tr>
            </thead>
            <tbody>
              {fees.map(([count, price]) => (
                <tr key={count} className="border-b border-slate-200">
                  <th scope="row" className="p-3 font-medium">{count}</th>
                  <td className="p-3 font-semibold">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={paragraph}>
            Vérifiez le montant affiché avant paiement : les tarifs peuvent évoluer.
            La livraison présentée utilise bpost en Belgique, avec étiquette et suivi
            accessibles depuis GameSwap et dépôt/retrait en point relais.
          </p>
          <p className={paragraph}>
            Emballez soigneusement les jeux. À réception, filmez l’ouverture du
            colis en continu et vérifiez son contenu : les conditions demandent
            cette preuve et prévoient 48 heures pour signaler un problème.
            Consultez les{" "}
            <a href="https://www.gameswap.be/cgv" target="_blank" rel="noopener noreferrer" className={sourceLink}>conditions officielles</a>
            {" "}pour les procédures de réclamation et de remboursement.
          </p>
        </section>

        <section className={card}>
          <h2 className="text-2xl font-bold">Points forts et points à savoir</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-5">
              <h3 className="text-lg font-bold text-emerald-900">Points forts</h3>
              <ul className="mt-3 list-disc space-y-3 pl-5 leading-7 text-slate-700">
                {benefits.map(text => <li key={text}>{text}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-lg font-bold">Points à savoir</h3>
              <ul className="mt-3 list-disc space-y-3 pl-5 leading-7 text-slate-700">
                {limits.map(text => <li key={text}>{text}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className={card}>
          <h2 className="text-2xl font-bold">L’avis Afflizen</h2>
          <p className={paragraph}>
            GameSwap propose une idée facile à comprendre : faire circuler les jeux
            que l’on a terminés pour en découvrir d’autres. Le service peut intéresser
            les joueurs qui possèdent plusieurs titres et préfèrent renouveler leur
            collection par l’échange. Le parcours réunit les étapes pratiques sans
            demander d’organiser séparément chaque envoi.
          </p>
          <p className={paragraph}>
            Le bon point de départ est de regarder les titres proposés et de réfléchir
            à ceux que vous seriez prêt à échanger. Si une proposition vous convient,
            le service offre une manière concrète de remettre votre collection en
            mouvement. Cet avis repose sur les informations publiques, sans échange
            réalisé par Afflizen.
          </p>
          <div className="mt-6">
            <AffiliateButton href={SIGNUP_URL} platform="gameswap" category="bons-plans" location="avis" className={button}>
              Aller sur GameSwap
            </AffiliateButton>
          </div>
        </section>

        <section className={card}>
          <h2 className="text-2xl font-bold">Questions fréquentes</h2>
          <div className="mt-5 divide-y divide-slate-200">
            {faq.map(item => (
              <div key={item.question} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-lg font-bold">{item.question}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
