"use client";

import { motion } from "motion/react";
import { MessageCircle, Heart } from "lucide-react";
import { waLink } from "@/lib/data";

export default function BookingCTA() {
  return (
    <section
      id="booking"
      className="relative py-20 md:py-28 grain overflow-hidden"
      style={{ backgroundColor: "#5b0100" }}
      data-testid="booking-cta"
    >
      {/* Stamp graphic */}
      <motion.div
        initial={{ opacity: 0, rotate: -25 }}
        whileInView={{ opacity: 0.18, rotate: -15 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute -top-10 -right-10 md:top-10 md:right-10 pointer-events-none"
      >
        <div className="w-60 h-60 md:w-80 md:h-80 rounded-full border-[6px] border-[#C9A050] grid place-items-center text-[#C9A050] text-center font-bold uppercase tracking-widest">
          <div>
            <div
              className="text-xs md:text-sm"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              approved
            </div>
            <div className="font-bold text-5xl md:text-7xl my-2">ABADI</div>
            <div
              className="text-xs md:text-sm"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              since · 2019 · ★
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[#C9A050] bg-transparent text-[#C9A050] text-[10px] uppercase tracking-widest font-bold mb-6"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          <Heart size={12} fill="currentColor" />
          Booking · Cepat · Personal
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F6] leading-[0.95] tracking-tight"
        >
          Mau abadiin
          <br />
          <span
            className="text-[#C9A050]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
            }}
          >
            momenmu juga?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-7 text-sm md:text-base text-[#FAF9F6]/80 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Klik tombol di bawah, kita ngobrol via WhatsApp. Nggak ada formulir
          bertele-tele, nggak ada bot, langsung ke timnya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href={waLink(
              "Halo Photo Ini Abadi! Saya mau booking sesi foto. Bisa kirim katalog & jadwal kosong?"
            )}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 md:px-10 md:py-6 bg-[#C9A050] text-[#121212] border-2 border-[#121212] text-sm md:text-base uppercase tracking-widest font-bold transition-all hover:-translate-y-2 hover:-translate-x-2"
            style={{
              fontFamily: "'Space Mono', monospace",
              boxShadow: "8px 8px 0 0 #121212",
            }}
            data-testid="booking-whatsapp-btn"
          >
            <MessageCircle size={22} />
            Booking via WhatsApp
            <span className="font-bold text-xl">→</span>
          </a>
          <p
            className="text-xs uppercase tracking-widest text-[#FAF9F6]/60"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Respon cepat · 09:00–22:00 WIB
          </p>
        </motion.div>
      </div>
    </section>
  );
}
