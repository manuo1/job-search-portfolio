import React from "react";
import styles from "./TechnicalSkillsSection.module.scss";

const skills = [
  {
    category: "Backend",
    lines: [
      ["Python", "Django", "Django REST"],
      ["PostgreSQL", "MySQL", "Redis"],
      ["Celery", "Ruff", "Black", "Pytest"],
    ],
  },
  {
    category: "Frontend",
    lines: [
      ["JavaScript", "React", "Vite"],
      ["Redux", "Zustand", "Tailwind"],
      ["HTML5", "CSS3", "Sass"],
    ],
  },
  {
    category: "DevOps & Outils",
    lines: [
      ["Git", "GitHub Actions", "Docker"],
      ["Sentry", "Datadog"],
      ["Locust", "Gatus", "Flower"],
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
