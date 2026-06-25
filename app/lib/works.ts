export type WorkStatus = "Completed" | "In Progress" | "Planned" | "Prototype";

export type Work = {
  slug: string;
  title: string;
  shortDescription: string;
  background?: string;
  features?: string[];
  techStack: string[];
  role?: string;
  points?: string;
  futureImprovements?: string;
  githubUrl?: string | null;
  demoUrl?: string | null;
  image?: string | null;
  status: WorkStatus;
};

export const works: Work[] = [

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    slug: "study-tasks-manager",
    title: "Study Tasks Manager",
    shortDescription:
      "学習タスクを追加・表示・完了切り替え・削除できるReact製のタスク管理アプリです。",
    background:
      "学習計画を自分で管理する中で、タスクを可視化し、学習の継続を支援する仕組みを作ることを目的に開発しました。Reactの基礎であるコンポーネント分割・状態管理・フォーム処理・LocalStorage保存を実践するための個人開発アプリとして制作しました。",
    features: [
      "タスクの追加",
      "タスク一覧表示",
      "完了状態の切り替え",
      "タスク削除",
      "LocalStorageによるデータ保存",
    ],
    techStack: ["React", "TypeScript", "Vite", "LocalStorage", "GitHub", "Vercel"],
    role: "個人開発として、要件整理・設計・実装・デプロイまでを全て担当しました。",
    points:
      "コンポーネントを役割ごとに分割し、タスク一覧・追加フォーム・各タスク項目の責務が分かりやすくなるよう設計しました。LocalStorageを用いてブラウザを更新してもタスクが保持されるようにし、実際に使えるアプリとしての基本機能を整えました。",
    futureImprovements:
      "今後は、Django REST FrameworkやNext.jsと連携し、ログイン機能・DB保存・学習履歴の分析機能を追加する予定です。将来的には、情報推薦・行動支援の考え方を取り入れ、ユーザーの学習状況や目標に応じて次に取り組むべきタスクを提案できるアプリへ発展させたいと考えています。",
    githubUrl: null,
    demoUrl: "https://study-task-manager-roan.vercel.app/",
    image: "/works-images/STM-image.png",
    status: "Completed",
  },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    slug: "mahjong-score-calculator",
    title: "麻雀点数計算アプリ",
    shortDescription:
      "麻雀の手牌情報や和了条件を入力し、点数計算を行うDjangoベースのWebアプリです。",
    background:
      "大学の授業におけるグループ開発として、麻雀の点数計算をWebアプリ上で行える仕組みを制作しました。複数の入力情報をもとに点数計算を行う必要があるため、手牌モジュール・条件モジュール・点数計算モジュール・点数表示モジュールに分けて設計しました。",
    features: [
      "手牌情報の入力",
      "副露情報の入力",
      "和了条件の入力",
      "ドラ表示牌の入力",
      "点数計算ロジックとの連携",
      "計算結果の表示",
    ],
    techStack: ["Python", "Django", "JavaScript", "HTML / CSS", "SQLite", "GitHub"],
    role: "バックエンド構成と進行管理を主に担当しました。models.pyの設計・urls.pyのルーティング・views.pyでの入力データ処理・グループ開発における進行調整を担いました。",
    points:
      "手牌・条件・点数計算・点数表示の各モジュールを分割し、役割ごとに処理を整理する構成を意識しました。フォームから受け取った情報を点数計算ロジックに渡しやすい形に変換する流れを検討し、フロントエンドとバックエンドの連携調整も担当しました。",
    futureImprovements:
      "入力フォームの使いやすさ向上・点数計算ロジックの精度向上・エラーハンドリングの整理・Ajaxを用いた非同期での計算結果表示などを行いたいです。また、テストコードを追加し、複雑な条件でも安定して点数計算できるように改善したいです。",
    githubUrl: null,
    demoUrl: "https://msc-a8rz.onrender.com/",
    image: "/works-images/MSC-image.png",
    status: "Completed",
  },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    slug: "my-portfolio",
    title: "my-portfolio",
    shortDescription:
      "学習・開発経験・研究関心・制作物を整理して掲載するために作成したポートフォリオサイトです。",
    background:
      "長期インターン応募や学内カンパニーでの活動に向けて、自分のスキル・制作物・研究関心を整理して伝える必要があると考え制作しました。単なる自己紹介ではなく、Webアプリ開発・データ分析・情報推薦への関心や今後の方向性が伝わるサイトを目指しています。",
    features: [
      "Home / About / Skills / Works / Experience / Contact の各ページ",
      "制作物一覧と詳細ページ",
      "GitHubへの導線",
      "Vercelでの公開",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Vercel", "GitHub", "Claude Code"],
    role: "個人開発として、サイト構成の設計・各ページの情報設計・UI実装・レスポンシブ対応・Vercelデプロイまでを全て担当しました。",
    points:
      "各ページに役割を持たせ、閲覧者がプロフィール・スキル・制作物・活動歴を順番に確認できる構成にしました。Claude Codeに要件を正確に伝えるため、各ページの要件定義ファイルを作成し、改善方針を明確にしながら開発を進めています。",
    futureImprovements:
      "今後は各制作物の詳細ページを充実させ、ResearchページやBlog / Notesページを追加することで研究関心や学習記録を整理して発信できるようにしたいと考えています。",
    githubUrl: null,
    demoUrl: "https://my-portfolio-gamma-six-ku1s8in6o8.vercel.app/",
    image: "/works-images/portfolio-image.png",
    status: "In Progress",
  },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // {
  //   slug: "campus-company-prototype",
  //   title: "学内カンパニー プロトタイプ開発",
  //   shortDescription:
  //     "大学の学内カンパニーで、商品に関連するWebアプリのプロトタイプ開発に取り組んでいます。",
  //   background:
  //     "学内カンパニーiFiveの活動として、クライアント向けデモを想定したWebアプリのプロトタイプを制作しています。公開可能な範囲で担当内容や使用技術を掲載しています。",
  //   features: [
  //     "クライアント向けデモ画面の実装",
  //     "状態に応じた表示切り替え",
  //     "モックデータを用いた動作確認",
  //   ],
  //   techStack: ["Next.js", "React", "TypeScript", "GitHub", "Vercel"],
  //   role: "要件整理・画面構成の検討・UI実装・状態管理・GitHubでの管理を担当しました。",
  //   points:
  //     "プロトタイプとして短期間で価値が伝わるよう、画面構成をシンプルにし、状態の変化が視覚的に分かりやすいように設計しました。実データがない段階でもデモとして動作確認できるよう、モックデータを用いた表示切り替えを実装しました。",
  //   futureImprovements:
  //     "今後は実際の要件やフィードバックに合わせて、UI改善・データ構造の整理・API連携・管理画面の追加などを検討しています。",
  //   githubUrl: null,
  //   demoUrl: null,
  //   image: null,
  //   status: "Prototype",
  // },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    slug: "research-note-manager",
    title: "研究メモ・論文管理アプリ",
    shortDescription:
      "研究メモや論文情報を整理・検索・分類できるWebアプリを制作予定です。",
    background:
      "研究活動に必要な論文・メモ・アイデアを整理し、検索・分類・振り返りができるWebアプリを作ることを目的としています。",
    features: [
      "論文・メモの登録・分類",
      "キーワード検索",
      "タグ管理",
      "振り返り機能",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Django REST Framework", "PostgreSQL"],
    githubUrl: null,
    demoUrl: null,
    image: null,
    status: "Planned",
  },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    slug: "study-tasks-manager-v2",
    title: "API連携版 Study Tasks Manager",
    shortDescription:
      "既存のStudy Tasks Managerを発展させ、API連携・DB保存・認証機能を備えたWebアプリとして再設計する予定です。",
    background:
      "React単体のタスク管理アプリから、フロントエンドとバックエンドを分離した実践的なWebアプリへ発展させることを目的としています。",
    features: [
      "ユーザー認証（ログイン・ログアウト）",
      "DBへのタスク保存",
      "学習履歴の記録・分析",
      "APIを介したフロント・バック連携",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Django REST Framework", "PostgreSQL"],
    githubUrl: null,
    demoUrl: null,
    image: null,
    status: "Planned",
  },
];
