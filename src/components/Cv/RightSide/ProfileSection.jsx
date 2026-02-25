import React from "react";
import styles from "./ProfileSection.module.scss";

export const profileData = [
  {
    id: "p1",
    segments: [
      { text: "Développeur passionné", bold: true },
      { text: ", je réponds depuis plus de " },
      { text: "10 ans", bold: true },
      { text: " à des problèmes concrets par des applications " },
      { text: "performantes", bold: true },
      { text: ", " },
      { text: "fiables", bold: true },
      { text: " et " },
      { text: "scalables", bold: true },
      { text: ". Spécialisé en développement backend Python, Django REST Framework (DRF) et React, avec une forte culture DevOps et une approche orientée qualité logicielle." },
    ],
  },
  {
    id: "p2",
    segments: [
      { text: "Expert en résolution de problèmes" },
      { text: ", je maîtrise le " },
      { text: "développement augmenté par l'IA", bold: true },
      { text: " (Claude, Gemini) pour accélérer le raisonnement complexe et l'exploration architecturale. Mon approche " },
      { text: "Clean Code", bold: true },
      { text: " et de " },
      { text: "Refactoring", bold: true },
      { text: " continu, ma pratique du " },
      { text: "Test-Driven Development (TDD)", bold: true },
      { text: ", ma culture " },
      { text: "DevOps", bold: true },
      { text: " et mon intégration continue (CI/CD) via Git garantissent la réussite des projets à fort impact, en environnement " },
      { text: "SaaS B2B", bold: true },
      { text: " comme en projets embarqués temps réel." },
    ],
  },
];

export default function ProfileSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Profil</h2>
      {profileData.map((para) => (
        <p key={para.id} className={styles.text}>
          {para.segments.map((seg, i) =>
            seg.bold
              ? <strong key={i} className={styles.highlight}>{seg.text}</strong>
              : <span key={i}>{seg.text}</span>
          )}
        </p>
      ))}
    </section>
  );
}
