import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

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
};

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-[#FAF9F6] text-[#121212]"
      data-testid="landing-page"
    >
      <Navbar />
      <Hero />
      <MarqueeStrip bg="#5b0100" color="#FAF9F6" />
      <Services />
      <Gallery />
      <MarqueeStrip bg="#C9A050" color="#121212" />
      <Pricing />
      <Testimonials />
      <Locations />
      <BookingCTA />
      <Footer />
    </main>
  );
}
