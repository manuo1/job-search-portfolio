import React from "react";
import styles from "./ProfileSection.module.scss";

export default function ProfileSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Profil</h2>
      <p className={styles.text}>
        Développeur autodidacte depuis plus de{" "}
        <strong className={styles.highlight}>10 ans</strong>, reconverti
        professionnellement en 2020.{" "}
        <strong className={styles.highlight}>
          3 ans d'expérience en backend Python
        </strong>{" "}
        pour applications SaaS B2B. Spécialisé en{" "}
        <strong className={styles.highlight}>
          Django REST Framework (DRF)
        </strong>
        , architecture event-driven,{" "}
        <strong className={styles.highlight}>Clean Architecture</strong> et{" "}
        <strong className={styles.highlight}>React</strong> — forte culture
        DevOps, <strong className={styles.highlight}>TDD</strong> et
        optimisation des performances (SQL, ORM, cache{" "}
        <strong className={styles.highlight}>Redis</strong>). Maîtrise du
        développement augmenté par l'IA (Claude, Gemini). Expertise en{" "}
        <strong className={styles.highlight}>API RESTful</strong>, bases de
        données SQL (<strong className={styles.highlight}>PostgreSQL</strong>,{" "}
        <strong className={styles.highlight}>MySQL</strong>) et NoSQL (
        <strong className={styles.highlight}>Redis</strong>).
      </p>
    </section>
  );
}
