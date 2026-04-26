"use client";

import { motion } from "motion/react";
import { ArrowDownRight, Star } from "lucide-react";
import { waLink } from "@/lib/data";

const polaroids = [
  {
    url: "https://images.unsplash.com/photo-1774735688985-7bbe7ef544c4?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    rot: -8,
    x: -20,
    y: 0,
    z: 20,
    label: "ROLL 04 / 1998",
  },
  {
    url: "https://images.unsplash.com/photo-1650381125879-39d5820ddcc8?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    rot: 5,
    x: 60,
    y: 40,
    z: 30,
    label: "WED / R+M",
  },
  {
    url: "https://images.unsplash.com/photo-1735925138868-1373cb23ddb1?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    rot: -3,
    x: 30,
    y: 200,
    z: 10,
    label: "BOOTH NIGHT",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 bg-blueprint overflow-hidden grain"
      data-testid="hero-section"
    >
      {/* Floating stamp */}
      <motion.div
        initial={{ opacity: 0, rotate: -25, scale: 0.6 }}
        animate={{ opacity: 1, rotate: -18, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-28 right-6 md:right-16 z-10 hidden sm:block"
      >
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-[3px] border-[#5b0100] grid place-items-center text-[#5b0100] text-center font-bold uppercase tracking-widest leading-tight text-[10px] md:text-xs">
          Established
          <br />
          <span className="text-2xl md:text-3xl font-bold">2019</span>
          <br />
          Sejak Dulu
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 brut bg-[#FAF9F6] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#5b0100] animate-pulse" />
            <span
              className="text-[11px] uppercase tracking-widest"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Studio Foto Analog · Indonesia
            </span>
          </motion.div>

          <h1 className="font-bold text-[14vw] sm:text-[10vw] lg:text-[7.5vw] leading-[0.92] tracking-tight">
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="block"
            >
              PHOTO
            </motion.span>
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="block text-[#5b0100]"
            >
              INI ABADI<span className="text-[#C9A050]">.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl mt-6 max-w-2xl text-[#121212]/90"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            "yang fana adalah waktu, ini abadi."
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 text-sm md:text-[15px] max-w-xl leading-relaxed text-[#121212]/80"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Studio foto, photobooth, dan dokumentasi event yang nangkep momen
            Gen Z dengan rasa film analog. Karena kenangan terbaik bukan yang
            viral, tapi yang awet di kotak album.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={waLink("Halo! Saya mau konsultasi & booking sesi foto.")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-4 bg-[#5b0100] text-[#FAF9F6] brut font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Space Mono', monospace" }}
              data-testid="hero-book-btn"
            >
              Booking Sekarang
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:rotate-45"
              />
            </a>
            <a
              href="#galeri"
              className="inline-flex items-center gap-2 px-6 py-4 bg-[#FAF9F6] text-[#121212] brut font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Space Mono', monospace" }}
              data-testid="hero-gallery-btn"
            >
              Lihat Karya
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex items-center gap-5 flex-wrap"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#121212] grid place-items-center font-bold text-xs"
                  style={{
                    backgroundColor: i % 2 ? "#C9A050" : "#5b0100",
                    color: i % 2 ? "#121212" : "#FAF9F6",
                  }}
                >
                  {String.fromCharCode(64 + i * 3)}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-[#5b0100]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              500+ momen abadi · rating 4.9/5
            </p>
          </motion.div>
        </div>

        {/* RIGHT — polaroid stack */}
        <div className="lg:col-span-5 relative h-[480px] sm:h-[520px] hidden lg:block">
          {polaroids.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: p.y, x: p.x, rotate: p.rot, scale: 1 }}
              transition={{
                delay: 0.4 + i * 0.18,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ rotate: p.rot * 0.3, scale: 1.04, zIndex: 50 }}
              className="absolute polaroid w-64"
              style={{ zIndex: p.z, top: 0, left: "10%" }}
            >
              <div className="tape" style={{ top: -10, left: "40%" }} />
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.url}
                  alt={p.label}
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(20%)" }}
                />
              </div>
              <p
                className="text-[10px] uppercase tracking-widest mt-3 text-center text-[#121212]/70"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {p.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
