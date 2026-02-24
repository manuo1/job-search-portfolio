import React from "react";
import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  const contacts = ["contactez moi sur LinkedIn", "Bourges (18)"];

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.sectionTitle}>COORDONNÉES</h2>
      {contacts.map((text, idx) => (
        <div key={idx} className={styles.contactItem}>
          {text}
        </div>
      ))}
    </div>
  );
}
