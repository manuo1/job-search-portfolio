import React from "react";
import styles from "./Formations.module.scss";

export default function Formations() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Formations</h2>

      <div className={styles.item}>
        <span className={styles.date}>Fév.-Juil. 2025</span>
        <p className={styles.content}>
          <span className={styles.school}>OpenClassrooms</span>
          {" - "}Développeur JavaScript / React · Diplôme Concepteur Logiciel
          Niveau 6 (Bac+3/4) RNCP : développement <strong>React</strong> avec
          gestion d'état (<strong>Redux</strong>, <strong>Zustand</strong>),{" "}
          <strong>TypeScript</strong> et intégration <strong>APIs REST</strong>.
        </p>
      </div>

      <div className={styles.item}>
        <span className={styles.date}>Juin-Sept. 2021</span>
        <p className={styles.content}>
          <span className={styles.school}>ENI École Informatique</span>
          {" - "}Développeur Java · Fondamentaux <strong>POO</strong>, principes{" "}
          <strong>SOLID</strong> et écosystème Java.
        </p>
      </div>

      <div className={styles.item}>
        <span className={styles.date}>Avr. 2020-Avr. 2021</span>
        <p className={styles.content}>
          <span className={styles.school}>OpenClassrooms</span>
          {" - "}Développeur Python · Diplôme Développeur Python Niveau 6
          (Bac+3/4) RNCP : <strong>Python</strong>, <strong>Django</strong>,{" "}
          <strong>APIs REST</strong> et bases de données relationnelles (
          <strong>PostgreSQL</strong>, <strong>MySQL</strong>).
        </p>
      </div>
    </section>
  );
}
