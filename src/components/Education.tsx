import resumeData from '../data/resume.json';

export default function Education() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-6 text-zed-text border-b border-zed-border pb-2">
        EDUCATION
      </h2>
      <div className="space-y-6">
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-bold text-zed-text">
                {edu.school}
              </h3>
              <span className="text-zed-muted text-sm">
                {edu.graduationDate}
              </span>
            </div>
            <div className="text-sm text-zed-text mb-2">
              <span className="font-medium text-zed-accent">{edu.degree}</span> in {edu.field}
            </div>
            {edu.details && (
              <p className="text-sm text-zed-muted italic">
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
