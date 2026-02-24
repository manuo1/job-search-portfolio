import React from "react";
import styles from "./SoftSkillsSection.module.scss";

const softSkills = [
  "Communication inter-services",
  "Leadership technique",
  "Adaptabilité",
  "Esprit d'analyse",
  "Orientation produit",
  "Curiosité technique",
  "Médiation & Facilitation",
  "Résolution de problèmes",
];

export default function SoftSkillsSection() {
  return (
    <div className={styles.softSkillsContainer}>
      <h2 className={styles.sectionTitle}>SOFT SKILLS</h2>
      <div className={styles.softSkills}>
        {softSkills.map((skill) => (
          <span key={skill} className={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
