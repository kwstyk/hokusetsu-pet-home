
---

## 1. 開発環境セットアップ＆デプロイ手順（`docs/dev-setup-and-deploy.md` 想定）

````md
# 開発環境セットアップ & デプロイ手順（北摂ペットホーム）

## 1. 前提環境

- OS: Windows 10/11（開発者 PC）
- 必要ツール
  - Node.js: v18 系推奨（LTS）
  - npm: Node 同梱のもので OK
  - Git: 最新版
  - ブラウザ: Chrome, Edge など
- リポジトリ
  - GitHub: https://github.com/.../hokusetsu-pet-home （※実際の URL を書く）

## 2. 初回セットアップ手順

1. リポジトリをクローンする

   ```bash
   git clone <リポジトリURL> hokusetsu-pet-home
   cd hokusetsu-pet-home/site
````

2. 依存パッケージをインストール

   ```bash
   npm install
   ```

3. 開発サーバを起動

   ```bash
   npm run dev
   ```

4. ブラウザで確認

   * `http://localhost:4321/` にアクセス
   * 画面が表示されれば OK

## 3. 日常の開発フロー

### 3.1 作業前に最新版を取得

```bash
cd hokusetsu-pet-home/site
git pull origin main
```

### 3.2 変更を加える

* `src/pages` 配下でページの修正
* `src/data/listings.ts` で物件の追加・更新
* `content/blog/*.md` でブログ記事の追加（将来）
* `content/guides/*.md` でガイド記事の追加（将来）

### 3.3 ローカルで動作確認

```bash
npm run dev
# http://localhost:4321/ を開いて確認
```

* 画面崩れやエラーがないか確認
* 新しく追加したページの URL も確認
  例: `/listings/`, `/listings/xxx-slug/`, `/first-time/` など

### 3.4 コミット & プッシュ

```bash
git status        # 変更を確認
git add <変更したファイル or .>
git commit -m "feat: 〇〇を追加"  # 日本語でもOK
git push origin main
```

* コミットメッセージに

  * 「何をしたか」
  * 「どのページに影響があるか」
    を軽く書いておくと後から追いやすい。

## 4. Vercel デプロイ

* Vercel の Project と GitHub リポジトリは連携済み想定
* `main` ブランチに push すると、自動でデプロイが走る

1. GitHub 上のリポジトリで「Actions」や「Vercel」の画面を確認
2. ビルドが成功すると、本番 URL が自動更新される
3. 本番 URL（例）:

   * [https://hokusetsu-pet-home.vercel.app/](https://hokusetsu-pet-home.vercel.app/)

## 5. トラブルシュート（よくあるやつ）

### 5.1 `npm run dev` でエラーが出る

1. 依存が壊れているかもなので再インストール

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

2. TypeScript エラーの場合

   * VSCode の波線を確認して、型定義や import を修正

### 5.2 Vercel のビルドが失敗する

* Vercel のログを見る

  * よくある原因

    * `src/pages/backup` など不要ディレクトリのファイルがエラーを出している
    * パスの間違い：`../layouts/BaseLayout.astro` の位置ズレ
* 原則として：

  * `src/pages/backup` のような一時ファイルはコミットしない or `src/pages/_drafts` に移動する（ルーティングされないディレクトリにする）
