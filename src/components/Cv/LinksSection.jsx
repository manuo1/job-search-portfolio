import React from "react";
import githubLogo from "../../assets/github/github-mark-white.png";
import linkedinLogo from "../../assets/linkedin/InBug-White.png";
import eoLogo from "../../assets/eo-logo.png";
import styles from "./LinksSection.module.scss";

const links = [
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
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/emmanuel-oudot/",
    displayUrl: "linkedin.com/in/emmanuel-oudot",
    logo: linkedinLogo,
  },
];

export default function LiensSection() {
  return (
    <div className={styles.linksContainer}>
      <h2 className={styles.sectionTitle}>LIENS</h2>
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
