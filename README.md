# Vinted - Frontend

## Description

Ce projet est la partie frontend d'un clone du site Vinted, une plateforme de vente et d'achat de vêtements d'occasion. Il fait partie d'un exercice fullstack que j'ai du réaliser lors de ma romation au Reacteur. 

## Capture d'écran 

![Capture](https://github.com/GabrielLRdP/Vinted-frontend/assets/149192169/0c96f393-5530-4cca-839a-7ababa8850e0)

## Lien

Le projet est hébergé sur Netlify. Vous pouvez y accéder en suivant ce lien : [Consulter le site](https://vinted-gab.netlify.app)

## Fonctionnalités

- **Inscription/Authentification:** Les utilisateurs peuvent créer un compte ou se connecter avec leurs identifiants existants.
- **Publication d'annonces:** Les utilisateurs peuvent publier des annonces pour vendre leurs articles.
- **Recherche et filtrage:** Les utilisateurs peuvent rechercher des articles spécifiques et filtrer les résultats en fonction de différents critères.
- **Paiement:** Intégration d'un système de paiement sécurisé pour les transactions.

## Technologies Utilisées

- **Framework:** [React.js]
- **Librairies Additionnelles:**

  - **FontAwesome:** Utilisé pour les icônes, comprenant `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-solid-svg-icons`, et `@fortawesome/react-fontawesome`.
  - **Stripe:** Utilisé pour l'intégration des paiements, incluant `@stripe/react-stripe-js` et `@stripe/stripe-js`.
  - **Axios:** Bibliothèque utilisée pour effectuer des requêtes HTTP.
  - **dotenv:** Utilisé pour charger les variables d'environnement à partir d'un fichier `.env`.
  - **js-cookie:** Utilisé pour gérer les cookies côté client.
  - **react-range:** Utilisé pour la création de composants de plage dans React.
  - **react-router-dom:** Utilisé pour la gestion des routes dans une application React.
  - **react-switch:** Utilisé pour les commutateurs basés sur React.


## Installation

1. Cloner ce repository.
2. Installer les dépendances du frontend et du backend en utilisant `yarn`.
3. Lancer le frontend et le backend avec `yarn dev`.
