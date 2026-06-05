import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/app/lib/works";
import type { WorkStatus } from "@/app/lib/works";

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  return { title: work ? `${work.title} — Works` : "Works" };
}

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

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* 戻るリンク */}
      <Link
        href="/works"
        className="fade-in inline-flex items-center gap-1 text-sm text-gray-400 hover:text-black transition-colors mb-12"
      >
        ← Works 一覧へ戻る
      </Link>

      {/* ヘッダー */}
      <div className="fade-in-1 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs px-2 py-0.5 font-medium ${statusClass[work.status]}`}>
            {statusLabel[work.status]}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
        <p className="text-gray-600 leading-relaxed">{work.shortDescription}</p>
      </div>

      {/* サムネイル */}
      {work.status !== "Planned" && (
        <div className="fade-in-2 mb-12 border border-gray-100 bg-gray-50 h-56 flex items-center justify-center">
          {work.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={work.image}
              alt={work.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm text-gray-300 select-none">No Image</span>
          )}
        </div>
      )}

      <div className="fade-in-3 space-y-10">
        {/* 使用技術 */}
        <section>
          <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-4 pb-3 border-b border-gray-200">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {work.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1 border border-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 開発背景 */}
        {work.background && (
          <section>
            <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-4 pb-3 border-b border-gray-200">
              開発背景
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">{work.background}</p>
          </section>
        )}

        {/* 主な機能 */}
        {work.features && work.features.length > 0 && (
          <section>
            <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-4 pb-3 border-b border-gray-200">
              主な機能
            </h2>
            <ul className="space-y-2">
              {work.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-gray-300 rounded-full shrink-0" />
                  <span className="text-sm text-gray-600">{f}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 担当範囲 */}
        {work.role && (
          <section>
            <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-4 pb-3 border-b border-gray-200">
              担当範囲
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">{work.role}</p>
          </section>
        )}

        {/* 工夫した点 */}
        {work.points && (
          <section>
            <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-4 pb-3 border-b border-gray-200">
              工夫した点
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">{work.points}</p>
          </section>
        )}

        {/* 今後の改善 */}
        {work.futureImprovements && (
          <section>
            <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-4 pb-3 border-b border-gray-200">
              今後の改善予定
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {work.futureImprovements}
            </p>
          </section>
        )}

        {/* リンク */}
        {(work.githubUrl || work.demoUrl) && (
          <section>
            <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-4 pb-3 border-b border-gray-200">
              Links
            </h2>
            <div className="flex gap-5">
              {work.githubUrl && (
                <a
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-4 text-gray-700 hover:text-black transition-colors"
                >
                  GitHub ↗
                </a>
              )}
              {work.demoUrl && (
                <a
                  href={work.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-4 text-gray-700 hover:text-black transition-colors"
                >
                  Demo ↗
                </a>
              )}
            </div>
          </section>
        )}
      </div>

      {/* フッターナビ */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <Link
          href="/works"
          className="text-sm text-gray-400 hover:text-black transition-colors"
        >
          ← Works 一覧へ戻る
        </Link>
      </div>
    </div>
  );
}
