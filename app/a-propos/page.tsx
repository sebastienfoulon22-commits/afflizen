export default function AProposPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">À propos</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            À propos d’Afflizen
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Afflizen est un média indépendant en construction qui aide les
            utilisateurs francophones à comparer des plateformes utiles dans les
            domaines de la finance, de la crypto, des banques en ligne, du
            cashback, de l’investissement et de l’hébergement web.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold">Notre objectif</h2>
            <p className="mt-4 leading-7 text-slate-600">
              L’objectif d’Afflizen est de rendre les comparaisons plus simples,
              plus claires et plus accessibles. Chaque fiche présente les
              avantages, les limites, les conditions importantes et les points à
              vérifier avant de s’inscrire sur une plateforme.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Ce que vous trouverez sur Afflizen</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Le site regroupe des fiches pratiques sur des plateformes crypto,
              des banques en ligne, des applications d’investissement, des
              services de cashback et des hébergeurs web. Afflizen met aussi en
              avant les bonus, primes, codes promo ou offres de bienvenue
              lorsqu’ils sont disponibles et vérifiables.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Transparence</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Certaines pages peuvent contenir des liens d’affiliation. Cela
              signifie qu’Afflizen peut recevoir une commission si un utilisateur
              s’inscrit ou achète via certains liens, sans coût supplémentaire
              pour lui. Cette rémunération aide à financer le développement du
              site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Important</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Les informations publiées sur Afflizen sont fournies à titre
              informatif. Elles ne constituent pas un conseil financier,
              juridique, fiscal ou en investissement. Avant toute inscription,
              il est important de vérifier les conditions officielles, les frais,
              les risques et les règles applicables dans votre pays.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}