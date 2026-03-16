import { DEMOS } from "@/data/portfolio";

export default function LiveDemosSection() {
  return (
    <section id="demos" className="py-24 px-6 md:px-10">
      <div className="section-container">
        <div className="section-label">Live Demos</div>
        <h2 className="section-title">
          Experience the work.
          <br />
          Don&apos;t just read about it.
        </h2>
        <p className="section-desc mb-16">
          Interactive analytics applications you can explore right now. Each
          demo solves a real business problem with production-level data science.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DEMOS.map((d, i) => (
            <div
              key={i}
              className="card overflow-hidden rounded-2xl hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Mock preview */}
              <div
                className="h-56 relative flex items-center justify-center border-b border-border"
                style={{
                  background: `linear-gradient(135deg, ${d.color}15, ${d.color}05)`,
                }}
              >
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div
                  className="w-4/5 h-[70%] rounded-lg grid grid-cols-[1fr_2fr] gap-2 p-3 overflow-hidden"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    border: `1px solid ${d.color}20`,
                  }}
                >
                  <div className="flex flex-col gap-1.5">
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className="h-3 rounded"
                        style={{
                          background: `${d.color}${n === 1 ? "30" : "10"}`,
                          width: `${80 - n * 10}%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div
                      className="flex-1 rounded"
                      style={{
                        background: `${d.color}08`,
                        border: `1px solid ${d.color}15`,
                      }}
                    />
                    <div className="h-8 flex gap-1">
                      {[1, 2, 3].map((n) => (
                        <div
                          key={n}
                          className="flex-1 rounded"
                          style={{ background: `${d.color}${15 + n * 5}` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div
                  className="text-xs font-semibold tracking-wider uppercase mb-2"
                  style={{ color: d.color }}
                >
                  {d.subtitle}
                </div>
                <h3 className="text-2xl font-semibold text-text-primary mb-3 font-display">
                  {d.title}
                </h3>
                <p className="text-[13px] text-accent italic mb-3">{d.problem}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-5">
                  {d.description}
                </p>

                <div className="mb-5">
                  <div className="text-[11px] font-semibold text-text-dim tracking-wider uppercase mb-2.5">
                    What you can do
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {d.interactions.map((int) => (
                      <div
                        key={int}
                        className="text-xs text-text-muted flex items-center gap-1.5"
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: d.color }}
                        />
                        {int}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {d.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 bg-white/[0.04] rounded text-text-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="btn-primary text-[13px] !px-6 !py-2.5">
                    ▶ Try Live Demo
                  </button>
                  <a href="#" className="btn-ghost">
                    Code
                  </a>
                  <a href="#" className="btn-ghost">
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card mt-8 p-6 flex items-center gap-4 !border-dashed !border-accent/20">
          <p className="text-[13px] text-text-muted leading-relaxed">
            <strong className="text-accent">Demo Integration:</strong> Live
            demos are hosted on Streamlit Cloud / Hugging Face Spaces and can be
            embedded via iframe or linked externally. Each demo has its own
            GitHub repository with full documentation and sample datasets.
          </p>
        </div>
      </div>
    </section>
  );
}
