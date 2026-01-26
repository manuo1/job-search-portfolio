import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  const location = useLocation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {location.pathname === "/cv" && (
          <div className={styles.cta}>
            <p>Envie de voir mes réalisations techniques en détail ?</p>
            <Link to="/experiences" className={styles.btn}>
              Consulter mes projets d'ingénierie
            </Link>
          </div>
        )}
        <div className={styles.bottom}>
          <p>© 2026 Emmanuel Oudot — Développeur</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
