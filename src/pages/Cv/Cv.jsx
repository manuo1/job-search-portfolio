import React, { useEffect } from "react";
import PrintButton from "../../components/Cv/PrintButton";
import ProfilePhoto from "../../components/Cv/ProfilePhoto";
import PersonalInfoSection from "../../components/Cv/PersonalInfoSection";
import ContactSection from "../../components/Cv/ContactSection";
import TechnicalSkillsSection from "../../components/Cv/TechnicalSkillsSection";
import SoftSkillsSection from "../../components/Cv/SoftSkillsSection";
import LinksSection from "../../components/Cv/LinksSection";
import Header from "../../components/Cv/Header";
import ProfileSection from "../../components/Cv/ProfileSection";
import ExperiencesSection from "../../components/Cv/ExperiencesSection";
import FormationsSection from "../../components/Cv/FormationsSection";

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
          <PersonalInfoSection />
          <ContactSection />
          <TechnicalSkillsSection />
          <SoftSkillsSection />
          <LinksSection />
        </div>

        <div className={`${styles.mainContent} ${printStyles.mainContent}`}>
          <Header />
          <ProfileSection />
          <ExperiencesSection />
          <FormationsSection />
          <div className={printStyles.atsKeywords}></div>
        </div>
      </div>
    </div>
  );
}
