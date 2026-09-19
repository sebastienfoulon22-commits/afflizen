import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";

const SIGNUP_URL = "https://www.gameswap.be/formulaire";
const REFERRAL_CODE = "GSBA2A62";
const card = "scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8";
const paragraph = "mt-4 text-base leading-7 text-slate-600";
const button = "inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-center font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2";
const sourceLink = "font-semibold text-emerald-700 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600";

export const metadata = createPageMetadata({
  title: "GameSwap : avis, échange de jeux en Belgique et parrainage",
  description: "Découvrez GameSwap : échanges de jeux vidéo physiques en Belgique, Points Jeu, Wallet Points, frais, livraison bpost et code personnel de parrainage.",
  path: "/e-commerce/gameswap",
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
  { title: "Créer et vérifier votre compte", text: "Renseignez vos coordonnées, votre pseudo, votre adresse et votre GSM sur le formulaire officiel. Si vous souhaitez utiliser le parrainage, saisissez le code avant de terminer l’inscription. Lisez les conditions, puis vérifiez votre adresse e-mail et votre téléphone." },
  { title: "Ajouter au moins trois jeux", text: "Les CGU demandent trois jeux dans l’inventaire pour accéder à la recherche, aux propositions et aux échanges. Le scan du code-barres facilite l’identification ; GameSwap présente aussi la reconnaissance par photo. Contrôlez le titre, la plateforme, l’édition et l’état réel avant de publier." },
  { title: "Composer et négocier un échange", text: "Choisissez un ou plusieurs jeux chez un autre membre et proposez les vôtres. La personne peut accepter, refuser ou faire une contre-proposition. Chaque côté doit apporter au moins un jeu ; l’écart de valeur peut être compensé en WP. Les jeux engagés sont réservés pendant le swap." },
  { title: "Payer les frais et expédier", text: "Après accord, chaque membre règle ses propres frais par carte via Stripe. L’étiquette bpost est fournie dans le parcours. Vérifiez les jeux, protégez les boîtiers, filmez la préparation et déposez votre colis au point prévu. Conservez la preuve de dépôt." },
  { title: "Contrôler, évaluer et finaliser", text: "Filmez l’ouverture du colis en une prise continue, testez les jeux et confirmez la réception dans Mes swaps. Signalez tout problème lors de l’évaluation, dans le délai prévu. Une fois les deux réceptions et évaluations effectuées, l’échange se finalise et les jeux et WP sont transférés." },
];
const benefits = [
  "Renouveler sa collection en échangeant des jeux que l’on possède déjà, sans devoir les revendre au préalable.",
  "Proposer plusieurs jeux contre un seul et utiliser les WP pour équilibrer des valeurs différentes.",
  "Disposer d’un parcours regroupant proposition, paiement des frais, étiquette, suivi et évaluation.",
  "Consulter un catalogue public avant de s’inscrire et garder un jeu reçu archivé, puis le remettre à l’échange plus tard.",
];
const limits = [
  "Il faut trouver un membre intéressé par l’échange proposé : un jeu au catalogue ne garantit pas un accord ni une disponibilité immédiate.",
  "Les frais sont dus par chacun et peuvent peser sur l’intérêt d’un échange de jeux de faible valeur.",
  "Trois jeux sont nécessaires pour accéder au parcours d’échange ; les WP seuls ne permettent pas d’obtenir un jeu.",
  "Le service actuel concerne la Belgique et des jeux physiques. Il ne permet pas d’encaisser le prix de sa collection.",
  "Les preuves vidéo et le délai de réclamation sont essentiels ; une indemnisation n’est jamais automatique.",
];
const faq = [
  { question: "GameSwap permet-il de vendre ses jeux ?", answer: "Non. GameSwap organise des échanges de jeux vidéo physiques entre particuliers en Belgique. Chaque partie doit proposer au moins un jeu. Les paiements portent sur les frais de service et de transport, pas sur l’achat du jeu de l’autre membre." },
  { question: "Quel code de parrainage GameSwap utiliser ?", answer: "Le code personnel d’Afflizen est GSBA2A62, à saisir dans le champ de parrainage lors de l’inscription. Selon les conditions vérifiées le 19 septembre 2026, le parrain et le filleul reçoivent chacun 25 WP après vérification du GSM du filleul, sous réserve du plafond de 2 000 WP et des règles contre les abus." },
  { question: "Les 25 WP sont-ils une réduction de 25 euros ?", answer: "Non. Les WP sont des unités internes non monétaires servant à compenser un écart de valeur entre jeux. Ils ne sont ni convertibles en euros, ni remboursables, ni utilisables pour régler les frais de transport et de service." },
  { question: "Combien coûte un échange GameSwap ?", answer: "L’inscription et l’ajout de jeux sont gratuits. Au 19 septembre 2026, chaque membre paie de 10,49 € pour un jeu envoyé à 16,49 € pour six jeux ou plus, transport et service inclus. Le montant dépend du nombre de jeux qu’il envoie ; vérifiez le total affiché avant paiement." },
  { question: "Faut-il trois jeux pour s’inscrire ?", answer: "Vous pouvez commencer par créer votre compte. Les CGU exigent ensuite un e-mail et un GSM vérifiés, ainsi qu’au moins trois jeux dans votre inventaire, pour accéder à la recherche, aux propositions et aux échanges." },
  { question: "Peut-on utiliser GameSwap depuis la France ?", answer: "Le fonctionnement vérifié concerne les particuliers en Belgique, avec une livraison bpost en point relais belge. Cette fiche ne confirme pas l’accès aux échanges depuis la France, le Luxembourg ou la Suisse. Contactez GameSwap avant toute démarche depuis un autre pays." },
  { question: "Peut-on échanger plusieurs jeux contre un seul ?", answer: "Oui. GameSwap permet de composer un échange avec plusieurs jeux d’un côté et un seul de l’autre. La plateforme calcule la compensation éventuelle en WP. Il doit toujours y avoir au moins un jeu de chaque côté." },
  { question: "Que faire si le jeu reçu est abîmé ou ne fonctionne pas ?", answer: "Les CGV prévoient 48 heures après réception pour signaler un problème. Filmez le déballage en continu avant d’ouvrir le colis et conservez les preuves. Pour une panne, une vidéo complémentaire montrant le jeu, son lancement et le problème est demandée. La décision dépend du dossier, sans remboursement automatique." },
  { question: "Afflizen est-il partenaire officiel de GameSwap ?", answer: "Non. Cette fiche présente le service à titre éditorial. Afflizen dispose uniquement d’un code personnel de parrainage et peut recevoir 25 WP lorsque le filleul remplit les conditions du programme. Il n’existe pas de partenariat commercial officiel entre Afflizen et GameSwap." },
];
const sections = [
  ["fonctionnement", "Fonctionnement"], ["inscription", "Commencer un échange"],
  ["points", "Points Jeu et WP"], ["parrainage", "Code personnel"],
  ["frais", "Frais par membre"], ["transport", "Livraison et suivi"],
  ["securite", "Évaluations et litiges"], ["confidentialite", "Données personnelles"],
  ["avis", "Notre avis"], ["faq", "Questions fréquentes"],
];

export default function GameSwapPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faq.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      }) }} />
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_340px] lg:py-14">
          <div className="min-w-0">
            <Link href="/e-commerce" className={sourceLink}>Voir la catégorie e-commerce</Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-emerald-700">Jeux physiques · Échanges entre particuliers · Belgique</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">GameSwap : échanger ses jeux vidéo physiques en Belgique</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">GameSwap permet de proposer ses jeux et de recevoir ceux d’un autre joueur. Il s’agit d’un service d’échange, pas d’une plateforme de revente classique. Les Points Jeu évaluent les titres, les Wallet Points équilibrent les échanges et les frais couvrent le transport et le service.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <AffiliateButton href={SIGNUP_URL} platform="gameswap" category="e-commerce" location="hero" className={button}>S’inscrire sur GameSwap</AffiliateButton>
              <a href="#fonctionnement" className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-6 py-3 font-semibold focus-visible:ring-2 focus-visible:ring-emerald-600">Comprendre les échanges</a>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">Code personnel à saisir : <code className="select-all font-bold text-slate-950">{REFERRAL_CODE}</code>. Il n’est pas appliqué automatiquement par le lien. Les 25 WP sont soumis aux conditions du programme ; ce ne sont pas des euros.</p>
          </div>
          <aside className="rounded-3xl bg-slate-950 p-7 text-white lg:self-start" aria-label="GameSwap en bref">
            <h2 className="text-xl font-bold">L’essentiel avant un swap</h2>
            <dl className="mt-6 space-y-5 text-sm leading-6">
              <div><dt className="text-slate-300">Service</dt><dd className="font-semibold">Échanger, sans vendre ses jeux</dd></div>
              <div><dt className="text-slate-300">Accès aux échanges</dt><dd>E-mail et GSM vérifiés + trois jeux</dd></div>
              <div><dt className="text-slate-300">Transport actuel</dt><dd>bpost · points relais en Belgique</dd></div>
              <div><dt className="text-slate-300">Frais pour un jeu envoyé</dt><dd>10,49 € par membre, selon le tarif en vigueur</dd></div>
              <div><dt className="text-slate-300">Parrainage personnel</dt><dd>25 WP pour chacun, sous conditions</dd></div>
            </dl>
          </aside>
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-8">
          <section id="fonctionnement" className={card}>
            <h2 className="text-2xl font-bold md:text-3xl">À quoi sert GameSwap ?</h2>
            <p className={paragraph}>Le principe est de faire circuler des jeux physiques entre joueurs : vous proposez ceux que vous êtes prêt à céder contre d’autres titres. GameSwap met les membres en relation, calcule les valeurs et organise le parcours d’expédition. La plateforme ne rachète pas vos jeux et ne les inspecte pas dans un entrepôt avant l’échange.</p>
            <p className={paragraph}>Le service s’adresse actuellement aux particuliers en Belgique. Les CGV prévoient des envois bpost en point relais belge ; nous ne présentons pas la France, le Luxembourg ou la Suisse comme des destinations éligibles. Malgré une ancienne mention de remise en main propre dans la politique de confidentialité, les CGU et CGV actuelles décrivent un parcours postal : ne comptez pas sur une remise directe.</p>
            <h3 className="mt-6 text-xl font-bold">Quels jeux peut-on proposer ?</h3>
            <p className={paragraph}>La FAQ cite notamment les familles PlayStation, Xbox et Nintendo, ainsi que des jeux physiques PC et une option « Autre ». Vérifiez toujours la plateforme exacte, le support, la langue et la compatibilité avec votre matériel. Un disque ne convient pas à une console dépourvue de lecteur ; un code déjà activé ou un téléchargement ne doit pas être assimilé à un jeu physique échangeable.</p>
            <p className={paragraph}>Vous devez posséder légitimement les jeux, décrire leur état et proposer des exemplaires authentiques. La photo de référence d’un titre ne prouve pas l’état de l’exemplaire d’un membre. Le <a href="https://www.gameswap.be/jeux-disponibles" target="_blank" rel="noopener noreferrer" className={sourceLink}>catalogue public GameSwap</a> aide à explorer les titres, sans garantir qu’un échange sera accepté.</p>
          </section>
          <section id="inscription" className={card}>
            <h2 className="text-2xl font-bold md:text-3xl">Comment se déroule un échange ?</h2>
            <ol className="mt-6 space-y-6">
              {steps.map((step, index) => <li key={step.title}><h3 className="text-lg font-bold">{index + 1}. {step.title}</h3><p className="mt-2 leading-7 text-slate-600">{step.text}</p></li>)}
            </ol>
            <p className={paragraph}>Après finalisation, le jeu reçu apparaît dans votre stock en statut archivé. Vous pouvez le conserver pour y jouer, puis le réactiver si vous souhaitez l’échanger à nouveau. Les évaluations et le score GS aident les membres à apprécier l’historique des échanges, sans garantir la qualité d’un futur envoi.</p>
          </section>
          <section id="points" className={card}>
            <h2 className="text-2xl font-bold md:text-3xl">Points Jeu et Wallet Points : deux rôles différents</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5"><h3 className="text-lg font-bold">PJ : la valeur du jeu</h3><p className="mt-3 leading-7 text-slate-600">Les Points Jeu sont attachés au titre. GameSwap les calcule à partir du marché de l’occasion et peut les réévaluer à la hausse ou à la baisse. Ce n’est ni le prix d’une vente ni un montant d’argent détenu sur votre compte.</p></div>
              <div className="rounded-2xl bg-emerald-50 p-5"><h3 className="text-lg font-bold">WP : équilibrer le swap</h3><p className="mt-3 leading-7 text-slate-600">Les Wallet Points servent à compenser les différences de valeur. Ils restent dans le système GameSwap, ne s’achètent pas et ne se convertissent pas en euros. Le solde est plafonné à 2 000 WP et ne peut pas devenir négatif.</p></div>
            </div>
            <p className={paragraph}>Exemple illustratif : si vous cédez un jeu évalué 450 PJ contre un jeu à 410 PJ, la différence de 40 points peut être compensée par 40 WP versés par l’autre membre. C’est le calcul affiché et accepté dans l’échange qui fait référence. Plusieurs jeux peuvent aussi être regroupés pour rapprocher les valeurs.</p>
            <p className={paragraph}>Les conditions consultées le 19 septembre 2026 prévoient 600 WP de bienvenue après vérification de l’e-mail et du GSM. Ils sont distincts des 25 WP de parrainage. Les WP ne paient pas les frais d’envoi ou de service et ne permettent jamais un échange sans au moins un jeu de chaque côté. Ils sont perdus en cas de clôture du compte selon les CGV.</p>
          </section>
          <section id="parrainage" className={card}>
            <h2 className="text-2xl font-bold md:text-3xl">Le code personnel de parrainage GameSwap</h2>
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-sm font-semibold text-emerald-800">À saisir dans « Code parrainage (optionnel) »</p>
              <code className="mt-3 block select-all break-all text-3xl font-bold tracking-wide">{REFERRAL_CODE}</code>
              <p className="mt-4 leading-7 text-emerald-950">25 WP pour le filleul et 25 WP pour le parrain, selon les conditions en vigueur. Aucun équivalent en euros ni réduction sur les frais n’est promis.</p>
            </div>
            <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-600">
              <li>Saisissez le code lors de la création du compte : le lien d’inscription ne le renseigne pas automatiquement.</li>
              <li>Vérifiez votre e-mail et votre GSM. L’article 6 bis des CGU conditionne le crédit de parrainage à la vérification du GSM du filleul ; aucun bonus n’est attribué avant celle-ci.</li>
              <li>Le bonus du filleul s’ajoute aux WP de bienvenue. Le plafond global reste de 2 000 WP par personne ; les points excédentaires sont perdus.</li>
              <li>GameSwap peut refuser ou annuler les points en cas de comptes multiples, de faux numéros ou d’abus. Les règles et montants peuvent évoluer.</li>
            </ul>
            <p className={paragraph}>Le code a été confirmé depuis le compte GameSwap d’Afflizen. Le formulaire public, la FAQ et les CGU corroborent les 25 WP et leurs conditions, vérifiés le 19 septembre 2026. Aucun délai supplémentaire chiffré de crédit n’est promis ici.</p>
            <p className="mt-5 rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-700"><strong>Transparence :</strong> ce code est un code personnel de parrainage. Afflizen peut recevoir 25 WP si vous vous inscrivez et remplissez les conditions du programme, sans surcoût lié au code. Il n’existe aucun partenariat commercial officiel entre Afflizen et GameSwap. Les frais habituels d’échange restent dus. Les CGU permettent de communiquer son code à d’autres personnes souhaitant rejoindre le service ; elles ne décrivent pas de statut d’éditeur partenaire.</p>
          </section>
          <section id="frais" className={card}>
            <h2 className="text-2xl font-bold md:text-3xl">Combien coûte GameSwap ?</h2>
            <p className={paragraph}>Créer un compte et ajouter ses jeux est gratuit. Réaliser un échange entraîne des frais pour chacun des deux membres. Le barème dépend du nombre de jeux que <strong>vous envoyez</strong>, et comprend le transport bpost en point relais belge ainsi que le service GameSwap.</p>
            <table className="mt-6 w-full text-left text-sm">
              <caption className="mb-4 text-left leading-6 text-slate-600">Tarifs consultés le 19 septembre 2026 · CGV mises à jour le 18 septembre 2026</caption>
              <thead className="bg-slate-100"><tr><th scope="col" className="p-3">Jeux envoyés par membre</th><th scope="col" className="p-3">Total payé par ce membre</th></tr></thead>
              <tbody>{fees.map(([count, price]) => <tr key={count} className="border-b border-slate-200"><th scope="row" className="p-3 font-medium">{count}</th><td className="p-3 font-semibold">{price}</td></tr>)}</tbody>
            </table>
            <p className={paragraph}>Pour un jeu contre un jeu, chacun paie donc 10,49 €, soit 20,98 € pour les deux participants au total. Pour trois jeux contre un, celui qui envoie trois jeux paie 13,49 € et l’autre 10,49 €. Ces exemples n’incluent pas l’éventuel achat de votre propre emballage. Le total présenté avant paiement et les conditions actuelles priment.</p>
            <p className={paragraph}>Les frais ne sont pas le prix du jeu reçu. Comparez leur montant à l’intérêt de l’échange pour vous, surtout pour des titres de faible valeur. Regrouper des jeux réduit le coût de service et de transport ramené à chaque jeu envoyé, mais ne garantit pas une économie face à toutes les autres solutions.</p>
            <h3 className="mt-6 text-xl font-bold">Paiement, abandon et remboursement</h3>
            <p className={paragraph}>Les CGV prévoient un paiement par carte via Stripe. Une fois qu’un membre a payé, l’autre dispose de 72 heures pour régler ; à défaut, l’échange est annulé. Le remboursement prévu déduit les frais de traitement ; l’article 11 le conditionne à l’absence d’étiquette déjà générée. Avant paiement, l’annulation est gratuite. Après paiement, les possibilités de remboursement sont limitées et dépendent du motif : lisez les CGV avant de confirmer, sans supposer un retour ou une annulation sans frais.</p>
          </section>
          <section id="transport" className={card}>
            <h2 className="text-2xl font-bold md:text-3xl">Transport, points relais et suivi</h2>
            <p className={paragraph}>Le parcours vérifié utilise bpost en Belgique. L’étiquette est générée dans le service et le numéro de suivi est accessible sur la plateforme. La FAQ décrit aussi le dépôt et le retrait en bbox bpost, selon le point choisi et les instructions reçues. Vérifiez le relais ou l’automate proposé avant de valider.</p>
            <p className={paragraph}>Les CGV annoncent un délai indicatif de 2 à 5 jours ouvrables après dépôt, soumis au transporteur. Ajoutez le temps nécessaire à l’accord entre membres, au paiement et à la préparation : ce n’est pas une promesse de livraison dans les cinq jours suivant votre inscription.</p>
            <p className={paragraph}>Testez chaque disque ou cartouche, vérifiez le contenu du boîtier et utilisez un emballage protecteur qui immobilise les jeux. Filmez la préparation jusqu’à la fermeture du colis, collez l’étiquette lisiblement et gardez le justificatif de dépôt. Vous êtes responsable du contenu et de sa préparation.</p>
            <p className={paragraph}>En cas de perte, GameSwap prévoit d’ouvrir une enquête auprès de bpost. L’indemnisation du jeu dépend notamment de celle accordée par le transporteur : sa valeur intégrale n’est pas garantie. Les CGV mentionnent jusqu’à 30 jours calendaires d’enquête, puis un délai bancaire après confirmation. Conservez les éléments demandés et contactez le support.</p>
          </section>
          <section id="securite" className={card}>
            <h2 className="text-2xl font-bold md:text-3xl">Évaluations, réception et limites de la protection</h2>
            <p className={paragraph}>La vérification de l’e-mail et du téléphone, le suivi des colis, les évaluations et le score GS structurent les échanges. Ces mécanismes ne constituent pas une expertise des jeux ni une assurance de remboursement. GameSwap n’a pas les exemplaires en main et ne garantit pas leur état.</p>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950"><h3 className="font-bold">Avant d’ouvrir le colis : lancez la vidéo</h3><p className="mt-2 leading-7">Les CGV demandent une vidéo continue, sans montage, depuis le colis fermé jusqu’à son contenu. Elles prévoient 48 heures après réception pour déclarer un problème. Sans la preuve exigée, la réclamation peut ne donner lieu à aucune indemnisation.</p></div>
            <p className={paragraph}>Testez rapidement le jeu sur le matériel adapté. Pour un jeu qui ne fonctionne pas, les CGV demandent aussi une courte vidéo continue montrant le titre, son insertion, son lancement et le problème. Déclarez l’incident à l’étape d’évaluation et conservez emballage, suivi et vidéos.</p>
            <p className={paragraph}>Un litige suspend la finalisation de l’échange et le transfert des points. L’analyse peut être assistée par une IA, mais la décision revient à l’administrateur. Une éventuelle compensation dépend des preuves, de la valeur retenue et du cas traité ; les frais de service ou de transport ne sont pas systématiquement remboursés. Le contact public est <a href="mailto:contact@gameswap.be" className={sourceLink}>contact@gameswap.be</a>.</p>
          </section>
          <section id="confidentialite" className={card}>
            <h2 className="text-2xl font-bold md:text-3xl">Quelles données sont demandées ?</h2>
            <p className={paragraph}>Le formulaire demande notamment nom, prénom, pseudo, adresse, e-mail et GSM. La localisation affichée pour visualiser les membres est présentée comme approximative ; cela ne signifie pas qu’aucune adresse précise n’est collectée pour le compte ou la livraison.</p>
            <p className={paragraph}>La politique de confidentialité décrit aussi des journaux de connexion et de sécurité. Elle annonce une conservation pouvant aller jusqu’à 24 mois après la dernière activité en cas d’inactivité, et jusqu’à 12 mois pour les journaux de sécurité, sous réserve des obligations légales. Les demandes relatives aux données passent par le contact du service.</p>
            <p className={paragraph}>Les conditions mentionnent Stripe pour les paiements et Google Gemini pour l’identification de jeux à partir de photos. Nous décrivons les informations publiées par l’opérateur, sans certifier la sécurité technique du service. Évitez d’inclure des documents personnels dans vos photos ou vidéos et consultez les règles de confidentialité avant de transmettre des éléments.</p>
          </section>
          <section id="avis" className={card}>
            <h2 className="text-2xl font-bold md:text-3xl">Notre avis : pour qui GameSwap est-il pertinent ?</h2>
            <p className={paragraph}>GameSwap peut intéresser un joueur en Belgique qui possède plusieurs jeux physiques et souhaite renouveler sa collection par l’échange. Son intérêt tient au parcours organisé et à la compensation des valeurs. Il convient moins à une personne qui veut récupérer de l’argent, ne possède qu’un seul titre ou souhaite une livraison hors de Belgique.</p>
            <h3 className="mt-6 text-xl font-bold">Les avantages</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-600">{benefits.map(text => <li key={text}>{text}</li>)}</ul>
            <h3 className="mt-6 text-xl font-bold">Les limites à intégrer</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-600">{limits.map(text => <li key={text}>{text}</li>)}</ul>
            <p className={paragraph}>Avant de vous lancer, regardez les jeux susceptibles de vous intéresser, calculez vos frais et assurez-vous de pouvoir préparer, filmer et suivre l’envoi. Les 25 WP constituent un complément éventuel ; ils ne doivent pas être la seule raison de s’inscrire. Cet avis repose sur l’analyse des pages publiques, pas sur un échange réalisé par Afflizen.</p>
            <div className="mt-6"><AffiliateButton href={SIGNUP_URL} platform="gameswap" category="e-commerce" location="avis" className={button}>Ouvrir le formulaire GameSwap</AffiliateButton></div>
            <p className="mt-3 text-sm leading-6 text-slate-600">Code personnel {REFERRAL_CODE} à saisir manuellement, selon les conditions en vigueur.</p>
          </section>
          <section id="faq" className={card}>
            <h2 className="text-2xl font-bold md:text-3xl">Questions fréquentes sur GameSwap</h2>
            <div className="mt-6 space-y-6">{faq.map(item => <div key={item.question}><h3 className="text-lg font-bold">{item.question}</h3><p className="mt-2 leading-7 text-slate-600">{item.answer}</p></div>)}</div>
          </section>
          <section className={card}>
            <h2 className="text-2xl font-bold">D’autres usages à comparer</h2>
            <p className={paragraph}>Pour acheter du matériel reconditionné, consultez <Link href="/e-commerce/back-market" className={sourceLink}>Back Market</Link>. Pour rechercher des promotions, découvrez <Link href="/e-commerce/dealabs" className={sourceLink}>Dealabs</Link>. Ces services répondent à d’autres besoins que l’échange de jeux proposé par GameSwap.</p>
          </section>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <nav className="rounded-3xl border border-slate-200 bg-white p-6" aria-label="Sommaire GameSwap">
            <h2 className="text-lg font-bold">Dans cette fiche</h2>
            <ul className="mt-4 space-y-1">{sections.map(([id, label]) => <li key={id}><a href={`#${id}`} className="inline-flex min-h-11 items-center rounded-sm py-2 font-semibold text-emerald-700 hover:underline focus-visible:ring-2 focus-visible:ring-emerald-600">{label}</a></li>)}</ul>
          </nav>
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6"><h2 className="text-lg font-bold">Un code, pas un partenariat</h2><p className="mt-3 text-sm leading-6 text-emerald-950">Le code personnel {REFERRAL_CODE} peut attribuer 25 WP à chaque partie sous conditions. Les frais restent payants et les WP ne sont pas de l’argent. Aucune affiliation professionnelle n’est revendiquée.</p></div>
        </aside>
      </div>
    </main>
  );
}
