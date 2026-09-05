import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { BUSINESS, OFFICIAL_SERVICES, GALLERY_IMAGES, NEW_PRODUCTS, buildProductWhatsAppMessage } from "@/lib/constants";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-slate-50" />
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-sky-100 blur-[80px] opacity-60" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-slate-200 blur-[80px] opacity-40" />
        <div className="relative mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Copy */}
            <div className="animate-fade-up min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 shadow-sm max-w-full">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-600 truncate">PLATINUM MALL • GRANT ROAD EAST • MUMBAI</span>
              </div>
              <h1 className="mt-4 sm:mt-5 text-[28px] min-[375px]:text-[32px] sm:text-[44px] lg:text-[52px] font-black tracking-[-0.05em] leading-[0.95] text-[#0B1220] break-words">
                Premium Mobile Repair,<br />
                <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">Spare Parts</span> &amp; Accessories<br />
                in Grant Road, Mumbai
              </h1>
              <p className="mt-3 sm:mt-4 max-w-xl text-[14px] sm:text-base leading-relaxed text-slate-600">
                Trusted mobile repair, genuine spare parts, <span className="font-semibold text-slate-900">iSpare &amp; Combo</span> solutions and mobile accessories — serving customers near Grant Road East, Mumbai. Quick enquiry on WhatsApp.
              </p>
              <div className="mt-5 sm:mt-6 grid grid-cols-1 min-[380px]:grid-cols-2 lg:flex lg:flex-wrap gap-2 sm:gap-3">
                <Link href="/quote" className="rounded-full bg-[#0B1220] px-5 sm:px-7 py-3.5 text-sm font-black text-white hover:bg-black shadow-lg text-center flex items-center justify-center min-h-[48px]">
                  REQUEST FREE QUOTE →
                </Link>
                <a href={`https://wa.me/${BUSINESS.phoneIntl}`} target="_blank" className="rounded-full bg-[#25D366] px-5 sm:px-7 py-3.5 text-sm font-black text-white shadow-lg flex items-center justify-center gap-2 min-h-[48px]">
                  WHATSAPP US
                </a>
                <a href={`tel:+91${BUSINESS.phone}`} className="rounded-full bg-white border border-slate-200 px-5 sm:px-7 py-3.5 text-sm font-black text-slate-900 shadow-sm text-center flex items-center justify-center min-h-[48px] min-[380px]:col-span-2 lg:col-span-1">
                  CALL NOW
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-slate-900 text-white grid place-items-center text-[11px]">✓</span> Genuine parts</span>
                <span className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-slate-900 text-white grid place-items-center text-[11px]">✓</span> Expert repair</span>
                <span className="flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-slate-900 text-white grid place-items-center text-[11px]">✓</span> Fast WhatsApp support</span>
              </div>
              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-4 flex items-center gap-4 shadow-sm max-w-lg">
                <div className="h-10 w-10 rounded-xl bg-slate-900 grid place-items-center text-white text-sm">⦿</div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-slate-900 truncate">{BUSINESS.addressShort}</div>
                  <div className="text-xs text-slate-500">{BUSINESS.phoneDisplay} • {BUSINESS.email}</div>
                </div>
              </div>
            </div>

            {/* Hero visual - FIXED: no cropping on mobile */}
            <div className="relative min-w-0">
              <div className="absolute -inset-3 bg-gradient-to-br from-sky-200 to-slate-200 rounded-[32px] blur-2xl opacity-40" />
              <div className="relative rounded-[28px] bg-white border border-slate-200 p-3 sm:p-4 shadow-[0_24px_64px_rgba(15,23,42,0.12)]">
                <div className="hero-image-wrapper rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 w-full flex items-center justify-center max-[768px]:aspect-auto max-[768px]:h-auto max-[768px]:min-h-[220px] sm:aspect-[1.15] sm:min-h-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/products/display-series.jpg" alt="Mamata Mobile - DISPLAY SERIES Premium Quality Display" className="hero-image w-full h-auto max-h-[520px] max-[768px]:max-h-[420px] object-contain p-2 sm:p-4 max-w-full" loading="eager" />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                  {["/images/products/sancy-curve-oled.jpg","/images/products/tablet-folder.jpg","/images/products/middle-frame.jpg"].map((s)=>(
                    <div key={s} className="rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center min-h-[110px] aspect-square max-[768px]:aspect-auto max-[768px]:h-auto max-[768px]:min-h-[110px] sm:aspect-square sm:min-h-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s} alt="Mamata Mobile spare part" className="w-full h-auto max-h-[160px] max-[768px]:max-h-[120px] object-contain p-2 block" loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-4 -left-2 sm:-left-4 rounded-2xl bg-[#0B1220] text-white px-4 py-3 shadow-xl flex items-center gap-3 max-w-[85%]">
                  <div className="h-8 w-8 rounded-lg bg-white/15 grid place-items-center shrink-0">◆</div>
                  <div className="min-w-0">
                    <div className="text-xs font-black tracking-widest truncate">iSPARE &amp; COMBO</div>
                    <div className="text-[11px] text-white/70 truncate">Vivo • Realme • Oppo • Universal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 -mt-2 sm:mt-2">
        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {[
            { k: "Mobile Repair", v: "Expert Service", d: "Screen, battery, ports" },
            { k: "Quality Spare Parts", v: "Genuine Flex", d: "On/Off, Volume, Charging" },
            { k: "iSpare & Combo", v: "Complete Solutions", d: "Display combos" },
            { k: "Accessories", v: "Essentials", d: "Cables, protection & more" },
            { k: "Grant Road, Mumbai", v: "Platinum Mall", d: "Shop 38, 1st Floor" },
          ].map((s)=>(
            <div key={s.k} className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 hover:shadow-lg transition min-w-0">
              <div className="text-[11px] font-bold tracking-widest text-sky-600 break-words">{s.k.toUpperCase()}</div>
              <div className="mt-1 text-sm font-black text-slate-900 break-words">{s.v}</div>
              <div className="text-xs text-slate-500 break-words">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES - 12 Official */}
      <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="text-xs font-black tracking-[0.2em] text-sky-600">12 OFFICIAL SERVICES</div>
            <h2 className="mt-2 text-[26px] min-[375px]:text-[28px] sm:text-[36px] font-black tracking-tight text-[#0B1220] leading-none break-words">Everything You Need for<br/>Mobile Repair &amp; Spare Parts</h2>
          </div>
          <p className="max-w-lg text-[13px] sm:text-sm leading-relaxed text-slate-600 min-w-0">From premium mobile spare parts and display combo solutions to wholesale supply, distribution, repair components and customer support — MAMATA MOBILE provides complete solutions for mobile repair businesses and customers.</p>
        </div>
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {OFFICIAL_SERVICES.map((s)=>(
            <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-2xl bg-white border border-slate-200 p-5 hover:border-slate-900 hover:shadow-xl transition flex flex-col min-w-0">
              <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center text-sm group-hover:bg-sky-600 transition shrink-0">{s.icon}</div>
              <div className="mt-4 text-sm font-black text-slate-900 leading-tight break-words">{s.title}</div>
              <div className="mt-2 text-xs leading-relaxed text-slate-500 flex-1 break-words">{s.desc}</div>
              <span className="mt-4 inline-flex text-xs font-bold text-sky-600 group-hover:text-sky-700">Enquire Now →</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/services" className="inline-flex rounded-full bg-[#0B1220] px-7 py-3 text-sm font-black text-white hover:bg-black shadow">VIEW ALL SERVICES →</Link>
        </div>
      </section>

      {/* PRODUCTS - 18 NEW IN EXACT USER ORDER */}
      <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-black tracking-[0.2em] text-sky-600">18 PREMIUM PRODUCTS</div>
          <h2 className="mt-2 text-[26px] min-[375px]:text-[32px] sm:text-[40px] font-black tracking-tight text-[#0B1220] leading-none break-words">DISPLAY SERIES • CURVE OLED • Tablet Folder<br/>&amp; Complete Spare Parts Range</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 break-words">Old products completely removed — all 18 products from your reference image displayed individually, in your specified order, with complete visibility and no cropping.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
          {NEW_PRODUCTS.map((p, idx)=>(
            <div key={p.slug} className="group rounded-[16px] bg-white border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition flex flex-col min-w-0">
              <div className="bg-white flex items-center justify-center overflow-hidden w-full min-h-[130px] sm:min-h-[160px] aspect-square p-2 sm:p-3 relative">
                <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-[#0B1220] text-white grid place-items-center text-[10px] font-black">{idx+1}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={(p as any).hideName ? "Product image" : p.name} className="w-full h-auto max-h-[160px] sm:max-h-[180px] object-contain block max-w-full" loading="lazy"/>
              </div>
              <div className="p-3 flex flex-col flex-1 min-w-0 border-t border-slate-100">
                {(p as any).hideName ? (
                  <div className="min-h-[28px]" aria-hidden="true" />
                ) : (
                  <div className="text-[11px] sm:text-xs font-black tracking-tight text-[#0B1220] leading-tight break-words text-center min-h-[28px] flex items-center justify-center">{p.name}</div>
                )}
                <a href={`https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(buildProductWhatsAppMessage(p.name))}`} target="_blank" className="mt-2 w-full rounded-full bg-[#0B1220] group-hover:bg-black px-3 py-2 text-[11px] font-black text-white text-center min-h-[32px] flex items-center justify-center">ENQUIRE NOW</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href={`https://wa.me/${BUSINESS.phoneIntl}`} target="_blank" className="inline-flex rounded-full bg-[#25D366] px-7 py-3 text-sm font-black text-white min-h-[44px] items-center">ENQUIRE ON WHATSAPP →</a>
        </div>
      </section>

      {/* ACCESSORIES */}
      <section className="bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-3 min-w-0">
              {["/images/products/volume-flex.jpg","/images/products/lcd-connector.jpg","/images/products/front-back-camera.jpg","/images/products/finger-sensor.jpg"].map((s)=>(
                <div key={s} className="rounded-2xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center min-h-[140px] aspect-square max-[768px]:aspect-auto max-[768px]:h-auto max-[768px]:min-h-[140px] sm:aspect-square sm:min-h-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s} alt="Accessories" className="w-full h-auto max-h-[220px] max-[768px]:max-h-[180px] object-contain p-4 block" loading="lazy"/>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2 min-w-0">
              <div className="text-xs font-black tracking-[0.2em] text-sky-600">MOBILE ACCESSORIES</div>
              <h2 className="mt-2 text-[26px] min-[375px]:text-[28px] sm:text-[34px] font-black tracking-tight text-[#0B1220] leading-none break-words">Everyday essentials,<br/>premium selection.</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">Cables, adapters, protection and charging accessories — curated from our actual stock. Visit or WhatsApp for availability.</p>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                {["Charging Accessories","Cables & Adapters","Protection","Mobile Essentials"].map((t)=>(
                  <li key={t} className="flex items-center gap-2 text-slate-700 break-words"><span className="h-1.5 w-1.5 rounded-full bg-sky-600 shrink-0"/> {t}</li>
                ))}
              </ul>
              <Link href="/accessories" className="mt-6 inline-flex rounded-full bg-[#0B1220] px-6 py-3 text-sm font-bold text-white min-h-[44px] items-center">Explore Accessories →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <h2 className="text-[24px] min-[375px]:text-[26px] sm:text-[32px] font-black tracking-tight text-[#0B1220] leading-none break-words">Real shop. Real products.</h2>
          <Link href="/gallery" className="hidden sm:inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold shrink-0 min-h-[44px] items-center">View Gallery →</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 min-[380px]:grid-cols-3 lg:grid-cols-7 gap-2 sm:gap-3">
          {GALLERY_IMAGES.slice(0,7).map((g)=>(
            <div key={g.src} className="gallery-item rounded-xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center min-h-[120px] aspect-square max-[768px]:aspect-auto max-[768px]:h-auto max-[768px]:min-h-[120px] sm:aspect-square sm:min-h-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.alt} className="w-full h-auto max-h-[200px] max-[768px]:max-h-[160px] object-contain p-1 sm:p-1 block" loading="lazy"/>
            </div>
          ))}
        </div>
        <div className="mt-4 sm:hidden text-center">
          <Link href="/gallery" className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold min-h-[44px] items-center">View Gallery →</Link>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-white border-t border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div className="min-w-0">
              <div className="text-xs font-black tracking-[0.2em] text-sky-600">GET IN TOUCH</div>
              <h2 className="mt-2 text-[26px] min-[375px]:text-[28px] sm:text-[38px] font-black tracking-tight text-[#0B1220] leading-none break-words">Request a free quote.<br/>We reply on WhatsApp.</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">Tell us your mobile model and issue. Your enquiry opens WhatsApp with all details pre-filled — no backend needed, works on every device.</p>
              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 min-w-0">
                <div className="text-sm font-black text-slate-900">Visit us</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600 break-words">
                  Shop No. 38, 1st Floor, Platinum Mall,<br/>Near Delhi Darbar Hotel, Grant Road East,<br/>Mumbai - 400004
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={`tel:+91${BUSINESS.phone}`} className="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-bold min-h-[40px] flex items-center">Call Now</a>
                  <a href={BUSINESS.mapsUrl} target="_blank" className="rounded-full bg-[#0B1220] px-4 py-2 text-sm font-bold text-white min-h-[40px] flex items-center">Get Directions →</a>
                </div>
              </div>
            </div>
            <div className="min-w-0">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
