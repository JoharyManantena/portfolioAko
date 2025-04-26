
import React from "react";
import { Code, Smartphone, Globe, Server, Database, Search } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategoryProps[] = [
  {
    title: "Frontend",
    icon: <Globe className="h-6 w-6 text-portfolio-primary" />,
    skills: ["React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "SASS", "Redux", "Next.js"]
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-portfolio-primary" />,
    skills: ["Node.js", "Express", "NestJS", "PHP", "Laravel", "Python", "Django", "REST API", "GraphQL"]
  },
  {
    title: "Mobile",
    icon: <Smartphone className="h-6 w-6 text-portfolio-primary" />,
    skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Expo", "Mobile UI Design", "App Store Deployment"]
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6 text-portfolio-primary" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Elasticsearch", "ORM (Prisma, Sequelize)"]
  },
  {
    title: "DevOps & Tools",
    icon: <Code className="h-6 w-6 text-portfolio-primary" />,
    skills: ["Git", "Docker", "CI/CD", "AWS", "Heroku", "Netlify", "Vercel", "Linux", "Testing (Jest, Cypress)"]
  },
  {
    title: "UX/UI Design",
    icon: <Search className="h-6 w-6 text-portfolio-primary" />,
    skills: ["Figma", "Adobe XD", "Sketch", "Responsive Design", "Prototyping", "UI Animation", "Usability Testing"]
  }
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
