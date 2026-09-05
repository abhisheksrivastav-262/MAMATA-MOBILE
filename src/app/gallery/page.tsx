"use client";
import { useState } from "react";
import { GALLERY_IMAGES, DISPLAY_COMBOS } from "@/lib/constants";

export default function GalleryPage(){
  const [active, setActive] = useState<string|null>(null);
  const [filter, setFilter] = useState<"all"|"products"|"displays">("all");

  // Build combined list with details - 21 products (LCD MAIN FLEX hideName)
  const allItems = [
    ...GALLERY_IMAGES.slice(0,21).map((img, i)=>{
      const isHidden = img.src.includes("lcd-main-flex");
      return {
        src: img.src,
        alt: img.alt,
        name: isHidden ? "" : img.alt,
        details: isHidden ? "" : `Product ${i+1} • ${img.alt}`,
        type: "products" as const,
        hideName: isHidden,
      };
    }),
    ...DISPLAY_COMBOS.map((p)=>({
      src: p.image,
      alt: p.name,
      name: p.name,
      details: p.models,
      sub: p.title,
      type: "displays" as const,
    }))
  ];

  const filtered = allItems.filter((it)=>{
    if(filter==="all") return true;
    if(filter==="products") return it.type==="products";
    return it.type==="displays";
  });

  return (
    <div className="overflow-x-hidden">
      <section className="bg-white border-b border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="text-xs font-black tracking-[0.2em] text-sky-600">GALLERY</div>
          <h1 className="mt-2 text-[28px] min-[375px]:text-[34px] sm:text-[44px] font-black tracking-tight leading-none text-[#0B1220] break-words">Premium gallery.<br/>All real images + 8 new displays.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">21 products (LCD Flex hideName) + 8 display combos — har image ke niche wahi product name aur details (LCD Flex ka naam nahi). Tap to zoom.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {(["all","products","displays"] as const).map((f)=>(
              <button key={f} onClick={()=>setFilter(f)} className={`rounded-full px-5 py-2.5 text-sm font-bold border min-h-[44px] ${filter===f?"bg-slate-900 text-white border-slate-900":"bg-white text-slate-700 border-slate-200"}`}>{f==="all"?"All (29)":f==="products"?"Products (21)":"Displays (8)"}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((item)=>(
            <div key={item.src} className="rounded-[20px] bg-white border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col min-w-0">
              <button onClick={()=>setActive(item.src)} className="block w-full bg-white flex items-center justify-center p-2 sm:p-3 min-h-[220px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} className="w-full h-auto max-h-[380px] object-contain block max-w-full" loading="lazy"/>
              </button>
              <div className="p-4 border-t border-slate-100 bg-slate-50/50 min-h-[60px]">
                {(item as any).hideName ? (
                  <div className="h-4" aria-hidden="true" />
                ) : (
                  <>
                    <div className="text-sm font-black text-[#0B1220] break-words line-clamp-2">{item.name}</div>
                    { (item as any).sub && <div className="mt-1 text-xs font-semibold text-sky-700 break-words">{(item as any).sub}</div> }
                    <div className="mt-1 text-xs leading-relaxed text-slate-600 break-words line-clamp-3">{item.details}</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-slate-900 text-white p-6 text-center">
          <div className="text-sm font-bold">Want a specific product photo?</div>
          <div className="text-xs text-white/70 mt-1">WhatsApp us your model — we send clear photos instantly.</div>
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={()=>setActive(null)}>
          <div className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center" onClick={(e)=>e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active} alt="Zoomed" className="w-full h-auto max-h-[85vh] max-w-full object-contain bg-white rounded-2xl p-4" />
            <button onClick={()=>setActive(null)} aria-label="Close" className="absolute -top-3 -right-3 h-11 w-11 rounded-full bg-white text-slate-900 grid place-items-center font-black text-xl shadow-lg">×</button>
          </div>
        </div>
      )}
    </div>
  );
}
