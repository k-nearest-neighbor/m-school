// https://claritydev.net/blog/nextjs-dynamic-sitemap-pages-app-directory

import { collectAllPosts, collectAllPapers, navigation } from "@/navigation-and-content";

const URL = "https://ai-breakout.com";

export default async function sitemap() {
  const posts = collectAllPosts().map((post) => ({
    url: `${URL}${post.href}`,
    lastModified: post.authored_date.toISOString(),
  }));

  const papers = collectAllPapers().map((paper) => ({
    url: `${URL}${paper.href}`,
    lastModified: paper.authored_date.toISOString(),
  }));

  const navigationLinks = navigation
    .filter((nav) => !nav.hide && (nav.title === "Latest" || nav.links.length > 0))
    .map((nav) => nav.links)
    .flat()
    .map((link) => ({
      url: `${URL}${link.href}`,
      lastModified: new Date().toISOString(),
    }));


  const routes = ["/"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts, ...papers];
}
