import type { Metadata } from "next";
import { profile } from "@/app/lib/profile";

export const metadata: Metadata = {
  title: "Works",
};

export default function WorksPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="fade-in text-3xl font-bold mb-12">Works</h1>

      <div className="space-y-0">
        {profile.works.map((work, i) => (
          <article
            key={work.title}
            className={`fade-in-${i + 1} border-t border-gray-100 py-10`}
          >
            <h2 className="text-xl font-semibold mb-3">{work.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {work.techs.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1 border border-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
            {(work.url || work.github) && (
              <div className="flex gap-5">
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4 text-gray-700 hover:text-black"
                  >
                    サイトを見る ↗
                  </a>
                )}
                {work.github && (
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4 text-gray-700 hover:text-black"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
        <div className="border-t border-gray-100" />
      </div>
    </div>
  );
}
