import { SITE_URL } from "@/lib/seo";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/sukru-bas#person`,
      name: "Şükrü BAŞ",
      url: `${SITE_URL}/sukru-bas`,
      image: `${SITE_URL}/sukru-bas-yazilim-uzmani.jpg`,
      jobTitle: "Yazılım Geliştirici",
      worksFor: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`
      },
      sameAs: [
        "https://github.com/sukru00dev",
        "https://www.linkedin.com/in/sukrubasdev",
        "https://instagram.com/sukrukodluyor",
        "https://medium.com/@sukrubas"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "MainX Stüdyoları",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description: "MainX Stüdyoları; web ve SaaS uygulamaları, yapay zeka, mobil uygulamalar, kurumsal yazılım ve modern dijital çözümler geliştirir.",
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/sukru-bas#person`,
      name: "Şükrü BAŞ",
      url: `${SITE_URL}/sukru-bas`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "MainX Stüdyoları",
    url: SITE_URL
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  date,
  url,
  image
}: {
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image,
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/sukru-bas#person`,
      name: "Şükrü BAŞ",
      url: `${SITE_URL}/sukru-bas`
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "MainX Stüdyoları",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
