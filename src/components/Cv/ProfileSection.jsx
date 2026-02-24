import React from "react";
import styles from "./ProfileSection.module.scss";

export default function ProfileSection() {
  return (
    <section className={styles.profileContainer}>
      <p className={styles.profileText}>
        <strong>Développeur passionné</strong>, je réponds depuis plus de
        <strong> 10 ans</strong> à des problèmes concrets par des applications
        <strong> performantes</strong>, <strong>fiables</strong> et
        <strong> scalables</strong>.
      </p>

      <p className={styles.profileText}>
        Expert en résolution de problèmes, je maîtrise le{" "}
        <strong>développement augmenté par l'IA</strong>
        (Claude, Gemini) pour accélérer le raisonnement complexe et
        l'exploration architecturale. Mon approche <strong>Clean Code</strong>,
        ma culture <strong>DevOps</strong> et ma communication fluide
        garantissent la réussite des projets à fort impact.
      </p>
    </section>
  );
}
