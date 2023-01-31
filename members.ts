import { Member } from "@src/types";

export const members: Member[] = [
  // 設定のテンプレート。コピペして使ってください
  // {
  //   name: "必須",
  //   role: "オプション",
  //   bio: "必須",
  //   avatarSrc: "必須 (画像の URL もしくは public/avatars/ 以下にある画像への相対パス)",
  //   sources: [
  //     "https://developer.feedforce.jp/rss/author/はてなID",
  //     "個人ブログ, Qiita, Zenn などの RSS フィードの URL",
  //   ],
  //   includeUrlRegex: "オプション (RSS フィードの記事で特定の記事のみ掲載したい場合にマッチ条件を正規表現で記述する)",
  //   excludeUrlRegex: "オプション (RSS フィードの記事で特定の記事のみ除外したい場合にマッチ条件を正規表現で記述する)",
  //   twitterUsername: "オプション",
  //   githubUsername: "オプション",
  //   websiteUrl: "オプション",
  // },
  {
    // 技術ブログの記事のみ、他のメンバーのフィードと同一記事があった場合、他のメンバーが優先される
    // see distinctFeedItemsOnlyFeedforceDeveloperBlog func in src/builder/posts.ts
    name: "feedforce",
    bio: "Feedforce Developer Blog",
    avatarSrc: "/avatars/feedforce.jpg",
    sources: [
      "https://developer.feedforce.jp/rss",
    ],
  },
  {
    name: "mashabow",
    bio: "フロントエンドエンジニア。文字が好き。",
    avatarSrc: "https://www.gravatar.com/avatar/6afbe110d33ef7e859fb8649b86bae55?size=256",
    sources: [
      "https://developer.feedforce.jp/rss/author/mashabow",
      "https://rewired.cloud/author/mashabow/feed",
      "https://shiromoji.hatenablog.jp/rss",
    ],
    twitterUsername: "mashabow",
    githubUsername: "mashabow",
    websiteUrl: "https://shiromoji.hatenablog.jp",
  },
  {
    name: "ryz310",
    bio: "バックエンドエンジニア。クラロワ好き⚔️",
    avatarSrc: "https://www.gravatar.com/userimage/47883079/b6f69b2794a96e21e5a037f511603d43?size=256",
    sources: [
      "https://developer.feedforce.jp/rss/author/ryz310",
      "https://ryz310.hateblo.jp/rss",
    ],
    twitterUsername: "ryosuke_sato",
    githubUsername: "ryz310",
    websiteUrl: "https://rubygems.org/profiles/ryz310",
  },
  {
    name: "tmd45",
    role: "CSE",
    bio: "散財部風紀取り乱し委員わいわい係",
    avatarSrc: "https://www.gravatar.com/avatar/f58db7375362f804258f3cb3476b1586?size=256",
    sources: [
      "https://developer.feedforce.jp/rss/author/tmd45",
      "https://zenn.dev/tmd45/feed",
      "https://blog.tmd45.jp/rss/category/AdventCalendar",
    ],
    twitterUsername: "tmd45",
    githubUsername: "tmd45",
    websiteUrl: "https://tmd45.jp",
  },
  {
    name: "tsub",
    bio: "コンテナが好きです",
    avatarSrc: "https://www.gravatar.com/avatar/cb16e623d2ac0c0d10440745d4525f04?size=256",
    sources: [
      "https://developer.feedforce.jp/rss/author/tsub511",
      "https://blog.tsub.me/index.xml",
    ],
    twitterUsername: "_tsub_",
    githubUsername: "tsub",
    websiteUrl: "https://tsub.me",
  },
  {
    name: "yaonyan",
    role: "データサイエンティスト",
    bio: "かっこいいワンフレーズ自己紹介などない",
    avatarSrc: "https://s.gravatar.com/avatar/bea1d48ae8ab2b9480d5bbbe6bdd6a33?s=256",
    sources: [
      "https://developer.feedforce.jp/rss/author/newton800",
    ],
    twitterUsername: "feed_yao",
    githubUsername: "yaoshunya",
  }
];
