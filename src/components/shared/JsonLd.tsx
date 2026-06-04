import React from 'react';

export default function JsonLd() {
  const listingSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Villa Scapes by NK Leasing",
    "description": "20-acre luxury gated villa community in Gandipet, Hyderabad",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opposite Villa Greens, Kokapet Road, Gandipet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500075",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.381389,
      "longitude": 78.322824
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": "2925-5200",
      "unitCode": "FTK"
    },
    "numberOfRooms": "4-5",
    "amenityFeature": ["Swimming Pool", "Gym", "Clubhouse", "24/7 Security"],
    "url": "https://villascapes-portfolio.vercel.app"
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Villa Scapes Gandipet Gated Enclave",
    "image": "https://imgcdn.houssed.com/assets/Files/Projects/124076/Project%20Image/3-1735991160.webp",
    "telephone": "+91 40 23115817",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opposite Villa Greens, Kokapet Road, Gandipet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500075",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.381389,
      "longitude": 78.322824
    },
    "url": "https://villascapes-portfolio.vercel.app"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
