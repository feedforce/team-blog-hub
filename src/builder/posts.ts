import fs from "fs-extra";
import Parser from "rss-parser";
import _ from "lodash";
import { members } from "../../members";
import { PostItem, Member } from "../types";
export default {};

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

const parser = new Parser();
let allPostItems: PostItem[] = [];

async function fetchFeedItems(url: string) {
  const feed = await parser.parseURL(url);
  if (!feed?.items?.length) return [];

  // return item which has title and link
  return feed.items
    .map(({ title, contentSnippet, link, isoDate }) => {
      return {
        title,
        contentSnippet: contentSnippet?.replace(/\n/g, ""),
        link,
        isoDate,
        dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
      };
    })
    .filter(({ title, link }) => title && link) as FeedItem[];
}

async function getFeedItemsFromSources(sources: undefined | string[]) {
  if (!sources?.length) return [];
  let feedItems: FeedItem[] = [];
  for (const url of sources) {
    const items = await fetchFeedItems(url);
    if (items) feedItems = [...feedItems, ...items];
  }
  return feedItems;
}

async function getMemberFeedItems(member: Member): Promise<PostItem[]> {
  const { sources, name, includeUrlRegex, excludeUrlRegex } = member;
  const feedItems = await getFeedItemsFromSources(sources);
  if (!feedItems) return [];

  let postItems = feedItems.map((item) => {
    return {
      ...item,
      authorName: name,
    };
  });
  // remove items which not matches includeUrlRegex
  if (includeUrlRegex) {
    postItems = postItems.filter((item) => {
      return item.link.match(new RegExp(includeUrlRegex));
    });
  }
  // remove items which matches excludeUrlRegex
  if (excludeUrlRegex) {
    postItems = postItems.filter((item) => {
      return !item.link.match(new RegExp(excludeUrlRegex));
    });
  }

  return postItems;
}

// 技術ブログの記事のみ重複を排除する
function distinctFeedItemsOnlyFeedforceDeveloperBlog(items: PostItem[]): PostItem[] {
  const groupedByLink = _.groupBy(items, 'link');

  return _.flatMap(groupedByLink, (sameLinkItems, link) => {
    // 技術ブログ以外の記事には何もしない
    if (!link.startsWith('https://developer.feedforce.jp')) {
      return sameLinkItems;
    }

    // 記事が 1 つしかない場合は何もしない
    if (sameLinkItems.length < 2) {
      return sameLinkItems;
    }

    // feedforce 以外のメンバーを執筆者として優先する
    return _.reject(sameLinkItems, item => item.authorName === 'feedforce');
  });
}

(async function() {
  for (const member of members) {
    const items = await getMemberFeedItems(member);
    if (items) allPostItems = [...allPostItems, ...items];
  }
  const distinctAllPostItems = distinctFeedItemsOnlyFeedforceDeveloperBlog(allPostItems);
  distinctAllPostItems.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);
  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/posts.json", distinctAllPostItems);
})();
