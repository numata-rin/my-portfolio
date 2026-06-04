以下が `Skils-details.md` の完成版です。
ファイル名はご指定どおり `Skils-details.md` としていますが、一般的には `Skills-details.md` の方が自然なので、後でファイル名だけ修正してもよいです。

# Skils-details.md

# Skillsページ 要件定義

## 1. このドキュメントの目的

このドキュメントは、ポートフォリオサイトの `Skills` ページに掲載する内容・役割・改善方針・実装方針を定義するための要件定義ファイルである。

Skillsページは、単に使用技術を一覧表示するページではなく、以下を閲覧者に伝えるためのページである。

* どの技術を学習・使用しているのか
* それぞれの技術で何を実装した経験があるのか
* 現在どの程度の範囲を扱えるのか
* 今後どの技術を重点的に伸ばしていくのか
* Worksページの制作物とスキルがどのようにつながっているのか

長期インターンや開発機会に応募する際、Skillsページは閲覧者が技術的な適性を判断する重要なページである。

そのため、技術名だけを並べるのではなく、実装経験・学習段階・今後の方向性が伝わるようにする。

---

## 2. Skillsページの役割

Skillsページの役割は、閲覧者に対して「どの技術を使って、どのような開発ができるのか」を伝えることである。

現状のように技術名だけを並べた場合、以下のような印象になりやすい。

```text
Reactが使えます。
Pythonが使えます。
Djangoが使えます。
```

しかし、採用担当者や開発関係者が知りたいのは、技術名そのものではなく、以下である。

* Reactで何を作れるのか
* Next.jsでどのようなページ構成を実装できるのか
* Djangoでどのようなバックエンド処理を経験したのか
* Pythonでどのようなデータ処理を学んでいるのか
* GitHubを使ってどのように開発を進めているのか
* Vercelでデプロイした経験があるのか
* 学習中の技術と実装経験のある技術が分かれているか

そのため、Skillsページでは、技術名に加えて「経験内容」と「使用場面」を説明する。

---

## 3. Skillsページで伝えたいこと

Skillsページでは、以下を伝える。

* React / Next.js / TypeScript を用いたフロントエンド開発に取り組んでいること
* Django / Django REST Framework を用いたバックエンド開発を学習・実装していること
* Pythonを用いたデータ分析・機械学習の基礎を学習していること
* Git / GitHub / Vercel などを使って開発・公開の流れを経験していること
* NotionやClaude Codeを活用して、開発計画や要件定義を整理していること
* 今後は、React / Next.js と Django REST Framework のAPI連携を重点的に伸ばしていくこと
* Web開発とデータ分析・AI活用をつなげていきたいこと

---

## 4. Skillsページの基本構成

Skillsページは、以下のカテゴリに分けて構成する。

```text
Frontend
Backend
Data Science / Machine Learning
Tools / Infrastructure
Currently Learning
```

または、日本語中心にする場合は以下でもよい。

```text
フロントエンド
バックエンド
データ分析・機械学習
開発ツール・インフラ
現在学習中
```

サイト全体が日本語中心であれば、日本語見出しを推奨する。

ただし、技術カテゴリとして分かりやすくするため、以下のように英語と日本語を併記してもよい。

```text
Frontend / フロントエンド
Backend / バックエンド
Data Science / データ分析
Tools / 開発ツール
Currently Learning / 現在学習中
```

---

## 5. Skillsページの表示方針

Skillsページでは、各カテゴリごとに以下を表示する。

* カテゴリ名
* 使用技術一覧
* 経験内容
* 関連する制作物
* 今後伸ばしたい内容

表示形式は、カード形式またはセクション形式とする。

### 5.1 カード形式の例

```text
Frontend
React / Next.js / TypeScript / JavaScript / HTML / CSS

Reactでは、コンポーネント分割、状態管理、フォーム処理、LocalStorageを用いたデータ保存などを実装経験があります。

関連制作物：
Study Tasks Manager / my-portfolio
```

### 5.2 セクション形式の例

```text
## Frontend

使用技術：
React / Next.js / TypeScript / JavaScript / HTML / CSS

経験：
Reactでは、コンポーネント分割、状態管理、フォーム処理、LocalStorage保存を実装しました。
Next.jsでは、App Routerを用いたページ構成やVercelへのデプロイを経験しています。

関連制作物：
Study Tasks Manager / my-portfolio
```

---

## 6. Frontend / フロントエンド

Frontendでは、React / Next.js / TypeScript を中心に、現在のWebアプリ開発スキルを伝える。

### 6.1 掲載する技術

```text
React
Next.js
TypeScript
JavaScript
HTML
CSS
CSS Modules
```

必要に応じて、以下も追加する。

```text
Vite
Responsive Design
```

---

### 6.2 伝えたい経験内容

Frontendでは、以下を伝える。

* Reactでコンポーネント分割を経験していること
* useStateなどを用いた状態管理を経験していること
* フォーム入力処理を実装した経験があること
* LocalStorageを用いたデータ保存を実装した経験があること
* Viteを用いたReactアプリ開発経験があること
* Next.jsでポートフォリオサイトやプロトタイプを制作していること
* CSS Modulesや通常のCSSを使ってレイアウトを調整していること
* Vercelで公開する流れを経験していること

---

### 6.3 Frontendの推奨文章

```text
React / Next.js / TypeScript を中心に、Webアプリのフロントエンド開発を学習・実装しています。

Reactでは、コンポーネント分割、状態管理、フォーム処理、LocalStorageを用いたデータ保存などを経験しました。

Next.jsでは、App Routerを用いたページ構成や、Vercelへのデプロイを前提としたポートフォリオサイト・プロトタイプ開発に取り組んでいます。

今後は、API連携や認証機能を含む実践的なWebアプリ開発に取り組んでいきたいと考えています。
```

---

### 6.4 Frontendの短縮版

```text
React / Next.js / TypeScript を中心に、Webアプリのフロントエンド開発に取り組んでいます。

Reactでは、コンポーネント分割、状態管理、フォーム処理、LocalStorage保存などを実装しました。

Next.jsでは、ポートフォリオサイトやプロトタイプ開発を通して、ページ構成やVercelへのデプロイを経験しています。
```

---

### 6.5 関連制作物

Frontendに関連する制作物は以下である。

```text
Study Tasks Manager
my-portfolio
学内カンパニー関連のプロトタイプ
```

---

## 7. Backend / バックエンド

Backendでは、Python / Django / Django REST Framework を中心に、バックエンド開発への取り組みを伝える。

### 7.1 掲載する技術

```text
Python
Django
Django REST Framework
PostgreSQL
SQLite
```

現時点で深く扱っていないものは、強く出しすぎない。

例えば、PostgreSQLやDjango REST Frameworkが学習中であれば、`Currently Learning` 側に入れてもよい。

---

### 7.2 伝えたい経験内容

Backendでは、以下を伝える。

* DjangoでWebアプリ開発を経験していること
* models.py / urls.py / views.py などのバックエンド構成を扱った経験があること
* フォームから受け取ったデータを処理する流れを理解していること
* テンプレートやJavaScriptとの連携を経験していること
* 今後はDjango REST Frameworkを用いたAPI設計を重点的に学ぶ予定であること
* React / Next.js とDjango REST Frameworkを連携したWebアプリを作りたいこと

---

### 7.3 Backendの推奨文章

```text
Python / Django を用いたWebアプリ開発を学習・実装しています。

Djangoでは、models.py / urls.py / views.py を中心としたバックエンド構成や、フォームから受け取ったデータの処理、テンプレートとの連携を経験しました。

授業でのグループ開発では、麻雀点数計算アプリのバックエンド構成を担当し、手牌情報や条件情報を受け取り、点数計算ロジックへ渡す流れを整理しました。

今後は、Django REST Frameworkを用いたAPI設計や、React / Next.jsとの連携を重点的に学習していく予定です。
```

---

### 7.4 Backendの短縮版

```text
Python / Django を用いたWebアプリ開発を学習・実装しています。

Djangoでは、モデル設計、URL設計、ビュー処理、フォーム処理、テンプレート連携などを経験しました。

今後はDjango REST Frameworkを用いたAPI設計や、React / Next.jsとの連携を重点的に学習していく予定です。
```

---

### 7.5 関連制作物

Backendに関連する制作物は以下である。

```text
麻雀点数計算アプリ
今後作成予定の研究メモ・論文管理アプリ
API連携版 Study Tasks Manager
```

---

## 8. Data Science / Machine Learning

Data Science / Machine Learningでは、Pythonを用いたデータ分析・機械学習の基礎学習を伝える。

ただし、まだ実務レベルの経験として強く見せすぎない。

現時点では、以下のような表現が適切である。

```text
Pythonを用いたデータ分析・機械学習の基礎を学習しています。
```

---

### 8.1 掲載する技術

```text
Python
NumPy
Pandas
Matplotlib
scikit-learn
Jupyter Notebook
```

必要に応じて、以下は学習中として扱う。

```text
TensorFlow
推薦システム
時系列分析
```

---

### 8.2 伝えたい経験内容

Data Science / Machine Learningでは、以下を伝える。

* Pythonでデータ分析の基礎を学習していること
* NumPy / Pandas を用いたデータ処理を学習していること
* Matplotlibを用いた可視化を学習していること
* scikit-learnを用いた機械学習の基礎を学習していること
* 統計検定やPythonデータ分析資格の学習を通じて、データを扱う基礎力を身につけていること
* 将来的に、情報推薦・行動支援・学習支援に応用したいこと

---

### 8.3 Data Scienceの推奨文章

```text
Pythonを用いたデータ分析・機械学習の基礎を学習しています。

NumPy / Pandas によるデータ処理、Matplotlibによる可視化、scikit-learnを用いた機械学習の基礎に取り組んでいます。

また、統計検定やPythonデータ分析資格の学習を通じて、データを正しく扱うための基礎力を身につけています。

将来的には、情報推薦・行動支援・学習支援の分野に応用し、ユーザーの行動や学習を支援するプロダクト開発につなげたいと考えています。
```

---

### 8.4 Data Scienceの短縮版

```text
Pythonを用いたデータ分析・機械学習の基礎を学習しています。

NumPy / Pandasによるデータ処理、Matplotlibによる可視化、scikit-learnを用いた機械学習の基礎に取り組んでいます。

将来的には、情報推薦・行動支援・学習支援への応用を目指しています。
```

---

### 8.5 関連内容

Data Science / Machine Learningに関連する内容は以下である。

```text
Pythonデータ分析の学習
統計検定の学習
情報推薦・行動支援・学習支援の研究準備
今後作成予定の研究関連Webアプリ
```

---

## 9. Tools / Infrastructure

Tools / Infrastructureでは、開発環境・バージョン管理・デプロイ・タスク管理に関するスキルを伝える。

### 9.1 掲載する技術・ツール

```text
Git
GitHub
Vercel
Render
WSL
VSCode
Notion
Claude Code
npm
Node.js
```

必要に応じて、以下も追加する。

```text
GitHub Issues
README
Vercel Deployment
```

---

### 9.2 伝えたい経験内容

Tools / Infrastructureでは、以下を伝える。

* Git / GitHubを用いたバージョン管理を経験していること
* ブランチ作成・コミット・push・README作成を経験していること
* GitHub Issuesを用いたタスク管理を行っていること
* Vercelを用いてWebアプリを公開した経験があること
* Notionで要件定義・開発記録・タスク管理を整理していること
* Claude Codeを使って開発補助や要件定義の整理を行う予定であること
* WSL / VSCode を用いた開発環境で作業していること

---

### 9.3 Toolsの推奨文章

```text
Git / GitHub を用いたバージョン管理や、Vercelを用いたWebアプリのデプロイを経験しています。

GitHubでは、ブランチ管理、コミット、push、README作成、Issueによるタスク管理に取り組んでいます。

また、Notionを用いてプロジェクト概要、要件定義、開発記録、タスク管理を整理しています。

Claude CodeなどのAI開発支援ツールも活用しながら、実装だけでなく、要件整理や改善方針の検討にも取り組んでいます。
```

---

### 9.4 Toolsの短縮版

```text
Git / GitHub を用いたバージョン管理、Vercelを用いたデプロイ、Notionを用いたタスク管理・要件整理を経験しています。

GitHub IssuesやREADME作成を通して、開発内容を整理しながら進めることを意識しています。
```

---

### 9.5 関連制作物・活動

Tools / Infrastructureに関連する制作物・活動は以下である。

```text
Study Tasks Manager
my-portfolio
学内カンパニーでの開発活動
Notionでのプロジェクト管理
Claude Codeを用いた要件定義整理
```

---

## 10. Currently Learning / 現在学習中

Currently Learningでは、今後重点的に学習していく技術や分野を記載する。

このセクションを設けることで、現在の実力と今後の方向性を分けて伝えられる。

---

### 10.1 掲載する内容

```text
Django REST Framework
API設計
React / Next.js とバックエンドAPIの連携
PostgreSQL
認証機能
データ分析
推薦システム
時系列分析
AI / LLM活用
AWS / クラウド基礎
```

---

### 10.2 Currently Learningの推奨文章

```text
現在は、React / Next.js と Django REST Framework を組み合わせたAPI連携型のWebアプリ開発を重点的に学習しています。

また、情報推薦・行動支援・学習支援への応用を見据えて、Pythonによるデータ分析、機械学習、推薦システムの基礎にも取り組んでいます。

今後は、認証機能、DB設計、API設計、クラウド環境でのデプロイなど、より実践的なWebアプリ開発に必要な技術を身につけていきたいと考えています。
```

---

### 10.3 Currently Learningの短縮版

```text
現在は、React / Next.js と Django REST Framework を組み合わせたAPI連携型のWebアプリ開発を重点的に学習しています。

今後は、認証機能、DB設計、API設計、データ分析、推薦システムなどを深めていきたいと考えています。
```

---

## 11. Skillsページにおける表現の注意点

Skillsページでは、技術力を過度に誇張しない。

特に、まだ学習中の技術や使用経験が浅い技術については、以下のように表現する。

### 11.1 避けたい表現

```text
Django REST Frameworkを使いこなせます。
機械学習モデルを開発できます。
TensorFlowを扱えます。
AWSでインフラ構築できます。
```

実装経験が十分でない場合、上記のような断定表現は避ける。

---

### 11.2 推奨する表現

```text
Django REST Frameworkを用いたAPI設計を学習しています。
機械学習の基礎を学習しています。
TensorFlowは今後の学習対象として取り組んでいます。
AWSやクラウド環境の基礎を学習しています。
```

---

### 11.3 実装経験がある技術の表現

実際に制作物で使った技術については、以下のように書く。

```text
Reactでは、Study Tasks Managerの開発を通して、コンポーネント分割、状態管理、LocalStorage保存を実装しました。
```

または、

```text
Djangoでは、麻雀点数計算アプリの開発を通して、フォームから受け取ったデータを処理し、点数計算ロジックに渡す流れを整理しました。
```

---

## 12. Skillsページの推奨完成イメージ

Skillsページは、以下のような構成を目指す。

```text
Skills

Frontend
React / Next.js / TypeScript / JavaScript / HTML / CSS

Reactでは、コンポーネント分割、状態管理、フォーム処理、LocalStorageを用いたデータ保存などを実装経験があります。
Next.jsでは、ポートフォリオサイトやプロトタイプ開発を通して、ページ構成やVercelへのデプロイを経験しています。

Backend
Python / Django / Django REST Framework

Djangoでは、モデル設計、URL設計、ビュー処理、フォーム処理、テンプレート連携などを経験しました。
今後はDjango REST Frameworkを用いたAPI設計や、React / Next.jsとの連携を重点的に学習していく予定です。

Data Science / Machine Learning
Python / NumPy / Pandas / Matplotlib / scikit-learn

Pythonを用いたデータ分析・機械学習の基礎を学習しています。
将来的には、情報推薦・行動支援・学習支援への応用を目指しています。

Tools / Infrastructure
Git / GitHub / Vercel / Render / WSL / VSCode / Notion / Claude Code

GitHubを用いたバージョン管理、Vercelを用いたデプロイ、Notionを用いたタスク管理・要件整理を経験しています。

Currently Learning
Django REST Framework / API設計 / PostgreSQL / 認証機能 / 推薦システム / 時系列分析 / AI活用

React / Next.js と Django REST Framework を組み合わせたAPI連携型のWebアプリ開発を重点的に学習しています。
```

---

## 13. Skillsページの文章案

### 13.1 推奨文章案

```text
Frontend
React / Next.js / TypeScript / JavaScript / HTML / CSS

Reactでは、コンポーネント分割、状態管理、フォーム処理、LocalStorageを用いたデータ保存などを実装経験があります。

Next.jsでは、App Routerを用いたページ構成や、Vercelへのデプロイを前提としたポートフォリオサイト・プロトタイプ開発に取り組んでいます。

Backend
Python / Django / Django REST Framework

Djangoでは、models.py / urls.py / views.py を中心としたバックエンド構成や、フォームから受け取ったデータの処理、テンプレートとの連携を経験しました。

今後は、Django REST Frameworkを用いたAPI設計や、React / Next.jsとの連携を重点的に学習していく予定です。

Data Science / Machine Learning
Python / NumPy / Pandas / Matplotlib / scikit-learn

Pythonを用いたデータ分析・機械学習の基礎を学習しています。

NumPy / Pandas によるデータ処理、Matplotlibによる可視化、scikit-learnを用いた機械学習の基礎に取り組んでいます。

将来的には、情報推薦・行動支援・学習支援の分野に応用し、ユーザーの行動や学習を支援するプロダクト開発につなげたいと考えています。

Tools / Infrastructure
Git / GitHub / Vercel / Render / WSL / VSCode / Notion / Claude Code

Git / GitHub を用いたバージョン管理や、Vercelを用いたWebアプリのデプロイを経験しています。

GitHubでは、ブランチ管理、コミット、push、README作成、Issueによるタスク管理に取り組んでいます。

また、Notionを用いてプロジェクト概要、要件定義、開発記録、タスク管理を整理しています。

Currently Learning
Django REST Framework / API設計 / PostgreSQL / 認証機能 / 推薦システム / 時系列分析 / AI活用

現在は、React / Next.js と Django REST Framework を組み合わせたAPI連携型のWebアプリ開発を重点的に学習しています。

また、情報推薦・行動支援・学習支援への応用を見据えて、Pythonによるデータ分析、機械学習、推薦システムの基礎にも取り組んでいます。
```

---

### 13.2 短縮版文章案

```text
Frontend
React / Next.js / TypeScript / JavaScript / HTML / CSS

Reactでは、コンポーネント分割、状態管理、フォーム処理、LocalStorage保存などを実装しました。
Next.jsでは、ポートフォリオサイトやプロトタイプ開発を通して、ページ構成やVercelへのデプロイを経験しています。

Backend
Python / Django / Django REST Framework

Djangoでは、モデル設計、URL設計、ビュー処理、フォーム処理、テンプレート連携などを経験しました。
今後はDjango REST Frameworkを用いたAPI設計や、React / Next.jsとの連携を重点的に学習していく予定です。

Data Science / Machine Learning
Python / NumPy / Pandas / Matplotlib / scikit-learn

Pythonを用いたデータ分析・機械学習の基礎を学習しています。
将来的には、情報推薦・行動支援・学習支援への応用を目指しています。

Tools / Infrastructure
Git / GitHub / Vercel / Render / WSL / VSCode / Notion / Claude Code

GitHubを用いたバージョン管理、Vercelを用いたデプロイ、Notionを用いたタスク管理・要件整理を経験しています。

Currently Learning
Django REST Framework / API設計 / PostgreSQL / 認証機能 / 推薦システム / 時系列分析 / AI活用

React / Next.js と Django REST Framework を組み合わせたAPI連携型のWebアプリ開発を重点的に学習しています。
```

---

## 14. 実装方針

Skillsページの実装では、以下を意識する。

---

### 14.1 カテゴリごとにカード化する

Skillsページは情報量が多くなりやすいため、カテゴリごとにカード形式で整理する。

カード例：

```text
Frontend
React / Next.js / TypeScript / JavaScript / HTML / CSS
説明文
関連制作物
```

カードにすることで、閲覧者がスキルを把握しやすくなる。

---

### 14.2 技術タグを使う

各カテゴリ内で、技術名はタグ形式で表示してもよい。

例：

```text
React
Next.js
TypeScript
Django
Python
Vercel
```

タグ表示により、技術一覧を視覚的に把握しやすくなる。

---

### 14.3 説明文を長くしすぎない

Skillsページは文章が長すぎると読みづらい。

そのため、各カテゴリの説明は2〜4文程度に収める。

詳細はWorksページや各制作物のREADMEに任せる。

---

### 14.4 関連制作物への導線を置く

可能であれば、各スキルカテゴリに関連するWorksを表示する。

例：

```text
関連制作物：
Study Tasks Manager / my-portfolio
```

これにより、スキルと制作物のつながりが分かりやすくなる。

---

### 14.5 学習中の技術を分ける

実装経験のある技術と、現在学習中の技術を分ける。

例えば、Django REST Frameworkや推薦システムがまだ深い実装経験に至っていない場合は、`Currently Learning` に入れる。

---

## 15. データ管理方針

Skillsページの情報は、今後増減する可能性がある。

そのため、可能であれば配列やオブジェクトで管理する。

### 15.1 データ構造例

```ts
const skillCategories = [
  {
    title: "Frontend",
    description:
      "React / Next.js / TypeScript を中心に、Webアプリのフロントエンド開発に取り組んでいます。",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    experience:
      "Reactでは、コンポーネント分割、状態管理、フォーム処理、LocalStorage保存などを実装しました。",
    relatedWorks: ["Study Tasks Manager", "my-portfolio"],
  },
  {
    title: "Backend",
    description:
      "Python / Django を用いたWebアプリ開発を学習・実装しています。",
    skills: ["Python", "Django", "Django REST Framework"],
    experience:
      "Djangoでは、モデル設計、URL設計、ビュー処理、フォーム処理、テンプレート連携などを経験しました。",
    relatedWorks: ["麻雀点数計算アプリ"],
  },
];
```

---

### 15.2 データ管理のメリット

配列やオブジェクトで管理することで、以下のメリットがある。

* 技術を追加しやすい
* 表示内容を変更しやすい
* カードコンポーネントとして再利用しやすい
* Worksページとの連携がしやすい
* 将来的にCMS化やJSON管理に移行しやすい

---

## 16. Skillsページで使用するリンク

Skillsページから、必要に応じて以下のページへリンクを設置する。

```text
/works
/contact
```

リンクの例：

```text
関連制作物を見る → /works
開発の相談・連絡 → /contact
```

ただし、Skillsページはあくまでスキル説明が中心なので、リンクは必要最小限にする。

---

## 17. Skillsページの完成条件

Skillsページの完成条件は以下とする。

* 技術名だけでなく、経験内容が書かれている
* Frontend / Backend / Data Science / Tools / Currently Learning に分類されている
* 実装経験のある技術と学習中の技術が分かれている
* Reactで何を実装したのかが分かる
* Djangoで何を経験したのかが分かる
* Pythonデータ分析をどの程度学習しているのかが分かる
* GitHubやVercelなどの開発ツール経験が分かる
* 技術力を過度に誇張していない
* Worksページと関連づけられる
* スマートフォンでも読みやすい
* 既存デザインを大きく崩していない

---

## 18. Claude Codeへの実装指示

Claude Codeには、以下の方針でSkillsページを修正してもらう。

```text
Skils-details.mdを参照し、Skillsページを技術名の一覧だけではなく、実装経験や学習段階が伝わるページに改善してください。

Frontend / Backend / Data Science / Tools / Currently Learning のカテゴリに分けて、各カテゴリごとに使用技術・経験内容・関連制作物を整理してください。

Reactでは、コンポーネント分割、状態管理、フォーム処理、LocalStorage保存を実装経験として記載してください。

Djangoでは、models.py / urls.py / views.py を中心としたバックエンド構成や、フォームから受け取ったデータの処理経験を記載してください。

Data Scienceでは、Pythonによるデータ分析・機械学習の基礎を学習していることを記載し、実務経験のように過度に表現しないでください。

Django REST Framework、API設計、PostgreSQL、推薦システム、AI活用などは、必要に応じてCurrently Learningに分類してください。

既存デザインを大きく崩さず、カード形式やタグ表示を使って読みやすく整理してください。
```

---

## 19. 注意事項

* 技術名だけの一覧にしない
* 実装経験が浅い技術を「使いこなせる」と書かない
* 学習中の技術と経験済みの技術を混同しない
* 文章を長くしすぎない
* Worksページと内容を重複させすぎない
* 技術スタックを盛りすぎない
* 未経験の技術を断定的に書かない
* 現在の実力と今後の学習予定を分けて書く
* 長期インターンの採用担当者が見ても分かりやすい表現にする

---

## 20. まとめ

Skillsページでは、以下を伝える。

```text
React / Next.js / Django / Python を中心に、Webアプリ開発とデータ分析の基礎を学習・実装していること。
```

また、単に技術名を並べるのではなく、以下を明確にする。

```text
どの技術を使って、何を実装したのか。
どの技術は現在学習中なのか。
どの制作物とスキルがつながっているのか。
```

Skillsページを通して、閲覧者に以下の印象を与えることを目指す。

```text
React / Next.js を中心としたフロントエンド開発、Djangoを用いたバックエンド開発、Pythonによるデータ分析の基礎を学びながら、実際のWebアプリとして形にしている学生エンジニア。
```
