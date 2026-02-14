import { useScrollReveal } from '../hooks/useScrollReveal';
import resumeData from '../data/resume.json';

const categoryIcons: Record<string, string> = {
  'Languages & Frameworks': '</>',
  'Cloud & Infrastructure': '~$',
  'Data & APIs': '::',
  'Observability & Operations': '>>',
  'Leadership': '**',
};

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(resumeData.skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 rounded-xl bg-dark-card border border-dark-border hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent font-mono text-sm font-semibold bg-accent/10 px-2 py-1 rounded">
                  {categoryIcons[category] || '##'}
                </span>
                <h3 className="text-sm font-semibold text-dark-text uppercase tracking-wider">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-dark-secondary bg-dark-bg rounded-full border border-dark-border group-hover:border-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
