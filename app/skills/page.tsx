import type { Metadata } from "next";
import { profile } from "@/app/lib/profile";
import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiHtml5, SiPython, SiC,
  SiDjango, SiNumpy, SiPandas, SiTensorflow, SiJupyter,
  SiGithub, SiLinux, SiVercel, SiRender,
  SiNotion, SiClaude, SiPostgresql, SiScikitlearn,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import styles from "./skills.module.css";

const skillColors: Record<string, string> = {
  "React": "#61DAFB",
  "Next.js": "#000000",
  "HTML / CSS": "#E34F26",
  "Python": "#3776AB",
  "Django": "#092E20",
  "C言語": "#00599C",
  "NumPy": "#4DABCF",
  "Pandas": "#E70488",
  "TensorFlow": "#FF6F00",
  "Jupyter Notebook": "#F37626",
  "GitHub": "#181717",
  "VSCode": "#007ACC",

  "WSL": "#FCC624",
  "Vercel": "#000000",
  "Render": "#46E3B7",
  "Notion": "#000000",
  "Claude Code": "#D97757",
  "scikit-learn": "#F7931E",
  "Django REST Framework": "#092E20",
  "PostgreSQL": "#4169E1",
};

const skillIcons: Record<string, IconType> = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "HTML / CSS": SiHtml5,
  "Python": SiPython,
  "Django": SiDjango,
  "C言語": SiC,
  "NumPy": SiNumpy,
  "Pandas": SiPandas,
  "TensorFlow": SiTensorflow,
  "Jupyter Notebook": SiJupyter,
  "GitHub": SiGithub,
  "VSCode": TbBrandVscode,
  "WSL": SiLinux,
  "Vercel": SiVercel,
  "Render": SiRender,
  "Notion": SiNotion,
  "Claude Code": SiClaude,
  "Django REST Framework": SiDjango,
  "PostgreSQL": SiPostgresql,
  "scikit-learn": SiScikitlearn,
};

export const metadata: Metadata = {
  title: "Skills",
};

function SkillTags({ items, textClass }: { items: string[]; textClass: string }) {
  const withIcons = items.filter((s) => skillIcons[s]);
  const withoutIcons = items.filter((s) => !skillIcons[s]);
  const sorted = [...withIcons, ...withoutIcons];
  return (
    <>
      {sorted.map((skill) => {
        const Icon = skillIcons[skill];
        return (
          <span key={skill} className={`${styles.tag} ${textClass}`}>
            {Icon && <Icon size={16} color={skillColors[skill]} className={styles.icon} />}
            {skill}
          </span>
        );
      })}
    </>
  );
}

export default function SkillsPage() {
  return (
    <div className={styles.container}>
      <h1 className={`fade-in ${styles.title}`}>Skills</h1>

      <div className={styles.groups}>
        {profile.skills.map((group, i) => (
          <div key={group.category} className={`fade-in-${i + 1}`}>
            <h2 className={styles.sectionTitle}>{group.category}</h2>
            <div className={styles.tags}>
              <SkillTags items={group.items} textClass={styles.tagDark} />
            </div>
            {group.description && (
              <p className={styles.groupDesc}>{group.description}</p>
            )}
          </div>
        ))}

        {/* Currently Learning */}
        <div className={`fade-in-${profile.skills.length + 1}`}>
          <h2 className={styles.sectionTitle}>現在学習中</h2>
          <div className={styles.tags}>
            <SkillTags items={profile.currentlyLearning} textClass={styles.tagMuted} />
          </div>
          <p className={styles.learningDesc}>
            現在は、React / Next.js と Django REST Framework を組み合わせたAPI連携型のWebアプリ開発を重点的に学習しています。{"\n"}今後は、認証機能、DB設計、API設計、データ分析、推薦システムなどを深めていきたいと考えています。
          </p>
        </div>
      </div>
    </div>
  );
}
