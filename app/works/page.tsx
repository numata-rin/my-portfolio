import type { Metadata } from "next";
import { works } from "@/app/lib/works";
import WorkCard from "@/app/components/WorkCard";
import styles from "./works.module.css";

export const metadata: Metadata = {
  title: "Works",
};

export default function WorksPage() {
  const activeWorks = works.filter((w) => w.status !== "Planned");
  const plannedWorks = works.filter((w) => w.status === "Planned");

  return (
    <div className={styles.container}>
      <h1 className={`fade-in ${styles.title}`}>Works</h1>

      <div className={`fade-in-1 ${styles.intro}`}>
        <p>
          個人開発、授業でのグループ開発、学内カンパニーでの活動を通して制作したWebアプリやプロトタイプをまとめています。
        </p>
        <p>
          各制作物では、使用技術だけでなく、開発背景・主な機能・担当範囲・工夫した点・今後の改善予定も整理しています。
        </p>
      </div>

      {/* メイン制作物 */}
      <div className={`fade-in-2 ${styles.mainWorks}`}>
        {activeWorks.map((work, i) => (
          <WorkCard
            key={work.slug}
            work={work}
            animationClass={`fade-in-${i + 2}`}
          />
        ))}
      </div>

      {/* 現在制作中 */}
      {plannedWorks.length > 0 && (
        <div className="fade-in-4">
          <h2 className={styles.sectionTitle}>現在制作中</h2>
          <div className={styles.plannedList}>
            {plannedWorks.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
