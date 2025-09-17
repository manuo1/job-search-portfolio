import React from "react";
import styles from "./FormationsSection.module.scss";

const formations = [
  {
    degree: "Développeur d'application JavaScript React",
    level: "RNCP niveau 6 - Bac+3/Bac+4 (Licence/Bachelor)",
    school: "OpenClassrooms, 2025",
  },
  {
    degree: "Développeur d'application Python",
    level: "RNCP niveau 6 - Bac+3/Bac+4 (Licence/Bachelor)",
    school: "OpenClassrooms, 2021",
  },
  {
    degree: "BTS Opticien-Lunetier",
    level: "",
    school: "Lycée Victor BERARD, 2000",
  },
];

export default function FormationsSection() {
  return (
    <div className={styles.formationsContainer}>
      <h2 className={styles.sectionTitle}>FORMATIONS</h2>
      {formations.map((f, idx) => (
        <div key={idx} className={styles.educationItem}>
          <div className={styles.degree}>{f.degree}</div>
          {f.level && <div className={styles.level}>{f.level}</div>}
          <div className={styles.school}>{f.school}</div>
        </div>
      ))}
    </div>
  );
}
