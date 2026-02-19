import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '$7.1B', label: 'Portfolio Scale' },
  { value: '12+', label: 'Engineers Led' },
  { value: '30%', label: 'Faster TTM via AI' },
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <p className="text-dark-secondary leading-relaxed text-lg">
              Principal Software Engineer and{' '}
              <span className="text-accent font-medium">Army veteran</span> driving
              technical direction and cross-domain execution for distributed, event-driven
              financial platforms supporting Liberty Mutual's $7.1B Small Commercial portfolio.
            </p>
            <p className="text-dark-secondary leading-relaxed">
              Partner with solution architects and product leadership to translate architectural
              strategy into high-impact, reliable delivery across five product areas, aligning 12+
              engineers around service boundaries, modernization sequencing, and production resilience
              in a regulated environment.
            </p>
            <p className="text-dark-secondary leading-relaxed">
              Hands-on distributed systems expertise (Java/Spring Boot, Go, event-driven microservices,
              AWS/GCP) combined with cross-team technical leadership, modernization strategy, and
              AI-assisted development adoption.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl bg-dark-card border border-dark-border hover:border-accent/30 transition-colors duration-300"
              >
                <p className="text-2xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-xs text-dark-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
