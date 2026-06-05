import type { Metadata } from "next";
import { works } from "@/app/lib/works";
import WorkCard from "@/app/components/WorkCard";

export const metadata: Metadata = {
  title: "Works",
};

export default function WorksPage() {
  const activeWorks = works.filter((w) => w.status !== "Planned");
  const plannedWorks = works.filter((w) => w.status === "Planned");

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="fade-in text-3xl font-bold mb-4">Works</h1>

      <div className="fade-in-1 space-y-2 text-sm text-gray-500 leading-relaxed mb-14">
        <p>
          個人開発、授業でのグループ開発、学内カンパニーでの活動を通して制作したWebアプリやプロトタイプをまとめています。
        </p>
        <p>
          各制作物では、使用技術だけでなく、開発背景・主な機能・担当範囲・工夫した点・今後の改善予定も整理しています。
        </p>
      </div>

      {/* メイン制作物 */}
      <div className="fade-in-2 space-y-4 mb-16">
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
          <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-5 pb-3 border-b border-gray-300">
            現在制作中
          </h2>
          <div className="space-y-3">
            {plannedWorks.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
