import type { Project } from "@/data/portfolio";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project: p, index }: Props) {
  return (
    <div className="card p-8 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <span className="tag">{p.category}</span>
        <span className="text-5xl font-display text-accent/10 font-bold leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-text-primary mb-2 font-display">
        {p.title}
      </h3>
      <p className="text-[13px] text-accent italic mb-3">{p.problem}</p>
      <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
        {p.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {p.stack.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-0.5 bg-white/[0.04] rounded text-text-dim"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-[13px] text-text-dim leading-relaxed mb-5 border-t border-white/[0.04] pt-4">
        <span className="text-text-muted font-medium">Impact:</span> {p.value}
      </p>

      <div className="flex gap-2">
        {p.links.demo && (
          <a href={p.links.demo} className="btn-ghost">
            ▶ Demo
          </a>
        )}
        {p.links.github && (
          <a href={p.links.github} className="btn-ghost">
            Code
          </a>
        )}
        {p.links.casestudy && (
          <a href={p.links.casestudy} className="btn-ghost">
            Case Study
          </a>
        )}
      </div>
    </div>
  );
}
