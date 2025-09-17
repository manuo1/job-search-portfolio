import React from "react";
import Udwi from "../../components/Udwi/Udwi";
import Housebrain from "../../components/Housebrain/Housebrain";
import styles from "./Experiences.module.scss";

export default function Experiences() {
  return (
    <div className={styles.experiencesContainer}>
      <h1 className={styles.pageTitle}>Projets & Expériences</h1>
      <Udwi />
      <Housebrain />
    </div>
  );
}
