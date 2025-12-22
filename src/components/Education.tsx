import { Box, Card } from '@mui/material';
import resumeData from '../data/resume.json';

export default function Education() {
  return (
    <section style={{ py: 3, borderBottom: '1px solid #e0e0e0' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Education
      </h2>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {resumeData.education.map((degree, index) => (
          <Box key={index}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Box>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  {degree.degree} in {degree.field}
                </h3>
                <p style={{ color: '#666' }}>{degree.school}</p>
              </Box>
              <p style={{ color: '#666', fontSize: '0.875rem' }}>{degree.graduationDate}</p>
            </Box>
            {degree.details && <p style={{ color: '#666', fontSize: '0.875rem' }}>{degree.details}</p>}
          </Box>
        ))}
      </Box>
    </section>
  );
}
