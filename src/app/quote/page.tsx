import QuoteForm from "@/components/QuoteForm";
import { BUSINESS } from "@/lib/constants";

export const metadata = { title: "Request Free Quote | Mamata Mobile" };

export default function QuotePage(){
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0B1220] to-[#111D33] text-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-bold tracking-widest">REQUEST FREE QUOTE</div>
            <h1 className="mt-4 text-[34px] sm:text-[48px] font-black tracking-tight leading-none">Your enquiry<br/><span className="text-sky-400">opens WhatsApp.</span></h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">Fill the form — we build a WhatsApp message with your details and open <span className="text-white font-bold">wa.me/919892332761</span> instantly. No fake “thanks” screen before WhatsApp.</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white text-slate-900 px-3 py-1.5 font-bold">✓ Instant WhatsApp</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1.5 font-bold">✓ Works on iPhone & Android</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1.5 font-bold">✓ No backend needed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
          <QuoteForm />
          <div className="space-y-4">
            <div className="rounded-[24px] bg-white border border-slate-200 p-6 shadow-sm">
              <div className="text-sm font-black text-slate-900">How it works</div>
              <ol className="mt-3 space-y-3 text-sm text-slate-600 list-decimal list-inside">
                <li>Validate required fields</li>
                <li>Build message: <span className="font-mono text-xs bg-slate-50 border px-2 py-1 rounded">Hello Mamata Mobile, I would like to request a quote...</span></li>
                <li>Encode with <span className="font-mono text-xs">encodeURIComponent</span></li>
                <li>Open <span className="font-mono text-xs">https://wa.me/919892332761?text=...</span></li>
                <li>Works on desktop + mobile WhatsApp</li>
              </ol>
              <div className="mt-4 rounded-xl bg-sky-50 border border-sky-200 p-4 text-xs leading-relaxed text-slate-700">
                Example message:<br/>
                <span className="font-mono text-[11px] leading-relaxed block mt-2 whitespace-pre-wrap">Hello Mamata Mobile,{"\n\n"}I would like to request a quote.{"\n\n"}Name: [customer]{"\n"}Phone: [phone]{"\n"}Service/Product: [service]{"\n"}Mobile Model: [model]{"\n"}Message: [message]{"\n\n"}Please contact me regarding my enquiry.</span>
              </div>
            </div>

            <div className="rounded-[24px] bg-slate-900 text-white p-6">
              <div className="text-sm font-black">Contact directly</div>
              <div className="mt-3 space-y-2 text-sm">
                <a href={`tel:+91${BUSINESS.phone}`} className="block rounded-xl bg-white text-slate-900 px-4 py-3 font-bold text-center">Call {BUSINESS.phoneDisplay}</a>
                <a href={`https://wa.me/${BUSINESS.phoneIntl}`} target="_blank" className="block rounded-xl bg-[#25D366] px-4 py-3 font-bold text-center">WhatsApp {BUSINESS.phoneDisplay}</a>
                <div className="text-center text-xs text-white/60 pt-2">{BUSINESS.addressShort}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
