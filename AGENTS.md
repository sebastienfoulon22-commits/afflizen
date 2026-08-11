# AGENTS.md — Afflizen

## Mission du dépôt

Afflizen est un média financier francophone d'affiliation pour la Belgique, la France, le Luxembourg et la Suisse francophone.

Stack principale :
- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel

Avant d'écrire du code Next.js, tenir compte de la version installée du projet et consulter les guides pertinents dans `node_modules/next/dist/docs/` en cas de doute sur une API, une convention ou une dépréciation.

Le contenu financier/crypto doit rester prudent, factuel, sourcé et adapté à un contexte YMYL.

## Règle principale

Pour toute création ou modification d'une fiche plateforme, lire et appliquer :
- `docs/AFFLIZEN_PAGE_WORKFLOW.md`
- le skill `.agents/skills/afflizen-new-platform-page/SKILL.md` lorsqu'il s'agit d'ajouter une nouvelle plateforme ou de refaire une fiche.

Ne jamais créer une fiche monétisée en partant du principe qu'un lien transmis par l'utilisateur peut être publié publiquement.

## Préflight obligatoire avant toute nouvelle fiche

Avant d'écrire du code :

1. Identifier la catégorie et la route canonique.
2. Vérifier si la plateforme existe déjà dans le dépôt sous une autre route.
3. Demander ou identifier le lien affiliation/parrainage prévu.
4. Vérifier sur les sources officielles :
   - que le programme existe encore ;
   - que le lien/code est actuel ;
   - que la diffusion publique/commerciale est autorisée ;
   - les pays éligibles ;
   - les conditions importantes ;
   - les restrictions de produit.
5. Distinguer impérativement :
   - vrai programme d'affiliation professionnel ;
   - parrainage personnel ;
   - lien officiel non affilié ;
   - lien suspendu ;
   - lien non vérifiable.
6. En crypto/finance, vérifier les éléments réglementaires et territoriaux pertinents avant de rédiger le contenu promotionnel.
7. Si une condition commerciale ou réglementaire importante n'est pas vérifiable, ne pas l'inventer et ne pas la présenter comme acquise.

## Politique des liens

### Programme d'affiliation professionnel autorisé
Peut utiliser le système affilié Afflizen si les conditions sont compatibles avec une diffusion publique.

### Parrainage personnel
Ne jamais publier automatiquement un lien personnel sur Afflizen.
Vérifier explicitement si les conditions autorisent :
- site web public ;
- blog ;
- média ;
- réseau social ;
- usage commercial.

Si ce n'est pas explicitement permis ou si les conditions limitent le partage aux amis/proches/contacts personnels :
- ne pas publier le lien personnel ;
- utiliser un lien officiel non affilié si pertinent ;
- expliquer sobrement qu'Afflizen ne propose pas de parrainage public.

### Lien officiel non affilié
Utiliser un lien externe classique avec `rel="noopener noreferrer"`.
Ne pas utiliser :
- `AffiliateButton` ;
- `rel="sponsored"` ;
- `affiliate_click`.

### Lien affilié actif
Utiliser le composant de tracking déjà prévu par le projet.
Conserver :
- marquage `sponsored` ;
- événement `affiliate_click` ;
- paramètres analytiques existants.

### Lien suspendu
Aucun CTA commercial actif.
La fiche peut rester informative et indexable.

## Routes et architecture à respecter

- Banques : `/banques-en-ligne`, jamais `/banques`.
- Hébergement : `/hebergement-web`, jamais `/hebergement`.
- Back Market canonique : `/e-commerce/back-market`.
- Ne pas recréer Back Market sous `/bons-plans`.
- Le bouton global de retour à l'accueil existe déjà sur les pages internes : ne pas ajouter de doublon.
- Avant de créer une nouvelle route, rechercher les doublons et redirections existantes.

## Surfaces transverses à synchroniser

Après création ou changement de statut d'une plateforme, vérifier systématiquement si elle apparaît dans :
- la page de catégorie ;
- l'accueil ;
- `/bonus` ;
- `/bons-plans` ;
- la recherche globale ;
- le sitemap ;
- les compteurs ou sélections de cartes.

Ne modifier que les surfaces réellement concernées.

Un changement de lien/statut sur une fiche ne doit jamais laisser une ancienne offre active sur une surface transverse.

## SEO / contenu

Chaque fiche doit avoir :
- un seul H1 ;
- metadata cohérentes ;
- canonical correct ;
- Open Graph cohérent ;
- description non trompeuse ;
- contenu visible cohérent avec FAQ/JSON-LD ;
- sources officielles lorsque nécessaire.

Ne jamais écrire sans preuve :
- bonus garanti ;
- rendement garanti ;
- offre permanente ;
- disponible partout ;
- conforme FSMA ;
- approuvé par la FSMA ;
- sans risque.

Les montants, bonus, rendements, délais et seuils susceptibles d'évoluer doivent être :
- datés ou sourcés ;
- formulés comme conditionnels ;
- vérifiés avant publication.

## Crypto

Pour les fiches crypto :
- distinguer entité, produit, pays et disponibilité ;
- ne pas extrapoler un agrément à tous les produits ;
- conserver les avertissements de risque requis par l'architecture du site ;
- distinguer une fiche affiliée d'une fiche uniquement informative ou officielle ;
- ne pas réactiver une plateforme suspendue sans vérification spécifique.

## Tests obligatoires après modification

Avant de proposer un commit :
- `git diff --check`
- `npm run lint`
- `npm run build`

Attendus :
- diff check OK ;
- lint 0 erreur, 0 avertissement ;
- build OK ;
- TypeScript OK ;
- génération complète des pages.

Vérifier aussi :
- HTTP 200 des routes concernées ;
- un seul H1 ;
- aucun overflow horizontal ;
- rendu desktop et mobile ;
- absence d'erreurs console ;
- navigation clavier/focus lorsque pertinent ;
- liens externes corrects ;
- FAQ et JSON-LD cohérents ;
- régressions sur les pages voisines.

## Git et déploiement

Par défaut :
1. auditer ;
2. modifier ;
3. tester ;
4. présenter le rapport et le diff ;
5. attendre la validation de l'utilisateur ;
6. seulement ensuite commit/push/déploiement si explicitement demandé.

Ne jamais masquer une limite de test.
Ne jamais déclarer un lien commercial valide uniquement parce qu'il renvoie HTTP 200.

## Règle d'amélioration continue

Si une erreur ou un oubli se répète deux fois, proposer une mise à jour de :
- `AGENTS.md` ;
- `docs/AFFLIZEN_PAGE_WORKFLOW.md` ;
- ou du skill Afflizen concerné.

L'objectif est de transformer les corrections répétitives en règles permanentes.
