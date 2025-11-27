
export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Name of the Lucide icon
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string; // Made optional since we removed it in UI
  githubUrl?: string;
  liveUrl?: string;
}

export interface Publication {
  title: string;
  authors: string;
  conferenceOrJournal?: string;
  date: string;
  doiLink?: string;
  link?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface Profile {
  name: string;
  title: string;
  profilePicture: string;
  shortBio: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  cvLink: string;
  socials: SocialLink[];
  skills: { category: string; items: string[] }[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  publications: Publication[];
  achievements: Achievement[];
}
