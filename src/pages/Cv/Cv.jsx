import React, { useEffect, useCallback } from "react";
import CvHeader from "../../components/Cv/CvHeader";
import ProfileSection from "../../components/Cv/ProfileSection";
import TechnicalSkills from "../../components/Cv/TechnicalSkills";
import CareerTimeline from "../../components/Cv/CareerTimeline";
import Formations from "../../components/Cv/Formations";
import Languages from "../../components/Cv/Languages";
import styles from "./Cv.module.scss";

export default function Cv() {
  useEffect(() => {
    const original = document.title;
    document.title = "CV-Emmanuel-Oudot-Developpeur-FullStack";
    return () => {
      document.title = original;
    };
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
        <CvHeader />
        <div className={styles.cvBody}>
          <ProfileSection />
          <TechnicalSkills />
          <CareerTimeline />
          <Formations />
          <Languages />
        </div>
      </div>
    </div>
  );
}
