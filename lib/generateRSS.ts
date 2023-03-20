import { writeFileSync } from "fs";
import MDXContent from "./MDXContent";

export default async function getRSS() {
  const siteURL = "DOMAIN";
  const allBlogs = new MDXContent("posts").getAllPosts();
  var RSS = require("rss");

  // Create a new RSS object
  const feed = new RSS({
    title: "NAME",
    description: `In total, I've written ${allBlogs.length} articles
            till now.`,
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, `,
  });

  // Add all blog posts to the RSS feed
  allBlogs?.map((post) => {
    feed.item({
      title: post!.title,
      url: `${siteURL}/archives/${post?.slug}`,
      date: post!.date,
      description: post!.excerpt,
    });
  });

  // Write the RSS feed to a file
  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
