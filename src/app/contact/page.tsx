import QuoteForm from "@/components/QuoteForm";
import { BUSINESS } from "@/lib/constants";

export const metadata = { title: "Contact | Mamata Mobile Grant Road" };

export default function ContactPage(){
  return (
    <div>
      <section className="bg-[#0B1220] text-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-xs font-black tracking-[0.2em] text-sky-400">CONTACT</div>
          <h1 className="mt-3 text-[34px] sm:text-[48px] font-black tracking-tight leading-none">Visit Mamata Mobile.<br/><span className="text-sky-400">Grant Road East.</span></h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="rounded-[24px] bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="text-sm font-black tracking-tight text-slate-900">MAMATA MOBILE</div>
              <div className="mt-3 text-sm leading-relaxed text-slate-600">
                Shop No. 38, 1st Floor, Platinum Mall,<br/>Near Delhi Darbar Hotel,<br/>Grant Road East, Mumbai - 400004
              </div>
              <div className="mt-6 space-y-3">
                <a href={`tel:+91${BUSINESS.phone}`} className="flex items-center justify-between rounded-xl bg-slate-900 px-5 py-4 text-white">
                  <span className="text-sm font-bold">Call Now: {BUSINESS.phoneDisplay}</span>
                  <span className="rounded-full bg-white text-slate-900 px-3 py-1 text-xs font-black">CALL</span>
                </a>
                <a href={`https://wa.me/${BUSINESS.phoneIntl}`} target="_blank" className="flex items-center justify-between rounded-xl bg-[#25D366] px-5 py-4 text-white">
                  <span className="text-sm font-bold">WhatsApp: {BUSINESS.phoneDisplay}</span>
                  <span className="rounded-full bg-white text-[#25D366] px-3 py-1 text-xs font-black">CHAT</span>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center justify-between rounded-xl bg-white border border-slate-200 px-5 py-4">
                  <span className="text-sm font-bold text-slate-900">{BUSINESS.email}</span>
                  <span className="text-xs font-bold text-sky-600">EMAIL</span>
                </a>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a href={BUSINESS.mapsUrl} target="_blank" className="rounded-full bg-sky-600 px-5 py-3 text-center text-sm font-bold text-white">Get Directions →</a>
                <a href="/quote" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-center text-sm font-bold text-slate-900">Request Quote</a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] grid place-items-center">
              <div className="text-center p-6">
                <div className="text-sm font-black text-slate-900">Find us at Platinum Mall</div>
                <div className="mt-1 text-xs text-slate-500">Near Delhi Darbar Hotel, Grant Road East</div>
                <a href={BUSINESS.mapsUrl} target="_blank" className="mt-4 inline-flex rounded-full bg-[#0B1220] px-5 py-2.5 text-sm font-bold text-white">Open in Google Maps →</a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-3">
              <video src="/images/promo-video.mp4" controls className="w-full rounded-xl bg-black" poster="/images/products/display-series.jpg" />
              <div className="px-2 py-2 text-xs font-bold text-slate-600">Shop promo video • Tap to play</div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
