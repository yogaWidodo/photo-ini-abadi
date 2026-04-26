import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photo Ini Abadi | Studio Foto & Photobooth Analog Indonesia",
  description:
    "Yang fana adalah waktu, ini abadi. Studio foto, photobooth 35mm, dan dokumentasi event dengan estetika analog. Tersedia di Jakarta, Bandung, Yogyakarta, dan Surabaya.",
  keywords: [
    "photobooth analog",
    "studio foto jakarta",
    "foto film 35mm",
    "photobooth wedding",
    "dokumentasi event indonesia",
    "photo ini abadi",
  ],
  openGraph: {
    title: "Photo Ini Abadi | Studio Foto & Photobooth Analog",
    description:
      "Yang fana adalah waktu, ini abadi. Studio foto analog yang merayakan momen sebagai pusaka.",
    url: "https://photoiniabadi.id",
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
    canonical: "https://photoiniabadi.id",
  },
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
