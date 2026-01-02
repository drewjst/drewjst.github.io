import resumeData from '../data/resume.json';

export default function Education() {
  return (
    <section className="py-6 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Education
      </h2>
      
      <div className="flex flex-col gap-6">
        {resumeData.education.map((degree, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {degree.degree} in {degree.field}
                </h3>
                <p className="text-gray-600">{degree.school}</p>
              </div>
              <p className="text-gray-500 text-sm mt-1 sm:mt-0">{degree.graduationDate}</p>
            </div>
            {degree.details && <p className="text-gray-500 text-sm">{degree.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
