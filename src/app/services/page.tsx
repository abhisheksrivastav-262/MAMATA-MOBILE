import Link from "next/link";
import { SERVICES, BUSINESS } from "@/lib/constants";

// 12 Services with NEW images in exact user order - ONLY on Services page
const SERVICES_NEW = [
  { slug: "spare-parts-supply", title: "Premium Mobile Spare Parts Supply", desc: "Providing high-quality mobile spare parts for a wide range of smartphone brands and models.", icon: "◆", image: "/images/services/premium-spare-parts.jpg" },
  { slug: "display-combo-solutions", title: "Display Combo Solutions", desc: "Premium display solutions with vibrant visuals, precise touch response, and lasting durability.", icon: "◧", image: "/images/services/display-combo.jpg" },
  { slug: "battery-solutions", title: "Mobile Battery Solutions", desc: "Reliable replacement batteries engineered for long-lasting, safe and efficient performance.", icon: "⬢", image: "/images/services/mobile-battery.jpg" },
  { slug: "repair-components", title: "Complete Repair Components", desc: "Comprehensive repair components ensuring proper compatibility and dependable device functionality.", icon: "⚙", image: "/images/services/complete-repair.jpg" },
  { slug: "wholesale-bulk-supply", title: "Wholesale & Bulk Supply", desc: "Competitive bulk supply solutions with consistent stock and attractive wholesale pricing.", icon: "▣", image: "/images/services/wholesale-bulk.jpg" },
  { slug: "pan-india-distribution", title: "Pan India Distribution", desc: "Fast, secure nationwide delivery ensuring timely product availability across India.", icon: "⌖", image: "/images/services/pan-india.jpg" },
  { slug: "quality-assurance", title: "Quality Assurance", desc: "Every product undergoes strict quality testing for maximum reliability and performance.", icon: "✓", image: "/images/services/quality-assurance.jpg" },
  { slug: "oem-premium-products", title: "OEM & Premium Quality Products", desc: "OEM-grade products engineered for superior quality, precision, and long-term durability.", icon: "✧", image: "/images/services/oem-premium.jpg" },
  { slug: "dealer-retailer-support", title: "Dealer & Retailer Support", desc: "Dedicated business support helping dealers and retailers achieve sustainable growth.", icon: "⬔", image: "/images/services/dealer-retailer.jpg" },
  { slug: "customer-support", title: "Customer Support", desc: "Professional customer assistance providing quick solutions and reliable after-sales service.", icon: "◎", image: "/images/services/customer-support.jpg" },
  { slug: "secure-packaging", title: "Secure Packaging", desc: "Protective packaging ensuring products arrive safely without damage during transportation.", icon: "⧉", image: "/images/services/secure-packaging.jpg" },
  { slug: "wide-product-range", title: "Wide Product Range", desc: "Extensive product range covering thousands of smartphone models and repair solutions.", icon: "⬡", image: "/images/services/wide-product-range.jpg" },
] as const;

export const metadata = { title: "Services — 12 Official Offerings | Mamata Mobile Grant Road" };

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-[#0B1220] text-white overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="text-xs font-black tracking-[0.2em] text-sky-400">12 OFFICIAL SERVICES</div>
          <h1 className="mt-3 text-[28px] min-[375px]:text-[34px] sm:text-[48px] font-black tracking-tight leading-none break-words">Everything You Need for<br/>Mobile Repair &amp; Spare Parts</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">From premium mobile spare parts and display combo solutions to wholesale supply, distribution, repair components and customer support — MAMATA MOBILE provides complete solutions for mobile repair businesses and customers. Serving individual customers, technicians, shops, dealers, retailers and wholesale buyers.</p>
        </div>
      </section>

      {/* 12 Official Services - premium 3/2/1 grid */}
      <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-black tracking-[0.2em] text-sky-600">OFFICIAL OFFERINGS</div>
          <div className="text-xs font-bold text-slate-500">{SERVICES_NEW.length} services</div>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {SERVICES_NEW.map((s)=>(
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-[20px] bg-white border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-900 transition flex flex-col min-w-0"
            >
              <div className="bg-white flex items-center justify-center overflow-hidden w-full min-h-[200px] sm:min-h-[220px] p-3 sm:p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.title} className="w-full h-auto max-h-[280px] object-contain block max-w-full group-hover:scale-[1.02] transition" loading="lazy" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1 min-w-0 border-t border-slate-100">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center text-sm group-hover:bg-sky-600 transition shrink-0">{s.icon}</div>
                <div className="mt-3 text-[15px] font-black text-slate-900 leading-tight break-words">{s.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600 flex-1 break-words">{s.desc}</div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="inline-flex rounded-full bg-[#0B1220] group-hover:bg-black px-4 py-2 text-xs font-bold text-white">Enquire Now</span>
                  <span className="text-xs font-bold text-sky-600">View →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="mt-8 sm:mt-10 rounded-[24px] bg-[#0B1220] text-white p-6 sm:p-8 overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="min-w-0">
              <div className="text-xl sm:text-2xl font-black leading-tight break-words">Need Mobile Spare Parts or Repair Solutions?</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 break-words">Talk to MAMATA MOBILE for product enquiries, repair requirements, wholesale supply and iSpare &amp; Combo solutions.</p>
              <div className="mt-3 text-xs text-slate-400">For dealers, retailers, technicians &amp; wholesale buyers — Pan India delivery available</div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a href={`https://wa.me/${BUSINESS.phoneIntl}`} target="_blank" className="rounded-full bg-[#25D366] px-6 py-3.5 text-center text-sm font-black text-white min-h-[48px] flex items-center justify-center">WHATSAPP US</a>
              <Link href="/quote" className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-black text-[#0B1220] min-h-[48px] flex items-center justify-center">REQUEST A QUOTE</Link>
              <a href={`tel:+91${BUSINESS.phone}`} className="rounded-full border border-white/20 px-6 py-3.5 text-center text-sm font-bold text-white min-h-[48px] flex items-center justify-center">CALL NOW</a>
            </div>
          </div>
        </div>
      </section>

      {/* Retained: existing technical repair services */}
      <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-8 sm:py-10 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <div className="text-xs font-black tracking-[0.2em] text-slate-500">ALSO AVAILABLE</div>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <h2 className="mt-3 text-xl sm:text-2xl font-black tracking-tight text-[#0B1220]">Technical Repair Expertise</h2>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">Our hands-on repair services retained from earlier — screen, battery, charging, audio, camera and more. Tap any card to enquire.</p>
        <div className="mt-6 grid grid-cols-1 min-[380px]:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {SERVICES.map((s)=>(
            <div key={s.title} className="rounded-[16px] bg-white border border-slate-200 p-4 hover:border-slate-900 hover:shadow-md transition flex flex-col min-w-0">
              <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center text-xs shrink-0">{s.icon}</div>
              <div className="mt-3 text-sm font-black text-slate-900 break-words">{s.title}</div>
              <div className="mt-1 text-xs leading-relaxed text-slate-600 flex-1 break-words">{s.desc}</div>
              <Link href="/quote" className="mt-3 inline-flex text-xs font-bold text-sky-600">Enquire →</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
