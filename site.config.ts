export const config = {
  siteMeta: {
    title: "Feedforce Engineers' Blogs",
    teamName: "Feedforce Group Inc.",
    description: "フィードフォースグループに所属するエンジニアのブログ記事をまとめています。",
    copyright: "© Feedforce Inc.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://engineers.feedforce.jp"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Company",
      href: "https://feedforcegroup.jp",
    },
    {
      title: "GitHub",
      href: "https://github.com/feedforce",
    },
    {
      title: "Recruit",
      href: "https://engineers.recruit.feedforce.jp"
    }
  ],
};
