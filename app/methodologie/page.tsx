import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Méthodologie éditoriale",
  description:
    "Découvrez comment Afflizen sélectionne, analyse, compare et met à jour les plateformes présentées sur le site.",
  path: "/methodologie",
  type: "website",
});

export default function MethodologiePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-emerald-50/60">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold text-emerald-700">
            Transparence éditoriale
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Méthodologie éditoriale
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Cette page explique comment Afflizen sélectionne, documente et met à
            jour les plateformes présentées aux utilisateurs francophones.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-12 px-6 py-14 md:py-16">
        <section aria-labelledby="publisher-title">
          <h2 id="publisher-title" className="text-2xl font-bold">
            Qui publie Afflizen ?
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Afflizen est un site francophone de comparaison et d&apos;information.
            La publication est supervisée par Sébastien Foulon, responsable
            éditorial d&apos;Afflizen, et s&apos;adresse principalement aux utilisateurs
            francophones.
          </p>
          <p className="mt-3 leading-7 text-slate-700">
            L&apos;éditeur n&apos;est pas conseiller financier, fiscal ou juridique. La
            présentation du site et de son financement est disponible sur la page{" "}
            <Link
              href="/a-propos"
              className="rounded-sm font-semibold text-emerald-700 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              À propos d&apos;Afflizen
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="selection-title">
          <h2 id="selection-title" className="text-2xl font-bold">
            Comment les plateformes sont-elles sélectionnées ?
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            La sélection tient compte de l&apos;utilité pour le public francophone,
            de la disponibilité annoncée en Belgique ou en France, de la clarté
            de l&apos;offre, des frais, des fonctionnalités, de la réputation, de la
            sécurité et du support accessible.
          </p>
          <p className="mt-3 leading-7 text-slate-700">
            Un programme d&apos;affiliation ou de parrainage peut exister, mais il ne
            suffit jamais à justifier la présence d&apos;une plateforme. Une
            rémunération potentielle n&apos;est pas le seul critère de sélection.
          </p>
        </section>

        <section aria-labelledby="sources-title">
          <h2 id="sources-title" className="text-2xl font-bold">
            Quelles sources sont utilisées ?
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Afflizen privilégie le site officiel de la plateforme, sa
            documentation et son centre d&apos;aide, puis ses grilles tarifaires et
            conditions. Les publications d&apos;autorités de régulation et d&apos;autres
            informations publiques fiables peuvent compléter cette base
            lorsqu&apos;elles sont pertinentes.
          </p>
          <p className="mt-3 leading-7 text-slate-700">
            Les sources de référence affichées sur les fiches sont des liens
            officiels non rémunérés. Afflizen ne prétend pas contrôler chaque
            information quotidiennement.
          </p>
        </section>

        <section aria-labelledby="testing-title">
          <h2 id="testing-title" className="text-2xl font-bold">
            Différence entre test et analyse documentaire
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Une plateforme peut être présentée après analyse de ses documents
            officiels, sans avoir fait l&apos;objet d&apos;un test personnel. Un usage ou
            un test personnel n&apos;est revendiqué que lorsqu&apos;il a réellement eu
            lieu et peut être décrit honnêtement.
          </p>
        </section>

        <section aria-labelledby="updates-title">
          <h2 id="updates-title" className="text-2xl font-bold">
            Comment les fiches sont-elles mises à jour ?
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Chaque fiche indique une date de révision éditoriale. Des contrôles
            périodiques sont effectués et une mise à jour peut intervenir lors
            d&apos;un changement important signalé ou identifié.
          </p>
          <p className="mt-3 leading-7 text-slate-700">
            Des tarifs, conditions ou restrictions peuvent néanmoins évoluer
            entre deux révisions. Le site officiel de la plateforme reste la
            référence avant toute inscription ou décision.
          </p>
        </section>

        <section aria-labelledby="funding-title">
          <h2 id="funding-title" className="text-2xl font-bold">
            Comment Afflizen se rémunère-t-il ?
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Certaines fiches utilisent des liens affiliés ou de parrainage,
            tandis que d&apos;autres renvoient uniquement vers un lien officiel non
            rémunéré. Une commission éventuelle n&apos;entraîne pas de coût
            supplémentaire direct pour le visiteur.
          </p>
          <p className="mt-3 leading-7 text-slate-700">
            Cette rémunération ne garantit pas une recommandation positive. Les
            avantages, limites et précautions utiles restent présentés dans les
            fiches.
          </p>
        </section>

        <section aria-labelledby="countries-title">
          <h2 id="countries-title" className="text-2xl font-bold">
            Belgique, France et restrictions géographiques
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            La disponibilité des services peut varier selon le pays. Les fiches
            essaient de signaler les restrictions connues, mais chaque
            utilisateur doit vérifier son éligibilité et les conditions locales
            auprès de la plateforme ou des autorités compétentes.
          </p>
        </section>

        <section aria-labelledby="corrections-title">
          <h2 id="corrections-title" className="text-2xl font-bold">
            Corrections et contact
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Les visiteurs et les plateformes peuvent signaler une information
            obsolète, un lien cassé, une modification tarifaire, une restriction
            géographique ou une erreur factuelle depuis la page{" "}
            <Link
              href="/contact"
              className="rounded-sm font-semibold text-emerald-700 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              Contact
            </Link>
            .
          </p>
        </section>

        <section
          aria-labelledby="advice-title"
          className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8"
        >
          <h2 id="advice-title" className="text-2xl font-bold">
            Absence de conseil personnalisé
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Les contenus d&apos;Afflizen sont informatifs et ne constituent pas un
            conseil financier, fiscal, juridique ou d&apos;investissement
            personnalisé.
          </p>
        </section>
      </div>
    </main>
  );
}
