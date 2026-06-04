---
name: project-portfolio-overview
description: ポートフォリオサイトの現状・アーキテクチャ・改善方針の概要
metadata:
  type: project
---

## アーキテクチャ

- Next.js App Router + React + TypeScript + Tailwind CSS v4
- `app/lib/profile.ts` が唯一のデータソース（コンテンツ変更はここだけを編集）
- Vercel でデプロイ済み
- アニメーション：globals.css に `.fade-in`, `.fade-in-1`〜`.fade-in-4`（フェードイン、遅延違い）

## ページ構成

| パス | ファイル | 状態 |
|------|----------|------|
| `/` | `app/page.tsx` | Hero + CTAボタン（Works・GitHub） |
| `/about` | `app/about/page.tsx` | bio全文 + GitHubリンク（画像スライダー削除済み） |
| `/skills` | `app/skills/page.tsx` | アイコン付き技術タグ（react-icons使用） |
| `/works` | `app/works/page.tsx` | カード形式、profile.ts の works[] から生成 |
| `/experience` | `app/experience/page.tsx` | 学歴・活動歴・資格の3セクション |
| `/contact` | `app/contact/page.tsx` | GitHubリンクのみ（改善要） |

## コンポーネント

- `HeroImage.tsx`: Homeページの画像スライダー（4枚、4秒ごとフェード切替）。画像は `/public/home-images/` と `/public/about-images/` から取得
- `Header.tsx`: usePathname()で現在ページをハイライト（クライアントコンポーネント）
- `Footer.tsx`: サーバーコンポーネント、コピーライト表示

## profile.ts の現状の型

```ts
{
  name, title, bio: string[],
  github, githubUrl,
  skills: { category, items[] }[],
  works: { title, description, techs[], url: string|null, github: string|null }[],
  education: { institution, detail, period }[],
  experience: { role, org, period, description }[],
  qualifications: string[]
}
```

**Why:** docs/contents-plan/ 配下に詳細な要件定義ファイルが整備された。今後の改善はこれに基づいて行う。
**How to apply:** 実装前に必ず対応する詳細ファイルを参照すること。
