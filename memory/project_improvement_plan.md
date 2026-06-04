---
name: project-improvement-plan
description: ポートフォリオサイトの改善優先順位と各ページ要件の要点
metadata:
  type: project
---

## 改善優先順位

### 優先度A（必須）

1. **Works** — 最重要。背景・機能・担当範囲・工夫点・今後の改善・GitHub/Demo リンクを追加。データを配列で管理（slug 付き）
2. **Skills** — 技術名だけでなく「何を実装したか」を追記。5カテゴリ（Frontend / Backend / Data Science / Tools / Currently Learning）に分類
3. **About** — 研究関心・開発思想・学内カンパニー活動・将来像のセクションを追加
4. **Contact** — GitHub のみから Email + 連絡歓迎内容の追加、長期インターンへの関心を明示

### 優先度B（できれば）

- Works カードにスクリーンショット追加
- Experience ページの活動説明を具体化
- Works/Skills のデータ構造を整理

### 優先度C（将来）

- Research ページ追加
- Blog/Notes ページ追加
- Works Detail ページ（`/works/[slug]`）追加

## 各ページ要件ファイルの場所

- 全体方針：`docs/contents-plan/contents-overview.md`
- Home：`docs/contents-plan/Home-details.md`
- About：`docs/contents-plan/About-details.md`
- Works：`docs/contents-plan/Works-details.md`
- Skills：`docs/contents-plan/Skils-details.md`
- Contact：`docs/contents-plan/Contact-details.md`
- 改善一覧：`docs/contents-plan/Improvement-point.md`

## Works の拡張データ型（目標）

```ts
{
  slug, title, shortDescription, background,
  features: string[], techStack: string[],
  role, points, futureImprovements,
  githubUrl?: string, demoUrl?: string,
  image?: string,
  status: "Completed" | "In Progress" | "Planned" | "Prototype"
}
```

## 文章方針

- 技術名だけで終わらせない（「Reactでは〜を実装した」など経験内容を書く）
- 実装済みと今後の予定を明確に分ける
- 誇張しない（学習中のものを「使いこなせる」と書かない）
- 制作背景を書く（なぜ作ったのか）

**Why:** MVP版からフルポートフォリオへの改善フェーズ。長期インターン応募を主目的とする。
**How to apply:** 各ページの実装依頼時は対応する詳細ファイルを必ず参照してから作業する。
