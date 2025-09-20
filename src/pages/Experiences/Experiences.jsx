import React, { useState, useEffect } from "react";
import Udwi from "../../components/Udwi/Udwi";
import Housebrain from "../../components/Housebrain/Housebrain";
import styles from "./Experiences.module.scss";

export default function Experiences() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);
      setShowStickyNav(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.experiencesContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Projets & Expériences</h1>
        <nav className={styles.projectNav}>
          <a href="#housebrain" className={styles.navLink}>
            <div className={styles.navCard}>
              <h3>HouseBrain</h3>
              <p>Système domotique IoT</p>
              <span className={styles.tech}>React • Django • Hardware</span>
            </div>
          </a>
          <a href="#udwi" className={styles.navLink}>
            <div className={styles.navCard}>
              <h3>UDWI</h3>
              <p>[Description courte]</p>
              <span className={styles.tech}>[Technologies]</span>
            </div>
          </a>
        </nav>
      </header>

      {showStickyNav && (
        <div className={styles.stickyNav}>
          <a href="#housebrain" className={styles.stickyLink}>
            HouseBrain
          </a>
          <a href="#udwi" className={styles.stickyLink}>
            UDWI
          </a>
          <button onClick={scrollToTop} className={styles.stickyLink}>
            ↑ Haut de page
          </button>
        </div>
      )}

      <section id="housebrain" className={styles.projectSection}>
        <Housebrain />
      </section>

      <section id="udwi" className={styles.projectSection}>
        <Udwi />
      </section>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={styles.scrollTopButton}
          aria-label="Retour en haut"
        >
          ↑
        </button>
      )}
    </div>
  );
}
