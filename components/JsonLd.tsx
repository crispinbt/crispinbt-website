export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Crispin Boden-Tebbutt",
    url: "https://crispinbt.co.uk",
    logo: "https://crispinbt.co.uk/images/headshot.jpg",
    sameAs: ["https://www.linkedin.com/in/crispinbt"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Crispin Boden-Tebbutt",
    jobTitle: "SEO Consultant",
    url: "https://crispinbt.co.uk",
    sameAs: ["https://www.linkedin.com/in/crispinbt"],
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
    "@type": "LocalBusiness",
    name: "Crispin Boden-Tebbutt - SEO Consultant",
    description: "SEO consultant based in Swansea, South Wales. Technical SEO, content strategy, local SEO and custom projects for UK businesses.",
    url: "https://crispinbt.co.uk",
    areaServed: ["Swansea", "South Wales", "United Kingdom"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Swansea",
      addressRegion: "Wales",
      addressCountry: "GB",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
