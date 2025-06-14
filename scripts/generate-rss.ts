import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { getAllPostMetas } from '../src/lib/postDataUtils';

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export function generateRssFeed() {
    const posts = getAllPostMetas();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;
    const rssItemsXml = posts.map((post) => `
        <item>
            <title>${escapeXml(post.title)}</title>
            <link>${baseUrl}/${post.category}/${post.slug}</link>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <description>${escapeXml(post.desc ?? '')}</description>
        </item>
    `).join('');
    
    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
        <channel>
            <title>Hyeongyu's Blog</title>
            <link>${baseUrl}</link>
            <description>Front-end developer's blog</description>
            <language>ko</language>
            <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
            <generator>Next.js RSS Generator</generator>
            ${rssItemsXml}
        </channel>
    </rss>`;
    fs.writeFileSync(path.join(process.cwd(), 'public', 'rss.xml'), rssXml);
}

generateRssFeed();