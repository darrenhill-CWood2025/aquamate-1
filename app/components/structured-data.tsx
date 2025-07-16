export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.aquamatepool.com/#organization",
        "name": "AquaMate Inc.",
        "url": "https://www.aquamatepool.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.aquamatepool.com/logo-aquamate.svg",
          "width": 512,
          "height": 512
        },
        "image": "https://www.aquamatepool.com/assets/aquamate-hero.jpg",
        "description": "Leading manufacturer of custom pool liners in Collingwood, Ontario. Premium vinyl liners for any pool shape or size.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Collingwood",
          "addressRegion": "ON",
          "addressCountry": "CA"
        },
        "sameAs": [],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-705-445-4454",
          "contactType": "customer service",
          "areaServed": ["CA", "US"],
          "availableLanguage": ["en", "fr"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.aquamatepool.com/#website",
        "url": "https://www.aquamatepool.com",
        "name": "AquaMate Inc.",
        "description": "Custom pool liner manufacturer - Premium vinyl liners made in Canada",
        "publisher": {
          "@id": "https://www.aquamatepool.com/#organization"
        },
        "inLanguage": "en-CA"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.aquamatepool.com/#localbusiness",
        "name": "AquaMate Inc.",
        "image": "https://www.aquamatepool.com/assets/aquamate-hero.jpg",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Collingwood",
          "addressRegion": "ON",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 44.5008,
          "longitude": -80.2169
        },
        "url": "https://www.aquamatepool.com",
        "telephone": "+1-705-445-4454",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        "areaServed": {
          "@type": "Country",
          "name": ["Canada", "United States"]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}