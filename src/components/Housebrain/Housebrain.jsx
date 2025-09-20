import React from "react";
import styles from "./Housebrain.module.scss";

function Housebrain() {
  return (
    <div className={styles.housebrain}>
      <header className={styles.header}>
        <h1>HouseBrain</h1>
        <p className={styles.subtitle}>
          Système domotique connecté - Raspberry Pi
        </p>
        <div className={styles.links}>
          <a
            href="http://housebrain.emmanuel-oudot.fr/"
            className={styles.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Démo live →
          </a>
          <a
            href="https://github.com/manuo1/housebrain"
            className={styles.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code source →
          </a>
        </div>
      </header>

      <section className={styles.intro}>
        <p>
          Projet personnel de domotique pour monitorer et piloter l'énergie de
          mon domicile. Communication directe avec compteur Linky + capteurs
          Bluetooth, interface web moderne.
        </p>
      </section>

      <section className={styles.achievements}>
        <h2>Réalisations techniques → Compétences</h2>

        <div className={styles.achievementGrid}>
          <div className={styles.achievementCard}>
            <h3>Architecture full-stack</h3>
            <ul>
              <li>
                <strong>Backend Django</strong> : 6 apps modulaires, services
                systemd autonomes, API REST
              </li>
              <li>
                <strong>Cache partagé Redis</strong> : Bus de données
                décentralisé, listeners → cache → app
              </li>
              <li>
                <strong>Frontend React</strong> : SPA moderne, visualisation
                temps-réel, responsive design
              </li>
              <li>
                <strong>Infrastructure</strong> : Nginx, déploiement automatisé,
                monitoring
              </li>
            </ul>
            <p className={styles.skill}>
              → Architecture découplée, cache distribué, microservices
            </p>
          </div>

          <div className={styles.achievementCard}>
            <h3>Protocoles IoT & hardware</h3>
            <ul>
              <li>
                <strong>Interface série</strong> : Carte électronique custom
                (SFH620A), parser Teleinfo 1200 bauds
              </li>
              <li>
                <strong>Bluetooth LE</strong> : Capteurs &lt;2€ reflashés
                firmware BTHome, décodage binaire
              </li>
              <li>
                <strong>Pilotage chauffages</strong> : Circuit MCP23017 +
                MOC3041 pour commande relais
              </li>
              <li>
                <strong>Raspberry Pi</strong> : Optimisation embarquée,
                configuration systemd
              </li>
            </ul>
            <p className={styles.skill}>
              → Expertise électronique, firmware, communication bas niveau
            </p>
          </div>

          <div className={styles.achievementCard}>
            <h3>Algorithmes & traitement données</h3>
            <ul>
              <li>
                <strong>Temps-réel</strong> : 1440 points/jour, interpolation
                linéaire pour gaps
              </li>
              <li>
                <strong>Multi-résolution</strong> : Agrégation minute → heure,
                downsampling intelligent
              </li>
              <li>
                <strong>Tarification EDF</strong> : 11 index, calcul coûts
                automatique
              </li>
            </ul>
            <p className={styles.skill}>
              → Algorithmes spécialisés, gestion données temporelles complexes
            </p>
          </div>

          <div className={styles.achievementCard}>
            <h3>DevOps & production</h3>
            <ul>
              <li>
                <strong>Déploiement</strong> : 14 scripts orchestrés, health
                checks, rollback auto
              </li>
              <li>
                <strong>Monitoring</strong> : Systemd watchdog, logs structurés,
                métriques santé
              </li>
              <li>
                <strong>Maintenance</strong> : Scripts update/remove, debugging
                temps-réel
              </li>
            </ul>
            <p className={styles.skill}>
              → Approche production, automatisation, monitoring système
            </p>
          </div>
        </div>
      </section>

      <section className={styles.status}>
        <h2>État projet</h2>
        <div className={styles.phases}>
          <div className={styles.phase}>
            <h3>Phase 1 (réalisée)</h3>
            <p>Monitoring énergétique complet</p>
          </div>
          <div className={styles.phase}>
            <h3>Phase 2 (développement)</h3>
            <p>Pilotage chauffages intelligent</p>
          </div>
        </div>

        <div className={styles.currentState}>
          <p>
            <strong>Interface actuelle</strong> : Graphiques consommation,
            données Teleinfo live, capteurs température
          </p>
          <p>
            <strong>Prochaine étape</strong> : Dashboard unifié + régulation
            automatique via circuits MCP23017/MOC3041
          </p>
        </div>
      </section>

      <section className={styles.technologies}>
        <h2>Technologies</h2>
        <div className={styles.techGrid}>
          <div className={styles.techCategory}>
            <h3>Backend</h3>
            <p>Django 5.2, DRF, PySerial, Bleak, Redis</p>
          </div>
          <div className={styles.techCategory}>
            <h3>Frontend</h3>
            <p>React 19, Vite, Recharts, Sass</p>
          </div>
          <div className={styles.techCategory}>
            <h3>Infrastructure</h3>
            <p>Nginx, Gunicorn, systemd, Bash scripts</p>
          </div>
          <div className={styles.techCategory}>
            <h3>Hardware</h3>
            <p>Raspberry Pi, protocoles série/Bluetooth</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Housebrain;
