import type { Metadata } from "next";
import { profile } from "@/app/lib/profile";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="fade-in text-3xl font-bold mb-12">Experience</h1>

      <section className="fade-in-1 mb-14">
        <h2 className="text-xs text-gray-400 tracking-widest uppercase mb-6">
          学歴
        </h2>
        <div className="space-y-6">
          {profile.education.map((edu) => (
            <div
              key={edu.institution}
              className="border-l-2 border-gray-200 pl-5"
            >
              <p className="text-xs text-gray-400 mb-1">{edu.period}</p>
              <p className="font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500 mt-0.5">{edu.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fade-in-2 mb-14">
        <h2 className="text-xs text-gray-400 tracking-widest uppercase mb-6">
          活動歴
        </h2>
        <div className="space-y-6">
          {profile.experience.map((exp) => (
            <div key={exp.org} className="border-l-2 border-gray-200 pl-5">
              <p className="text-xs text-gray-400 mb-1">{exp.period}</p>
              <p className="font-medium">{exp.role}</p>
              <p className="text-sm text-gray-500 mt-0.5">{exp.org}</p>
              <p className="text-sm text-gray-600 mt-1.5">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fade-in-3">
        <h2 className="text-xs text-gray-400 tracking-widest uppercase mb-6">
          資格
        </h2>
        <ul className="space-y-3">
          {profile.qualifications.map((q) => (
            <li key={q} className="flex items-center gap-3">
              <span className="w-1 h-1 bg-gray-300 rounded-full shrink-0" />
              <span className="text-sm text-gray-700">{q}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
