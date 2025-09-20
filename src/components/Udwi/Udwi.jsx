// src/components/Udwi/Udwi.jsx
import React from "react";
import styles from "./Udwi.module.scss";

function Udwi() {
  return (
    <div className={styles.udwi}>
      <header className={styles.header}>
        <h1>UDWI - EcoCO2</h1>
        <p className={styles.subtitle}>
          Plateforme IoT pour la transition énergétique
        </p>
        <div className={styles.period}>
          Janvier 2022 - Novembre 2024 (3 ans)
        </div>
      </header>

      <section className={styles.intro}>
        <p>
          Plateforme IoT pour la transition énergétique avec collecte et analyse
          de données de consommation énergétique. Utilisateurs France et DOM-TOM
          (gestion multi-fuseaux horaires).
        </p>
      </section>

      <section className={styles.achievements}>
        <h2>Réalisations techniques principales</h2>

        <div className={styles.achievementGrid}>
          <div className={styles.achievementCard}>
            <h3>Intégrations API métier</h3>
            <ul>
              <li>
                <strong>GRDF</strong> : Conception complète du flux de création
                et gestion des autorisations, tâches quotidiennes
              </li>
              <li>
                <strong>EDF</strong> : Refonte du flux de récupération des
                données
              </li>
              <li>
                <strong>Fournisseurs capteurs</strong> : Optimisation de la
                logique de récupération via APIs
              </li>
            </ul>
            <p className={styles.skill}>
              → Expertise intégrations métier, APIs énergétiques
            </p>
          </div>

          <div className={styles.achievementCard}>
            <h3>Traitement de données à grande échelle</h3>
            <ul>
              <li>
                <strong>Requêtes SQL complexes</strong> : ORM Django optimisées
                sur volumes importants
              </li>
              <li>
                <strong>Calculs complexes</strong> : Exploitation et analyse des
                données de consommation
              </li>
              <li>
                <strong>Algorithmes R&D</strong> : Intégration détection
                surconsommations avec contraintes performance
              </li>
              <li>
                <strong>Optimisation stockage</strong> : Rééchantillonnage
                automatique et agrégations asynchrones
              </li>
            </ul>
            <p className={styles.skill}>
              → Algorithmes spécialisés, performance à grande échelle
            </p>
          </div>

          <div className={styles.achievementCard}>
            <h3>Optimisation performances critiques</h3>
            <ul>
              <li>
                <strong>API</strong> : Amélioration conséquente des temps de
                réponse (certaines requêtes : +2000ms → &lt;500ms)
              </li>
              <li>
                <strong>Celery</strong> : Optimisation tâches périodiques
              </li>
              <li>
                <strong>Architecture</strong> : Reprise à zéro des logiques de
                récupération
              </li>
              <li>
                <strong>Pandas alternative</strong> : Réécriture pour
                alternatives plus performantes
              </li>
            </ul>
            <p className={styles.skill}>
              → Optimisation système, architecture performante
            </p>
          </div>

          <div className={styles.achievementCard}>
            <h3>Qualité & DevOps</h3>
            <ul>
              <li>
                <strong>Code reviews</strong> : Systématiques avec bonnes
                pratiques
              </li>
              <li>
                <strong>QA collaboration</strong> : Tests de non-régression
              </li>
              <li>
                <strong>Monitoring</strong> : Datadog, Gatus, tests de charge
                Locust
              </li>
              <li>
                <strong>Tests</strong> : Généralisation Pytest, documentation
                schémas
              </li>
            </ul>
            <p className={styles.skill}>
              → Qualité production, monitoring, automatisation
            </p>
          </div>

          <div className={styles.achievementCard}>
            <h3>Capteurs et communication IoT</h3>
            <ul>
              <li>
                <strong>Multi-sources</strong> : APIs EDF/GRDF, fournisseurs
                capteurs, réception directe
              </li>
              <li>
                <strong>3 technologies capteurs</strong> : Électricité,
                température, hygrométrie
              </li>
              <li>
                <strong>Sécurisation réception</strong> : Gestion pics trafic,
                répartition intégrations
              </li>
              <li>
                <strong>Protocoles complexes</strong> : LoRaWAN, conversion
                HTTP/TCP, POST API
              </li>
            </ul>
            <p className={styles.skill}>
              → Expertise IoT, protocoles industriels, scalabilité
            </p>
          </div>

          <div className={styles.achievementCard}>
            <h3>Responsabilités d'équipe</h3>
            <ul>
              <li>
                <strong>Référent technique</strong> : Dès la première année
              </li>
              <li>
                <strong>Liaison transverse</strong> : Développeurs, PO, R&D
              </li>
              <li>
                <strong>Méthodologie Agile</strong> : Jira, planning poker,
                rétrospectives
              </li>
              <li>
                <strong>Communication</strong> : Rituels de circulation
                d'informations inter-équipes
              </li>
            </ul>
            <p className={styles.skill}>
              → Leadership technique, coordination, méthodologie
            </p>
          </div>
        </div>
      </section>

      <section className={styles.technologies}>
        <h2>Technologies & Expertise</h2>
        <div className={styles.techGrid}>
          <div className={styles.techCategory}>
            <h3>Backend</h3>
            <p>Django, PostgreSQL, Celery, Redis, ORM optimisé</p>
          </div>
          <div className={styles.techCategory}>
            <h3>APIs & Intégrations</h3>
            <p>EDF, GRDF, Fournisseurs IoT, REST, HTTP/TCP</p>
          </div>
          <div className={styles.techCategory}>
            <h3>IoT & Capteurs</h3>
            <p>LoRaWAN, 3 technologies capteurs, sécurisation</p>
          </div>
          <div className={styles.techCategory}>
            <h3>DevOps & Monitoring</h3>
            <p>Datadog, Gatus, Locust, Pytest, Environnement dédié</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Udwi;
