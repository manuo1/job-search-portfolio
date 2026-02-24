import React from "react";
import styles from "./TechnicalSkillsSection.module.scss";

const skills = [
  {
    category: "Backend",
    lines: [
      ["Python", "Django", "DRF"],
      ["PostgreSQL", "MySQL", "Redis (IPC/Cache)"],
      ["Celery", "Async tasks", "Pytest", "Silk"],
    ],
  },
  {
    category: "Architecture & DevOps",
    lines: [
      ["Event-Driven", "Microservices", "TDD"],
      ["Docker", "CI/CD", "Monitoring", "Datadog"],
      ["Nginx", "SSL/TLS", "Linux", "Bash"],
    ],
  },
  {
    category: "Frontend",
    lines: [
      ["JavaScript", "React", "Vite"],
      ["Redux", "Zustand", "TailwindCSS"],
      ["HTML5", "CSS3", "Sass", "UX/UI"],
    ],
  },
];

export default function TechnicalSkillsSection() {
  return (
    <div className={styles.technicalSkillsContainer}>
      <h2 className={styles.sectionTitle}>COMPÉTENCES TECHNIQUES</h2>
      {skills.map((skill) => (
        <div key={skill.category} className={styles.skillsCategory}>
          <div className={styles.skillsCategoryTitle}>{skill.category}</div>
          <div className={styles.skillsList}>
            {skill.lines.map((line, i) => (
              <div key={i}>{line.join(" • ")}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
