import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Framework Java Web MVC - AsaSprint",
    description:
      "Développement d'un framework Java Web MVC personnalisé avec gestion des rôles, validation et routage pour accélérer la création d'applications d'entreprise.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c", // Image dev Java
    tags: ["Java"],
    githubUrl: "https://github.com/JoharyManantena/ASASprint",
    // liveUrl: "#",
  },
  {
    title: "Site de gestion des ressources humaines",
    description:
      "Développement d'une application web pour gérer les employés, les congés et les absences, avec rôles et validation intégrés.",
    image: "https://img.freepik.com/vecteurs-libre/gestionnaires-ressources-humaines-faisant-recherches-personnel-professionnel-loupe-ressources-humaines-travail-equipe-rh-illustration-concept-service-chasseur-tetes_335657-2061.jpg?semt=ais_hybrid&w=740", // Image RH/web app
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/JoharyManantena/RH-CODE",
    // liveUrl: "#",
  },
  {
    title: "Plateforme de cryptomonnaie (web & mobile)",
    description:
      "Développement d'une plateforme web et mobile pour le suivi des cours de crypto, la gestion des utilisateurs, les dépôts et retraits.",
    image: "https://www.01net.com/app/uploads/2022/06/Meilleure-plateforme-crypto-monnaies.jpg", // Image crypto / mobile
    tags: ["Symphony", "Spring Boot", "PostgreSQL", "React", "Ionic", "Firebase", "Docker"],
    githubUrl: "https://github.com/Toavina002401/Projet-Cloud-S5",
    // liveUrl: "#",
  },
];

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="project-card">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <p className="text-foreground/70 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                Code
              </a>
            </Button>
          )}

          {liveUrl && (
            <Button asChild size="sm" className="bg-portfolio-primary hover:bg-portfolio-secondary">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Mes Projets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="flex justify-center">
            <Button
              onClick={showMoreProjects}
              variant="outline"
              className="mt-4 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"
            >
              Voir plus de projets
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
