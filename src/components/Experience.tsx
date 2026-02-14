import { useScrollReveal } from '../hooks/useScrollReveal';
import resumeData from '../data/resume.json';

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded mb-12" />

        <div className="space-y-8">
          {resumeData.experience.map((job, index) => (
            <div key={`${job.company}-${job.title}`} className="relative pl-8 md:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 z-10 transition-colors duration-300 ${
                    index === 0
                      ? 'bg-accent border-accent'
                      : 'bg-dark-bg border-dark-border group-hover:border-accent'
                  }`}
                />
                {/* Timeline connector line */}
                {index < resumeData.experience.length - 1 && (
                  <div className="w-0.5 bg-dark-border absolute top-4 left-[7px] h-[calc(100%+32px)]" />
                )}
              </div>

              {/* Content card */}
              <div className="p-6 rounded-xl bg-dark-card border border-dark-border hover:border-accent/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 gap-1">
                  <div>
                    <h3 className="text-xl font-bold text-dark-text">{job.title}</h3>
                    <p className="text-accent font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-dark-muted font-mono shrink-0">
                    {job.startDate} — {job.endDate}
                  </span>
                </div>

                {/* Military unit patches */}
                {job.company.includes('Army') && (
                  <div className="flex gap-4 my-4">
                    <img src="/images/82nd.png" alt="82nd Airborne Division" className="w-14 h-14 object-contain opacity-70 hover:opacity-100 transition-opacity" title="82nd Airborne Division" />
                    <img src="/images/25th.jpg" alt="25th Infantry Division" className="w-14 h-14 object-contain opacity-70 hover:opacity-100 transition-opacity" title="25th Infantry Division" />
                    <img src="/images/11th.jpg" alt="11th Airborne Division" className="w-14 h-14 object-contain opacity-70 hover:opacity-100 transition-opacity" title="11th Airborne Division" />
                  </div>
                )}

                <ul className="space-y-2 mt-4">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-dark-secondary text-sm leading-relaxed">
                      <span className="text-accent mt-0.5 shrink-0">&#9657;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
