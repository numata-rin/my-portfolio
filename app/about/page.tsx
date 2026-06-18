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

        {/* 自己紹介 */}
        <section className="fade-in-1 mb-12">
          <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-5 pb-3 border-b border-gray-300">自己紹介</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="whitespace-pre-line">{paragraph}</p>
            ))}
          </div>
        </section>

        {/* 関心のある分野 */}
        <section className="fade-in-2 mb-12 pt-10">
          <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-5 pb-3 border-b border-gray-300">関心のある分野</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="whitespace-pre-line">キャリアとしてはAI技術を組み込んだプロダクトを開発する「AIエンジニア」、{"\n"}研究分野としては「情報推薦・行動支援」という分野に強い関心があります。</p>
            <p>将来的には、ユーザーの時系列行動履歴や目標情報をもとに、次に取るべき行動を提案する仕組みや、人の意思決定を支援するプロダクトを作りたいと考えています。</p>
          </div>
        </section>

        {/* 開発で大切にしていること */}
        <section className="fade-in-2 mb-12 pt-10">
          <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-5 pb-3 border-b border-gray-300">開発で大切にしていること</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>現在は以下の3つの項目を意識して、日々学習・実装を行っています。</p>
            <ul className="space-y-4 mt-2">
              {[
                {
                  title: "要件定義力",
                  description: "実装したい内容をいかに言語化・構造化するかを常に考えています。",
                },
                {
                  title: "AI活用力",
                  description: "AIに任せる作業や任せ方、指示のプロンプトなどについて日々試行錯誤しています。\nまた、進化が"
                },
                {
                  title: "コミュニケーション力",
                  description: "相手がいる開発では、相手にコミュニケーションコストがかからないように、\n提案なら意図や具体的な提案内容、質問なら疑問点をあらかじめ明確にしておいて資料を準備するなど、\n自分として最大限できる準備をするようにしています。",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="whitespace-pre-line">開発の実装コスト自体は、今日のめざましいAIの進化によって下がると考えています。{"\n"}そこで、「相手の意図を汲み取った要件定義力」とそこに付随する「コミュニケーション力」、{"\n"}「効率の良いAIの使い方」が重要だと考えて日々開発しています。</p>
          </div>
        </section>

        {/* 現在の活動 */}
        <section className="fade-in-3 mb-12 pt-10">
          <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-5 pb-3 border-b border-gray-300">現在の活動</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            人の行動を支援するプロダクト開発者を目指し、以下の3つの活動を行っています。
          </p>
          <div className="space-y-4">
            {profile.activities.map((activity) => (
              <div key={activity.label} className="rounded-xl border border-gray-300 px-6 py-5">
                <p className="text-sm font-semibold mb-2">
                  {activity.label}{" "}
                  <span className="text-gray-400 font-normal">/ {activity.labelEn}</span>
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 今後目指したいこと */}
        <section className="fade-in-4 mb-12 pt-10">
          <h2 className="text-sm text-gray-800 tracking-widest uppercase font-medium mb-5 pb-3 border-b border-gray-300">今後目指したいこと</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="whitespace-pre-line">将来的には、Web開発・データ分析・AIを組み合わせて、{"\n"}「人の意思決定や行動を支援するプロダクト」を開発できるエンジニアを目指しています。</p>
            <p>現在はその土台として、上記の3つの活動を行っています。</p>
          </div>
        </section>
      </div>
    </div>
  );
}
