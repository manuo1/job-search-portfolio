import React from "react";
import styles from "./ProfileSection.module.scss";

export default function ProfileSection() {
  return (
    <section className={styles.profileContainer}>
      <p className={styles.profileText}>
        <strong>Développeur Full-Stack</strong> passionné, spécialisé en{" "}
        <strong>Python, Django</strong> et <strong>React</strong>. Issu d'une
        première carrière dans l'optique, j'apporte une approche{" "}
        <strong>centrée utilisateur</strong> et une solide compréhension des{" "}
        <strong>besoins métiers</strong>.
      </p>

      <p className={styles.profileText}>
        Je conçois des applications <strong>performantes</strong>,{" "}
        <strong>fiables</strong> et <strong>scalables</strong> dans des
        environnements <strong>techniques exigeants</strong>. Mon expertise
        couvre la <strong>gestion de données</strong>, l'<strong>IoT</strong>,
        l'<strong>optimisation backend</strong> et les{" "}
        <strong>architectures robustes</strong>. J'accorde une grande importance
        à la <strong>clarté</strong>, à l'<strong>efficacité</strong> et à la{" "}
        <strong>collaboration</strong> entre développeurs, produit et métiers.
      </p>
    </section>
  );
}
