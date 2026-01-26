import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.brand}>Emmanuel Oudot</h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/cv"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                CV
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experiences"
                className={({ isActive }) =>
                  `${isActive ? styles.active : ""} ${styles.highlight}`
                }
              >
                Projets & Expériences
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
