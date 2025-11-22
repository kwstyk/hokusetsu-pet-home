
---

## 3. コーディング規約 / コンポーネント設計メモ（`docs/coding-guidelines.md`）

```md
# コーディング規約 & コンポーネント設計メモ

## 1. ディレクトリ方針

- `src/pages/`
  - URL に対応するページファイルのみ置く
  - ロジックや UI はできるだけ `components/` 側へ
- `src/components/`
  - `common/`: 全ページで使う汎用 UI
    - Header, Footer, PageHeader, SectionTitle など
  - `listings/`: 物件まわりの UI
    - ListingCard, ListingList, ListingFilter など
  - `cases/`, `guides/` も必要に応じて作る
- `src/data/`
  - TypeScript のデータと型定義
  - DB や API がわりの「読み取り専用」レイヤ

## 2. 命名規則

- コンポーネント：PascalCase（`ListingCard.astro`）
- 型（interface / type）：PascalCase（`Listing`, `Case`, `GuidePost`）
- 変数・関数：camelCase（`getAllListings`, `getListingBySlug`）
- ファイル名：
  - ページ：`kebab-case`（`first-time.astro`, `[slug].astro`）
  - データ：`listings.ts`, `cases.ts` など

## 3. Tailwind の使い方

- カラーパレット
  - 基本：`slate` 系で文字・ボーダー
  - アクセント：`emerald` 系（ボタン・タグ）
- レイアウト
  - 横幅は原則 `max-w-5xl mx-auto px-4` をベースにする
  - 上下の余白はセクションごとに `py-8` 〜 `py-12` くらい
- 共通コンポーネントに寄せる
  - `PageHeader`: ページタイトル＋サブタイトルのブロック
  - `Section`: 余白・幅を含めたセクションラッパー（必要なら）

## 4. TypeScript の方針

- `any` は基本禁止
- データ構造（Listing, Case など）は `src/data/types.ts` 的なファイルにまとめてもよい
- `getStaticPaths` と `get` 系はなるべく型をつける

## 5. コメントの方針

- 「なぜその書き方をしているか」が分かりにくい所だけコメントを書く
- 実装そのものはコードと型で読み取れるようにする
- 例：

```ts
// NOTE: status が 'available' 以外の物件は一覧から除外する
//       → 成約済み物件は /cases 側でストーリーとして扱う想定
const visibleListings = allListings.filter((l) => l.status === 'available');
````

## 6. コンポーネント化の基準

* 同じ UI パターンが **2回以上** 出てきたらコンポーネント化を検討

  * 例：PageHeader, 小さなタグ、CTA ボタン など
* 「後から差し替えたい可能性が高いもの」も優先してコンポーネント化

  * グロナビ、フッターナビ、LINE ボタンなど

````

