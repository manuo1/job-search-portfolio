import React from "react";
import styles from "./Housebrain.module.scss";

function Housebrain() {
  return (
    <div className={styles.housebrain}>
      <header className={styles.header}>
        <div className={styles.badge}>Projet Réel & Système de Démo</div>
        <h1>HouseBrain</h1>
        <p className={styles.subtitle}>
          Engineering Full-Stack : Pilotage énergétique haute-performance sur
          Raspberry Pi
        </p>
        <div className={styles.links}>
          <a
            href="http://housebrain.emmanuel-oudot.fr/"
            className={styles.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Démo (site en production) →
          </a>
          <a
            href="https://github.com/manuo1/housebrain"
            className={styles.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code Source (GitHub) →
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <p>
          Plus qu’un simple projet personnel, <strong>HouseBrain</strong> est un
          système de production orchestrant un écosystème IoT industriel (Linky,
          BLE, I2C). L'enjeu : prouver qu'on peut allier une{" "}
          <strong>UX fluide et moderne</strong> (React) à un{" "}
          <strong>backend résilient et optimisé</strong> pour des environnements
          hardware contraints (Django/Redis).
        </p>
      </section>

      <section className={styles.engineeringGrid}>
        {/* Volet Backend / Système */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Ingénierie Système & Backend</h2>
          </div>
          <div className={styles.content}>
            <p className={styles.focus}>Objectif : Performance & Résilience</p>
            <ul>
              <li>
                <strong>Event-Driven Architecture :</strong> Utilisation de{" "}
                <strong>Redis</strong> comme bus IPC pour découpler les
                listeners hardware (série/BLE) des workers web.
              </li>
              <li>
                <strong>Optimisation des ressources :</strong> Stratégie de mise
                en cache agressive pour minimiser les I/O physiques et garantir
                une latence quasi-nulle sur les décisions critiques (délestage).
              </li>
              <li>
                <strong>Data Integrity :</strong> Système de déduplication par{" "}
                <strong>fingerprinting (MD5)</strong> pour l'historisation
                massive des plannings sans explosion de la base de données.
              </li>
              <li>
                <strong>Robustesse (Systemd) :</strong> Micro-services isolés
                avec monitoring proactif et auto-healing.
              </li>
            </ul>
          </div>
        </div>

        {/* Volet Frontend / UX */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Architecture Frontend & UX</h2>
          </div>
          <div className={styles.content}>
            <p className={styles.focus}>
              Objectif : Visualisation & Complexité
            </p>
            <ul>
              <li>
                <strong>Custom Engine (No-Lib) :</strong> Développement de
                graphiques de consommation en <strong>CSS/HTML pur</strong> pour
                un contrôle total sur le rendu (distinction W vs Wh) et un
                bundle minimal.
              </li>
              <li>
                <strong>State Management Complexe :</strong> Éditeur de
                plannings (Timeline) avec gestion des chevauchements d'horaires
                et système d'undo/redo.
              </li>
              <li>
                <strong>Sécurité JWT :</strong> Implémentation complète avec
                rotation de tokens et stockage sécurisé (HttpOnly Cookies).
              </li>
              <li>
                <strong>Real-Time Data :</strong> Synchronisation asynchrone
                pour un affichage "live" des données électriques sans latence
                perçue.
              </li>
            </ul>
          </div>
        </div>

        {/* devops & infrastructure */}

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>DevOps & Déploiement</h2>
          </div>
          <div className={styles.content}>
            <p className={styles.focus}>
              Objectif : Industrialisation & Monitoring
            </p>
            <ul>
              <li>
                <strong>Pipeline de Déploiement :</strong> Automatisation via
                scripts Bash pour la mise à jour atomique (build, migration,
                restart) sur environnement Linux.
              </li>
              <li>
                <strong>Observabilité :</strong> Centralisation des logs système
                (journalctl) injectés dynamiquement dans l'admin Django pour un
                diagnostic rapide.
              </li>
              <li>
                <strong>Sécurisation Réseau :</strong> Reverse-proxy Nginx avec
                SSL/TLS (Certbot) et isolation des services critiques.
              </li>
              <li>
                <strong>Optimisation Hardware :</strong> Configuration du Kernel
                Linux pour la gestion optimisée des ressources du Raspberry Pi.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.techStack}>
          <span>Django 5.2</span>
          <span>React 19</span>
          <span>Redis</span>
          <span>PostgreSQL</span>
          <span>IoT (I2C/BLE/Serial)</span>
          <span>Systemd</span>
        </div>
      </footer>
    </div>
  );
}

export default Housebrain;
