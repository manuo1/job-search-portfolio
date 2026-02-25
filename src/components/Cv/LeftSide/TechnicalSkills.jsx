import React from "react";
import styles from "./TechnicalSkills.module.scss";

export const technicalSkillsData = [
  {
    category: "Backend",
    items: [
      "Python · Django · Django REST Framework (DRF)",
      "PostgreSQL · MySQL · Redis (Inter-Process Communication / Cache)",
      "Celery · Tâches asynchrones · Pytest · Django Silk",
    ],
  },
  {
    category: "Architecture & DevOps",
    items: [
      "Event-Driven · Microservices · Test-Driven Development (TDD)",
      "Docker · CI/CD · Monitoring · Datadog",
      "Nginx · SSL/TLS · Linux · Bash · Git",
    ],
  },
  {
    category: "Frontend",
    items: [
      "JavaScript · React · Vite · TypeScript",
      "Redux · Zustand · TailwindCSS",
      "HTML5 · CSS3 · Sass · UX/UI",
    ],
  },
];

export default function TechnicalSkills() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Compétences techniques</h2>
      {technicalSkillsData.map(({ category, items }) => (
        <div key={category} className={styles.category}>
          <p className={styles.categoryTitle}>{category}</p>
          <ul className={styles.itemsList}>
            {items.map((item, i) => <li key={i} className={styles.item}>{item}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
