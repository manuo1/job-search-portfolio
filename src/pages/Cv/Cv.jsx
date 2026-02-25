import React, { useEffect, useCallback } from "react";
import LeftSide from "../../components/Cv/LeftSide/LeftSide";
import RightSide from "../../components/Cv/RightSide/RightSide";
import styles from "./Cv.module.scss";

export default function Cv() {
  useEffect(() => {
    const original = document.title;
    document.title = "CV-Emmanuel-Oudot-Developpeur-FullStack";
    return () => { document.title = original; };
  }, []);

  const handlePrint = useCallback(() => {
    setTimeout(() => window.print(), 100);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault();
        handlePrint();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [handlePrint]);

  return (
    <div className={styles.cvWrapper}>
      <div className={styles.toolbar}>
        <button className={styles.printBtn} onClick={handlePrint}>
          🖨️ Imprimer le CV
        </button>
      </div>
      <div className={styles.cvContainer}>
        <aside className={styles.leftSide}>
          <LeftSide />
        </aside>
        <main className={styles.rightSide}>
          <RightSide />
        </main>
      </div>
    </div>
  );
}
