import React from "react";
import styles from "./TechnicalSkillsSection.module.scss";

const skills = [
  {
    category: "Backend",
    lines: [
      ["Python", "Django"],
      ["PostgreSQL", "MySQL", "Redis"],
      ["Celery", "Async tasks", "Pytest"],
    ],
  },
  {
    category: "Frontend",
    lines: [
      ["JavaScript", "React", "Vite"],
      ["Redux", "Zustand", "TailwindCSS"],
      ["HTML5", "CSS3", "Sass"],
    ],
  },
  {
    category: "DevOps & Outils",
    lines: [
      ["Git", "GitHub Actions", "Docker"],
      ["CI/CD", "Monitoring", "Sentry", "Datadog"],
      ["Locust", "Gatus"],
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
