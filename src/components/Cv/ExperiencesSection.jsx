import React from "react";
import styles from "./ExperiencesSection.module.scss";

const experiences = [
  {
    title: "Développeur Backend",
    company: "Eco CO2 - UDWI",
    date: "Jan. 2022 - Nov. 2024 (3 ans)",
    points: [
      <>
        Développement de la <strong>plateforme UDWI</strong> (énergie & IoT)
        avec collecte de données capteurs
      </>,
      <>
        Intégration des <strong>API Enedis et GRDF</strong>, gestion de bases de
        données volumineuses
      </>,
      <>
        <strong>Optimisation des performances API</strong> et mise en place de
        dashboards temps réel
      </>,
      <>Référent d'équipe : coordination entre développeurs, PO et R&D</>,
      <>Technologies : Django, PostgreSQL, Celery, Redis, Sentry, Datadog</>,
    ],
  },
  {
    title: "Développeur Full-Stack",
    company: "HouseBrain - Projet Personnel",
    date: "Nov. 2024 - Présent",
    points: [
      <>
        Solution domotique complète de{" "}
        <strong>suivi de consommation électrique</strong> et pilotage de
        chauffages
      </>,
      <>
        Backend : <strong>API REST Django</strong> avec gestion temps réel des
        données capteurs
      </>,
      <>
        Frontend : <strong>Interface React responsive</strong> avec graphiques
        interactifs
      </>,
      <>
        Intégration capteurs Bluetooth, lecture <strong>compteur Linky</strong>{" "}
        via téléinformation
      </>,
      <>
        Conception de <strong>cartes électroniques sur mesure</strong> pour
        pilotage d'équipements
      </>,
    ],
  },
];

export default function ExperiencesSection() {
  return (
    <div className={styles.experiencesContainer}>
      <h2 className={styles.sectionTitle}>EXPÉRIENCES PROFESSIONNELLES</h2>

      {experiences.map((exp, index) => (
        <div key={index} className={styles.experienceItem}>
          <div className={styles.experienceHeader}>
            <div>
              <div className={styles.jobTitle}>{exp.title}</div>
              <div className={styles.company}>{exp.company}</div>
            </div>
            <div className={styles.date}>{exp.date}</div>
          </div>
          <ul className={styles.experienceDescription}>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
