export const BUSINESS = {
  name: "MAMATA MOBILE",
  tagline: "iSpare & Combo",
  category: "Mobile Repair | Spare Parts | iSpare & Combo | Accessories",
  phone: "9892332761",
  phoneDisplay: "+91 98923 32761",
  phoneIntl: "919892332761",
  email: "naresh.modi628@gmail.com",
  addressLines: [
    "Shop No. 38, 1st Floor, Platinum Mall,",
    "Near Delhi Darbar Hotel,",
    "Grant Road East, Mumbai - 400004",
  ],
  addressShort: "Shop No. 38, Platinum Mall, Grant Road East, Mumbai - 400004",
  mapsUrl: "https://maps.google.com/?q=18.960861,72.824135",
};

export const WHATSAPP_NUMBER = BUSINESS.phoneIntl;

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildQuoteMessage(data: {
  name: string;
  phone: string;
  service: string;
  model?: string;
  message: string;
}) {
  return `Hello Mamata Mobile,

I would like to request a quote.

Name: ${data.name}
Phone: ${data.phone}
Service/Product: ${data.service}
Mobile Model: ${data.model || "Not specified"}
Message: ${data.message}

Please contact me regarding my enquiry.`;
}

export function openWhatsApp(message: string) {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank");
}

// Image catalog - 21 NEW PRODUCT IMAGES + 8 DISPLAY COMBOS (old removed)
export const GALLERY_IMAGES = [
  { src: "/images/products/display-series.jpg", alt: "DISPLAY SERIES" },
  { src: "/images/products/sancy-curve-oled.jpg", alt: "CURVE OLED" },
  { src: "/images/products/tablet-folder.jpg", alt: "Tablet Folder" },
  { src: "/images/products/middle-frame.jpg", alt: "Middle Frame" },
  { src: "/images/products/ic.jpg", alt: "IC" },
  { src: "/images/products/stencils.jpg", alt: "Stencils" },
  { src: "/images/products/cc-board-flex.jpg", alt: "CC Board Flex" },
  { src: "/images/products/ringer-box.jpg", alt: "Ringer Box" },
  { src: "/images/products/on-off-switch.jpg", alt: "On/Off Switch" },
  { src: "/images/products/volume-flex.jpg", alt: "Volume Flex" },
  { src: "/images/products/lcd-connector.jpg", alt: "LCD Connector" },
  { src: "/images/products/front-back-camera.jpg", alt: "Front & Back Camera" },
  { src: "/images/products/finger-sensor.jpg", alt: "Finger Sensor" },
  { src: "/images/products/lcd-main-flex.jpg", alt: "LCD Flex (Infinix Note 40 5G)" },
  { src: "/images/products/sim-tray.jpg", alt: "SIM Tray" },
  { src: "/images/products/cc-jack.jpg", alt: "CC Jack" },
  { src: "/images/products/sim-connector.jpg", alt: "SIM Connector" },
  { src: "/images/products/vibrator.jpg", alt: "Vibrator" },
  { src: "/images/products/back-panel.jpg", alt: "Back Panel" },
  { src: "/images/products/battery-blp657.jpg", alt: "Battery 1 plus BLP 657" },
  { src: "/images/products/camera-glass.jpg", alt: "Camera glass" },
  { src: "/images/models/y03-y18-dmk-jlt.jpg", alt: "Y03/Y18 DMK JLT" },
  { src: "/images/models/c11-a57-raj-dmk.jpg", alt: "C11/A57 RAJ DMK" },
  { src: "/images/models/c55-c65-raj-dmk.jpg", alt: "C55/C65 RAJ DMK" },
  { src: "/images/models/dk-combo-original.jpg", alt: "DK COMBO Original" },
  { src: "/images/models/a15-m15-f15-raj-dmk.jpg", alt: "A15/M15 F15 RAJ DMK" },
  { src: "/images/models/a30-a50-raj-dmk.jpg", alt: "A30/A50 RAJ DMK" },
  { src: "/images/models/m30-m21-raj-dmk.jpg", alt: "M30/M21 RAJ DMK" },
  { src: "/images/models/g14-xt2341-raj-dmk.jpg", alt: "G14/XT2341 RAJ DMK" },
];

// Assign semantic roles - all new
export const HERO_IMAGE = "/images/products/display-series.jpg";
export const ISPARE_IMAGES = ["/images/products/sancy-curve-oled.jpg", "/images/products/tablet-folder.jpg", "/images/products/middle-frame.jpg", "/images/products/ic.jpg"];
export const SPARE_IMAGES = ["/images/products/cc-board-flex.jpg", "/images/products/ringer-box.jpg", "/images/products/on-off-switch.jpg", "/images/products/volume-flex.jpg"];
export const ACCESSORY_IMAGES = ["/images/products/lcd-connector.jpg", "/images/products/front-back-camera.jpg"];
export const GALLERY_EXTRA = ["/images/products/finger-sensor.jpg", "/images/products/lcd-main-flex.jpg", "/images/products/sim-tray.jpg"];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/accessories", label: "Accessories" },
  { href: "/compatible-models", label: "Models" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  { title: "Mobile Screen Repair", desc: "Cracked display, touch issues, combo replacement with precision fitting.", icon: "◧" },
  { title: "Charging Port Repair", desc: "Charging flex, port cleaning and replacement for stable charging.", icon: "⚡" },
  { title: "Battery Replacement", desc: "Genuine capacity batteries with safe installation and testing.", icon: "🔋" },
  { title: "Speaker Repair", desc: "Loudspeaker & earpiece distortion fixes for clear audio.", icon: "🔊" },
  { title: "Microphone Repair", desc: "Mic flex replacement for call clarity and recording.", icon: "🎙" },
  { title: "Camera Repair", desc: "Rear & front camera modules, focus and clarity restoration.", icon: "◎" },
  { title: "Software Issues", desc: "Flashing, hanging, unlocking and OS optimization.", icon: "▣" },
  { title: "Mobile Diagnostics", desc: "Board-level checkup to identify faults before repair.", icon: "⌖" },
  { title: "General Mobile Repair", desc: "On/Off flex, volume keys, body and assembly service.", icon: "✧" },
  { title: "Spare Parts Replacement", desc: "On/Off Patta, Vellum and flex cables with compatibility support.", icon: "⬢" },
];

// NEW PRODUCT CATALOG - 21 products (LCD MAIN FLEX image replaced, hide name; + Camera Glass)
export const NEW_PRODUCTS = [
  { slug: "bkc-display-series", name: "DISPLAY SERIES", image: "/images/products/display-series.jpg", category: "DISPLAY COMPONENTS" },
  { slug: "sancy-curve-oled", name: "CURVE OLED", image: "/images/products/sancy-curve-oled.jpg", category: "DISPLAY COMPONENTS" },
  { slug: "tablet-folder", name: "TABLET FOLDER", image: "/images/products/tablet-folder.jpg", category: "DISPLAY COMPONENTS" },
  { slug: "middle-frame", name: "MIDDLE FRAME", image: "/images/products/middle-frame.jpg", category: "OTHER COMPONENTS" },
  { slug: "ic", name: "IC", image: "/images/products/ic.jpg", category: "OTHER COMPONENTS" },
  { slug: "stencils", name: "STENCILS", image: "/images/products/stencils.jpg", category: "OTHER COMPONENTS" },
  { slug: "cc-board-flex", name: "CC BOARD / FLEX", image: "/images/products/cc-board-flex.jpg", category: "FLEX & SWITCHES" },
  { slug: "ringer-box", name: "RINGER BOX", image: "/images/products/ringer-box.jpg", category: "AUDIO & VIBRATION" },
  { slug: "on-off-switch", name: "ON/OFF SWITCH", image: "/images/products/on-off-switch.jpg", category: "FLEX & SWITCHES" },
  { slug: "volume-flex", name: "VOLUME FLEX", image: "/images/products/volume-flex.jpg", category: "FLEX & SWITCHES" },
  { slug: "lcd-connector", name: "LCD CONNECTOR", image: "/images/products/lcd-connector.jpg", category: "DISPLAY COMPONENTS" },
  { slug: "front-back-camera", name: "FRONT & BACK CAMERA", image: "/images/products/front-back-camera.jpg", category: "CAMERA & SENSORS" },
  { slug: "finger-sensor", name: "FINGER SENSOR", image: "/images/products/finger-sensor.jpg", category: "CAMERA & SENSORS" },
  { slug: "lcd-main-flex", name: "LCD & MAIN FLEX", image: "/images/products/lcd-main-flex.jpg", category: "FLEX & SWITCHES", hideName: true } as const,
  { slug: "sim-tray", name: "SIM TRAY", image: "/images/products/sim-tray.jpg", category: "CONNECTORS & PORTS" },
  { slug: "cc-jack", name: "CC JACK", image: "/images/products/cc-jack.jpg", category: "CONNECTORS & PORTS" },
  { slug: "sim-connector", name: "SIM CONNECTOR", image: "/images/products/sim-connector.jpg", category: "CONNECTORS & PORTS" },
  { slug: "vibrator", name: "VIBRATOR", image: "/images/products/vibrator.jpg", category: "AUDIO & VIBRATION" },
  { slug: "back-panel", name: "BACK PANEL", image: "/images/products/back-panel.jpg", category: "OTHER COMPONENTS" },
  { slug: "battery-blp657", name: "BATTERY - 1 plus BLP 657", image: "/images/products/battery-blp657.jpg", category: "BATTERY" },
  { slug: "camera-glass", name: "Camera glass", image: "/images/products/camera-glass.jpg", category: "CAMERA & SENSORS" },
] as const;

export const PRODUCT_CATEGORIES = ["ALL PRODUCTS","FLEX & SWITCHES","DISPLAY COMPONENTS","CAMERA & SENSORS","CONNECTORS & PORTS","AUDIO & VIBRATION","OTHER COMPONENTS","BATTERY"] as const;

export function buildProductWhatsAppMessage(productName: string) {
  return `Hello Mamata Mobile,\n\nI am interested in:\n${productName}\n\nPlease share availability and price.\n\nThank you.`;
}

// 8 NEW DISPLAY COMBOS for Model/Accessories/Gallery (with details below image)
export const DISPLAY_COMBOS = [
  {
    slug: "y03-y18-dmk-jlt",
    name: "Y03/Y18 DMK JLT",
    title: "Y03/Y18 DMK JLT - Premium Quality Display",
    image: "/images/models/y03-y18-dmk-jlt.jpg",
    models: "Y03/Y18/Y28S 5G/Y28E 5G/T3 lite 5G/Y18e/Y18i, Y37/V27M/V27e/Y29 LITE 5G/Y17s/Y03t/Y03tH/B4",
    features: ["WIDE COMPATIBILITY","SUPER DURABILITY","HIGH BRIGHTNESS","HD+ RESOLUTION","SMOOTH TOUCH"],
    brand: "DMK JLT",
  },
  {
    slug: "c11-a57-raj-dmk",
    name: "C11/A57 NEW ALL UNI WD SUPER UNI HD+ RAJ DMK",
    title: "C11/A57 NEW ALL UNI - RAJ DMK",
    image: "/images/models/c11-a57-raj-dmk.jpg",
    models: "C11/C12/C15, C15 Qualcomm, A15/A16S, A16/A16K/A16E, Narzo 20/30A/50A, C25/C25s, A53s 5G/A55 5G/A56 5G, A57/A57S/A58 5G/A59 5G, A17/A17K/A18/A38, A77/A77S/A78 5G, K10 5G, Nord N300/N20se, C35",
    features: ["WIDE COMPATIBILITY","SUPER DURABILITY","HIGH BRIGHTNESS","HD+ RESOLUTION","SMOOTH TOUCH"],
    brand: "RAJ DMK",
  },
  {
    slug: "c55-c65-raj-dmk",
    name: "C55/C65 UNI WD SUPER UNI HD+ RAJ DMK",
    title: "C55/C65 UNI - RAJ DMK",
    image: "/images/models/c55-c65-raj-dmk.jpg",
    models: "C55/N56/C67 5G, RLM 11/11X 5G, NARZ 60X 5G, A58 4G/A48 5G/A79 5G, F23 5G, Nord N30/Nord CE3 Lite, RLM 12/12X, Narzo 70X/80X, C67 4G/C75 4G/P3X, C65 4G/N65, C63/C73, C75 5G, RLM 14X Global, NARZ 80 Lite, A3/A3X/A3pro, A5/A5X",
    features: ["WIDE COMPATIBILITY","SUPER DURABILITY","HIGH BRIGHTNESS","HD+ RESOLUTION","SMOOTH TOUCH"],
    brand: "RAJ DMK",
  },
  {
    slug: "dk-combo-original",
    name: "DK COMBO ORIGINAL COLOUR SCREEN",
    title: "DK COMBO - Original Colour Screen",
    image: "/images/models/dk-combo-original.jpg",
    models: "A15 4G / A15 5G / F15 5G / M15 5G",
    features: ["500+ BRIGHTNESS","FULL COMPATIBILITY","HD+","100% SATISFACTION"],
    brand: "RAJ | DK",
  },
  {
    slug: "a15-m15-f15-raj-dmk",
    name: "A15/M15 F15 RAJ DMK",
    title: "A15/M15 F15 - RAJ DMK",
    image: "/images/models/a15-m15-f15-raj-dmk.jpg",
    models: "A15/M15 F15",
    features: ["500+ BRIGHTNESS","HD+","RAJ DMK PREMIUM"],
    brand: "RAJ DMK",
  },
  {
    slug: "a30-a50-raj-dmk",
    name: "A30/A50/A50S RAJ DMK",
    title: "A30/A50/A50S - RAJ DMK",
    image: "/images/models/a30-a50-raj-dmk.jpg",
    models: "A30/A50/A50S",
    features: ["IPS 350-500+","HD+","RAJ DMK"],
    brand: "RAJ DMK",
  },
  {
    slug: "m30-m21-raj-dmk",
    name: "M30/M21/M31/M30S RAJ DMK",
    title: "M30/M21/M31/M30S - RAJ DMK",
    image: "/images/models/m30-m21-raj-dmk.jpg",
    models: "M30/M21, M31/M30S",
    features: ["High-Quality","RAJ DMK"],
    brand: "RAJ DMK",
  },
  {
    slug: "g14-xt2341-raj-dmk",
    name: "G14/XT2341 RAJ DMK - 600+ Brightness",
    title: "G14/XT2341 - 600+ Brightness RAJ DMK",
    image: "/images/models/g14-xt2341-raj-dmk.jpg",
    models: "G14/XT2341-3, G64 5G/XT2431-1, G54 5G/XT2343-5, XT2237-2, CX 266, Test coding M830-025500 5 UNIT, DK15 26.06(07)",
    features: ["600+ BRIGHTNESS","HIGH COLOR GAMUT","HD+"],
    brand: "RAJ DMK",
  },
] as const;

// OFFICIAL 12 SERVICES - exact names as per reference image (images updated to new 18 products)
export const OFFICIAL_SERVICES = [
  {
    slug: "spare-parts-supply",
    title: "Premium Mobile Spare Parts Supply",
    shortTitle: "Spare Parts Supply",
    desc: "Providing high-quality mobile spare parts for a wide range of smartphone brands and models.",
    icon: "◆",
    image: "/images/products/cc-board-flex.jpg",
    benefits: ["Wide brand coverage", "Genuine-quality flex cables", "Model-matched fit"],
  },
  {
    slug: "display-combo-solutions",
    title: "Display Combo Solutions",
    shortTitle: "Display Combo",
    desc: "Premium display solutions with vibrant visuals, precise touch response, and lasting durability.",
    icon: "◧",
    image: "/images/products/display-series.jpg",
    benefits: ["Vibrant display", "Precise touch", "Durable combo"],
  },
  {
    slug: "battery-solutions",
    title: "Mobile Battery Solutions",
    shortTitle: "Battery Solutions",
    desc: "Reliable replacement batteries engineered for long-lasting, safe and efficient performance.",
    icon: "⬢",
    image: "/images/products/sancy-curve-oled.jpg",
    benefits: ["Long-lasting charge", "Safe performance", "Efficient power"],
  },
  {
    slug: "repair-components",
    title: "Complete Repair Components",
    shortTitle: "Repair Components",
    desc: "Comprehensive repair components ensuring proper compatibility and dependable device functionality.",
    icon: "⚙",
    image: "/images/products/lcd-main-flex.jpg",
    benefits: ["Full compatibility", "Dependable function", "Repair-ready"],
  },
  {
    slug: "wholesale-bulk-supply",
    title: "Wholesale & Bulk Supply",
    shortTitle: "Wholesale & Bulk",
    desc: "Competitive bulk supply solutions with consistent stock and attractive wholesale pricing.",
    icon: "▣",
    image: "/images/products/middle-frame.jpg",
    benefits: ["Consistent stock", "Wholesale support", "For shops & dealers"],
  },
  {
    slug: "pan-india-distribution",
    title: "Pan India Distribution",
    shortTitle: "Pan India Delivery",
    desc: "Fast, secure nationwide delivery ensuring timely product availability across India.",
    icon: "⌖",
    image: "/images/products/tablet-folder.jpg",
    benefits: ["Nationwide delivery", "Secure handling", "Timely availability"],
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    shortTitle: "Quality Assurance",
    desc: "Every product undergoes strict quality testing for maximum reliability and performance.",
    icon: "✓",
    image: "/images/products/lcd-connector.jpg",
    benefits: ["Strict testing", "Reliable performance", "Zero compromise"],
  },
  {
    slug: "oem-premium-products",
    title: "OEM & Premium Quality Products",
    shortTitle: "OEM & Premium",
    desc: "OEM-grade products engineered for superior quality, precision, and long-term durability.",
    icon: "✧",
    image: "/images/products/display-series.jpg",
    benefits: ["OEM-grade", "Precision fit", "Long-term durability"],
  },
  {
    slug: "dealer-retailer-support",
    title: "Dealer & Retailer Support",
    shortTitle: "Dealer Support",
    desc: "Dedicated business support helping dealers and retailers achieve sustainable growth.",
    icon: "⬔",
    image: "/images/products/finger-sensor.jpg",
    benefits: ["Growth support", "Dealer friendly", "Long-term partnership"],
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    shortTitle: "Customer Support",
    desc: "Professional customer assistance providing quick solutions and reliable after-sales service.",
    icon: "◎",
    image: "/images/products/front-back-camera.jpg",
    benefits: ["Quick solutions", "After-sales care", "Human support"],
  },
  {
    slug: "secure-packaging",
    title: "Secure Packaging",
    shortTitle: "Secure Packaging",
    desc: "Protective packaging ensuring products arrive safely without damage during transportation.",
    icon: "⧉",
    image: "/images/products/sim-tray.jpg",
    benefits: ["Protective packing", "Damage-free transit", "Safe delivery"],
  },
  {
    slug: "wide-product-range",
    title: "Wide Product Range",
    shortTitle: "Wide Range",
    desc: "Extensive product range covering thousands of smartphone models and repair solutions.",
    icon: "⬡",
    image: "/images/products/ringer-box.jpg",
    benefits: ["Thousands of models", "All repair solutions", "One-stop range"],
  },
] as const;

export type OfficialService = typeof OFFICIAL_SERVICES[number];
