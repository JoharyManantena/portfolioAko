
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
  {
    type: "work",
    title: "Développeur Full Stack Senior",
    organization: "Tech Solutions Inc.",
    period: "2022 - Présent",
    description: "Développement d'applications web à grande échelle en utilisant React, Node.js et AWS. Leadership technique d'une équipe de 5 développeurs.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
  },
  {
    type: "work",
    title: "Développeur Mobile",
    organization: "MobileApp Studio",
    period: "2020 - 2022",
    description: "Conception et développement d'applications mobiles natives et cross-platform pour iOS et Android.",
    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "Redux"]
  },
  {
    type: "work",
    title: "Développeur Frontend",
    organization: "Digital Agency",
    period: "2018 - 2020",
    description: "Implémentation d'interfaces utilisateur modernes et réactives pour divers clients.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack", "REST API"]
  },
  {
    type: "education",
    title: "Master en Développement Web",
    organization: "Université de Technologie",
    period: "2016 - 2018",
    description: "Spécialisation en développement web avancé et architecture logicielle.",
  },
  {
    type: "education",
    title: "Licence en Informatique",
    organization: "École Polytechnique",
    period: "2013 - 2016",
    description: "Formation en algorithmique, structures de données et développement logiciel.",
  }
];

const TimelineItem: React.FC<{ item: ExperienceItem, index: number }> = ({ item, index }) => {
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
            {item.type === "work" ? "Expérience" : "Formation"}
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

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Parcours</h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {experiences.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
