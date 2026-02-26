import React from "react";
import styles from "./TechnicalSkills.module.scss";

export const technicalSkillsData = [
  {
    category: "Backend",
    items:
      "Python · Django · Django REST Framework (DRF) · API RESTful · OpenAPI/Swagger · JSON Web Token (JWT) · OAuth2 · Celery · Pandas · PostgreSQL · MySQL · Redis · Pytest · Django Silk · Locust · FastAPI (notions) · Flask",
  },
  {
    category: "Architecture",
    items:
      "Event-Driven · Microservices · Clean Architecture · SOLID · Test-Driven Development (TDD) · WebSocket/Real-Time · Sécurité applicative (OWASP, SSL/TLS, JWT, HttpOnly Cookies)",
  },
  {
    category: "DevOps",
    items:
      "Docker · CI/CD Pipeline · Git · Nginx · Linux · Bash · Datadog · Gatus · Systemd · Kubernetes (notions) · AWS (notions) · Azure (notions) · GCP (notions)",
  },
  {
    category: "Frontend",
    items:
      "JavaScript · TypeScript · React · Vite · Redux · Zustand · TailwindCSS · HTML5 · CSS3 · Sass · UX/UI · GraphQL (notions) · Next.js (notions) · Node.js (notions) · Express.js (notions) · Jest (notions)",
  },
  {
    category: "Soft Skills",
    items:
      "Communication inter-équipes · Leadership technique · Adaptabilité · Esprit d'analyse · Orientation produit · Curiosité technique · Agile/Scrum/Kanban · Code Review",
  },
];

export default function TechnicalSkills() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Compétences Techniques</h2>
      {technicalSkillsData.map(({ category, items }) => (
        <div key={category} className={styles.category}>
          <span className={styles.categoryTitle}>{category}</span>
          <span className={styles.items}>{items}</span>
        </div>
      ))}
    </section>
  );
}
