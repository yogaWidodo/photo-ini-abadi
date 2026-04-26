"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Camera } from "lucide-react";
import { NAV_LINKS, waLink } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-[#FAF9F6]/95 backdrop-blur" : "bg-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className={scrolled ? "border-b-2 border-[#121212]" : ""}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2" data-testid="nav-logo">
            <span className="w-8 h-8 grid place-items-center bg-[#5b0100] text-[#FAF9F6] brut">
              <Camera size={16} strokeWidth={2.5} />
            </span>
            <span
              className="font-bold text-lg md:text-xl tracking-tight"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              PHOTO<span className="text-[#5b0100]">.</span>INI
              <span className="text-[#C9A050]">.</span>ABADI
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-widest hover:text-[#5b0100] transition-colors relative group"
                style={{ fontFamily: "'Space Mono', monospace" }}
                data-testid={`nav-${l.label.toLowerCase()}`}
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#5b0100] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href={waLink("Halo Photo Ini Abadi! Saya mau tanya-tanya soal booking.")}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#C9A050] text-[#121212] brut font-bold text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Space Mono', monospace" }}
            data-testid="nav-book-btn"
          >
            Booking →
          </a>

          <button
            className="md:hidden w-10 h-10 grid place-items-center brut bg-[#FAF9F6]"
            onClick={() => setOpen(!open)}
            aria-label="buka menu"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#FAF9F6] border-b-2 border-[#121212]"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-widest py-2 border-b border-[#121212]/20"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={waLink("Halo! Saya mau booking.")}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#C9A050] text-[#121212] brut font-bold text-xs uppercase tracking-widest"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Booking via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
