import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.name}>Emmanuel OUDOT</h1>
      <h2 className={styles.title}>Développeur Full-Stack</h2>
      <p className={styles.subtitle}>Python / Django & JavaScript / React</p>
    </header>
  );
}
