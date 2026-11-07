import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/seo";
import { getAllPosts } from "@/lib/mdx";

const INDEXNOW_KEY = "a7d8c52e4f1b903487c6e2a1b9d4f6c8";

const services = [
  "sanliurfa-web-tasarim-ve-kurumsal-web-sitesi",
  "sanliurfa-ozel-yazilim-gelistirme",
  "yapay-zeka-entegrasyonu",
  "mobil-uygulama-gelistirme",
  "ozel-saas-yazilimlari",
  "blockchain-cozumleri"
];

export async function GET() {
  const blogs = getAllPosts("blog").map((p) => `${SITE_URL}/blog/${p.slug}`);
  const projects = getAllPosts("projeler").map((p) => `${SITE_URL}/projeler/${p.slug}`);
  const serviceUrls = services.map((s) => `${SITE_URL}/hizmetler/${s}`);

  const urlList = [
    SITE_URL,
    `${SITE_URL}/sanliurfa-yazilim`,
    `${SITE_URL}/sukru-bas`,
    `${SITE_URL}/katalog`,
    `${SITE_URL}/blog`,
    ...serviceUrls,
    ...blogs,
    ...projects
  ];

  const host = new URL(SITE_URL).hostname;

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    const status = res.status;
    const ok = res.ok || status === 200 || status === 202;

    return NextResponse.json({
      success: ok,
      status,
      submittedUrls: urlList.length,
      urls: urlList
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "IndexNow submission failed" },
      { status: 500 }
    );
  }
}
