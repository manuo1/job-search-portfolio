import React from "react";
import profilePhoto from "../../../assets/profile.jpg";
import styles from "./ProfilePhoto.module.scss";

export default function ProfilePhoto() {
  return (
    <div className={styles.container}>
      <img
        src={profilePhoto}
        alt="Emmanuel Oudot, Développeur Backend Senior Full-Stack"
        className={styles.photo}
      />
    </div>
  );
}
