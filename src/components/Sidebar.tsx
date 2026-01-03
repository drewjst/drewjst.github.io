import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import resumeData from '../data/resume.json';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6 md:border-r border-zed-border p-6 bg-zed-bg">
      {/* Profile / Name */}
      <div>
        <h1 className="text-2xl font-bold text-zed-text">
          {resumeData.name}
        </h1>
        <p className="text-sm text-zed-muted mt-1">
          {resumeData.title}
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-2 text-zed-text">
          <LocationOnIcon fontSize="small" className="text-zed-muted" />
          <span>Mount Vernon, WA</span>
        </div>

        <a
          href={`mailto:${resumeData.contact.email}`}
          className="flex items-center gap-2 text-zed-text hover:text-zed-accent transition-colors"
        >
          <EmailIcon fontSize="small" className="text-zed-muted" />
          <span className="truncate">{resumeData.contact.email}</span>
        </a>

        <a
          href={`tel:${resumeData.contact.phone}`}
          className="flex items-center gap-2 text-zed-text hover:text-zed-accent transition-colors"
        >
          <PhoneIcon fontSize="small" className="text-zed-muted" />
          <span>{resumeData.contact.phone}</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-3 text-sm">
        <a
          href={resumeData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zed-text hover:text-zed-accent transition-colors"
        >
          <GitHubIcon fontSize="small" className="text-zed-muted" />
          <span>GitHub</span>
        </a>

        <a
          href={resumeData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zed-text hover:text-zed-accent transition-colors"
        >
          <LinkedInIcon fontSize="small" className="text-zed-muted" />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* Download Resume */}
      <div className="mt-auto">
        <a
          href="/resume.pdf"
          download
          className="flex items-center justify-center gap-2 w-full py-2 px-4 border border-zed-border rounded-md text-sm text-zed-text hover:bg-zed-highlight transition-colors"
        >
          <DownloadIcon fontSize="small" />
          <span>Download PDF</span>
        </a>
      </div>
    </aside>
  );
}
