export interface Project {
  id: string;
  title: string;
  logo?: string;
  description: string;
  date?: string;
  image?: string[];
  stack: string[];
  url?: string;
  pdf?: string;
  github?: string;
  works: string[];
  workDetail?: string[];
  state?: string;
  status: string;
}
