import { getAllPosts } from "@/lib/mdx";
import { SITE_URL } from "@/lib/seo";

export async function GET() {
  const posts = getAllPosts("blog");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MainX Stüdyoları | Şanlıurfa Yazılım &amp; Teknoloji Blogu</title>
    <link>${SITE_URL}</link>
    <description>Şanlıurfa yazılım geliştirme, kurumsal web tasarım, Flutter mobil uygulama ve yapay zeka rehberleri</description>
    <language>tr</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description || ""}]]></description>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
