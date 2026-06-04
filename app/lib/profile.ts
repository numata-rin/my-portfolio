export const profile = {
  name: "沼田 倫",
  nameEn: "Rin Numata",
  title: "学生エンジニア / Web Developer",
  catchCopy: "「課題を構造化し、AI技術で人の行動・意思決定を支えるプロダクト開発者」を目指す学生エンジニア。",
  heroBio: [
    "人の行動や意思決定を支援するプロダクト開発者を目指し、",
    "・大学での研究",
    "・学内カンパニー",
    "・個人開発",
    "という3つの活動を行っています。"
  ],
  bio: [
    "岩手大学 理工学部 システム創成工学科 知能メディア情報コース にて情報工学を学びながら、\nWebアプリ開発・データ分析・情報推薦などに関心を持って学習しています。",
    "React / Next.js / Django / Python などを用いた個人開発に取り組み、\n学んだ技術を実際のアプリケーションとして形にする経験を現在進行形で積んでいます。",
    "現在は情報推薦・行動支援・学習支援の分野に関心があり、\nLLMを用いて人の学習や行動を支援することについての研究を行っています。",
  ],
  activities: [
    {
      label: "研究",
      labelEn: "Research",
      description: "情報推薦・行動支援・学習支援に関心を持ち、個人の学習データをもとに次の行動を提案する仕組みをLLMを用いて性能向上を測る研究を行っています。",
    },
    {
      label: "個人開発",
      labelEn: "Development",
      description: "主に、 React / Next.js / Django を用いてWebアプリ開発に取り組んでいます。アプリの構成とAIを使った実装についての部分を強く意識して開発しています。",
    },
    {
      label: "学内カンパニー",
      labelEn: "Campus Company",
      description: "岩手大学内の学内カンパニー iFive に社員として所属し、Webアプリ開発担当として活動しています。要件整理・設計・実装・改善の流れや、開発する上でのドキュメント整理などを就職した後の実務を意識しながら経験しています。",
    },
  ],
  github: "numata-rin",
  githubUrl: "https://github.com/numata-rin",
  email: "your-email@example.com",
  sns: [
    { label: "X", displayText: "@username", url: "https://x.com/username" },
    { label: "Wantedly", displayText: "@username", url: "https://www.wantedly.com/id/username" },
    { label: "Zenn", displayText: "@username", url: "https://zenn.dev/username" },
  ],
  skills: [
    {
      category: "フロントエンド",
      items: ["React", "Next.js", "HTML / CSS"],
      description: "Reactでは、コンポーネント分割、状態管理、フォーム処理、LocalStorage保存などの機能を持つWebアプリを実装しました。\nNext.jsでは、ポートフォリオサイトや学内カンパニーでのある商品のプロトタイプ開発を通して、ページ構成やRenderへのデプロイを経験しています。",
    },
    {
      category: "バックエンド / 言語",
      items: ["Python", "Django", "C言語"],
      description: "Djangoでは、MVCモデルとコンポーネントの概念・基礎などについて学習しました。\n今後はDjango REST Frameworkを用いたAPI設計や、React / Next.jsとの連携を重点的に学習していく予定です。\nC言語では、プログラミングの基礎を学び、ポインタやファイル操作・メモリの管理などの重要な概念を学びました。",
    },
    {
      category: "データサイエンス",
      items: ["NumPy", "Pandas", "Matplotlib", "scikit-learn", "Jupyter Notebook"],
      description: "Pythonを用いたデータ分析・機械学習の基礎を学習しています。\nNumPy / Pandasによるデータ処理、Matplotlibによる可視化の基礎に取り組んでいます。\n将来的には、情報推薦・行動支援・学習支援への応用を目指しています。",
    },
    {
      category: "ツール / インフラ",
      items: ["GitHub", "VSCode", "WSL", "Vercel", "Render", "Notion", "Claude Code"],
      description: "GitHubを用いたバージョン管理、個人開発ではVercel・学内カンパニーではRenderを用いたデプロイ、\nNotionを用いたタスク管理・要件整理・チームでのプロジェクト管理を経験しています。",
    },
  ],
  currentlyLearning: [
    "Django REST Framework",
    "TensorFlow",
    "推薦システム",
    "API設計",
    "DB設計",
    "PostgreSQL",
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
      role: "iFive  [岩手大学 学内カンパニー]",
      org: "社員  [開発担当]",
      period: "2026年5月 ～ ",
      description: "社員としてWebアプリの設計・開発を担当。",
    },
  ],
  qualifications: [
    "Python 3 エンジニア認定基礎試験",
    "Python 3 エンジニア認定データ分析試験",
    "統計検定 2級（2024年9月版）",
  ],
};
