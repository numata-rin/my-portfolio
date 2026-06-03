# ポートフォリオサイト アーキテクチャ概要

## フォルダ構成

```
app/
├── lib/
│   └── profile.ts          ← プロフィールデータ（唯一の情報ソース）
├── components/
│   ├── Header.tsx           ← 全ページ共通のナビゲーション
│   └── Footer.tsx           ← 全ページ共通のフッター
├── about/page.tsx           ← /about ページ
├── skills/page.tsx          ← /skills ページ
├── works/page.tsx           ← /works ページ
├── experience/page.tsx      ← /experience ページ
├── contact/page.tsx         ← /contact ページ
├── globals.css              ← グローバルスタイル・アニメーション定義
├── layout.tsx               ← 全ページ共通のHTMLラッパー
└── page.tsx                 ← / (トップページ / Hero)
```

---

## データの流れ

```
app/lib/profile.ts
        │
        │  import { profile } from "@/app/lib/profile"
        │
        ├──→ app/page.tsx          （name, title, bio[0], githubUrl）
        ├──→ app/about/page.tsx    （bio, github, githubUrl）
        ├──→ app/skills/page.tsx   （skills[]）
        ├──→ app/works/page.tsx    （works[]）
        ├──→ app/experience/page.tsx （education[], experience[], qualifications[]）
        ├──→ app/contact/page.tsx  （github, githubUrl）
        ├──→ app/components/Header.tsx （name）
        └──→ app/components/Footer.tsx （name）
```

**ポイント：** コンテンツを変更したいときは `profile.ts` だけを編集すれば、全ページに自動で反映されます。

---

## 各ファイルの役割

### `app/lib/profile.ts`

サイト全体のコンテンツを一元管理するデータファイル。
各プロパティの意味は以下のとおりです。

| プロパティ | 型 | 用途 |
|---|---|---|
| `name` | string | 名前（Header・Hero・Footerで使用） |
| `title` | string | 肩書き（Heroで使用） |
| `bio` | string[] | 自己紹介文。配列の各要素が1段落 |
| `github` | string | GitHubユーザー名（@なし） |
| `githubUrl` | string | GitHubプロフィールURL |
| `skills` | `{category, items[]}[]` | カテゴリ別スキル一覧 |
| `works` | `{title, description, techs[], url, github}[]` | 作品情報。URLは `null` でも可 |
| `education` | `{institution, detail, period}[]` | 学歴 |
| `experience` | `{role, org, period, description}[]` | 活動歴 |
| `qualifications` | string[] | 資格・受賞歴 |

---

### `app/layout.tsx`

Next.js の **ルートレイアウト**。すべてのページを包むHTMLの骨格です。

- `<html lang="ja">` — 言語設定（日本語）
- `metadata` — サイト全体のタイトル・説明・OGP設定
- `<Header />` と `<Footer />` をここに置くことで、全ページに自動で表示される
- `<main className="flex-1">` — 各ページのコンテンツがここに差し込まれる

```
layout.tsx
└── <html>
    └── <body>
        ├── <Header />
        ├── <main>  ← page.tsx の内容がここに入る
        └── <Footer />
```

---

### `app/components/Header.tsx`

- **クライアントコンポーネント**（`"use client"` を使用）
- `usePathname()` で現在のURLパスを取得し、対応するナビリンクをハイライト表示する
- ページ上部にスティッキー（固定）表示される

```tsx
// 現在のパスと href が一致するリンクだけ黒く太字になる
const pathname = usePathname()
className={pathname === href ? "text-black font-medium" : "text-gray-400"}
```

---

### `app/components/Footer.tsx`

- **サーバーコンポーネント**（クライアント機能不要）
- `profile.name` からコピーライト表示を生成するだけのシンプルなコンポーネント

---

### `app/page.tsx`（Hero）

トップページ（`/`）。訪問者が最初に目にする画面です。

- 名前・肩書きを大きく表示
- 自己紹介文の1文目 (`bio[0]`) を掲載
- 「Worksを見る」と「GitHub」への2つのCTAボタン

---

### `app/about/page.tsx`

- `bio[]` を段落として全文表示
- GitHubリンクをサブ情報として表示
- SNSが増えた場合はここに追記する

---

### `app/skills/page.tsx`

- `skills[]` をカテゴリ単位でループして表示
- タグを追加したいときは `profile.ts` の `items[]` に文字列を追加するだけ

---

### `app/works/page.tsx`

- `works[]` を1件ずつカード形式で表示
- `url` または `github` が `null` でないときのみリンクボタンを表示（条件レンダリング）
- 作品が増えたときは `profile.ts` の `works` 配列にオブジェクトを追加する

---

### `app/experience/page.tsx`

- `education[]`（学歴）・`experience[]`（活動歴）・`qualifications[]`（資格）の3セクションで構成

---

### `app/contact/page.tsx`

- 現時点では GitHub リンクのみ
- SNSアカウントが増えた場合は `profile.ts` に項目を追加し、このページのテンプレートを複製する

---

### `app/globals.css`

Tailwind CSS v4 の設定とグローバルスタイルを定義しています。

```css
/* フェードインアニメーションのクラス */
.fade-in     /* 遅延なし */
.fade-in-1   /* 0.05秒後 */
.fade-in-2   /* 0.15秒後 */
.fade-in-3   /* 0.25秒後 */
.fade-in-4   /* 0.35秒後 */
```

ページ内の要素に `.fade-in-1` などのクラスを付けると、表示時に下からふわっとフェードインします。

---

## よくある拡張パターン

### 作品を追加する

```ts
// app/lib/profile.ts の works[] に追記するだけ
{
  title: "新しいプロジェクト名",
  description: "概要を1〜2文で。",
  techs: ["React", "TypeScript"],
  url: "https://example.com",   // なければ null
  github: "https://github.com/numata-rin/repo",  // なければ null
}
```

### SNSリンクを追加する

1. `profile.ts` に `xUrl: "https://x.com/..."` などを追記
2. `app/contact/page.tsx` に `<a href={profile.xUrl}>` のブロックを複製して貼り付ける

### 新しいページを追加する

```
app/blog/page.tsx を作成するだけで /blog にアクセスできる（App Router の仕様）
```

### OGP画像を設定する

`app/opengraph-image.tsx` を作成し、`ImageResponse` で動的生成する（Next.js の file-based metadata の仕組み）。
