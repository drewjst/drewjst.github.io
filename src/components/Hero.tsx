export default function Hero() {
  return (
    <section id="about" className="pt-28 pb-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark-text mb-2">
          Andrew Stalker
        </h1>
        <p className="text-lg md:text-xl text-dark-secondary mb-6">
          Principal Software Engineer
        </p>

        <p className="text-dark-secondary leading-relaxed mb-3">
          Principal Software Engineer and{' '}
          <span className="text-accent font-medium">Army veteran</span> driving
          technical direction and cross-domain execution for distributed, event-driven
          financial platforms supporting Liberty Mutual's $7.1B Small Commercial portfolio.
        </p>
        <p className="text-dark-muted leading-relaxed text-sm mb-8">
          Hands-on distributed systems expertise (Java/Spring Boot, Go, event-driven microservices,
          AWS/GCP) combined with cross-team technical leadership, modernization strategy, and
          AI-assisted development adoption.
        </p>

        <div className="flex flex-row gap-3 justify-center">
          <a
            href="/Andrew_Stalker_Resume.pdf"
            download
            className="px-5 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-200 text-sm inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-dark-border text-dark-secondary rounded-lg hover:border-accent hover:text-accent transition-colors duration-200 text-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
