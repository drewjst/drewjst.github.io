import { useScrollReveal } from '../hooks/useScrollReveal';
import resumeData from '../data/resume.json';

const categoryIcons: Record<string, string> = {
  'Architecture': '{}',
  'Languages': '</>',
  'Cloud & Infrastructure': '~$',
  'Reliability & Operations': '>>',
  'Leadership': '**',
};

const projects = [
  {
    name: 'Cruxit',
    tech: 'Go · Next.js · PostgreSQL · GCP',
    link: 'https://cruxit.finance/',
    status: 'live' as const,
  },
  {
    name: 'Tessera',
    tech: 'React · TypeScript · Node.js',
    status: 'in-progress' as const,
  },
  {
    name: 'Gamma Shift',
    tech: 'Options analytics engine',
    status: 'in-progress' as const,
  },
  {
    name: 'DeltaGov',
    tech: 'Governance tracking platform',
    status: 'in-progress' as const,
  },
];

export default function Resume() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="resume" ref={ref} className="py-14 px-6 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="gradient-text">Resume</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded mb-8" />

        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          {/* ── Sidebar ── */}
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            {/* Skills */}
            <div>
              <h3 className="text-[10px] font-bold text-dark-muted uppercase tracking-widest mb-3">
                Core Competencies
              </h3>
              <div className="space-y-3">
                {Object.entries(resumeData.skills).map(([category, items]) => (
                  <div key={category}>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-accent font-mono text-[10px] font-semibold bg-accent/10 px-1.5 py-0.5 rounded">
                        {categoryIcons[category] || '##'}
                      </span>
                      <h4 className="text-[10px] font-semibold text-dark-text uppercase tracking-wider">
                        {category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {(items as string[]).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[10px] font-medium text-dark-secondary bg-dark-bg rounded-full border border-dark-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="pt-3 border-t border-dark-border">
              <h3 className="text-[10px] font-bold text-dark-muted uppercase tracking-widest mb-2">
                Education
              </h3>
              {resumeData.education.map((edu) => (
                <div key={edu.school}>
                  <p className="font-semibold text-sm text-dark-text">{edu.school}</p>
                  <p className="text-[11px] text-dark-secondary mt-0.5">
                    {edu.degree} — {edu.field}
                  </p>
                  {edu.details && (
                    <p className="text-[11px] text-dark-muted mt-0.5">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Military */}
            <div className="pt-3 border-t border-dark-border">
              <h3 className="text-[10px] font-bold text-dark-muted uppercase tracking-widest mb-2">
                Military Service
              </h3>
              <p className="font-semibold text-sm text-dark-text">U.S. Army</p>
              <p className="text-[11px] text-dark-muted font-mono mt-0.5">Feb 2006 – Jul 2013</p>
              <div className="mt-1.5 space-y-0.5">
                <p className="text-[11px] text-dark-secondary">SIGINT Analyst &amp; Cavalry Scout</p>
                <p className="text-[11px] text-dark-secondary">Airborne / Jumpmaster Qualified</p>
                <p className="text-[11px] text-dark-secondary">Basic Leader Course — Honor Graduate</p>
                <p className="text-[11px] text-dark-secondary">OIF (Iraq) &amp; OEF (Afghanistan)</p>
              </div>
              <div className="flex gap-3 mt-2.5">
                <img src="/images/82nd.png" alt="82nd Airborne Division" className="w-10 h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" title="82nd Airborne Division" />
                <img src="/images/25th.jpg" alt="25th Infantry Division" className="w-10 h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" title="25th Infantry Division" />
                <img src="/images/11th.jpg" alt="11th Airborne Division" className="w-10 h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" title="11th Airborne Division" />
              </div>
            </div>

            {/* Projects */}
            <div className="pt-3 border-t border-dark-border">
              <h3 className="text-[10px] font-bold text-dark-muted uppercase tracking-widest mb-2">
                Projects
              </h3>
              <div className="space-y-2.5">
                {projects.map((project) => (
                  <div key={project.name} className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-sm text-dark-text hover:text-accent transition-colors"
                        >
                          {project.name}
                          <svg className="w-3 h-3 inline ml-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <p className="font-semibold text-sm text-dark-text">{project.name}</p>
                      )}
                      <p className="text-[10px] text-dark-muted mt-0.5">{project.tech}</p>
                    </div>
                    {project.status === 'live' ? (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono bg-accent/10 text-accent rounded-full border border-accent/20 shrink-0">
                        Live
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono bg-amber-500/10 text-amber-600 rounded-full border border-amber-500/20 shrink-0 whitespace-nowrap">
                        WIP
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ── Main Content: Experience ── */}
          <div>
            <h3 className="text-[10px] font-bold text-dark-muted uppercase tracking-widest mb-3">
              Professional Experience
            </h3>

            <div className="space-y-5">
              {resumeData.experience.map((job, index) => (
                <div key={`${job.company}-${job.title}`} className="relative pl-6 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 flex flex-col items-center">
                    <div
                      className={`w-2.5 h-2.5 rounded-full border-2 z-10 transition-colors duration-300 ${
                        index === 0
                          ? 'bg-accent border-accent'
                          : 'bg-dark-bg border-dark-border group-hover:border-accent'
                      }`}
                    />
                    {index < resumeData.experience.length - 1 && (
                      <div className="w-px bg-dark-border absolute top-3 left-[4px] h-[calc(100%+20px)]" />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-0.5">
                      <div>
                        <h4 className="text-[15px] font-bold text-dark-text leading-tight">{job.title}</h4>
                        <p className="text-accent text-sm font-medium">{job.company}</p>
                      </div>
                      <span className="text-[11px] text-dark-muted font-mono shrink-0">
                        {job.startDate} — {job.endDate}
                      </span>
                    </div>

                    <ul className="space-y-1 mt-1.5">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-dark-secondary text-[13px] leading-relaxed">
                          <span className="text-accent mt-0.5 shrink-0 text-[10px]">&#9657;</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
