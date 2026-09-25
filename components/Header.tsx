"use client";
import { useState } from "react";
import { CONTACT_HREF, NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-paper/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="font-display text-xl text-primary md:text-2xl">
          {SITE.name}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] text-ink/80 transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
          <a href={CONTACT_HREF} className="btn-accent !px-5 !py-2.5 text-[15px]">
            Schedule a session
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full border border-primary/30 px-4 py-2 text-sm text-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-primary/10 bg-paper md:hidden">
          <ul className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-primary/10 py-3 font-display text-2xl text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a href={CONTACT_HREF} className="btn-accent w-full">
                Schedule a session
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
