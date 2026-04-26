"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeader } from "./Services";

export default function Testimonials() {
  return (
    <section
      id="cerita"
      className="py-20 md:py-28 bg-blueprint grain"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="// 04 · Cerita Mereka"
          title={
            <>
              Surat-surat dari{" "}
              <span
                className="text-[#5b0100]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                }}
              >
                klien lama.
              </span>
            </>
          }
          sub="Kami menyimpan setiap testimoni seperti menyimpan negatif film: hati-hati, di tempat kering, dan terus dikenang."
        />

        <div className="grid md:grid-cols-2 gap-7 mt-14">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative brut bg-[#FAF9F6] p-7 md:p-8"
              style={{
                transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)`,
              }}
              data-testid={`testimonial-${i}`}
            >
              <div className="tape" style={{ top: -10, left: 24 }} />
              <Quote size={32} className="text-[#5b0100] mb-3" strokeWidth={1.5} />
              <p
                className="text-[15px] leading-relaxed text-[#121212]/85"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {t.body}
              </p>
              <div className="mt-6 pt-5 border-t-2 border-dashed border-[#121212] flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p
                    className="text-xl text-[#121212]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                    }}
                  >
                    — {t.name}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-widest text-[#121212]/60 mt-1"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {t.role}
                  </p>
                </div>
                <span
                  className="text-[10px] uppercase tracking-widest text-[#5b0100]"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {t.date}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
