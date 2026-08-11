# AFFLIZEN — Modèle de brief pour une nouvelle plateforme

Copier et compléter :

```text
PLATEFORME :
CATÉGORIE :
ROUTE SOUHAITÉE :
PAYS CIBLES :
LIEN AFFILIATION OU PARRAINAGE :
CODE ÉVENTUEL :
SI AUCUN LIEN : utiliser le lien officiel après vérification
POINTS À METTRE EN AVANT :
CONTRAINTE PARTICULIÈRE :
```

## Prompt court Codex

Utilise le skill `$afflizen-new-platform-page`.

Effectue d'abord le preflight défini dans `AGENTS.md` et `docs/AFFLIZEN_PAGE_WORKFLOW.md` :
- doublons/route ;
- programme commercial ;
- diffusion publique ;
- lien/code ;
- Belgique/France ;
- réglementation/risques si YMYL ;
- décision Affiliate / Personal / Official / Unverified / Suspended.

Ne code qu'après cette décision.

Ensuite :
- crée la fiche ;
- synchronise uniquement les surfaces nécessaires ;
- vérifie tracking et transparence ;
- lance diff check, lint et build ;
- teste desktop/mobile et les régressions ;
- présente le rapport ;
- ne commit/push/déploie pas avant validation.
