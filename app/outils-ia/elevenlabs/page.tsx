import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outils IA : voix, automatisation, workflows et présentations",
  description:
    "Découvrez les meilleurs outils IA pour gagner du temps, créer du contenu, automatiser des tâches, générer de la voix, créer des présentations et développer des solutions intelligentes.",
  alternates: {
    canonical: "https://afflizen.com/outils-ia/elevenlabs",
  },
  openGraph: {
    title: "Outils IA : voix, automatisation, workflows et présentations",
    description:
      "Découvrez les meilleurs outils IA pour gagner du temps, créer du contenu, automatiser des tâches, générer de la voix, créer des présentations et développer des solutions intelligentes.",
    url: "https://afflizen.com/outils-ia/elevenlabs",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "website",
  },
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

const useCases = [
  {
    title: "Créer une voix IA ou un répondeur intelligent",
    description:
      "ElevenLabs est l’outil à regarder en priorité pour la voix IA, les agents vocaux, les messages audio et les expériences vocales plus naturelles.",
    href: "/outils-ia/elevenlabs",
    cta: "Voir ElevenLabs",
  },
  {
    title: "Automatiser des tâches simples sans coder",
    description:
      "Make convient bien pour connecter des formulaires, emails, calendriers, Google Sheets, CRM, notifications et outils IA dans des scénarios visuels.",
    href: "/outils-ia/make",
    cta: "Voir Make",
  },
  {
    title: "Créer des workflows IA plus avancés",
    description:
      "n8n est plus technique, mais aussi plus flexible pour les API, webhooks, conditions, agents IA, données et automatisations complexes.",
    href: "/outils-ia/n8n",
    cta: "Voir n8n",
  },
  {
    title: "Créer une présentation ou un support client",
    description:
      "Gamma aide à transformer une idée en présentation, document ou page visuelle, utile pour préparer un support professionnel rapidement.",
    href: "/outils-ia/gamma",
    cta: "Voir Gamma",
  },
];

const comparisonCards = [
  {
    title: "ElevenLabs + Make",
    description:
      "Un bon duo pour imaginer un répondeur IA ou un système automatisé : ElevenLabs pour la voix, Make pour relier les outils et déclencher les actions.",
    links: [
      {
        label: "ElevenLabs",
        href: "/outils-ia/elevenlabs",
      },
      {
        label: "Make",
        href: "/outils-ia/make",
      },
    ],
  },
  {
    title: "Make + n8n",
    description:
      "Make est plus simple pour démarrer. n8n devient intéressant quand les scénarios demandent plus de logique, d’API, de contrôle ou d’hébergement.",
    links: [
      {
        label: "Make",
        href: "/outils-ia/make",
      },
      {
        label: "n8n",
        href: "/outils-ia/n8n",
      },
    ],
  },
  {
    title: "Gamma + outils d’automatisation",
    description:
      "Gamma peut servir à créer les supports. Make ou n8n peuvent ensuite aider à organiser la diffusion, le suivi client ou les tâches répétitives.",
    links: [
      {
        label: "Gamma",
        href: "/outils-ia/gamma",
      },
      {
        label: "Make",
        href: "/outils-ia/make",
      },
      {
        label: "n8n",
        href: "/outils-ia/n8n",
      },
    ],
  },
];

export default function OutilsIAPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-10">
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

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/outils-ia/elevenlabs"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50"
            >
              Voix IA
            </Link>

            <Link
              href="/outils-ia/make"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-300"
            >
              Automatisation
            </Link>

            <Link
              href="/outils-ia/n8n"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-300"
            >
              Workflows avancés
            </Link>

            <Link
              href="/outils-ia/gamma"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-300"
            >
              Présentations IA
            </Link>
          </div>
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
            Quel outil IA choisir selon votre besoin ?
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            Tous les outils IA ne servent pas au même usage. Certains sont faits
            pour créer de la voix, d’autres pour automatiser une activité,
            connecter des applications, créer des workflows avancés ou préparer
            rapidement des supports visuels.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {useCases.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-emerald-700">
                  {item.cta} →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Pourquoi ajouter une catégorie IA sur Afflizen ?
          </h2>

          <div className="mt-5 grid gap-5 text-sm leading-7 text-slate-700 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-950">
                Marché en forte demande
              </h3>
              <p className="mt-2">
                Les outils IA intéressent les créateurs, les indépendants, les
                petites entreprises et les particuliers qui veulent gagner du
                temps.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-950">
                Revenus d’affiliation possibles
              </h3>
              <p className="mt-2">
                Certains outils IA proposent des programmes partenaires, ce qui
                peut créer une nouvelle source de revenus pour Afflizen.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm">
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
            <Link
              href="/outils-ia/elevenlabs"
              className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
            >
              <h3 className="font-bold text-white">Voix IA</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Créer des voix off, agents vocaux, répondeurs intelligents ou
                contenus audio.
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-300">
                ElevenLabs →
              </p>
            </Link>

            <Link
              href="/outils-ia/make"
              className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
            >
              <h3 className="font-bold text-white">Automatisation</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Connecter des outils, formulaires, emails, agendas, tableaux,
                CRM, webhooks et notifications.
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-300">
                Make →
              </p>
            </Link>

            <Link
              href="/outils-ia/n8n"
              className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
            >
              <h3 className="font-bold text-white">Workflows avancés</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Construire des scénarios plus poussés avec IA, API, conditions,
                données et validation humaine.
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-300">
                n8n →
              </p>
            </Link>

            <Link
              href="/outils-ia/gamma"
              className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
            >
              <h3 className="font-bold text-white">Supports visuels</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Créer des présentations, documents, pages et supports
                professionnels plus rapidement.
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-300">
                Gamma →
              </p>
            </Link>
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

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {comparisonCards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-slate-950">{item.title}</h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Toutes les pages Outils IA
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            Chaque page Afflizen détaille un outil, ses cas d’usage, ses limites
            et sa place dans une stratégie simple pour gagner du temps ou créer
            des solutions plus efficaces.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {tool.badge}
                </p>

                <h3 className="mt-2 font-bold text-slate-950">{tool.name}</h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {tool.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-emerald-700">
                  Lire la page →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}