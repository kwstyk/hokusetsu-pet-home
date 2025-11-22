
---

## 5. 未決事項 / 技術負債リスト（`docs/open-questions-and-debt.md`）

```md
# 未決事項 & 技術負債リスト

※「ちゃんと決め切っていないこと」「後回しにしていること」をここに溜める。

## 1. ページ構成まわり

- `/blog` の扱い
  - どこまで力を入れるか（事例・ガイド優先で、ブログは最低限でよい？）
  - ナビから外すタイミングをどうするか（/cases と /guides のコンテンツ量次第？）
- `/request` ページ
  - URL 案：`/request/` or `/contact/request/`
  - 中身：フォーム型 or LINE 誘導型 LP か
  - 実装タイミング：事例が何件たまったら着手するか？

## 2. MAP 実装まわり

- My Maps の扱い
  - `/guides` のトップに `iframe` を埋め込む方針は OK か？
  - 物件詳細ページに、My Maps ではなく「住所ベースの単純な Google マップ」を埋め込む方針は維持でよいか？
- 将来の API 連携
  - Google Maps JS API / Geocoding API を使って、緯度経度をデータに持たせる可能性

## 3. データ構造・実装まわり

- `src/data/listings.ts` のデータ量が増えたとき
  - JSON / YAML / MDX への移行タイミング
  - 「1物件 = 1ファイル」に分割するかどうか
- `/cases` / `/guides` のデータソース
  - 最終的に Astro の Content Collection に寄せるか、全部 TS に寄せてしまうか

## 4. 技術負債っぽいところ

- 一部 `any` で逃げている箇所の型付け
- 仮ラベルや仮テキストのまま放置されている箇所
- `/pages/backup` や一時ファイルの整理
```
