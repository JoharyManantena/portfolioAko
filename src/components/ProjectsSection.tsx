
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";
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
    title: "E-commerce Platform",
    description: "Plateforme e-commerce complète avec panier d'achat, système de paiement et gestion de produits en React et Node.js.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Application Mobile de Fitness",
    description: "Application mobile de suivi d'entraînement et de nutrition développée avec React Native et Firebase.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["React Native", "Firebase", "Redux", "Expo", "GraphQL"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser les données d'entreprise avec des graphiques dynamiques.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Vue.js", "D3.js", "TypeScript", "Firebase", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Portfolio Personnel",
    description: "Site portfolio moderne avec animations 3D et conception UI/UX responsive.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#"
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
