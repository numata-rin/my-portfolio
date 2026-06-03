# 沼田倫 — Portfolio Site

個人ポートフォリオサイトです。学歴・スキル・制作物・経歴を一覧できます。

> **デモ URL**: *(公開後に追加予定)*

---

## 概要

岩手大学で情報工学を専攻する学生エンジニア・沼田倫のポートフォリオサイトです。  
フロントエンド開発の実力と、UI/UX に対する設計の姿勢を示すことを目的として制作しました。

---

## 主な機能

| 機能 | 詳細 |
|---|---|
| ヒーロー画像表示 | トップページにプロフィール写真を全幅表示 |
| 画像スライダー | About ページで 3 枚の写真を 4 秒ごとにクロスフェードで自動切り替え |
| スキルバッジ + アイコン | 各スキルのブランドカラーアイコンをバッジ内に表示 |
| フェードインアニメーション | ページ遷移時のコンテンツ表示に段階的なアニメーションを適用 |
| スティッキーヘッダー | スクロール時も常にナビゲーションを表示 |
| レスポンシブ対応 | モバイル〜デスクトップ幅に対応したレイアウト |
| ホームページ 1 画面完結 | トップページのコンテンツをスクロールなしで一覧表示 |

---

## 技術スタック

| 分類 | 技術 |
|---|---|
| フレームワーク | Next.js 16 (App Router) |
| UI ライブラリ | React 19 |
| 言語 | TypeScript 5 |
| スタイリング | Tailwind CSS v4 |
| アイコン | react-icons (Simple Icons) |
| デプロイ | Vercel *(予定)* |

---

## ページ構成

```
/           Home       プロフィール写真・氏名・自己紹介・リンク
/about      About      詳細プロフィール・画像スライダー
/skills     Skills     技術スタック一覧（アイコン付きバッジ）
/works      Works      制作物一覧（使用技術・リンク）
/experience Experience 学歴・活動歴・資格
/contact    Contact    問い合わせ先
```

---

## ローカル起動

```bash
# リポジトリをクローン
git clone https://github.com/numata-rin/my-portfolio.git
cd my-portfolio

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

---

## ディレクトリ構成（主要部分）

```
app/
├── components/
│   ├── Header.tsx           # スティッキーナビゲーション
│   ├── Footer.tsx
│   ├── HeroImage.tsx        # トップページ用プロフィール写真
│   └── AboutImageSlider.tsx # About ページ用自動スライダー
├── lib/
│   └── profile.ts           # プロフィールデータ（単一ソース管理）
├── about/    skills/    works/    experience/    contact/
│   └── page.tsx             # 各ページ
├── layout.tsx
├── page.tsx                 # Home
└── globals.css              # アニメーション定義など
public/
├── home-images/             # トップページ画像
└── about-images/            # About ページスライダー用画像（3 枚）
```

---

## コンテンツの更新方法

プロフィール情報はすべて `app/lib/profile.ts` で一元管理されています。  
このファイルを編集するだけで、全ページの表示内容が一括更新されます。

```ts
// app/lib/profile.ts
export const profile = {
  name: "沼田倫",
  title: "学生エンジニア",
  bio: [...],
  skills: [...],
  works: [...],       // 制作物の追加はここへ
  education: [...],
  experience: [...],
  qualifications: [...],
};
```

---

## 開発者

**沼田倫 (Numata Rin)**  
岩手大学 理工学部 システム創成工学科 在学中

- GitHub: [@numata-rin](https://github.com/numata-rin)
- お問い合わせ: サイト内 Contact ページよりどうぞ
