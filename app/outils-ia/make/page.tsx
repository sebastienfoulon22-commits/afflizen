import Link from "next/link";

const MAKE_LINK = "https://www.make.com/";

export const metadata = {
  title:
    "Make avis 2026 : automatisation IA, workflows no-code et agents intelligents",
  description:
    "Notre avis sur Make, une plateforme d’automatisation visuelle pour connecter ses applications, automatiser des tâches, créer des workflows IA et gagner du temps sans coder.",
};

export default function MakePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
          >
            ← Retour à l’accueil
          </Link>

          <Link
            href="/outils-ia"
            className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
          >
            Voir les autres outils IA
          </Link>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-6 py-12 text-white shadow-xl md:px-12">
          <p className="mb-4 inline-flex rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
            Automatisation IA
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Make : automatiser son activité avec l’IA, sans coder
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Make est une plateforme d’automatisation visuelle qui permet de
            connecter des applications entre elles, créer des scénarios
            automatisés, traiter des données, déclencher des actions et
            construire des workflows IA sans devoir développer une application
            complète.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={MAKE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
            >
              Découvrir Make
            </a>

            <a
              href="#cas-usages"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Voir les cas d’usage
            </a>
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-300">
            Lien officiel provisoire. Le lien partenaire Afflizen sera ajouté
            dès qu’il sera disponible.
          </p>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Automatisations visuelles
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Make permet de créer des scénarios en reliant des modules entre
              eux : formulaire, email, Google Sheets, CRM, calendrier, IA,
              paiement, webhook ou outil métier.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Workflows avec IA
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              La plateforme peut intégrer des outils IA pour résumer, trier,
              classifier, reformuler, analyser ou déclencher des actions
              automatiquement.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Gain de temps
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Make est utile pour supprimer les tâches répétitives : copier des
              données, envoyer des emails, créer des fiches clients, notifier une
              équipe ou alimenter un tableau.
            </p>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Avis Afflizen
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Notre avis sur Make
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Make est un outil très intéressant pour les indépendants, les
              créateurs, les petites entreprises et les personnes qui veulent
              automatiser une partie de leur activité sans coder. Son principe
              est simple : on connecte plusieurs applications, puis on définit
              ce qui doit se passer automatiquement lorsqu’un événement arrive.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              Par exemple, lorsqu’un client remplit un formulaire, Make peut
              enregistrer les informations dans Google Sheets, envoyer un email
              de confirmation, prévenir le propriétaire sur Gmail ou Slack,
              créer une tâche dans un outil de gestion, ajouter un rendez-vous
              dans un calendrier ou envoyer les données vers un CRM.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              L’intérêt devient encore plus fort avec l’IA. Make peut servir à
              connecter un formulaire, un assistant IA, une base de données, un
              agenda, un outil vocal comme ElevenLabs ou un système de
              notification. Cela en fait une bonne brique pour construire des
              solutions concrètes : répondeur IA, qualification de demandes,
              automatisation de rendez-vous, suivi client ou génération de
              contenus.
            </p>
          </article>

          <aside className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              Pour qui ?
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <li>• Indépendants qui veulent gagner du temps</li>
              <li>• Petites entreprises avec tâches répétitives</li>
              <li>• Créateurs de contenu</li>
              <li>• Agences web ou IA</li>
              <li>• E-commerçants</li>
              <li>• Consultants et freelances</li>
              <li>• Personnes qui veulent automatiser sans coder</li>
            </ul>
          </aside>
        </section>

        <section
          id="cas-usages"
          className="mt-14 rounded-3xl bg-slate-950 p-6 text-white md:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
            Cas d’usage concrets
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold md:text-4xl">
            Ce qu’on peut automatiser avec Make
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-200">
            Make devient intéressant dès qu’une tâche revient souvent. L’idée
            n’est pas de tout automatiser n’importe comment, mais de supprimer
            les actions répétitives qui prennent du temps et qui peuvent être
            structurées.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold text-white">
                Formulaire vers email
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Dès qu’un client remplit un formulaire, Make peut envoyer un
                email automatique, créer une ligne dans Google Sheets et prévenir
                l’entreprise.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold text-white">
                Rendez-vous et agenda
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Make peut aider à transmettre une demande de rendez-vous vers un
                calendrier, un email ou un tableau de suivi.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold text-white">
                Répondeur IA
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Dans un projet vocal, Make peut relier un agent IA, une base
                d’informations, un formulaire, un agenda et des notifications.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold text-white">
                Contenu et réseaux sociaux
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Make peut automatiser une partie de la création, du classement
                ou de la diffusion de contenus.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold text-white">
                Suivi client
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Une demande entrante peut créer une fiche, une tâche, un email
                de suivi ou une notification interne.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold text-white">
                E-commerce
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Make peut connecter boutique en ligne, facturation, email,
                tableur, support client et notifications.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Exemple Afflizen
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Make dans une solution de répondeur IA
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-700">
            Pour un projet de répondeur intelligent, Make peut jouer le rôle de
            connecteur central. Il ne remplace pas forcément l’agent vocal ou la
            voix IA, mais il permet de relier les différentes briques entre elles
            et d’automatiser ce qui doit se passer après une demande.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-950">
                1. Demande client
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Un client appelle, écrit ou remplit un formulaire pour demander
                une information ou un rendez-vous.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-950">
                2. Traitement IA
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                L’IA peut analyser la demande, classer le besoin ou préparer une
                réponse structurée.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-950">
                3. Action automatique
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Make peut envoyer un email, créer une ligne dans un tableur,
                prévenir le responsable ou lancer une suite d’actions.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-950">
                4. Suivi humain
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Si la demande est complexe, l’entreprise peut reprendre la main
                et confirmer elle-même.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-2xl font-bold text-slate-950">
              Exemple pour un salon de coiffure
            </h3>

            <p className="mt-4 leading-8 text-slate-700">
              Un salon peut utiliser Make pour recevoir les demandes de
              rendez-vous, les envoyer dans un tableau, prévenir la responsable,
              envoyer une réponse automatique au client et garder une trace des
              demandes à traiter. Combiné à un agent vocal ou à une voix IA, cela
              peut devenir une base de répondeur intelligent.
            </p>
          </div>
        </section>

        <section className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Avantages de Make
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <li>• Interface visuelle plus accessible qu’un développement classique.</li>
              <li>• Très utile pour connecter plusieurs outils entre eux.</li>
              <li>• Convient aux automatisations simples comme aux workflows plus avancés.</li>
              <li>• Intéressant pour créer des solutions IA concrètes.</li>
              <li>• Permet de gagner du temps sur les tâches répétitives.</li>
              <li>• Bon potentiel pour les indépendants, agences et petites entreprises.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Points à vérifier
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <li>• Il faut bien comprendre la logique des scénarios.</li>
              <li>• Une mauvaise automatisation peut créer des erreurs en chaîne.</li>
              <li>• Les limites, opérations et tarifs doivent être vérifiés selon le plan choisi.</li>
              <li>• Les données clients doivent être traitées avec prudence.</li>
              <li>• Il faut tester chaque scénario avant de l’utiliser en production.</li>
              <li>• Le lien affilié Afflizen sera ajouté plus tard.</li>
            </ul>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Débuter
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Comment comprendre Make simplement ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Pour débuter, il faut voir Make comme une chaîne d’actions. Un
            événement déclenche le scénario, puis Make exécute plusieurs étapes
            dans l’ordre. Chaque étape peut récupérer une information, la
            transformer, l’envoyer ailleurs ou déclencher une autre action.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-950">
                Déclencheur
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Exemple : un formulaire est rempli, un email arrive ou une ligne
                est ajoutée dans un tableau.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-950">
                Traitement
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Make peut filtrer, reformater, enrichir ou envoyer les données
                vers une IA.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-950">
                Action finale
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Exemple : envoyer un email, créer une tâche, prévenir quelqu’un
                ou enregistrer une demande.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Précautions importantes
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Make est puissant, mais il faut éviter de créer des automatisations
            trop vite sans les tester. Avant de connecter un scénario à de vrais
            clients, il est préférable de vérifier chaque étape, prévoir les cas
            d’erreur, limiter les actions sensibles et conserver une validation
            humaine pour les décisions importantes.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Pour les projets qui manipulent des données personnelles, il faut
            aussi vérifier les règles applicables, limiter les données envoyées
            aux outils externes et informer clairement les utilisateurs lorsque
            des traitements automatisés sont utilisés.
          </p>
        </section>

        <section className="mt-14 rounded-3xl bg-gradient-to-br from-emerald-600 to-slate-950 p-6 text-white md:p-10">
          <h2 className="max-w-4xl text-3xl font-bold">
            Verdict Afflizen : Make est une excellente porte d’entrée vers
            l’automatisation IA
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-emerald-50">
            Make est une plateforme stratégique pour les personnes qui veulent
            automatiser une activité sans coder. Elle peut servir à connecter des
            outils existants, gagner du temps, créer des workflows IA et
            construire des solutions utiles pour des indépendants ou petites
            entreprises. Pour Afflizen, c’est une page importante car elle relie
            directement les outils IA à des usages concrets et monétisables.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={MAKE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-50"
            >
              Découvrir Make
            </a>

            <Link
              href="/outils-ia"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Voir les autres outils IA
            </Link>
          </div>

          <p className="mt-5 text-xs leading-6 text-emerald-50/80">
            Lien officiel provisoire. Le lien partenaire Afflizen sera ajouté
            après récupération du lien affilié. Les prix, limites, opérations,
            fonctionnalités et conditions doivent toujours être vérifiés sur le
            site officiel avant inscription.
          </p>
        </section>
      </section>
    </main>
  );
}