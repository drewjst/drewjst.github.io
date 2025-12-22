import { Card, Box, Stack, Link as MuiLink } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resumeData from '../data/resume.json';

export default function Header() {
  return (
    <Box component="header" sx={{ py: 3, borderBottom: '1px solid #e0e0e0' }}>
      <Box>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {resumeData.name}
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '1rem' }}>
          {resumeData.title}
        </p>

        {/* Contact Info */}
        <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <MuiLink href={`mailto:${resumeData.contact.email}`} underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon fontSize="small" /> {resumeData.contact.email}
          </MuiLink>
          <MuiLink href={`tel:${resumeData.contact.phone}`} underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon fontSize="small" /> {resumeData.contact.phone}
          </MuiLink>
          <MuiLink href={resumeData.contact.github} target="_blank" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GitHubIcon fontSize="small" /> GitHub
          </MuiLink>
          <MuiLink href={resumeData.contact.linkedin} target="_blank" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LinkedInIcon fontSize="small" /> LinkedIn
          </MuiLink>
        </Stack>

        {/* Summary Card */}
        <Card sx={{ p: 2, bgcolor: '#f5f5f5' }}>
          <p style={{ color: '#333', lineHeight: '1.6', fontSize: '0.875rem' }}>
            {resumeData.summary}
          </p>
        </Card>
      </Box>
    </Box>
  );
}
