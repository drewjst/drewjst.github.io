const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '$7.1B', label: 'Portfolio Scale' },
  { value: '12+', label: 'Engineers Led' },
  { value: '30%', label: 'Faster TTM via AI' },
];

export default function Hero() {
  return (
    <section id="about" className="pt-28 pb-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          {/* Left: Name, title, summary */}
          <div>
            <p className="text-accent font-mono text-sm mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark-text mb-2">
              Andrew Stalker
            </h1>
            <p className="text-lg md:text-xl text-dark-secondary mb-6">
              Principal Software Engineer
            </p>

            <div className="space-y-3 mb-8 max-w-2xl">
              <p className="text-dark-secondary leading-relaxed">
                Principal Software Engineer and{' '}
                <span className="text-accent font-medium">Army veteran</span> driving
                technical direction and cross-domain execution for distributed, event-driven
                financial platforms supporting Liberty Mutual's $7.1B Small Commercial portfolio.
              </p>
              <p className="text-dark-secondary leading-relaxed text-sm">
                Hands-on distributed systems expertise (Java/Spring Boot, Go, event-driven microservices,
                AWS/GCP) combined with cross-team technical leadership, modernization strategy, and
                AI-assisted development adoption.
              </p>
            </div>

            <div className="flex flex-row gap-3">
              <a
                href="#resume"
                className="px-5 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-200 text-sm"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-dark-border text-dark-secondary rounded-lg hover:border-accent hover:text-accent transition-colors duration-200 text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-56">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-dark-card border border-dark-border hover:border-accent/30 transition-colors duration-300"
              >
                <p className="text-xl font-bold gradient-text mb-0.5">{stat.value}</p>
                <p className="text-[10px] text-dark-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
