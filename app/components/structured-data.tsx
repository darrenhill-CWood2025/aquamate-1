export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.aquamateinc.com/#organization",
        "name": "AquaMate Inc.",
        "url": "https://www.aquamateinc.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.aquamateinc.com/logo-aquamate.svg",
          "width": 512,
          "height": 512
        },
        "image": "https://www.aquamateinc.com/assets/aquamate-hero.jpg",
        "description": "Leading manufacturer of custom pool liners in Collingwood, Ontario. Premium vinyl liners for any pool shape or size.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Collingwood",
          "addressRegion": "ON",
          "addressCountry": "CA"
        },
        "sameAs": [
          // Add your social media URLs here when available
        ],
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
        "@id": "https://www.aquamateinc.com/#website",
        "url": "https://www.aquamateinc.com",
        "name": "AquaMate Inc.",
        "description": "Custom pool liner manufacturer - Premium vinyl liners made in Canada",
        "publisher": {
          "@id": "https://www.aquamateinc.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.aquamateinc.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.aquamateinc.com/#localbusiness",
        "name": "AquaMate Inc.",
        "image": "https://www.aquamateinc.com/assets/aquamate-hero.jpg",
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
        "url": "https://www.aquamateinc.com",
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