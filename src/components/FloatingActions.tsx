"use client";
import { BUSINESS } from "@/lib/constants";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-[8999] flex flex-col gap-2 sm:gap-3 safe-bottom">
      <a
        href={`tel:+91${BUSINESS.phone}`}
        aria-label="Call Mamata Mobile"
        className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white border border-slate-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-xl transition active:scale-95"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B1220" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.1.39 2.18.8 3.2a2 2 0 0 1-.57 2.11L8.09 10.3a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.57c1 .41 2.1.68 3.2.8A2 2 0 0 1 22 16.92Z"/></svg>
      </a>
      <a
        href={`https://wa.me/${BUSINESS.phoneIntl}`}
        target="_blank"
        aria-label="WhatsApp Mamata Mobile"
        className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:shadow-xl transition hover:scale-105 active:scale-95"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.02 2C6.57 2 2.13 6.45 2.13 10.9c0 1.57.41 3.1 1.18 4.45L2 22l6.83-1.79a9.87 9.87 0 0 0 3.19.52h.01c5.45 0 9.89-4.45 9.89-9.9a9.78 9.78 0 0 0-2.87-6.92ZM12.03 19.1h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-4.05 1.06 1.08-3.95-.2-.4a8.07 8.07 0 0 1-1.23-4.6c0-4.48 3.65-8.13 8.14-8.13 2.17 0 4.21.85 5.74 2.39a8.05 8.05 0 0 1 2.38 5.74c0 4.48-3.65 8.13-8.13 8.13Z"/><path d="M17.08 14.3c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.59.13-.18.26-.68.85-.83 1.02-.15.18-.31.2-.57.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.31.39-.46.13-.15.18-.26.26-.43.09-.18.04-.33-.02-.46-.07-.13-.59-1.43-.81-1.95-.21-.51-.43-.44-.59-.45l-.5-.01c-.18 0-.46.07-.7.33-.24.26-.93.91-.93 2.22s.95 2.58 1.08 2.76c.13.18 1.87 2.86 4.53 4.01.63.27 1.13.44 1.51.56.64.2 1.21.17 1.67.11.51-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.18-.5-.31Z"/></svg>
      </a>
    </div>
  );
}
