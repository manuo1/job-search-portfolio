import React from "react";
import styles from "./PrintButton.module.scss";

export default function PrintButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.printButton} print-hide`}
      title="Imprimer le CV"
    >
      🖨️ Imprimer le CV
    </button>
  );
}
