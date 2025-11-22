
---

### 2-3. 成約事例追加マニュアル（`docs/content-update-cases.md`）

```md
# 成約事例追加マニュアル（/cases）

※現状は枠のみ。将来的にこう運用する前提の案。

## 1. 触る場所

- v0.1 案：
  - `src/data/cases.ts` で `Case[]` を定義し、`/cases` で一覧表示
- v1 以降のアイデア：
  - `content/cases/*.md` の Markdown で管理（Astro Content Collection）

## 2. Case の想定項目（案）

- `id`: `"case-2025-0001"`
- `slug`: `"2025-0001-toyonaka-small-dog"`
- `title`: `"豊中で小型犬1匹と暮らすために選んだ1LDK"`
- `areaLabel`: `"豊中市・千里中央エリア"`
- `dealType`: `'rent' | 'buy'`
- `petSummary`: `"小型犬1匹（3歳・室内）"`
- `household`: `"30代夫婦 + 犬1匹"`
- `problemsBefore`: `"ペット可と書いてあるのに実際は不可が多く、何度も断られていた"`
- `pointsOfDecision`: `"エレベーターあり／近くに大きめの公園／管理会社がペットに理解あり"`
- `voice`: `"最初の条件整理から根気よく付き合ってくれて..."`（お客様の声）
- `publishedAt`: `"2025-12-10"`

## 3. 基本方針

- 物件の羅列ではなく、「ストーリー」として書く
- 読み手が「自分もこういうケースかな？」とイメージできるように
  - 家族構成
  - ペット
  - 悩んでいたポイント
  - 決め手
- `/cases/[slug]` の URL には、エリア＋ペット情報がちらっと想像できる slug を付ける
```
