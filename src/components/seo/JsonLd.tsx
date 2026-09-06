import { SITE_URL } from "@/lib/seo";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Şükrü BAŞ",
    jobTitle: "Software Engineer",
    url: SITE_URL,
    sameAs: [
      "https://github.com/sukru00dev",
      "https://www.linkedin.com/in/sukrubasdev",
      "https://instagram.com/sukrukodluyor",
      "https://medium.com/@sukrubas"
    ]
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
    name: "MainX Stüdyoları",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    founder: {
      "@type": "Person",
      name: "Şükrü BAŞ"
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
