"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/data/portfolio";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const scrolled = scrollY > 50;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className="font-display text-xl font-semibold text-text-primary cursor-pointer tracking-tight"
          onClick={() => scrollTo("hero")}
        >
          K<span className="text-accent">.</span>S
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`nav-link ${active === item.toLowerCase() ? "active" : ""}`}
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden bg-transparent border-none text-text-secondary cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="bg-transparent border-none text-text-secondary text-2xl font-display cursor-pointer hover:text-accent transition-colors"
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
