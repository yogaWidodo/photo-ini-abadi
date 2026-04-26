// Photo Ini Abadi — Static content data

export const WA_NUMBER = "6281234567890"; // ganti dengan nomor asli
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export const waLink = (text: string) =>
  `${WA_BASE}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Paket", href: "#paket" },
  { label: "Cerita", href: "#cerita" },
  { label: "Cabang", href: "#cabang" },
];

export const SERVICES = [
  {
    id: "photobooth",
    no: "01",
    title: "Photobooth Instan",
    kicker: "Cetak Langsung",
    desc: "Strip foto vintage, props lucu, dan momen rame-rame yang langsung jadi kenangan fisik. Cocok buat ulang tahun, gathering, sampai after party.",
    bullets: ["Unlimited shoot", "Cetak strip 2x6", "Props & frame custom"],
    image:
      "https://images.unsplash.com/photo-1735925138868-1373cb23ddb1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    accent: "#5b0100",
  },
  {
    id: "wedding",
    no: "02",
    title: "Wedding & Prewedding",
    kicker: "Cinema Analog",
    desc: "Cerita cinta yang difoto seperti film tahun 70-an. Roll film 35mm, cahaya alami, dan momen yang nggak pernah lekang dimakan trend.",
    bullets: ["Full day coverage", "Album hardcover 30x30", "Color grading film"],
    image:
      "https://images.unsplash.com/photo-1650381125879-39d5820ddcc8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    accent: "#C9A050",
  },
  {
    id: "event",
    no: "03",
    title: "Event Photography",
    kicker: "Wisuda · Birthday · Gathering",
    desc: "Dari sidang skripsi sampai ulang tahun ke-50, tim kami nangkap sudut-sudut yang kamu nggak sempat lihat sendiri. Hasil siap upload <24 jam.",
    bullets: ["2-4 fotografer", "Edit cepat highlight", "Drive + cetak optional"],
    image:
      "https://images.unsplash.com/photo-1663594618397-b2dc16cbaef9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    accent: "#5b0100",
  },
];

export const GALLERY = [
  {
    url: "https://images.unsplash.com/photo-1774735688985-7bbe7ef544c4?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    span: "row-span-2",
    rotate: "-rotate-1",
    caption: "ROLL 04 / 1998",
  },
  {
    url: "https://images.unsplash.com/photo-1705091688083-d62d5082cc4d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    span: "",
    rotate: "rotate-1",
    caption: "STUDIO 01",
  },
  {
    url: "https://images.unsplash.com/photo-1663594618397-b2dc16cbaef9?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    span: "col-span-2",
    rotate: "-rotate-[0.5deg]",
    caption: "WEDDING / R+M",
  },
  {
    url: "https://images.unsplash.com/photo-1735925138868-1373cb23ddb1?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    span: "",
    rotate: "rotate-2",
    caption: "BOOTH NIGHT",
  },
  {
    url: "https://images.unsplash.com/photo-1650381125879-39d5820ddcc8?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    span: "row-span-2",
    rotate: "-rotate-2",
    caption: "PREWED FILM",
  },
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    span: "",
    rotate: "rotate-1",
    caption: "RECEPTION",
  },
  {
    url: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    span: "col-span-2",
    rotate: "-rotate-1",
    caption: "GRADUATION '24",
  },
];

export const PRICING = [
  {
    name: "Roll 36",
    price: "499",
    period: "/sesi",
    tagline: "Buat acara kecil & casual",
    items: [
      "2 jam coverage",
      "1 fotografer",
      "50 foto edit",
      "Soft file via Drive",
      "Konsultasi konsep",
    ],
    cta: "Pilih Roll 36",
    popular: false,
  },
  {
    name: "Format Medium",
    price: "1.499",
    period: "/sesi",
    tagline: "Paket favorit Gen Z",
    items: [
      "6 jam coverage",
      "2 fotografer",
      "200 foto edit color-graded",
      "20 cetak polaroid",
      "Mini photobooth strip",
      "Behind-the-scene reel",
    ],
    cta: "Pilih Format Medium",
    popular: true,
  },
  {
    name: "Large Format",
    price: "3.499",
    period: "/sesi",
    tagline: "Wedding & momen besar",
    items: [
      "Full day coverage",
      "3 fotografer + 1 videografer",
      "500+ foto edit film grain",
      "Album hardcover 30x30",
      "Booth dengan props lengkap",
      "Highlight reel cinematic 3 menit",
      "Drone shot (opsional)",
    ],
    cta: "Pilih Large Format",
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    name: "Rania & Mahesa",
    role: "Pengantin · Bandung",
    body: "Hasil foto-nya kayak di-pause dari film favorit. Tiap kali buka album, masih kerasa hari itu. Worth it banget.",
    date: "2024.07.13",
  },
  {
    name: "Dimas Aditya",
    role: "Mahasiswa · Yogyakarta",
    body: "Gue booking buat wisuda. Tim-nya santai, lucu, dan hasilnya estetik banget. Foto strip-nya gue tempel di kos sampe sekarang.",
    date: "2024.10.02",
  },
  {
    name: "PT Kirana Jaya",
    role: "Corporate Gathering",
    body: "Booth-nya sukses bikin acara company gathering kami nggak boring. Karyawan rebutan foto, manajemen happy.",
    date: "2024.11.21",
  },
  {
    name: "Sabrina Putri",
    role: "Sweet 17 · Jakarta",
    body: "Gokil sih, tiap detail dapet. Cake cutting, tangis nyokap, semua kefoto. Nggak nyesel sama sekali.",
    date: "2025.01.18",
  },
];

export const LOCATIONS = [
  {
    city: "Jakarta Selatan",
    addr: "Jl. Senopati No. 88, Kebayoran Baru",
    hours: "Senin–Minggu · 10:00–22:00",
    code: "JKT-S/01",
  },
  {
    city: "Bandung",
    addr: "Jl. Riau No. 47, Citarum",
    hours: "Senin–Minggu · 11:00–22:00",
    code: "BDG/02",
  },
  {
    city: "Yogyakarta",
    addr: "Jl. Tirtodipuran No. 12, Mantrijeron",
    hours: "Selasa–Minggu · 10:00–21:00",
    code: "YGY/03",
  },
  {
    city: "Surabaya",
    addr: "Jl. Untung Suropati No. 56, Tegalsari",
    hours: "Senin–Minggu · 10:00–22:00",
    code: "SBY/04",
  },
];

export const MARQUEE_ITEMS = [
  "yang fana adalah waktu",
  "INI · ABADI",
  "since 2019",
  "studio · photobooth · event",
  "★",
  "kenangan tidak ditemukan, ia dicetak",
];
