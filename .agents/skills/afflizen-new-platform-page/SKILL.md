---
name: afflizen-new-platform-page
description: Créer ou refondre une fiche plateforme Afflizen de bout en bout. À utiliser pour toute nouvelle page de plateforme, ajout/changement de lien affiliation/parrainage, CTA commercial ou synchronisation d'une fiche. Effectue d'abord le preflight commercial, géographique, réglementaire et architectural avant toute modification.
---

# Afflizen — Nouvelle fiche plateforme

Applique `AGENTS.md` et lis `docs/AFFLIZEN_PAGE_WORKFLOW.md` avant toute modification.

## Entrées
Récupère ou déduis :
- plateforme ;
- catégorie ;
- route ;
- pays cibles ;
- lien affiliation/parrainage ;
- code éventuel ;
- contraintes.

Si aucun lien n'est fourni pour une fiche monétisable et que l'information n'est pas déjà connue, demander si l'utilisateur en possède un avant de créer la page.

## Workflow

1. **Existence**
   - rechercher route, doublons, redirections, catégorie, recherche, sitemap et surfaces transverses.

2. **Commercial**
   - vérifier programme officiel ;
   - lien/code ;
   - diffusion publique/commerciale ;
   - pays ;
   - conditions ;
   - classer : `AFFILIATE_PUBLIC`, `PERSONAL_PRIVATE`, `OFFICIAL_ONLY`, `UNVERIFIED`, `SUSPENDED`.

3. **YMYL/réglementaire**
   - pour crypto/finance : entité, pays, agrément, produit, restrictions, risques, transparence.

4. **Décision avant code**
   - route ;
   - type de lien ;
   - URL ;
   - Belgique/France ;
   - tracking oui/non ;
   - offre chiffrée oui/non ;
   - avertissements ;
   - surfaces concernées.

5. **Implémentation**
   - respecter composants/design existants ;
   - affilié public : tracking + sponsored + transparence ;
   - officiel/non vérifié/personnel privé : pas de tracking affilié ;
   - suspendu : aucun CTA commercial.

6. **Surfaces**
   - synchroniser uniquement catégorie, recherche, sitemap, accueil, bonus, bons plans, compteurs et registre éditorial si réellement nécessaires ;
   - ne pas oublier que `lib/siteSearchIndex.ts` ne pilote pas encore le sitemap, les compteurs, les cartes de catégories ni les fiches éditoriales.

7. **Contrôles contenu**
   - H1 unique ;
   - metadata/canonical/OG/Twitter ;
   - titre source sans `| Afflizen` ;
   - sources officielles propres, sans lien affilié/parrainage ni paramètre de suivi ;
   - entrée `lib/editorialRegistry.ts` avec chemin exact, vraie date de révision et bloc éditorial unique ;
   - FAQ/JSON-LD ;
   - chiffres conditionnels ;
   - pays ;
   - pas d'exagération réglementaire ;
   - pas de prétention à un test personnel non réalisé.

8. **Tests**
   - `git diff --check`
   - `npm run lint`
   - `npm run build`
   - HTTP, desktop/mobile, console, focus, liens, régressions.

9. **Rapport**
   - état Git ;
   - fichiers ;
   - décision commerciale ;
   - liens/tracking ;
   - surfaces ;
   - tests ;
   - limites.

10. **Stop avant commit**
   - ne commit/push/déploie pas avant validation explicite.

## Règles critiques

- `/banques-en-ligne`, jamais `/banques`.
- `/hebergement-web`, jamais `/hebergement`.
- Back Market canonique : `/e-commerce/back-market`.
- Ne pas dupliquer le retour accueil global.
- HTTP 200 ne prouve pas la validité commerciale.
- Un parrainage personnel privé n'est pas une affiliation publique.
- Un chiffre non vérifié ne doit pas être figé.
- Ne pas réactiver un lien suspendu sans audit.
