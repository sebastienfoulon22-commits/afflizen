# AFFLIZEN — Workflow permanent pour créer une nouvelle fiche plateforme

Version : 2026-08-10

Ce document est la procédure de référence pour toute nouvelle fiche Afflizen.

## 1. Principe

Une fiche Afflizen combine architecture, SEO, contenu YMYL, disponibilité géographique, monétisation, règles de diffusion, tracking, surfaces transverses et tests.

Règle :
> On ne code pas d'abord pour vérifier ensuite. On vérifie d'abord, puis on code une seule fois avec le bon statut.

## 2. Brief minimal

Pour chaque plateforme :
- Nom :
- Catégorie :
- Route :
- Pays cibles :
- Lien affiliation/parrainage :
- Code éventuel :
- Lien officiel si aucun programme public :
- Particularités :
- Doublon/ancienne route éventuelle :

Si le lien affiliation/parrainage n'est pas fourni, demander à l'utilisateur s'il en possède un avant de créer la fiche.

## 3. Audit d'existence

Avant toute création :
1. Rechercher le nom dans tout le dépôt.
2. Vérifier route, alias, redirection, catégorie, recherche, sitemap, accueil, bonus et bons plans.
3. Vérifier qu'aucune ancienne page canonique n'existe.

Règles :
- `/banques-en-ligne`, jamais `/banques`.
- `/hebergement-web`, jamais `/hebergement`.
- Back Market : `/e-commerce/back-market`.
- Ne pas dupliquer le bouton global « Retour à l'accueil ».

## 4. Audit commercial avant code

### A. Validité technique
- HTTP ;
- redirections ;
- domaine final ;
- conservation du code ;
- homepage générique ou vraie invitation.

### B. Existence du programme
Vérifier sur une source officielle.

### C. Validité du lien/code
Un programme actif ne prouve pas qu'un code personnel est valide.

Si non vérifiable sans compte/app :
`NON VÉRIFIABLE SANS COMPTE/APP`.

### D. Diffusion publique
Chercher dans les conditions :
- public ;
- website ;
- blog ;
- social media ;
- commercial ;
- marketing ;
- friends/family ;
- personal use ;
- mass distribution.

Classifier :
- `AFFILIATE_PUBLIC`
- `PERSONAL_PRIVATE`
- `OFFICIAL_ONLY`
- `UNVERIFIED`
- `SUSPENDED`

### E. Géographie
Vérifier séparément Belgique, France, Luxembourg et Suisse francophone si pertinent.

## 5. Audit réglementaire / YMYL

Pour crypto, banque, investissement ou autre produit financier :
- entité contractante ;
- pays ;
- agrément pertinent ;
- produit concerné ;
- restrictions ;
- risques ;
- exigences de transparence/publicité pertinentes.

Ne jamais généraliser un agrément à tous les produits.

## 6. Décision avant modification

Codex doit établir :

| Élément | Décision |
|---|---|
| Route canonique | ... |
| Catégorie | ... |
| Type de lien | AFFILIATE_PUBLIC / PERSONAL_PRIVATE / OFFICIAL_ONLY / UNVERIFIED / SUSPENDED |
| URL publiée | ... |
| Belgique | Oui / Non / Incertain |
| France | Oui / Non / Incertain |
| Offre chiffrée | Oui / Non |
| Tracking affilié | Oui / Non |
| Avertissement spécifique | ... |
| Surfaces à mettre à jour | ... |

Si une information critique est incertaine, ne pas publier le lien commercial comme actif.

## 7. Création de la fiche

Respecter l'architecture existante :
- metadata ;
- canonical ;
- H1 unique ;
- introduction ;
- disponibilité/pays ;
- fonctionnement ;
- coûts/frais ;
- avantages ;
- limites ;
- risques ;
- informations réglementaires ;
- transparence commerciale ;
- sources ;
- FAQ si utile.

Ne jamais prétendre à un test personnel qui n'a pas eu lieu.

### CTA

Si `AFFILIATE_PUBLIC` :
- `AffiliateButton` ;
- `sponsored` ;
- `affiliate_click` ;
- transparence ;
- conditions non garanties.

Si `OFFICIAL_ONLY` :
- lien classique ;
- `noopener noreferrer` ;
- pas de `sponsored` ;
- pas d'`affiliate_click`.

Si `PERSONAL_PRIVATE` :
- ne jamais publier le lien personnel ;
- lien officiel ou aucun CTA.

Si `UNVERIFIED` :
- ne pas présenter le lien comme actif ;
- préférer le lien officiel.

Si `SUSPENDED` :
- aucun CTA commercial.

## 8. Chiffres et offres

Vérifier toute valeur :
- bonus ;
- cashback ;
- dépôt minimum ;
- rendement ;
- réduction ;
- durée ;
- validation ;
- seuil de retrait.

Toujours distinguer source, date, pays et conditions.
Ne pas figer une valeur volatile dans le H1/title si elle risque de changer.

## 9. Surfaces transverses

Après création, vérifier :
- catégorie ;
- recherche globale ;
- sitemap ;
- accueil ;
- `/bonus` ;
- `/bons-plans` ;
- compteurs ;
- registre éditorial.

Le registre de recherche `lib/siteSearchIndex.ts` sert au moteur de recherche local, mais ne pilote pas encore le sitemap, les compteurs, les cartes de catégories ni les fiches éditoriales. Chaque plateforme doit donc être répercutée dans les emplacements réellement concernés.

Dans `lib/siteSearchIndex.ts`, ajouter une entrée `searchItems` avec une URL interne existante. `name` correspond au nom public, `category` à la catégorie Afflizen, `description` reste courte, `keywords` liste seulement les requêtes utiles, `aliases` couvre les variantes fréquentes sans inventaire artificiel, et `type` vaut `platform` pour une fiche.

Un lien officiel sans avantage réel n'est pas un « bonus ».

## 10. SEO et JSON-LD

Vérifier :
- title ;
- description ;
- canonical ;
- Open Graph ;
- Twitter ;
- FAQ visible ;
- JSON-LD.

Le titre source ne doit jamais contenir `| Afflizen`, car le suffixe est ajouté par le layout. `openGraph.url` doit correspondre au canonical, avec une locale cohérente et une image sociale définie ou héritée du défaut global.

La FAQ structurée doit correspondre exactement au visible.

## 11. Registre éditorial

Créer l'entrée correspondante dans `lib/editorialRegistry.ts` avec le nom, le chemin interne exact, une date de vraie révision éditoriale et des sources officielles propres lorsque celles-ci peuvent être confirmées.

Ne jamais utiliser un lien affilié ou de parrainage comme source éditoriale. Une source doit utiliser HTTPS, appartenir au domaine officiel et ne contenir aucun identifiant de campagne, code de parrainage ou paramètre de suivi. Si aucune source propre ne peut être confirmée, laisser `sources` vide et le signaler lors de la revue.

Vérifier que le bloc éditorial apparaît exactement une fois sur la fiche. Ne mettre à jour `reviewedAt` qu'après une véritable révision du contenu ; cette date ne certifie pas à elle seule tous les tarifs, bonus ou statuts réglementaires.

## 12. Audit final des liens

Rechercher :
- ancien lien ;
- ancien code ;
- ancien domaine ;
- `AffiliateButton` ;
- `sponsored` ;
- `affiliate_click`.

Pour un lien neutralisé :
- identifiant personnel = 0 occurrence dans `app/` sauf justification ;
- aucun tracking affilié résiduel.

## 13. Tests

Toujours :
```bash
git diff --check
npm run lint
npm run build
```

Tester :
- desktop 1280 × 720 ;
- mobile 390 × 844 ;
- HTTP 200 ;
- H1 unique ;
- overflow ;
- console ;
- focus ;
- recherche ;
- liens ;
- CTA ;
- FAQ/JSON-LD ;
- régressions.

Si Tab/Entrée n'est pas fiable dans l'outil, le signaler.

Ne pas corriger les erreurs hors périmètre sans validation.

## 14. Rapport avant commit

Fournir :
- fichiers modifiés ;
- statut commercial final ;
- URL finale ;
- pays ;
- tracking ;
- surfaces mises à jour ;
- tests ;
- état Git.

Aucun commit avant validation.

## 15. Commit/déploiement

Après validation explicite :
1. relancer les contrôles critiques ;
2. commit ;
3. push `main` ;
4. vérifier Vercel ;
5. tester production ;
6. confirmer Git propre et synchronisé.

## 16. Non-régression

Ne jamais :
- réactiver automatiquement un ancien lien personnel ;
- utiliser une définition dormante comme source de vérité ;
- créer une route doublon ;
- qualifier un lien officiel comme affilié ;
- qualifier un parrainage personnel comme public sans preuve ;
- considérer HTTP 200 comme validation commerciale ;
- changer globalement les fins de ligne ;
- ajouter une dépendance sans nécessité.

## 17. Boucle cible

Au lieu de :
`créer → découvrir → corriger → resynchroniser → recorriger`

Faire :
`préflight → décider → créer → synchroniser → tester → valider → déployer`
