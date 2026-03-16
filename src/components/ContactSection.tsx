export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-10">
      <div className="max-w-[700px] mx-auto text-center">
        <div className="section-label text-center">Get In Touch</div>
        <h2 className="font-display text-[clamp(32px,4vw,48px)] font-medium text-text-primary mb-5">
          Let&apos;s build something
          <br />
          <span className="text-accent italic">meaningful</span> together
        </h2>
        <p className="text-base text-text-muted leading-relaxed mb-10">
          Whether you&apos;re looking for a data &amp; AI professional to join
          your team, a collaborator for an analytics project, or want to discuss
          marketing science and customer intelligence — I&apos;d love to
          connect.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:karthicksubramani97@gmail.com" className="btn-primary">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/karthik-raj"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="btn-outline !border-text-dim !text-text-muted"
          >
            GitHub
          </a>
        </div>
        <div className="mt-6 text-[13px] text-text-dim">
          Toronto, ON · karthicksubramani97@gmail.com · +1 (437) 974-9725
        </div>
      </div>
    </section>
  );
}
