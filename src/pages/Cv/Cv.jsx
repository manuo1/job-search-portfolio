import React, { useEffect } from "react";
import PrintButton from "../../components/Cv/PrintButton";
import ProfilePhoto from "../../components/Cv/ProfilePhoto";
import Languages from "../../components/Cv/Languages";
import ContactSection from "../../components/Cv/ContactSection";
import TechnicalSkillsSection from "../../components/Cv/TechnicalSkillsSection";
import SoftSkillsSection from "../../components/Cv/SoftSkillsSection";
import CvHeader from "../../components/Cv/CvHeader";
import ProfileSection from "../../components/Cv/ProfileSection";
import CareerTimelineSection from "../../components/Cv/CareerTimelineSection";

import styles from "./Cv.module.scss";
import printStyles from "./CvPrint.module.scss";

export default function Cv() {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "CV-Emmanuel-Oudot-Developpeur-FullStack";

    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handlePrint = () => {
    setTimeout(() => {
      window.print();
    }, 100);
  };

  // Print with Ctrl+P or Cmd+P
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "p") {
        event.preventDefault();
        handlePrint();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.cvWrapper}>
      <div className={styles.printButton}>
        <PrintButton onClick={handlePrint} />
      </div>
      <div className={`${styles.cvContainer} ${printStyles.cvContainer}`}>
        <div className={`${styles.sidebar} ${printStyles.sidebar}`}>
          <ProfilePhoto />
          <ContactSection />
          <Languages />
          <TechnicalSkillsSection />
          <SoftSkillsSection />
        </div>

        <div className={`${styles.mainContent} ${printStyles.mainContent}`}>
          <CvHeader />
          <ProfileSection />
          <CareerTimelineSection />
          <div className={printStyles.atsKeywords}></div>
        </div>
      </div>
    </div>
  );
}
