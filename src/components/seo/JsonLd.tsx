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
        "https://www.google.com/search?kgmid=/g/11nvv_hnwc&hl=tr-TR&q=MainX+Yaz%C4%B1l%C4%B1m%26Geli%C5%9Ftirme+St%C3%BCdyolar%C4%B1",
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
    name: "MainX Yazılım&Geliştirme Stüdyoları",
    alternateName: "MainX Stüdyoları",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "Şanlıurfa merkezli yazılım geliştirme, kurumsal web tasarım, B2B SaaS, mobil uygulama ve yapay zeka çözümleri stüdyosu.",
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/sukru-bas#person`,
      name: "Şükrü BAŞ",
      url: `${SITE_URL}/sukru-bas`
    },
    sameAs: [
      "https://www.google.com/search?kgmid=/g/11nvv_hnwc&hl=tr-TR&q=MainX+Yaz%C4%B1l%C4%B1m%26Geli%C5%9Ftirme+St%C3%BCdyolar%C4%B1",
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

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "MainX Yazılım&Geliştirme Stüdyoları",
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
      name: "MainX Yazılım&Geliştirme Stüdyoları",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`
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

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: "MainX Yazılım&Geliştirme Stüdyoları",
    alternateName: "MainX Stüdyoları",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/sukru-bas-yazilim-uzmani.jpg`,
    description: "Şanlıurfa merkezli yazılım geliştirme, kurumsal web tasarım, B2B SaaS, mobil uygulama geliştirme ve yapay zeka stüdyosu.",
    telephone: "+90 545 882 26 70",
    email: "hello.mainx@gmail.com",
    priceRange: "₺₺",
    founder: {
      "@type": "Person",
      name: "Şükrü BAŞ",
      url: `${SITE_URL}/sukru-bas`
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Selahaddin Eyyübi",
      addressLocality: "Şanlıurfa Merkez",
      addressRegion: "Şanlıurfa",
      postalCode: "63000",
      addressCountry: "TR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.1674,
      longitude: 38.7955
    },
    sameAs: [
      "https://www.google.com/search?kgmid=/g/11nvv_hnwc&hl=tr-TR&q=MainX+Yaz%C4%B1l%C4%B1m%26Geli%C5%9Ftirme+St%C3%BCdyolar%C4%B1",
      "https://github.com/sukru00dev",
      "https://www.linkedin.com/in/sukrubasdev",
      "https://instagram.com/sukrukodluyor",
      "https://medium.com/@sukrubas"
    ],
    areaServed: [
      { "@type": "City", name: "Şanlıurfa" },
      { "@type": "AdministrativeArea", name: "Güneydoğu Anadolu" },
      { "@type": "Country", name: "Türkiye" }
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Şanlıurfa Yazılım Geliştirme Hizmetleri",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Şanlıurfa Özel Yazılım ve B2B SaaS Geliştirme" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Şanlıurfa Kurumsal Web Tasarım ve E-Ticaret" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Şanlıurfa Mobil Uygulama Geliştirme (iOS & Android)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yapay Zeka (AI) ve Otomasyon Entegrasyonu" } }
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

export function ServiceSchema({
  name,
  description,
  url
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: name,
    description: description,
    url: url,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "MainX Yazılım&Geliştirme Stüdyoları",
      url: SITE_URL,
      telephone: "+90 545 882 26 70"
    },
    areaServed: [
      { "@type": "City", name: "Şanlıurfa" },
      { "@type": "AdministrativeArea", name: "Güneydoğu Anadolu" },
      { "@type": "Country", name: "Türkiye" }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
