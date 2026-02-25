import React from "react";
import styles from "./SoftSkills.module.scss";

export const softSkillsData = [
  "Communication inter-équipes", "Leadership technique", "Adaptabilité",
  "Esprit d'analyse", "Orientation produit", "Curiosité technique",
  "Médiation & Facilitation", "Résolution de problèmes",
  "Méthodes Agile / Scrum", "Code Review",
];

export default function SoftSkills() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Soft Skills</h2>
      <ul className={styles.tagList}>
        {softSkillsData.map((skill) => (
          <li key={skill} className={styles.tag}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
