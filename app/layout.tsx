import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Metadata } from "next";
import localFont from "next/font/local";

const honorSans = localFont({
  src: [
    { path: "../public/fonts/HONORSansArabicUI-T.ttf", weight: "100" },
    { path: "../public/fonts/HONORSansArabicUI-EL.ttf", weight: "200" },
    { path: "../public/fonts/HONORSansArabicUI-L.ttf", weight: "300" },
    { path: "../public/fonts/HONORSansArabicUI-R.ttf", weight: "400" },
    { path: "../public/fonts/HONORSansArabicUI-M.ttf", weight: "500" },
    { path: "../public/fonts/HONORSansArabicUI-DB.ttf", weight: "600" },
    { path: "../public/fonts/HONORSansArabicUI-B.ttf", weight: "700" },
    { path: "../public/fonts/HONORSansArabicUI-EB.ttf", weight: "800" },
    { path: "../public/fonts/HONORSansArabicUI-H.ttf", weight: "900" },
  ],
  variable: "--font-honor",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drobi.sa"),

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

  icons: {
    icon: [
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "دروبي | تطبيق توصيل ومشاوير في السعودية",
    description: "تطبيق التنقل الأفضل في منطقتك - خيارات أكثر وأمان أعلى.",
    url: "https://drobi.sa",
    siteName: "Drobi",
    images: [
      {
        url: "https://drobi.sa/icons/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Drobi - Safe and Fast Rides",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "دروبي | Drobi",
    description: "تطبيق التنقل الأفضل في منطقتك. حمل التطبيق الآن وانطلق.",
    images: ["https://drobi.sa/icons/og-banner.png"],
  },

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
