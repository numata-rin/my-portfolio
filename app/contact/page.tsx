import type { Metadata } from "next";
import { profile } from "@/app/lib/profile";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="fade-in text-3xl font-bold mb-4">Contact</h1>
      <p className="fade-in-1 text-gray-500 text-sm mb-12">
        お問い合わせはSNSよりご連絡ください。
      </p>

      <div className="fade-in-2 space-y-3">
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 p-4 border border-gray-100 hover:border-gray-300 transition-colors group"
        >
          <span className="text-sm font-medium w-24 text-gray-400 group-hover:text-black transition-colors">
            GitHub
          </span>
          <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
            @{profile.github}
          </span>
          <span className="ml-auto text-gray-300 group-hover:text-black transition-colors text-sm">
            ↗
          </span>
        </a>
      </div>
    </div>
  );
}
