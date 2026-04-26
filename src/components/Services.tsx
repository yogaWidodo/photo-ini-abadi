"use client";

import { motion } from "motion/react";
import { Camera, Heart, Sparkles, ArrowUpRight } from "lucide-react";
import { SERVICES, waLink } from "@/lib/data";
import type { ReactNode } from "react";

const ICONS: Record<string, React.ElementType> = {
  photobooth: Sparkles,
  wedding: Heart,
  event: Camera,
};

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p
        className="text-xs uppercase tracking-[0.3em] text-[#5b0100] mb-4"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        {eyebrow}
      </p>
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
        {title}
      </h2>
      {sub && (
        <p
          className="mt-5 text-sm md:text-[15px] text-[#121212]/80 leading-relaxed max-w-2xl"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="layanan"
      className="py-20 md:py-28 bg-[#FAF9F6] grain relative"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="// 01 · Layanan"
          title={
            <>
              Tiga cara untuk
              <br />
              <span
                className="text-[#5b0100]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                }}
              >
                mengabadikan
              </span>{" "}
              momenmu.
            </>
          }
          sub="Setiap layanan dikerjakan tim yang sama tergila-gilanya: fotografer, kurator, dan retoucher yang tumbuh besar dengan film negatif & disposable camera."
        />

        <div className="grid lg:grid-cols-3 gap-7 mt-14">
          {SERVICES.map((s, idx) => {
            const Icon = ICONS[s.id];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group brut bg-[#FAF9F6] flex flex-col"
                data-testid={`service-card-${s.id}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-[#121212]">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    style={{ filter: "grayscale(30%)" }}
                  />
                  <div
                    className="absolute top-3 left-3 px-2 py-1 bg-[#FAF9F6] border-2 border-[#121212] text-[10px] uppercase tracking-widest"
                    style={{ color: s.accent, fontFamily: "'Space Mono', monospace" }}
                  >
                    {s.kicker}
                  </div>
                  <div className="absolute top-3 right-3 font-bold text-3xl text-[#FAF9F6] mix-blend-difference">
                    {s.no}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-2xl md:text-[26px] leading-tight">
                      {s.title}
                    </h3>
                    <span
                      className="shrink-0 w-10 h-10 grid place-items-center border-2 border-[#121212]"
                      style={{ backgroundColor: s.accent, color: "#FAF9F6" }}
                    >
                      <Icon size={18} />
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed text-[#121212]/80"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {s.desc}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-xs uppercase tracking-wider"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        <span className="w-1.5 h-1.5 bg-[#5b0100]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Halo! Saya tertarik dengan paket ${s.title}. Bisa info detail?`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-between gap-2 px-4 py-3 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-bold hover:bg-[#5b0100] transition-colors"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                    data-testid={`service-cta-${s.id}`}
                  >
                    Tanya via WhatsApp
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
