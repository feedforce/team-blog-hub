# Feedforce Engineers' Blogs

![CI workflow status](https://github.com/feedforce/team-blog-hub/actions/workflows/ci.yml/badge.svg)

https://engineers.feedforce.jp

フィードフォースグループに所属するエンジニアのブログ記事をまとめています。

## Development

```bash
$ yarn install
$ yarn build
$ yarn dev
```

- サイトの基本設定は`site.config.ts`で行います。
- メンバーのプロフィールやRSSの登録は`members.ts`で行います。
- 配色を変更するには`src/styles/variables.scss`を書き換えます。
- ロゴなどの画像を変更するには`public`内のファイルを置き換えます。

その他、ご自由にコードを書き換えてください。

## How to add a member

`members.ts` に設定を追加してください。

設定内容は既存の設定を参考にしてください。

## Deployment

`feedforce` ブランチに Push すると GitHub Actions により自動でデプロイされます。

ビルドした静的ファイルは GitHub Pages で公開しています。

また、最新の RSS フィードを取得し直すため、毎日 10:00am にも自動デプロイが走ります。

## Licence

MIT
