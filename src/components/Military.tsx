import { useScrollReveal } from '../hooks/useScrollReveal';

const cards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'SIGINT Analyst',
    subtitle: 'SIGNALS INTELLIGENCE',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Cavalry Scout',
    subtitle: 'RECONNAISSANCE',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L12 6M12 6C9 6 6 9 3 15M12 6C15 6 18 9 21 15M3 15L6 14M21 15L18 14M8 13L5 18M16 13L19 18M10 12L8 20M14 12L16 20M12 10L11 20M12 10L13 20" />
      </svg>
    ),
    title: 'Airborne / Jumpmaster',
    subtitle: 'QUALIFIED',
  },
  {
    icon: <span className="text-3xl">🏅</span>,
    title: 'Honor Graduate',
    subtitle: 'BASIC LEADER COURSE',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.97.633-3.792 1.708-5.272" />
      </svg>
    ),
    title: 'OIF',
    subtitle: 'IRAQ 2006–2008',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21L12 3L21 21M3 21H21M3 21L7 13M21 21L17 13M7 13H17M7 13L12 7L17 13" />
      </svg>
    ),
    title: 'OEF',
    subtitle: 'AFGHANISTAN 2011–2012',
  },
];

export default function Military() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 px-6 bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent rounded" />
          <span className="text-accent font-mono text-sm font-semibold uppercase tracking-widest">
            Military Service
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-dark-text">
          US Army — Airborne / Jumpmaster
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Narrative */}
          <div className="space-y-5">
            <p className="text-dark-secondary leading-relaxed">
              I served in the United States Army from 2006 to 2013, deploying to Iraq during Operation Iraqi Freedom
              and Afghanistan during Operation Enduring Freedom.
            </p>
            <p className="text-dark-secondary leading-relaxed">
              As a <span className="text-dark-text font-medium">Signals Intelligence Analyst</span>, I led SIGINT teams
              conducting pattern recognition and real-time data analysis in combat environments—skills I apply directly
              to complex system debugging and architectural optimization today.
            </p>
            <p className="text-dark-secondary leading-relaxed">
              As a <span className="text-dark-text font-medium">Cavalry Scout</span> and{' '}
              <span className="text-dark-text font-medium">Scout Team Leader</span>, I managed mission-critical
              reconnaissance operations where precision and clarity were paramount. I earned my Airborne wings and
              Jumpmaster qualification, and graduated Basic Leader Course as{' '}
              <span className="text-dark-text font-medium">Honor Graduate</span>—a distinction for top-performing NCO candidates.
            </p>

            {/* Unit patches */}
            <div className="flex gap-5 pt-4">
              <img src="/images/82nd.png" alt="82nd Airborne Division" className="w-16 h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" title="82nd Airborne Division" />
              <img src="/images/25th.jpg" alt="25th Infantry Division" className="w-16 h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" title="25th Infantry Division" />
              <img src="/images/11th.jpg" alt="11th Airborne Division" className="w-16 h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" title="11th Airborne Division" />
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-xl bg-dark-card border border-dark-border hover:border-accent/30 transition-colors duration-300 text-center flex flex-col items-center gap-2"
              >
                <div className="text-dark-muted mb-1">{card.icon}</div>
                <h3 className="text-sm font-bold text-dark-text">{card.title}</h3>
                <p className="text-xs text-dark-muted uppercase tracking-wider">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
