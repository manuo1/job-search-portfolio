import React from "react";
import styles from "./CareerTimeline.module.scss";

function TimelineItem({ title, company, date, context, children, isLast }) {
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
      <div className={styles.itemDesc}>{children}</div>
    </article>
  );
}

export default function CareerTimeline() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Expériences Professionnelles</h2>

      <TimelineItem
        title="Développeur Full-Stack - Projet Personnel en Production"
        company="HouseBrain"
        date="Août 2025 - Présent"
        context="Système domotique IoT sur Raspberry Pi, conduit avec des standards professionnels (architecture, tests, CI/CD, déploiement production) — orchestration hardware (BLE, I2C, Série, Linky, LoRaWAN) avec interface React temps réel."
      >
        <p>
          - Event-Driven Architecture : <strong>Redis</strong> IPC pour
          orchestrer les flux IoT (Bluetooth Low Energy, I2C, Série, Linky,
          LoRaWAN) et workers asynchrones <strong>Django</strong>.
        </p>
        <p>
          - Développement full-stack : moteur de rendu custom haute-performance
          en <strong>React</strong> et backend résilient avec{" "}
          <strong>API RESTful DRF</strong> sécurisée via{" "}
          <strong>JWT/OAuth2</strong> (HttpOnly Cookies, rotation de tokens).
        </p>
        <p>
          - Optimisation performances : cache <strong>Redis</strong> agressif,
          déduplication MD5, <strong>latence quasi-nulle</strong> pour décisions
          critiques (ex. : délestage électrique).
        </p>
        <p>
          - Frontend <strong>React</strong> : gestion d'état complexe (
          <strong>Zustand</strong> avec undo/redo), synchronisation real-time
          asynchrone.
        </p>
        <p>
          - DevOps : pipeline de déploiement atomique en <strong>Bash</strong>,
          reverse-proxy <strong>Nginx</strong> avec SSL/TLS, microservices{" "}
          <strong>Systemd</strong> avec auto-healing et observabilité.
        </p>
      </TimelineItem>

      <TimelineItem
        title="Développeur Backend & Référent d'Équipe"
        company="Eco CO₂ / UDWI"
        date="Jan. 2022 - Nov. 2024 · 3 ans"
        context="Plateforme IoT SaaS B2B (France & DOM-TOM) — collecte et analyse massive de données énergétiques Enedis/GRDF."
      >
        <p>
          - Optimisation performances : réduction de la latence API de{" "}
          <strong>plus de 2s à moins de 500ms</strong> via optimisation SQL,
          indexation <strong>PostgreSQL</strong>, profiling{" "}
          <strong>Django Silk</strong> et élimination d'overfetching ORM.
        </p>
        <p>
          - Ingénierie Big Data & ETL : conception de pipelines temps réel pour
          APIs REST Enedis/GRDF (OpenAPI/Swagger, OAuth2), réécriture de flux{" "}
          <strong>Pandas</strong> et traitement asynchrone{" "}
          <strong>Celery</strong> avec gestion d'erreurs et retry.
        </p>
        <p>
          - Qualité & Observabilité : monitoring <strong>Datadog</strong>/Gatus,
          tests de charge <strong>Locust</strong>, couverture{" "}
          <strong>Pytest</strong>, code reviews systématiques et refactoring de
          la base de code.
        </p>
        <p>
          - Leadership technique : coordination d'équipes (développeurs, product
          owners, R&D), animation de rituels <strong>Agile/Scrum/Kanban</strong>{" "}
          et pilotage de la vision architecturale microservices.
        </p>
      </TimelineItem>

      <TimelineItem
        title="Directeur de Magasin & Opticien"
        company="Direction Commerciale"
        date="Juin 2000 - Jan. 2020 · 20 ans"
        isLast
      >
        <p>
          - Direction de centre de profit : <strong>management d'équipe</strong>
          , gestion budgétaire et relation client — compétences transverses
          directement appliquées au travail en équipe produit, à la
          communication inter-métiers et à l'orientation client en contexte
          tech.
        </p>
      </TimelineItem>

      <p className={styles.footer}>
        Portfolio & démonstrations en production :{" "}
        <a
          href="https://www.emmanuel-oudot.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.emmanuel-oudot.fr
        </a>
      </p>
    </section>
  );
}
