import React from "react";
import styles from "./Languages.module.scss";

export const languagesData = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais",  level: "Intermédiaire — documentation technique, revues de code, communication verbale simple" },
];

export default function Languages() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Langues</h2>
      {languagesData.map((lang) => (
        <div key={lang.name} className={styles.langItem}>
          <span className={styles.langName}>{lang.name}</span>
          <span className={styles.langLevel}>{lang.level}</span>
        </div>
      ))}
    </section>
  );
}
