import { EXPERIENCE, EDUCATION } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 bg-bg-elevated">
      <div className="section-container grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20">
        {/* Left column */}
        <div>
          <div className="section-label">Experience</div>
          <h2 className="section-title">
            From data pipelines to executive dashboards
          </h2>
          <p className="section-desc mb-8">
            3+ years building marketing analytics systems, ML models, and data
            products across retail, ecommerce, and digital marketing domains.
          </p>

          <div className="mb-8">
            <div className="text-xs font-semibold text-text-dim tracking-wider uppercase mb-3">
              Education
            </div>
            {EDUCATION.map((e) => (
              <div key={e.degree} className="mb-3">
                <div className="text-sm font-medium text-text-secondary">
                  {e.degree}
                </div>
                <div className="text-xs text-text-dim">
                  {e.school} · {e.period}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <button className="btn-primary text-[13px] !px-5 !py-2.5">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </button>
            <a
              href="https://linkedin.com/in/karthik-raj"
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="#" className="btn-ghost">
              GitHub
            </a>
          </div>
        </div>

        {/* Right column — timeline */}
        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className="card p-7 border-l-2 !border-l-accent !rounded-l-none"
            >
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <div>
                  <div className="text-base font-semibold text-text-primary">
                    {exp.role}
                  </div>
                  <div className="text-[13px] text-accent">{exp.company}</div>
                </div>
                <div className="text-xs text-text-dim whitespace-nowrap">
                  {exp.period}
                </div>
              </div>
              <div className="text-xs text-text-dim mb-3">{exp.location}</div>
              <div className="flex flex-col gap-2">
                {exp.highlights.map((h) => (
                  <div
                    key={h}
                    className="text-[13px] text-text-muted leading-relaxed flex gap-2"
                  >
                    <span className="text-accent flex-shrink-0 mt-0.5">→</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
