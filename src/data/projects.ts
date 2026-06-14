// Proyectos destacados mostrados en Projects/ProjectCard
export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  image?: string;
  category: 'ml' | 'bi' | 'engineering' | 'analytics';
  icon: string;
  featured: boolean;
}
