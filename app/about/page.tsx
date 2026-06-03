import type { Metadata } from "next";
import { profile } from "@/app/lib/profile";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="max-w-3xl mx-auto px-6 py-12 w-full">
      <h1 className="fade-in text-3xl font-bold mb-12">About</h1>

      <div className="fade-in-1 space-y-5 text-gray-600 leading-relaxed mb-12">
        {profile.bio.map((paragraph, i) => (
          <p key={i} className="whitespace-pre-line">{paragraph}</p>
        ))}
      </div>

      <div className="fade-in-2 border-t border-gray-100 pt-10">
        <dl className="space-y-4">
          <div className="flex gap-8">
            <dt className="text-xs text-gray-400 tracking-widest uppercase w-24 shrink-0 pt-0.5">
              GitHub
            </dt>
            <dd>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline underline-offset-4"
              >
                @{profile.github}
              </a>
            </dd>
          </div>
        </dl>
      </div>
      </div>
    </div>
  );
}
