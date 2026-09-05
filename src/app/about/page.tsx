import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata = { title: "About Mamata Mobile | Grant Road Mumbai" };

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-[#0B1220] text-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-xs font-black tracking-[0.2em] text-sky-400">ABOUT US</div>
          <h1 className="mt-3 text-[36px] sm:text-[48px] font-black tracking-tight leading-none">Mamata Mobile.<br/><span className="text-sky-400">iSpare &amp; Combo</span> specialists.</h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">Based in Platinum Mall, Grant Road East, Mumbai — we serve walk-in and WhatsApp customers with honest repair and genuine spare parts. No inflated promises, just reliable service.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="rounded-[24px] bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-black text-slate-900">Customer-focused service</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Mamata Mobile is a Mumbai-based mobile repair and spare parts shop located at Shop No. 38, 1st Floor, Platinum Mall, near Delhi Darbar Hotel, Grant Road East. We help with screen, battery, charging, speaker, mic, camera, software and general repairs, plus retail spare parts and accessories.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { t:"Location", d:"Grant Road East, Platinum Mall — easy to find, near Delhi Darbar Hotel."},
                { t:"Spare Parts", d:"On/Off Patta, Vellum, Volume Flex, Charging Flex, combos — model-matched."},
                { t:"iSpare & Combo", d:"Complete display combo solutions for Vivo, Realme, Oppo and more."},
                { t:"Enquiry", d:"Fast WhatsApp response. Send model + issue and we guide you."},
              ].map((x)=>(
                <div key={x.t} className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                  <div className="text-sm font-black text-slate-900">{x.t}</div>
                  <div className="mt-1 text-xs leading-relaxed text-slate-600">{x.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Link href="/quote" className="rounded-full bg-[#0B1220] px-6 py-3 text-sm font-bold text-white">Request Free Quote</Link>
              <Link href="/contact" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900">Contact Us</Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[24px] overflow-hidden bg-slate-50 border border-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/products/lcd-main-flex.jpg" alt="Mamata Mobile shop" className="w-full object-contain p-4 bg-white" />
            </div>
            <div className="rounded-2xl bg-sky-600 text-white p-6">
              <div className="text-sm font-black">Visit or WhatsApp</div>
              <div className="mt-2 text-sm leading-relaxed text-white/90">
                Shop No. 38, 1st Floor, Platinum Mall,<br/>Near Delhi Darbar Hotel,<br/>Grant Road East, Mumbai - 400004
              </div>
              <div className="mt-4 text-sm font-bold">{BUSINESS.phoneDisplay} • {BUSINESS.email}</div>
              <a href={`https://wa.me/${BUSINESS.phoneIntl}`} target="_blank" className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-black text-sky-700">Chat on WhatsApp →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
