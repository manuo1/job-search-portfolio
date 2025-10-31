import React from "react";
import styles from "./Languages.module.scss";

export default function Languages() {
  const languages = [
    "Français : Langue maternelle",
    "English : Intermediate - technical documentation, code reviews, simple verbal communication",
  ];

  return (
    <div className={styles.languagesContainer}>
      <h2 className={styles.sectionTitle}>LANGUES</h2>
      {languages.map((text, idx) => (
        <div key={idx} className={styles.languagesItem}>
          {text}
        </div>
      ))}
    </div>
  );
}
