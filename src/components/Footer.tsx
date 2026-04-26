import { Camera, Instagram, Mail, MapPin } from "lucide-react";
import { waLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-[#121212] text-[#FAF9F6] grain"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <a href="#top" className="flex items-center gap-2">
            <span className="w-9 h-9 grid place-items-center bg-[#C9A050] text-[#121212] border-2 border-[#FAF9F6]">
              <Camera size={18} strokeWidth={2.5} />
            </span>
            <span className="font-bold text-2xl">
              PHOTO<span className="text-[#5b0100]">.</span>INI
              <span className="text-[#C9A050]">.</span>ABADI
            </span>
          </a>
          <p
            className="mt-5 text-2xl md:text-3xl text-[#C9A050] leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
            }}
          >
            "yang fana adalah waktu, ini abadi."
          </p>
          <p
            className="mt-4 text-sm text-[#FAF9F6]/70 max-w-md"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Studio foto independen yang merayakan momen kecil sebagai pusaka.
            Dibangun di Indonesia sejak 2019.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4
            className="text-[10px] uppercase tracking-widest text-[#C9A050] mb-4"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            // Navigasi
          </h4>
          <ul className="space-y-2 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
            {[
              ["Layanan", "#layanan"],
              ["Galeri", "#galeri"],
              ["Paket", "#paket"],
              ["Cerita", "#cerita"],
              ["Cabang", "#cabang"],
            ].map(([k, v]) => (
              <li key={k}>
                <a href={v} className="hover:text-[#C9A050] transition-colors">
                  → {k}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4
            className="text-[10px] uppercase tracking-widest text-[#C9A050] mb-4"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            // Kontak
          </h4>
          <ul className="space-y-3 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-[#C9A050]" />
              <a
                href="mailto:halo@photoiniabadi.id"
                className="hover:text-[#C9A050] transition-colors break-all"
              >
                halo@photoiniabadi.id
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram size={16} className="mt-0.5 text-[#C9A050]" />
              <a
                href="https://instagram.com/photoiniabadi"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C9A050] transition-colors"
              >
                @photoiniabadi
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-[#C9A050]" />
              <span>4 cabang · Jakarta, Bandung, Yogyakarta, Surabaya</span>
            </li>
          </ul>

          <a
            href={waLink("Halo! Saya mau tanya seputar Photo Ini Abadi.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-[#C9A050] text-[#121212] font-bold text-xs uppercase tracking-widest border-2 border-[#FAF9F6] hover:-translate-y-1 hover:-translate-x-1 transition-transform"
            style={{
              fontFamily: "'Space Mono', monospace",
              boxShadow: "4px 4px 0 0 #FAF9F6",
            }}
            data-testid="footer-wa-btn"
          >
            WhatsApp Kami
          </a>
        </div>
      </div>

      <div className="border-t-2 border-[#FAF9F6]/20">
        <div
          className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-widest text-[#FAF9F6]/60"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          <p>© 2025 Photo Ini Abadi · All moments preserved</p>
          <p>Made with film grain &amp; love · ID</p>
        </div>
      </div>
    </footer>
  );
}
