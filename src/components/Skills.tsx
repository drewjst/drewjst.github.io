import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Chip, Box, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import resumeData from '../data/resume.json';

export default function Skills() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section style={{ py: 3, borderBottom: '1px solid #e0e0e0' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Skills
      </h2>
      <Box>
        {Object.entries(resumeData.skills).map(([category, skills], index) => (
          <Accordion 
            key={category} 
            expanded={expanded === category}
            onChange={handleChange(category)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3 style={{ fontWeight: 600 }}>{category}</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {skills.map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" />
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </section>
  );
}
