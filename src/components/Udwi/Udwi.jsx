import React from "react";
import styles from "./Udwi.module.scss";

function Udwi() {
  return (
    <div className={styles.udwi}>
      <header className={styles.header}>
        <div className={styles.badge}>Projet UDWI • Transition Énergétique</div>
        <h1>Développeur Backend & Référent d'Équipe</h1>
        <p className={styles.subtitle}>
          EcoCO2 | Janvier 2022 — Novembre 2024 (3 ans)
        </p>
        <div className={styles.context}>
          Plateforme IoT (France & DOM-TOM) pour la collecte et l'analyse
          massive de données énergétiques.
        </div>
      </header>

      <section className={styles.engineeringGrid}>
        {/* APIs & Intégrations Métier */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>APIs Enedis, GRDF & IoT</h2>
          </div>
          <div className={styles.content}>
            <ul>
              <li>
                <strong>Flux GRDF :</strong> Conception intégrale du tunnel de
                création de compte et des demandes d'autorisation d'accès
                particulier.
              </li>
              <li>
                <strong>Collecte Multi-Source :</strong> Gestion des relevés,
                stockage et exploitation des données Enedis/GRDF pour analyses.
              </li>
              <li>
                <strong>Rétro-Ingénierie :</strong> Analyse et reconstruction
                des systèmes d'appairage/installation de capteurs
                LoRaWAN/HTTP/TCP dont la maîtrise avait été perdue.
              </li>
            </ul>
          </div>
        </div>

        {/* Traitement de Données Massives */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Big Data & Algorithmes</h2>
          </div>
          <div className={styles.content}>
            <ul>
              <li>
                <strong>Optimisation SQL :</strong> Requêtes complexes sur des
                bases de millions de lignes via l'ORM Django (analyse via{" "}
                <strong>Django Silk</strong>).
              </li>
              <li>
                <strong>R&D & Calculs :</strong> Intégration d'algorithmes de
                détection de surconsommation et génération de courbes sur
                moyennes glissantes.
              </li>
              <li>
                <strong>Normalisation :</strong> Rééchantillonnage automatique
                des données capteurs à l'enregistrement (découpe par minutes
                entières démarrant à 0 seconde).
              </li>
            </ul>
          </div>
        </div>

        {/* Performances Critiques */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Optimisation Système</h2>
          </div>
          <div className={styles.content}>
            <ul>
              <li>
                <strong>Latence API :</strong> Réduction des temps de réponse de{" "}
                <strong>+2s à &lt;500ms</strong> par simplification et
                optimisation du code.
              </li>
              <li>
                <strong>Performance Python :</strong> Réécriture complète des
                flux utilisant <strong>Pandas</strong> vers des alternatives
                plus performantes pour réduire la charge CPU/RAM.
              </li>
              <li>
                <strong>Tâches Celery :</strong> Amélioration des workers
                asynchrones pour une meilleure efficacité énergétique et
                matérielle.
              </li>
            </ul>
          </div>
        </div>

        {/* DevOps & Qualité */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>QA & Observabilité</h2>
          </div>
          <div className={styles.content}>
            <ul>
              <li>
                <strong>Monitoring :</strong> Tableaux de bord et alertes
                critiques avec <strong>Datadog</strong> et{" "}
                <strong>Gatus</strong>.
              </li>
              <li>
                <strong>Tests de Charge :</strong> Simulation de réception de
                données capteurs via <strong>Locust</strong> (données
                cohérentes, respect des cryptages).
              </li>
              <li>
                <strong>Industrialisation :</strong> Généralisation de{" "}
                <strong>Pytest</strong> et documentation technique enrichie par
                des schémas explicatifs.
              </li>
            </ul>
          </div>
        </div>

        {/* Rôle de Référent d'Équipe (Carte Large) */}
        <div className={`${styles.card} ${styles.wideCard}`}>
          <div className={styles.cardHeader}>
            <h2>Référent d'Équipe</h2>
          </div>
          <div className={styles.content}>
            <p className={styles.roleDesc}>
              Promu dès la 1ère année pour ma vision transverse et ma
              communication.
            </p>
            <div className={styles.splitContent}>
              <ul>
                <li>
                  <strong>Coordination :</strong> Pivot central entre
                  Développeurs, Product Owners (PO) et équipe R&D.
                </li>
                <li>
                  <strong>Agilité :</strong> Organisation et animation des
                  rétrospectives Scrum et des démonstrations techniques.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Philosophie :</strong> "Simplification avant
                  optimisation" — réduction de la complexité inutile avant
                  d'entrer en phase de performance.
                </li>
                <li>
                  <strong>Expertise ORM :</strong> Écriture de requêtes
                  strictement ciblées pour éviter les données inutilisées
                  (Overfetching).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.techStack}>
          <span>Django</span>
          <span>PostgreSQL</span>
          <span>Celery</span>
          <span>Redis</span>
          <span>LoRaWAN</span>
          <span>Datadog</span>
          <span>Gatus</span>
          <span>Locust</span>
          <span>Pytest</span>
          <span>Django Silk</span>
          <span>Docker</span>
        </div>
      </footer>
    </div>
  );
}

export default Udwi;
