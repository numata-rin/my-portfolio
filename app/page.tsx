import Link from "next/link";
import { profile } from "@/app/lib/profile";
import HeroImage from "@/app/components/HeroImage";

export default function Home() {
  return (
    <section className="flex flex-col">
      <HeroImage />
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4 flex-1 flex items-center w-full">
        <div className="w-full">
        <p className="fade-in-1 text-xs text-gray-400 mb-2 tracking-widest uppercase">
          {profile.title}
        </p>
        <h1 className="fade-in-2 text-6xl font-bold tracking-tight mb-4">
          {profile.name}
        </h1>
        <p className="fade-in-3 text-lg text-gray-500 leading-relaxed max-w-xl mb-6 whitespace-pre-line">
          {profile.bio[0]}
        </p>
        <div className="fade-in-4 flex flex-wrap gap-4">
          <Link
            href="/works"
            className="inline-flex items-center px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Works を見る
          </Link>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 border border-gray-200 text-sm font-medium hover:border-gray-400 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
