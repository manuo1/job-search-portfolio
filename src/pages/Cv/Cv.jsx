import React from "react";
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

export default function Cv() {
  return (
    <div className={styles.cvContainer}>
      <div className={styles.sidebar}>
        <ProfilePhoto />
        <PersonalInfoSection />
        <ContactSection />
        <TechnicalSkillsSection />
        <SoftSkillsSection />
        <LinksSection />
      </div>

      <div className={styles.mainContent}>
        <Header />
        <ProfileSection />
        <ExperiencesSection />
        <FormationsSection />
      </div>
    </div>
  );
}
