import React from "react";
import profilePhoto from "../../assets/profile.jpg";
import styles from "./CvHeader.module.scss";

export const headerData = {
  name: "Emmanuel OUDOT",
  title: "Développeur Backend Senior & Full-Stack",
  subtitle: "Python · Django · React",
  location: "Bourges (18)",
  phone: null,
  email: null,
  links: [
    { label: "www.emmanuel-oudot.fr", url: "https://www.emmanuel-oudot.fr/" },
    { label: "github.com/manuo1", url: "https://github.com/manuo1/" },
    {
      label: "linkedin.com/in/emmanuel-oudot",
      url: "https://www.linkedin.com/in/emmanuel-oudot/",
    },
  ],
};

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
        <h1 className={styles.name}>{headerData.name}</h1>
        <p className={styles.title}>{headerData.title}</p>
        <p className={styles.subtitle}>{headerData.subtitle}</p>
        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <span className={styles.metaItem}>{headerData.location}</span>

            {headerData.phone && (
              <span className={styles.metaItem}>{headerData.phone}</span>
            )}

            {headerData.email && (
              <a
                href={`mailto:${headerData.email}`}
                className={styles.metaItem}
              >
                {headerData.email}
              </a>
            )}
          </div>

          <div className={styles.metaRow}>
            {headerData.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                className={styles.metaItem}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
