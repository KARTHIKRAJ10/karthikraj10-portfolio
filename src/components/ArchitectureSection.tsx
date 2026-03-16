import { ARCHITECTURE_STEPS } from "@/data/portfolio";

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 px-6 md:px-10">
      <div className="section-container">
        <div className="section-label">How I Build</div>
        <h2 className="section-title">
          End-to-end system
          <br />
          thinking, not just models
        </h2>
        <p className="section-desc mb-12">
          Every project follows a structured approach — from problem framing
          through deployment — ensuring that technical solutions translate into
          measurable business outcomes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ARCHITECTURE_STEPS.map((step) => (
            <div key={step.phase} className="card p-6 relative">
              <div className="text-[32px] font-display text-accent/10 font-bold mb-2">
                {step.phase}
              </div>
              <h4 className="text-sm font-semibold text-text-primary mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-text-dim leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
