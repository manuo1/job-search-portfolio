import React from "react";
import styles from "./LinksSection.module.scss";

export const linksData = [
  { name: "Portfolio", url: "https://www.emmanuel-oudot.fr/", display: "www.emmanuel-oudot.fr" },
  { name: "GitHub",    url: "https://github.com/manuo1/",     display: "github.com/manuo1" },
  { name: "LinkedIn",  url: "https://www.linkedin.com/in/emmanuel-oudot/", display: "linkedin.com/in/emmanuel-oudot" },
];

export default function LinksSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Liens</h2>
      {linksData.map((link) => (
        <div key={link.name} className={styles.linkItem}>
          <span className={styles.linkLabel}>{link.name}</span>
          <a href={link.url} className={styles.linkUrl} target="_blank" rel="noopener noreferrer">
            {link.display}
          </a>
        </div>
      ))}
    </section>
  );
}
