import { Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import resumeData from '../data/resume.json';
import type { WorkExperience } from '../types/resume'

export default function Experience() {
  return (
    <section style={{ py: 3, borderBottom: '1px solid #e0e0e0' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Professional Experience
      </h2>
      <Box>
        {resumeData.experience.map((job: WorkExperience) => (
          <Accordion key={job.title} defaultExpanded={job === resumeData.experience[0]}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{job.title}</h3>
                <p style={{ color: '#666' }}>
                  {job.company} • {job.startDate} - {job.endDate}
                </p>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {job.highlights.map((highlight, index) => (
                  <li key={index} style={{ marginBottom: '0.75rem', color: '#333' }}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </section>
  );
}
