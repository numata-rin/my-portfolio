import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/app/lib/profile";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
};

const topics = [
  "Webアプリ開発に関する長期インターンのご連絡",
  "React / Next.js / Django を用いた開発機会",
  "個人・フリーランスとして受注可能な開発案件のご依頼・ご相談",
  "業務委託・副業としての開発業務に関するお問い合わせ",
  "学内プロジェクトや開発活動に関するご連絡",
  "制作物に関するフィードバック",
];

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={`fade-in ${styles.title}`}>Contact</h1>

      <div className={`fade-in-1 ${styles.intro}`}>
        <p>ポートフォリオをご覧いただきありがとうございます。</p>
        <p>Webアプリ開発・データ分析・AI活用に関する長期インターンや開発機会に関心があります。</p>
        <p>また、個人・フリーランスとして、Webアプリケーション開発やシステム構築に関する案件のご依頼も承っております。業務委託や副業としてのご相談につきましても、お気軽にお問い合わせいただければ幸いです。</p>
        <p>制作物や活動内容に関するご連絡がありましたら、以下よりご連絡ください。</p>
      </div>

      <div className={`fade-in-2 ${styles.links}`}>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span className={styles.linkLabel}>GitHub</span>
          <span className={styles.linkValue}>@{profile.github}</span>
          <span className={styles.linkArrow}>↗</span>
        </a>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span className={styles.linkLabel}>Email</span>
          <span className={styles.linkValue}>{profile.email}</span>
          <span className={styles.linkArrow}>↗</span>
        </a>

        {profile.sns.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.linkLabel}>{item.label}</span>
            <span className={styles.linkValue}>{item.displayText}</span>
            <span className={styles.linkArrow}>↗</span>
          </a>
        ))}
      </div>

      <div className={`fade-in-3 ${styles.topics}`}>
        <h2 className={styles.sectionTitle}>ご連絡を歓迎している内容</h2>
        <ul className={styles.topicList}>
          {topics.map((topic) => (
            <li key={topic} className={styles.topicItem}>
              <span className={styles.topicBullet} />
              <span className={styles.topicText}>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="fade-in-4">
        <Link href="/works" className={styles.cta}>
          制作物を見る ↗
        </Link>
      </div>
    </div>
  );
}
