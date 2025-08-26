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
    image: "https://static.vecteezy.com/system/resources/thumbnails/003/334/882/small_2x/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg",
    tags: ["Java"],
    githubUrl: "https://github.com/JoharyManantena/ASASprint",
  },
  {
    title: "Site de gestion des ressources humaines",
    description:
      "Application web pour gérer les employés, les congés et les absences, avec rôles et validation intégrés.",
    image:
      "https://img.freepik.com/vecteurs-libre/gestionnaires-ressources-humaines-faisant-recherches-personnel-professionnel-loupe-ressources-humaines-travail-equipe-rh-illustration-concept-service-chasseur-tetes_335657-2061.jpg?semt=ais_hybrid&w=740",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/JoharyManantena/RH-CODE",
  },
  {
    title: "Plateforme de cryptomonnaie (web & mobile)",
    description:
      "Plateforme web et mobile pour le suivi des cours de crypto, la gestion des utilisateurs, dépôts et retraits.",
    image: "https://www.01net.com/app/uploads/2022/06/Meilleure-plateforme-crypto-monnaies.jpg",
    tags: [
      "Symphony",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Ionic",
      "Firebase",
      "Docker",
    ],
    githubUrl: "https://github.com/Toavina002401/Projet-Cloud-S5",
  },
  {
    title: "ERP Bench",
    description:
      "ERP basé sur Python, Frappe et Spring Boot avec intégration MariaDB et API Frappe.",
    image: "https://easof.com/files/erpnext-logo.png",
    tags: ["Python", "Frappe", "Spring Boot", "MariaDB"],
    githubUrl: "https://github.com/JoharyManantena/erp-bench",
  },
  {
    title: "eReserva - AppTemoin - WebService",
    description: "Projet de gestion de réservation (WebService). Utilisation du Framework AsaSprint",
    image: "https://erfolg-zentrum.de/storage/2021/03/billet-avion-1024x640.jpg",
    tags: ["WebService","Java","Postgres","JavaScript"],
    githubUrl: "https://github.com/JoharyManantena/eReserva",
  },
  {
    title: "Evaluation S6 CRM DayByDay",
    description:
      "Projet universitaire CRM : existant en Java + Vue, nouvelle version en PHP Laravel.",
    image: "https://api.placid.app/u/2wagk?hl=DaybydayCRM&subline=Open-source%20CRM&img=%24PIC%24https%3A%2F%2Fmadewithnetworkfra.fra1.digitaloceanspaces.com%2Fspatie-space-production%2F18012%2FdaybydayCRM.jpg",
    tags: ["Java", "Vue.js", "PHP", "Laravel", "SCSS", "Docker"],
    githubUrl: "https://github.com/JoharyManantena/EvaluationS6-CRM-dayByday",
  },
  {
    title: "Codage Son",
    description: "Analyse et traitement du son avec Python, Pandas et Numpy.",
    image: "https://www.blogperformance.com/wp-content/uploads/2023/04/forme-onde-sonore.png",
    tags: ["Python", "Pandas", "Numpy"],
    githubUrl: "https://github.com/JoharyManantena/Codage-Son",
  },
  {
    title: "eFootball Check Offside",
    description:
      "Projet C# ASP.NET avec gestion des matchs et détection de hors-jeu, basé sur Postgres.",
    image: "https://preview.redd.it/so-the-game-can-make-mistakes-on-offsides-or-can-this-be-v0-vdmbzje935te1.jpeg?width=1284&auto=webp&s=3c58698633ea125b4706aae162e3fcf2e150f55c",
    tags: ["C#", "ASP.NET", "Postgres", "JavaScript"],
    githubUrl: "https://github.com/JoharyManantena/eFootBall-CheckOffside",
  },
  {
    title: "eHetra Trano",
    description: "Application JavaEE avec Tomcat et Oracle pour gestion immobilière.",
    image: "https://concis.ma/wp-content/uploads/2018/03/222134402-city-map-wallpaper-1024x662.jpg",
    tags: ["JavaEE", "Tomcat", "Oracle", "SIG"],
    githubUrl: "https://github.com/JoharyManantena/eHetra-Trano",
  },
  {
    title: "Atelier Réparation PC (S3-S5)",
    description:
      "Application de gestion atelier de réparation PC (Java Spring Boot + Postgres).",
    image: "https://www.top-garage.fr/app/uploads/Fotolia_80724273_L-e1492710016126-1900x1016-1.jpg",
    tags: ["Java", "Spring Boot", "Postgres"],
    githubUrl: "https://github.com/JoharyManantena/ProjetS3S5-Atelier_Reparation_PC",
  },
  {
    title: "TP Firebase",
    description: "Projet simple basé sur Firebase et HTML.",
    image: "https://cdn.iconscout.com/icon/free/png-256/free-firebase-3521427-2944871.png",
    tags: ["Firebase", "HTML"],
    githubUrl: "https://github.com/JoharyManantena/Tp-Firebase",
  },
  {
    title: "Cinema Servlet",
    description: "Projet Java Servlet avec Tomcat pour gestion de cinéma.",
    image: "https://img.freepik.com/premium-psd/3d-render-cinema-ticket-popup-from-smartphone-with-booking-tickets-online_252008-535.jpg",
    tags: ["Java", "Servlet", "Tomcat"],
    githubUrl: "https://github.com/JoharyManantena/CinemaServlet",
  },
  {
    title: "Helico Perl",
    description: "Projet avec interface Tkinter et scripts Perl.",
    image: "https://play-lh.googleusercontent.com/MZrDxK7He8eWUv0inPti8FAb8f8i_L_8dcVtNnOwqkCBsqP21hfECI0XanTGkYoO9Vw=w526-h296-rw",
    tags: ["Perl", "Tkinter"],
    githubUrl: "https://github.com/JoharyManantena/Helico_Perl",
  },
  {
    title: "Chrono",
    description: "Projet C++ avec interface Web et Postgres , Gestion du temps des Automobiles par Chronomètre ",
    image: "https://st3.depositphotos.com/1006753/19576/i/450/depositphotos_195767584-stock-photo-analog-stopwatch-on-black-background.jpg",
    tags: ["C++", "Web", "Postgres"],
    githubUrl: "https://github.com/JoharyManantena/Chrono",
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
  const [visibleProjects, setVisibleProjects] = useState(6);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length));
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
