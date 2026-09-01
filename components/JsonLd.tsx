const SITE = "https://crispinbt.co.uk";
const PERSON_ID = `${SITE}/#person`;
const BUSINESS_ID = `${SITE}/#business`;
const WEBSITE_ID = `${SITE}/#website`;

// Deliberately no Review / AggregateRating markup for the testimonials: Google
// does not allow self-serving reviews about your own business to be marked up
// for rich results. sameAs links to the profile where they are verifiable.
const SAME_AS = [
  "https://www.linkedin.com/in/crispinbt",
  "https://www.upwork.com/freelancers/~0184beec6ba4ae1adf",
];

function JsonLdScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * One @graph for the sitewide entities, so Person, business and WebSite are
 * linked by @id rather than being three unrelated top-level nodes that each
 * claim the same name and URL.
 */
export function SiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Crispin Boden-Tebbutt",
        jobTitle: "SEO Consultant",
        url: SITE,
        image: `${SITE}/images/headshot.jpg`,
        sameAs: SAME_AS,
        knowsAbout: [
          "Search engine optimisation",
          "Technical SEO",
          "Content strategy",
          "Local SEO",
          "SEO automation",
        ],
        worksFor: { "@id": BUSINESS_ID },
      },
      {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
        name: "Crispin Boden-Tebbutt - SEO Consultant",
        description:
          "SEO consultant based in Swansea, South Wales. Technical SEO, content strategy, local SEO and custom projects for UK businesses.",
        url: SITE,
        image: `${SITE}/images/headshot.jpg`,
        sameAs: SAME_AS,
        founder: { "@id": PERSON_ID },
        areaServed: [
          { "@type": "City", name: "Swansea" },
          { "@type": "AdministrativeArea", name: "South Wales" },
          { "@type": "Country", name: "United Kingdom" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Swansea",
          addressRegion: "Wales",
          addressCountry: "GB",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SEO services",
          itemListElement: [
            "Technical SEO",
            "Content Strategy",
            "Local SEO",
            "SEO Automation",
            "Custom Projects",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE,
        name: "Crispin Boden-Tebbutt",
        inLanguage: "en-GB",
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
  return <JsonLdScript schema={schema} />;
}

/** Breadcrumbs for pages below the root. Pass the trail excluding "Home". */
export function BreadcrumbSchema({
  trail,
}: {
  trail: { name: string; path: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE}${item.path}`,
      }),
    ),
  };
  return <JsonLdScript schema={schema} />;
}

/** Service schema for an individual service page. */
export function ServiceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE}${path}`,
    serviceType: name,
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "Swansea" },
      { "@type": "Country", name: "United Kingdom" },
    ],
  };
  return <JsonLdScript schema={schema} />;
}
