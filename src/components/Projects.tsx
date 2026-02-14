import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    name: 'Cruxit',
    role: 'Founder & Developer',
    description:
      'A stock fundamental analysis platform built with Go, Next.js 14, PostgreSQL, and GCP. Integrated Vertex AI for intelligent analysis and natural language financial summaries. Features RESTful APIs with database caching strategies to optimize API costs.',
    technologies: ['Go', 'Next.js 14', 'PostgreSQL', 'GCP', 'Vertex AI'],
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
    <section id="projects" ref={ref} className="py-24 px-6 bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`p-8 rounded-xl border transition-all duration-300 group ${
                project.status === 'live'
                  ? 'bg-dark-card border-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5'
                  : 'bg-dark-card border-dark-border hover:border-dark-muted'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-dark-text">{project.name}</h3>
                  <p className="text-sm text-dark-muted">{project.role}</p>
                </div>
                {project.status === 'live' ? (
                  <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full border border-accent/20">
                    Live
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs font-mono bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                    In Progress
                  </span>
                )}
              </div>

              <p className="text-dark-secondary leading-relaxed mt-4 mb-6">
                {project.description}
              </p>

              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full"
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
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
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
