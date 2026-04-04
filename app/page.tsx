import Script from "next/script";
import Home from "./Home/page";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",

    name: "دروبي",
    alternateName: "Drobi",

    url: "https://drobi-sa.com",
    image: "https://drobi-sa.com/icons/favicon-96x96.png",

    description:
      "تطبيق دروبي للتوصيل والمشاوير في السعودية. احجز مشوارك الآن بسرعة وأمان مع أفضل السائقين في منطقتك.",

    applicationCategory: "TransportationApplication",
    operatingSystem: "Android, iOS",

    inLanguage: "ar-SA",

    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },

    publisher: {
      "@type": "Organization",
      name: "Drobi",
      logo: {
        "@type": "ImageObject",
        url: "https://drobi-sa.com/icons/favicon-96x96.png",
      },
    },

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SAR",
      availability: "https://schema.org/InStock",
    },

    downloadUrl: [
      "https://play.google.com/store/apps/details?id=com.aait.drobi&hl=en",
      "https://apps.apple.com/sa/app/drobi/id6753208053",
    ],

    sameAs: [
      "https://play.google.com/store/apps/details?id=com.aait.drobi&hl=en",
      "https://apps.apple.com/sa/app/drobi/id6753208053",
      "https://wa.me/966558686141",
      "https://www.instagram.com/drobiapp?igsh=NGo3Y2d1cXpqeXBk&utm_source=qr",
    ],
  };

  return (
    <>
      <Script
        id="drobi-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <Home />
      </main>
    </>
  );
}
