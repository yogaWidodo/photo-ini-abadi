"use client";

import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";
import { LOCATIONS, waLink } from "@/lib/data";
import { SectionHeader } from "./Services";

export default function Locations() {
  return (
    <section
      id="cabang"
      className="py-20 md:py-28 bg-[#FAF9F6] grain"
      data-testid="locations-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="// 05 · Cabang"
          title={
            <>
              Kami ada di{" "}
              <span
                className="text-[#5b0100]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                }}
              >
                empat kota.
              </span>
            </>
          }
          sub="Datang langsung ke studio terdekat untuk konsultasi, lihat sample album, atau sekadar ngopi sambil ngobrolin konsep."
        />

        {/* Desktop table */}
        <div className="mt-12 brut bg-[#FAF9F6] overflow-hidden hidden md:block">
          <div
            className="grid grid-cols-12 px-6 py-3 bg-[#121212] text-[#FAF9F6] text-[10px] uppercase tracking-widest"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            <div className="col-span-1">No.</div>
            <div className="col-span-3">Kota</div>
            <div className="col-span-4">Alamat</div>
            <div className="col-span-3">Jam Buka</div>
            <div className="col-span-1 text-right">Aksi</div>
          </div>

          {LOCATIONS.map((l, i) => (
            <motion.div
              key={l.code}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`grid grid-cols-12 items-center px-6 py-5 border-b-2 border-[#121212] last:border-b-0 hover:bg-[#F2EFE9] transition-colors ${
                i % 2 === 1 ? "bg-[#F2EFE9]/40" : ""
              }`}
              data-testid={`location-${l.code}`}
            >
              <div
                className="col-span-1 text-xs text-[#5b0100] font-bold"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {l.code}
              </div>
              <div className="col-span-3">
                <p className="font-bold text-lg md:text-xl flex items-center gap-2">
                  <MapPin size={16} className="text-[#5b0100]" />
                  {l.city}
                </p>
              </div>
              <div
                className="col-span-4 text-xs md:text-sm text-[#121212]/80"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {l.addr}
              </div>
              <div
                className="col-span-3 text-xs flex items-center gap-2 text-[#121212]/80"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                <Clock size={12} />
                {l.hours}
              </div>
              <div className="col-span-1 text-right">
                <a
                  href={waLink(
                    `Halo! Saya mau visit cabang ${l.city} (${l.code}). Bisa konfirmasi jadwal?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 bg-[#C9A050] border-2 border-[#121212] hover:bg-[#5b0100] hover:text-[#FAF9F6] transition-colors font-bold"
                  data-testid={`location-cta-${l.code}`}
                >
                  →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4 md:hidden">
          {LOCATIONS.map((l) => (
            <div key={`m-${l.code}`} className="brut bg-[#FAF9F6] p-5">
              <p
                className="text-[10px] uppercase tracking-widest text-[#5b0100]"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {l.code}
              </p>
              <p className="font-bold text-xl mt-1">{l.city}</p>
              <p
                className="text-xs text-[#121212]/80 mt-2"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {l.addr}
              </p>
              <p
                className="text-[11px] text-[#121212]/70 mt-1"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {l.hours}
              </p>
              <a
                href={waLink(`Halo! Saya mau visit cabang ${l.city} (${l.code}).`)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#C9A050] border-2 border-[#121212] text-xs font-bold uppercase tracking-widest hover:bg-[#5b0100] hover:text-[#FAF9F6] transition-colors"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Kunjungi →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
