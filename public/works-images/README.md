# works-images

Worksページの各アプリカードに表示するサムネイル画像をまとめて保存するフォルダです。

## 命名規則

`public/about-images` / `public/home-images` に合わせ、`.webp` 形式で保存します。
ファイル名は各制作物の `slug`（`app/lib/works.ts`）に対応させます。

| slug | 推奨ファイル名 | 制作物 |
|------|----------------|--------|
| `study-tasks-manager` | `study-tasks-manager.webp` | Study Tasks Manager |
| `mahjong-score-calculator` | `mahjong-score-calculator.webp` | 麻雀点数計算アプリ |
| `my-portfolio` | `my-portfolio.webp` | my-portfolio |
| `campus-company-prototype` | `campus-company-prototype.webp` | 学内カンパニー プロトタイプ開発 |
| `research-note-manager` | `research-note-manager.webp` | 研究メモ・論文管理アプリ |
| `study-tasks-manager-v2` | `study-tasks-manager-v2.webp` | API連携版 Study Tasks Manager |

## 使い方

`app/lib/works.ts` の各制作物の `image` フィールドにパスを設定すると、
`WorkCard` のサムネイル枠に表示されます（未設定／`null` の場合は「No Image」表示）。

```ts
{
  slug: "study-tasks-manager",
  // ...
  image: "/works-images/study-tasks-manager.webp",
}
```
