import React from "react";
import styles from "./Formations.module.scss";

export const formationsData = [
  {
    id: "oc-react",
    date: "Fév.-Juil. 2025",
    school: "OpenClassrooms",
    description: (
      <>
        Développeur JavaScript / React · Diplôme Concepteur Logiciel Niveau 6
        (Bac+3/4) RNCP : développement <strong>React</strong> avec gestion
        d'état (<strong>Redux</strong>, <strong>Zustand</strong>),{" "}
        <strong>TypeScript</strong> et intégration <strong>APIs REST</strong>.
      </>
    ),
  },
  {
    id: "eni-java",
    date: "Juin-Sept. 2021",
    school: "ENI École Informatique",
    description: (
      <>
        Développeur Java · Fondamentaux <strong>POO</strong>, principes{" "}
        <strong>SOLID</strong> et écosystème Java.
      </>
    ),
  },
  {
    id: "oc-python",
    date: "Avr. 2020-Avr. 2021",
    school: "OpenClassrooms",
    description: (
      <>
        Développeur Python · Diplôme Développeur Python Niveau 6 (Bac+3/4) RNCP
        : <strong>Python</strong>, <strong>Django</strong>,{" "}
        <strong>APIs REST</strong> et bases de données relationnelles (
        <strong>PostgreSQL</strong>, <strong>MySQL</strong>).
      </>
    ),
  },
];

export default function Formations() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Formations</h2>
      {formationsData.map((f) => (
        <div key={f.id} className={styles.item}>
          <span className={styles.date}>{f.date}</span>
          <p className={styles.content}>
            <span className={styles.school}>{f.school}</span>
            {" - "}
            {f.description}
          </p>
        </div>
      ))}
    </section>
  );
}
