import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import resumeData from '../data/resume.json';
import type { WorkExperience } from '../types/resume'

const parseHighlight = (text: string) => {
  const parts = [];
  let lastIndex = 0;
  // Regex to match markdown-style links: [text](url)
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Push text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Push the link component
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zed-accent underline hover:text-zed-text"
      >
        {match[1]}
      </a>
    );
    lastIndex = regex.lastIndex;
  }
  // Push remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : text;
};

export default function Experience() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-6 text-zed-text border-b border-zed-border pb-2">
        EXPERIENCE
      </h2>
      <div className="space-y-4">
        {resumeData.experience.map((job: WorkExperience, index) => (
          <Accordion
            key={`${job.company}-${job.title}`}
            defaultExpanded={index === 0}
            disableGutters
            elevation={0}
            square
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              '&.MuiAccordion-root': {
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                boxShadow: 'none',
                '&:before': { display: 'none' },
                margin: 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-zed-muted" />}
              sx={{
                padding: '0',
                minHeight: 'auto',
                '& .MuiAccordionSummary-content': { margin: '8px 0' },
                '&:hover': { backgroundColor: 'transparent' }
              }}
            >
              <div className="flex flex-col w-full pr-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold text-zed-text">{job.title}</h3>
                  <span className="text-zed-muted text-sm shrink-0 ml-4">
                    {job.startDate} — {job.endDate}
                  </span>
                </div>
                <p className="text-zed-accent text-sm font-medium">
                  {job.company}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0 16px 0' }}>
              <ul className="list-none space-y-2 pl-2 border-l border-zed-border ml-1">
                {job.highlights.map((highlight, index) => (
                  <li key={index} className="text-zed-text text-sm leading-relaxed relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zed-muted">
                    {parseHighlight(highlight)}
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
