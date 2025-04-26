import React from "react";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

interface ExperienceItem {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  // — Projets —
  {
    type: "work",
    title: "Framework Java Web MVC - AsaSprint",
    organization: "Projet personnel",
    period: "2023 - 2025",
    description:
      "Développement d'un framework Java Web MVC personnalisé avec gestion des rôles, validation et routage pour accélérer la création d'applications d'entreprise.",
    technologies: ["Java"],
  },
  {
    type: "work",
    title: "Site de gestion des ressources humaines",
    organization: "ITUniversity",
    period: "2024",
    description:
      "Développement d'une application web pour gérer les employés, les congés et les absences, avec rôles et validation intégrés.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    type: "work",
    title: "Plateforme de cryptomonnaie",
    organization: "Projet en Groupe (4 personnes)",
    period: "Janvier 2025",
    description:
      "Développement d'une plateforme web et mobile pour le suivi des cours de crypto, gestion des utilisateurs, dépôts et retraits.",
    technologies: ["Symphony","Spring-boot","Postgres","React", "React Ionic", "Firebase", "Docker"],
  },

  // — Formations & Certifications —
  {
    type: "education",
    title: "Licence 3 Informatique - Développement",
    organization: "ITUniversity",
    period: "2022 - 2025 (en cours)",
    description:
      "Spécialisation en développement logiciel, architecture web, bases de données et cloud computing.",
  },
  {
    type: "education",
    title: "Gen AI Skills Certificate (Google Skill Boost Cloud)",
    organization: "Google",
    period: "Février 2025 (en cours)",
    description:
      "Formation en intelligence artificielle générative appliquée aux technologies cloud.",
  },
  {
    type: "education",
    title: "Baccalauréat série D",
    organization: "Lycée Manjary Soa Alasora",
    period: "2022",
    description:
      "Obtention du baccalauréat scientifique série D .",
  },
];

const TimelineItem: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
  const animationDelay = `${0.1 * index}s`;

  return (
    <div className="timeline-item animate-fade-in" style={{ animationDelay }}>
      <div className="timeline-dot" />

      <div className="ml-2">
        <div className="flex items-center text-sm text-foreground/60 mb-2">
          <span className="flex items-center">
            {item.type === "work" ? (
              <Briefcase className="h-4 w-4 mr-1 text-portfolio-primary" />
            ) : (
              <GraduationCap className="h-4 w-4 mr-1 text-portfolio-secondary" />
            )}
            {item.type === "work" ? "Projet" : "Formation"}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {item.period}
          </span>
        </div>

        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-lg text-foreground/80 mb-2">{item.organization}</p>
        <p className="mb-3 text-foreground/70">{item.description}</p>

        {item.technologies && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary/80"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => (
  <section id="experience" className="section">
    <div className="container mx-auto px-4">
      <h2 className="section-title">Parcours & Formations</h2>
      <div className="mt-12 max-w-3xl mx-auto">
        {experiences.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
