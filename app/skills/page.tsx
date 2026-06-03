import type { Metadata } from "next";
import { profile } from "@/app/lib/profile";
import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiHtml5, SiPython, SiC,
  SiNumpy, SiPandas, SiTensorflow, SiJupyter,
  SiGithub, SiVscodium, SiLinux, SiVercel, SiRender,
  SiNotion, SiClaude,
} from "react-icons/si";

const skillColors: Record<string, string> = {
  "React": "#61DAFB",
  "Next.js": "#000000",
  "HTML / CSS": "#E34F26",
  "Python": "#3776AB",
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
};

const skillIcons: Record<string, IconType> = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "HTML / CSS": SiHtml5,
  "Python": SiPython,
  "C言語": SiC,
  "NumPy": SiNumpy,
  "Pandas": SiPandas,
  "TensorFlow": SiTensorflow,
  "Jupyter Notebook": SiJupyter,
  "GitHub": SiGithub,
  "VSCode": SiVscodium,
  "WSL": SiLinux,
  "Vercel": SiVercel,
  "Render": SiRender,
  "Notion": SiNotion,
  "Claude Code": SiClaude,
};

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="fade-in text-3xl font-bold mb-12">Skills</h1>

      <div className="space-y-10">
        {profile.skills.map((group, i) => (
          <div key={group.category} className={`fade-in-${i + 1}`}>
            <h2 className="text-xs text-gray-400 tracking-widest uppercase mb-4">
              {group.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const Icon = skillIcons[skill];
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-200 text-gray-700"
                  >
                    {skill}
                    {Icon && <Icon size={16} color={skillColors[skill]} className="shrink-0" />}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
