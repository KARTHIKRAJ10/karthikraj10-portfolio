import { FEATURED_PROJECTS } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10 bg-bg-elevated">
      <div className="section-container">
        <div className="section-label">Featured Projects</div>
        <h2 className="section-title">
          Building intelligence systems
          <br />
          that drive real outcomes
        </h2>
        <p className="section-desc mb-12">
          Each project solves a specific business problem — from marketing
          measurement to customer lifecycle optimization — using
          production-grade data science and engineering.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
