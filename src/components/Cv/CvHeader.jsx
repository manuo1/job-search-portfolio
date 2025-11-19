import React from "react";
import styles from "./CvHeader.module.scss";

export default function CvHeader() {
  return (
    <div className={styles.cvHeaderContainer}>
      <h1 className={styles.name}>Emmanuel OUDOT</h1>
      <h2 className={styles.title}>Développeur Backend & Full-Stack</h2>
      <p className={styles.subtitle}>Python / Django / React</p>
    </div>
  );
}
