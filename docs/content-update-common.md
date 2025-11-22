
---

## 2. コンテンツ更新マニュアル

### 2-1. 共通ルール（`docs/content-update-common.md`）

```md
# コンテンツ更新 共通ルール

## 1. 基本方針

- 「更新が止まると信用が落ちる」コンテンツを優先してメンテする
  - 物件情報（/listings）
  - プロフィール・サービス情報（/about, /first-time）
- 「止まっていても死なない」コンテンツは無理に追わない
  - ブログ（/blog）
  - 一部のガイド（/guides）

## 2. 作業の基本フロー

1. `git pull` して最新版取得
2. 対象コンテンツのファイルを編集
3. `npm run dev` でローカル確認
4. 問題なければ `git commit` & `git push`
5. 本番 URL で最終確認

## 3. 命名・ID の考え方

- `slug` は URL に載るので、英小文字 + `-` で構成
  - 例: `2025-0001-toyonaka-1ldk-pet-small-dog`
- `id` は内部管理用。あとから変えない前提で付ける
  - 例: `"2025-0001"`
- 画像フォルダ名は `slug` と合わせると迷わない
  - `/public/assets/images/listings/2025-0001-toyonaka-1ldk/01.jpg` など
````
