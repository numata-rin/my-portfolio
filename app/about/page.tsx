import type { Metadata } from "next";
import { profile } from "@/app/lib/profile";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={`fade-in ${styles.title}`}>About</h1>

        {/* 自己紹介 */}
        <section className={`fade-in-1 ${styles.section}`}>
          <h2 className={styles.sectionTitle}>自己紹介</h2>
          <div className={styles.proseLg}>
            {profile.bio.map((paragraph, i) => (
              <p key={i} className={styles.preLine}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* 関心のある分野 */}
        <section className={`fade-in-2 ${styles.sectionSpaced}`}>
          <h2 className={styles.sectionTitle}>関心のある分野</h2>
          <div className={styles.prose}>
            <p className={styles.preLine}>キャリアとしてはAI技術を組み込んだプロダクトを開発する「AIエンジニア」、{"\n"}研究分野としては「情報推薦・行動支援」という分野に強い関心があります。</p>
            <p>将来的には、ユーザーの時系列行動履歴や目標情報をもとに、次に取るべき行動を提案する仕組みや、人の意思決定を支援するプロダクトを作りたいと考えています。</p>
          </div>
        </section>

        {/* 開発で大切にしていること */}
        <section className={`fade-in-2 ${styles.sectionSpaced}`}>
          <h2 className={styles.sectionTitle}>開発で大切にしていること</h2>
          <div className={styles.prose}>
            <p>現在は以下の3つの項目を意識して、日々学習・実装を行っています。</p>
            <ul className={styles.list}>
              {[
                {
                  title: "要件定義力",
                  description: "実装したい内容をいかに言語化・構造化するかを常に考えています。",
                },
                {
                  title: "AI活用力",
                  description: "AIに任せる作業や任せ方、AIツールの調査などについて日々試行錯誤しています。\nまた、技術の発展が著しいAI分野の情報をいち早く取得できるように、\nAIニュースの素早いキャッチアップを心掛けています。"
                },
                {
                  title: "コミュニケーション力",
                  description: "相手がいる開発では、相手にコミュニケーションコストがかからないように、\n提案なら意図や具体的な提案内容、質問なら疑問点をあらかじめ明確にしておいて資料を準備するなど、\n自分として最大限できる準備をするようにしています。",
                },
              ].map((item) => (
                <li key={item.title} className={styles.listItem}>
                  <span className={styles.bullet} />
                  <div>
                    <p className={styles.itemTitle}>{item.title}</p>
                    <p className={styles.itemDesc}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className={styles.preLine}>開発の実装コスト自体は、今日のめざましいAIの進化によって下がると考えています。{"\n"}そこで、「相手の意図を汲み取った要件定義力」とそこに付随する「コミュニケーション力」、{"\n"}「効率の良いAIの使い方」が重要だと考えて日々開発しています。</p>
          </div>
        </section>

        {/* 現在の活動 */}
        <section className={`fade-in-3 ${styles.sectionSpaced}`}>
          <h2 className={styles.sectionTitle}>現在の活動</h2>
          <p className={styles.lead}>
            人の行動を支援するプロダクト開発者を目指し、以下の3つの活動を行っています。
          </p>
          <div className={styles.stack}>
            {profile.activities.map((activity) => (
              <div key={activity.label} className={styles.card}>
                <p className={styles.cardTitle}>
                  {activity.label}{" "}
                  <span className={styles.cardTitleSub}>/ {activity.labelEn}</span>
                </p>
                <p className={styles.cardDesc}>{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 今後目指したいこと */}
        <section className={`fade-in-4 ${styles.sectionSpaced}`}>
          <h2 className={styles.sectionTitle}>今後目指したいこと</h2>
          <div className={styles.prose}>
            <p className={styles.preLine}>将来的には、Web開発・データ分析・AIを組み合わせて、{"\n"}「人の意思決定や行動を支援するプロダクト」を開発できるエンジニアを目指しています。</p>
            <p>現在はその土台として、上記の3つの活動を行っています。</p>
          </div>
        </section>
      </div>
    </div>
  );
}
