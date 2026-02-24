import React from "react";
import styles from "./CareerTimelineSection.module.scss";

const timeline = [
  {
    date: "Août 2025 - Présent",
    title: "Développeur Full Stack (Projet Réel)",
    company: "HouseBrain",
    description: [
      "Architecture Event-Driven : Utilisation de Redis comme bus IPC pour orchestrer les flux IoT (BLE, I2C, Série) et les workers.",
      "Ingénierie Full-Stack : Développement d'un moteur de rendu custom haute-performance sous React et d'un backend Django résilient.",
      "Production-ready : Automatisation du déploiement atomique sur Linux, sécurisation JWT (rotation de tokens) et monitoring proactif via Systemd.",
    ],
  },
  {
    date: "Fév. 2025 - Juil. 2025",
    title: "Formation Développeur JavaScript / React",
    company: "OpenClassrooms",
    description: [
      "Diplôme Développeur Concepteur Logiciel - Niveau 6 (Bac+3/4) - Titre RNCP.",
    ],
  },
  {
    date: "Jan. 2022 - Nov. 2024",
    title: "Développeur Backend & Référent d'Équipe",
    company: "Eco CO₂ / UDWI",
    description: [
      "Optimisation des performances : Réduction de la latence API de 2s à <500ms via l'optimisation des requêtes SQL et du profiling (Django Silk).",
      "Ingénierie Big Data : Conception de pipelines d'acquisition massive de données énergétiques (APIs Enedis/GRDF) et traitement via Celery.",
      "Qualité & Observabilité : Mise en place de tests de charge (Locust), monitoring industriel (Datadog, Gatus) et généralisation de Pytest.",
      "Leadership Technique : Coordination entre équipes R&D et Produit, animation des rituels Agile et pilotage de la vision technique.",
    ],
  },
  {
    date: "Juin 2021 - Sept. 2021",
    title: "Formation Développeur Java",
    company: "ENI École Informatique",
    description: [
      "Acquisition des fondamentaux de la Programmation Orientée Objet (POO) et de l'écosystème Java.",
    ],
  },
  {
    date: "Avr. 2020 - Avr. 2021",
    title: "Formation Développeur Python",
    company: "OpenClassrooms",
    description: [
      "Diplôme Développeur d'application Python - Niveau 6 (Bac+3/4) - Titre RNCP.",
    ],
  },
  {
    date: "Juin 2000 - Janv. 2020",
    title: "Directeur de magasin / Opticien",
    company: "Direction Commerciale",
    description: [
      "Management d'équipe, gestion de centre de profit et expertise en relation client.",
      "Analyse des besoins complexes et résolution de problèmes opérationnels.",
    ],
  },
];

export default function CareerTimelineSection() {
  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.sectionTitle}>
        PARCOURS PROFESSIONNEL & FORMATION
      </h2>

      <div className={styles.timeline}>
        {timeline.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.header}>
                <span className={styles.title}>{item.title}</span>
                {item.company && (
                  <span className={styles.company}> - {item.company}</span>
                )}
              </div>
              <div className={styles.date}>{item.date}</div>
              {item.description && (
                <ul className={styles.description}>
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.moreDetails}>
        Détails complets et démonstrations disponibles sur mon portfolio&nbsp;
        <a
          href="https://www.emmanuel-oudot.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.emmanuel-oudot.fr
        </a>
      </div>
    </div>
  );
}
