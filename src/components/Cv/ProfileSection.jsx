import React from "react";
import styles from "./ProfileSection.module.scss";

export default function ProfileSection() {
  return (
    <section className={styles.profileContainer}>
      <p className={styles.profileText}>
        <strong>Développeur passionné</strong>, je répond depuis plus de 10 ans
        à des problèmes concrets par des applications{" "}
        <strong>performantes</strong>,<strong> fiables</strong> et{" "}
        <strong>scalables</strong>.
      </p>

      <p className={styles.profileText}>
        J'intègre naturellement l'<strong>IA</strong> dans mon workflow pour
        maximiser l'efficacité et privilégie une{" "}
        <strong>communication claire</strong> et{" "}
        <strong>fluide entre équipes</strong> afin de garantir la réussite des
        projets.
      </p>
    </section>
  );
}
