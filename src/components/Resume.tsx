import { useScrollReveal } from '../hooks/useScrollReveal';
import resumeData from '../data/resume.json';

const categoryIcons: Record<string, string> = {
  'Architecture': '{}',
  'Languages': '</>',
  'Cloud & Infrastructure': '~$',
  'Reliability & Operations': '>>',
  'Leadership': '**',
};

export default function Resume() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="resume" ref={ref} className="py-16 px-6 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Resume</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded mb-10" />

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* ── Sidebar ── */}
          <aside className="space-y-6">
            {/* Skills */}
            <div>
              <h3 className="text-xs font-bold text-dark-muted uppercase tracking-widest mb-4">
                Core Competencies
              </h3>
              <div className="space-y-4">
                {Object.entries(resumeData.skills).map(([category, items]) => (
                  <div key={category}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent font-mono text-xs font-semibold bg-accent/10 px-1.5 py-0.5 rounded">
                        {categoryIcons[category] || '##'}
                      </span>
                      <h4 className="text-xs font-semibold text-dark-text uppercase tracking-wider">
                        {category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(items as string[]).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-[11px] font-medium text-dark-secondary bg-dark-bg rounded-full border border-dark-border"
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
            <div className="pt-2 border-t border-dark-border">
              <h3 className="text-xs font-bold text-dark-muted uppercase tracking-widest mb-3">
                Education
              </h3>
              {resumeData.education.map((edu) => (
                <div key={edu.school}>
                  <p className="font-semibold text-sm text-dark-text">{edu.school}</p>
                  <p className="text-xs text-dark-secondary mt-0.5">
                    {edu.degree} — {edu.field}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-dark-muted mt-0.5">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* ── Main Content: Experience ── */}
          <div>
            <h3 className="text-xs font-bold text-dark-muted uppercase tracking-widest mb-4">
              Professional Experience
            </h3>

            <div className="space-y-6">
              {resumeData.experience.map((job, index) => (
                <div key={`${job.company}-${job.title}`} className="relative pl-7 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full border-2 z-10 transition-colors duration-300 ${
                        index === 0
                          ? 'bg-accent border-accent'
                          : 'bg-dark-bg border-dark-border group-hover:border-accent'
                      }`}
                    />
                    {index < resumeData.experience.length - 1 && (
                      <div className="w-0.5 bg-dark-border absolute top-3 left-[5px] h-[calc(100%+24px)]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
                      <div>
                        <h4 className="text-base font-bold text-dark-text leading-tight">{job.title}</h4>
                        <p className="text-accent text-sm font-medium">{job.company}</p>
                      </div>
                      <span className="text-xs text-dark-muted font-mono shrink-0">
                        {job.startDate} — {job.endDate}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mt-2">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-dark-secondary text-sm leading-relaxed">
                          <span className="text-accent mt-0.5 shrink-0 text-xs">&#9657;</span>
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
