import React from "react";
import styles from "./CareerTimeline.module.scss";

export const timelineData = [
  {
    id: "housebrain",
    date: "Août 2025 — Présent",
    title: "Développeur Full Stack (Projet Réel)",
    company: "HouseBrain",
    description: [
      "Architecture Event-Driven : utilisation de Redis comme bus Inter-Process Communication (IPC) pour orchestrer les flux IoT (Bluetooth Low Energy, I2C, Série) et les workers asynchrones.",
      "Ingénierie Full-Stack : développement d'un moteur de rendu custom haute-performance sous React et d'un backend Django RESTful résilient avec API REST sécurisée.",
      "Production-ready : automatisation du déploiement atomique sur Linux, sécurisation OAuth2 / JSON Web Token (JWT) avec rotation de tokens, monitoring temps réel et tableaux de bord (dashboard) de supervision via Systemd.",
    ],
  },
  {
    id: "oc-react",
    date: "Fév. 2025 — Juil. 2025",
    title: "Formation Développeur JavaScript / React",
    company: "OpenClassrooms",
    description: [
      "Diplôme Développeur Concepteur Logiciel — Niveau 6 (Bac+3/4) — Titre RNCP. Développement d'applications React avec gestion d'état (Redux, Zustand), TypeScript et intégration d'APIs REST.",
    ],
  },
  {
    id: "eco-co2",
    date: "Jan. 2022 — Nov. 2024",
    title: "Développeur Backend & Référent d'Équipe",
    company: "Eco CO₂ / UDWI",
    description: [
      "Optimisation des performances : réduction de la latence API de 2s à moins de 500ms via l'optimisation des requêtes SQL, indexation PostgreSQL, migrations de base de données et profiling avec Django Silk.",
      "Ingénierie Big Data & ETL : conception de pipelines d'acquisition massive de données énergétiques temps réel (APIs REST Enedis/GRDF, documentation Swagger/OpenAPI) et traitement asynchrone via Celery avec gestion des erreurs et retry.",
      "Qualité & Observabilité : refactoring de la base de code, mise en place de tests de charge (Locust), monitoring industriel sur dashboards Datadog/Gatus, couverture Pytest et revues de code (Code Review) systématiques.",
      "Leadership Technique : coordination des équipes R&D et Produit d'une application SaaS B2B, animation des rituels Agile/Scrum/Kanban et pilotage de la vision technique sur une architecture microservices.",
    ],
  },
  {
    id: "eni-java",
    date: "Juin 2021 — Sept. 2021",
    title: "Formation Développeur Java",
    company: "ENI École Informatique",
    description: [
      "Acquisition des fondamentaux de la Programmation Orientée Objet (POO), principes SOLID et de l'écosystème Java.",
    ],
  },
  {
    id: "oc-python",
    date: "Avr. 2020 — Avr. 2021",
    title: "Formation Développeur Python",
    company: "OpenClassrooms",
    description: [
      "Diplôme Développeur d'application Python — Niveau 6 (Bac+3/4) — Titre RNCP. Maîtrise de Python, Django, des APIs REST et des bases de données relationnelles (PostgreSQL, MySQL).",
    ],
  },
  {
    id: "opticien",
    date: "Juin 2000 — Janv. 2020",
    title: "Directeur de magasin / Opticien",
    company: "Direction Commerciale",
    description: [
      "Management d'équipe, gestion de centre de profit et expertise en relation client.",
      "Analyse des besoins complexes et résolution de problèmes opérationnels.",
    ],
  },
];

export const portfolioUrl = "https://www.emmanuel-oudot.fr";

function TimelineItem({ date, title, company, description, isLast }) {
  return (
    <article className={`${styles.item} ${isLast ? styles.last : ""}`}>
      <div className={styles.itemHeader}>
        <span className={styles.itemTitle}>{title}</span>
        {company && <span className={styles.itemCompany}> — {company}</span>}
      </div>
      <p className={styles.itemDate}>{date}</p>
      {description?.length > 0 && (
        <ul className={styles.itemDesc}>
          {description.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      )}
    </article>
  );
}

export default function CareerTimeline() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Parcours professionnel & Formation</h2>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={item.id}
          {...item}
          isLast={index === timelineData.length - 1}
        />
      ))}
      <p className={styles.footer}>
        Détails complets et démonstrations disponibles sur mon portfolio{" "}
        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
          {portfolioUrl.replace("https://", "")}
        </a>
      </p>
    </section>
  );
}
