
---

### 2-2. 物件追加マニュアル（`docs/content-update-listings.md`）

```md
# 物件追加マニュアル（/listings）

## 1. 触るファイル

- `src/data/listings.ts`
  - `LISTINGS` のような配列に 1 件ずつオブジェクトを追加する想定

## 2. 追加手順（ざっくり）

1. 画像ファイルを用意
   - フォルダ：`public/assets/images/listings/<slug>/`
   - 例：`public/assets/images/listings/2025-0001-toyonaka-1ldk/01.jpg`
   - 最低 1 枚は必須（サムネ用）

2. `listings.ts` にベースとなるオブジェクトをコピー
   - 既存の似た物件のオブジェクトをコピーして流用するのが楽

3. 以下の項目を必ず埋める（必須）

   - `id`： `"2025-0001"` のような内部 ID
   - `slug`： `2025-0001-toyonaka-1ldk` のような URL 用文字列
   - `dealType`: `'rent'` or `'buy'`
   - `status`: `'available'`（募集中） / `'reserved'` / `'closed'`
   - `title`: ユーザー向けタイトル
   - `summary`: 2〜3行程度の要約
   - `prefecture`: `"大阪府"`
   - `city`: `"豊中市"` など
   - `areaLabel`: `"豊中市・千里中央エリア"` など
   - `addressSummary`: `"豊中市○○町"` くらいのぼかし住所
   - `nearestStation`: `"千里中央駅"` など
   - `stationLine`: `"北大阪急行"` など
   - `stationWalkMinutes`: `7` など
   - `petAllowed`: `true`
   - `petDetail.petTypes`: `['dog']` など
   - `images`: サムネを含む画像パス配列
   - `lastCheckedAt`: `"2025-11-21"` など（募集状況を確認した日）

4. 賃貸か購入かで追加項目を埋める

   - 賃貸（`dealType: 'rent'`）
     - `rent`
     - `managementFee`
     - `deposit`
     - `keyMoney`
     - `contractType`
   - 購入（`dealType: 'buy'`）
     - `price`
     - `managementFeeMonthly`
     - `reserveFundMonthly`
     - `ownershipType`

5. `suitableFor` / `notSuitableFor` を書く
   - 例：
     - `suitableFor: ['小型犬と二人暮らし', '静かな環境を重視する人']`
     - `notSuitableFor: ['楽器演奏を毎日したい人', '大型犬2頭以上']`

6. マップ用の住所を確認
   - `addressSummary` を Google マップで検索して、位置が大きくズレないかチェック
   - 詳細住所までは載せない（プライバシー配慮）

## 3. 追加後のチェック項目

1. `npm run dev` を実行
2. `/listings/` でカード表示されるか確認
3. 対象物件のカードをクリック → `/listings/{slug}/` が 404 にならないか
4. 物件詳細ページで
   - タイトル／賃料 or 価格
   - エリア／駅徒歩
   - ペット条件
   が崩れていないかを確認
5. マップが表示される場合は、所在地が極端にズレていないかざっくり確認
```
