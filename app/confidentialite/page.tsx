export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">
            Politique de confidentialité
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Politique de confidentialité
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Cette page explique comment Afflizen peut collecter, utiliser et
            protéger certaines données personnelles dans le cadre de
            l’utilisation du site.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold">Responsable du traitement</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Le responsable du traitement des données est :{" "}
              <strong>Foulon Sébastien</strong>.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Contact : <strong>contact.afflizen@gmail.com</strong>
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Adresse : <strong>Kain, Belgique</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Données collectées</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Afflizen peut collecter certaines données lorsque vous utilisez le
              site, notamment lorsque vous contactez l’éditeur par e-mail. Les
              données concernées peuvent inclure votre adresse e-mail, votre nom
              si vous le communiquez, ainsi que le contenu de votre message.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Des données techniques peuvent également être traitées par
              l’hébergeur ou par certains outils utilisés sur le site, comme
              l’adresse IP, le navigateur utilisé, le type d’appareil ou les
              pages consultées.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Utilisation des données</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Les données collectées peuvent être utilisées pour répondre aux
              demandes envoyées par e-mail, assurer le bon fonctionnement du
              site, améliorer le contenu publié et sécuriser l’accès au site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Liens d’affiliation</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Afflizen peut contenir des liens d’affiliation vers des plateformes
              partenaires. Lorsque vous cliquez sur ces liens, vous pouvez être
              redirigé vers un site tiers. Ces sites disposent de leurs propres
              politiques de confidentialité et conditions d’utilisation.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Afflizen n’est pas responsable du traitement des données effectué
              par les plateformes externes après votre redirection.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Cookies</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Le site peut utiliser des cookies ou technologies similaires pour
              assurer son fonctionnement, mesurer l’audience ou suivre certains
              liens d’affiliation. Les cookies permettent notamment de reconnaître
              une visite, de mesurer les performances du site ou d’attribuer une
              commission d’affiliation.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Si des outils de mesure d’audience, de publicité ou de suivi avancé
              sont ajoutés ultérieurement, cette politique pourra être mise à
              jour afin de préciser les outils utilisés et les choix proposés aux
              visiteurs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Durée de conservation</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Les données transmises par e-mail sont conservées pendant la durée
              nécessaire au traitement de la demande, puis peuvent être archivées
              pendant une durée raisonnable pour assurer le suivi des échanges.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Partage des données</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Afflizen ne vend pas les données personnelles des utilisateurs. Des
              données peuvent toutefois être traitées par des prestataires
              techniques nécessaires au fonctionnement du site, notamment
              l’hébergeur, les services d’e-mail ou les plateformes externes
              consultées via les liens présents sur le site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Vos droits</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Conformément aux règles applicables en matière de protection des
              données personnelles, vous pouvez demander l’accès, la rectification
              ou la suppression de vos données personnelles. Vous pouvez également
              vous opposer à certains traitements ou demander une limitation du
              traitement lorsque cela est applicable.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Pour exercer vos droits, vous pouvez écrire à :{" "}
              <strong>contact.afflizen@gmail.com</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Sécurité</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Afflizen met en œuvre des mesures raisonnables pour protéger les
              informations transmises. Toutefois, aucun système en ligne ne peut
              garantir une sécurité absolue.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Mise à jour de cette politique</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Cette politique de confidentialité peut être modifiée à tout moment
              afin de tenir compte de l’évolution du site, des outils utilisés ou
              des obligations légales applicables.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Dernière mise à jour : <strong>juin 2026</strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}