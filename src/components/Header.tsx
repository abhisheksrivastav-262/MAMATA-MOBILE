"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // body scroll lock + cleanup
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // close on route change and restore scroll + scroll top
  useEffect(() => {
    const id = setTimeout(() => {
      setOpen(false);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, 0);
    return () => clearTimeout(id);
  }, [pathname]);

  const closeMenu = () => {
    setOpen(false);
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };

  const handleNav = (href: string) => {
    closeMenu();
    // allow drawer animation to close then navigate; navigate immediately for SPA
    router.push(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[1000] border-b transition-all ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
          <div className="flex h-[60px] sm:h-[72px] items-center justify-between gap-2 sm:gap-4">
            {/* Brand - never cut on mobile */}
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 lg:flex-none">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-[#0B1220] flex items-center justify-center text-white font-black tracking-tighter text-[11px] sm:text-xs leading-none shrink-0">
                MM
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-black tracking-[-0.04em] text-[15px] min-[375px]:text-[16px] sm:text-[18px] leading-none text-[#0B1220] truncate sm:whitespace-nowrap">
                  MAMATA <span className="text-sky-600">MOBILE</span>
                </div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-500 -mt-0.5 truncate sm:whitespace-nowrap">
                  iSpare &amp; Combo
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1 shrink-0">
              {NAV_LINKS.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`px-3 py-2 rounded-full text-[13px] xl:text-sm font-medium transition whitespace-nowrap ${
                      active
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTAs - desktop only */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a
                href={`tel:+91${BUSINESS.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition whitespace-nowrap"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${BUSINESS.phoneIntl}`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B1220] px-4 xl:px-5 py-2.5 text-sm font-semibold text-white hover:bg-black transition shadow whitespace-nowrap"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.02 2C6.57 2 2.13 6.45 2.13 10.9c0 1.57.41 3.1 1.18 4.45L2 22l6.83-1.79a9.87 9.87 0 0 0 3.19.52h.01c5.45 0 9.89-4.45 9.89-9.9a9.78 9.78 0 0 0-2.87-6.92ZM12.03 19.1h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-4.05 1.06 1.08-3.95-.2-.4a8.07 8.07 0 0 1-1.23-4.6c0-4.48 3.65-8.13 8.14-8.13 2.17 0 4.21.85 5.74 2.39a8.05 8.05 0 0 1 2.38 5.74c0 4.48-3.65 8.13-8.13 8.13Z"/><path d="M17.08 14.3c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.59.13-.18.26-.68.85-.83 1.02-.15.18-.31.2-.57.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.31.39-.46.13-.15.18-.26.26-.43.09-.18.04-.33-.02-.46-.07-.13-.59-1.43-.81-1.95-.21-.51-.43-.44-.59-.45l-.5-.01c-.18 0-.46.07-.7.33-.24.26-.93.91-.93 2.22s.95 2.58 1.08 2.76c.13.18 1.87 2.86 4.53 4.01.63.27 1.13.44 1.51.56.64.2 1.21.17 1.67.11.51-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.18-.5-.31Z"/></svg>
                WhatsApp Us
              </a>
            </div>

            {/* Mobile hamburger - 44px touch target, above overlay */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden relative z-[10000] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shrink-0 active:scale-95 transition"
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-slate-900 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-slate-900 transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-slate-900 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay - fixed viewport, covers entire screen */}
      {open && (
        <div
          aria-hidden="true"
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 z-[9998] bg-black/40 backdrop-blur-[2px]"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          style={{ height: "100dvh" }}
        />
      )}

      {/* Mobile Drawer - FIXED to viewport, independent scroll, always visible regardless of page scroll */}
      <div
        aria-hidden={!open}
        className={`lg:hidden fixed top-0 right-0 z-[9999] h-[100dvh] max-h-[100dvh] w-[min(88vw,380px)] bg-white shadow-[-16px_0_48px_rgba(0,0,0,0.18)] border-l border-slate-200 flex flex-col transition-transform duration-300 ease-out will-change-transform ${open ? "translate-x-0" : "translate-x-full"} overflow-hidden`}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={{ height: "100dvh" }}
      >
        {/* Header inside drawer */}
        <div className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2 min-w-0">
            <div className="h-8 w-8 rounded-lg bg-[#0B1220] flex items-center justify-center text-white font-black text-[10px] shrink-0">MM</div>
            <div className="min-w-0">
              <div className="font-black text-[13px] leading-none text-[#0B1220] truncate">MAMATA MOBILE</div>
              <div className="text-[10px] tracking-widest text-slate-500 font-semibold truncate">iSpare &amp; Combo</div>
            </div>
          </div>
          <button
            aria-label="Close menu"
            onClick={closeMenu}
            className="h-10 w-10 grid place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Scrollable menu content - ONLY this scrolls */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain p-4 pb-6 safe-bottom" style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
          <nav className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className={`rounded-xl px-3 py-3.5 text-[13px] sm:text-sm font-semibold border text-center leading-tight min-h-[44px] flex items-center justify-center transition ${
                    active
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white active:bg-slate-100"
                  }`}
                >
                  {l.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={`tel:+91${BUSINESS.phone}`}
              onClick={closeMenu}
              className="rounded-xl bg-white border border-slate-200 px-3 py-3.5 text-center text-sm font-bold text-slate-900 min-h-[44px] flex items-center justify-center"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS.phoneIntl}`}
              target="_blank"
              onClick={closeMenu}
              className="rounded-xl bg-[#0B1220] px-3 py-3.5 text-center text-sm font-bold text-white min-h-[44px] flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => handleNav("/quote")}
            className="mt-3 w-full flex items-center justify-center min-h-[44px] rounded-xl bg-sky-600 px-4 py-3.5 text-center text-sm font-bold text-white"
          >
            Request Free Quote →
          </button>

          <div className="mt-4 rounded-2xl bg-slate-50 border border-slate-200 p-4">
            <div className="text-xs font-bold text-slate-900">Visit us</div>
            <div className="mt-1 text-xs leading-relaxed text-slate-600">
              Shop No. 38, 1st Floor, Platinum Mall,<br/>Near Delhi Darbar Hotel,<br/>Grant Road East, Mumbai - 400004
            </div>
            <div className="mt-2 text-xs font-semibold text-slate-700">{BUSINESS.phoneDisplay} • {BUSINESS.email}</div>
          </div>

          <div className="mt-3 text-center text-xs text-slate-500 leading-relaxed px-2">
            {BUSINESS.addressShort}
          </div>
        </div>
      </div>
    </>
  );
}
