import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Afflizen",
  description:
    "Consultez la politique de confidentialité d’Afflizen concernant les données personnelles, cookies et services tiers.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Confidentialité
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Politique de confidentialité
        </h1>

        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-950">
              Présentation
            </h2>
            <p>
              Afflizen est un site d’information et de comparaison autour des
              services financiers, plateformes crypto, banques en ligne,
              cashback, investissement et outils web.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-950">
              Données collectées
            </h2>
            <p>
              Le site peut collecter des données techniques de navigation,
              notamment via des outils de mesure d’audience ou des services
              tiers. Cette page sera complétée lorsque les outils définitifs du
              site seront activés.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-950">
              Liens affiliés
            </h2>
            <p>
              Certains liens présents sur Afflizen peuvent être des liens
              affiliés. Cela signifie qu’Afflizen peut recevoir une commission
              si un utilisateur s’inscrit ou effectue une action après avoir
              cliqué sur un lien partenaire.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-950">
              Cookies
            </h2>
            <p>
              Des cookies ou technologies similaires pourront être utilisés pour
              améliorer l’expérience utilisateur, mesurer l’audience ou suivre
              les performances des liens partenaires.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-950">
              Contact
            </h2>
            <p>
              Pour toute demande concernant la confidentialité ou les données
              personnelles, une adresse de contact officielle sera ajoutée
              prochainement.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}