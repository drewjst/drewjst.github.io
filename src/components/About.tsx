import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: 'Faster TTM', label: 'Agentic AI' },
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-dark-secondary leading-relaxed text-lg">
              Principal Fullstack Software Engineer and{' '}
              <span className="text-accent font-medium">Army veteran</span> with
              over a decade of experience building greenfield products from scratch
              and scaling them into primary business drivers.
            </p>
            <p className="text-dark-secondary leading-relaxed">
              Currently leading a globally distributed 12-engineer team at{' '}
              <span className="text-dark-text font-medium">Liberty Mutual</span>—designing
              event-driven platforms processing 250K+ requests/hour, establishing
              technical standards adopted across the organization, and achieving
              zero-downtime releases and 30% faster time-to-market via Agentic AI.
            </p>
            <p className="text-dark-secondary leading-relaxed">
              Military SIGINT background sharpened the pattern recognition and
              pressure tolerance that drives my approach to complex system
              architecture and team leadership.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-dark-card border border-dark-border hover:border-accent/30 transition-colors duration-300"
              >
                <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-dark-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
