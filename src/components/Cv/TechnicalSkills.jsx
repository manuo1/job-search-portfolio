import React from "react";
import styles from "./TechnicalSkills.module.scss";

export default function TechnicalSkills() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Compétences Techniques :</h2>

      <div className={styles.category}>
        <span className={styles.categoryTitle}>Backend</span>
        <span className={styles.items}>
          Python · Django · Django REST Framework (DRF) · API RESTful ·
          OpenAPI/Swagger · JSON Web Token (JWT) · OAuth2 · Celery · Pandas ·
          PostgreSQL · MySQL · Redis · Pytest · Django Silk · Locust · FastAPI
          (notions) · Flask
        </span>
      </div>

      <div className={styles.category}>
        <span className={styles.categoryTitle}>Architecture</span>
        <span className={styles.items}>
          Event-Driven · Microservices · Clean Architecture · SOLID ·
          Test-Driven Development (TDD) · WebSocket/Real-Time · Sécurité
          applicative (OWASP, SSL/TLS, JWT, HttpOnly Cookies)
        </span>
      </div>

      <div className={styles.category}>
        <span className={styles.categoryTitle}>DevOps</span>
        <span className={styles.items}>
          Docker · CI/CD Pipeline · Git · Nginx · Linux · Bash · Datadog · Gatus
          · Systemd · Kubernetes (notions) · AWS (notions) · Azure (notions) ·
          GCP (notions)
        </span>
      </div>

      <div className={styles.category}>
        <span className={styles.categoryTitle}>Frontend</span>
        <span className={styles.items}>
          JavaScript · TypeScript · React · Vite · Redux · Zustand · TailwindCSS
          · HTML5 · CSS3 · Sass · UX/UI · GraphQL (notions) · Next.js (notions)
          · Node.js (notions) · Express.js (notions) · Jest (notions)
        </span>
      </div>

      <div className={styles.category}>
        <span className={styles.categoryTitle}>Soft Skills</span>
        <span className={styles.items}>
          Communication inter-équipes · Leadership technique · Adaptabilité ·
          Esprit d'analyse · Orientation produit · Curiosité technique ·
          Agile/Scrum/Kanban · Code Review
        </span>
      </div>
    </section>
  );
}
