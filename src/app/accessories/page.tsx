import Link from "next/link";
import { NEW_PRODUCTS, DISPLAY_COMBOS, BUSINESS, buildProductWhatsAppMessage } from "@/lib/constants";
export const metadata={title:"Mobile Accessories | Mamata Mobile"};
export default function AccessoriesPage(){
  return (
    <div className="overflow-x-hidden">
      <section className="bg-white border-b border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-8 sm:py-14">
          <div className="text-xs font-black tracking-[0.2em] text-sky-600">ACCESSORIES</div>
          <h1 className="mt-2 text-[28px] min-[375px]:text-[34px] sm:text-[44px] font-black tracking-tight leading-none text-[#0B1220] break-words">Mobile accessories,<br/>curated from stock.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">All 18 products — har product ka sahi naam aur sahi image. Old accessories images remove kar diye gaye hain.</p>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
          {NEW_PRODUCTS.map((p, idx)=>(
            <div key={p.slug} className="rounded-[16px] bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition flex flex-col min-w-0">
              <div className="bg-white flex items-center justify-center overflow-hidden w-full min-h-[130px] sm:min-h-[160px] aspect-square p-2 sm:p-3 relative">
                <span className="absolute top-2 left-2 h-5 w-5 rounded-full bg-[#0B1220] text-white grid place-items-center text-[9px] font-black">{idx+1}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={(p as any).hideName ? "Product image" : p.name} className="w-full h-auto max-h-[150px] sm:max-h-[170px] object-contain block max-w-full" loading="lazy"/>
              </div>
              <div className="p-3 flex flex-col flex-1 min-w-0 border-t border-slate-100">
                {(p as any).hideName ? (
                  <div className="min-h-[28px]" aria-hidden="true" />
                ) : (
                  <div className="text-[11px] sm:text-xs font-black tracking-tight text-[#0B1220] leading-tight break-words text-center min-h-[28px] flex items-center justify-center">{p.name}</div>
                )}
                <div className="mt-1 text-[10px] text-slate-500 text-center truncate">{(p as any).hideName ? "" : p.category}</div>
                <a href={`https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(buildProductWhatsAppMessage(p.name))}`} target="_blank" className="mt-2 w-full rounded-full bg-[#0B1220] px-3 py-2 text-[11px] font-black text-white text-center min-h-[32px] flex items-center justify-center">ENQUIRE NOW</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <div className="text-xs font-black tracking-[0.2em] text-sky-600">NEW DISPLAY COMBOS</div>
          <h2 className="mt-2 text-xl sm:text-2xl font-black tracking-tight text-[#0B1220]">Aapke diye 8 display images — har image ke niche wahi product name &amp; details</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {DISPLAY_COMBOS.map((p)=>(
              <div key={p.slug} className="rounded-[20px] bg-white border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col min-w-0">
                <div className="bg-white flex items-center justify-center overflow-hidden w-full min-h-[280px] sm:min-h-[360px] p-2 sm:p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} className="w-full h-auto max-h-[520px] object-contain block max-w-full" loading="lazy"/>
                </div>
                <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/50">
                  <div className="text-sm font-black text-[#0B1220] break-words">{p.name}</div>
                  <div className="mt-1 text-xs font-semibold text-sky-700 break-words">{p.title}</div>
                  <div className="mt-2 text-xs leading-relaxed text-slate-600 break-words"><span className="font-bold text-slate-700">Models:</span> {p.models}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.features.map((f)=>(
                      <span key={f} className="rounded-full bg-white border border-slate-200 px-2.5 py-1 text-[10px] font-bold tracking-wide text-slate-600">{f}</span>
                    ))}
                  </div>
                  <div className="mt-2 text-[11px] font-bold text-slate-500">{p.brand} • Premium Quality Display</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/contact" className="inline-flex rounded-full bg-[#0B1220] px-7 py-3 text-sm font-black text-white">Visit Store →</Link>
        </div>
      </section>
    </div>
  );
}
