"use client";

import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { PRICING, waLink } from "@/lib/data";
import { SectionHeader } from "./Services";

export default function Pricing() {
  return (
    <section
      id="paket"
      className="py-20 md:py-28 bg-[#FAF9F6] grain"
      data-testid="pricing-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          align="center"
          eyebrow="// 03 · Paket"
          title={
            <>
              Pilih ukuran{" "}
              <span
                className="text-[#5b0100]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                }}
              >
                rollmu.
              </span>
            </>
          }
          sub="Harga dalam ribuan rupiah. Bisa custom kalau kamu punya brief khusus — chat aja, kita ngobrol dulu."
        />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mt-16">
          {PRICING.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`ticket relative ${p.popular ? "lg:-translate-y-4 z-10" : ""}`}
              style={p.popular ? { background: "#5b0100" } : {}}
              data-testid={`pricing-card-${p.name.toLowerCase().replace(/\s/g, "-")}`}
            >
              {p.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 bg-[#C9A050] border-2 border-[#121212] text-[10px] uppercase tracking-widest font-bold flex items-center gap-1"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  <Star size={10} fill="currentColor" />
                  Paling Dipilih
                </div>
              )}

              <div
                className="px-7 pt-8 pb-6 text-center"
                style={{ color: p.popular ? "#FAF9F6" : "#121212" }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.3em]"
                  style={{
                    color: p.popular ? "#C9A050" : "#5b0100",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {p.tagline}
                </p>
                <h3 className="font-bold text-3xl md:text-4xl mt-2">{p.name}</h3>
                <div className="mt-5 flex items-baseline justify-center gap-1">
                  <span
                    className="text-sm"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    IDR
                  </span>
                  <span className="font-bold text-5xl md:text-6xl">{p.price}</span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    K{p.period}
                  </span>
                </div>
              </div>

              <div
                className="ticket-divider mx-7 my-2"
                style={{
                  borderColor: p.popular ? "rgba(250,249,246,0.4)" : "#121212",
                }}
              />

              <div
                className="px-7 py-6"
                style={{ color: p.popular ? "#FAF9F6" : "#121212" }}
              >
                <ul className="space-y-3">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2 text-[13px]"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      <span
                        className="shrink-0 w-5 h-5 grid place-items-center border-2 mt-0.5"
                        style={{
                          background: p.popular ? "#C9A050" : "#5b0100",
                          color: p.popular ? "#121212" : "#FAF9F6",
                          borderColor: p.popular ? "#FAF9F6" : "#121212",
                        }}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Halo! Saya mau ambil paket ${p.name}. Bisa lanjut detailnya?`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs uppercase tracking-widest font-bold border-2 border-[#121212] transition-all hover:-translate-y-1 hover:-translate-x-1"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    background: p.popular ? "#C9A050" : "#121212",
                    color: p.popular ? "#121212" : "#FAF9F6",
                    boxShadow: p.popular
                      ? "4px 4px 0 0 #FAF9F6"
                      : "4px 4px 0 0 #5b0100",
                  }}
                  data-testid={`pricing-cta-${p.name.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {p.cta}
                </a>
              </div>

              <div
                className="border-t-2 border-dashed px-7 py-3 flex items-center justify-between text-[10px] uppercase tracking-widest"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  borderColor: p.popular ? "rgba(250,249,246,0.4)" : "#121212",
                  color: p.popular ? "#C9A050" : "#5b0100",
                }}
              >
                <span>NO. {String(i + 1).padStart(4, "0")}</span>
                <span>VALID 2025</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p
          className="mt-12 text-center text-xs uppercase tracking-widest text-[#121212]/60"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          * Harga belum termasuk transport luar kota &amp; PPN
        </p>
      </div>
    </section>
  );
}
