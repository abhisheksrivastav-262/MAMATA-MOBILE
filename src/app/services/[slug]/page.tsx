import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS, OFFICIAL_SERVICES } from "@/lib/constants";

const SERVICE_IMAGES: Record<string, string> = {
  "spare-parts-supply": "/images/services/premium-spare-parts.jpg",
  "display-combo-solutions": "/images/services/display-combo.jpg",
  "battery-solutions": "/images/services/mobile-battery.jpg",
  "repair-components": "/images/services/complete-repair.jpg",
  "wholesale-bulk-supply": "/images/services/wholesale-bulk.jpg",
  "pan-india-distribution": "/images/services/pan-india.jpg",
  "quality-assurance": "/images/services/quality-assurance.jpg",
  "oem-premium-products": "/images/services/oem-premium.jpg",
  "dealer-retailer-support": "/images/services/dealer-retailer.jpg",
  "customer-support": "/images/services/customer-support.jpg",
  "secure-packaging": "/images/services/secure-packaging.jpg",
  "wide-product-range": "/images/services/wide-product-range.jpg",
};

export function generateStaticParams() {
  return OFFICIAL_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = OFFICIAL_SERVICES.find((x) => x.slug === slug);
  if (!svc) return { title: "Service Not Found" };
  return {
    title: `${svc.title} | Mamata Mobile`,
    description: svc.desc,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = OFFICIAL_SERVICES.find((x) => x.slug === slug);
  if (!svc) notFound();
  const displayImage = SERVICE_IMAGES[slug] || svc.image;

  // model compatibility only for product-relevant services
  const showModels = ["spare-parts-supply","display-combo-solutions","battery-solutions","repair-components","wide-product-range"].includes(svc.slug);

  return (
    <div className="overflow-x-hidden">
      <section className="bg-[#0B1220] text-white overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/services" className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-bold text-white/80 hover:text-white">← Back to Services</Link>
          <div className="mt-4 flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-white text-[#0B1220] grid place-items-center text-lg font-black shrink-0">{svc.icon}</div>
            <div className="min-w-0">
              <h1 className="text-[26px] min-[375px]:text-[32px] sm:text-[42px] font-black tracking-tight leading-none break-words">{svc.title}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 break-words">{svc.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 items-start">
          <div className="rounded-[24px] overflow-hidden bg-white border border-slate-200 flex items-center justify-center min-h-[280px] max-[768px]:min-h-[220px] max-[768px]:aspect-auto sm:min-h-[380px] p-4 sm:p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={displayImage} alt={svc.title} className="w-full h-auto max-h-[520px] max-[768px]:max-h-[420px] object-contain block max-w-full" loading="eager" />
          </div>

          <div className="space-y-4 min-w-0">
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="text-sm font-black text-slate-900">Benefits</div>
              <ul className="mt-3 grid gap-2">
                {svc.benefits.map((b)=>(
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-700"><span className="h-2 w-2 rounded-full bg-sky-600 shrink-0"/> <span className="break-words">{b}</span></li>
                ))}
              </ul>
            </div>

            {showModels && (
              <div className="rounded-2xl bg-sky-50 border border-sky-200 p-6">
                <div className="text-sm font-black text-slate-900">Compatible Products / Models</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">Based on actual poster &amp; stock: Vivo Y18 / Y28s / Y03 / Y18e / T3 Lite • Realme 5 / 5S / 5i / C3 / C11 / C12 / C15 / C25 / C25S • Oppo A16 / A16s / A54 / A55 4G. For exact model, WhatsApp us.</p>
                <Link href="/compatible-models" className="mt-3 inline-flex rounded-full border border-sky-300 bg-white px-4 py-2 text-xs font-bold text-sky-700">View Compatible Models →</Link>
              </div>
            )}

            <div className="rounded-2xl bg-[#0B1220] text-white p-6">
              <div className="text-sm font-black">Enquire for {svc.shortTitle}</div>
              <p className="mt-2 text-xs leading-relaxed text-white/70">Talk to MAMATA MOBILE for {svc.title.toLowerCase()} — quick WhatsApp response, no fake pricing.</p>
              <div className="mt-4 grid grid-cols-1 min-[380px]:grid-cols-2 gap-3">
                <a href={`https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(`Hello Mamata Mobile, I am interested in ${svc.title}. Please share details.`)}`} target="_blank" className="rounded-full bg-[#25D366] px-5 py-3.5 text-center text-sm font-black text-white min-h-[48px] flex items-center justify-center">WHATSAPP US</a>
                <Link href="/quote" className="rounded-full bg-white px-5 py-3.5 text-center text-sm font-black text-[#0B1220] min-h-[48px] flex items-center justify-center">REQUEST A QUOTE</Link>
              </div>
              <a href={`tel:+91${BUSINESS.phone}`} className="mt-3 flex rounded-full border border-white/20 px-5 py-3.5 text-center text-sm font-bold text-white min-h-[48px] items-center justify-center">CALL NOW — {BUSINESS.phoneDisplay}</a>
              <div className="mt-3 text-[11px] text-white/50 text-center">{BUSINESS.addressShort}</div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="text-xs font-black tracking-widest text-slate-500">SERVES</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Individual customers","Repair technicians","Repair shops","Dealers","Retailers","Wholesale buyers"].map((t)=>(
                  <span key={t} className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/services" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900">← All 12 Services</Link>
          <Link href="/contact" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white">Contact Us →</Link>
        </div>
      </section>
    </div>
  );
}
