import React from "react";
import { Code, Smartphone, Globe, Server, Database, Search } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategoryProps[] = [
  {
    title: "Langages",
    icon: <Code className="h-6 w-6 text-portfolio-primary" />,
    skills: ["C", "C#", "Java", "PHP", "JavaScript", "HTML", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Globe className="h-6 w-6 text-portfolio-primary" />,
    skills: ["Vue.js", "React", "React Native", "Bootstrap", "CSS", "Sass"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-portfolio-primary" />,
    skills: ["Node.js", "Spring", "Symphony", ".NET"],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="h-6 w-6 text-portfolio-primary" />,
    skills: ["React Native" , "Ionic"],
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6 text-portfolio-primary" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Oracle", "SQL Server"],
  },
  {
    title: "DevOps & Outils",
    icon: <Search className="h-6 w-6 text-portfolio-primary" />,
    skills: ["Docker", "Git", "GitHub", "Firebase", "Postman", "Swagger" , "Figma"],
  },
];

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Mes Compétences</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory 
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
