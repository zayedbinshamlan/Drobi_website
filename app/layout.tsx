import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Metadata } from "next";
import localFont from "next/font/local";

const honorSans = localFont({
  src: [
    {
      path: "../public/fonts/HONORSansArabicUI-T.ttf", // Thin
      weight: "100",
    },
    {
      path: "../public/fonts/HONORSansArabicUI-EL.ttf", // Extra Light
      weight: "200",
    },
    {
      path: "../public/fonts/HONORSansArabicUI-L.ttf", // Light
      weight: "300",
    },
    {
      path: "../public/fonts/HONORSansArabicUI-R.ttf", // Regular
      weight: "400",
    },
    {
      path: "../public/fonts/HONORSansArabicUI-M.ttf", // Medium
      weight: "500",
    },
    {
      path: "../public/fonts/HONORSansArabicUI-DB.ttf", // Demi Bold
      weight: "600",
    },
    {
      path: "../public/fonts/HONORSansArabicUI-B.ttf", // Bold
      weight: "700",
    },
    {
      path: "../public/fonts/HONORSansArabicUI-EB.ttf", // Extra Bold
      weight: "800",
    },
    {
      path: "../public/fonts/HONORSansArabicUI-H.ttf", // Heavy / Black
      weight: "900",
    },
  ],
  variable: "--font-honor",
  display: "swap",
});

/**
 * Global Metadata Configuration
 * Comprehensive SEO and Branding orchestration.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://drobi-sa.com"),

  title: {
    default: "دروبي | تطبيق توصيل ومشاوير في السعودية",
    template: "%s | دروبي",
  },

  description:
    "تطبيق دروبي للتوصيل والمشاوير في السعودية. اطلب مشوارك الآن بسرعة وأمان مع أفضل السائقين في منطقتك",
  verification: {
    google: "google-site-verification-code",
  },

  keywords: [
    "توصيل",
    "تطبيق دروبي",
    "كابتن دروبي",
    "تطبيقات توصيل السعودية",
    "تكسي",
    "مشاوير",
    "Drobi",
  ],

  appleWebApp: {
    title: "دروبي",
    statusBarStyle: "default",
    capable: true,
  },

  /* Branding Icons Strategy */
  icons: {
    icon: [
      { url: "icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "icons/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "icons/favicon.ico",
    apple: [
      {
        url: "icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  /* Web Manifest for PWA */
  manifest: "/site.webmanifest",

  /* Social Media and Open Graph Integration */
  openGraph: {
    title: "دروبي | تطبيق توصيل ومشاوير في السعودية",
    description: "تطبيق التنقل الأفضل في منطقتك - خيارات أكثر وأمان أعلى.",
    url: "https://drobi-sa.com",
    siteName: "Drobi",
    images: [
      {
        url: "/icons/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Drobi - Safe and Fast Rides",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  /* Twitter (X) Card Integration */
  twitter: {
    card: "summary_large_image",
    title: "دروبي | Drobi",
    description: "تطبيق التنقل الأفضل في منطقتك. حمل التطبيق الآن وانطلق.",
    images: ["/icons/og-banner.png"],
  },

  /* Robots and Canonical Links */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

/**
 * RootLayout Component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={honorSans.variable}>
      <body
        className={`${honorSans.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />

        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
