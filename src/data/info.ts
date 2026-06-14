// Datos personales: nombre, títulos, bio, links, ubicación
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    cv: string;
  };
}
