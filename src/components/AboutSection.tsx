export default function AboutSection() {
  const cards = [
    { title: "Marketing Measurement", desc: "Attribution, incrementality, MMM, and experiment design" },
    { title: "Machine Learning", desc: "Predictive models, NLP, and production ML systems" },
    { title: "Customer Intelligence", desc: "CLV, segmentation, churn prediction, and personalization" },
    { title: "AI Applications", desc: "LLM agents, RAG systems, and decision automation" },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-10">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div>
          <div className="section-label">About</div>
          <h2 className="section-title">
            Analytical mind,
            <br />
            business instinct
          </h2>
          <p className="text-base text-text-muted/80 leading-relaxed mb-6">
            I&apos;m a Marketing Science Analyst and Data &amp; AI professional
            based in Toronto. I specialize in building customer-centric
            analytics systems that help brands measure what matters, optimize
            marketing investment, and make smarter decisions.
          </p>
          <p className="text-base text-text-muted/80 leading-relaxed mb-8">
            My work sits at the intersection of{" "}
            <strong className="text-text-secondary">statistical rigor</strong>{" "}
            and{" "}
            <strong className="text-text-secondary">business impact</strong> —
            from attribution modeling and incrementality analysis to ML-powered
            customer intelligence and LLM applications. I don&apos;t just build
            models; I build systems that change how organizations think about
            their customers.
          </p>
          <div className="flex gap-3 flex-wrap">
            {["Marketing Science", "Machine Learning", "Customer Intelligence", "LLM/GenAI", "Experimentation"].map(
              (t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((c) => (
            <div key={c.title} className="card p-6">
              <div className="text-sm font-semibold text-text-primary mb-2">
                {c.title}
              </div>
              <div className="text-[13px] text-text-dim leading-relaxed">
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
