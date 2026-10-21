export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  available: boolean;
  cvUrl: string;
  about: string[];
  stats: { value: string; label: string }[];
  socials: Social[];
}

export interface Social {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'x' | 'mail';
}

export type SkillArea =
  | 'Frontend'
  | 'Backend'
  | 'Bases de datos'
  | 'DevOps y nube'
  | 'IA aplicada al desarrollo'
  | 'Arquitectura y testing';

export interface SkillGroup {
  area: SkillArea;
  description: string;
  skills: string[];
}

export type ProjectCategory = 'Fullstack' | 'Frontend' | 'Backend' | 'Móvil';

export interface Project {
  title: string;
  summary: string;
  category: ProjectCategory;
  /** Contexto del proyecto, por ejemplo el cliente o el programa de formación. */
  client?: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  stack?: string[];
}

export interface Education {
  title: string;
  institution: string;
  period: string;
}
