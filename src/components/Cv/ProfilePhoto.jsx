import React from "react";
import styles from "./ProfilePhoto.module.scss";
import profilePhoto from "../../assets/profile.jpg";

export default function ProfilePhoto() {
  return (
    <div className={styles.photoContainer}>
      <img
        src={profilePhoto}
        alt="Photo Emmanuel Oudot"
        className={styles.profilePhoto}
      />
    </div>
  );
}
