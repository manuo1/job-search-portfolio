# Job Search Portfolio

Portfolio personnel pour mettre en avant mes compétences et expériences, avec un focus sur la recherche d'emploi dans le développement web.

## Déploiement en ligne

Le site est disponible à l’adresse suivante : https://www.emmanuel-oudot.fr

## Fonctionnalités

- Design responsive pour ordinateurs et mobiles
- CV interactif avec fonctionnalité d’impression en PDF
- Optimisation des mots-clés pour les ATS
- Favicon personnalisée
- Déploiement sur GitHub Pages avec redirection depuis un domaine OVH

## Optimisation pour les ATS

L’impression du CV est gérée via la fonction « print » du navigateur afin de garantir que le contenu soit bien lisible et exploitable par les ATS (Applicant Tracking Systems). Une section de mots-clés non visible par l’utilisateur humain a été intégrée pour inclure des termes techniques et des compétences pertinentes. Cela permet aux ATS d’identifier correctement les qualifications, tout en laissant l’évaluation finale du CV à un lecteur humain.

## Tech Stack

- React
- React Router
- Sass
- Vite
- GitHub Pages

## Installation

   ```bash
    git clone https://github.com/manuo1/job-search-portfolio.git
    cd job-search-portfolio
    npm install
   ```

## Développement local

Lancez le projet en mode développement :
```bash
npm run dev
```

## Deployment
Le projet est configuré pour être déployé sur GitHub Pages avec le package `gh-pages`.

1. Pour déployer :
   
   ```bash
   npm run deploy
   ```

2. Redirection de domaine :
   
   Pour que le site soit accessible via un nom de domaine personnalisé (OVH ici), il faut :
   - Configurer GitHub Pages dans les paramètres du dépôt pour qu’il serve le site sur une URL donnée.
   - Mettre à jour la configuration DNS du domaine OVH afin qu’il pointe correctement vers les serveurs de GitHub Pages.
   - Vérifier que le domaine racine (ex. www.emmanuel-oudot.fr) et le sous-domaine éventuel redirigent bien vers la page d’accueil du portfolio.

## Utilisation

- Consultez le portfolio à l’adresse : https://www.emmanuel-oudot.fr
- Imprimez mon CV directement depuis le site (prêt à être exporté en PDF)
- Une page inclut une brève description des projets, de leur contexte, des technologies utilisées et de mon rôle.

## License

Ce projet est à usage strictement personnel.
Tous droits réservés à Emmanuel Oudot.
