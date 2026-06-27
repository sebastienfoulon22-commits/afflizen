import Link from "next/link";

export const metadata = {
  title: "Outils IA : les meilleures solutions d’intelligence artificielle utiles",
  description:
    "Découvrez les meilleurs outils IA pour gagner du temps, créer du contenu, automatiser des tâches et développer des solutions intelligentes pour particuliers, indépendants et entreprises.",
};

const tools = [
  {
    name: "ElevenLabs",
    href: "/outils-ia/elevenlabs",
    description:
      "Une plateforme IA spécialisée dans les voix réalistes, le text-to-speech, le doublage, le clonage vocal et les agents vocaux.",
    badge: "Voix IA",
  },
  {
    name: "Make",
    href: "/outils-ia/make",
    description:
      "Une plateforme d’automatisation visuelle pour connecter ses applications, créer des workflows IA et gagner du temps sans coder.",
    badge: "Automatisation",
  },
  {
    name: "n8n",
    href: "/outils-ia/n8n",
    description:
      "Une plateforme d’automatisation avancée pour créer des workflows IA, connecter des API, gérer des webhooks et construire des scénarios plus techniques.",
    badge: "Workflows IA",
  },
  {
    name: "Gamma",
    href: "/outils-ia/gamma",
    description:
      "Un outil IA pour créer rapidement des présentations, documents, pages visuelles et supports professionnels sans partir d’une page blanche.",
    badge: "Présentations IA",
  },
];

export default function OutilsIAPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
        >
          ← Retour à l’accueil
        </Link>

        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-6 py-12 text-white shadow-xl md:px-12">
          <p className="mb-4 inline-flex rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
            Catégorie Afflizen
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Outils IA pour gagner du temps, automatiser et créer plus vite
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Cette catégorie regroupe les outils d’intelligence artificielle qui
            peuvent être réellement utiles au quotidien : création de contenu,
            voix IA, répondeurs intelligents, automatisation, productivité,
            support client et solutions pour indépendants ou petites
            entreprises.
          </p>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                {tool.badge}
              </div>

              <h2 className="text-2xl font-bold text-slate-950">
                {tool.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {tool.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
                Voir la page →
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Pourquoi ajouter une catégorie IA sur Afflizen ?
          </h2>

          <div className="mt-5 grid gap-5 text-sm leading-7 text-slate-700 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-950">
                Marché en forte demande
              </h3>
              <p className="mt-2">
                Les outils IA intéressent les créateurs, les indépendants, les
                petites entreprises et les particuliers qui veulent gagner du
                temps.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-950">
                Revenus d’affiliation possibles
              </h3>
              <p className="mt-2">
                Certains outils IA proposent des programmes partenaires, ce qui
                peut créer une nouvelle source de revenus pour Afflizen.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-950">
                Cohérent avec les solutions web
              </h3>
              <p className="mt-2">
                La catégorie peut aussi servir à montrer qu’Afflizen teste et
                recommande des solutions concrètes, pas seulement des plateformes
                financières.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-slate-950 p-6 text-white md:p-10">
          <h2 className="max-w-4xl text-3xl font-bold">
            Une catégorie utile pour les indépendants, créateurs et petites
            entreprises
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-200">
            Les outils IA ne servent pas uniquement à générer du texte. Ils
            peuvent aussi aider à automatiser une activité, créer des contenus,
            traiter des demandes clients, préparer des réponses, produire de la
            voix, relier plusieurs applications et construire des services
            intelligents plus complets.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold text-white">Voix IA</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Créer des voix off, agents vocaux, répondeurs intelligents ou
                contenus audio.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold text-white">Automatisation</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Connecter des outils, formulaires, emails, agendas, tableaux,
                CRM, webhooks et notifications.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold text-white">Workflows avancés</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Construire des scénarios plus poussés avec IA, API, conditions,
                données et validation humaine.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold text-white">Supports visuels</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Créer des présentations, documents, pages et supports
                professionnels plus rapidement.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Des outils IA complémentaires
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            ElevenLabs, Make, n8n et Gamma couvrent des besoins différents mais
            complémentaires. ElevenLabs sert à créer de la voix IA, Make permet
            de démarrer facilement avec l’automatisation, n8n va plus loin dans
            les workflows avancés, et Gamma aide à présenter clairement une idée,
            un projet ou une offre.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/outils-ia/elevenlabs"
              className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-950">ElevenLabs</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Pour créer des voix IA et imaginer des agents vocaux.
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-700">
                Voir ElevenLabs →
              </p>
            </Link>

            <Link
              href="/outils-ia/make"
              className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-950">Make</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Pour automatiser facilement des tâches entre applications.
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-700">
                Voir Make →
              </p>
            </Link>

            <Link
              href="/outils-ia/n8n"
              className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-950">n8n</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Pour créer des workflows avancés avec IA, API et webhooks.
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-700">
                Voir n8n →
              </p>
            </Link>

            <Link
              href="/outils-ia/gamma"
              className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-950">Gamma</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Pour créer des présentations et supports visuels avec l’IA.
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-700">
                Voir Gamma →
              </p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}