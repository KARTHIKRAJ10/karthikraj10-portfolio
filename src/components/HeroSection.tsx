"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  if (!mounted) return <section id="hero" className="min-h-screen" />;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative px-6 md:px-10 pt-28 pb-20"
    >
      {/* Ambient glows */}
      <div className="absolute top-[10%] right-[10%] w-72 h-72 rounded-full bg-accent blur-[120px] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-72 h-72 rounded-full bg-accent-blue blur-[120px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-[800px] relative z-10">
        <div className="animate-fade-up mb-6">
          <span className="text-[13px] tracking-[3px] uppercase text-accent font-medium">
            Data & AI Professional · Toronto, Canada
          </span>
        </div>

        <h1 className="animate-fade-up [animation-delay:100ms] font-display text-[clamp(40px,6vw,68px)] font-medium leading-[1.1] text-text-primary mb-7">
          I build systems that turn{" "}
          <span className="text-accent italic">customer data</span> into{" "}
          <span className="text-accent italic">business decisions</span>
        </h1>

        <p className="animate-fade-up [animation-delay:200ms] text-lg text-text-muted leading-relaxed max-w-[580px] mb-10">
          Marketing science, machine learning, and customer intelligence —
          designed to improve how brands measure, optimize, and grow.
        </p>

        <div className="animate-fade-up [animation-delay:300ms] flex gap-4 flex-wrap">
          <button className="btn-primary" onClick={() => scrollTo("demos")}>
            Explore Live Demos
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button className="btn-outline" onClick={() => scrollTo("projects")}>
            View Projects
          </button>
        </div>

        <div className="animate-fade-up [animation-delay:400ms] flex gap-10 mt-12">
          {[
            { n: "3+", l: "Years Experience" },
            { n: "50M+", l: "Records Processed" },
            { n: "10+", l: "ML Models Deployed" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-semibold text-accent">
                {s.n}
              </div>
              <div className="text-xs text-text-dim mt-1 tracking-wide">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
