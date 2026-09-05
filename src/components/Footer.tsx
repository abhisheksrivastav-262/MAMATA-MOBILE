import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-slate-300 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-10 sm:py-16 pb-[calc(3rem+env(safe-area-inset-bottom))] sm:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-[#0B1220] font-black text-xs">MM</div>
              <div>
                <div className="font-black tracking-tight text-white leading-none">MAMATA MOBILE</div>
                <div className="text-xs tracking-widest text-sky-400 font-semibold">iSpare &amp; Combo</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-md">
              Mobile Repair | Spare Parts | iSpare &amp; Combo | Accessories<br />
              Trusted service near Grant Road East, Mumbai. Genuine spare parts, professional repair and quick WhatsApp enquiry.
            </p>
            <div className="mt-6 rounded-2xl bg-white/[0.06] border border-white/10 p-4">
              <div className="text-sm text-slate-200 leading-relaxed">
                {BUSINESS.addressLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href={`tel:+91${BUSINESS.phone}`} className="rounded-full bg-white text-[#0B1220] px-4 py-2 text-sm font-bold">Call: {BUSINESS.phoneDisplay}</a>
                <a href={`https://wa.me/${BUSINESS.phoneIntl}`} target="_blank" className="rounded-full bg-sky-600 text-white px-4 py-2 text-sm font-bold">WhatsApp Us</a>
              </div>
              <a href={`mailto:${BUSINESS.email}`} className="mt-3 inline-block text-sm text-sky-300 hover:text-white">{BUSINESS.email}</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-bold tracking-widest text-white">QUICK LINKS</div>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition">{l.label}</Link>
                </li>
              ))}
              <li><Link href="/quote" className="text-sm text-sky-400 hover:text-white">Request a Quote</Link></li>
            </ul>
            <div className="mt-6 text-xs text-slate-500 leading-relaxed">
              Near Delhi Darbar Hotel, Platinum Mall,<br />Grant Road East • Mumbai - 400004
            </div>
          </div>

          {/* CTA */}
          <div>
            <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 p-6 text-white">
              <div className="text-lg font-black leading-tight">Need a quick quote?</div>
              <p className="mt-2 text-sm text-white/90">Send your mobile model and issue on WhatsApp. We reply fast.</p>
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/quote" className="rounded-full bg-white text-sky-700 px-5 py-3 text-center text-sm font-black">Request Free Quote →</Link>
                <a href={`https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent("Hello Mamata Mobile, I need help with my mobile. Please assist.")}`} target="_blank" className="rounded-full bg-black/20 border border-white/20 px-5 py-3 text-center text-sm font-bold text-white">Chat on WhatsApp</a>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Open for enquiry • Fast response
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Mamata Mobile — Grant Road, Mumbai. All rights reserved.</div>
          <div className="text-slate-600">Designed for premium retail &amp; service</div>
        </div>
      </div>
    </footer>
  );
}
