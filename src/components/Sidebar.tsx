import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, Divider, Stack, Chip } from '@mui/material';
import resumeData from '../data/resume.json';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-80 flex-shrink-0 flex flex-col gap-6 md:border-r border-zed-border p-6 bg-zed-bg">
      {/* Profile / Name */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-zed-text">
          {resumeData.name}
        </h1>
        <p className="text-sm text-zed-muted mt-1">
          {resumeData.title}
        </p>
      </div>

      {/* Contact Info */}
      <Stack spacing={1} alignItems="center">
        <Chip
          icon={<LocationOnIcon />}
          label="Mount Vernon, WA"
          variant="outlined"
          size="small"
        />
        <Chip
          icon={<EmailIcon />}
          label={resumeData.contact.email}
          component="a"
          href={`mailto:${resumeData.contact.email}`}
          clickable
          variant="outlined"
          size="small"
        />
        <Chip
          icon={<PhoneIcon />}
          label={resumeData.contact.phone}
          component="a"
          href={`tel:${resumeData.contact.phone}`}
          clickable
          variant="outlined"
          size="small"
        />
      </Stack>

      {/* Social Links */}
      <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
        <Chip
          icon={<GitHubIcon />}
          label="GitHub"
          component="a"
          href={resumeData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          clickable
          variant="outlined"
          size="small"
        />
        <Chip
          icon={<LinkedInIcon />}
          label="LinkedIn"
          component="a"
          href={resumeData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          clickable
          variant="outlined"
          size="small"
        />
      </Stack>

      {/* Unit Patches */}
      <Stack spacing={2} alignItems="center" py={2} mt={4}>
        <Box
          component="img"
          src="/images/82nd.png"
          alt="82nd Airborne Division"
          sx={{
            width: 90,
            height: 90,
            objectFit: 'contain',
            opacity: 0.8,
            transition: 'opacity 0.2s',
            '&:hover': { opacity: 1 }
          }}
          title="82nd Airborne Division"
        />
        <Divider sx={{ width: '60%' }} />
        <Box
          component="img"
          src="/images/25th.jpg"
          alt="25th Infantry Division"
          sx={{
            width: 90,
            height: 90,
            objectFit: 'contain',
            opacity: 0.8,
            transition: 'opacity 0.2s',
            '&:hover': { opacity: 1 }
          }}
          title="25th Infantry Division"
        />
        <Divider sx={{ width: '60%' }} />
        <Box
          component="img"
          src="/images/11th.jpg"
          alt="11th Airborne Division"
          sx={{
            width: 90,
            height: 90,
            objectFit: 'contain',
            opacity: 0.8,
            transition: 'opacity 0.2s',
            '&:hover': { opacity: 1 }
          }}
          title="11th Airborne Division"
        />
      </Stack>
    </aside>
  );
}
