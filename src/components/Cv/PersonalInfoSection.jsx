import React from "react";
import styles from "./PersonalInfoSection.module.scss";

export default function PersonalInfoSection() {
  const contacts = ["Bourges (18)", "46 ans", "Français - Anglais B1"];

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.sectionTitle}>INFORMATIONS PERSONNELLES</h2>
      {contacts.map((text, idx) => (
        <div key={idx} className={styles.contactItem}>
          {text}
        </div>
      ))}
    </div>
  );
}
