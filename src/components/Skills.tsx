import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import resumeData from '../data/resume.json';

export default function Skills() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="py-6 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Skills
      </h2>
      <div className="space-y-4">
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <Accordion 
            key={category} 
            expanded={expanded === category}
            onChange={handleChange(category)}
            className="shadow-sm border border-gray-100 rounded-lg overflow-hidden before:hidden"
            disableGutters
            elevation={0}
            sx={{
              '&.MuiAccordion-root': {
                backgroundColor: 'white',
                border: '1px solid #f3f4f6',
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
              <h3 className="font-semibold text-gray-900 text-lg">{category}</h3>
            </AccordionSummary>
            <AccordionDetails className="bg-white p-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
