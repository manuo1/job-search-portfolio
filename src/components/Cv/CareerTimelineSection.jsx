import React from "react";
import styles from "./CareerTimelineSection.module.scss";

const timeline = [
  {
    date: "Août 2025 - Présent",
    title: "- Développeur Full Stack",
    company: "HouseBrain - Projet personnel",
    description: [
      "Développement full stack : Django REST, React, microservices, cache Redis.",
      "IoT et hardware : Raspberry Pi, capteurs Bluetooth LE, pilotage GPIO.",
      "Production-ready : déploiement automatisé, monitoring et architecture scalable.",
    ],
  },
  {
    date: "Fév. 2025 - Juil. 2025",
    title: "- Formation Développeur JavaScript / React",
    company: "OpenClassrooms",
    description: [
      "Diplôme Développeur Concepteur Logiciel - Bac+3/4 - Licence / Bachelor.",
    ],
  },
  {
    date: "Jan. 2022 - Nov. 2024",
    title: "- Développeur Backend",
    company: "Eco CO₂ / UDWI",
    description: [
      "Développement d'une plateforme de suivi de consommation énergétique.",
      "Acquisition massive de données via capteurs IoT et API, avec optimisation de l'impact sur serveurs et base de données.",
      "Traitement des données, algorithmes de détection et prévisions de consommation, mise à disposition via API REST performantes",
      "Référent d'équipe : suivi des features, échanges entre équipes dev, R&D, UX/UI et métiers, organisation des rituels Agile et reporting.",
    ],
  },
  {
    date: "Juin 2021 - Sept. 2021",
    title: "- Formation Développeur Java",
    company: "ENI École Informatique",
    description: ["Acquisition des fondamentaux Java et POO."],
  },
  {
    date: "Avr. 2020 - Avr. 2021",
    title: "- Formation Développeur Python",
    company: "OpenClassrooms",
    description: [
      "Diplôme Développeur d'application Python- Bac+3/4 - Licence / Bachelor.",
    ],
  },
  {
    date: "Juin 2000 - Janv. 2020",
    title: "- Opticien - Directeur de magasin",
    description: [
      "Management et gestion commerciale.",
      "Communication, écoute et analyse des besoins clients.",
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
        Détails complets disponibles sur mon portfolio&nbsp;
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
