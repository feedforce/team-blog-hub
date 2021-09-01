export const config = {
  siteMeta: {
    title: "Feedforce Engineers' Blogs",
    teamName: "Feedforce Group Inc.",
    description: "フィードフォースグループに所属するエンジニアのブログ記事をまとめています。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://feedforce.github.io/team-blog-hub"
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
