import React from "react";
import styles from "./ProfileSection.module.scss";

export default function ProfileSection() {
  return (
    <section className={styles.profileContainer}>
      <h2 className={styles.sectionTitle}>PROFIL</h2>
      <p className={styles.profileText}>
        Développeur full-stack passionné avec{" "}
        <span className={styles.highlight}>3 ans d'expérience pro</span> en
        Python/Django, récemment spécialisé en React. Reconverti après une
        première carrière d'opticien, j'apporte une vision business unique et
        des compétences solides en{" "}
        <span className={styles.highlight}>gestion de données</span> et ,
        <span className={styles.highlight}>IoT</span> et{" "}
        <span className={styles.highlight}>optimisation de performances</span>.
        Habitué au travail en équipe transverse et force de proposition
        technique.
      </p>
    </section>
  );
}
