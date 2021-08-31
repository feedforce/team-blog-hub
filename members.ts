import { Member } from "@src/types";

export const members: Member[] = [
  // {
  //   name: "required",
  //   role: "optional",
  //   bio: "required",
  //   avatarSrc: "required",
  //   sources: [
  //     "required",
  //   ],
  //   includeUrlRegex: "required",
  //   twitterUsername: "optional",
  //   githubUsername: "optional",
  //   websiteUrl: "optional",
  // },
  {
    name: "tmd45",
    role: "SocialPLUS CS & Sr.Developer",
    bio: "散財部風紀取り乱し委員わいわい係",
    avatarSrc: "https://www.gravatar.com/avatar/f58db7375362f804258f3cb3476b1586?size=256",
    sources: [
      "https://developer.feedforce.jp/feed/author/tmd45",
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
