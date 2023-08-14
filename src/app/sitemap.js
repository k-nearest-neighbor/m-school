// https://claritydev.net/blog/nextjs-dynamic-sitemap-pages-app-directory

import { collectAllPosts } from "@/navigation-and-content";

const URL = "https://ai-breakout.com";

export default async function sitemap() {
  const posts = collectAllPosts().map((post) => ({
    url: `${URL}${post.href}`,
    lastModified: post.date.toISOString(),
  }));

  const routes = ["", "/portfolio", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
