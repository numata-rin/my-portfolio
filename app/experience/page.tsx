import type { Metadata } from "next";
import { profile } from "@/app/lib/profile";
import styles from "./experience.module.css";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className={styles.container}>
      <h1 className={`fade-in ${styles.title}`}>Experience</h1>

      <section className={`fade-in-1 ${styles.section}`}>
        <h2 className={styles.sectionTitle}>学歴</h2>
        <div className={styles.timeline}>
          {profile.education.map((edu) => (
            <div key={edu.institution} className={styles.entry}>
              <p className={styles.period}>{edu.period}</p>
              <p className={styles.heading}>{edu.institution}</p>
              <p className={styles.subText}>{edu.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`fade-in-2 ${styles.section}`}>
        <h2 className={styles.sectionTitle}>活動歴</h2>
        <div className={styles.timeline}>
          {profile.experience.map((exp) => (
            <div key={exp.org} className={styles.entry}>
              <p className={styles.period}>{exp.period}</p>
              <p className={styles.heading}>{exp.role}</p>
              <p className={styles.subText}>{exp.org}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fade-in-3">
        <h2 className={styles.sectionTitle}>資格</h2>
        <ul className={styles.qualList}>
          {profile.qualifications.map((q) => (
            <li key={q} className={styles.qualItem}>
              <span className={styles.qualBullet} />
              <span className={styles.qualText}>{q}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
