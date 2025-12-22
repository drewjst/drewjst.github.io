export interface Contact {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
  details?: string;
}

export interface Skills {
  [category: string]: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: Contact;
  summary: string;
  skills: Skills;
  experience: WorkExperience[];
  education: Education[];
}

export interface CollapseItem {
  key: string;
  label: React.ReactNode;
  children: React.ReactNode;
}