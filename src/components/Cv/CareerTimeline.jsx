import React from "react";
import styles from "./CareerTimeline.module.scss";

export const portfolioUrl = "https://www.emmanuel-oudot.fr";

export const timelineData = [
  {
    id: "housebrain",
    date: "Août 2025 - Présent",
    title: "Développeur Full-Stack - Projet Personnel en Production",
    company: "HouseBrain",
    context:
      "Système domotique IoT sur Raspberry Pi, conduit avec des standards professionnels (architecture, tests, CI/CD, déploiement production) — orchestration hardware (BLE, I2C, Série, Linky, LoRaWAN) avec interface React temps réel.",
    description: [
      <>
        Event-Driven Architecture : <strong>Redis</strong> IPC pour orchestrer
        les flux IoT (Bluetooth Low Energy, I2C, Série, Linky, LoRaWAN) et
        workers asynchrones <strong>Django</strong>.
      </>,
      <>
        Développement full-stack : moteur de rendu custom haute-performance en{" "}
        <strong>React</strong> et backend résilient avec{" "}
        <strong>API RESTful DRF</strong> sécurisée via{" "}
        <strong>JWT/OAuth2</strong> (HttpOnly Cookies, rotation de tokens).
      </>,
      <>
        Optimisation performances : cache <strong>Redis</strong> agressif,
        déduplication MD5, <strong>latence quasi-nulle</strong> pour décisions
        critiques (ex. : délestage électrique).
      </>,
      <>
        Frontend <strong>React</strong> : gestion d'état complexe (
        <strong>Zustand</strong> avec undo/redo), synchronisation real-time
        asynchrone.
      </>,
      <>
        DevOps : pipeline de déploiement atomique en <strong>Bash</strong>,
        reverse-proxy <strong>Nginx</strong> avec SSL/TLS, microservices{" "}
        <strong>Systemd</strong> avec auto-healing et observabilité.
      </>,
    ],
  },
  {
    id: "eco-co2",
    date: "Jan. 2022 - Nov. 2024 · 3 ans",
    title: "Développeur Backend & Référent d'Équipe",
    company: "Eco CO₂ / UDWI",
    context:
      "Plateforme IoT SaaS B2B (France & DOM-TOM) — collecte et analyse massive de données énergétiques Enedis/GRDF.",
    description: [
      <>
        Optimisation performances : réduction de la latence API de{" "}
        <strong>plus de 2s à moins de 500ms</strong> via optimisation SQL,
        indexation <strong>PostgreSQL</strong>, profiling{" "}
        <strong>Django Silk</strong> et élimination d'overfetching ORM.
      </>,
      <>
        Ingénierie Big Data & ETL : conception de pipelines temps réel pour APIs
        REST Enedis/GRDF (OpenAPI/Swagger, OAuth2), réécriture de flux{" "}
        <strong>Pandas</strong> et traitement asynchrone <strong>Celery</strong>{" "}
        avec gestion d'erreurs et retry.
      </>,
      <>
        Qualité & Observabilité : monitoring <strong>Datadog</strong>/Gatus,
        tests de charge <strong>Locust</strong>, couverture{" "}
        <strong>Pytest</strong>, code reviews systématiques et refactoring de la
        base de code.
      </>,
      <>
        Leadership technique : coordination d'équipes (développeurs, product
        owners, R&D), animation de rituels <strong>Agile/Scrum/Kanban</strong>{" "}
        et pilotage de la vision architecturale microservices.
      </>,
    ],
  },
  {
    id: "opticien",
    date: "Juin 2000 - Jan. 2020 · 20 ans",
    title: "Directeur de Magasin & Opticien",
    company: "Direction Commerciale",
    context: null,
    description: [
      <>
        Direction de centre de profit : <strong>management d'équipe</strong>,
        gestion budgétaire et relation client — compétences transverses
        directement appliquées au travail en équipe produit, à la communication
        inter-métiers et à l'orientation client en contexte tech.
      </>,
    ],
  },
];

function TimelineItem({ date, title, company, context, description, isLast }) {
  return (
    <article className={`${styles.item} ${isLast ? styles.last : ""}`}>
      <div className={styles.itemHeader}>
        <span className={styles.itemTitle}>{title}</span>
        <span className={styles.itemSep}>,</span>
        <span className={styles.itemCompany}>{company}</span>
        <span className={styles.itemSep}>,</span>
        <span className={styles.itemDate}>{date}</span>
      </div>
      {context && <p className={styles.itemContext}>{context}</p>}
      {description?.length > 0 && (
        <ul className={styles.itemDesc}>
          {description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function CareerTimeline() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Expériences Professionnelles</h2>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={item.id}
          {...item}
          isLast={index === timelineData.length - 1}
        />
      ))}
      <p className={styles.footer}>
        Portfolio & démonstrations en production :{" "}
        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
          {portfolioUrl.replace("https://", "")}
        </a>
      </p>
    </section>
  );
}
