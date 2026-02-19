import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    name: 'Cruxit',
    role: 'Founder & Developer',
    description:
      'Designed and built a full-stack stock fundamental analysis platform (Go, Next.js, PostgreSQL, GCP), including an idempotent nightly data pipeline with concurrent enrichment workers, batched conflict-safe upserts, and injection-safe dynamic API filtering. Integrated Vertex AI for financial summarization and implemented cost-efficient caching strategies.',
    technologies: ['Go', 'Next.js', 'PostgreSQL', 'GCP', 'Vertex AI'],
    link: 'https://cruxit.finance/',
    status: 'live' as const,
  },
  {
    name: 'Gamma Shift',
    role: 'Founder & Developer',
    description:
      'An options analytics engine focused on gamma exposure and dealer positioning. Provides real-time insight into options market dynamics to inform trading decisions.',
    technologies: [],
    status: 'in-progress' as const,
  },
  {
    name: 'DeltaGov',
    role: 'Founder & Developer',
    description:
      'A governance and policy tracking platform currently in development. Designed to make government activity more accessible and transparent.',
    technologies: [],
    status: 'in-progress' as const,
  },
];

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`p-6 rounded-xl border transition-all duration-300 group ${
                project.status === 'live'
                  ? 'bg-dark-card border-accent/20 hover:border-accent/50 shadow-sm hover:shadow-md'
                  : 'bg-dark-card border-dark-border hover:border-dark-muted'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-dark-text">{project.name}</h3>
                  <p className="text-xs text-dark-muted">{project.role}</p>
                </div>
                {project.status === 'live' ? (
                  <span className="px-2.5 py-0.5 text-xs font-mono bg-accent/10 text-accent rounded-full border border-accent/20">
                    Live
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 text-xs font-mono bg-amber-500/10 text-amber-600 rounded-full border border-amber-500/20">
                    In Progress
                  </span>
                )}
              </div>

              <p className="text-dark-secondary text-sm leading-relaxed mt-3 mb-5">
                {project.description}
              </p>

              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium text-sm transition-colors"
                >
                  Visit Project
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
