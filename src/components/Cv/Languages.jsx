import React from "react";
import styles from "./Languages.module.scss";

export default function Languages() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Langues</h2>

      <div className={styles.langRow}>
        <span className={styles.langName}>Français</span>
        <span className={styles.langSep}> - </span>
        <span className={styles.langLevel}>Langue maternelle</span>
      </div>

      <div className={styles.langRow}>
        <span className={styles.langName}>Anglais</span>
        <span className={styles.langSep}> - </span>
        <span className={styles.langLevel}>
          Intermédiaire - documentation technique, revues de code, communication
          verbale simple
        </span>
      </div>
    </section>
  );
}
