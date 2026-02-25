import React from "react";
import styles from "./CvHeader.module.scss";

export const headerData = {
  name:     "Emmanuel OUDOT",
  title:    "Développeur Backend Senior & Full-Stack",
  subtitle: "Python / Django / React",
};

export default function CvHeader() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{headerData.name}</h1>
      <h2 className={styles.title}>{headerData.title}</h2>
      <p className={styles.subtitle}>{headerData.subtitle}</p>
    </div>
  );
}
