import React from "react";
import styles from "./ContactSection.module.scss";
import githubLogo from "../../assets/github/github-mark-white.png";
import linkedinLogo from "../../assets/linkedin/InBug-White.png";
import eoLogo from "../../assets/eo-logo.png";

export default function ContactSection() {
  const contacts = ["Contactez moi sur LinkedIn", "Bourges (18)"];

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
