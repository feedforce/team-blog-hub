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
