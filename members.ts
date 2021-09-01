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
  //   includeUrlRegex: "developer.feedforce.jp|ドメイン名を正規表現で記述する",
  //   twitterUsername: "オプション",
  //   githubUsername: "オプション",
  //   websiteUrl: "オプション",
  // },
  {
    name: "daido1976",
    bio: "京都在住のフルリモートワーカーです",
    avatarSrc: "https://www.gravatar.com/avatar/d6717b12844bf915d4555cf7869532ec?size=256",
    sources: [
      "https://developer.feedforce.jp/feed/author/daido1976",
    ],
    includeUrlRegex: "developer.feedforce.jp",
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
    includeUrlRegex: "developer.feedforce.jp|masutaka.net",
    twitterUsername: "masutaka",
    githubUsername: "masutaka",
    websiteUrl: "https://masutaka.net",
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
    includeUrlRegex: "developer.feedforce.jp|blog.tmd45.jp",
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
    includeUrlRegex: "developer.feedforce.jp|blog.tsub.me",
    twitterUsername: "_tsub_",
    githubUsername: "tsub",
    websiteUrl: "https://tsub.me",
  },
];
