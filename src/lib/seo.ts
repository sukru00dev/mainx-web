import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mainx-web.vercel.app";

const DEFAULT_KEYWORDS = [
  "Şanlıurfa yazılım",
  "Şanlıurfa yazılım geliştirme",
  "Şanlıurfa yazılım şirketi",
  "Şanlıurfa web tasarım",
  "Şanlıurfa mobil uygulama geliştirme",
  "Urfa yazılım firmaları",
  "MainX Stüdyoları",
  "Şükrü BAŞ",
];

export function constructMetadata({
  title = "MainX Stüdyoları | Şanlıurfa Yazılım Geliştirme, Web Tasarım & Mobil Uygulama",
  description = "Şanlıurfa yazılım geliştirme firması MainX Stüdyoları (Şükrü BAŞ); kurumsal web tasarım, B2B SaaS, Flutter mobil uygulama, yapay zeka ve blok zinciri çözümleri sunar.",
  image = "/sukru-bas-yazilim-uzmani.jpg",
  path = "",
  noIndex = false,
  keywords = DEFAULT_KEYWORDS,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
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
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": "TR-63",
      "geo.placename": "Şanlıurfa",
      "geo.position": "37.1674;38.7955",
      "ICBM": "37.1674, 38.7955",
    },
  };
}
