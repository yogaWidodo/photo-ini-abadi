/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-clash)", "Space Grotesk", "sans-serif"],
        "serif-italic": ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        "mono-pia": ["var(--font-space-mono)", "Space Mono", "monospace"],
        // backwards compat
        editorial: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        typewriter: ["var(--font-space-mono)", "Space Mono", "monospace"],
      },
      colors: {
        pia: {
          oxblood: "#5b0100",
          brass: "#C9A050",
          cream: "#FAF9F6",
          vellum: "#F2EFE9",
          ink: "#121212",
          muted: "#8D8D8D",
        },
        // backwards compat
        abadi: {
          oxblood: "#5b0100",
          brass: "#C9A050",
          cream: "#FAF9F6",
          vellum: "#F2EFE9",
          ink: "#121212",
          muted: "#8D8D8D",
        },
      },
      boxShadow: {
        brutal: "4px 4px 0px #121212",
        "brutal-lg": "8px 8px 0px #121212",
        "brutal-sm": "2px 2px 0px #121212",
        "brut-pia": "6px 6px 0 0 #121212",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
