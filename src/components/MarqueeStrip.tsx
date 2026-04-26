import { MARQUEE_ITEMS } from "@/lib/data";

interface MarqueeStripProps {
  bg?: string;
  color?: string;
}

export default function MarqueeStrip({
  bg = "#5b0100",
  color = "#FAF9F6",
}: MarqueeStripProps) {
  return (
    <div
      className="border-y-2 border-[#121212] py-4 overflow-hidden"
      style={{ backgroundColor: bg }}
      data-testid="marquee"
    >
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-10 pr-10">
            {MARQUEE_ITEMS.map((item, i) => (
              <span
                key={`${dup}-${i}`}
                className="text-2xl md:text-3xl whitespace-nowrap"
                style={{
                  color,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                }}
              >
                {item}
                <span
                  className="mx-8 inline-block opacity-60"
                  style={{ color }}
                >
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
