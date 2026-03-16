import { SKILLS } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10 bg-bg-elevated">
      <div className="section-container">
        <div className="section-label">Skills &amp; Expertise</div>
        <h2 className="section-title">
          Full-spectrum data
          <br />
          &amp; AI capabilities
        </h2>
        <p className="section-desc mb-12">
          Technical depth across the analytics lifecycle — from statistical
          measurement and ML engineering to business intelligence and stakeholder
          communication.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category} className="card p-7">
              <h3 className="text-base font-semibold text-text-primary mb-4 font-display">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
