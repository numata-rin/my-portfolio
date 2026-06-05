import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/app/lib/profile";

export const metadata: Metadata = {
  title: "Contact",
};

const topics = [
  "Webアプリ開発に関する長期インターンのご連絡",
  "React / Next.js / Django を用いた開発機会",
  "個人・フリーランスとして受注可能な開発案件のご依頼・ご相談",
  "業務委託・副業としての開発業務に関するお問い合わせ",
  "学内プロジェクトや開発活動に関するご連絡",
  "制作物に関するフィードバック",
];

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="fade-in text-3xl font-bold mb-4">Contact</h1>

      <div className="fade-in-1 space-y-3 text-sm text-gray-500 leading-relaxed mb-12">
        <p>ポートフォリオをご覧いただきありがとうございます。</p>
        <p>Webアプリ開発・データ分析・AI活用に関する長期インターンや開発機会に関心があります。</p>
        <p>また、個人・フリーランスとして、Webアプリケーション開発やシステム構築に関する案件のご依頼も承っております。業務委託や副業としてのご相談につきましても、お気軽にお問い合わせいただければ幸いです。</p>
        <p>制作物や活動内容に関するご連絡がありましたら、以下よりご連絡ください。</p>
      </div>

      <div className="fade-in-2 space-y-3 mb-14">
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 p-4 border border-gray-100 hover:border-gray-300 transition-colors group"
        >
          <span className="text-sm font-medium w-24 shrink-0 text-gray-400 group-hover:text-black transition-colors">
            GitHub
          </span>
          <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
            @{profile.github}
          </span>
          <span className="ml-auto text-gray-300 group-hover:text-black transition-colors text-sm">
            ↗
          </span>
        </a>

        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-6 p-4 border border-gray-100 hover:border-gray-300 transition-colors group"
        >
          <span className="text-sm font-medium w-24 shrink-0 text-gray-400 group-hover:text-black transition-colors">
            Email
          </span>
          <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
            {profile.email}
          </span>
          <span className="ml-auto text-gray-300 group-hover:text-black transition-colors text-sm">
            ↗
          </span>
        </a>

        {profile.sns.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-4 border border-gray-100 hover:border-gray-300 transition-colors group"
          >
            <span className="text-sm font-medium w-24 shrink-0 text-gray-400 group-hover:text-black transition-colors">
              {item.label}
            </span>
            <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
              {item.displayText}
            </span>
            <span className="ml-auto text-gray-300 group-hover:text-black transition-colors text-sm">
              ↗
            </span>
          </a>
        ))}
      </div>

      <div className="fade-in-3 mb-14">
        <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-5 pb-3 border-b border-gray-300">
          ご連絡を歓迎している内容
        </h2>
        <ul className="space-y-3">
          {topics.map((topic) => (
            <li key={topic} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 bg-gray-300 rounded-full shrink-0" />
              <span className="text-sm text-gray-600">{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="fade-in-4">
        <Link
          href="/works"
          className="inline-flex items-center px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          制作物を見る ↗
        </Link>
      </div>
    </div>
  );
}
