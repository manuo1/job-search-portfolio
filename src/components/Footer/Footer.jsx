import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  const location = useLocation();

  const isCvPage = location.pathname === "/cv" || location.pathname === "/";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {isCvPage && (
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
