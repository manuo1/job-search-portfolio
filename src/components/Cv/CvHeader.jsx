import React from "react";
import profilePhoto from "../../assets/profile.jpg";
import styles from "./CvHeader.module.scss";

export default function CvHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.photoWrap}>
        <img
          src={profilePhoto}
          alt="Emmanuel Oudot, Développeur Backend Senior Full-Stack"
          className={styles.photo}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>Emmanuel OUDOT</h1>
        <p className={styles.title}>Développeur Backend Senior & Full-Stack</p>
        <p className={styles.subtitle}>Python · Django · React</p>
        <div className={styles.meta}>
          <p className={styles.metaRow}>Bourges (18)</p>
          <p className={styles.metaRow}>
            <a
              href="https://www.emmanuel-oudot.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.emmanuel-oudot.fr
            </a>
            {" · "}
            <a
              href="https://github.com/manuo1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/manuo1
            </a>
            {" · "}
            <a
              href="https://www.linkedin.com/in/emmanuel-oudot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/emmanuel-oudot
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
