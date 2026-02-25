import React from "react";
import styles from "./ContactSection.module.scss";

export const contactData = ["Contactez-moi sur LinkedIn", "Bourges (18)"];

export default function ContactSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Coordonnées</h2>
      {contactData.map((item, i) => (
        <p key={i} className={styles.item}>
          {item}
        </p>
      ))}
    </section>
  );
}
