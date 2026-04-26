import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://photo-ini-abadi.vercel.app"),
  title: "Photo Ini Abadi | Studio Foto & Photobooth Analog Indonesia",
  description:
    "Yang fana adalah waktu, ini abadi. Studio foto, photobooth 35mm, dan dokumentasi event dengan estetika analog. Tersedia di Jakarta, Bandung, Yogyakarta, dan Surabaya.",
  keywords: [
    "photobooth analog",
    "sewa photobooth tegal slawi",
    "sewa photobooth brebes",
    "sewa photobooth pekalongan",
    "sewa photobooth purwokerto",
    "sewa photobooth pemalang",
    "studio foto jakarta",
    "foto film 35mm",
    "photo ini abadi",
  ],
  openGraph: {
    title: "Photo Ini Abadi | Studio Foto & Photobooth Analog",
    description:
      "Yang fana adalah waktu, ini abadi. Studio foto analog yang merayakan momen sebagai pusaka.",
    url: "/",
    siteName: "Photo Ini Abadi",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Ini Abadi | Studio Foto & Photobooth Analog",
    description:
      "Yang fana adalah waktu, ini abadi. Studio foto analog Indonesia.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Photo Ini Abadi",
              "image": "https://photo-ini-abadi.vercel.app/og-image.jpg",
              "@id": "https://photo-ini-abadi.vercel.app",
              "url": "https://photo-ini-abadi.vercel.app",
              "telephone": "+6281234567890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Bangka Raya No. 1",
                "addressLocality": "Jakarta Selatan",
                "addressRegion": "Jakarta",
                "postalCode": "12720",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.2415,
                "longitude": 106.8124
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "22:00"
              },
              "sameAs": [
                "https://www.instagram.com/photoiniabadi"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
