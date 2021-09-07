import { Member } from "@src/types";

export const members: Member[] = [
  // 設定のテンプレート。コピペして使ってください
  // {
  //   name: "必須",
  //   role: "オプション",
  //   bio: "必須",
  //   avatarSrc: "必須 (画像の URL もしくは public/avatars/ 以下にある画像への相対パス)",
  //   sources: [
  //     "https://developer.feedforce.jp/feed/author/はてなID",
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
      "https://developer.feedforce.jp/feed",
    ],
  },
  {
    name: "daido1976",
    bio: "京都在住のフルリモートワーカーです",
    avatarSrc: "https://www.gravatar.com/avatar/d6717b12844bf915d4555cf7869532ec?size=256",
    sources: [
      "https://developer.feedforce.jp/feed/author/daido1976",
    ],
    twitterUsername: "daido1976",
    githubUsername: "daido1976",
    websiteUrl: "https://daido1976.github.io",
  },
  {
    name: "masutaka",
    role: "LookML Developer",
    bio: "カレー大好き！",
    avatarSrc: "https://www.gravatar.com/avatar/b7a93b5c3bcfa8f2f8047584cc16bf13?size=256",
    sources: [
      "https://developer.feedforce.jp/feed/author/masutaka26",
      "https://masutaka.net/chalow/cl.rss",
    ],
    twitterUsername: "masutaka",
    githubUsername: "masutaka",
    websiteUrl: "https://masutaka.net",
  },
  {
    name: "ryz310",
    bio: "バックエンドエンジニア。クラロワ好き⚔️",
    avatarSrc: "https://www.gravatar.com/userimage/47883079/b6f69b2794a96e21e5a037f511603d43?size=256",
    sources: [
      "https://developer.feedforce.jp/feed/author/ryz310",
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
      "https://developer.feedforce.jp/feed/author/tmd45",
      "https://zenn.dev/tmd45/feed",
      "https://blog.tmd45.jp/feed/category/AdventCalendar",
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
      "https://developer.feedforce.jp/feed/author/tsub511",
      "https://blog.tsub.me/index.xml",
    ],
    twitterUsername: "_tsub_",
    githubUsername: "tsub",
    websiteUrl: "https://tsub.me",
  },
];
