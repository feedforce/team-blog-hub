import { Feed } from "feed";
import fs from "fs-extra";
import posts from "../../.contents/posts.json";
import { config } from "../../site.config";
import { PostItem } from "../types";

const generateFeed: () => Feed = () => {
  const feed = new Feed({
    title: config.siteMeta.title,
    description: config.siteMeta.description,
    id: config.siteRoot,
    link: config.siteRoot,
    copyright: config.siteMeta.copyright,
  });

  posts.forEach((post: PostItem) => {
    feed.addItem({
      title: post.title,
      date: new Date(post.dateMiliSeconds),
      link: post.link,
      description: post.contentSnippet,
    });
  })

  return feed;
}

// yarn build:posts が先に実行されている前提
(function() {
  const feed = generateFeed();

  fs.writeFileSync("public/rss.xml", feed.rss2());
  fs.writeFileSync("public/atom.xml", feed.atom1());
})();
