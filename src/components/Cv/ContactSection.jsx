import React from "react";
import styles from "./ContactSection.module.scss";
import githubLogo from "../../assets/github/github-mark-white.png";
import linkedinLogo from "../../assets/linkedin/InBug-White.png";
import eoLogo from "../../assets/eo-logo.png";

export default function ContactSection() {
  const contacts = ["Contactez moi sur LinkedIn"];

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/emmanuel-oudot/",
      displayUrl: "linkedin.com/in/emmanuel-oudot",
      logo: linkedinLogo,
    },
    {
      name: "Portfolio",
      url: "https://www.emmanuel-oudot.fr/",
      displayUrl: "www.emmanuel-oudot.fr",
      logo: eoLogo,
    },
    {
      name: "GitHub",
      url: "https://github.com/manuo1/",
      displayUrl: "github.com/manuo1",
      logo: githubLogo,
    },
  ];
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.sectionTitle}>CONTACT & LIENS</h2>
      {contacts.map((text, idx) => (
        <div key={idx} className={styles.contactItem}>
          {text}
        </div>
      ))}
      {links.map((link) => (
        <div key={link.name} className={styles.linkItem}>
          <img src={link.logo} alt={link.name} className={styles.linkIcon} />
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.displayUrl}
          </a>
        </div>
      ))}
    </div>
  );
}
