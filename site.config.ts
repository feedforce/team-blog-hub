export const config = {
  siteMeta: {
    title: "Feedforce Engineers' Blogs",
    teamName: "Feedforce Inc.",
    description: "株式会社フィードフォースに所属するエンジニアのブログ記事をまとめています。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://www.feedforce.jp",
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
