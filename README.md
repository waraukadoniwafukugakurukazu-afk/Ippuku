# 一服 / IPPUKU — 喫煙カフェ ホームページ

黒・真鍮色・生成りの質感を基調とした、和モダン／クラシックな喫煙カフェのサイトです。スマートフォンとPCの両方に対応しています。

## ページ内容

- **ABOUT** — 店舗の世界観
- **MENU** — 珈琲・飲み物、甘味・軽食
- **GOODS** — ライター、灰皿、喫煙小物
- **ACCESS** — 店舗住所・営業時間・Google マップ

## 開き方

このリポジトリの `index.html` をブラウザーで開くと表示できます。ビルドやインストールは不要です。

## 先に設定する項目

**現時点では、実際のメニュー・商品・住所が未提供のため、デモ用の仮情報を表示しています。** 仮の商品名を正式な店舗情報として公開しないでください。

1. **住所・営業時間：** `script.js` 冒頭の `SHOP_INFO` に入力してください。住所を入力すると、ACCESS欄にGoogleマップが自動表示され、地図リンクも使えるようになります。
2. **メニュー・料金：** `index.html` の `<section id="menu">` 内を変更してください。現在の「—」は価格未設定です。
3. **販売商品：** `index.html` の `<section id="goods">` 内を変更してください。現在の画像は商品カテゴリーを表すイラストで、実際の在庫を意味しません。
4. **ブランドや配色：** `styles.css` の冒頭で調整できます。

## Cloudflare Workers での公開

Cloudflare の **Workers & Pages → ippuku → Settings → Builds** で GitHub リポジトリ `Ippuku` と `main` ブランチを接続します。Build command は空欄、Deploy command は `npx wrangler deploy` を設定してください。

リポジトリには `wrangler.jsonc`（Worker名 `ippuku`、静的ファイル公開設定）を用意しています。接続後は `main` へのコミットをきっかけに Cloudflare の自動デプロイが実行されます。結果は Workers の Builds / Deployments で確認してください。公開URLは Cloudflare ダッシュボードの Overview / Domains で確認できます。

`README.md` の公開手順修正は、接続確認のための新しいコミットも兼ねています。

公開前には、最新のメニュー・商品の実在や価格、所在地、営業時間、および喫煙関連の施設表示・法令への適合を確認してください。

## 構成

```
Ippuku/
├── index.html    # ページ内容とSVGイラスト
├── styles.css    # 渋い黒・真鍮色のデザイン、レスポンシブ対応
├── script.js     # スマホメニュー・店舗情報・地図の切り替え
├── favicon.svg   # 一のロゴ
├── wrangler.jsonc # Cloudflare Workers の設定
├── .assetsignore  # 配信対象の除外設定
└── README.md     # この案内
```

No build tools required.
