import React from "react";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.notfound}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, this page doesn’t exist.</p>
    </div>
  );
}

export default NotFound;
