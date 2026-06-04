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
          <h1 className="fade-in-2 text-6xl font-bold tracking-tight mb-1">
            {profile.name}
          </h1>
          <p className="fade-in-2 text-sm tracking-wide text-gray-400 mb-5">
            {profile.nameEn}
          </p>
          <p className="fade-in-3 text-base text-gray-700 font-medium leading-relaxed mb-3">
            {profile.catchCopy}
          </p>
          <div className="fade-in-3 space-y-2 mb-6">
            {profile.heroBio.map((para, i) => (
              <p key={i} className="text-sm text-gray-500 leading-relaxed max-w-xl">
                {para}
              </p>
            ))}
          </div>
          <div className="fade-in-4 flex flex-wrap gap-4 mb-8">
            <Link
              href="/works"
              className="inline-flex items-center px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              制作物を見る ↗
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              自己紹介を見る ↗
            </Link>
            <Link
              href="/skills"
              className="inline-flex items-center px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              スキルを見る ↗
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              経歴を見る ↗
            </Link>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              GitHub を見る ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
