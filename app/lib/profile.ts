export const profile = {
  name: "沼田倫",
  title: "学生エンジニア",
  bio: [
  "国立大学法人 岩手大学で情報工学を専攻。情報推薦・行動支援について研究中。",
  "IT系学内カンパニー iFive に社員として所属。Webアプリ開発等を担当しながらプロジェクトに取り組んでいる。",
  "技術を使って課題を構造化し、人の行動や生活をより良くする仕組みを作ることが好き。",
    ],
  github: "numata-rin",
  githubUrl: "https://github.com/numata-rin",
  skills: [
    { category: "フロントエンド", items: ["React", "Next.js", "HTML / CSS"] },
    { category: "バックエンド / 言語", items: ["Python", "C言語"] },
    {
      category: "データサイエンス",
      items: ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "Jupyter Notebook"],
    },
    {
      category: "ツール / インフラ",
      items: ["GitHub", "VSCode", "WSL", "Vercel", "Render", "Notion", "Claude Code"],
    },
  ],
  works: [
    {
      title: "Study Tasks Manager",
      description: "学習タスクを管理するWebアプリ。",
      techs: ["React", "TypeScript", "Vite", "HTML / CSS"],
      url: null as string | null,
      github: null as string | null,
    },
    {
      title: "麻雀点数計算アプリ",
      description:
        "麻雀の点数計算を行うWebアプリ。大学の授業でグループ開発し、PM役として進行・調整を担当。",
      techs: ["Python", "Django", "JavaScript", "HTML / CSS"],
      url: null as string | null,
      github: null as string | null,
    },
    {
      title: "my-portfolio",
      description:
        "自分用のポートフォリオサイトとして作成したアプリ。Claude Code を使用して開発。",
      techs: ["Python", "Django", "JavaScript", "HTML / CSS"],
      url: null as string | null,
      github: null as string | null,
    },
  ],
  education: [
    {
      institution: "国立大学法人 岩手大学",
      detail: "理工学部 システム創成工学科 知能・メディア情報コース",
      period: "2023年4月 〜 2027年3月（卒業予定）",
    },
    {
      institution: "国立大学法人 岩手大学大学院",
      detail: "総合科学研究科（修士課程） 理工学専攻 知能情報コース",
      period: "2027年4月 入学予定",
    },
  ],
  experience: [
    {
      role: "Webアプリ開発担当",
      org: "iFive (岩手大学 学内カンパニー)",
      period: "在籍中",
      description: "社員としてWebアプリの設計・開発を担当。",
    },
  ],
  qualifications: [
    "Python 3 エンジニア認定基礎試験",
    "Python 3 エンジニア認定データ分析試験",
    "統計検定 2級（2024年9月版）",
  ],
};
