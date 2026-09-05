"use client";
import { useState } from "react";
import { buildQuoteMessage, buildWhatsAppUrl } from "@/lib/constants";

type Props = {
  defaultService?: string;
  compact?: boolean;
};

export default function QuoteForm({ defaultService = "", compact = false }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    model: "",
    service: defaultService,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string,string>>({});

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g,"").slice(-10))) e.phone = "Enter valid 10-digit number";
    if (!form.service.trim()) e.service = "Select service / product";
    if (!form.message.trim()) e.message = "Please add a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = buildQuoteMessage({
      name: form.name,
      phone: form.phone,
      service: form.service,
      model: form.model,
      message: form.message,
    });
    const url = buildWhatsAppUrl(msg);
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={onSubmit} noValidate className={`rounded-[24px] border border-slate-200 bg-white p-5 sm:p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ${compact ? "" : ""}`}>
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-sm">⦿</div>
        <div>
          <div className="text-sm font-black tracking-tight text-slate-900">Send Enquiry on WhatsApp</div>
          <div className="text-xs text-slate-500">We reply quickly on WhatsApp • No spam</div>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="space-y-1.5">
            <span className="text-xs font-bold tracking-widest text-slate-600">FULL NAME *</span>
            <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Your full name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base sm:text-sm outline-none focus:border-sky-500 focus:bg-white min-h-[48px]"/>
            {errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
          </label>
          <label className="space-y-1.5">
            <span className="text-xs font-bold tracking-widest text-slate-600">PHONE NUMBER *</span>
            <input inputMode="numeric" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder="10-digit mobile number" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base sm:text-sm outline-none focus:border-sky-500 focus:bg-white min-h-[48px]"/>
            {errors.phone && <span className="text-xs text-red-600">{errors.phone}</span>}
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="space-y-1.5">
            <span className="text-xs font-bold tracking-widest text-slate-600">MOBILE MODEL</span>
            <input value={form.model} onChange={(e)=>setForm({...form,model:e.target.value})} placeholder="e.g. Vivo Y18, Realme C15" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base sm:text-sm outline-none focus:border-sky-500 focus:bg-white min-h-[48px]"/>
          </label>
          <label className="space-y-1.5">
            <span className="text-xs font-bold tracking-widest text-slate-600">SERVICE / PRODUCT *</span>
            <select value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base sm:text-sm outline-none focus:border-sky-500 focus:bg-white min-h-[48px]">
              <option value="">Select service</option>
              <option>Mobile Screen Repair</option>
              <option>Charging Port Repair</option>
              <option>Battery Replacement</option>
              <option>Speaker / Mic Repair</option>
              <option>Camera Repair</option>
              <option>Software Issue</option>
              <option>On/Off Flex / Vellum</option>
              <option>iSpare &amp; Combo</option>
              <option>Spare Parts</option>
              <option>Mobile Accessories</option>
              <option>Other</option>
            </select>
            {errors.service && <span className="text-xs text-red-600">{errors.service}</span>}
          </label>
        </div>

        <label className="space-y-1.5">
          <span className="text-xs font-bold tracking-widest text-slate-600">MESSAGE *</span>
          <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Describe your issue, model, or product needed..." rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base sm:text-sm outline-none focus:border-sky-500 focus:bg-white resize-none min-h-[110px]"/>
          {errors.message && <span className="text-xs text-red-600">{errors.message}</span>}
        </label>

        <button type="submit" className="mt-1 w-full rounded-full bg-[#0B1220] px-6 py-4 text-sm font-black tracking-wide text-white hover:bg-black transition flex items-center justify-center gap-2 min-h-[52px] active:scale-[0.98]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.02 2C6.57 2 2.13 6.45 2.13 10.9c0 1.57.41 3.1 1.18 4.45L2 22l6.83-1.79a9.87 9.87 0 0 0 3.19.52h.01c5.45 0 9.89-4.45 9.89-9.9a9.78 9.78 0 0 0-2.87-6.92ZM12.03 19.1h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-4.05 1.06 1.08-3.95-.2-.4a8.07 8.07 0 0 1-1.23-4.6c0-4.48 3.65-8.13 8.14-8.13 2.17 0 4.21.85 5.74 2.39a8.05 8.05 0 0 1 2.38 5.74c0 4.48-3.65 8.13-8.13 8.13Z"/></svg>
          SEND ENQUIRY ON WHATSAPP
        </button>
        <p className="text-center text-xs text-slate-500">Opens WhatsApp with your details pre-filled • Works on desktop &amp; mobile</p>
      </div>
    </form>
  );
}
