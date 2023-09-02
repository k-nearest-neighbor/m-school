import RSS from "rss";
import { collectAllPostsAndPapers } from '@/navigation-and-content';

const feed = new RSS({
  title: 'AI Breakout',
  description: 'Notes on AI Research',
  site_url: 'https://ai-breakout.com',
  feed_url: 'https://ai-breakout.com/rss.xml',
  copyright: '(c) D.G. 2023',
  language: 'US-en',
  pubDate: new Date(),
});


const posts = collectAllPostsAndPapers()

posts.map((post) => {
  feed.item({
    title: post.title,
    description: post.template === 'paper' ? post.nickname : post.excerpt,
    url: `https://ai-breakout.com${post.href}`,
    guid: post.href,
    date: post.authored_date,
    categories: [post.template]
  });
});


export async function GET() {
  return new Response(feed.xml({indent:true}), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}