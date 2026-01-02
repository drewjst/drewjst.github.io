import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import resumeData from '../data/resume.json';
import type { WorkExperience } from '../types/resume'

export default function Experience() {
  return (
    <section className="py-6 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Professional Experience
      </h2>
      <div className="space-y-4">
        {resumeData.experience.map((job: WorkExperience, index) => (
          <Accordion
            key={`${job.company}-${job.title}`}
            defaultExpanded={index === 0}
            className="shadow-sm border border-gray-100 rounded-lg overflow-hidden before:hidden"
            disableGutters
            elevation={0}
            sx={{
              '&.MuiAccordion-root': {
                backgroundColor: 'white',
                border: '1px solid #f3f4f6', // gray-100
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                '&:before': {
                  display: 'none',
                },
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-gray-500" />}
              className="bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full pr-4">
                <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium text-gray-800">{job.company}</span> • {job.startDate} - {job.endDate}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails className="bg-white p-6">
              <ul className="list-disc pl-5 space-y-2">
                {job.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {highlight}
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
