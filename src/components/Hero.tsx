export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative hero-grid">
      {/* Gradient orb background effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative text-center px-6 max-w-4xl mx-auto">
        <p className="text-accent font-mono text-sm md:text-base mb-4 animate-fade-in">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-slide-up text-dark-text">
          Andrew Stalker
        </h1>
        <p
          className="text-xl md:text-2xl text-dark-secondary mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          Principal Software Engineer
        </p>
        <p
          className="text-dark-muted max-w-2xl mx-auto text-base md:text-lg leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Driving technical direction for distributed, event-driven financial platforms.
          10+ years of engineering. Army veteran. Engineering leader.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#resume"
            className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-dark-border text-dark-secondary rounded-lg hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg className="w-5 h-5 text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
