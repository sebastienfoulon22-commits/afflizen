# Ajouter une plateforme Afflizen

Ce document décrit la procédure à suivre avant de publier une nouvelle fiche de plateforme sur Afflizen.

Le registre de recherche situé dans `lib/siteSearchIndex.ts` n'est pas encore la source unique du sitemap, du compteur de plateformes ou des cartes des catégories. Chaque ajout doit donc être répercuté dans tous les emplacements concernés.

## Checklist obligatoire

1. Demander au propriétaire du site s'il possède déjà un lien affilié ou de parrainage.
2. Si aucun lien affilié n'existe, utiliser un lien officiel adapté à la cible francophone.
3. Créer la fiche dans la bonne catégorie.
4. Ajouter un titre SEO unique.
5. Ajouter une description.
6. Ajouter le canonical exact.
7. Ajouter Open Graph.
8. Ajouter la mention d'affiliation ou de lien officiel.
9. Ajouter l'avertissement de risque si nécessaire.
10. Ajouter la fiche à sa page catégorie.
11. Ajouter la fiche au registre de recherche.
12. Ajouter les alias et mots-clés utiles.
13. Ajouter l'URL au sitemap.
14. Vérifier le compteur de plateformes.
15. Vérifier les liens internes.
16. Vérifier qu'aucune autre route identique n'existe.
17. Vérifier la disponibilité Belgique et France pour les services financiers ou crypto.
18. Créer l'entrée correspondante dans `lib/editorialRegistry.ts`.
19. Ajouter le chemin interne exact et la date de véritable révision éditoriale.
20. Ajouter au moins une source officielle propre lorsque celle-ci peut être confirmée.
21. Ne jamais utiliser un lien affilié ou de parrainage comme source éditoriale.
22. Vérifier que la source ne contient aucun identifiant de campagne ou paramètre de suivi.
23. Vérifier que le bloc éditorial apparaît exactement une fois sur la fiche.
24. Ne mettre à jour la date qu'après une véritable révision du contenu.
25. Ne jamais prétendre à un test personnel qui n'a pas eu lieu.
26. Lancer le build.
27. Lancer le lint.
28. Vérifier la page sur mobile et ordinateur.
29. Ne committer et déployer qu'après validation.

## Ajouter l'entrée au registre de recherche

Le registre se trouve dans `lib/siteSearchIndex.ts`. Chaque plateforme doit être ajoutée dans `searchItems` avec une URL interne réelle.

Exemple :

```ts
{
  name: "Kraken",
  url: "/crypto/kraken",
  category: "Crypto",
  description: "Exchange de cryptomonnaies reconnu pour acheter, vendre et gérer ses cryptos.",
  keywords: ["crypto", "bitcoin", "exchange crypto", "trading"],
  aliases: ["Kraken Exchange"],
  type: "platform",
}
```

Règles à respecter :

- `name` doit correspondre au nom public de la plateforme.
- `url` doit être une route interne existante, jamais un lien externe.
- `category` doit reprendre la catégorie Afflizen concernée.
- `description` doit rester courte pour l'affichage des résultats.
- `keywords` doit contenir seulement les requêtes utiles : métier, usage, catégorie, terme courant.
- `aliases` doit contenir les variantes fréquentes d'écriture, pas une liste exhaustive artificielle.
- `type` vaut `"platform"` pour une fiche et `"category"` pour une page catégorie ou `/bons-plans`.

## Ajouter les métadonnées SEO et sociales

Le titre source de la fiche ne doit jamais contenir `| Afflizen`. Le suffixe est ajouté automatiquement par le layout.

Pour chaque nouvelle fiche, vérifier que les métadonnées incluent :

- un titre spécifique à la plateforme ;
- une description spécifique ;
- un canonical exact ;
- un `openGraph.url` identique au canonical ;
- un Open Graph spécifique à la fiche ;
- un Twitter spécifique à la fiche ;
- une locale Open Graph cohérente ;
- une image sociale définie ou héritée du défaut global.

## Ajouter l'entrée au registre éditorial

Le registre `lib/editorialRegistry.ts` détermine les fiches qui affichent le
bloc de crédibilité éditoriale. Chaque nouvelle plateforme doit posséder une
entrée avec son nom, sa route exacte, sa date de révision propre et ses sources
officielles de référence.

Exemple complet :

```ts
{
  name: "Kraken",
  path: "/crypto/kraken",
  reviewedAt: "2026-08-04",
  sources: [
    {
      label: "Site officiel de Kraken",
      url: "https://www.kraken.com/fr",
    },
  ],
}
```

La source doit utiliser HTTPS, appartenir au domaine officiel et répondre sans
paramètre affilié, code de parrainage ou identifiant de campagne. Ne jamais
reprendre directement le bouton d'inscription rémunéré de la fiche. Si aucune
source propre ne peut être confirmée, laisser `sources` vide et le signaler lors
de la revue.

La valeur `reviewedAt` correspond à une révision éditoriale réelle. Elle ne
certifie pas que tous les tarifs, bonus ou statuts réglementaires ont été
vérifiés à cette date.

## Contrôles après ajout

Après modification, vérifier au minimum :

- la nouvelle route dans le navigateur ;
- la présence de la fiche dans sa page catégorie ;
- la présence de la fiche dans `lib/siteSearchIndex.ts` ;
- la présence de la route dans `app/sitemap.ts` ;
- la présence de l'entrée dans `lib/editorialRegistry.ts` ;
- l'affichage unique du bloc éditorial et de sa date de révision ;
- l'absence de paramètres affiliés dans les sources officielles ;
- le compteur de plateformes affiché sur l'accueil ;
- l'absence de doublon de route ou de nom ;
- le résultat de recherche avec le nom exact, les alias et les mots-clés ;
- le build de production ;
- le lint, sans corriger des erreurs hors périmètre.

## Statut du registre

Le registre de recherche sert uniquement au moteur de recherche local. Il ne pilote pas encore :

- le sitemap ;
- le compteur de plateformes ;
- les cartes des pages catégories ;
- les fiches éditoriales.

Une future évolution pourra transformer ce registre en source unique, mais ce n'est pas le cas actuellement.
