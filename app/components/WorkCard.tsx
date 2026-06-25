import Link from "next/link";
import type { Work, WorkStatus } from "@/app/lib/works";

const statusLabel: Record<WorkStatus, string> = {
  Completed: "Completed",
  "In Progress": "In Progress",
  Planned: "Planned",
  Prototype: "Prototype",
};

const statusClass: Record<WorkStatus, string> = {
  Completed: "bg-black text-white",
  "In Progress": "bg-gray-700 text-white",
  Planned: "border border-gray-300 text-gray-400",
  Prototype: "bg-gray-100 text-gray-600",
};

type Props = {
  work: Work;
  animationClass?: string;
};

export default function WorkCard({ work, animationClass }: Props) {
  if (work.status === "Planned") {
    return <PlannedWorkCard work={work} animationClass={animationClass} />;
  }

  const displayFeatures = work.features?.slice(0, 3) ?? [];

  return (
    <article className={`${animationClass ?? ""} border border-gray-300 flex items-center gap-4 p-4 min-h-[10.3rem]`}>
      {/* サムネイル - 正方形 */}
      <div className="w-28 h-28 shrink-0 bg-gray-50 border border-gray-100 flex items-center justify-center">
        {work.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-xs text-gray-300 select-none">No Image</span>
        )}
      </div>

      {/* コンテンツ */}
      <div className="flex-1 flex flex-col justify-between min-h-[8.3rem]">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`text-xs px-2 py-0.5 font-medium ${statusClass[work.status]}`}
            >
              {statusLabel[work.status]}
            </span>
          </div>
          <h2 className="text-base font-semibold mb-1.5">{work.title}</h2>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            {work.shortDescription}
          </p>

          {/* 技術タグ */}
          <div className="flex flex-wrap gap-1 mb-3">
            {work.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 border border-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 主な機能（上位3件） */}
          {displayFeatures.length > 0 && (
            <ul className="flex flex-col gap-0.5 mb-3">
              {displayFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
                  <span className="mt-1.5 w-1 h-1 bg-gray-300 rounded-full shrink-0" />
                  {f}
                </li>
              ))}
              {(work.features?.length ?? 0) > 3 && (
                <li className="text-xs text-gray-400 ml-3">
                  他 {(work.features?.length ?? 0) - 3} 件
                </li>
              )}
            </ul>
          )}
        </div>

        {/* リンク */}
        <div className="flex items-center gap-4 flex-wrap">
          {work.githubUrl && (
            <a
              href={work.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline underline-offset-4 text-gray-700 hover:text-black transition-colors"
            >
              GitHub ↗
            </a>
          )}
          <div className="flex items-center gap-2 ml-auto">
            {work.demoUrl && (
              <a
                href={work.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-black text-white hover:bg-gray-800 transition-colors"
              >
                アプリを見る
              </a>
            )}
            <Link
              href={`/works/${work.slug}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-black text-white hover:bg-gray-800 transition-colors"
            >
              詳細を見る
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function PlannedWorkCard({ work, animationClass }: Props) {
  return (
    <article
      className={`${animationClass ?? ""} border border-gray-200 border-dashed py-4 px-5 flex items-start justify-between gap-6`}
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-xs px-2 py-0.5 font-medium ${statusClass[work.status]}`}
          >
            {statusLabel[work.status]}
          </span>
        </div>
        <h3 className="text-base font-medium text-gray-700 mb-1">{work.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          {work.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {work.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 border border-gray-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={`/works/${work.slug}`}
        className="text-sm text-gray-400 hover:text-black transition-colors shrink-0 mt-1"
      >
        詳細 →
      </Link>
    </article>
  );
}
