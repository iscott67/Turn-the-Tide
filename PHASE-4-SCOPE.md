# Phase 4 — AI Explanation Layer

## Version
3.3.10-dev

## Objective
Explain why a cocktail fits the user, the inventory and the moment, without pretending to know more than the app actually knows.

## Included
- Availability signal
- Time-of-day fit
- Seasonal fit
- Taste-profile fit
- Favourite and history signals
- Recent drinking-pattern signal
- Short narrative explanation
- Transparent fit score
- Richer explanation on both Home and Recipe Workbench

## Guardrails
The explanation uses only information already stored in the app:
- current inventory;
- enabled staples;
- local date and time;
- simple seasonal weather proxy;
- favourites;
- history;
- learned taste preferences.

It does not claim access to live weather, unopened-bottle status, freshness or household preferences unless those data exist.
