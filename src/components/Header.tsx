import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resumeData from '../data/resume.json';

export default function Header() {
  return (
    <header className="py-6 border-b border-gray-200">
      <div>
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          {resumeData.name}
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          {resumeData.title}
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors hover:underline">
            <EmailIcon fontSize="small" /> {resumeData.contact.email}
          </a>
          <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors hover:underline">
            <PhoneIcon fontSize="small" /> {resumeData.contact.phone}
          </a>
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors hover:underline">
            <GitHubIcon fontSize="small" /> GitHub
          </a>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors hover:underline">
            <LinkedInIcon fontSize="small" /> LinkedIn
          </a>
        </div>

        {/* Summary Card */}
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {resumeData.summary}
          </p>
        </div>
      </div>
    </header>
  );
}
