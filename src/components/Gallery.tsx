"use client";

import { motion } from "motion/react";
import { GALLERY } from "@/lib/data";
import { SectionHeader } from "./Services";

export default function Gallery() {
  return (
    <section
      id="galeri"
      className="py-20 md:py-28 bg-blueprint relative grain"
      data-testid="gallery-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <SectionHeader
            eyebrow="// 02 · Arsip"
            title={
              <>
                Foto-foto yang
                <br />
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                  }}
                >
                  nggak mau dilupain.
                </span>
              </>
            }
          />
          <p
            className="text-xs uppercase tracking-widest text-[#121212]/70 max-w-xs"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Sebagian kecil dari ratusan momen yang sudah kami simpan. Hover
            untuk warna asli.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.03, zIndex: 30 }}
              className={`relative bg-[#FAF9F6] brut overflow-hidden ${g.span} ${g.rotate}`}
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={g.url}
                alt={g.caption}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                style={{ filter: "grayscale(40%)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLImageElement).style.filter = "grayscale(0%)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLImageElement).style.filter = "grayscale(40%)")
                }
              />
              <figcaption
                className="absolute bottom-0 inset-x-0 px-3 py-2 bg-[#121212] text-[#FAF9F6] text-[10px] uppercase tracking-widest"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {g.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p
          className="mt-10 text-center text-xl md:text-2xl text-[#121212]/70"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          "Sebuah foto adalah rahasia tentang sebuah rahasia."{" "}
          <span
            className="not-italic text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            — diane arbus
          </span>
        </p>
      </div>
    </section>
  );
}
