export default function Hero() {
  return (
    <section id="about" className="pt-28 pb-14 px-6 hero-wash">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-3">
          Andrew Stalker
        </h1>
        <p className="text-base md:text-lg font-medium text-dark-muted mb-6 tracking-wide">
          Principal Software Engineer
        </p>

        <p className="text-dark-secondary leading-relaxed mb-2">
          Driving technical direction and cross-domain execution for distributed, event-driven
          financial platforms supporting Liberty Mutual's $7.1B Small Commercial portfolio.
          Army veteran. 12+ engineers. 5 product domains.
        </p>
        <p className="text-dark-muted leading-relaxed text-sm mb-8">
          Java/Spring Boot, Go, AWS/GCP, event-driven microservices, cross-team technical leadership, AI-assisted development.
        </p>

        <div className="flex flex-row gap-3 justify-center">
          <a
            href="/Andrew_Stalker_Resume.pdf"
            download
            className="px-5 py-2.5 bg-accent text-white font-medium rounded-md hover:bg-accent-hover transition-colors duration-200 text-sm inline-flex items-center gap-2 shadow-stripe"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-dark-surface text-dark-secondary font-medium rounded-md hover:bg-dark-border/50 transition-colors duration-200 text-sm shadow-stripe"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
