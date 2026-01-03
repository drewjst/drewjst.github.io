import resumeData from '../data/resume.json';

export default function Skills() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-6 text-zed-text border-b border-zed-border pb-2">
        SKILLS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(resumeData.skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-bold text-zed-accent mb-3 uppercase tracking-wider">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(items as string[]).map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-2 py-1 text-xs text-zed-text bg-zed-highlight rounded border border-zed-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
