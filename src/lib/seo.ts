export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mainx-web.vercel.app";

export function constructMetadata({
  title = "MainX Stüdyoları | Yazılım, Yapay Zeka ve Dijital Çözümler",
  description = "MainX Stüdyoları; web ve SaaS uygulamaları, yapay zeka, mobil uygulamalar, kurumsal yazılım ve modern dijital çözümler geliştirir.",
  image = "/profile.jpg",
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}) {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "MainX Stüdyoları",
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@sukrukodluyor",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
